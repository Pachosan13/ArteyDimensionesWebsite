import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';

const CaseStudy: React.FC = () => {
  const { t } = useI18n();

  const steps = [
    { n: 1, color: 'bg-red-100 text-red-600', heading: t.caseStudy.challengeHeading, body: t.caseStudy.challengeBody },
    { n: 2, color: 'bg-blue-100 text-blue-600', heading: t.caseStudy.solutionHeading, body: t.caseStudy.solutionBody },
  ];

  return (
    <section id="caso-estudio" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#4B4B4B] mb-6"
          >
            {t.caseStudy.headingPre} <span className="border-b-4 border-[#FF6A00]">{t.caseStudy.headingHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#4B4B4B]/80 max-w-3xl mx-auto"
          >
            {t.caseStudy.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/images/portfolio/business2.png"
                alt={t.caseStudy.title}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="text-sm text-brand font-semibold mb-2">{t.caseStudy.eyebrow}</div>
              <h3 className="text-3xl font-bold text-[#4B4B4B] mb-6">{t.caseStudy.title}</h3>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <React.Fragment key={step.n}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                    >
                      <h4 className="text-lg font-bold text-[#4B4B4B] mb-3 flex items-center">
                        <span
                          className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-sm font-bold mr-3`}
                        >
                          {step.n}
                        </span>
                        {step.heading}
                      </h4>
                      <p className="text-[#4B4B4B]/80">{step.body}</p>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i }}
                      className="flex justify-center"
                    >
                      <ArrowRight className="h-6 w-6 text-brand" />
                    </motion.div>
                  </React.Fragment>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="text-lg font-bold text-[#4B4B4B] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </span>
                    {t.caseStudy.resultsHeading}
                  </h4>
                  <ul className="space-y-2 text-[#4B4B4B]/80">
                    {t.caseStudy.results.map((result) => (
                      <li key={result}>✅ {result}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-[#4B4B4B] mb-2">{t.caseStudy.valueHeading}</h4>
                    <p className="text-[#4B4B4B]/80">{t.caseStudy.valueBody}</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                onClick={() => document.getElementById('formulario-cta')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 btn-brand px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                {t.caseStudy.cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
