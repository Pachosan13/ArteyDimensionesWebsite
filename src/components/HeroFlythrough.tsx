import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CounterEffect from './CounterEffect';

/**
 * Hero con recorrido por scroll de Santa Maria Business Park.
 *
 * El scroll mueve la cámara por el proyecto (llegada → plaza → atardecer) y el
 * recorrido termina en el encuadre de SBMP-3.jpg, la foto que era el hero fijo.
 *
 * Sobre la imagen queda SOLO el titular: los CTAs y los contadores viven en una
 * tarjeta debajo, para no tapar la arquitectura. Una barra vertical marca en qué
 * escena va el recorrido.
 *
 * El video se generó con Seedance 2.0 partiendo de las fotos reales del
 * portafolio: cada escena arranca en una fotografía del proyecto y la IA solo
 * interpola el movimiento de cámara. No hay arquitectura inventada.
 *
 * Degradación: sin JS, con prefers-reduced-motion, en móvil o si el video no
 * carga, queda el poster fijo — que es el hero de siempre.
 */

const SCROLL_VH = 3;     // altura del tramo "pineado", en pantallas
const VIDEO_SRC = '/video/smbp-hero.mp4';
const POSTER_SRC = '/video/smbp-hero-poster.jpg';

const SCENES = ['La llegada', 'La plaza', 'Al caer la tarde'];

const HeroFlythrough: React.FC = () => {
  const formatWithSpaces = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fillRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const labelRef = useRef<HTMLSpanElement>(null);
  const targetTime = useRef(0);
  const progress = useRef(0);
  const activeScene = useRef(-1);
  const rafId = useRef<number | null>(null);
  const [scrubbing, setScrubbing] = useState(false);

  // El video se carga como Blob a propósito. Servido por URL normal, el
  // navegador depende de peticiones por rango para poder buscar; si el host no
  // las sirve, `video.seekable` queda en [0,0] y TODO seek cae al frame 0 — el
  // hero se ve congelado. Un object URL de Blob siempre es buscable.
  // Coste: baja los ~9 MB antes de animar. Por eso se salta en móvil y en
  // conexiones lentas, donde queda el poster (= el hero de siempre).
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
      if (video.seekable.length > 0 && video.seekable.end(0) > 0.5) setScrubbing(true);
    };
    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', onReady);

    const onScroll = () => {
      const total = wrap.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / total));
      progress.current = p;
      const dur = video.duration;
      if (dur && isFinite(dur)) targetTime.current = p * (dur - 0.05);
    };

    // La barra y el video se actualizan por rAF mutando el DOM directamente:
    // meter esto en el estado de React re-renderizaría en cada scroll.
    const tick = () => {
      const p = progress.current;

      for (let i = 0; i < SCENES.length; i++) {
        const seg = Math.min(1, Math.max(0, p * SCENES.length - i));
        const fill = fillRefs.current[i];
        if (fill) fill.style.transform = `scaleY(${seg})`;
        const dot = dotRefs.current[i];
        if (dot) dot.style.opacity = seg > 0 && seg < 1 ? '1' : '0.35';
      }

      const idx = Math.min(SCENES.length - 1, Math.floor(p * SCENES.length));
      if (idx !== activeScene.current) {
        activeScene.current = idx;
        if (labelRef.current) labelRef.current.textContent = SCENES[idx];
      }

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
    <>
      <div ref={wrapRef} style={{ height: `${SCROLL_VH * 100}vh` }} className="relative">
        <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
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

          {/* Degradado liviano: oscurece arriba (nav) y abajo (titular), deja
              respirar la arquitectura en el centro. */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.12) 30%, rgba(15,15,15,0.10) 55%, rgba(15,15,15,0.72) 100%)',
            }}
          />

          {/* Barra vertical de escenas. Va sobre una píldora oscura difuminada
              para que se lea igual contra el cielo claro que contra el vidrio. */}
          <div className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3">
            <span
              ref={labelRef}
              className="hidden sm:block text-[11px] tracking-[0.18em] uppercase text-white font-semibold whitespace-nowrap"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.85)' }}
            >
              {SCENES[0]}
            </span>
            <div
              className="flex flex-col gap-2 rounded-full bg-black/30 backdrop-blur-sm px-[7px] py-3 ring-1 ring-white/15"
              aria-hidden="true"
            >
              {SCENES.map((s, i) => (
                <span
                  key={s}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="relative block w-1 h-12 sm:h-16 rounded-full bg-white/45 overflow-hidden transition-opacity duration-300"
                >
                  <span
                    ref={(el) => { fillRefs.current[i] = el; }}
                    className="absolute inset-0 bg-brand origin-top"
                    style={{ transform: 'scaleY(0)' }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Solo el titular sobre la imagen */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white md:max-w-3xl md:mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug px-2"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
              >
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
            </div>
          </div>

          {/* Indicación de scroll */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 text-[11px] tracking-[0.2em] uppercase">
            Baja para recorrerlo
          </div>
        </section>
      </div>

      {/* Tarjeta: lo que antes tapaba la imagen. 100% de ancho en móvil. */}
      <section className="relative z-30 -mt-10 sm:-mt-16 px-0 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-none sm:rounded-2xl shadow-xl px-5 py-8 sm:px-10 sm:py-10">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed text-center">
            Arquitectura Comercial y Corporativa en Panamá
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <button
              onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Solicitar Propuesta</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-gray-800 border border-gray-300 hover:border-brand hover:text-brand transition-colors w-full sm:w-auto"
            >
              Ver Nuestros Proyectos
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <CounterEffect
                targetValue={26}
                prefix="+"
                suffix=" años"
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2"
              />
              <div className="text-sm sm:text-base text-gray-600 font-medium">de experiencia</div>
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
              <div className="text-sm sm:text-base text-gray-600 font-medium">de proyectos comerciales</div>
            </div>
            <div>
              <CounterEffect
                targetValue={150}
                prefix="+"
                suffix=" proyectos"
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2 whitespace-nowrap"
              />
              <div className="text-sm sm:text-base text-gray-600 font-medium">construidos</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFlythrough;
