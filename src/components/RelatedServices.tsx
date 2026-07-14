import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageProvider";
import { localizeService, services } from "../i18n/data";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const { locale, t, path } = useI18n();

  const related = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3)
    .map((service) => localizeService(service, locale));

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--neutral-900)] mb-6">{t.servicePage.relatedHeading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link
              key={service.slug}
              to={path("services", service.slug)}
              className="group block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={service.heroImage}
                alt={service.name}
                className="w-full h-48 object-cover group-hover:scale-[1.02] transition"
                loading="lazy"
              />
              <div className="p-5">
                <div className="font-semibold">{service.name}</div>
                <div className="text-sm text-neutral-600 mt-1">{service.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
