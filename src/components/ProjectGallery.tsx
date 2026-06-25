import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

function getImageAlt(src: string, index: number, projectTitle?: string): string {
  const filename = src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
  const decoded = decodeURIComponent(filename).replace(/[-_]/g, ' ').replace(/\d+/g, '').trim();
  const prefix = projectTitle || 'Proyecto arquitectónico';
  if (decoded && decoded.length > 2) return `${prefix} — ${decoded}`;
  return `${prefix} — vista ${index + 1} del diseño arquitectónico`;
}

export default function ProjectGallery({ images, projectTitle }: { images: string[]; projectTitle?: string }) {
  // [index, direction] — direction drives the slide animation (1 = next, -1 = prev)
  const [lightbox, setLightbox] = useState<[number, number] | null>(null);
  const open = lightbox !== null;
  const current = lightbox?.[0] ?? 0;
  const direction = lightbox?.[1] ?? 0;

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (delta: number) =>
      setLightbox((prev) => {
        if (!prev) return prev;
        const next = (prev[0] + delta + images.length) % images.length;
        return [next, delta];
      }),
    [images.length]
  );

  // Keyboard navigation + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, go]);

  if (!images?.length) return null;

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold text-[#2D2D2D] mb-8">Galería del Proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox([i, 0])}
              aria-label={`Ampliar imagen ${i + 1} de ${images.length}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-neutral-100 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
            >
              <img
                src={src}
                alt={getImageAlt(src, i, projectTitle)}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="pointer-events-none absolute bottom-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-brand text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <ZoomIn className="w-5 h-5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle || "Galería"} — imagen ampliada`}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          >
            {/* Top bar: counter + close */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-5 text-white">
              <span className="text-sm font-medium tracking-wide tabular-nums">
                <span className="text-brand">{current + 1}</span>
                <span className="text-white/50"> / {images.length}</span>
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar galería"
                className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Stage */}
            <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 overflow-hidden">
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                  aria-label="Imagen anterior"
                  className="absolute left-3 sm:left-6 z-10 grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-brand text-white transition-colors"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
              )}

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={getImageAlt(images[current], current, projectTitle)}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : direction < 0 ? -80 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl select-none"
                  draggable={false}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 sm:right-6 z-10 grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-brand text-white transition-colors"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              )}
            </div>

            {/* Caption */}
            {projectTitle && (
              <p className="text-center text-white/70 text-sm pb-3 px-4">{projectTitle}</p>
            )}

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex gap-2.5 overflow-x-auto px-4 sm:px-8 pb-6 pt-1 justify-start sm:justify-center"
              >
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox([i, i > current ? 1 : -1])}
                    aria-label={`Ir a imagen ${i + 1}`}
                    aria-current={i === current}
                    className={`shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current
                        ? "ring-2 ring-brand opacity-100 scale-100"
                        : "opacity-50 hover:opacity-90 scale-95"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
