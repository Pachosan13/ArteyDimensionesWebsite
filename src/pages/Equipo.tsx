import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Award, Target, Users, Lightbulb, Clock, Leaf } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/LanguageProvider';
import { getCompanyValues, getTeamMembers, getTeamMission } from '../i18n/data';

const PHOTO_FALLBACK =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Gb3RvIGRlIFBlcmZpbDwvdGV4dD48L3N2Zz4=';

const valueIcons = [Award, Target, Lightbulb, Clock, Users, Leaf];

const Equipo: React.FC = () => {
  const { locale, t, path } = useI18n();
  const { teamPage } = t;

  const members = getTeamMembers(locale);
  const mission = getTeamMission(locale);
  const values = getCompanyValues(locale);

  const leadership = members.filter((m) => m.order < 1).sort((a, b) => a.order - b.order);
  const directory = members.filter((m) => m.order >= 1).sort((a, b) => a.order - b.order);

  

  const renderCard = (member: (typeof members)[number], featured: boolean) => (
    <Link
      key={member.id}
      to={path('teamMember', member.slug)}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = PHOTO_FALLBACK;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      <div className={featured ? 'p-8' : 'p-6'}>
        <h3
          className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-neutral-900 mb-2 group-hover:text-brand transition-colors`}
        >
          {member.name}
        </h3>
        <p className="text-brand font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.shortBio}</p>

        {member.linkedin && (
          <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end">
            <Linkedin className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-neutral-900">
              <img
                src="/images/team/fotoequipo.jpg"
                alt={teamPage.heroAlt}
                className="w-full h-[52vh] md:h-[62vh] object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(15,15,15,0.15), rgba(15,15,15,0.45), rgba(15,15,15,0.75))',
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                    {teamPage.heroPre} <span className="text-brand">{teamPage.heroHighlight}</span>
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                    {teamPage.heroSubtitle}
                  </p>
                  <div className="h-1 w-24 bg-brand mx-auto mt-7" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">{teamPage.historyHeading}</h2>
              <div className="h-1 w-16 bg-brand mx-auto mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">{mission.description}</p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">{teamPage.historyBody}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {teamPage.stats.map((stat, i) => {
                const styles = [
                  'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white',
                  'bg-gradient-to-br from-brand to-red-600 text-white',
                  'bg-gradient-to-br from-gray-100 to-gray-200',
                  'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white',
                ];
                const valueColor = i === 0 || i === 3 ? 'text-brand' : i === 2 ? 'text-neutral-900' : '';
                const labelColor = i === 2 ? 'text-gray-700' : '';
                return (
                  <div key={stat.label} className={`${styles[i]} p-8 rounded-xl`}>
                    <div className={`text-5xl font-bold mb-2 ${valueColor}`}>{stat.value}</div>
                    <div className={`text-sm uppercase tracking-wider ${labelColor}`}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{teamPage.valuesHeading}</h2>
            <div className="h-1 w-16 bg-brand mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{teamPage.valuesSubheading}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? Award;
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-brand to-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{teamPage.leadershipHeading}</h2>
            <p className="text-sm uppercase tracking-widest text-brand font-semibold mb-4">
              {teamPage.leadershipEyebrow}
            </p>
            <div className="h-1 w-16 bg-brand mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{teamPage.leadershipBody}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">{leadership.map((m) => renderCard(m, true))}</div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{teamPage.directoryHeading}</h2>
            <div className="h-1 w-16 bg-brand mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{teamPage.directoryBody}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{directory.map((m) => renderCard(m, false))}</div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{teamPage.ctaHeading}</h2>
          <p className="text-xl text-gray-300 mb-8">{teamPage.ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={path('contact')}
              className="bg-brand hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              {teamPage.ctaPrimary}
            </Link>
            <Link
              to={path('contact')}
              className="bg-white hover:bg-gray-100 text-neutral-900 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              {teamPage.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipo;
