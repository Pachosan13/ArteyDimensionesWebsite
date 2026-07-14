import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Linkedin, Mail, ChevronDown, ChevronUp, ArrowLeft, Award, Briefcase, GraduationCap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/LanguageProvider';
import { getTeamMember } from '../i18n/data';

const PHOTO_FALLBACK =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Gb3RvIGRlIFBlcmZpbDwvdGV4dD48L3N2Zz4=';

const TeamMemberPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, path } = useI18n();
  const [expandedEducation, setExpandedEducation] = useState(true);

  // Team slugs are personal names — identical across locales.
  const member = slug ? getTeamMember(slug, locale) : undefined;

  

  if (!member) return <Navigate to={path('team')} replace />;

  const { memberPage } = t;

  return (
    <>
      <SEOHead />

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full filter blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to={path('team')}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {memberPage.backToTeam}
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{member.name}</h1>
                <p className="text-xl md:text-2xl text-brand font-semibold mb-6 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">{member.shortBio}</p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>{memberPage.linkedinCta}</span>
                  </a>
                )}
              </div>

              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = PHOTO_FALLBACK;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-40" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-brand mr-3" />
                <h2 className="text-3xl font-bold text-neutral-900">{memberPage.careerHeading}</h2>
              </div>
              <div className="h-1 w-16 bg-brand mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{member.bio}</p>
            </div>

            <div className="mb-16">
              <button
                onClick={() => setExpandedEducation(!expandedEducation)}
                aria-expanded={expandedEducation}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 border-2 border-transparent hover:border-brand"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="h-8 w-8 text-brand mr-3" />
                    <h2 className="text-3xl font-bold text-neutral-900">{memberPage.educationHeading}</h2>
                  </div>
                  {expandedEducation ? (
                    <ChevronUp className="h-6 w-6 text-brand" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-brand" />
                  )}
                </div>
              </button>

              {expandedEducation && (
                <div className="mt-6 space-y-6 animate-fade-in">
                  {member.education.map((edu) => (
                    <div
                      key={`${edu.degree}-${edu.year}`}
                      className="bg-white border-l-4 border-brand p-6 rounded-r-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-neutral-900">{edu.degree}</h3>
                        <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-brand font-semibold mb-2">{edu.institution}</p>
                      {edu.details && <p className="text-gray-600 italic">{edu.details}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-brand mr-3" />
                <h2 className="text-3xl font-bold text-neutral-900">{memberPage.specializationsHeading}</h2>
              </div>
              <div className="h-1 w-16 bg-brand mb-8" />
              <div className="grid md:grid-cols-2 gap-4">
                {member.specializations.map((specialization) => (
                  <div
                    key={specialization}
                    className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:border-brand transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-brand rounded-full mr-3" />
                      <span className="text-gray-800 font-medium">{specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-brand mr-3" />
                <h2 className="text-3xl font-bold text-neutral-900">{memberPage.achievementsHeading}</h2>
              </div>
              <div className="h-1 w-16 bg-brand mb-8" />
              <div className="space-y-4">
                {member.achievements.map((achievement, index) => (
                  <div
                    key={achievement}
                    className="flex items-start bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <div className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 leading-relaxed text-lg">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{memberPage.ctaHeading}</h2>
              <p className="text-xl text-gray-300 mb-8">{memberPage.ctaBody}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to={path('contact')}
                className="bg-brand hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {memberPage.ctaPrimary}
              </Link>
              <Link
                to={path('team')}
                className="bg-white hover:bg-gray-100 text-neutral-900 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {memberPage.ctaSecondary}
              </Link>
            </div>

            <div className="mt-12 text-center">
              <a
                href="mailto:info@artedim.com"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>info@artedim.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamMemberPage;
