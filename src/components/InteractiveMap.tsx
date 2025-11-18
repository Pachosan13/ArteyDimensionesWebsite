import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { projects } from '../data/projectsMap';

const mapOverlay = 'linear-gradient(135deg, rgba(15,15,15,0.08), rgba(15,15,15,0.25))';

const InteractiveMap: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveProjectId(null);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  return (
    <section id="mapa-panama" className="bg-[#F5F5F5] py-16 lg:py-24" aria-labelledby="mapa-panama">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          <div className="lg:w-2/5">
            <p className="text-sm font-semibold tracking-[0.25em] text-brand mb-3 uppercase">
              Somos la cara de la arquitectura comercial
            </p>
            <h2 id="mapa-panama" className="text-[clamp(1.75rem,3vw,3.2rem)] font-bold text-[#1F1F1F] leading-tight mb-4">
              Presencia comprobada en las principales ciudades de Panamá.
            </h2>
            <p className="text-lg text-[#4B4B4B] leading-relaxed">
              Cada punto rojo representa un proyecto que optimiza metros cuadrados para retail, corporativo o institucional. Pasa el cursor o toca para conocer más detalles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white shadow text-sm font-medium text-[#1F1F1F]">
                +150 proyectos realizados
              </span>
              <span className="px-4 py-2 rounded-full bg-white shadow text-sm font-medium text-[#1F1F1F]">
                +410 000 m² construidos
              </span>
            </div>
          </div>

          <div
            className="relative lg:w-3/5 rounded-[32px] bg-gradient-to-b from-gray-100 to-gray-200 shadow-2xl overflow-hidden"
            style={{ backgroundImage: mapOverlay }}
          >
            <div className="relative w-full aspect-[4/3]">
              <svg
                viewBox="0 0 800 600"
                role="img"
                aria-label="Mapa estilizado de Panamá con proyectos destacados"
                className="w-full h-full text-gray-300"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d5d7da" />
                    <stop offset="100%" stopColor="#b9bcc2" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,340 C120,220 220,200 300,220 C370,235 420,200 470,210 C520,220 600,270 660,250 C720,230 760,270 770,310 C780,350 760,400 700,420 C640,440 560,430 510,450 C460,470 420,500 360,520 C300,540 180,520 120,480 C60,440 -20,380 50,340 Z"
                  fill="url(#mapGradient)"
                  stroke="#b0b2b8"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
              </svg>

              {projects.map((project) => {
                const isActive = activeProjectId === project.id;
                return (
                  <div
                    key={project.id}
                    className="absolute"
                    style={{ left: `${project.x}%`, top: `${project.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <button
                      type="button"
                      aria-label={`${project.name} en ${project.location}`}
                      aria-expanded={isActive}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#b71c1c] border-2 border-white shadow-lg flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onMouseEnter={() => setActiveProjectId(project.id)}
                      onMouseLeave={() => !isTouchDevice && setActiveProjectId(null)}
                      onFocus={() => setActiveProjectId(project.id)}
                      onBlur={() => setActiveProjectId(null)}
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveProjectId((prev) => (prev === project.id ? null : project.id));
                      }}
                    >
                      <MapPin className="w-3 h-3 text-white" aria-hidden="true" />
                    </button>

                    <div
                      role="status"
                      className={`pointer-events-none absolute left-1/2 top-full mt-3 w-48 sm:w-56 -translate-x-1/2 rounded-xl border border-gray-200 bg-white/95 p-4 text-left shadow-xl transition duration-200 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#1F1F1F]">{project.name}</p>
                      <p className="text-xs uppercase tracking-wide text-brand">{project.location}</p>
                      <p className="mt-2 text-xs text-[#4B4B4B]">{project.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
