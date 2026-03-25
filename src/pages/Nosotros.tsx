import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Users, MapPin, Award } from "lucide-react";
import SEOHead from "../components/SEOHead";
import Clients from "../components/Clients";
import CTASection from "../components/CTASection";

const stats = [
  { icon: Building2, value: "150+", label: "Proyectos entregados" },
  { icon: MapPin, value: "410,000+", label: "m² diseñados" },
  { icon: Users, value: "12", label: "Profesionales" },
  { icon: Award, value: "26+", label: "Años de experiencia" },
];

const faqs = [
  {
    q: "¿Por qué elegir una firma de arquitectura especializada en comercial y corporativo?",
    a: "Una firma especializada entiende los drivers de negocio detrás de cada proyecto: flujo de clientes, productividad, branding y retorno de inversión. Diseñamos espacios que generan resultados medibles, no solo estéticos.",
  },
  {
    q: "¿Cuántos años de experiencia tiene Arte y Dimensiones?",
    a: "Más de 26 años diseñando proyectos comerciales y corporativos en Panamá. Desde 1999, hemos completado más de 150 proyectos y diseñado más de 410,000 m².",
  },
  {
    q: "¿En qué se diferencia Arte y Dimensiones de otros estudios de arquitectura?",
    a: "Nos enfocamos 100% en arquitectura comercial y corporativa. Cada proyecto incluye análisis de ROI, KPIs de espacio y coordinación integral. No hacemos residencial — nuestra especialización es nuestro diferencial.",
  },
  {
    q: "¿Dónde están ubicados y en qué zonas de Panamá trabajan?",
    a: "Nuestra oficina está en Ciudad de Panamá. Trabajamos en todo el país: Ciudad de Panamá, Colón, Penonomé, David, Santiago, Coronado y más.",
  },
];

export default function Nosotros() {
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://artedim.com/#organization",
        name: "Arte y Dimensiones",
        alternateName: "Arte y Dimensiones Arquitectos",
        description:
          "Firma de arquitectura comercial y corporativa en Panamá con más de 26 años de experiencia. Arquitectos comerciales especializados en plazas, oficinas y espacios retail.",
        url: "https://artedim.com",
        telephone: "+507 263-2109",
        email: "info@artedim.com",
        foundingDate: "1999",
        numberOfEmployees: 12,
        areaServed: { "@type": "Country", name: "Panamá" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ciudad de Panamá",
          addressCountry: "PA",
        },
        sameAs: [
          "https://www.instagram.com/artedimpty/",
          "https://www.facebook.com/artedimpty/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://artedim.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nosotros",
            item: "https://artedim.com/nosotros",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <SEOHead
        title="Firma de Arquitectura Comercial y Corporativa en Panamá"
        description="Arte y Dimensiones: firma de arquitectura y arquitectos comerciales en Panamá con más de 26 años de experiencia. 150+ proyectos y 410,000+ m² diseñados."
        keywords="firma de arquitectura panamá, arquitectos comerciales panamá, estudio de arquitectura panamá, arquitectos corporativos panamá, empresa de arquitectura panamá"
        ogImage="/images/portfolio/SBMP-15.jpg"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/portfolio/SBMP-15.jpg"
          alt="Equipo de Arte y Dimensiones en proyecto arquitectónico"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,15,15,0.3), rgba(15,15,15,0.7))",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Firma de Arquitectura Comercial y Corporativa en Panamá
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Más de 26 años transformando espacios en resultados de negocio
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-brand mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#4B4B4B] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Copy */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6">
              Arquitectos comerciales especializados desde 1999
            </h2>
            <p className="text-lg text-[#4B4B4B] leading-relaxed mb-6">
              Arte y Dimensiones es una firma de arquitectura en Panamá dedicada
              exclusivamente al diseño de proyectos comerciales y corporativos.
              Trabajamos de la mano con desarrolladores e inversionistas
              optimizando presupuestos, coordinando proveedores y asegurando
              entregas puntuales.
            </p>
            <p className="text-lg text-[#4B4B4B] leading-relaxed mb-8">
              Nuestro equipo de 12 profesionales — arquitectos, project managers
              y especialistas técnicos — diseña espacios que equilibran estética,
              normativa y retorno financiero para retail, oficinas y proyectos
              institucionales en todo Panamá.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios/arquitectura-comercial"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Arquitectura Comercial
              </Link>
              <Link
                to="/servicios/arquitectura-corporativa"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-brand hover:text-brand transition-all duration-300"
              >
                Arquitectura Corporativa
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
              alt="Equipo profesional de Arte y Dimensiones"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12 text-center">
            Nuestras especialidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Arquitectura Comercial",
                desc: "Plazas, centros comerciales y espacios retail diseñados para convertir visitas en ventas.",
                link: "/servicios/arquitectura-comercial",
              },
              {
                title: "Arquitectura Corporativa",
                desc: "Oficinas que elevan productividad, bienestar e identidad de marca.",
                link: "/servicios/arquitectura-corporativa",
              },
              {
                title: "Space Planning",
                desc: "Layouts basados en datos reales para maximizar cada metro cuadrado.",
                link: "/servicios/space-planning",
              },
              {
                title: "Diseño de Oficinas",
                desc: "Diseño integral de espacios de trabajo: desde el concepto hasta la coordinación con contratistas.",
                link: "/servicios/diseno-de-oficinas",
              },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={svc.link}
                  className="block p-6 rounded-2xl border border-neutral-200 hover:border-brand hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[#4B4B4B]">{svc.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold text-[#1F1F1F] text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-brand ml-4 group-open:rotate-45 transition-transform text-2xl">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-[#4B4B4B] leading-relaxed">
                  {faq.a}
                </div>
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
