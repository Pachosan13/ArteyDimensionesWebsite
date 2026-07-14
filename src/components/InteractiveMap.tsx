import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageProvider";

const InteractiveMap: React.FC = () => {
  const { t, path } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <section id="mapa-panama" className="bg-[#F5F5F5] py-16 lg:py-24" aria-label={t.map.sectionAria}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="relative w-full aspect-[18/14]">
            <img
              src="/images/portfolio/mapa-panama-flat.jpg"
              alt={t.map.imageAlt}
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />

            <div className="absolute inset-0">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={t.map.viewDetailsAria}
                className="absolute bg-transparent border-none p-0"
                style={{ left: "44%", top: "79%", width: "190px", height: "34px", cursor: "pointer" }}
              >
                <span className="sr-only">{t.map.penonomeTitle}</span>
              </button>
            </div>

            {open && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                onClick={() => setOpen(false)}
              >
                <div
                  className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src="/images/portfolio/Penonome/Boulevardpenonome.jpg"
                      alt={t.map.penonomeTitle}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-bold text-neutral-900">{t.map.penonomeTitle}</h3>
                    <p className="text-sm text-neutral-700">{t.map.penonomeDescription}</p>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="text-sm text-neutral-500 hover:text-neutral-700"
                      >
                        {t.common.close}
                      </button>

                      <Link
                        to={path("projects", "boulevard-penonome")}
                        className="inline-flex items-center gap-1 rounded-full bg-[#F0472D] px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d63e25]"
                      >
                        {t.common.viewProject}
                        <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
