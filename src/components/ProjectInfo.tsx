import React from "react";

export default function ProjectInfo({
  description
}: { description: string }) {
  return (
    <section className="relative -mt-16 md:-mt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-10">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-bold text-[#1F1F1F] mb-4">
            Resumen del Proyecto
          </h2>
          <p className="text-lg leading-relaxed text-[#4B4B4B]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
