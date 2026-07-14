import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';
import { localizeProject, localizeService, projects, services } from '../i18n/data';
import LanguageToggle from './LanguageToggle';

// Client-mandated running order for the projects menu.
const projectOrder = [
  'brisas-capital',
  'brisas-capital-este',
  'santa-maria-business-park',
  'boulevard-penonome',
  'terrazas-de-sabanitas',
];

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { locale, t, path } = useI18n();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const serviceItems = services.map((s) => localizeService(s, locale));
  const orderedProjectItems = projectOrder
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p))
    .map((p) => localizeProject(p, locale));

  const homePath = path('home');

  // The logo always points at the home page of the current locale ("/" in Spanish, "/en"
  // in English). When we are already there, React Router keeps the pathname unchanged, so
  // the global ScrollToTop effect never fires — scroll to the top ourselves.
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if ((pathname.replace(/\/$/, '') || '/') !== homePath) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }
    document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  // Home-page anchors: jump straight there, or route home first and then scroll.
  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const scrollTo = (delay: number) =>
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), delay);

    if (window.location.pathname !== homePath) {
      navigate(homePath);
      scrollTo(500);
    } else {
      scrollTo(100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] bg-brand text-white px-4 py-2 rounded-lg"
      >
        {t.common.skipToContent}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* `relative z-50` keeps the logo above the mobile menu's z-40 backdrop, which is
              fixed inset-0 and would otherwise swallow the tap while the menu is open. */}
          <Link to={homePath} onClick={handleLogoClick} aria-label={t.nav.goHome} className="relative z-50 flex items-center">
            <img
              src="/images/general/ADLOGO_HORIZONTALmenu@250x.png"
              alt="Arte y Dimensiones"
              className="h-8 sm:h-9 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center space-x-5">
            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>{t.nav.services}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">{t.nav.ourServices}</div>

                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    to={path('services', service.slug)}
                    className="block px-4 py-3 text-[#4B4B4B] hover:bg-gray-50 hover:text-brand"
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>{t.nav.projects}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">{t.nav.featuredProjects}</div>

                {orderedProjectItems.map((project) => (
                  <Link
                    key={project.slug}
                    to={path('projects', project.slug)}
                    className="block px-4 py-3 hover:bg-gray-50 hover:text-brand"
                  >
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-gray-500">{project.category}</div>
                  </Link>
                ))}

                <button
                  onClick={() => handleLinkClick('portafolio')}
                  className="block w-full text-left px-4 py-2 text-brand font-medium border-t mt-2"
                >
                  {t.nav.viewAllProjects}
                </button>
              </div>
            </div>

            <Link to={path('about')} className="text-[#4B4B4B] hover:text-brand font-medium whitespace-nowrap">
              {t.nav.about}
            </Link>

            <Link to={path('team')} className="text-[#4B4B4B] hover:text-brand font-medium whitespace-nowrap">
              {t.nav.team}
            </Link>

            <Link to={path('gallery')} className="text-[#4B4B4B] hover:text-brand font-medium whitespace-nowrap">
              {t.nav.gallery}
            </Link>

            <Link to={path('blog')} className="text-[#4B4B4B] hover:text-brand font-medium whitespace-nowrap">
              {t.nav.blog}
            </Link>

            <button onClick={() => handleLinkClick('formulario-cta')} className="text-[#4B4B4B] hover:text-brand font-medium whitespace-nowrap">
              {t.nav.contact}
            </button>

            <LanguageToggle />

            <Link to={path('contact')} className="btn-brand px-5 py-2 rounded-lg font-semibold whitespace-nowrap">
              {t.nav.requestProposal}
            </Link>
          </nav>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-3 xl:hidden">
            <LanguageToggle />
            <button
              type="button"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
              className="text-neutral-900 p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <>
            <button
              type="button"
              aria-label={t.nav.closeMenu}
              className="xl:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div
              ref={mobileMenuRef}
              id="mobile-menu-panel"
              className="xl:hidden fixed top-16 left-0 right-0 z-50 bg-white border-t border-gray-200 rounded-b-3xl shadow-xl py-4 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain"
            >
              <div className="space-y-2 mb-6">
                <div className="text-[#4B4B4B] font-semibold text-sm">{t.nav.sectionsLabel}</div>
                {[
                  { label: t.nav.portfolio, id: 'portafolio' },
                  { label: t.nav.caseStudy, id: 'caso-estudio' },
                  { label: t.nav.clients, id: 'clientes' },
                  { label: t.nav.contactSection, id: 'formulario-cta' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="block w-full text-left pl-4 py-2 hover:text-brand"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-[#4B4B4B] font-semibold text-sm">{t.nav.servicesLabel}</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    to={path('services', service.slug)}
                    className="block pl-4 py-2 hover:text-brand"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-[#4B4B4B] font-semibold text-sm">{t.nav.projectsLabel}</div>

                {orderedProjectItems.map((project) => (
                  <Link
                    key={project.slug}
                    to={path('projects', project.slug)}
                    className="block pl-4 py-2 hover:text-brand"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {project.title}
                  </Link>
                ))}

                <button
                  onClick={() => handleLinkClick('portafolio')}
                  className="block w-full text-left pl-4 py-2 text-brand font-medium"
                >
                  {t.nav.viewAll}
                </button>
              </div>

              <div className="border-t pt-4 px-4 pb-4 flex flex-col gap-3">
                <Link to={path('about')} className="block w-full text-left py-2 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.about}
                </Link>

                <Link to={path('team')} className="block w-full text-left py-2 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.team}
                </Link>

                <Link to={path('gallery')} className="block w-full text-left py-2 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.gallery}
                </Link>

                <Link to={path('blog')} className="block w-full text-left py-2 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.blog}
                </Link>

                <button onClick={() => handleLinkClick('formulario-cta')} className="block w-full text-left py-2 hover:text-brand">
                  {t.nav.contact}
                </button>

                <LanguageToggle className="py-2" onNavigate={() => setMobileMenuOpen(false)} />

                <Link
                  to={path('contact')}
                  className="btn-brand px-6 py-3 rounded-lg w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.requestProposal}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
