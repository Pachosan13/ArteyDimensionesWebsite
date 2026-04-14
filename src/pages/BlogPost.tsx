import React, { useMemo, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { blogPosts, getBlogBySlug, BlogSection } from "../data/blogs";
import { Clock, ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={idx} className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mt-12 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="text-xl md:text-2xl font-semibold text-[var(--neutral-900)] mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-neutral-700 text-lg leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="list-disc list-inside space-y-2 mb-6 text-neutral-700 text-lg pl-2">
          {section.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote key={idx} className="border-l-4 border-brand pl-6 py-2 my-6 bg-brand/5 rounded-r-lg">
          <p className="text-neutral-700 text-lg italic">{section.text}</p>
        </blockquote>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto mb-6 my-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-[var(--neutral-900)] text-white">
                {section.headers?.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-sm md:text-base">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-neutral-700 text-sm md:text-base border-t border-gray-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="bg-white rounded-2xl shadow-md">
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full text-left px-5 py-4 font-semibold text-[var(--neutral-900)] flex items-center justify-between"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-neutral-500 transition-transform flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-neutral-700 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => getBlogBySlug(slug || ""), [slug]);

  // Get related posts (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(p => p.slug !== post.slug)
      .slice(0, 2);
  }, [post]);

  const jsonLd = useMemo(() => {
    if (!post) return undefined;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "url": `https://artedim.com/blog/${post.slug}`,
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "author": {
          "@type": "Organization",
          "@id": "https://artedim.com/#organization",
          "name": "Arte y Dimensiones"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://artedim.com/#organization",
          "name": "Arte y Dimensiones",
          "logo": {
            "@type": "ImageObject",
            "url": "https://artedim.com/images/general/logoarteydim.jpg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://artedim.com/blog/${post.slug}`
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://artedim.com/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://artedim.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://artedim.com/blog/${post.slug}` }
        ]
      }
    ];
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        keywords={[post.targetKeyword, ...post.secondaryKeywords].join(", ")}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Breadcrumb + Back link */}
      <section className="bg-[var(--neutral-100)] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-brand font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-16 bg-[var(--neutral-100)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand/10 text-brand border border-brand/20">
              {post.category}
            </span>
            <span className="flex items-center text-sm text-neutral-500">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} min de lectura
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map((section, idx) => renderSection(section, idx))}
        </div>
      </article>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-8 md:mb-10">
            Preguntas Frecuentes
          </h2>
          <FAQAccordion items={post.faq} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-[var(--neutral-900)] shadow-xl p-8 md:p-12 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {post.ctaTitle}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {post.ctaText}
            </p>
            <Link
              to={post.ctaLink}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold shadow-lg bg-brand text-white hover:bg-brand/90 transition mt-4"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {post.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] mb-8">
              Articulos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand/20"
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand/10 text-brand border border-brand/20">
                        {related.category}
                      </span>
                      <span className="flex items-center text-sm text-neutral-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {related.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-brand transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-4 flex-grow text-sm">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center text-brand font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Leer articulo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
