import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/services.json";
import ServiceHero from "../components/ServiceHero";
import ServiceProcess from "../components/ServiceProcess";
import ServiceFAQ from "../components/ServiceFAQ";
import RelatedServices from "../components/RelatedServices";
import CTASection from "../components/CTASection";
import ContactServiceForm from "../components/ContactServiceForm";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import SEOHead from "../components/SEOHead";

type Service = {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  keywords: string[];
  valueCopy: string;
  faq: { q: string; a: string }[];
  relatedProjects?: string[];
};

const services = servicesData as Service[];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const svc = useMemo(() => services.find((service) => service.slug === slug), [slug]);

  const jsonLd = useMemo(() => {
    if (!svc) return undefined;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": svc.name,
        "description": `${svc.tagline} ${svc.valueCopy}`,
        "provider": { "@type": "Organization", "@id": "https://artedim.com/#organization", "name": "Arte y Dimensiones" },
        "areaServed": { "@type": "Country", "name": "Panamá" },
        "url": `https://artedim.com/servicios/${svc.slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": svc.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://artedim.com/" },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://artedim.com/servicios/arquitectura-corporativa" },
          { "@type": "ListItem", "position": 3, "name": svc.name, "item": `https://artedim.com/servicios/${svc.slug}` }
        ]
      }
    ];
  }, [svc]);

  if (!svc) return <Navigate to="/servicios/arquitectura-corporativa" replace />;

  return (
    <>
      <SEOHead
        title={`${svc.name} en Panamá`}
        description={`${svc.tagline} — ${svc.keywords.slice(0, 2).join(", ")}`}
        keywords={svc.keywords.join(", ")}
        ogImage={svc.heroImage}
        jsonLd={jsonLd}
      />
      <ServiceHero
        imageSrc={svc.heroImage}
        imageAlt={svc.name}
      />

      {/* Title, Tagline and CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6 leading-tight">
            {svc.name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            {svc.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#contacto-servicio"
              className="inline-flex items-center justify-center rounded-xl px-8 sm:px-10 py-4 sm:py-5 font-semibold text-lg shadow-xl bg-brand text-white hover:bg-brand/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition-all duration-300"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Solicitar Propuesta
            </a>
            <a
              href="/#portafolio"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname === '/') {
                  document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#portafolio';
                }
              }}
              className="inline-flex items-center justify-center rounded-xl px-8 sm:px-10 py-4 sm:py-5 font-semibold text-lg border-2 border-neutral-300 text-neutral-700 hover:border-brand hover:text-brand transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-4">Valor para tu organización</h2>
          <p className="text-neutral-700 text-lg leading-relaxed">{svc.valueCopy}</p>
        </div>
      </section>

      <ServiceProcess />

      <FeaturedProjectsSection filterSlugs={svc.relatedProjects} />
      <ServiceFAQ items={svc.faq} />
      <RelatedServices currentSlug={svc.slug} all={services} />
      <CTASection />
      <ContactServiceForm serviceSlug={svc.slug} />
    </>
  );
}