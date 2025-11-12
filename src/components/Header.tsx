import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { projects, services } from './types';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]',
  'input[type="email"]'
].join(',');

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasMenuOpen = useRef(false);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      if (wasMenuOpen.current) {
        toggleButtonRef.current?.focus();
      }
      wasMenuOpen.current = false;
      return;
    }

    wasMenuOpen.current = true;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableElements = menuContainerRef.current?.querySelectorAll<HTMLElement>(
      focusableSelectors
    );

    const firstElement = firstFocusableRef.current || focusableElements?.[0];
    window.setTimeout(() => {
      firstElement?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !focusableElements || focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/general/logoarteydim.jpg" 
              alt="Arte y Dimensiones Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-[#4B4B4B]">Arte y Dimensiones</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Servicios Dropdown */}
            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>Servicios</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">Nuestros Servicios</div>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block px-4 py-3 text-[#4B4B4B] hover:text-brand hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Proyectos Dropdown */}
            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>Proyectos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">Proyectos Destacados</div>
                {projects.slice(0, 4).map((project) => (
                  <Link
                    key={project.slug}
                    to={`/proyectos/${project.slug}`}
                    className="block w-full text-left px-4 py-3 text-[#4B4B4B] hover:text-brand hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-gray-500">{project.category}</div>
                  </Link>
                ))}
                <button
                  onClick={() => handleLinkClick('portafolio')}
                  className="block w-full text-left px-4 py-2 text-brand font-medium hover:bg-gray-50 transition-colors border-t mt-2"
                >
                  Ver todos los proyectos →
                </button>
              </div>
            </div>

            <Link 
              to="/equipo" 
              className="text-[#4B4B4B] hover:text-brand transition-colors font-medium"
            >
              Equipo
            </Link>
            <a 
              href="/#formulario-cta" 
              className="text-[#4B4B4B] hover:text-brand transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('formulario-cta');
              }}
            >
              Contáctenos
            </a>
            <Link 
              to="/agenda"
              className="btn-brand px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Solicitar Propuesta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={toggleButtonRef}
            className="md:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-neutral-900/50 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              ref={menuContainerRef}
              id="mobile-navigation"
              className="md:hidden fixed inset-x-4 top-20 bottom-6 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-y-auto px-6 py-8 space-y-8"
              role="dialog"
              aria-label="Menú de navegación principal"
            >
              <div className="space-y-4">
                <div className="text-xs tracking-[0.2em] text-gray-400 font-semibold">SERVICIOS</div>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <Link
                      key={service.slug}
                      to={`/servicios/${service.slug}`}
                      ref={index === 0 ? (node) => {
                        firstFocusableRef.current = node;
                      } : undefined}
                      className="flex items-start justify-between rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-3 text-[15px] font-medium text-[#2F2F2F] shadow-sm transition hover:border-brand/40 hover:bg-white hover:text-brand"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{service.name}</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] text-gray-400" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs tracking-[0.2em] text-gray-400 font-semibold">PROYECTOS</div>
                <div className="space-y-3">
                  {projects.slice(0, 3).map((project) => (
                    <Link
                      key={project.slug}
                      to={`/proyectos/${project.slug}`}
                      className="block rounded-2xl border border-gray-100 bg-white px-4 py-3 text-[15px] font-medium text-[#2F2F2F] shadow-sm transition hover:border-brand/40 hover:text-brand"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {project.title}
                    </Link>
                  ))}
                  <button
                    onClick={() => handleLinkClick('portafolio')}
                    className="flex w-full items-center justify-between rounded-2xl bg-brand text-white px-4 py-3 text-[15px] font-semibold tracking-tight shadow-lg transition hover:bg-brand/90"
                  >
                    Ver todos los proyectos
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-6">
                <Link
                  to="/equipo"
                  className="block rounded-2xl border border-gray-100 px-4 py-3 text-[15px] font-semibold text-[#2F2F2F] transition hover:border-brand/50 hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Conoce al equipo
                </Link>
                <button
                  onClick={() => handleLinkClick('formulario-cta')}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left text-[15px] font-semibold text-[#2F2F2F] transition hover:border-brand/50 hover:text-brand"
                >
                  Contáctenos
                </button>
                <Link
                  to="/agenda"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Propuesta
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