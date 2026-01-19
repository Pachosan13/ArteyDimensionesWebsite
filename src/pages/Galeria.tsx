import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GallerySection from '../components/GallerySection';

const Galeria: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-10 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center text-[#4B4B4B] hover:text-brand font-semibold transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Inicio
            </Link>

            <div className="hidden sm:block text-sm font-semibold tracking-[0.3em] text-brand uppercase">
              Galería
            </div>
          </div>
        </div>
      </section>

      {/* Full gallery (no CTA button because we're already on the gallery page) */}
      <GallerySection showFullGalleryButton={false} />
    </div>
  );
};

export default Galeria;


