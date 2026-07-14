import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Users, MapPin, Award } from "lucide-react";
import SEOHead from "../components/SEOHead";
import Clients from "../components/Clients";
import CTASection from "../components/CTASection";
import { useI18n } from "../i18n/LanguageProvider";

const statIcons = [Building2, MapPin, Users, Award];

export default function Nosotros() {
  const { locale, t, path } = useI18n();
  const { aboutPage } = t;

  

  return (
    <>
      <SEOHead />

      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/portfolio/SBMP-15.jpg"
          alt={aboutPage.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,15,15,0.3), rgba(15,15,15,0.7))" }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            {aboutPage.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            {aboutPage.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutPage.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 text-brand mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">{stat.value}</div>
                  <div className="text-sm text-[#4B4B4B] mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6">{aboutPage.bodyHeading}</h2>
            <p className="text-lg text-[#4B4B4B] leading-relaxed mb-6">{aboutPage.bodyP1}</p>
            <p className="text-lg text-[#4B4B4B] leading-relaxed mb-8">{aboutPage.bodyP2}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={path("services", "arquitectura-comercial")}
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "var(--brand)" }}
              >
                {aboutPage.specialties[0].title}
              </Link>
              <Link
                to={path("services", "arquitectura-corporativa")}
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-brand hover:text-brand transition-all duration-300"
              >
                {aboutPage.specialties[1].title}
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] overflow-hidden shadow-2xl"
          >
            <img
              src="/images/team/fotoequipo.jpg"
              alt={aboutPage.teamPhotoAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12 text-center">
            {aboutPage.specialtiesHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutPage.specialties.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={path("services", svc.slug)}
                  className="block p-6 rounded-2xl border border-neutral-200 hover:border-brand hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{svc.title}</h3>
                  <p className="text-[#4B4B4B]">{svc.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12 text-center">{aboutPage.faqHeading}</h2>
          <div className="space-y-6">
            {aboutPage.faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl shadow-md overflow-hidden"
                open={i === 0}
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold text-[#1F1F1F] text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-brand ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-6 pb-5 text-[#4B4B4B] leading-relaxed">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <CTASection />
    </>
  );
}
