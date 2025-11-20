import React from "react";

const InteractiveMap: React.FC = () => {
  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-20"
      aria-label="Mapa de Panamá con proyectos de Arte y Dimensiones"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Ajustamos el alto usando el mismo aspect ratio que la imagen (3:2) */}
          <div className="relative w-full aspect-[3/2]">
            {/* MAPA COMO FONDO */}
            <img
              src="/images/portfolio/mapa-panama-flat.png"
              alt="Mapa de Panamá con proyectos de Arte y Dimensiones"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />

            {/* TEXTO SUPERPUESTO, SIN TAPAR EL MAPA DE LA DERECHA */}
         <div className="absolute left-40 top-10 max-w-sm text-left">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-600 uppercase">
                Somos la cara de la
              </p>

              <h2 className="mt-1 font-extrabold leading-tight">
                <span className="block text-[clamp(2rem,2.8vw,2.6rem)] text-[#F0472D]">
                  Arquitectura
                </span>
                <span className="block text-[clamp(2rem,2.8vw,2.6rem)] text-[#F0472D]">
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
