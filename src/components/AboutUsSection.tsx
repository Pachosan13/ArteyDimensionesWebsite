import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden" aria-labelledby="about-heading">
      <img
        src="/images/portfolio/SBMP-15.jpg"
        alt="Modern corporate building - Arte y Dimensiones architecture"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 80vw"
      />

      <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-stretch px-5 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:gap-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/95 p-8 shadow-xl backdrop-blur-sm sm:p-10 md:w-[60%] md:p-12"
        >
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-[clamp(1.9rem,4.8vw,2.8rem)] font-semibold leading-tight text-neutral-900"
          >
            Nos dedicamos al diseño y desarrollo de proyectos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[clamp(0.95rem,2.9vw,1.1rem)] leading-relaxed text-neutral-700"
          >
            Trabajando de la mano con desarrolladores y clientes, ofrecemos soluciones eficientes que optimizan presupuestos y aseguran resultados de calidad que superan las expectativas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;