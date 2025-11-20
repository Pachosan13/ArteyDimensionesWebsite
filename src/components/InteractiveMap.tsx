import React, { useState } from "react";

type ProjectId = "costa-verde" | "coronado" | "penonome" | null;

const PROJECTS_INFO: Record<Exclude<ProjectId, null>, {
  title: string;
  description: string;
  image: string;
  url: string;
}> = {
  "costa-verde": {
    title: "Boulevard Costa Verde",
    description:
      "Boulevard comercial en Costa Verde, diseñado para flujo constante de visitantes y alta visibilidad de marcas.",
    image: "/images/portfolio/boulevard.png",
    url: "/images/portfolio/boulevard.png",
  },
  coronado: {
    title: "Terrazas de Coronado",
    description:
      "Centro comercial abierto en Coronado, pensado para retail, restaurantes y experiencia de fin de semana.",
    image: "/images/portfolio/terrazas-coronado-thumb.jpg",
    url: "/proyectos/terrazas-de-coronado",
  },
  penonome: {
    title: "Boulevard Penonomé",
    description:
      "Boulevard de uso mixto en Penonomé, con enfoque en conveniencia diaria y tráfico vehicular.",
    image: "/images/portfolio/Penonome/Boulevardpenonome.jpg",
    url: "/images/boulevard-penonome",
  },
};

const InteractiveMap: React.FC = () => {
  const [openProject, setOpenProject] = useState<ProjectId>(null);

  const currentProject =
    openProject ? PROJECTS_INFO[openProject] : null;

  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="relative w-full aspect-[18/14]">
            {/* MAPA DE FONDO */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />

            {/* CAPA PARA HEADLINE + HOTSPOTS */}
            <div className="absolute inset-0">
              {/* HEADLINE EN EL HUECO BLANCO */}
              <div className="absolute left-[25%] top-[18%] -translate-x-1/2 -translate-y-1/2 max-w-xs text-center">
                <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
                  Somos la cara de la
                </p>

                <h2 className="mt-1 font-extrabold leading-tight">
                  <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)] text-[#F0472D]">
                    Arquitectura
                  </span>
                  <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)] text-[#F0472D]">
                    Comercial
                  </span>
                </h2>

                <p className="mt-1 text-sm font-medium text-neutral-700">
                  en Panamá
                </p>
              </div>

              {/* HOTSPOTS INVISIBLES */}
              {/* OJO: ajusta left/top hasta que queden EXACTAMENTE encima del texto de la imagen */}
              {/* Boulevard Costa Verde */}
              <button
                type="button"
                onClick={() => setOpenProject("costa-verde")}
                aria-label="Ver detalles Boulevard Costa Verde"
                className="absolute bg-transparent border-none p-0"
                style={{
                  left: "50%", // X
                  top: "58%",  // Y
                  width: "170px",
                  height: "34px",
                  cursor: "pointer",
                }}
              >
                <span className="sr-only">Boulevard Costa Verde</span>
              </button>

              {/* Terrazas de Coronado */}
              <button
                type="button"
                onClick={() => setOpenProject("coronado")}
                aria-label="Ver detalles Terrazas de Coronado"
                className="absolute bg-transparent border-none p-0"
                style={{
                  left: "47%", // un poco más a la izquierda
                  top: "69%",
                  width: "180px",
                  height: "34px",
                  cursor: "pointer",
                }}
              >
                <span className="sr-only">Terrazas de Coronado</span>
              </button>

              {/* Boulevard Penonomé */}
              <button
                type="button"
                onClick={() => setOpenProject("penonome")}
                aria-label="Ver detalles Boulevard Penonomé"
                className="absolute bg-transparent border-none p-0"
                style={{
                  left: "44%",
                  top: "79%",
                  width: "190px",
                  height: "34px",
                  cursor: "pointer",
                }}
              >
                <span className="sr-only">Boulevard Penonomé</span>
              </button>
            </div>

            {/* MODAL DEL PROYECTO (CENTRADO, MISMA UI PARA LOS 3) */}
            {currentProject && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                onClick={() => setOpenProject(null)}
              >
                <div
                  className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={currentProject.image}
                      alt={`Vista del proyecto ${currentProject.title}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {currentProject.title}
                    </h3>

                    <p className="text-sm text-neutral-700">
                      {currentProject.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setOpenProject(null)}
                        className="text-sm text-neutral-500 hover:text-neutral-700"
                      >
                        Cerrar
                      </button>

                      <a
                        href={currentProject.url}
                        className="inline-flex items-center gap-1 rounded-full bg-[#F0472D] px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d63e25]"
                      >
                        Ver proyecto
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
