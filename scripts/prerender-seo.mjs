#!/usr/bin/env node
/**
 * Pre-render SEO.
 *
 * For every route in both locales, writes a `dist/{route}/index.html` whose <head> is
 * fully baked: title, description, canonical, hreflang, Open Graph, `<html lang>` and
 * the page's JSON-LD. Then regenerates `dist/sitemap.xml` with hreflang alternates.
 *
 * Two things this buys us that a client-only SPA cannot:
 *
 *   1. Googlebot gets correct per-page meta without executing JavaScript.
 *   2. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) generally do NOT run JavaScript,
 *      so schema injected by React is invisible to them. Baking it in is what makes the
 *      site legible to the engines that AEO is actually about.
 *
 * The route list comes from `src/i18n/manifest.ts` — the same module the React app reads
 * its <head> from. This script does not restate any metadata of its own, which is what
 * the previous version did (a hand-copied blog list "kept in sync with blogs.ts") and it
 * had already drifted.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { build } from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const BASE_URL = "https://artedim.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/general/logoarteydim.jpg`;

const HTML_LANG = { es: "es", en: "en" };
const OG_LOCALE = { es: "es_PA", en: "en_US" };

// ── Load the route manifest from TypeScript ──
// Bundling it here (rather than maintaining a parallel JS copy) is what guarantees the
// pre-rendered <head> and the client-rendered <head> cannot disagree.
async function loadManifest() {
  const tmp = join(ROOT, "node_modules", ".cache", "seo-manifest.mjs");
  mkdirSync(dirname(tmp), { recursive: true });

  await build({
    entryPoints: [join(ROOT, "src", "i18n", "manifest.ts")],
    outfile: tmp,
    bundle: true,
    format: "esm",
    platform: "node",
    target: "node18",
    loader: { ".json": "json" },
    logLevel: "silent",
  });

  const mod = await import(`file://${tmp}?t=${Date.now()}`);
  rmSync(tmp, { force: true });
  return mod.buildRouteManifest();
}

// ── HTML helpers ──
const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const escapeText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Replace an existing tag, or append before </head> if the template lacks it. */
function upsert(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `    ${replacement}\n  </head>`);
}

function renderRoute(template, route) {
  const canonical = `${BASE_URL}${route.path === "/" ? "/" : route.path}`;
  const ogImage = route.ogImage
    ? route.ogImage.startsWith("http")
      ? route.ogImage
      : `${BASE_URL}${route.ogImage}`
    : DEFAULT_OG_IMAGE;

  let html = template;

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${HTML_LANG[route.locale]}"`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(route.title)}</title>`);

  html = upsert(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  );
  html = upsert(
    html,
    /<meta name="keywords" content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="${escapeAttr(route.keywords)}" />`,
  );
  html = upsert(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
  );

  // hreflang: bidirectional, x-default on Spanish (Panama is the primary market).
  const alternates = [
    `<link rel="alternate" hreflang="es" href="${escapeAttr(route.alternates.es)}" />`,
    `<link rel="alternate" hreflang="en" href="${escapeAttr(route.alternates.en)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(route.alternates.es)}" />`,
  ].join("\n    ");

  html = html.replace(
    /<!-- seo:alternates:start -->[\s\S]*?<!-- seo:alternates:end -->/,
    `<!-- seo:alternates:start -->\n    ${alternates}\n    <!-- seo:alternates:end -->`,
  );

  const og = {
    "og:title": route.title,
    "og:description": route.description,
    "og:url": canonical,
    "og:image": ogImage,
    "og:type": route.ogType,
    "og:locale": OG_LOCALE[route.locale],
  };
  for (const [prop, content] of Object.entries(og)) {
    html = upsert(
      html,
      new RegExp(`<meta property="${prop}" content="[^"]*"\\s*/?>`),
      `<meta property="${prop}" content="${escapeAttr(content)}" />`,
    );
  }

  const twitter = {
    "twitter:title": route.title,
    "twitter:description": route.description,
    "twitter:image": ogImage,
  };
  for (const [name, content] of Object.entries(twitter)) {
    html = upsert(
      html,
      new RegExp(`<meta name="${name}" content="[^"]*"\\s*/?>`),
      `<meta name="${name}" content="${escapeAttr(content)}" />`,
    );
  }

  // Page JSON-LD. Tagged `data-seo-head` so React replaces exactly these on navigation
  // and leaves the site-wide Organization block in the template alone.
  const schemas = route.jsonLd
    .map((schema) => {
      const json = JSON.stringify(schema).replace(/</g, "\\u003c");
      return `<script type="application/ld+json" data-seo-head="true">${json}</script>`;
    })
    .join("\n    ");

  html = html.replace("</head>", `    ${schemas}\n  </head>`);

  return html;
}

// ── Sitemap ──
function renderSitemap(routes) {
  const urls = routes
    .map((route) => {
      const loc = `${BASE_URL}${route.path === "/" ? "/" : route.path}`;
      const links = [
        `      <xhtml:link rel="alternate" hreflang="es" href="${escapeAttr(route.alternates.es)}"/>`,
        `      <xhtml:link rel="alternate" hreflang="en" href="${escapeAttr(route.alternates.en)}"/>`,
        `      <xhtml:link rel="alternate" hreflang="x-default" href="${escapeAttr(route.alternates.es)}"/>`,
      ].join("\n");

      return [
        "   <url>",
        `      <loc>${escapeAttr(loc)}</loc>`,
        links,
        route.lastmod ? `      <lastmod>${route.lastmod}</lastmod>` : null,
        `      <changefreq>${route.changefreq}</changefreq>`,
        `      <priority>${route.priority.toFixed(1)}</priority>`,
        "   </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

// ── Main ──
const templatePath = join(DIST, "index.html");
if (!existsSync(templatePath)) {
  console.error("❌ dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

const template = readFileSync(templatePath, "utf8");

if (!template.includes("<!-- seo:alternates:start -->")) {
  console.error("❌ index.html is missing the seo:alternates markers — hreflang cannot be injected.");
  process.exit(1);
}

const routes = await loadManifest();

let written = 0;
for (const route of routes) {
  const html = renderRoute(template, route);

  // "/" is dist/index.html itself; every other route gets its own directory.
  const outDir = route.path === "/" ? DIST : join(DIST, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
  written++;
}

// 404 page. Vercel serves this (with a real 404 status) for any path that misses the
// filesystem — which, since every valid route above is a real file, means exactly the
// paths that should 404. `noindex` keeps Google from cataloguing junk URLs.
const notFound = template
  .replace(/<html lang="[^"]*"/, '<html lang="es"')
  .replace(/<title>[\s\S]*?<\/title>/, "<title>Página no encontrada | Arte y Dimensiones</title>")
  .replace("</head>", '    <meta name="robots" content="noindex, follow" />\n  </head>');
writeFileSync(join(DIST, "404.html"), notFound, "utf8");

writeFileSync(join(DIST, "sitemap.xml"), renderSitemap(routes), "utf8");

const es = routes.filter((r) => r.locale === "es").length;
const en = routes.filter((r) => r.locale === "en").length;

console.log(`\n✅ Pre-rendered ${written} routes (${es} es · ${en} en) with baked meta, hreflang and JSON-LD.`);
console.log(`🗺️  sitemap.xml written with ${routes.length} URLs + hreflang alternates.`);
console.log(`📁 Output: ${DIST}/\n`);
