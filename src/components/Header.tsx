import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { projects, services } from './types';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen
}) => {
  const navigate = useNavigate();

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
            className="md:hidden text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Servicios */}
              <div className="space-y-2">
                <div className="text-[#4B4B4B] font-semibold text-sm">SERVICIOS</div>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block pl-4 text-[#4B4B4B] hover:text-brand transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Proyectos */}
              <div className="space-y-2">
                <div className="text-[#4B4B4B] font-semibold text-sm">PROYECTOS</div>
                {projects.slice(0, 3).map((project) => (
                  <Link
                    key={project.slug}
                    to={`/proyectos/${project.slug}`}
                    className="block w-full text-left pl-4 text-[#4B4B4B] hover:text-brand transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {project.title}
                  </Link>
                ))}
                <button
                  onClick={() => handleLinkClick('portafolio')}
                  className="block w-full text-left pl-4 text-brand font-medium"
                >
                  Ver todos →
                </button>
              </div>

              <div className="border-t pt-4 space-y-4">
                <Link 
                  to="/equipo" 
                  className="text-[#4B4B4B] hover:text-brand transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Equipo
                </Link>
                <button
                  onClick={() => handleLinkClick('formulario-cta')}
                  className="text-left text-[#4B4B4B] hover:text-brand transition-colors font-medium"
                >
                  Contáctenos
                </button>
                <Link 
                  to="/agenda"
                  className="btn-brand px-6 py-2 rounded-lg font-semibold transition-all w-fit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Propuesta
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;