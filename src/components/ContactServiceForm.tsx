import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider";

interface ContactServiceFormProps {
  serviceSlug?: string;
}

export default function ContactServiceForm({ serviceSlug }: ContactServiceFormProps) {
  const { locale, t } = useI18n();
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
          ...formData,
          source: 'contacto-servicio',
          serviceSlug: serviceSlug || '',
          // Sales needs to know which language the lead came in on so they reply in it.
          locale,
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

  const { serviceForm } = t;

  return (
    <section id="contacto-servicio" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-xl p-6 md:p-10 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)]">{serviceForm.heading}</h2>
          {status === "sent" ? (
            <div className="p-4 rounded-lg bg-[var(--neutral-100)] text-neutral-700">{serviceForm.sent}</div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="nombre"
                  aria-label={serviceForm.name}
                  placeholder={serviceForm.name}
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
                <input
                  required
                  type="email"
                  name="email"
                  aria-label={serviceForm.email}
                  placeholder={serviceForm.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="empresa"
                  aria-label={serviceForm.company}
                  placeholder={serviceForm.company}
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
                <input
                  name="telefono"
                  aria-label={serviceForm.phone}
                  placeholder={serviceForm.phone}
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 p-3"
                />
              </div>
              <textarea
                name="mensaje"
                aria-label={serviceForm.message}
                placeholder={serviceForm.message}
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
                    {serviceForm.submitting}
                  </>
                ) : (
                  <>
                    {serviceForm.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === 'error' && <p className="text-sm text-red-600">{serviceForm.error}</p>}
              <p className="text-xs text-neutral-500">{serviceForm.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
