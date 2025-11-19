import React from "react";

const InteractiveMap: React.FC = () => {
  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-28 lg:py-40"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl relative">
          {/* MAPA COMO BACKGROUND */}
          <div className="relative w-full aspect-[14/10]">
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            {/* BLOQUE DE TEXTO A LA IZQUIERDA (SIN TOCAR EL MAPA) */}
            <div className="
              absolute 
              left-10 
              top-10 
              z-20 
              max-w-sm 
              text-left
              md:left-14
              md:top-12
            ">
              <p className="text-[12px] font-semibold tracking-[0.25em] text-neutral-700 uppercase">
                Somos la cara de la
              </p>

              <h2 className="mt-2 font-extrabold leading-[1.05]">
                <span className="block text-[clamp(2.3rem,3vw,3rem)] text-[#F0472D]">
                  Arquitectura
                </span>
                <span className="block text-[clamp(2.3rem,3vw,3rem)] text-[#F0472D]">
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
