import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Agenda from './pages/Agenda';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import Equipo from './pages/Equipo';
import TeamMemberPage from './pages/TeamMemberPage';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './i18n/LanguageProvider';
import './styles/globals.css';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  // useLayoutEffect, not useEffect: passive effects are scheduled after paint, and on the
  // image-heavy home page they were starved for up to 2.6s in production — the new page
  // rendered at the previous page's scroll offset and only jumped to the top afterwards.
  // This runs before paint, so the offset is never visible.
  //
  // 'instant', not 'auto'. globals.css sets `html { scroll-behavior: smooth }` for the
  // in-page section links, and per the CSSOM spec 'auto' defers to that CSS value — which
  // turned every route change into a ~1.4s animated scroll. 'instant' snaps; the anchor
  // links stay smooth.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

/**
 * The same page tree is mounted twice: Spanish at the root (those URLs are already
 * indexed and must not move) and English under `/en` with English slugs. The page
 * components read their locale from the router, so they are shared, not duplicated.
 */
const AppRoutes: React.FC = () => (
  <Routes>
    {/* ── Spanish (root) ── */}
    <Route path="/" element={<HomePage />} />
    <Route path="/servicios" element={<Navigate to="/servicios/arquitectura-corporativa" replace />} />
    <Route path="/servicios/:slug" element={<ServicePage />} />
    <Route path="/proyectos/:slug" element={<ProjectPage />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/equipo" element={<Equipo />} />
    <Route path="/equipo/:slug" element={<TeamMemberPage />} />
    <Route path="/galeria" element={<Galeria />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/agenda" element={<Agenda />} />

    {/* ── English (/en) ── */}
    <Route path="/en" element={<HomePage />} />
    <Route path="/en/services" element={<Navigate to="/en/services/corporate-architecture" replace />} />
    <Route path="/en/services/:slug" element={<ServicePage />} />
    <Route path="/en/projects/:slug" element={<ProjectPage />} />
    <Route path="/en/about" element={<Nosotros />} />
    <Route path="/en/team" element={<Equipo />} />
    <Route path="/en/team/:slug" element={<TeamMemberPage />} />
    <Route path="/en/gallery" element={<Galeria />} />
    <Route path="/en/blog" element={<Blog />} />
    <Route path="/en/blog/:slug" element={<BlogPost />} />
    <Route path="/en/contact" element={<Agenda />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('[data-animate]').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <Analytics />
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <main id="main-content" className="pt-20 lg:pt-24">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
