import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Award, Target, Users, Lightbulb, Clock, Leaf } from 'lucide-react';
import { teamMembers, teamMission, companyValues } from '../data/team';

const Equipo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero image (equipo) */}
          <div className="w-full mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-neutral-900">
              <img
                src="/images/team/fotoequipo.jpeg"
                alt="Equipo Arte y Dimensiones"
                className="w-full h-[52vh] md:h-[62vh] object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(15,15,15,0.15), rgba(15,15,15,0.45), rgba(15,15,15,0.75))",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                    Nuestro <span className="text-brand">Equipo</span>
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                    Más de 25 años guiando proyectos con puntualidad, comunicación abierta y transparencia.
                  </p>
                  <div className="h-1 w-24 bg-brand mx-auto mt-7" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="h-1 w-16 bg-brand mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">
                {teamMission.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
                Durante más de 25 años, nuestro equipo directivo ha guiado a la firma a través de obras, diseños, reuniones, seguimientos, visitas en campo, entrevistas y más; manteniendo como pilares de trabajo: la puntualidad, la comunicación abierta y constante con el equipo y los clientes, y la transparencia en cada etapa del diseño y desarrollo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white">
                <div className="text-5xl font-bold text-brand mb-2">25+</div>
                <div className="text-sm uppercase tracking-wider">Años de Experiencia</div>
              </div>
              <div className="bg-gradient-to-br from-brand to-red-600 p-8 rounded-xl text-white">
                <div className="text-5xl font-bold mb-2">150+</div>
                <div className="text-sm uppercase tracking-wider">Proyectos Completados</div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl">
                <div className="text-5xl font-bold text-neutral-900 mb-2">12</div>
                <div className="text-sm uppercase tracking-wider text-gray-700">Profesionales Expertos</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white">
                <div className="text-5xl font-bold text-brand mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider">Países Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Nuestros Valores
            </h2>
            <div className="h-1 w-16 bg-brand mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que emprendemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const icons = [Award, Target, Lightbulb, Clock, Users, Leaf];
              const Icon = icons[index];

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-brand to-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Directiva
            </h2>
            <p className="text-sm uppercase tracking-widest text-brand font-semibold mb-4">
              Nuestros Líderes de Innovación
            </p>
            <div className="h-1 w-16 bg-brand mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arte y Dimensiones nació como una iniciativa para potenciar las habilidades de nuestros arquitectos y su crecimiento profesional. Este impulso constante por evolucionar y asumir nuevos desafíos nos ha llevado a desarrollar proyectos innovadores que nos diferencian en el campo de la arquitectura comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {teamMembers
              .filter((member) => member.order < 1)
              .sort((a, b) => a.order - b.order)
              .map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Gb3RvIGRlIFBlcmZpbDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-brand transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand font-bold mb-4 text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.shortBio}
                    </p>

                    {member.linkedin && (
                      <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end">
                        <Linkedin className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Directorio del Equipo
            </h2>
            <div className="h-1 w-16 bg-brand mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conozca a los profesionales que hacen posible nuestra visión de excelencia arquitectónica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter((member) => member.order >= 1)
              .sort((a, b) => a.order - b.order)
              .map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Gb3RvIGRlIFBlcmZpbDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-brand transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand font-semibold mb-3 text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.shortBio}
                    </p>

                    {member.linkedin && (
                      <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end">
                        <Linkedin className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para trabajar con nuestro equipo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctenos para discutir cómo podemos ayudarle a materializar su visión arquitectónica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agenda"
              className="bg-brand hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              Solicitar Propuesta
            </Link>
            <a
              href="/#formulario-cta"
              className="bg-white hover:bg-gray-100 text-neutral-900 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipo;
