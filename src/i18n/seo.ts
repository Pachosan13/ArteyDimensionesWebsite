/**
 * Per-page SEO metadata for the static pages, in both locales.
 *
 * Single source of truth: the React pages read this at runtime and the build-time
 * pre-render script imports the same object to bake the tags into the served HTML.
 * The previous setup kept a second hand-maintained copy inside the pre-render script
 * ("kept in sync with blogs.ts") and it had already drifted — this makes drift
 * impossible rather than merely discouraged.
 *
 * Metadata for services, projects, blog posts and team members is derived from the
 * content files themselves and lives in the pre-render script's route builder.
 */

import type { Locale } from "./config";

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

export type StaticPageKey = "home" | "about" | "team" | "gallery" | "blog" | "contact";

export const PAGE_SEO: Record<Locale, Record<StaticPageKey, PageSeo>> = {
  es: {
    home: {
      title: "Arte y Dimensiones - Arquitectura Corporativa e Institucional en Panamá",
      description:
        "Estudio de arquitectura especializado en diseño corporativo, comercial e institucional en Panamá. Oficinas que elevan la productividad y la marca.",
      keywords:
        "arquitectura corporativa Panamá, diseño de espacios comerciales Panamá, arquitectura institucional Panamá, estudio arquitectura Panama",
    },
    about: {
      title: "Firma de Arquitectura Comercial y Corporativa en Panamá",
      description:
        "Arte y Dimensiones: firma de arquitectura y arquitectos comerciales en Panamá con más de 26 años de experiencia. 150+ proyectos y 410,000+ m² diseñados.",
      keywords:
        "firma de arquitectura panamá, arquitectos comerciales panamá, estudio de arquitectura panamá, arquitectos corporativos panamá, empresa de arquitectura panamá",
      ogImage: "/images/portfolio/SBMP-15.jpg",
    },
    team: {
      title: "Nuestro Equipo",
      description:
        "Conozca al equipo de Arte y Dimensiones: 12 profesionales con más de 25 años de experiencia en arquitectura comercial y corporativa en Panamá.",
      keywords: "equipo arquitectos Panamá, Arte y Dimensiones equipo, arquitectos corporativos Panamá",
      ogImage: "/images/team/fotoequipo.jpg",
    },
    gallery: {
      title: "Galería de Proyectos",
      description:
        "Galería de diseños conceptuales y proyectos de arquitectura corporativa y comercial en Panamá por Arte y Dimensiones.",
      keywords: "galería arquitectura Panamá, proyectos arquitectónicos Panamá, diseño conceptual arquitectura",
    },
    blog: {
      title: "Blog de Arquitectura Comercial y Corporativa en Panama",
      description:
        "Articulos sobre arquitectura comercial, corporativa e institucional en Panama. Guias, costos, tendencias y consejos para tu proyecto.",
      keywords: "blog arquitectura Panama, arquitectura comercial Panama, diseno oficinas Panama, arquitecto Panama",
    },
    contact: {
      title: "Agenda tu Evaluación",
      description:
        "Agenda una evaluación gratuita de tu proyecto arquitectónico en Ciudad de Panamá. Sin costo ni compromiso.",
      keywords: "evaluación arquitectónica Panamá, consulta arquitectura gratis Panamá, cita arquitecto Panamá",
    },
  },

  en: {
    home: {
      title: "Commercial & Corporate Architecture Firm in Panama | Arte y Dimensiones",
      description:
        "Commercial architect in Panama with 26+ years, 150+ projects and 410,000+ m² built. Corporate offices, retail and industrial architecture — design through occupancy.",
      keywords:
        "commercial architect Panama, architecture firm Panama, corporate architecture Panama, architects in Panama, office design Panama",
    },
    about: {
      title: "Architecture Firm in Panama — Commercial & Corporate Architects",
      description:
        "Arte y Dimensiones is an architecture firm in Panama specialized in commercial and corporate projects. 26+ years, 150+ projects, 410,000+ m² designed.",
      keywords:
        "architecture firm Panama, architects in Panama, commercial architect Panama, corporate architects Panama, best architecture firm Panama",
      ogImage: "/images/portfolio/SBMP-15.jpg",
    },
    team: {
      title: "Our Team — Architects in Panama",
      description:
        "Meet the Arte y Dimensiones team: 12 professionals with 25+ years of combined experience in commercial and corporate architecture in Panama.",
      keywords: "architects in Panama, Panama architects, architecture team Panama, Arte y Dimensiones team",
      ogImage: "/images/team/fotoequipo.jpg",
    },
    gallery: {
      title: "Project Gallery",
      description:
        "Conceptual designs and built projects in corporate and commercial architecture in Panama by Arte y Dimensiones.",
      keywords: "architecture gallery Panama, architectural projects Panama, conceptual design architecture",
    },
    blog: {
      title: "Commercial & Corporate Architecture Blog — Panama",
      description:
        "Articles on commercial, corporate and industrial architecture in Panama. Costs, timelines and what to expect when you hire an architect here.",
      keywords:
        "commercial architect Panama blog, office design Panama, architecture firm Panama, retail design Panama",
    },
    contact: {
      title: "Book Your Project Assessment",
      description:
        "Book a free assessment of your commercial or corporate project in Panama. No cost, no obligation — we work with international clients.",
      keywords:
        "hire architect Panama, architecture consultation Panama, commercial architect Panama contact, office fit out Panama",
    },
  },
};
