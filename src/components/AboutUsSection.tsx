import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/portfolio/SBMP-15.jpg"
        alt="Modern corporate building - Arte y Dimensiones architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Overlay */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-white/90 flex items-center justify-center">
        <div className="relative z-10 max-w-xl mx-auto p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neutral-900 font-bold text-2xl md:text-3xl mb-6 leading-tight"
          >
            Nos dedicamos al diseño y desarrollo de proyectos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-900/80 text-sm md:text-base leading-relaxed"
          >
            Trabajando de la mano con desarrolladores y clientes, ofreciendo
            soluciones eficientes y optimizando presupuestos para asegurar resultados
            de calidad que superen las expectativas.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;