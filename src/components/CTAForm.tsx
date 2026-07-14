import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';

const CTAForm: React.FC = () => {
  const { locale, t } = useI18n();
  const { ctaForm } = t;

  const [formData, setFormData] = useState({ nombre: '', email: '', tipoProyecto: '', mensaje: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'cta-homepage',
          // Sales needs to know which language the lead came in on so they reply in it.
          locale,
          pageUrl: window.location.href,
        }),
      });

      if (!res.ok) throw new Error('Failed');
      setFormStatus('success');
      setFormData({ nombre: '', email: '', tipoProyecto: '', mensaje: '' });
    } catch {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (formStatus === 'success') setFormStatus('idle');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactRows = [
    { icon: Mail, title: ctaForm.emailLabel, info: 'info@artedim.com' as React.ReactNode },
    {
      icon: Phone,
      title: ctaForm.phoneLabel,
      info: (
        <a
          href="tel:+5072632109"
          className="hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          +507 263 2109
        </a>
      ),
    },
    { icon: MapPin, title: ctaForm.officeLabel, info: t.footer.address },
  ];

  const textFields = [
    { id: 'nombre', label: ctaForm.nameLabel, type: 'text', placeholder: ctaForm.namePlaceholder },
    { id: 'email', label: ctaForm.emailFieldLabel, type: 'email', placeholder: ctaForm.emailPlaceholder },
  ];

  return (
    <section id="formulario-cta" className="bg-brand py-16 lg:py-24 relative" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-brand opacity-95" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center text-white mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="cta-title"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6"
          >
            {ctaForm.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            {ctaForm.subheading}
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="font-bold text-2xl mb-4">{ctaForm.whyHeading}</h3>
              <ul className="space-y-2 opacity-90 text-base leading-relaxed">
                {ctaForm.whyPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold mb-6">{ctaForm.contactHeading}</h3>
              <div className="space-y-6">
                {contactRows.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      <div className="opacity-90">{contact.info}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">{ctaForm.formHeading}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {textFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-[#4B4B4B] mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    minLength={3}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 min-h-[52px] border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="tipoProyecto" className="block text-sm font-medium text-[#4B4B4B] mb-2">
                  {ctaForm.projectTypeLabel}
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="tipoProyecto"
                  name="tipoProyecto"
                  required
                  value={formData.tipoProyecto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-[52px] border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                >
                  <option value="">{ctaForm.projectTypePlaceholder}</option>
                  {/* Values stay stable across locales so the CRM keeps one taxonomy. */}
                  {ctaForm.projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#4B4B4B] mb-2">
                  {ctaForm.messageLabel}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-[120px] border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                  placeholder={ctaForm.messagePlaceholder}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={formStatus === 'loading'}
                whileHover={formStatus !== 'loading' ? { scale: 1.05 } : {}}
                whileTap={formStatus !== 'loading' ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full btn-brand py-4 px-6 rounded-2xl font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-70"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{ctaForm.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{ctaForm.submit}</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-4 text-center text-sm text-[#4B4B4B]/70" role="status" aria-live="polite">
              {formStatus === 'success' && ctaForm.success}
              {formStatus === 'error' && ctaForm.error}
              {(formStatus === 'idle' || formStatus === 'loading') && ctaForm.guarantee}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
