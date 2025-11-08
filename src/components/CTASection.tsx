import React from "react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-white shadow-xl p-8 md:p-12 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)]">¿Listo para transformar tu espacio?</h3>
          <p className="text-neutral-700">Conversemos sobre tu proyecto y te preparamos una propuesta a medida.</p>
          <a href="#contacto-servicio" className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold shadow-lg bg-brand text-white hover:bg-brand/90 transition" style={{backgroundColor:"var(--brand)"}}>
            Ponte En Contacto Con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
}