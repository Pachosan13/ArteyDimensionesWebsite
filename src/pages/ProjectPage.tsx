import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import data from "../data/projects.json";
import ProjectHero from "../components/ProjectHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectGallery from "../components/ProjectGallery";
import SEOHead from "../components/SEOHead";

type Project = {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  description: string;
  keywords: string[];
  metaDescription: string;
  gallery: string[];
};

const projects = data as Project[];

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  const jsonLd = useMemo(() => {
    if (!project) return undefined;
    return [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.metaDescription,
        "image": `https://artedim.com${project.heroImage}`,
        "creator": { "@type": "Organization", "@id": "https://artedim.com/#organization", "name": "Arte y Dimensiones" },
        "url": `https://artedim.com/proyectos/${project.slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://artedim.com/" },
          { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": "https://artedim.com/" },
          { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://artedim.com/proyectos/${project.slug}` }
        ]
      }
    ];
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.metaDescription}
        keywords={project.keywords.join(", ")}
        ogImage={project.heroImage}
        jsonLd={jsonLd}
      />
      <ProjectHero title={project.title} category={project.category} image={project.heroImage} />
      <ProjectInfo description={project.description} />
      <ProjectGallery images={project.gallery} projectTitle={project.title} />

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
