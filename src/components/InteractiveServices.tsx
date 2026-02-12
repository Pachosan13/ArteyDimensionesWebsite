import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "../data/services.json";

type ServiceCard = {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
};

const serviceCards = servicesData as ServiceCard[];

const overlayGradient = "linear-gradient(to bottom, rgba(15,15,15,0.6), rgba(15,15,15,0.8), rgba(15,15,15,0.95))";

export default function Servicios() {
  return (
    <section id="servicios" className="relative py-20" aria-labelledby="servicios-title">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/portfolio/ISOMETRICOcolor.png')] bg-cover bg-center" aria-hidden="true" />
      </div>
      <div className="absolute inset-0" style={{ background: overlayGradient }} aria-hidden="true" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.35em] text-brand uppercase">Servicios</p>
          <motion.h2
            id="servicios-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold"
          >
            Servicios enfocados en ROI
          </motion.h2>
          <p className="mt-4 text-lg text-white/85">
            Aplicamos metodología integral para garantizar trazabilidad en cada fase, desde masterplan hasta construcción.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white/95 text-[#1F1F1F] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={`${service.name} - Arte y Dimensiones`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Servicio</p>
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <p className="text-[#4B4B4B] text-base leading-relaxed flex-1">{service.tagline}</p>
                <Link
                  to={`/servicios/${service.slug}`}
                  className="mt-auto inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-brand text-white font-semibold hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Ver detalle
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
