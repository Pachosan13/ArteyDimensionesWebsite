/**
 * i18n route model.
 *
 * Spanish lives at the root (`/nosotros`) because those URLs are already indexed —
 * moving them would throw away their ranking. English lives under `/en` with English
 * slugs (`/en/about`), because English slugs are what rank in English.
 *
 * This module is pure TypeScript with no React or DOM dependency, so the build-time
 * pre-render script can import it and stay in lockstep with the app.
 */

export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";
export const EN_PREFIX = "/en";

/** BCP-47 tags used for hreflang and og:locale. */
export const HREFLANG: Record<Locale, string> = { es: "es", en: "en" };
export const OG_LOCALE: Record<Locale, string> = { es: "es_PA", en: "en_US" };
export const HTML_LANG: Record<Locale, string> = { es: "es", en: "en" };

export type Section =
  | "home"
  | "services"
  | "projects"
  | "about"
  | "team"
  | "teamMember"
  | "gallery"
  | "blog"
  | "blogPost"
  | "contact";

/** The URL segment for each section, per locale. Empty string = the locale root. */
const SEGMENT: Record<Section, Record<Locale, string>> = {
  home: { es: "", en: "" },
  services: { es: "servicios", en: "services" },
  projects: { es: "proyectos", en: "projects" },
  about: { es: "nosotros", en: "about" },
  team: { es: "equipo", en: "team" },
  teamMember: { es: "equipo", en: "team" },
  gallery: { es: "galeria", en: "gallery" },
  blog: { es: "blog", en: "blog" },
  blogPost: { es: "blog", en: "blog" },
  contact: { es: "agenda", en: "contact" },
};

/** Sections whose leaf slug differs between locales. */
type TranslatedSlugSection = "services" | "blogPost";

const SLUG_MAP: Record<TranslatedSlugSection, Array<Record<Locale, string>>> = {
  services: [
    { es: "arquitectura-comercial", en: "commercial-architecture" },
    { es: "arquitectura-corporativa", en: "corporate-architecture" },
    { es: "space-planning", en: "space-planning" },
    { es: "diseno-de-oficinas", en: "office-design" },
  ],
  blogPost: [
    { es: "arquitecto-comercial-panama", en: "commercial-architect-panama" },
    { es: "diseno-locales-comerciales-panama", en: "retail-space-design-panama" },
    { es: "oficina-productividad-panama", en: "office-design-productivity-panama" },
    { es: "arquitectura-corporativa-panama", en: "corporate-architecture-panama" },
  ],
};

/**
 * Project and team slugs are proper nouns (Cemento Chagres, Juan Manuel Rodríguez),
 * so they are identical across locales and need no mapping.
 */
function hasTranslatedSlugs(section: Section): section is TranslatedSlugSection {
  return section === "services" || section === "blogPost";
}

/** Translate a leaf slug between locales. Unknown slugs pass through unchanged. */
export function translateSlug(section: Section, slug: string, from: Locale, to: Locale): string {
  if (from === to || !hasTranslatedSlugs(section)) return slug;
  const entry = SLUG_MAP[section].find((pair) => pair[from] === slug);
  return entry ? entry[to] : slug;
}

/** All valid slugs for a section in a given locale (used by the pre-render script). */
export function slugsFor(section: TranslatedSlugSection, locale: Locale): string[] {
  return SLUG_MAP[section].map((pair) => pair[locale]);
}

export interface ParsedRoute {
  locale: Locale;
  section: Section;
  /** Leaf slug, expressed in `locale`. Absent for index sections. */
  slug?: string;
}

function stripTrailingSlash(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = stripTrailingSlash(pathname);
  return path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`) ? "en" : "es";
}

/**
 * Parse a pathname into (locale, section, slug). Returns null for paths that do not
 * match a known route, so callers can fall through to a 404 rather than guessing.
 */
export function parsePath(pathname: string): ParsedRoute | null {
  const locale = getLocaleFromPath(pathname);
  let path = stripTrailingSlash(pathname);

  if (locale === "en") path = path.slice(EN_PREFIX.length);
  if (path === "") return { locale, section: "home" };

  const [, head, tail] = path.split("/");
  if (!head) return { locale, section: "home" };

  // Find the section whose segment matches `head` in this locale. Index and detail
  // sections share a segment (`/blog` vs `/blog/:slug`), so the leaf decides.
  const candidates = (Object.keys(SEGMENT) as Section[]).filter(
    (section) => SEGMENT[section][locale] === head,
  );
  if (candidates.length === 0) return null;

  const detailSections: Partial<Record<Section, Section>> = {
    team: "teamMember",
    blog: "blogPost",
  };

  if (!tail) {
    // Index route: prefer the non-detail candidate (`blog`, not `blogPost`).
    const index = candidates.find((s) => !Object.values(detailSections).includes(s));
    return index ? { locale, section: index } : null;
  }

  // Detail route.
  const base = candidates.find((s) => !Object.values(detailSections).includes(s)) ?? candidates[0];
  const section = detailSections[base] ?? base;
  return { locale, section, slug: tail };
}

/** Build a path for a section in a locale. `slug` must already be in that locale. */
export function buildPath(section: Section, locale: Locale, slug?: string): string {
  const prefix = locale === "en" ? EN_PREFIX : "";
  const segment = SEGMENT[section][locale];

  if (!segment) return prefix || "/";

  const base = `${prefix}/${segment}`;
  return slug ? `${base}/${slug}` : base;
}

/**
 * The same page in the other language. This is what the language toggle and the
 * hreflang tags both use, so a visitor and a crawler always agree on the pairing.
 * Unknown paths fall back to the target locale's home rather than 404-ing the toggle.
 */
export function getAlternatePath(pathname: string, target: Locale): string {
  const parsed = parsePath(pathname);
  if (!parsed) return target === "en" ? EN_PREFIX : "/";
  if (parsed.locale === target) return stripTrailingSlash(pathname) || "/";

  const slug = parsed.slug
    ? translateSlug(parsed.section, parsed.slug, parsed.locale, target)
    : undefined;

  return buildPath(parsed.section, target, slug);
}

/** Absolute URL for a path, used for canonicals, hreflang and sitemap entries. */
export const BASE_URL = "https://artedim.com";

export function absoluteUrl(pathname: string): string {
  const path = stripTrailingSlash(pathname);
  return `${BASE_URL}${path === "/" ? "/" : path}`;
}
