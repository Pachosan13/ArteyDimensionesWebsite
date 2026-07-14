#!/usr/bin/env node
/**
 * Post-build SEO verification. Fails loudly rather than shipping a quietly broken site.
 *
 * Checks, over the real files in dist/:
 *   1. Every route emitted an index.html.
 *   2. hreflang is reciprocal — if A points at B, B must point back at A. Google
 *      discards non-reciprocal annotations silently, so this is the check that matters.
 *   3. Every hreflang / sitemap / canonical URL resolves to a file that exists.
 *   4. Canonicals are self-referential and unique (no two pages claiming the same one).
 *   5. Each page carries a title, description and JSON-LD.
 *   6. English pages are not leaking Spanish UI strings.
 */

import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://artedim.com";

const errors = [];
const warnings = [];

const fileFor = (url) => {
  const path = url.replace(BASE_URL, "") || "/";
  return join(DIST, path === "/" ? "" : path, "index.html");
};

const read = (url) => {
  const f = fileFor(url);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
};

const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

const hreflangs = (html) => {
  const out = {};
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    out[m[1]] = m[2];
  }
  return out;
};

// ── Collect every URL the sitemap claims ──
const sitemapPath = join(DIST, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  console.error("❌ dist/sitemap.xml missing");
  process.exit(1);
}
const sitemap = readFileSync(sitemapPath, "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`\nVerifying ${locs.length} URLs from sitemap.xml…\n`);

const seenCanonicals = new Map();

for (const loc of locs) {
  const html = read(loc);
  if (!html) {
    errors.push(`${loc} — sitemap lists it but no index.html was emitted`);
    continue;
  }

  // Title / description / schema present?
  const title = attr(html, /<title>([\s\S]*?)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!title) errors.push(`${loc} — no <title>`);
  if (!desc) errors.push(`${loc} — no meta description`);
  if (!html.includes('type="application/ld+json"')) errors.push(`${loc} — no JSON-LD`);

  if (title && title.length > 70) warnings.push(`${loc} — title is ${title.length} chars (>70)`);
  if (desc && (desc.length < 70 || desc.length > 170)) {
    warnings.push(`${loc} — description is ${desc.length} chars (aim 70–170)`);
  }

  // Canonical self-referential and unique?
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical) {
    errors.push(`${loc} — no canonical`);
  } else {
    if (canonical !== loc) errors.push(`${loc} — canonical points elsewhere: ${canonical}`);
    if (seenCanonicals.has(canonical)) {
      errors.push(`${loc} — duplicate canonical, also claimed by ${seenCanonicals.get(canonical)}`);
    }
    seenCanonicals.set(canonical, loc);
  }

  // lang attribute matches the locale the URL implies
  const lang = attr(html, /<html lang="([^"]*)"/);
  const expectedLang = loc.startsWith(`${BASE_URL}/en`) ? "en" : "es";
  if (lang !== expectedLang) errors.push(`${loc} — <html lang="${lang}">, expected "${expectedLang}"`);

  // hreflang: present, resolves, and reciprocal
  const alts = hreflangs(html);
  for (const key of ["es", "en", "x-default"]) {
    if (!alts[key]) errors.push(`${loc} — missing hreflang="${key}"`);
  }

  for (const [key, href] of Object.entries(alts)) {
    if (!read(href)) {
      errors.push(`${loc} — hreflang="${key}" points at ${href}, which has no page`);
      continue;
    }
    if (key === "x-default") continue;

    // Reciprocity: the page we point at must point back at us.
    const back = hreflangs(read(href));
    const selfLang = expectedLang;
    if (back[selfLang] !== loc) {
      errors.push(`${loc} — hreflang not reciprocal: ${href} lists hreflang="${selfLang}" as ${back[selfLang]}`);
    }
  }

  // English pages should not leak Spanish UI copy.
  if (expectedLang === "en") {
    const body = html.split("</head>")[1] ?? "";
    const leaks = ["Solicitar Propuesta", "Volver al Inicio", "Preguntas Frecuentes", "Nuestro Equipo", "Ver Proyecto"];
    for (const leak of leaks) {
      if (body.includes(leak)) errors.push(`${loc} — Spanish string leaked into English page: "${leak}"`);
    }
  }
}

// ── Report ──
if (warnings.length) {
  console.log(`⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 15)) console.log(`   · ${w}`);
  if (warnings.length > 15) console.log(`   … and ${warnings.length - 15} more`);
  console.log("");
}

if (errors.length) {
  console.error(`❌ ${errors.length} error(s):`);
  for (const e of errors.slice(0, 30)) console.error(`   · ${e}`);
  if (errors.length > 30) console.error(`   … and ${errors.length - 30} more`);
  console.error("");
  process.exit(1);
}

console.log(`✅ All ${locs.length} URLs pass: canonical, hreflang reciprocity, lang, title, description, JSON-LD.\n`);
