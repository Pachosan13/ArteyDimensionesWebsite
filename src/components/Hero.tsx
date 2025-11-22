import React from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[660px] w-full items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 md:min-h-screen md:pb-24">
      {/* Hero Background Image */}
      <img
        src="/images/portfolio/SBMP-3.jpg"
        alt="Arte y Dimensiones - Arquitectura moderna"
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 70vw"
      />

      {/* 30% Dark Overlay for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.65) 55%, rgba(15,15,15,0.5) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="w-full text-left text-white md:mx-auto md:max-w-3xl md:text-center">
          <h1 className="text-balance text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-[1.15] tracking-tight">
            Diseñamos Espacios que
            <span className="text-brand block sm:inline"> Impulsan el Rendimiento</span>
          </h1>

          <p className="mt-4 text-balance text-[clamp(1.05rem,3.3vw,1.6rem)] font-light leading-relaxed text-white/90 md:mt-6">
            Arquitectura Corporativa, Comercial e Institucional en Panamá
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <button
              onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold shadow-lg transition-all hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              <span>Solicitar Propuesta</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-[15px] font-semibold text-white transition hover:border-brand hover:text-brand sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Ver Nuestro Trabajo
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 px-1 text-left sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:px-4 md:text-center">
            <div>
              <CounterEffect
                targetValue={50}
                suffix="+"
                duration={2000}
                className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-brand"
              />
              <div className="mt-1 text-sm font-medium text-white/90 sm:text-base">Proyectos Completados</div>
            </div>
            <div>
              <CounterEffect
                targetValue={15}
                suffix="+"
                duration={2000}
                className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-brand"
              />
              <div className="mt-1 text-sm font-medium text-white/90 sm:text-base">Años de Experiencia</div>
            </div>
            <div>
              <CounterEffect
                targetValue={100}
                suffix="%"
                duration={2000}
                className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-brand"
              />
              <div className="mt-1 text-sm font-medium text-white/90 sm:text-base">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
