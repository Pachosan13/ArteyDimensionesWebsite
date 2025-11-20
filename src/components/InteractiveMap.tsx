import React, { useState } from "react";

const InteractiveMap: React.FC = () => {
  const [openProject, setOpenProject] = useState<"santa-maria" | null>(null);

  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="relative w-full aspect-[16/9]">
            {/* MAPA DE FONDO */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />

            {/* CAPA PARA HEADLINE + HOTSPOTS */}
            <div className="absolute inset-0">
              {/* HEADLINE CENTRADO EN EL HUECO BLANCO */}
              <div className="absolute left-[24%] top-[20%] -translate-x-1/2 -translate-y-1/2 max-w-xs text-center">
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

              {/* HOTSPOT SANTA MARÍA – PASTILLA SOBRE EL TEXTO DEL MAPA */}
              <button
                type="button"
                className="group absolute"
                style={{
                  left: "63%", // ajusta fino aquí
                  top: "56%",  // y aquí hasta que coincida con el texto del mapa
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setOpenProject("santa-maria")}
                aria-label="Ver detalles de Santa María Business Park"
              >
                {/* Desktop: pastilla con borde */}
                <span className="hidden md:inline-flex items-center rounded-full border border-[#F0472D] bg-white/85 px-3 py-1 text-[11px] font-semibold text-[#F0472D] shadow-sm transition group-hover:bg-[#F0472D] group-hover:text-white">
                  Santa María Business Park
                </span>
                {/* Mobile: solo un punto clickable para no ensuciar */}
                <span className="inline md:hidden h-3 w-3 rounded-full bg-[#F0472D]" />
              </button>
            </div>

            {/* MODAL DEL PROYECTO */}
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
                    {/* Cambia por el thumb real */}
                    <img
                      src="/images/portfolio/santa-maria-thumb.jpg"
                      alt="Vista del proyecto Santa María Business Park"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      Santa María Business Park
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Complejo corporativo de uso mixto en Santa María,
                      diseñado para maximizar visibilidad, flujo peatonal
                      y valor inmobiliario.
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
