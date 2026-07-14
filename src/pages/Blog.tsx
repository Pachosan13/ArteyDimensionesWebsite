import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { useI18n } from "../i18n/LanguageProvider";
import { getBlogPosts } from "../i18n/data";
import { buildPath } from "../i18n/config";

export default function Blog() {
  const { locale, t, path } = useI18n();
  const posts = getBlogPosts(locale);

  

  return (
    <>
      <SEOHead />

      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6 leading-tight">
            {t.blogPage.heading}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            {t.blogPage.subheading}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`${buildPath("blog", locale)}/${post.slug}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand/20"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand/10 text-brand border border-brand/20">
                      {post.category}
                    </span>
                    <span className="flex items-center text-sm text-neutral-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} {t.blogPage.minutesSuffix}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-brand transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center text-brand font-semibold group-hover:translate-x-1 transition-transform">
                    {t.blogPage.readMore}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-white shadow-xl p-8 md:p-12 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)]">{t.blogPage.ctaHeading}</h3>
            <p className="text-neutral-700">{t.blogPage.ctaBody}</p>
            <Link
              to={path("contact")}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold shadow-lg bg-brand text-white hover:bg-brand/90 transition"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {t.blogPage.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
