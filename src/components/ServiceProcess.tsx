import React from "react";

const steps = [
  { title: "Descubrimiento", desc: "Levantamiento, entrevistas y objetivos. Definimos KPIs y alcance." },
  { title: "Diseño", desc: "Concepto, layout, materiales, renders y documentación lista para ejecutar." },
  { title: "Ejecución", desc: "Coordinación de obra, calidad, seguridad y entregas sin sorpresas." }
];

export default function ServiceProcess() {
  return (
    <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:3xl font-bold text-[var(--neutral-900)] mb-8 md:mb-12">
          Nuestro Proceso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-3">
              <h3 className="text-lg md:text-xl font-semibold text-[var(--neutral-900)]">{s.title}</h3>
              <p className="text-[15px] md:text-base text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}