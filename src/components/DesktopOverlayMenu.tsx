import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, X, Search, Linkedin, Instagram } from 'lucide-react';

interface DesktopOverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DesktopOverlayMenu: React.FC<DesktopOverlayMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onClose();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const handleServiciosClick = () => {
    onClose();
    setTimeout(() => {
      navigate('/servicios');
    }, 300);
  };

  const handleCTAClick = () => {
    onClose();
    setTimeout(() => {
      navigate('/agenda');
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-out ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-gray-100">
        <div className={`flex items-center space-x-3 transition-all duration-700 ease-out ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`} style={{ transitionDelay: '100ms' }}>
          <Building2 className="h-10 w-10 text-[#FF6A00]" />
          <span className="text-2xl font-bold text-neutral-900">Arte y Dimensiones</span>
        </div>
        
        <button 
          onClick={onClose}
          className={`p-2 hover:bg-gray-100 rounded-lg transition-all duration-700 ease-out ${
            isOpen ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-8 opacity-0 rotate-90'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <X className="h-8 w-8 text-neutral-900" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center px-16">
          <nav className="space-y-8">
            {[
              { name: 'Portafolio', id: 'portafolio', delay: '200ms' },
              { name: 'Caso de Éxito', id: 'caso-estudio', delay: '400ms' },
              { name: 'Clientes', id: 'clientes', delay: '500ms' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block text-left text-5xl md:text-6xl font-light text-neutral-900 hover:text-brand transition-all duration-700 ease-out transform hover:translate-x-4 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: item.delay }}
              >
                {item.name}
                <div className="h-px bg-gradient-to-r from-brand to-transparent mt-2 w-0 hover:w-full transition-all duration-500"></div>
              </button>
            ))}
            
            <button
              onClick={handleServiciosClick}
              className={`block text-left text-5xl md:text-6xl font-light text-neutral-900 hover:text-brand transition-all duration-700 ease-out transform hover:translate-x-4 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Servicios
              <div className="h-px bg-gradient-to-r from-brand to-transparent mt-2 w-0 hover:w-full transition-all duration-500"></div>
            </button>
          </nav>

          {/* CTA Button */}
          <div className={`mt-16 transition-all duration-700 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <button 
              onClick={handleCTAClick}
              className="btn-brand px-12 py-4 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar Propuesta
            </button>
          </div>
        </div>

        {/* Right Side - Submenu */}
        <div className="w-80 bg-gray-50 p-8 flex flex-col justify-between">
          {/* Overview Section */}
          <div className={`transition-all duration-700 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '700ms' }}>
            <h3 className="text-lg font-semibold text-[#4B4B4B] mb-6">Especialidades</h3>
            <div className="space-y-4">
              {[
                'Arquitectura Corporativa',
                'Espacios Comerciales',
                'Instituciones de Salud',
                'Centros Educativos',
                'Desarrollos Residenciales'
              ].map((specialty, index) => (
                <div 
                  key={specialty}
                  className={`text-[#4B4B4B]/80 hover:text-[#FF6A00] cursor-pointer transition-all duration-500 ease-out ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${750 + (index * 50)}ms` }}
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`transition-all duration-700 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '900ms' }}>
            {/* Contact Info */}
            <div className="mb-8">
              <div className="text-sm text-[#4B4B4B]/60 mb-2">Contacto</div>
              <div className="text-neutral-900 font-medium">artedim@artedim.com</div>
              <div className="text-neutral-900">Calle Alberto Navarro, Mandalay Apartments, Planta Baja</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 shadow-sm">
                <Search className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 shadow-sm">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300 shadow-sm">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOverlayMenu;