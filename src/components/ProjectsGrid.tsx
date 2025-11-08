import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectsGrid: React.FC = () => {
  return (
    <section id="portafolio" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B4B4B] mb-4">
            Proyectos <span className="border-b-4 border-brand">Destacados</span>
          </h2>
          <p className="text-lg text-[#4B4B4B]/70">Algunos de nuestros desarrollos más emblemáticos en Panamá</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <Link to={`/proyectos/${project.slug}`} className="block">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,15,15,0.25), rgba(15,15,15,0.6) 70%, rgba(15,15,15,0.8))",
                    }}
                  >
                    <span className="text-white font-semibold text-lg inline-flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition delay-100">
                      <span>Ver Proyecto</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="absolute top-4 left-4 bg-brand text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {project.roi}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="text-brand text-sm font-semibold uppercase mb-1 tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
