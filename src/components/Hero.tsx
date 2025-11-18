import React from "react";

const PanamaMapSection: React.FC = () => {
  return (
    <section
      id="mapa-panama"
      className="bg-[#F5F5F5] py-16 lg:py-24"
      aria-labelledby="mapa-panama-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Título / texto */}
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F25A33]">
            Somos la cara de la arquitectura comercial
          </p>
          <h2
            id="mapa-panama-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1F1F1F]"
          >
            Presencia comprobada en las principales ciudades de Panamá.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B4B4B]">
            Cada punto rojo representa un proyecto que optimiza metros cuadrados
            para retail, corporativo o institucional.
          </p>
        </div>

        {/* CARD 100% WIDTH CON MAPA COMO BACKGROUND */}
        <div className="relative w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl">
          {/* Wrapper para controlar proporción */}
          <div
            className="relative w-full pb-[45%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/images/portfolio/mapa-panama-flat.png')",
            }}
          >
            {/* Capa opcional para suavizar el mapa */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10" />

            {/* Aquí irían tus puntos interactivos si los quieres luego */}
            {/* <div className="absolute inset-0">
              ...
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanamaMapSection;
