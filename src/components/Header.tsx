import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';

type ServiceNavItem = {
  slug: string;
  name: string;
  tagline: string;
};

type ProjectNavItem = {
  slug: string;
  title: string;
  category: string;
};

const serviceItems = servicesData as ServiceNavItem[];
const projectItems = projectsData as ProjectNavItem[];

// ORDEN CORRECTO SEGÚN ARTES Y DIMENSIONES
const projectOrder = [
  'brisas-capital',
  'brisas-capital-este',
  'santa-maria-business-park',
  'boulevard-penonome',
  'terrazas-de-sabanitas'
];

// ORDENAMOS LOS PROYECTOS SEGÚN projectOrder
const orderedProjectItems: ProjectNavItem[] = projectOrder
  .map(slug => projectItems.find(p => p.slug === slug))
  .filter((p): p is ProjectNavItem => Boolean(p));

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] bg-brand text-white px-4 py-2 rounded-lg">
        Saltar al contenido
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/general/ADLOGO_HORIZONTALmenu@250x.png"
              alt="Arte y Dimensiones"
              className="h-8 sm:h-9 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">

            {/* SERVICIOS */}
            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>Servicios</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">
                  Nuestros Servicios
                </div>

                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block px-4 py-3 text-[#4B4B4B] hover:bg-gray-50 hover:text-brand"
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* PROYECTOS */}
            <div className="relative group">
              <button className="text-[#4B4B4B] hover:text-brand transition-colors font-medium flex items-center space-x-1">
                <span>Proyectos</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">
                  Proyectos Destacados
                </div>

                {/* ORDEN CORRECTO  */}
                {orderedProjectItems.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/proyectos/${project.slug}`}
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
                  Ver todos los proyectos →
                </button>
              </div>
            </div>

            <Link to="/equipo" className="text-[#4B4B4B] hover:text-brand font-medium">
              Equipo
            </Link>

            <Link to="/galeria" className="text-[#4B4B4B] hover:text-brand font-medium">
              Galería
            </Link>

            <button
              onClick={() => handleLinkClick('formulario-cta')}
              className="text-[#4B4B4B] hover:text-brand font-medium"
            >
              Contáctenos
            </button>

            <Link to="/agenda" className="btn-brand px-6 py-2 rounded-lg font-semibold">
              Solicitar Propuesta
            </Link>
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden text-neutral-900 p-2 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-gray-200 py-4 rounded-b-3xl shadow-xl">
            {/* SERVICIOS */}
            <div className="space-y-2 mb-4">
              <div className="text-[#4B4B4B] font-semibold text-sm">SERVICIOS</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.slug}
                  to={`/servicios/${service.slug}`}
                  className="block pl-4 py-2 hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* PROYECTOS */}
            <div className="space-y-2 mb-4">
              <div className="text-[#4B4B4B] font-semibold text-sm">PROYECTOS</div>

              {orderedProjectItems.map((project) => (
                <Link
                  key={project.slug}
                  to={`/proyectos/${project.slug}`}
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
                Ver todos →
              </button>
            </div>

            <div className="border-t pt-4 space-y-4">
              <Link to="/equipo" className="hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                Equipo
              </Link>

              <Link
                to="/galeria"
                className="hover:text-brand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galería
              </Link>

              <button onClick={() => handleLinkClick('formulario-cta')} className="text-left hover:text-brand">
                Contáctenos
              </button>

              <Link
                to="/agenda"
                className="btn-brand px-6 py-3 rounded-lg w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Propuesta
              </Link>
            </div>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <button
          className="md:hidden fixed inset-0 bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
