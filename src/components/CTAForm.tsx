import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const CTAForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProyecto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', tipoProyecto: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario-cta" className="bg-brand py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-brand opacity-95"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center text-white mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ¿Listo para Transformar tu Espacio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Solicita una consulta gratuita y descubre cómo podemos maximizar el potencial de tu proyecto arquitectónico
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-8">Contacta con Nosotros</h3>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Teléfono", info: "+507 6000-0000" },
                { icon: Mail, title: "Email", info: "info@arteydimensiones.com" },
                { icon: MapPin, title: "Oficina", info: "Obarrio, Ciudad de Panamá" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <contact.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-semibold">{contact.title}</div>
                    <div className="opacity-90">{contact.info}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-6 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300"
            >
              <h4 className="font-bold mb-4">¿Por qué elegir Arte y Dimensiones?</h4>
              <ul className="space-y-2 opacity-90">
                <li>• 15+ años de experiencia en arquitectura corporativa</li>
                <li>• Enfoque en ROI y rendimiento de espacios</li>
                <li>• Especialistas en regulaciones panameñas</li>
                <li>• Gestión integral de proyectos</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-[#4B4B4B] mb-6">Ponte En Contacto Con Nosotros</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "nombre", label: "Nombre Completo *", type: "text", placeholder: "Tu nombre completo" },
                { id: "email", label: "Email Corporativo *", type: "email", placeholder: "tu.email@empresa.com" }
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-[#4B4B4B] mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="tipoProyecto" className="block text-sm font-medium text-[#4B4B4B] mb-2">
                  Tipo de Proyecto *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="tipoProyecto"
                  name="tipoProyecto"
                  required
                  value={formData.tipoProyecto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecciona el tipo de proyecto</option>
                  <option value="oficinas-corporativas">Oficinas Corporativas</option>
                  <option value="comercial">Desarrollo Comercial</option>
                  <option value="institucional">Proyecto Institucional</option>
                  <option value="residencial">Desarrollo Residencial</option>
                  <option value="mixto">Proyecto Mixto</option>
                  <option value="otro">Otro</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#4B4B4B] mb-2">
                  Detalles del Proyecto
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                  placeholder="Cuéntanos más sobre tu proyecto, ubicación, presupuesto estimado, etc."
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full btn-brand py-4 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Solicitar Propuesta Gratuita</span>
                <Send className="h-5 w-5" />
              </motion.button>
            </form>

            <p className="text-sm text-[#4B4B4B]/60 mt-4 text-center">
              * Respuesta garantizada en menos de 24 horas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;