import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';

/**
 * Hero con recorrido por scroll de Santa Maria Business Park.
 *
 * Mismo contenido que <Hero />: titular, CTAs y contadores no cambian.
 * Lo único distinto es el fondo: en vez de la foto fija SBMP-3.jpg, el scroll
 * mueve la cámara por el proyecto (llegada → plaza → atardecer) y el recorrido
 * termina justo en el encuadre de esa misma foto.
 *
 * El video se generó con Seedance 2.0 partiendo de las fotos reales del
 * portafolio: cada escena arranca en una fotografía del proyecto y la IA solo
 * interpola el movimiento de cámara. No hay arquitectura inventada.
 *
 * Degradación: sin JS, con prefers-reduced-motion, o si el video no carga,
 * queda el poster fijo — que es el hero actual. Nunca se ve peor que hoy.
 */

const SCROLL_VH = 2.5;   // altura del tramo "pineado", en pantallas
const VIDEO_SRC = '/video/smbp-hero.mp4';
const POSTER_SRC = '/video/smbp-hero-poster.jpg';

const HeroFlythrough: React.FC = () => {
  const formatWithSpaces = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number | null>(null);
  const [scrubbing, setScrubbing] = useState(false);

  // El video se carga como Blob a propósito. Servido por URL normal, el
  // navegador depende de peticiones por rango para poder buscar; si el host no
  // las sirve, `video.seekable` queda en [0,0] y TODO seek cae al frame 0 — el
  // hero se ve congelado. Un object URL de Blob siempre es buscable.
  // Coste: baja los ~9 MB antes de animar. Por eso se salta en móvil y en
  // conexiones lentas, donde queda el poster (= el hero actual).
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    if (window.innerWidth < 768) return;

    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) return;

    let objectUrl: string | null = null;
    let cancelled = false;

    fetch(VIDEO_SRC)
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(String(r.status)))))
      .then((blob) => {
        if (cancelled || !videoRef.current) return;
        objectUrl = URL.createObjectURL(blob);
        videoRef.current.src = objectUrl;
      })
      .catch(() => {
        /* se queda el poster: el hero de siempre */
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const onReady = () => {
      // Solo mostramos el video si de verdad se puede scrubear.
      const ok = video.seekable.length > 0 && video.seekable.end(0) > 0.5;
      if (ok) setScrubbing(true);
    };
    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', onReady);

    // El scroll manda el tiempo deseado; un rAF lo persigue con suavizado para
    // que el seek no vaya a tirones.
    const onScroll = () => {
      const dur = video.duration;
      if (!dur || !isFinite(dur)) return;
      const total = wrap.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / total));
      targetTime.current = p * (dur - 0.05);
    };

    const tick = () => {
      const v = videoRef.current;
      if (v && v.readyState >= 2) {
        const diff = targetTime.current - v.currentTime;
        if (Math.abs(diff) > 0.01) v.currentTime += diff * 0.18;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay', onReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ height: `${SCROLL_VH * 100}vh` }} className="relative">
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Fondo: poster fijo + video encima cuando ya puede scrubear */}
        <img
          src={POSTER_SRC}
          alt="Arte y Dimensiones - Santa Maria Business Park"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <video
          ref={videoRef}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            scrubbing ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Mismo degradado del hero original */}
        <div
          className="absolute inset-0 bg-gradient-to-b z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,15,15,0.35), rgba(15,15,15,0.8), rgba(15,15,15,0.95))',
          }}
        />

        {/* Contenido — idéntico a Hero.tsx */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="relative z-20 text-center text-white w-full md:max-w-3xl md:mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 leading-snug px-2">
              Convertimos conceptos en espacios que{' '}
              <span className="relative inline-block text-brand italic">
                cobran vida
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[3px] bg-brand rounded-full"
                  style={{ transform: 'rotate(-2deg)' }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 font-light leading-relaxed px-4">
              Arquitectura Comercial y Corporativa en Panamá
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
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:text-brand transition-colors border border-white/30 hover:border-brand w-full sm:w-auto"
              >
                Ver Nuestros Proyectos
              </button>
            </div>

            <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
              <div>
                <CounterEffect
                  targetValue={26}
                  prefix="+"
                  suffix=" años"
                  duration={2000}
                  className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
                />
                <div className="text-sm sm:text-base text-white/90 font-medium">de experiencia</div>
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
                <div className="text-sm sm:text-base text-white/90 font-medium">de proyectos comerciales</div>
              </div>
              <div>
                <CounterEffect
                  targetValue={150}
                  prefix="+"
                  suffix=" proyectos"
                  duration={2000}
                  className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2 whitespace-nowrap"
                />
                <div className="text-sm sm:text-base text-white/90 font-medium">construidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroFlythrough;
