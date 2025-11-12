import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import ProjectsGrid from './components/ProjectsGrid';
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
import './styles/globals.css';

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ProjectsGrid />
      <InteractiveServices />
      <CaseStudy />
      <Clients />
      <CTAForm />
    </>
  );
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
      <div className="min-h-screen bg-white">
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<Navigate to="/servicios/arquitectura-corporativa" replace />} />
            <Route path="/servicios/:slug" element={<ServicePage />} />
            <Route path="/proyectos/:slug" element={<ProjectPage />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/equipo/:slug" element={<TeamMemberPage />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;