import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { blogPosts } from "../data/blogs";
import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog - Arte y Dimensiones",
      "description": "Articulos sobre arquitectura comercial, corporativa e institucional en Panama. Guias, costos, tendencias y consejos para tu proyecto.",
      "url": "https://artedim.com/blog",
      "publisher": {
        "@type": "Organization",
        "@id": "https://artedim.com/#organization",
        "name": "Arte y Dimensiones"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://artedim.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://artedim.com/blog" }
      ]
    }
  ], []);

  return (
    <>
      <SEOHead
        title="Blog de Arquitectura Comercial y Corporativa en Panama"
        description="Articulos sobre arquitectura comercial, corporativa e institucional en Panama. Guias, costos, tendencias y consejos para tu proyecto."
        keywords="blog arquitectura Panama, arquitectura comercial Panama, diseno oficinas Panama, arquitecto Panama"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Guias, costos y estrategia de arquitectura comercial y corporativa para empresas en Panama.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand/20"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Category + Read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand/10 text-brand border border-brand/20">
                      {post.category}
                    </span>
                    <span className="flex items-center text-sm text-neutral-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} min
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-brand transition-colors leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center text-brand font-semibold group-hover:translate-x-1 transition-transform">
                    Leer articulo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-white shadow-xl p-8 md:p-12 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)]">
              Tienes un proyecto en mente?
            </h3>
            <p className="text-neutral-700">
              Conversemos sobre tu espacio comercial o corporativo y te preparamos una propuesta a medida.
            </p>
            <Link
              to="/agenda"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold shadow-lg bg-brand text-white hover:bg-brand/90 transition"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Solicitar Propuesta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
