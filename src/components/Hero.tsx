import React from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';

const stats = [
  {
    value: 26,
    suffix: '+',
    label: 'años de experiencia',
  },
  {
    value: 410000,
    suffix: ' m²',
    label: 'de proyectos construidos',
  },
  {
    value: 150,
    suffix: '+',
    label: 'proyectos realizados',
  },
];

const numberFormatter = new Intl.NumberFormat('es-PA');

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-neutral-900 text-white" aria-labelledby="hero-title">
      <img
        src="/images/portfolio/SBMP-3.jpg"
        alt="Complejo corporativo diseñado por Arte y Dimensiones"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,15,15,0.6), rgba(15,15,15,0.8), rgba(15,15,15,0.95))',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 flex flex-col gap-10">
        <div className="max-w-3xl text-left space-y-6">
          <p className="text-sm font-semibold tracking-[0.4em] text-brand uppercase">Arquitectura comercial & corporativa</p>
          <h1 id="hero-title" className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight">
            Diseñamos espacios que impulsan el rendimiento y maximizan el valor inmobiliario.
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
            +26 años asesorando a marcas líderes en Panamá con soluciones integrales para plazas comerciales, oficinas e instituciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="inline-flex items-center gap-2">
                Solicitar Propuesta
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg border border-white/30 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver nuestro trabajo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white/10 backdrop-blur px-6 py-5 text-center sm:text-left border border-white/15"
              role="listitem"
            >
              <div className="text-4xl font-bold text-brand">
                <CounterEffect
                  targetValue={stat.value}
                  suffix={stat.suffix}
                  formatValue={(value) => numberFormatter.format(value)}
                />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
