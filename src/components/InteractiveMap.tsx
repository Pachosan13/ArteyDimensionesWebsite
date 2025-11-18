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

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId],
  );

  const handleActivate = (id: string) => {
    setActiveProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-labelledby="mapa-panama-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]"
          ref={containerRef}
        >
          <div>
            <h2
              id="mapa-panama-heading"
              className="text-[clamp(2rem,3vw,3.75rem)] font-bold uppercase tracking-tight text-[#1F1F1F]"
            >
              Somos la cara de la arquitectura comercial
            </h2>
          </div>

          {/* CARD DEL MAPA: toda la tarjeta es el mapa de fondo */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="relative aspect-[5/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/portfolio/mapa-panama-flat.png')" }}
              aria-label="Mapa de Panamá con ubicaciones destacadas"
            >
              {/* Capa de puntos + tooltip encima del mapa */}
              <div className="pointer-events-none absolute inset-0">
                {projects.map((project) => {
                  const isActive = project.id === activeProjectId;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      aria-label={`${project.name}, ${project.location}`}
                      aria-pressed={isActive}
                      style={{ left: `${project.x}%`, top: `${project.y}%` }}
                      className="pointer-events-auto absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 shadow-md transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      onClick={() => handleActivate(project.id)}
                      onMouseEnter={() => setActiveProjectId(project.id)}
                      onMouseLeave={() =>
                        setActiveProjectId((prev) => (prev === project.id ? null : prev))
                      }
                      onFocus={() => setActiveProjectId(project.id)}
                      onBlur={() =>
                        setActiveProjectId((prev) => (prev === project.id ? null : prev))
                      }
                    />
                  );
                })}

                {activeProject && (
                  <div
                    className="pointer-events-none absolute z-20 max-w-[180px] -translate-x-1/2 -translate-y-full rounded-lg bg-white px-3 py-2 text-xs text-gray-800 shadow-xl ring-1 ring-black/5 transition"
                    style={{ left: `${activeProject.x}%`, top: `${activeProject.y}%` }}
                  >
                    <p className="text-sm font-semibold">{activeProject.name}</p>
                    <p className="text-[11px] uppercase tracking-wide text-brand">
                      {activeProject.location}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-600">
                      {activeProject.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* FIN CARD MAPA */}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
