import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";

interface ContactServiceFormProps {
  serviceSlug?: string;
}

export default function ContactServiceForm({ serviceSlug }: ContactServiceFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status === 'sent' || status === 'error') setStatus('idle');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          source: 'contacto-servicio',
          serviceSlug: serviceSlug || '',
          pageUrl: window.location.href,
        }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus("sent");
      setFormData({ nombre: '', email: '', empresa: '', telefono: '', mensaje: '' });
    } catch {
      setStatus("error");
    }
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
                <input
                  required
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
                <input
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
              </div>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-300 p-3 min-h-[120px]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-xl px-6 py-3 font-semibold bg-brand text-white hover:bg-brand/90 transition self-start flex items-center gap-2 disabled:opacity-70"
                style={{ backgroundColor: "var(--brand)" }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-600">Hubo un error. Intenta de nuevo o contáctanos directamente.</p>
              )}
              <p className="text-xs text-neutral-500">Protegemos tu información. Solo la usamos para responder a tu solicitud.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
