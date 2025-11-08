import React, { useState } from "react";

export default function ContactServiceForm() {
  const [status, setStatus] = useState<"idle"|"sent">("idle");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar con backend/Supabase/GHL/webhook
    setStatus("sent");
  };
  return (
    <section id="contacto-servicio" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-xl p-6 md:p-10 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)]">Solicitar Propuesta</h3>
          {status === "sent" ? (
            <div className="p-4 rounded-lg bg-[var(--neutral-100)] text-neutral-700">
              ¡Gracias! Te contactaremos muy pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nombre" className="w-full rounded-xl border border-neutral-300 p-3" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl border border-neutral-300 p-3" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Empresa" className="w-full rounded-xl border border-neutral-300 p-3" />
                <input placeholder="Teléfono" className="w-full rounded-xl border border-neutral-300 p-3" />
              </div>
              <textarea placeholder="Cuéntanos sobre tu proyecto" className="w-full rounded-xl border border-neutral-300 p-3 min-h-[120px]" />
              <button type="submit" className="rounded-xl px-6 py-3 font-semibold bg-brand text-white hover:bg-brand/90 transition self-start" style={{backgroundColor:"var(--brand)"}}>
                Enviar
              </button>
              <p className="text-xs text-neutral-500">Protegemos tu información. Solo la usamos para responder a tu solicitud.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}