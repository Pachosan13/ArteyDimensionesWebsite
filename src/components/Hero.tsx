import React from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';
import { useI18n } from '../i18n/LanguageProvider';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const formatWithSpaces = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <img
        src="/images/portfolio/SBMP-3.jpg"
        alt={t.hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,15,15,0.35), rgba(15,15,15,0.8), rgba(15,15,15,0.95))',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="relative z-20 text-center text-white w-full md:max-w-3xl md:mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 leading-snug px-2">
            {t.hero.titlePre}{' '}
            <span className="relative inline-block text-brand italic">
              {t.hero.titleHighlight}
              <span
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-brand rounded-full"
                style={{ transform: 'rotate(-2deg)' }}
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 font-light leading-relaxed px-4">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:text-brand transition-colors border border-white/30 hover:border-brand w-full sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
            <div>
              <CounterEffect
                targetValue={26}
                prefix="+"
                suffix={t.hero.yearsSuffix}
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">{t.hero.yearsLabel}</div>
            </div>
            <div>
              <CounterEffect
                targetValue={410_000}
                prefix="+"
                suffix=" m²"
                formatValue={formatWithSpaces}
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">{t.hero.areaLabel}</div>
            </div>
            <div>
              <CounterEffect
                targetValue={150}
                prefix="+"
                suffix={t.hero.projectsSuffix}
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2 whitespace-nowrap"
              />
              <div className="text-sm sm:text-base text-white/90 font-medium">{t.hero.projectsLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
