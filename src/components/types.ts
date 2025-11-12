import servicesSource from '../data/services.json';
import projectsSource from '../data/projects.json';

export interface ServiceFAQItem {
  q: string;
  a: string;
}

export interface ServiceTestimonial {
  author: string;
  quote: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  action: string;
}

export interface Service {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  keywords: string[];
  valueCopy: string;
  faq: ServiceFAQItem[];
  testimonio?: ServiceTestimonial;
  gallery: string[];
  stats?: ServiceStat[];
  process?: ServiceProcessStep[];
  cta?: ServiceCTA;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  roi?: string;
  description: string;
  keywords: string[];
  metaDescription: string;
  gallery: string[];
}

export const services = servicesSource as Service[];
export const projects = projectsSource as Project[];
