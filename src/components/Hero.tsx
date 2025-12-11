import React from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Hero Background Image */}
      <img
        src="/images/portfolio/SBMP-3.jpg"
        alt="Arte y Dimensiones - Arquitectura moderna"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 30% Dark Overlay for text readability */}
<div className="absolute inset-0 bg-gradient-to-b z-10"
     style={{
       background: "linear-gradient(to bottom, rgba(15,15,15,0.6), rgba(15,15,15,0.8), rgba(15,15,15,0.95))"
     }}
></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="relative z-20 text-center text-white w-full md:max-w-3xl md:mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 leading-snug px-2">
            Diseñamos Espacios que 
            <span className="text-brand block sm:inline"> Impulsan el Rendimiento</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 font-light leading-relaxed px-4">
            Arquitectura Corporativa, Comercial y Logística en Panamá
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Solicitar Propuesta</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button 
              onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:text-brand transition-colors border border-white/30 hover:border-brand w-full sm:w-auto"
            >
              Ver Nuestro Trabajo
            </button>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
            <div>
              <CounterEffect 
                targetValue={150} 
                suffix="+" 
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">Proyectos Completados</div>
            </div>
            <div>
              <CounterEffect 
                targetValue={25} 
                suffix="+" 
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">Años de Experiencia</div>
            </div>
            <div>
              <CounterEffect 
                targetValue={100} 
                suffix="%" 
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
