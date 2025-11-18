import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section id="caso-estudio" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#4B4B4B] mb-6"
          >
            Caso de <span className="border-b-4 border-[#FF6A00]">Éxito</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#4B4B4B]/80 max-w-3xl mx-auto"
          >
            Cómo transformamos el Business Park de Santa Maria en un hub de productividad y rentabilidad
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/images/portfolio/business2.png"
                alt="Centro Corporativo Multiplaza - Caso de éxito de arquitectura corporativa en Panamá"
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="text-sm text-brand font-semibold mb-2">CASO DE ÉXITO</div>
              <h3 className="text-3xl font-bold text-[#4B4B4B] mb-6">
                Santa Maria Business Park
              </h3>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-bold text-[#4B4B4B] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Problema
                  </h4>
                  <p className="text-[#4B4B4B]/80">
                    Espacios de oficina subutilizados con alta rotación de inquilinos (45%) y baja satisfacción por diseño obsoleto y falta de áreas colaborativas.
                  </p>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center"
                >
                  <ArrowRight className="h-6 w-6 text-brand" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-lg font-bold text-[#4B4B4B] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Solución
                  </h4>
                  <p className="text-[#4B4B4B]/80">
                    Rediseño integral con espacios flexibles, áreas de coworking, tecnología integrada y zonas de bienestar que fomentan la productividad y colaboración.
                  </p>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="flex justify-center"
                >
                  <ArrowRight className="h-6 w-6 text-brand" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="text-lg font-bold text-[#4B4B4B] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Resultados
                  </h4>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-brand mb-1">+65%</div>
                      <div className="text-sm text-[#4B4B4B]">Retención</div>
                    </motion.div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-brand mb-1">+40%</div>
                      <div className="text-sm text-[#4B4B4B]">Productividad</div>
                    </motion.div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-brand mb-1">+55%</div>
                      <div className="text-sm text-[#4B4B4B]">ROI</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.button 
                onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 btn-brand px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Solicitar Análisis para Mi Proyecto
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;