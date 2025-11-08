import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "../data/services.json";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/portfolio/ISOMETRICOcolor.png')] bg-cover bg-center"></div>
      
      {/* Grey Overlay */}
      <div className="absolute inset-0 bg-neutral-900/50"></div>

      {/* Contenido */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Nuestros <span className="text-brand">Servicios</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {(servicesData as any[]).map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:border-2 hover:border-brand transition-all duration-500 cursor-pointer group overflow-hidden flex flex-col transform-gpu"
            >
              {/* Imagen */}
              <div className="relative h-72 overflow-hidden bg-white">
                <img
                  src={service.heroImage}
                  alt={`${service.name} - Arte y Dimensiones`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-brand transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">{service.tagline}</p>
                <Link 
                  to={`/servicios/${service.slug}`}
                  className="mt-6 inline-block bg-brand text-white px-5 py-2 rounded-full font-medium hover:bg-brand/90 transition-colors duration-300 text-center"
                >
                  Saber más
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}