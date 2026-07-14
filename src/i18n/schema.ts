/**
 * JSON-LD builders, shared by the React pages and the build-time pre-render script.
 *
 * Why shared: AI crawlers (GPTBot, ClaudeBot, PerplexityBot) generally do not execute
 * JavaScript, so schema injected client-side is invisible to them — which is exactly
 * the audience that AEO is for. The pre-render script therefore bakes this same schema
 * into the served HTML. Both paths call these functions so the two can never disagree.
 */

import { BASE_URL, absoluteUrl, buildPath, type Locale, type Section } from "./config";
import type { LocalizedProject, LocalizedService, LocalizedTeamMember, FAQ } from "./data";
import type { BlogPost } from "../data/blogs";
import { UI } from "./ui";

const ORG_ID = `${BASE_URL}/#organization`;
export const SITE_NAME = "Arte y Dimensiones";

type Schema = Record<string, unknown>;

const inLanguage = (locale: Locale) => (locale === "en" ? "en" : "es-PA");
const countryName = (locale: Locale) => (locale === "en" ? "Panama" : "Panamá");
const orgRef = { "@type": "Organization", "@id": ORG_ID, name: SITE_NAME };

/** `<title>` as actually rendered — the suffix rule lives here so both paths match. */
export function fullTitle(title: string, pathname: string): string {
  const isHome = pathname === "/" || pathname === "/en";
  return isHome ? title : `${title} | ${SITE_NAME}`;
}

export interface Crumb {
  name: string;
  section: Section;
  slug?: string;
  /** Overrides the section-derived URL (used for on-page anchors). */
  url?: string;
}

export function breadcrumbSchema(locale: Locale, crumbs: Crumb[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url ?? absoluteUrl(buildPath(crumb.section, locale, crumb.slug)),
    })),
  };
}

/** The Home crumb, which every breadcrumb trail starts with. */
export function homeCrumb(locale: Locale): Crumb {
  return { name: locale === "en" ? "Home" : "Inicio", section: "home" };
}

export function faqSchema(faqs: FAQ[], locale: Locale): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: inLanguage(locale),
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function websiteSchema(locale: Locale): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: SITE_NAME,
    inLanguage: inLanguage(locale),
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(svc: LocalizedService, locale: Locale, url: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: `${svc.tagline} ${svc.valueCopy}`,
    provider: orgRef,
    areaServed: { "@type": "Country", name: countryName(locale) },
    inLanguage: inLanguage(locale),
    url,
  };
}

export function projectSchema(proj: LocalizedProject, locale: Locale, url: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: proj.title,
    description: proj.metaDescription,
    image: `${BASE_URL}${proj.heroImage}`,
    creator: orgRef,
    inLanguage: inLanguage(locale),
    locationCreated: { "@type": "Country", name: countryName(locale) },
    url,
  };
}

export function articleSchema(post: BlogPost, locale: Locale, url: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    inLanguage: inLanguage(locale),
    author: orgRef,
    publisher: {
      ...orgRef,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/general/logoarteydim.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function personSchema(member: LocalizedTeamMember, locale: Locale, url: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.shortBio,
    image: `${BASE_URL}${member.photo}`,
    worksFor: orgRef,
    knowsAbout: member.specializations,
    inLanguage: inLanguage(locale),
    url,
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
  };
}

/**
 * ProfessionalService for the About page. Carries the geo/address properties that pin
 * the entity to Panama the country — in English, an unqualified "Panama City" resolves
 * to Panama City, Florida, so this disambiguation is load-bearing.
 */
export function professionalServiceSchema(locale: Locale, description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Arte y Dimensiones Arquitectos",
    description,
    url: BASE_URL,
    telephone: "+507 263-2109",
    email: "info@artedim.com",
    foundingDate: "1999",
    numberOfEmployees: 12,
    areaServed: { "@type": "Country", name: countryName(locale) },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Alberto Navarro, Mandalay Apartments, Planta Baja",
      addressLocality: locale === "en" ? "Panama City" : "Ciudad de Panamá",
      addressRegion: "Panamá",
      addressCountry: "PA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 8.9824, longitude: -79.5199 },
    availableLanguage: [
      { "@type": "Language", name: "Spanish" },
      { "@type": "Language", name: "English" },
    ],
    sameAs: ["https://www.instagram.com/artedimpty/", "https://www.facebook.com/artedimpty/"],
  };
}

export function blogSchema(locale: Locale, description: string, url: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog - ${SITE_NAME}`,
    description,
    url,
    inLanguage: inLanguage(locale),
    publisher: orgRef,
  };
}

/** Convenience: the localized nav label for a section, used in breadcrumb trails. */
export function sectionLabel(locale: Locale, section: Section): string {
  const nav = UI[locale].nav;
  switch (section) {
    case "services":
      return nav.services;
    case "projects":
      return nav.projects;
    case "about":
      return nav.about;
    case "team":
    case "teamMember":
      return nav.team;
    case "gallery":
      return nav.gallery;
    case "blog":
    case "blogPost":
      return nav.blog;
    case "contact":
      return nav.contactSection;
    default:
      return locale === "en" ? "Home" : "Inicio";
  }
}
