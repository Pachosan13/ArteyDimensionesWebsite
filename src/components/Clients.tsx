import React from 'react';
import { motion } from 'framer-motion';

const Clients: React.FC = () => {
  const clientLogos = [
    { name: 'Proyecta',        imageUrl: '/images/Clientes/proyecta.png' },
    { name: 'Capital (MEM)',   imageUrl: '/images/Clientes/mem.png' },
    { name: 'Prival',          imageUrl: '/images/Clientes/prival.png' },
    { name: 'VivaPlaza',       imageUrl: '/images/Clientes/vivaplaza.png' },
    { name: 'Palo Verde',      imageUrl: '/images/Clientes/paloverde.png' },
    { name: 'Santa María',     imageUrl: '/images/Clientes/santamaria.png' },
    { name: 'Locations',       imageUrl: '/images/Clientes/locations.png' },
    { name: 'Lumicentro',      imageUrl: '/images/Clientes/logo_lumicentro_3.png' },
    { name: 'Terrazas',        imageUrl: '/images/Clientes/terrazas.png' },
    { name: 'Planet Fitness',  imageUrl: '/images/Clientes/fitness.png' },
    { name: 'Ventaviv',        imageUrl: '/images/Clientes/ventaviv.png' },
    { name: 'Boulevard',       imageUrl: '/images/Clientes/boulevard.png' },
    { name: 'Do It Center',    imageUrl: '/images/Clientes/doitcenter.png' },
    { name: 'Estampa',         imageUrl: '/images/Clientes/estampa.png' },
    { name: 'Xtra',            imageUrl: '/images/Clientes/xtra.png' },
  ];

  return (
    <section id="clientes" className="relative py-16 lg:py-24 overflow-hidden" aria-labelledby="clientes-title">
      {/* BG image */}
      <img
        src="/images/portfolio/Boulevard.png"
        alt="Proyectos de Arte y Dimensiones"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
      />
      {/* Cinematic grey overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,15,15,0.4), rgba(15,15,15,0.7), rgba(15,15,15,0.8))',
        }}
        aria-hidden="true"
      />

      {/* content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="clientes-title"
              className="text-white text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6"
            >
              Confianza de <span className="border-b-4 border-brand">Líderes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl max-w-3xl mx-auto mb-12"
            >
              Desarrolladores e instituciones líderes en Panamá confían en nuestras soluciones arquitectónicas
            </motion.p>

            {/* Logos card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/95 p-6 sm:p-8 rounded-3xl shadow-2xl"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="flex items-center justify-center h-16 w-full"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <img
                      src={encodeURI(client.imageUrl)}
                      alt={`${client.name} - Cliente de Arte y Dimensiones`}
                      loading="lazy"
                      decoding="async"
                      className="h-12 sm:h-16 max-h-16 object-contain mx-auto grayscale hover:grayscale-0 transition"
                      onError={(e) => {
                        console.warn('No se pudo cargar el logo:', client.imageUrl);
                        (e.target as HTMLImageElement).style.opacity = '0.25';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
