import React from "react";

export default function ProjectGallery({ images }: { images: string[] }) {
  if (!images?.length) return null;
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-8">Galería del Proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
