export const SITE = {
  brand: "Arte y Dimensiones",
  ciudad: "Panamá",
  telefono_whatsapp: "+507 263-2109",
  email_contacto: "info@artedim.com",
  cta_frase: "Agenda una evaluación sin costo",
  promesa_corta: "Resultados medibles en 60 días",
  prueba_social_breve: "Más de 150 proyectos entregados en Panamá"
};

export const SERVICES = [
  {
    nombre: "Diseño Arquitectónico",
    slug: "diseno-arquitectonico",
    keyword_principal: "diseño arquitectónico Panamá",
    longtails: [
      "arquitectura corporativa Panamá",
      "planos arquitectónicos comerciales",
      "diseño arquitectónico oficinas Panamá"
    ],
    pains: [
      "Planos que no cumplen regulaciones municipales",
      "Proyectos que se atrasan meses por errores de diseño",
      "Espacios que no optimizan la productividad"
    ],
    outcomes: [
      "+30% más rápido en aprobaciones municipales",
      "Espacios listos en menos de 90 días",
      "+40% mejora en productividad del equipo"
    ],
    features: [
      "Planos optimizados para eficiencia energética",
      "Visualizaciones 3D fotorrealistas",
      "Cumplimiento normativo garantizado",
      "Diseño centrado en el usuario final"
    ],
    faqs: [
      { 
        q: "¿Cuánto cuesta un diseño arquitectónico en Panamá?", 
        a: "Depende del tamaño y complejidad del proyecto, pero ofrecemos propuestas claras y transparentes desde la primera reunión. Nuestros precios son competitivos en el mercado panameño." 
      },
      { 
        q: "¿Qué incluye el servicio de diseño arquitectónico?", 
        a: "Incluye planos arquitectónicos completos, renders 3D, documentación para aprobación municipal, especificaciones técnicas y acompañamiento durante todo el proceso de aprobación." 
      },
      { 
        q: "¿Cómo agendo una cita para mi proyecto?", 
        a: "Puedes agendar una evaluación gratuita a través de nuestro calendario online. En 30 minutos analizamos tu proyecto y te damos un plan claro sin compromiso." 
      }
    ],
    imagen_hero: "/images/services/consultoria.png",
    imagenes_galeria: [
      "/images/portfolio/sabanitas.png",
      "/images/portfolio/santamaria.png",
      "/images/portfolio/Boulevard.png",
      "/images/portfolio/Brisascapital.png"
    ]
  },
  {
    nombre: "Remodelaciones Comerciales",
    slug: "remodelaciones-comerciales",
    keyword_principal: "remodelaciones comerciales Panamá",
    longtails: [
      "renovación espacios comerciales Panamá",
      "remodelación oficinas corporativas",
      "modernización locales comerciales Panamá"
    ],
    pains: [
      "Espacios comerciales que no atraen clientes",
      "Remodelaciones que interrumpen el negocio por meses",
      "Presupuestos que se disparan sin control"
    ],
    outcomes: [
      "+50% aumento en tráfico de clientes",
      "Remodelación sin cerrar el negocio",
      "ROI positivo en menos de 12 meses"
    ],
    features: [
      "Remodelación por fases sin interrumpir operaciones",
      "Diseño orientado a conversión de ventas",
      "Materiales de alta durabilidad",
      "Gestión integral del proyecto"
    ],
    faqs: [
      { 
        q: "¿Cuánto tiempo toma una remodelación comercial?", 
        a: "Depende del alcance, pero trabajamos por fases para minimizar interrupciones. Una remodelación típica toma entre 2-4 meses." 
      },
      { 
        q: "¿Puedo mantener mi negocio abierto durante la remodelación?", 
        a: "Sí, diseñamos un plan de trabajo por etapas que permite mantener operaciones mientras renovamos diferentes áreas." 
      },
      { 
        q: "¿Cómo agendo una cita para evaluar mi espacio comercial?", 
        a: "Agenda una evaluación gratuita donde analizamos tu espacio actual y te presentamos oportunidades de mejora específicas para tu tipo de negocio." 
      }
    ],
    imagen_hero: "/images/services/masterplanning.png",
    imagenes_galeria: [
      "/images/portfolio/santamaria.png",
      "/images/portfolio/Boulevard.png",
      "/images/portfolio/business2.png",
      "/images/services/serviciosparallax.png"
    ]
  },
  {
    nombre: "Construcción General",
    slug: "construccion-general",
    keyword_principal: "construcción general Panamá",
    longtails: [
      "construcción llave en mano Panamá",
      "construcción proyectos corporativos",
      "construcción comercial Panamá"
    ],
    pains: [
      "Constructoras que no cumplen plazos",
      "Sobrecostos inesperados durante la obra",
      "Calidad de construcción deficiente"
    ],
    outcomes: [
      "Entrega puntual garantizada",
      "Presupuesto fijo sin sorpresas",
      "Calidad internacional certificada"
    ],
    features: [
      "Gestión integral llave en mano",
      "Tecnología BIM para control de obra",
      "Materiales de proveedores certificados",
      "Supervisión técnica especializada"
    ],
    faqs: [
      { 
        q: "¿Qué incluye el servicio de construcción llave en mano?", 
        a: "Incluye diseño, permisos, construcción, acabados, instalaciones y entrega final. Te encargamos de todo el proceso." 
      },
      { 
        q: "¿Cómo garantizan el cumplimiento de plazos?", 
        a: "Usamos metodología BIM y cronogramas detallados con hitos verificables. Además, ofrecemos garantía de entrega puntual." 
      },
      { 
        q: "¿Cómo agendo una cita para mi proyecto de construcción?", 
        a: "Solicita una evaluación gratuita donde revisamos tus planos, terreno y requerimientos para darte una propuesta detallada." 
      }
    ],
    imagen_hero: "/images/services/estudios.png",
    imagenes_galeria: [
      "/images/portfolio/Brisascapital.png",
      "/images/portfolio/brisasste.png",
      "/images/portfolio/sabanitas.png",
      "/images/portfolio/business2.png"
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  return SERVICES.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return SERVICES.map(service => service.slug);
};