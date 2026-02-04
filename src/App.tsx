import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import AboutUsSection from './components/AboutUsSection';
import InteractiveMap from './components/InteractiveMap';
import ProjectsGrid from './components/ProjectsGrid';
import GallerySection from './components/GallerySection';
import InteractiveServices from './components/InteractiveServices';
import CaseStudy from './components/CaseStudy';
import Clients from './components/Clients';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';
import Agenda from './pages/Agenda';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import Equipo from './pages/Equipo';
import TeamMemberPage from './pages/TeamMemberPage';
import Galeria from './pages/Galeria';
import './styles/globals.css';

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ValuePillars />
      <AboutUsSection />
      <InteractiveMap />
      <ProjectsGrid />
      <GallerySection showImages={false} />
      <InteractiveServices />
      <CaseStudy />
      <Clients />
      <CTAForm />
    </>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add smooth scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main id="main-content" className="pt-20 lg:pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<Navigate to="/servicios/arquitectura-corporativa" replace />} />
            <Route path="/servicios/:slug" element={<ServicePage />} />
            <Route path="/proyectos/:slug" element={<ProjectPage />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/equipo/:slug" element={<TeamMemberPage />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;