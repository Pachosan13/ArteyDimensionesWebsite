import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B4B4B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-brand" />
              <span className="text-xl font-bold">Arte y Dimensiones</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Estudio de arquitectura especializado en espacios corporativos, comerciales e institucionales que impulsan el rendimiento y la productividad.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center hover:bg-brand/80 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center hover:bg-brand/80 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios/diseno-arquitectonico" className="text-gray-300 hover:text-brand transition-colors">Diseño Arquitectónico</Link></li>
              <li><Link to="/servicios/remodelaciones-comerciales" className="text-gray-300 hover:text-brand transition-colors">Remodelaciones Comerciales</Link></li>
              <li><Link to="/servicios/construccion-general" className="text-gray-300 hover:text-brand transition-colors">Construcción General</Link></li>
              <li><Link to="/servicios/diseno-interior" className="text-gray-300 hover:text-brand transition-colors">Diseño Interior</Link></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-brand transition-colors">Ver Todos los Servicios</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand" />
                <span className="text-gray-300">+507 6000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-gray-300">info@arteydimensiones.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand" />
                <span className="text-gray-300">Obarrio, Ciudad de Panamá</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Arte y Dimensiones. Todos los derechos reservados. | 
            <span className="text-brand"> Arquitectura que Impulsa Resultados</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;