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
    description: "Terrazas de Sabanitas es una plaza comercial en Colón con 40 locales, incluyendo tres anclas y una franquicia de restaurantes. El diseño tipo colonial contemporáneo ofrece módulos en ‘U’, torre icónica, murales artísticos, fuente y áreas verdes. La planta alta alberga locales para oficinas y servicios. El proyecto prioriza la eficiencia energética con iluminación LED y utiliza materiales como adoquines, piedra y madera sintética. Las áreas técnicas están ocultas para preservar la estética. La paleta de colores incluye arena, chocolate y grises, brindando un ambiente moderno y acogedor para compras, entretenimiento y gastronomía."
  },
  {
    slug: "santa-maria-business-park",
    title: "Santa Maria Business Park",
    category: "Desarrollo Corporativo",
    image: "/images/portfolio/santamaria.png",
    roi: "+25% tráfico peatonal",
    description: "Santa Maria Business Park es un complejo corporativo en el ‘Santa Maria Business District’, diseñado para promover la conectividad urbana y espacios verdes. El proyecto incluye varios edificios, permitiendo construcción por fases y vistas agradables, con oficinas para bancos y aseguradoras, así como empresas familiares y transnacionales. Los estacionamientos se ubican en cuatro sótanos, optimizando el área útil y el espacio público. En la planta baja hay locales comerciales para restaurantes y cafés. El diseño priorizó eficiencia energética, control de costos y sostenibilidad, incorporando sistemas de riego con agua freática, preparación para paneles solares y cargadores para autos eléctricos."
  },
  {
    slug: "boulevard-penonome",
    title: "Boulevard Penonomé",
    category: "Plaza Comercial",
    image: "/images/portfolio/Boulevard.png",
    roi: "+30% eficiencia operativa",
    description: "Boulevard Penonomé es un centro comercial de diseño contemporáneo con toques industriales, ubicado en Penonomé, Coclé. Ofrece locales ancla, restaurantes y tiendas medianas y pequeñas, distribuidos en espacios amplios y plazas para eventos. El proyecto cuenta con estacionamientos cómodos, sótano, acceso desde la Carretera Panamericana y el Boulevard Norte, y utiliza una paleta de colores sobrios, piedra y madera en sus acabados. El mobiliario y paisajismo emplean materiales y plantas nativas. Con 340 metros de frente y 23,500 m² de área comercial, todos los locales están conectados por pasillos techados amplios."
  },
  {
    slug: "brisas-capital",
    title: "Brisas Capital",
    category: "Plaza Comercial",
    image: "/images/portfolio/Brisascapital.png",
    roi: "+50% satisfacción de visitantes",
    description: "Brisas Capital es un centro comercial ubicado en Brisas de Golf, San Miguelito, con 11,950 m² de locales comerciales de diversos tamaños, incluyendo tiendas ancla, cine de seis salas, restaurantes y áreas de entretenimiento. Su diseño contemporáneo prioriza áreas verdes y espacios públicos, como un parque con juegos infantiles y zonas para mascotas. Cuenta con 401 plazas de estacionamiento y dos accesos vehiculares. La arquitectura utiliza materiales modernos, colores neutros y plantas nativas. La eficiencia energética se logra mediante iluminación LED y techos con termopáneles, mientras que los servicios y equipamientos están estratégicamente ubicados para no interferir con la experiencia del usuario."
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
