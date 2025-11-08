import React from "react";

export default function ServiceGallery({ images }: { images: string[] }) {
  return (
    <section id="portafolio" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-8 md:mb-12">
          Portafolio Destacado
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl shadow-xl bg-neutral-100">
              <img
                src={src}
                alt={`Proyecto ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}