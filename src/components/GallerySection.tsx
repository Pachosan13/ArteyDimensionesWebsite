import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type GalleryImage = {
  src: string;
  key: string;
  label: string;
};

function getFileLabel(pathOrUrl: string) {
  const last = pathOrUrl.split('/').pop() ?? pathOrUrl;
  const withoutQuery = last.split('?')[0] ?? last;
  const decoded = decodeURIComponent(withoutQuery);
  return decoded.replace(/\.[^.]+$/, '');
}

interface GallerySectionProps {
  /** Show CTA button that goes to the full gallery page. Intended for Home. */
  showFullGalleryButton?: boolean;
  /** When false, do not render the images grid (useful for a minimal homepage section). */
  showImages?: boolean;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  showFullGalleryButton = true,
  showImages = true,
}) => {
  const imageModules = import.meta.glob(
    // Use wildcard to avoid Unicode normalization issues with "ñ" in folder names on macOS,
    // and include nested folders if they get added later.
    '/public/images/portfolio/DISE*CONCEPTUAL/**/*.{png,jpg,jpeg,webp}',
    { eager: true, query: '?url', import: 'default' }
  ) as Record<string, string>;

  const images: GalleryImage[] = Object.entries(imageModules)
    .map(([key, src]) => ({
      key,
      src,
      label: getFileLabel(key),
    }))
    .sort((a, b) => a.key.localeCompare(b.key, 'es'));

  return (
    <section id="galeria" className="py-20 bg-white" aria-labelledby="galeria-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand uppercase">Galería</p>
          <h2
            id="galeria-title"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1F1F1F] mb-4"
          >
            Arquitectura desde la idea hasta el <span className="border-b-4 border-brand">Proyecto</span>
          </h2>

          {showFullGalleryButton && (
            <div className="mt-7 flex justify-center">
              <Link
                to="/galeria"
                className="btn-brand px-7 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Ver galería completa</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          )}
        </div>

        {showImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.map((img, index) => (
              <motion.a
                key={img.key}
                href={img.src}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
                className="group relative bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-label={`Abrir imagen: ${img.label}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(15,15,15,0.05), rgba(15,15,15,0.5) 75%, rgba(15,15,15,0.7))',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;


