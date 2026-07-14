import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GallerySection from '../components/GallerySection';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/LanguageProvider';

const Galeria: React.FC = () => {
  const { locale, t, path } = useI18n();

  

  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <section className="pt-10 pb-8 sm:pt-12 sm:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              to={path('home')}
              className="inline-flex items-center text-[#4B4B4B] hover:text-brand font-semibold transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t.galleryPage.back}
            </Link>

            <div className="hidden sm:block text-sm font-semibold tracking-[0.3em] text-brand uppercase">
              {t.galleryPage.eyebrow}
            </div>
          </div>
        </div>
      </section>

      <GallerySection showFullGalleryButton={false} />
    </div>
  );
};

export default Galeria;
