import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import ServiceHero from "../components/ServiceHero";
import ServiceProcess from "../components/ServiceProcess";
import ServiceFAQ from "../components/ServiceFAQ";
import RelatedServices from "../components/RelatedServices";
import CTASection from "../components/CTASection";
import ContactServiceForm from "../components/ContactServiceForm";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import SEOHead from "../components/SEOHead";
import { useI18n } from "../i18n/LanguageProvider";
import { getService, localizeService } from "../i18n/data";
import { DEFAULT_LOCALE, absoluteUrl, buildPath, translateSlug } from "../i18n/config";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, path } = useI18n();
  const navigate = useNavigate();

  // The URL carries the slug in the active locale; the data is keyed by the Spanish one.
  const canonicalSlug = slug ? translateSlug("services", slug, locale, DEFAULT_LOCALE) : undefined;
  const raw = canonicalSlug ? getService(canonicalSlug) : undefined;
  const svc = raw ? localizeService(raw, locale) : undefined;

  

  if (!svc) {
    return <Navigate to={path("services", "arquitectura-corporativa")} replace />;
  }

  const goToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path("home"));
    setTimeout(() => document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" }), 500);
  };

  return (
    <>
      <SEOHead />
      <ServiceHero imageSrc={svc.heroImage} imageAlt={svc.name} />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6 leading-tight">
            {svc.name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-10 max-w-3xl mx-auto leading-relaxed">{svc.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#contacto-servicio"
              className="inline-flex items-center justify-center rounded-xl px-8 sm:px-10 py-4 sm:py-5 font-semibold text-lg shadow-xl bg-brand text-white hover:bg-brand/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition-all duration-300"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {t.servicePage.ctaPrimary}
            </a>
            <a
              href={`${path("home")}#portafolio`}
              onClick={goToPortfolio}
              className="inline-flex items-center justify-center rounded-xl px-8 sm:px-10 py-4 sm:py-5 font-semibold text-lg border-2 border-neutral-300 text-neutral-700 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.servicePage.viewPortfolio}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-4">{t.servicePage.valueHeading}</h2>
          <p className="text-neutral-700 text-lg leading-relaxed">{svc.valueCopy}</p>
        </div>
      </section>

      <ServiceProcess />

      <FeaturedProjectsSection filterSlugs={svc.relatedProjects} />
      <ServiceFAQ items={svc.faq} />
      <RelatedServices currentSlug={svc.slug} />
      <CTASection />
      <ContactServiceForm serviceSlug={svc.slug} />
    </>
  );
}
