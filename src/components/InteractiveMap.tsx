import React, { useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '../data/projectsMap';

const InteractiveMap: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveProjectId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const activeProject = useMemo(() => projects.find((project) => project.id === activeProjectId), [activeProjectId]);

  const handleActivate = (id: string) => {
    setActiveProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="mapa-panama" className="bg-[#F5F5F5] py-16 lg:py-24" aria-labelledby="mapa-panama-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_1.1fr] lg:items-center" ref={containerRef}>
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-brand mb-3 uppercase">
              Somos la cara de la arquitectura comercial
            </p>
            <h2
              id="mapa-panama-heading"
              className="text-[clamp(1.75rem,3vw,3.2rem)] font-bold text-[#1F1F1F] leading-tight mb-4"
            >
              Presencia comprobada en las principales ciudades de Panamá.
            </h2>
            <p className="text-lg text-[#4B4B4B] leading-relaxed">
              Cada punto rojo representa un proyecto que optimiza metros cuadrados para retail, corporativo o institucional.
              Pasa el cursor o toca para conocer más detalles y ubicar la cobertura real del istmo.
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

          <div className="relative">
            <div className="relative rounded-[32px] border border-white/70 bg-gradient-to-b from-gray-50 to-gray-100 p-4 shadow-2xl">
              <div className="relative w-full overflow-hidden rounded-3xl bg-[#E3E6EA]">
                <div className="relative w-full aspect-[5/3]">
                  <img
                    src="/images/portfolio/mapa-panama-flat.png"
                    alt="Mapa de Panamá con ubicaciones destacadas"
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                  />

                  {projects.map((project) => {
                    const isActive = project.id === activeProjectId;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        aria-label={`${project.name}, ${project.location}`}
                        aria-pressed={isActive}
                        style={{ left: `${project.x}%`, top: `${project.y}%` }}
                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-white bg-red-600 shadow-md transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand hover:scale-110"
                        onClick={() => handleActivate(project.id)}
                        onMouseEnter={() => setActiveProjectId(project.id)}
                        onMouseLeave={() => setActiveProjectId((prev) => (prev === project.id ? null : prev))}
                        onFocus={() => setActiveProjectId(project.id)}
                        onBlur={() => setActiveProjectId((prev) => (prev === project.id ? null : prev))}
                      />
                    );
                  })}

                  {activeProject && (
                    <div
                      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full px-3 py-2 bg-white rounded-lg shadow-xl text-xs text-gray-800 max-w-[180px] ring-1 ring-black/5 transition"
                      style={{ left: `${activeProject.x}%`, top: `${activeProject.y}%` }}
                    >
                      <p className="font-semibold text-sm">{activeProject.name}</p>
                      <p className="text-[11px] uppercase tracking-wide text-brand">{activeProject.location}</p>
                      <p className="mt-1 text-[11px] text-gray-600">{activeProject.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
