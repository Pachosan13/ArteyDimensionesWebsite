import React from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';
import { SITE } from '../data/services';

const Agenda: React.FC = () => {
  React.useEffect(() => {
    document.title = `Agenda tu Evaluación | ${SITE.brand}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Agenda una evaluación gratuita de tu proyecto arquitectónico en ${SITE.ciudad}. ${SITE.promesa_corta}. Sin costo ni compromiso.`
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#4B4B4B] to-[#2A2A2A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Agenda tu <span className="text-brand">Evaluación</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            En 30 minutos identificamos oportunidades y te damos un plan claro, sin costo ni compromiso
          </p>
          
          {/* Value Bullets */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-brand flex-shrink-0" />
              <span>Evaluación profesional gratuita</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6 text-brand flex-shrink-0" />
              <span>Solo 30 minutos de tu tiempo</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-brand flex-shrink-0" />
              <span>Sin compromiso de compra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4B4B4B] mb-4">
                Selecciona tu Horario Preferido
              </h2>
              <p className="text-[#4B4B4B]/80">
                Elige el día y hora que mejor se adapte a tu agenda
              </p>
            </div>

            {/* Calendar Embed Container */}
            <div id="calendar-embed" className="min-h-[600px] bg-gray-50 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#4B4B4B] mb-2">
                  Integra tu Calendario Aquí
                </h3>
                <p className="text-[#4B4B4B]/60 mb-4">
                  Pega aquí el código de tu calendario (Calendly, Google Calendar, etc.)
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
                  <code className="text-sm text-gray-500">
                    {`<!-- Pega aquí tu script o iframe del calendario -->`}
                  </code>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#4B4B4B] mb-3">¿Qué incluye la evaluación?</h4>
                  <ul className="space-y-2 text-[#4B4B4B]/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Análisis de tu espacio actual
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Identificación de oportunidades de mejora
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Plan de acción personalizado
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Estimación de inversión y ROI
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#4B4B4B] mb-3">Nuestro Compromiso</h4>
                  <ul className="space-y-2 text-[#4B4B4B]/80">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      {SITE.prueba_social_breve}
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      {SITE.promesa_corta}
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Especialistas en regulaciones panameñas
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
                      Gestión integral de proyectos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-[#4B4B4B]/60">
            <Shield className="h-5 w-5" />
            <span>Tu información es privada y segura. No compartimos datos con terceros.</span>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#4B4B4B] mb-6">
            ¿Prefieres Contactarnos Directamente?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href={`https://wa.me/${SITE.telefono_whatsapp}`}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>WhatsApp: {SITE.telefono_whatsapp}</span>
            </a>
            <a 
              href={`mailto:${SITE.email_contacto}`}
              className="btn-brand px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Email: {SITE.email_contacto}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;