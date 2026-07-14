import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageProvider";

/**
 * Catch-all for unknown paths.
 *
 * A static SPA cannot return an HTTP 404, so every unknown URL is served as 200 with
 * the app shell. Without this page those URLs would render the homepage — a soft 404,
 * which Google treats as a quality problem. Rendering real "not found" content plus a
 * `noindex` tag is the correct mitigation available to us.
 */
const NotFound: React.FC = () => {
  const { t, path } = useI18n();

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    meta.setAttribute("data-notfound", "true");
    document.head.appendChild(meta);

    return () => {
      document.querySelectorAll('meta[data-notfound="true"]').forEach((el) => el.remove());
    };
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold tracking-[0.3em] text-brand uppercase mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">{t.common.notFoundTitle}</h1>
        <p className="text-lg text-[#4B4B4B] mb-8">{t.common.notFoundBody}</p>
        <Link to={path("home")} className="btn-brand px-6 py-3 rounded-lg font-semibold inline-block">
          {t.common.backToHome}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
