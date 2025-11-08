import React from "react";

export default function ProjectInfo({
  description
}: { description: string }) {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">Resumen del Proyecto</h2>
        <p className="text-lg leading-relaxed text-[#4B4B4B]">{description}</p>
      </div>
    </section>
  );
}
