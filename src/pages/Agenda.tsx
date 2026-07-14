import React, { useMemo, useEffect } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/LanguageProvider';

const CALENDAR_ID = '4OUvSD3PGw6uj7ORSBkS';
const WHATSAPP = '+507 263-2109';
const EMAIL = 'info@artedim.com';

const Agenda: React.FC = () => {
  const { locale, t } = useI18n();
  const { contactPage } = t;

  useEffect(() => {
    const existing = document.querySelector('script[src*="leadconnectorhq.com/js/form_embed.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />

      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#4B4B4B] to-[#2A2A2A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {contactPage.heroPre} <span className="text-brand">{contactPage.heroHighlight}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{contactPage.heroSubtitle}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactPage.bullets.map((bullet, i) => {
              const Icon = [CheckCircle, Clock, Shield][i];
              return (
                <div key={bullet} className="flex items-center justify-center space-x-3">
                  <Icon className="h-6 w-6 text-brand flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4B4B4B] mb-4">{contactPage.calendarHeading}</h2>
              <p className="text-[#4B4B4B]/80">{contactPage.calendarSubheading}</p>
            </div>

            <div id="calendar-embed" className="min-h-[600px] rounded-xl overflow-hidden">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="ghl-booking-iframe"
                title={contactPage.iframeTitle}
              />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#4B4B4B] mb-3">{contactPage.includesHeading}</h3>
                  <ul className="space-y-2 text-[#4B4B4B]/80">
                    {contactPage.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#4B4B4B] mb-3">{contactPage.commitmentHeading}</h3>
                  <ul className="space-y-2 text-[#4B4B4B]/80">
                    {contactPage.commitments.map((item) => (
                      <li key={item} className="flex items-start">
                        <Shield className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-[#4B4B4B]/60">
            <Shield className="h-5 w-5" />
            <span>{contactPage.privacyNote}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#4B4B4B] mb-6">{contactPage.altContactHeading}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}`}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>WhatsApp: {WHATSAPP}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-brand px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Email: {EMAIL}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
