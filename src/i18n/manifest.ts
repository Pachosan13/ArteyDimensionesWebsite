/**
 * The complete list of routes the site serves, in both locales, with the metadata and
 * JSON-LD each one needs.
 *
 * This is what the build-time pre-render script walks to emit per-route HTML, and what
 * the sitemap generator walks to emit `<url>` entries with hreflang alternates. It is
 * derived from the same content files and the same schema builders the React pages use,
 * so a page and its pre-rendered HTML cannot drift apart.
 */

import {
  LOCALES,
  absoluteUrl,
  buildPath,
  getAlternatePath,
  translateSlug,
  type Locale,
} from "./config";
import {
  getBlogPosts,
  getTeamMembers,
  localizeProject,
  localizeService,
  projects,
  services,
} from "./data";
import { PAGE_SEO } from "./seo";
import {
  articleSchema,
  blogSchema,
  breadcrumbSchema,
  faqSchema,
  fullTitle,
  homeCrumb,
  personSchema,
  professionalServiceSchema,
  projectSchema,
  sectionLabel,
  serviceSchema,
  websiteSchema,
} from "./schema";
import { UI } from "./ui";

type Schema = Record<string, unknown>;

export interface RouteEntry {
  path: string;
  locale: Locale;
  /** The `<title>` exactly as the browser will show it. */
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType: string;
  jsonLd: Schema[];
  /** Absolute URLs of this page in every locale, for hreflang and the sitemap. */
  alternates: Record<Locale, string>;
  priority: number;
  changefreq: string;
  lastmod?: string;
}

/**
 * Clamp a meta description to something a SERP will actually show. Cuts on a word
 * boundary rather than mid-word, because the tail is what a human reads.
 */
