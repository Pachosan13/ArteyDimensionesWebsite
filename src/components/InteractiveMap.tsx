import React, { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  id: string;
  name: string;
  location: string;
  x: number; // posición en % sobre el mapa
  y: number; // posición en % sobre el mapa
  image: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    id: "santa-maria",
    name: "Santa María Business Park",
    location: "Santa María, Ciudad de Panamá",
    x: 63, // AJUSTA estos valores en DevTools
    y: 46,
    image: "/images/portfolio/santa-maria.jpg", // pon aquí la ruta real
    href: "/proyectos/santa-maria-business-park",
  },
  {
    id: "boulevard-costa-verde",
    name: "Boulevard Costa Verde",
    location: "La Chorrera",
    x: 48,
    y: 70,
    image: "/images/portfolio/boulevard-costa-verde.jpg",
    href: "/proyectos/boulevard-costa-verde",
  },
  // agrega más proyectos aquí
];

const InteractiveMap: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  // Cerrar al hacer click fuera o con Esc
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!activeProjectId) return;
      const target = event.target as Node;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        containerRef.current &&
        containerRef.current.contains(target)
      ) {
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
  }, [activeProjectId]);

  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <div className="relative w-full aspect-[18/14]">
            {/* MAPA DE FONDO */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />

            {/* HEADLINE SUPERPUESTO (centrado visualmente en el hueco blanco) */}
            <div className="absolute top-10 left-[26%] -translate-x-1/2 text-center">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-700 uppercase">
                Somos la cara de la
              </p>

              <h2 className="mt-1 font-extrabold leading-tight">
                <span className="block text-[clamp(2.2rem,3.2vw,2.9rem)] text-[#F0472D]">
                  Arquitectura
                </span>
                <span className="block text-[clamp(2.2rem,3.2vw,2.9rem)] text-[#F0472D]">
                  Comercial
                </span>
              </h2>

              <p className="mt-1 text-sm font-medium text-neutral-800">
                en Panamá
              </p>
            </div>

            {/* HOTSPOTS INTERACTIVOS */}
            <div className="absolute inset-0">
              {PROJECTS.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`${project.name}, ${project.location}`}
                  aria-pressed={activeProjectId === project.id}
                  onClick={() =>
                    setActiveProjectId((prev) =>
                      prev === project.id ? null : project.id
                    )
                  }
                  className="absolute z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-white bg-[#F0472D] shadow-md transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0472D]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  style={{
                    left: `${project.x}%`,
                    top: `${project.y}%`,
                  }}
                />
              ))}
            </div>

            {/* MINI-MODAL / TOOLTIP CON FOTO + LINK */}
            {activeProject && (
              <div
                ref={modalRef}
                className="absolute z-20 max-w-xs -translate-x-1/2 -translate-y-full rounded-2xl bg-white/95 p-3 text-left shadow-2xl ring-1 ring-black/5 backdrop-blur-sm"
                style={{
                  left: `${activeProject.x}%`,
                  top: `${activeProject.y}%`,
                }}
              >
                <div className="flex gap-3">
                  <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-200">
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {activeProject.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-600">
                      {activeProject.location}
                    </p>

                    <a
                      href={activeProject.href}
                      className="mt-2 inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-[#F0472D] hover:text-[#d63a22]"
                    >
                      Ver proyecto
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectId(null)}
                  className="absolute right-1.5 top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
                  aria-label="Cerrar detalle de proyecto"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
