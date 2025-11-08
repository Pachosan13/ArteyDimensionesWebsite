export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  roi: string;
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "terrazas-de-sabanitas",
    title: "Terrazas de Sabanitas",
    category: "Plaza Comercial",
    image: "/images/portfolio/sabanitas.png",
    roi: "+40% retención de arrendatarios",
    description: "Diseño integral de plaza comercial que maximiza el flujo de visitantes y crea experiencias memorables."
  },
  {
    slug: "santa-maria-business-park",
    title: "Santa Maria Business Park",
    category: "Desarrollo Corporativo",
    image: "/images/portfolio/santamaria.png",
    roi: "+25% tráfico peatonal",
    description: "Espacios corporativos diseñados estratégicamente para impulsar la productividad y colaboración empresarial."
  },
  {
    slug: "boulevard-penonome",
    title: "Boulevard Penonomé",
    category: "Plaza Comercial",
    image: "/images/portfolio/Boulevard.png",
    roi: "+30% eficiencia operativa",
    description: "Arquitectura comercial innovadora que combina funcionalidad con estética moderna para optimizar operaciones."
  },
  {
    slug: "brisas-capital",
    title: "Brisas Capital",
    category: "Plaza Comercial",
    image: "/images/portfolio/Brisascapital.png",
    roi: "+50% satisfacción de visitantes",
    description: "Rediseño completo que eleva la experiencia del cliente y aumenta la retención de arrendatarios."
  },
  {
    slug: "brisas-capital-este",
    title: "Brisas Capital Este",
    category: "Plaza Comercial",
    image: "/images/portfolio/brisasste.png",
    roi: "+35% valorización inmobiliaria",
    description: "Transformación arquitectónica que impulsa el valor inmobiliario y atrae marcas premium."
  },
  {
    slug: "centro-corporativo-business",
    title: "Centro Corporativo Business",
    category: "Desarrollo Corporativo",
    image: "/images/portfolio/business2.png",
    roi: "+60% satisfacción de empleados",
    description: "Espacios de trabajo modernos que fomentan la innovación y mejoran el bienestar laboral."
  },
];
