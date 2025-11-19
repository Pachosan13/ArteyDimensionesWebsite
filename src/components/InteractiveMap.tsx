import React from "react";

const InteractiveMap: React.FC = () => {
  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl">
          {/* Wrapper del mapa */}
          <div className="relative w-full aspect-[16/7]">
            {/* MAPA FULL CARD */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-contain object-center"
              loading="lazy"
            />

            {/* TEXTO SUPERPUESTO A LA DERECHA, SIN TOCAR EL MAPA */}
            <div className="absolute right-6 top-6 max-w-xs text-right md:right-10 md:top-8">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
                Somos la cara de la
              </p>

              <h2 className="mt-1 font-extrabold leading-tight">
                <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)] text-[#F25C2A]">
                  Arquitectura
                </span>
                <span className="block text-[clamp(2.1rem,3.1vw,2.8rem)] text-[#F25C2A]">
                  Comercial
                </span>
              </h2>

              <p className="mt-1 text-sm font-medium text-neutral-700">
                en Panamá
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
