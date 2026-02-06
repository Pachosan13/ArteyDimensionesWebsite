import React, { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/services.json";
import ServiceHero from "../components/ServiceHero";
import ServiceProcess from "../components/ServiceProcess";
import ServiceFAQ from "../components/ServiceFAQ";
import RelatedServices from "../components/RelatedServices";
import CTASection from "../components/CTASection";
import ContactServiceForm from "../components/ContactServiceForm";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";

type Service = {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  keywords: string[];
  valueCopy: string;
  faq: { q: string; a: string }[];
};

const services = servicesData as Service[];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const svc = useMemo(() => services.find((service) => service.slug === slug), [slug]);

  useEffect(() => {
    if (svc) {
      document.title = `${svc.name} en Panamá | Arte y Dimensiones`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", `${svc.tagline} — ${svc.keywords.slice(0,2).join(", ")}`);
    }
  }, [svc]);

  if (!svc) return <Navigate to="/servicios/arquitectura-corporativa" replace />;

  return (
    <>
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

      <FeaturedProjectsSection />
      <ServiceFAQ items={svc.faq} />
      <RelatedServices currentSlug={svc.slug} all={services} />
      <CTASection />
      <ContactServiceForm />
    </>
  );
}