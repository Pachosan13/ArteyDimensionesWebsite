import React, { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projectsMap";

const InteractiveMap: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setActiveProjectId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId]
  );

  const handleActivate = (id: string) => {
    setActiveProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="mapa-panama"
      className="relative overflow-hidden py-16 lg:py-24"
      aria-labelledby="mapa-panama-heading"
    >
      {/* BG: mapa full-width como hero */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/portfolio/mapa-panama-flat.png"
          alt="Mapa de Panamá con ubicaciones destacadas"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay para que no se pierda el contraste */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5F5F5]/95 via-[#F5F5F5]/85 to-[#F5F5F5]/95" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Columna de texto */}
          <div>
            <h2
              id="mapa-panama-heading"
              className="text-[clamp(2rem,3vw,3.75rem)] font-bold uppercase tracking-tight text-[#1F1F1F]"
            >
              Somos la cara de la arquitectura comercial
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-700">
              Cada punto rojo representa un proyecto que optimiza metros
              cuadrados para retail, corporativo o institucional.
              Pasa el cursor o toca para ver más detalles.
            </p>
          </div>

          {/* Zona interactiva sobre el BG (sin card de imagen) */}
          <div
            ref={mapRef}
            className="relative h-[240px] sm:h-[280px] lg:h-[320px]"
          >
            {/* Capa invisible para posicionar los puntos en % */}
            <div className="absolute inset-0">
              {projects.map((project) => {
                const isActive = project.id === activeProjectId;
                return (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`${project.name}, ${project.location}`}
                    aria-pressed={isActive}
                    style={{
                      left: `${project.x}%`,
                      top: `${project.y}%`,
                    }}
                    className="pointer-events-auto absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 shadow-md transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    onClick={() => handleActivate(project.id)}
                    onMouseEnter={() => setActiveProjectId(project.id)}
                    onMouseLeave={() =>
                      setActiveProjectId((prev) =>
                        prev === project.id ? null : prev
                      )
                    }
                    onFocus={() => setActiveProjectId(project.id)}
                    onBlur={() =>
                      setActiveProjectId((prev) =>
                        prev === project.id ? null : prev
                      )
                    }
                  />
                );
              })}

              {activeProject && (
                <div
                  className="pointer-events-none absolute z-20 max-w-[200px] -translate-x-1/2 -translate-y-full rounded-lg bg-white/95 px-3 py-2 text-xs text-gray-800 shadow-xl ring-1 ring-black/5"
                  style={{
                    left: `${activeProject.x}%`,
                    top: `${activeProject.y}%`,
                  }}
                >
                  <p className="text-sm font-semibold">
                    {activeProject.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-red-600">
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
      </div>
    </section>
  );
};

export default InteractiveMap;
