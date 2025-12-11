import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.35em] text-brand uppercase"
          >
            Consultoría integral
          </motion.p>
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.9rem,3.4vw,3rem)] font-bold text-[#1F1F1F] leading-tight mt-4"
          >
            Nos dedicamos al diseño y desarrollo de proyectos que equilibran estética, normativa y retorno financiero.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[#4B4B4B] leading-relaxed"
          >
            Trabajamos de la mano con desarrolladores e inversionistas optimizando presupuestos, coordinando proveedores y asegurando entregas puntuales para retail, oficinas y proyectos institucionales en todo Panamá.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src="/images/portfolio/SBMP-15.jpg"
              alt="Equipo de Arte y Dimensiones coordinando un proyecto"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 text-sm text-[#1F1F1F]">
            <p className="font-semibold">Equipos dedicados</p>
            <p className="text-[#4B4B4B]">Directores senior acompañan cada proyecto.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;