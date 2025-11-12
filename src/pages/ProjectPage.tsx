import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projects, Project } from "../components/types";
import ProjectHero from "../components/ProjectHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectGallery from "../components/ProjectGallery";
import ProjectSEO from "../components/ProjectSEO";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => projects.find((item: Project) => item.slug === slug), [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <ProjectSEO
        title={project.title}
        metaDescription={project.metaDescription}
        keywords={project.keywords}
      />
      <ProjectHero title={project.title} category={project.category} image={project.heroImage} />
      <ProjectInfo description={project.description} />
      <ProjectGallery images={project.gallery} />

      <section className="py-14 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">¿Quieres un espacio así para tu proyecto?</h3>
          <p className="text-[#4B4B4B] mt-2">Hablemos y te presentamos una propuesta a medida.</p>
          <a href="/#contacto-servicio" className="inline-block mt-6 bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand/90 transition">
            Solicitar Propuesta
          </a>
          <div className="mt-6">
            <Link to="/" className="text-brand font-semibold">← Volver al Inicio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
