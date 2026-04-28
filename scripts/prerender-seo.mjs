#!/usr/bin/env node
/**
 * Pre-render SEO: Generates per-route HTML files with unique meta tags
 * baked into the <head> so Googlebot sees correct title/description/canonical
 * without needing to execute JavaScript.
 *
 * Runs after `vite build` — reads dist/index.html as template,
 * creates dist/{route}/index.html for each route.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://artedim.com";
const SITE_NAME = "Arte y Dimensiones";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/general/logoarteydim.jpg`;

// ── Load data sources ──
const services = JSON.parse(readFileSync(join(__dirname, "..", "src", "data", "services.json"), "utf8"));
const projects = JSON.parse(readFileSync(join(__dirname, "..", "src", "data", "projects.json"), "utf8"));

// Blog posts metadata — kept in sync with src/data/blogs.ts (only meta fields needed for prerender)
const blogPosts = [
  {
    slug: "arquitecto-comercial-panama",
    title: "Que Hace un Arquitecto Comercial en Panama y Por Que Tu Negocio lo Necesita",
    metaDescription: "Descubre que hace un arquitecto comercial en Panama, como transforma tu negocio y por que contratar un estudio de arquitectura es la mejor inversion para tu empresa.",
    keywords: ["arquitecto Panama", "arquitecto corporativo", "estudio de arquitectura Panama", "arquitecto comercial Panama"],
  },
  {
    slug: "diseno-locales-comerciales-panama",
    title: "Diseno de Locales Comerciales en Panama: Cuanto Cuesta y Que Debes Exigirle a tu Arquitecto",
    metaDescription: "Conoce cuanto cuesta disenar un local comercial en Panama, que incluye el servicio de un arquitecto y que debes exigir para proteger tu inversion.",
    keywords: ["locales comerciales Panama", "diseno comercial Panama", "costo arquitecto Panama", "remodelacion local comercial"],
  },
  {
    slug: "oficina-productividad-panama",
    title: "5 Senales de que tu Oficina en Panama Esta Frenando la Productividad de tu Empresa",
    metaDescription: "Descubre las 5 senales de que el diseno de tu oficina en Panama esta afectando la productividad de tu equipo y como solucionarlo con un rediseno inteligente.",
    keywords: ["diseno de oficinas", "remodelacion oficinas Panama", "diseno interior oficinas", "oficinas modernas Panama"],
  },
  {
    slug: "arquitectura-corporativa-panama",
    title: "Arquitectura Corporativa en Panama: Como un Espacio Bien Disenado Construye tu Marca y Aumenta tus Ventas",
    metaDescription: "Descubre como la arquitectura corporativa en Panama transforma tu espacio en una herramienta de branding y ventas. Casos reales y estrategia de diseno para empresas.",
    keywords: ["arquitectura comercial", "arquitectura institucional", "diseno corporativo Panama", "arquitectura empresarial"],
  },
];

// ── Route definitions ──
const routes = [
  // Static pages
  {
    path: "/",
    title: "Arte y Dimensiones - Arquitectura Corporativa e Institucional en Panamá",
    description: "Estudio de arquitectura especializado en diseño corporativo, comercial e institucional en Panamá. Oficinas que elevan la productividad y la marca.",
    keywords: "arquitectura corporativa Panamá, diseño de espacios comerciales Panamá, arquitectura institucional Panamá, estudio arquitectura Panama",
  },
  {
    path: "/nosotros",
    title: "Firma de Arquitectura Comercial y Corporativa en Panamá | Arte y Dimensiones",
    description: "Arte y Dimensiones: firma de arquitectura y arquitectos comerciales en Panamá con más de 26 años de experiencia. 150+ proyectos y 410,000+ m² diseñados.",
    keywords: "firma de arquitectura panamá, arquitectos comerciales panamá, estudio de arquitectura panamá, arquitectos corporativos panamá",
    ogImage: "/images/portfolio/SBMP-15.jpg",
  },
  {
    path: "/equipo",
    title: "Nuestro Equipo | Arte y Dimensiones",
    description: "Conozca al equipo de Arte y Dimensiones: 12 profesionales con más de 25 años de experiencia en arquitectura comercial y corporativa en Panamá.",
    keywords: "equipo arquitectos Panamá, Arte y Dimensiones equipo, arquitectos corporativos Panamá",
    ogImage: "/images/team/fotoequipo.jpg",
  },
  {
    path: "/galeria",
    title: "Galería de Proyectos | Arte y Dimensiones",
    description: "Galería de diseños conceptuales y proyectos de arquitectura corporativa y comercial en Panamá por Arte y Dimensiones.",
    keywords: "galería arquitectura Panamá, proyectos arquitectónicos Panamá, diseño conceptual arquitectura",
  },
  {
    path: "/agenda",
    title: "Agenda tu Evaluación | Arte y Dimensiones",
    description: "Agenda una evaluación gratuita de tu proyecto arquitectónico en Ciudad de Panamá. Sin costo ni compromiso.",
    keywords: "evaluación arquitectónica Panamá, consulta arquitectura gratis Panamá, cita arquitecto Panamá",
  },
  // Services
  ...services.map((svc) => ({
    path: `/servicios/${svc.slug}`,
    title: `${svc.name} en Panamá | ${SITE_NAME}`,
    description: `${svc.tagline} — ${svc.keywords.slice(0, 2).join(", ")}`,
    keywords: svc.keywords.join(", "),
    ogImage: svc.heroImage,
  })),
  // Projects
  ...projects.map((proj) => ({
    path: `/proyectos/${proj.slug}`,
    title: `${proj.title} | ${SITE_NAME}`,
    description: proj.metaDescription,
    keywords: proj.keywords.join(", "),
    ogImage: proj.heroImage,
  })),
  // Blog index page
  {
    path: "/blog",
    title: `Blog de Arquitectura Comercial y Corporativa en Panama | ${SITE_NAME}`,
    description: "Articulos sobre arquitectura comercial, corporativa e institucional en Panama. Disenos de oficinas, locales comerciales y espacios productivos por Arte y Dimensiones.",
    keywords: "blog arquitectura panama, articulos arquitectura comercial, diseno corporativo panama, blog arte y dimensiones",
  },
  // Blog posts
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
  })),
  // Team members (we generate stubs — the actual name/role comes from JS but at least canonical + basic meta are correct)
  ...["juan-manuel-rodriguez","alejandra-arosemena","jose-antonio-rodriguez","mitzenia-ortega","roxana-castillo","david-frias","luis-morales","cesar-rodriguez","sergio-cardenas","marien-rojas","arnel-perez","maria-somoza"].map((slug) => {
    const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
      path: `/equipo/${slug}`,
      title: `${name} | Equipo ${SITE_NAME}`,
      description: `Conozca a ${name}, profesional del equipo de Arte y Dimensiones. Arquitectura corporativa y comercial en Panamá.`,
      keywords: `${name}, arquitecto Panama, Arte y Dimensiones`,
    };
  }),
];

// ── Read template ──
const templatePath = join(DIST, "index.html");
if (!existsSync(templatePath)) {
  console.error("❌ dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}
const template = readFileSync(templatePath, "utf8");

// ── Generate per-route HTML ──
let count = 0;

for (const route of routes) {
  if (route.path === "/") continue; // homepage is already dist/index.html

  const canonicalUrl = `${BASE_URL}${route.path}`;
  const ogImage = route.ogImage
    ? (route.ogImage.startsWith("http") ? route.ogImage : `${BASE_URL}${route.ogImage}`)
    : DEFAULT_OG_IMAGE;
  const fullTitle = `${route.title}`;

  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  );

  // Replace meta keywords
  if (route.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*"/,
      `<meta name="keywords" content="${route.keywords}"`
    );
  }

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${fullTitle}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${ogImage}"`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${fullTitle}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${ogImage}"`
  );

  // Write file
  const dir = join(DIST, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");
  count++;
}

console.log(`\n✅ Pre-rendered ${count} route HTML files with unique SEO meta tags.`);
console.log(`📁 Output: ${DIST}/\n`);
