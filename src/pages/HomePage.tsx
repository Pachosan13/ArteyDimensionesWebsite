import React from "react";
import Hero from "../components/Hero";
import ValuePillars from "../components/ValuePillars";
import AboutUsSection from "../components/AboutUsSection";
import InteractiveMap from "../components/InteractiveMap";
import ProjectsGrid from "../components/ProjectsGrid";
import GallerySection from "../components/GallerySection";
import InteractiveServices from "../components/InteractiveServices";
import CaseStudy from "../components/CaseStudy";
import Clients from "../components/Clients";
import CTAForm from "../components/CTAForm";
import SEOHead from "../components/SEOHead";

const HomePage: React.FC = () => (
  <>
    <SEOHead />
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

export default HomePage;
