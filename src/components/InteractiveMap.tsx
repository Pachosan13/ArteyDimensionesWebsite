import React, { useState } from "react";

const InteractiveMap: React.FC = () => {
  const [openProject, setOpenProject] = useState<"santa-maria" | null>(null);

  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="relative w-full aspect-[18/14]">

            {/* MAPA */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            {/* LAYER DE TEXTO + HOTSPOTS */}
            <div className="absolute inset-0">

              {/* HEADLINE EN EL ESPACIO BLANCO */}
              <div className="absolute left-[32%] top-[19%] -translate-x-1/2 -translate-y-1/2 max-w-xs text-center">
                <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
                  Somos la cara de la
                </p>

                <h2 className="mt-1 font-extrabold leading-tight text-[#F0472D]">
                  <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)]">
                    Arquitectura
                  </span>
                  <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)]">
                    Comercial
                  </span>
                </h2>

                <p className="mt-1 text-sm font-medium text-neutral-700">
                  en Panamá
                </p>
              </div>

              {/* 🔥 HOTSPOT INVISIBLE – SANTA MARÍA 🔥 */}
              <button
                type="button"
                onClick={() => setOpenProject("santa-maria")}
                aria-label="Ver detalles de Santa María Business Park"
                className="absolute"
                style={{
                  left: "62.5%", 
                  top: "58%", 
                  width: "150px",
                  height: "34px",
                  cursor: "pointer",
                  background: "transparent",
                }}
              />
            </div>

            {/* MODAL */}
            {openProject === "santa-maria" && (
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
                      src="/images/portfolio/santa-maria-thumb.jpg"
                      alt="Santa María Business Park"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      Santa María Business Park
                    </h3>

                    <p className="text-sm text-neutral-700">
                      Complejo corporativo de uso mixto en Santa María, diseñado para maximizar
                      visibilidad, flujo peatonal y valor inmobiliario.
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
                        href="/proyectos/santa-maria-business-park"
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
