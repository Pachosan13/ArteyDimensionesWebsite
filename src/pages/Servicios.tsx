import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES, SITE } from '../data/services';

const Servicios: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#4B4B4B] to-[#2A2A2A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Servicios de <span className="text-brand">Arquitectura</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Soluciones arquitectónicas integrales que transforman espacios y maximizan el rendimiento de tu inversión en Panamá
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/agenda"
                className="btn-brand px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{SITE.cta_frase}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B4B4B] mb-6">
              Nuestras <span className="border-b-4 border-brand">Especialidades</span>
            </h2>
            <p className="text-xl text-[#4B4B4B]/80 max-w-3xl mx-auto">
              {SITE.prueba_social_breve} - Cada servicio diseñado para generar resultados medibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 60
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateX: 2,
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={service.imagen_hero} 
                    alt={`${service.nombre} - ${service.keyword_principal}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.nombre}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {service.keyword_principal}
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Pain Points */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#4B4B4B] mb-3">¿Te suena familiar?</h4>
                    <ul className="space-y-2">
                      {service.pains.slice(0, 2).map((pain, idx) => (
                        <li key={idx} className="text-red-600 text-sm flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#4B4B4B] mb-3">Resultados que obtienes:</h4>
                    <ul className="space-y-2">
                      {service.outcomes.slice(0, 2).map((outcome, idx) => (
                        <li key={idx} className="text-green-600 text-sm flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center btn-brand px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {SITE.promesa_corta} - Agenda una evaluación gratuita y descubre el potencial real de tu espacio
          </p>
          <Link 
            to="/agenda"
            className="bg-white text-brand px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Agendar Evaluación Gratuita</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;