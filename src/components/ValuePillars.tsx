import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, ClipboardCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Seguimiento Estratégico',
    icon: ClipboardCheck,
    description:
      'Coordinamos cada fase con tableros de control claros, entregables semanales y reportes ejecutivos para que tu proyecto nunca pierda ritmo.',
  },
  {
    title: 'Atención Personalizada',
    icon: Handshake,
    description:
      'Acompañamiento personalizado y continuo en todo el proceso, con soluciones de diseño adaptadas a las necesidades, expectativas y presupuesto del cliente.',
  },
  {
    title: 'Confianza Ganada',
    icon: ShieldCheck,
    description:
      'Protocolos de calidad, contratos transparentes y más de dos décadas creando espacios que cumplen con normativa y expectativas de marca.',
  },
];

const ValuePillars: React.FC = () => {
  return (
    <section id="nuestro-aporte" className="bg-white py-16 lg:py-24" aria-labelledby="nuestro-aporte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand mb-3">NUESTRO APORTE</p>
          <h2
            id="nuestro-aporte"
            className="text-[clamp(1.75rem,3vw,3rem)] font-bold text-[#1F1F1F] leading-tight"
          >
            Tres compromisos para que tu inversión en espacios sea rentable desde el día uno.
          </h2>
        </div>

        <div className="mt-10 lg:mt-14 grid gap-6 md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center md:snap-align-none bg-white border border-gray-100 rounded-2xl shadow-lg p-6 flex flex-col gap-4 min-w-[85vw] sm:min-w-[340px]"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <pillar.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F1F1F]">{pillar.title}</h3>
              <p className="text-base text-[#4B4B4B] leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
