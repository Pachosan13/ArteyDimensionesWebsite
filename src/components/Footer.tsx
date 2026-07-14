import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Instagram, Phone } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';
import { localizeService, services } from '../i18n/data';

const Footer: React.FC = () => {
  const { locale, t, path } = useI18n();
  const footerServices = services.slice(0, 3).map((s) => localizeService(s, locale));

  return (
    <footer className="bg-[#1f1f1f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <Link
                to={path('home')}
                className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={t.footer.homeAria}
              >
                <img
                  src="/images/general/ADLOGO_HORIZONTALfooter@250x.png"
                  alt="Arte y Dimensiones"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t.footer.tagline}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:bg-brand/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/artedimpty"
                aria-label="Instagram"
                className="w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:bg-brand/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6">{t.footer.servicesHeading}</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={path('services', service.slug)}
                    className="text-gray-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={path('services', 'arquitectura-corporativa')}
                  className="text-gray-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors"
                >
                  {t.footer.viewAllServices}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6">{t.footer.contactHeading}</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                <Mail className="h-5 w-5 text-brand mx-auto sm:mx-0" />
                <a
                  href="mailto:info@artedim.com"
                  className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors"
                >
                  info@artedim.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                <Phone className="h-5 w-5 text-brand mx-auto sm:mx-0" />
                <a
                  href="tel:+5072632109"
                  className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors"
                >
                  +507 263 2109
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                <MapPin className="h-5 w-5 text-brand mx-auto sm:mx-0" />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          {t.footer.copyright}
          <div className="mt-1 text-gray-500">
            {t.footer.creditPre}{' '}
            <a
              href="https://www.agencylevel5.com"
              target="_blank"
              rel="noopener"
              className="hover:text-brand transition-colors"
            >
              Agency Level 5
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
