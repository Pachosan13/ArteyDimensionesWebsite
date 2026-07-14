import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ProjectHero from "../components/ProjectHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectGallery from "../components/ProjectGallery";
import SEOHead from "../components/SEOHead";
import { useI18n } from "../i18n/LanguageProvider";
import { getProject, localizeProject } from "../i18n/data";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, path } = useI18n();

  // Project slugs are proper nouns — identical in both locales, so no translation needed.
  const raw = slug ? getProject(slug) : undefined;
  const project = raw ? localizeProject(raw, locale) : undefined;

  

  if (!project) return <Navigate to={path("home")} replace />;

  return (
    <>
      <SEOHead />
      <ProjectHero title={project.title} category={project.category} image={project.heroImage} />
      <ProjectInfo description={project.description} />
      <ProjectGallery images={project.gallery} projectTitle={project.title} />

      <section className="py-14 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">{t.projectPage.ctaHeading}</h3>
          <p className="text-[#4B4B4B] mt-2">{t.projectPage.ctaBody}</p>
          <Link
            to={path("contact")}
            className="inline-block mt-6 bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand/90 transition"
          >
            {t.projectPage.ctaButton}
          </Link>
          <div className="mt-6">
            <Link to={path("home")} className="text-brand font-semibold">
              {t.projectPage.backHome}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
