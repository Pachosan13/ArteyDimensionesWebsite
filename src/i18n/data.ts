/**
 * Locale-aware views over the content files.
 *
 * Every entity keeps its **Spanish slug as the canonical key** — that is what the data
 * files are indexed by and what `path()` expects. Only the display fields swap. This
 * means a component never has to branch on language to look something up.
 */

import servicesJson from "../data/services.json";
import projectsJson from "../data/projects.json";
import { blogPosts, blogPostsEn, type BlogPost } from "../data/blogs";
import {
  companyValues,
  companyValuesEn,
  teamMembers,
  teamMission,
  teamMissionEn,
  type TeamMember,
} from "../data/team";
import { DEFAULT_LOCALE, translateSlug, type Locale } from "./config";

export interface FAQ {
  q: string;
  a: string;
}

interface ServiceEn {
  slug: string;
  name: string;
  tagline: string;
  keywords: string[];
  valueCopy: string;
  faq: FAQ[];
}

export interface Service {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  keywords: string[];
  valueCopy: string;
  relatedProjects: string[];
  faq: FAQ[];
  gallery: string[];
  en: ServiceEn;
}

interface ProjectEn {
  title: string;
  category: string;
  roi: string;
  description: string;
  keywords: string[];
  metaDescription: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  roi: string;
  description: string;
  keywords: string[];
  metaDescription: string;
  gallery: string[];
  en: ProjectEn;
}

export const services = servicesJson as Service[];
export const projects = projectsJson as Project[];

/** A service with its display fields resolved to `locale`. The slug stays canonical. */
export type LocalizedService = Omit<Service, "en">;
export type LocalizedProject = Omit<Project, "en">;

export function localizeService(svc: Service, locale: Locale): LocalizedService {
  if (locale === DEFAULT_LOCALE) {
    const { en: _en, ...rest } = svc;
    return rest;
  }
  const { en, ...rest } = svc;
  // `en.slug` is deliberately discarded: routing translates slugs, lookups do not.
  const { slug: _enSlug, ...enFields } = en;
  return { ...rest, ...enFields };
}

export function localizeProject(proj: Project, locale: Locale): LocalizedProject {
  const { en, ...rest } = proj;
  return locale === DEFAULT_LOCALE ? rest : { ...rest, ...en };
}

export function getService(canonicalSlug: string): Service | undefined {
  return services.find((s) => s.slug === canonicalSlug);
}

export function getProject(canonicalSlug: string): Project | undefined {
  return projects.find((p) => p.slug === canonicalSlug);
}

/** Blog posts are authored per language rather than translated field-by-field. */
export function getBlogPosts(locale: Locale): BlogPost[] {
  return locale === "en" ? blogPostsEn : blogPosts;
}

/**
 * Look up a post by a slug already expressed in `locale`. Falls back to resolving the
 * canonical Spanish slug, so a stale link into `/en/blog/<spanish-slug>` still lands.
 */
export function getBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  const posts = getBlogPosts(locale);
  const direct = posts.find((p) => p.slug === slug);
  if (direct) return direct;

  const canonical = translateSlug("blogPost", slug, locale, DEFAULT_LOCALE);
  const translated = translateSlug("blogPost", canonical, DEFAULT_LOCALE, locale);
  return posts.find((p) => p.slug === translated);
}

/** A team member with display fields resolved to `locale`. */
export type LocalizedTeamMember = Omit<TeamMember, "en">;

export function localizeTeamMember(member: TeamMember, locale: Locale): LocalizedTeamMember {
  const { en, ...rest } = member;
  return locale === DEFAULT_LOCALE ? rest : { ...rest, ...en };
}

export function getTeamMembers(locale: Locale): LocalizedTeamMember[] {
  return teamMembers.map((m) => localizeTeamMember(m, locale));
}

export function getTeamMember(slug: string, locale: Locale): LocalizedTeamMember | undefined {
  const member = teamMembers.find((m) => m.slug === slug);
  return member ? localizeTeamMember(member, locale) : undefined;
}

export function getTeamMission(locale: Locale) {
  return locale === "en" ? teamMissionEn : teamMission;
}

export function getCompanyValues(locale: Locale) {
  return locale === "en" ? companyValuesEn : companyValues;
}
