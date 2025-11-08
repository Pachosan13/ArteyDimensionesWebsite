import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {

  return (
    <section id="portafolio" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B4B4B] mb-6">
            Proyectos <span className="border-b-4 border-brand">Destacados</span>
          </h2>
          <p className="text-xl text-[#4B4B4B]/80 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones arquitectónicas estratégicas han transformado empresas en todo el panorama corporativo de Panamá
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} architecture project in Panama`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>{project.roi}</span>
                </div>
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <div className="text-sm text-brand font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-[#4B4B4B] mb-3 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#4B4B4B]/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button className="inline-flex items-center link-brand font-semibold transition-colors group-hover:translate-x-1 transform duration-200">
                  Ver Proyecto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;