function clamp(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[.,;:—-]$/, "")}…`;
}

function alternatesFor(path: string): Record<Locale, string> {
  return {
    es: absoluteUrl(getAlternatePath(path, "es")),
    en: absoluteUrl(getAlternatePath(path, "en")),
  };
}

function entry(
  path: string,
  locale: Locale,
  rawTitle: string,
  description: string,
  keywords: string,
  jsonLd: Schema[],
  opts: { ogImage?: string; ogType?: string; priority?: number; changefreq?: string; lastmod?: string } = {},
): RouteEntry {
  return {
    path,
    locale,
    title: fullTitle(rawTitle, path),
    description,
    keywords,
    ogImage: opts.ogImage,
    ogType: opts.ogType ?? "website",
    jsonLd,
    alternates: alternatesFor(path),
    priority: opts.priority ?? 0.7,
    changefreq: opts.changefreq ?? "monthly",
    lastmod: opts.lastmod,
  };
}

/** Built once. The React pages look themselves up here rather than re-deriving metadata. */
let cached: RouteEntry[] | null = null;

export function routeManifest(): RouteEntry[] {
  if (!cached) cached = buildRouteManifest();
  return cached;
}

function normalize(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

/** The manifest entry for a pathname, or undefined for unknown paths (404s). */
export function getRouteEntry(pathname: string): RouteEntry | undefined {
  const target = normalize(pathname);
  return routeManifest().find((r) => r.path === target);
}

export function buildRouteManifest(): RouteEntry[] {
  const routes: RouteEntry[] = [];

  for (const locale of LOCALES) {
    const seo = PAGE_SEO[locale];
    const t = UI[locale];
    const home = homeCrumb(locale);

    // ── Home ──
    routes.push(
      entry(
        buildPath("home", locale),
        locale,
        seo.home.title,
        seo.home.description,
        seo.home.keywords,
        [breadcrumbSchema(locale, [home]), websiteSchema(locale)],
        { ogImage: seo.home.ogImage, priority: 1.0, changefreq: "weekly" },
      ),
    );

    // ── About ──
    routes.push(
      entry(
        buildPath("about", locale),
        locale,
        seo.about.title,
        seo.about.description,
        seo.about.keywords,
        [
          professionalServiceSchema(locale, seo.about.description),
          faqSchema(t.aboutPage.faqs, locale),
          breadcrumbSchema(locale, [home, { name: t.nav.about, section: "about" }]),
        ],
        { ogImage: seo.about.ogImage, priority: 0.9 },
      ),
    );

    // ── Team index ──
    routes.push(
      entry(
        buildPath("team", locale),
        locale,
        seo.team.title,
        seo.team.description,
        seo.team.keywords,
        [breadcrumbSchema(locale, [home, { name: t.nav.team, section: "team" }])],
        { ogImage: seo.team.ogImage, priority: 0.7 },
      ),
    );

    // ── Gallery ──
    routes.push(
      entry(
        buildPath("gallery", locale),
        locale,
        seo.gallery.title,
        seo.gallery.description,
        seo.gallery.keywords,
        [breadcrumbSchema(locale, [home, { name: t.nav.gallery, section: "gallery" }])],
        { priority: 0.6 },
      ),
    );

    // ── Blog index ──
    const blogUrl = absoluteUrl(buildPath("blog", locale));
    routes.push(
      entry(
        buildPath("blog", locale),
        locale,
        seo.blog.title,
        seo.blog.description,
        seo.blog.keywords,
        [
          blogSchema(locale, seo.blog.description, blogUrl),
          breadcrumbSchema(locale, [home, { name: "Blog", section: "blog" }]),
        ],
        { priority: 0.8, changefreq: "weekly" },
      ),
    );

    // ── Contact ──
    routes.push(
      entry(
        buildPath("contact", locale),
        locale,
        seo.contact.title,
        seo.contact.description,
        seo.contact.keywords,
        [breadcrumbSchema(locale, [home, { name: t.nav.contactSection, section: "contact" }])],
        { priority: 0.8 },
      ),
    );

    // ── Services ──
    for (const raw of services) {
      const svc = localizeService(raw, locale);
      const localeSlug = translateSlug("services", raw.slug, "es", locale);
      const path = buildPath("services", locale, localeSlug);
      const url = absoluteUrl(path);

      routes.push(
        entry(
          path,
          locale,
          `${svc.name} ${t.servicePage.inPanama}`,
          `${svc.tagline} — ${svc.keywords.slice(0, 2).join(", ")}`,
          svc.keywords.join(", "),
          [
            serviceSchema(svc, locale, url),
            faqSchema(svc.faq, locale),
            breadcrumbSchema(locale, [
              home,
              {
                name: sectionLabel(locale, "services"),
                section: "services",
                slug: translateSlug("services", "arquitectura-corporativa", "es", locale),
              },
              { name: svc.name, section: "services", slug: localeSlug },
            ]),
          ],
          { ogImage: svc.heroImage, priority: 0.9 },
        ),
      );
    }

    // ── Projects (slugs are proper nouns, identical across locales) ──
    for (const raw of projects) {
      const proj = localizeProject(raw, locale);
      const path = buildPath("projects", locale, proj.slug);
      const url = absoluteUrl(path);

      routes.push(
        entry(
          path,
          locale,
          proj.title,
          proj.metaDescription,
          proj.keywords.join(", "),
          [
            projectSchema(proj, locale, url),
            breadcrumbSchema(locale, [
              home,
              { name: sectionLabel(locale, "projects"), section: "home", url: `${absoluteUrl(buildPath("home", locale))}#portafolio` },
              { name: proj.title, section: "projects", slug: proj.slug },
            ]),
          ],
          { ogImage: proj.heroImage, priority: 0.8 },
        ),
      );
    }

    // ── Blog posts ──
    for (const post of getBlogPosts(locale)) {
      const path = `${buildPath("blog", locale)}/${post.slug}`;
      const url = absoluteUrl(path);

      routes.push(
        entry(
          path,
          locale,
          post.title,
          post.metaDescription,
          [post.targetKeyword, ...post.secondaryKeywords].join(", "),
          [
            articleSchema(post, locale, url),
            faqSchema(post.faq, locale),
            breadcrumbSchema(locale, [
              home,
              { name: "Blog", section: "blog" },
              { name: post.title, section: "blogPost", slug: post.slug },
            ]),
          ],
          { ogType: "article", priority: 0.8, lastmod: post.publishDate },
        ),
      );
    }

    // ── Team members ──
    for (const member of getTeamMembers(locale)) {
      const path = buildPath("teamMember", locale, member.slug);
      const url = absoluteUrl(path);

      routes.push(
        entry(
          path,
          locale,
          `${member.name} - ${member.role}`,
          clamp(`${t.memberPage.seoDescPrefix} ${member.name}, ${member.role} ${t.memberPage.seoDescMiddle} ${member.shortBio}`),
          `${member.name}, ${member.role}, ${member.specializations.join(", ")}, Arte y Dimensiones`,
          [
            personSchema(member, locale, url),
            breadcrumbSchema(locale, [
              home,
              { name: t.nav.team, section: "team" },
              { name: member.name, section: "teamMember", slug: member.slug },
            ]),
          ],
          { ogImage: member.photo, ogType: "profile", priority: 0.5 },
        ),
      );
    }
  }

  return routes;
}
