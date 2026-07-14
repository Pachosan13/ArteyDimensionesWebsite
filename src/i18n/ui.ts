/**
 * UI string dictionary.
 *
 * `UIStrings` is derived from the Spanish object, so TypeScript fails the build if the
 * English object is missing a key. That is deliberate: a half-translated page is worse
 * than no translation, and we would rather find out at build time than in production.
 */

import type { Locale } from "./config";

const es = {
  common: {
    skipToContent: "Saltar al contenido",
    close: "Cerrar",
    viewProject: "Ver proyecto",
    backToHome: "Volver al inicio",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "La página que buscas no existe o cambió de dirección.",
  },

  lang: {
    switchTo: "English",
    switchAria: "Switch to English",
    current: "Español",
  },

  nav: {
    goHome: "Arte y Dimensiones — ir al inicio",
    services: "Servicios",
    ourServices: "Nuestros Servicios",
    projects: "Proyectos",
    featuredProjects: "Proyectos Destacados",
    viewAllProjects: "Ver todos los proyectos →",
    viewAll: "Ver todos →",
    about: "Nosotros",
    team: "Equipo",
    gallery: "Galería",
    blog: "Blog",
    contact: "Contáctenos",
    requestProposal: "Solicitar Propuesta",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    sectionsLabel: "SECCIONES",
    servicesLabel: "SERVICIOS",
    projectsLabel: "PROYECTOS",
    portfolio: "Portafolio",
    caseStudy: "Caso de Éxito",
    clients: "Clientes",
    contactSection: "Contacto",
  },

  hero: {
    titlePre: "Convertimos conceptos en espacios que",
    titleHighlight: "cobran vida",
    subtitle: "Arquitectura Comercial y Corporativa en Panamá",
    ctaPrimary: "Solicitar Propuesta",
    ctaSecondary: "Ver Nuestros Proyectos",
    imageAlt: "Arte y Dimensiones - Arquitectura moderna",
    yearsSuffix: " años",
    yearsLabel: "de experiencia",
    areaLabel: "de proyectos comerciales",
    projectsSuffix: " proyectos",
    projectsLabel: "construidos",
  },

  pillars: {
    eyebrow: "NUESTRO APORTE",
    heading: "Tres compromisos para que tu inversión en espacios sea rentable desde el día uno.",
    items: [
      {
        title: "Seguimiento Estratégico",
        description:
          "Coordinamos cada fase con tableros de control claros, entregables semanales y reportes ejecutivos para que tu proyecto nunca pierda ritmo.",
      },
      {
        title: "Atención Personalizada",
        description:
          "Acompañamiento personalizado y continuo en todo el proceso, con soluciones de diseño adaptadas a las necesidades, expectativas y presupuesto del cliente.",
      },
      {
        title: "Confianza Ganada",
        description:
          "Protocolos de calidad, contratos transparentes y más de dos décadas creando espacios que cumplen con normativa y expectativas de marca.",
      },
    ],
  },

  about: {
    eyebrow: "Consultoría integral",
    heading:
      "Nos dedicamos al diseño y desarrollo de proyectos que equilibran estética, normativa y retorno financiero.",
    body: "Trabajamos de la mano con desarrolladores e inversionistas optimizando presupuestos, coordinando proveedores y asegurando entregas puntuales para retail, oficinas y proyectos institucionales en todo Panamá.",
    badgeTitle: "Equipos dedicados",
    badgeBody: "Directores senior acompañan cada proyecto.",
    imageAlt: "Equipo de Arte y Dimensiones coordinando un proyecto",
  },

  servicesSection: {
    eyebrow: "Servicios",
    heading: "Diseños enfocados en ROI",
    subheading:
      "Aplicamos metodología integral para garantizar trazabilidad en cada fase, desde masterplan hasta construcción.",
    cardEyebrow: "Servicio",
    cta: "Ver detalle",
  },

  projectsSection: {
    eyebrow: "Portafolio",
    headingPre: "Proyectos",
    headingHighlight: "Destacados",
    subheading:
      "Arquitectura comercial y corporativa diseñada para maximizar tráfico, rentabilidad y experiencia.",
    hoverCta: "Ver Proyecto",
  },

  gallerySection: {
    eyebrow: "Galería",
    headingPre: "Arquitectura desde la idea hasta el",
    headingHighlight: "Proyecto",
    cta: "Ver galería completa",
    openImage: "Abrir imagen",
  },

  caseStudy: {
    headingPre: "Caso de",
    headingHighlight: "Éxito",
    subtitle: "Santa María Business Park – Nueva Sede Prival Bank",
    eyebrow: "CASO DE ÉXITO",
    title: "Santa María Business Park – Nueva Sede Prival Bank",
    challengeHeading: "El reto",
    challengeBody:
      "Nos encontramos la excavación y muros de un sótano de un proyecto anterior, el desafío fue adaptar un nuevo diseño a las condiciones del sitio, cumpliendo plazos contractuales y un presupuesto controlado, mientras se desarrollaban planos y avanzaba la construcción.",
    solutionHeading: "La solución",
    solutionBody:
      "Implementamos un enfoque integral de arquitectura y project management: levantamiento técnico de lo existente, diseño adaptable y construible, planificación por etapas y coordinación constante con cliente y contratistas, asegurando viabilidad técnica y económica.",
    resultsHeading: "Resultados",
    results: [
      "Cumplimiento de los tiempos establecidos",
      "Integración eficiente del diseño con la obra existente",
      "Proyecto ejecutable y alineado al presupuesto",
      "Cliente satisfecho, hoy operando en su nueva sede",
    ],
    valueHeading: "Valor",
    valueBody: "Diseño que se construye, se ejecuta a tiempo y funciona para quien lo habita.",
    cta: "Solicitar Análisis para Mi Proyecto",
  },

  clients: {
    headingPre: "Confianza de",
    headingHighlight: "Líderes",
    subheading:
      "Desarrolladores e instituciones líderes en Panamá confían en nuestras soluciones arquitectónicas",
    logoAltSuffix: "Cliente de Arte y Dimensiones",
  },

  map: {
    sectionAria: "Mapa de Panamá con proyectos de Arte y Dimensiones",
    imageAlt: "Mapa de Panamá con proyectos de Arte y Dimensiones",
    penonomeTitle: "Boulevard Penonomé",
    penonomeDescription:
      "Boulevard de uso mixto en Penonomé, con enfoque en conveniencia diaria y tráfico vehicular.",
    viewDetailsAria: "Ver detalles Boulevard Penonomé",
  },

  footer: {
    tagline:
      "Estudio de arquitectura especializado en espacios corporativos y comerciales que impulsan el rendimiento y la productividad.",
    servicesHeading: "Servicios",
    viewAllServices: "Ver Todos los Servicios",
    contactHeading: "Contacto",
    address: "Calle Alberto Navarro, Mandalay Apartments, Planta Baja",
    homeAria: "Ir al inicio",
    copyright: "© 2026 Arte y Dimensiones · Arquitectura que impulsa resultados",
    creditPre: "Diseño y desarrollo por",
  },

  servicePage: {
    inPanama: "en Panamá",
    ctaPrimary: "Solicitar Propuesta",
    viewPortfolio: "Ver Portafolio",
    valueHeading: "Valor para tu organización",
    processHeading: "Nuestro Proceso",
    processSteps: [
      { title: "Descubrimiento", desc: "Levantamiento, entrevistas y objetivos. Definimos KPIs y alcance." },
      { title: "Diseño", desc: "Concepto, layout, materiales, renders y documentación lista para ejecutar." },
      { title: "Ejecución", desc: "Coordinación de obra, calidad, seguridad y entregas sin sorpresas." },
    ],
    faqHeading: "Preguntas Frecuentes",
    relatedHeading: "También te puede interesar",
    ctaHeading: "¿Listo para transformar tu espacio?",
    ctaBody: "Conversemos sobre tu proyecto y te preparamos una propuesta a medida.",
    ctaButton: "Ponte En Contacto Con Nosotros",
    heroAlt: "Imagen del servicio",
  },

  projectPage: {
    ctaHeading: "¿Quieres un espacio así para tu proyecto?",
    ctaBody: "Hablemos y te presentamos una propuesta a medida.",
    ctaButton: "Solicitar Propuesta",
    backHome: "← Volver al Inicio",
  },

  featuredProjects: {
    headingPre: "Proyectos",
    headingHighlight: "Destacados",
    subheading: "Algunos de nuestros desarrollos más emblemáticos en Panamá",
    hoverCta: "Ver Proyecto",
  },

  aboutPage: {
    heroTitle: "Firma de Arquitectura Comercial y Corporativa en Panamá",
    heroSubtitle: "Más de 26 años transformando espacios en resultados de negocio",
    heroAlt: "Equipo de Arte y Dimensiones en proyecto arquitectónico",
    teamPhotoAlt: "Equipo profesional de Arte y Dimensiones",
    stats: [
      { value: "150+", label: "Proyectos entregados" },
      { value: "410,000+", label: "m² diseñados" },
      { value: "12", label: "Profesionales" },
      { value: "26+", label: "Años de experiencia" },
    ],
    bodyHeading: "Arquitectos comerciales especializados desde 1999",
    bodyP1:
      "Arte y Dimensiones es una firma de arquitectura en Panamá dedicada exclusivamente al diseño de proyectos comerciales y corporativos. Trabajamos de la mano con desarrolladores e inversionistas optimizando presupuestos, coordinando proveedores y asegurando entregas puntuales.",
    bodyP2:
      "Nuestro equipo de 12 profesionales — arquitectos, project managers y especialistas técnicos — diseña espacios que equilibran estética, normativa y retorno financiero para retail, oficinas y proyectos institucionales en todo Panamá.",
    specialtiesHeading: "Nuestras especialidades",
    specialties: [
      {
        title: "Arquitectura Comercial",
        desc: "Plazas, centros comerciales y espacios retail diseñados para convertir visitas en ventas.",
        slug: "arquitectura-comercial",
      },
      {
        title: "Arquitectura Corporativa",
        desc: "Oficinas que elevan productividad, bienestar e identidad de marca.",
        slug: "arquitectura-corporativa",
      },
      {
        title: "Space Planning",
        desc: "Layouts basados en datos reales para maximizar cada metro cuadrado.",
        slug: "space-planning",
      },
      {
        title: "Diseño de Oficinas",
        desc: "Diseño integral de espacios de trabajo: desde el concepto hasta la coordinación con contratistas.",
        slug: "diseno-de-oficinas",
      },
    ],
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Por qué elegir una firma de arquitectura especializada en comercial y corporativo?",
        a: "Una firma especializada entiende los drivers de negocio detrás de cada proyecto: flujo de clientes, productividad, branding y retorno de inversión. Diseñamos espacios que generan resultados medibles, no solo estéticos.",
      },
      {
        q: "¿Cuántos años de experiencia tiene Arte y Dimensiones?",
        a: "Más de 26 años diseñando proyectos comerciales y corporativos en Panamá. Desde 1999, hemos completado más de 150 proyectos y diseñado más de 410,000 m².",
      },
      {
        q: "¿En qué se diferencia Arte y Dimensiones de otros estudios de arquitectura?",
        a: "Nos enfocamos 100% en arquitectura comercial y corporativa. Cada proyecto incluye análisis de ROI, KPIs de espacio y coordinación integral. No hacemos residencial — nuestra especialización es nuestro diferencial.",
      },
      {
        q: "¿Dónde están ubicados y en qué zonas de Panamá trabajan?",
        a: "Nuestra oficina está en Ciudad de Panamá. Trabajamos en todo el país: Ciudad de Panamá, Colón, Penonomé, David, Santiago, Coronado y más.",
      },
    ],
  },

  galleryPage: {
    back: "Volver al Inicio",
    eyebrow: "Galería",
  },

  blogPage: {
    heading: "Blog",
    subheading:
      "Guias, costos y estrategia de arquitectura comercial y corporativa para empresas en Panama.",
    readMore: "Leer articulo",
    minutesSuffix: "min",
    ctaHeading: "¿Tienes un proyecto en mente?",
    ctaBody: "Conversemos sobre tu espacio comercial o corporativo y te preparamos una propuesta a medida.",
    ctaButton: "Solicitar Propuesta",
    backToBlog: "Volver al Blog",
    readingTime: "min de lectura",
    faqHeading: "Preguntas Frecuentes",
    relatedHeading: "Articulos Relacionados",
  },

  contactPage: {
    heroPre: "Agenda tu",
    heroHighlight: "Evaluación",
    heroSubtitle:
      "En 30 minutos identificamos oportunidades y te damos un plan claro, sin costo ni compromiso",
    bullets: [
      "Evaluación profesional gratuita",
      "Solo 30 minutos de tu tiempo",
      "Sin compromiso de compra",
    ],
    calendarHeading: "Selecciona tu Horario Preferido",
    calendarSubheading: "Elige el día y hora que mejor se adapte a tu agenda",
    iframeTitle: "Agenda tu cita con Arte y Dimensiones",
    includesHeading: "¿Qué incluye la evaluación?",
    includes: [
      "Análisis de tu espacio actual",
      "Identificación de oportunidades de mejora",
      "Plan de acción personalizado",
      "Estimación de inversión y ROI",
    ],
    commitmentHeading: "Nuestro Compromiso",
    commitments: [
      "Más de 150 proyectos entregados en Panamá",
      "Resultados medibles en 60 días",
      "Especialistas en normativas panameñas",
      "Gestión integral de proyectos",
    ],
    privacyNote: "Tu información es privada y segura. No compartimos datos con terceros.",
    altContactHeading: "¿Prefieres Contactarnos Directamente?",
  },

  teamPage: {
    heroPre: "Nuestro",
    heroHighlight: "Equipo",
    heroSubtitle: "Más de 25 años guiando proyectos con puntualidad, comunicación abierta y transparencia.",
    heroAlt: "Equipo Arte y Dimensiones",
    historyHeading: "Nuestra Historia",
    historyBody:
      "Durante más de 25 años, nuestro equipo directivo ha guiado a la firma a través de obras, diseños, reuniones, seguimientos, visitas en campo, entrevistas y más; manteniendo como pilares de trabajo: la puntualidad, la comunicación abierta y constante con el equipo y los clientes, y la transparencia en cada etapa del diseño y desarrollo.",
    stats: [
      { value: "25+", label: "Años de Experiencia" },
      { value: "150+", label: "Proyectos Completados" },
      { value: "12", label: "Profesionales Expertos" },
      { value: "100+", label: "Clientes Atendidos" },
    ],
    valuesHeading: "Nuestros Valores",
    valuesSubheading: "Los principios que guían cada decisión y cada proyecto que emprendemos",
    leadershipHeading: "Directiva",
    leadershipEyebrow: "Nuestros Líderes de Innovación",
    leadershipBody:
      "Arte y Dimensiones nació como una iniciativa para potenciar las habilidades de nuestros arquitectos y su crecimiento profesional. Este impulso constante por evolucionar y asumir nuevos desafíos nos ha llevado a desarrollar proyectos innovadores que nos diferencian en el campo de la arquitectura comercial.",
    directoryHeading: "Directorio del Equipo",
    directoryBody:
      "Conozca a los profesionales que hacen posible nuestra visión de excelencia arquitectónica",
    ctaHeading: "¿Listo para trabajar con nuestro equipo?",
    ctaBody: "Contáctenos para discutir cómo podemos ayudarle a materializar su visión arquitectónica",
    ctaPrimary: "Solicitar Propuesta",
    ctaSecondary: "Contáctenos",
  },

  memberPage: {
    backToTeam: "Volver al Equipo",
    linkedinCta: "Conectar en LinkedIn",
    careerHeading: "Trayectoria Profesional",
    educationHeading: "Formación Académica",
    specializationsHeading: "Áreas de Especialización",
    achievementsHeading: "Logros Destacados",
    ctaHeading: "¿Interesado en trabajar con nuestro equipo?",
    ctaBody: "Descubra cómo podemos ayudarle a materializar su próximo proyecto arquitectónico",
    ctaPrimary: "Solicitar Propuesta",
    ctaSecondary: "Ver Todo el Equipo",
    seoDescPrefix: "Conozca a",
    seoDescMiddle: "en Arte y Dimensiones.",
  },

  ctaForm: {
    heading: "¿Listo para Transformar tu Espacio?",
    subheading:
      "Solicita una consulta gratuita y descubre cómo podemos maximizar el potencial de tu proyecto arquitectónico",
    whyHeading: "¿Por qué elegir Arte y Dimensiones?",
    whyPoints: [
      "26+ años de experiencia en arquitectura corporativa",
      "Enfoque en ROI y rendimiento de espacios",
      "Especialistas en normativas panameñas",
      "Gestión integral de proyectos",
    ],
    contactHeading: "Contacta con Nosotros",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    officeLabel: "Oficina",
    formHeading: "Ponte en contacto con nosotros",
    nameLabel: "Nombre Completo *",
    namePlaceholder: "Tu nombre completo",
    emailFieldLabel: "Email Corporativo *",
    emailPlaceholder: "tu.email@empresa.com",
    projectTypeLabel: "Tipo de Proyecto *",
    projectTypePlaceholder: "Selecciona el tipo de proyecto",
    projectTypes: [
      { value: "oficinas-corporativas", label: "Oficinas Corporativas" },
      { value: "comercial", label: "Desarrollo Comercial" },
      { value: "institucional", label: "Proyecto Institucional" },
      { value: "residencial", label: "Desarrollo Residencial" },
      { value: "mixto", label: "Proyecto Mixto" },
      { value: "otro", label: "Otro" },
    ],
    messageLabel: "Detalles del Proyecto",
    messagePlaceholder: "Cuéntanos más sobre tu proyecto, ubicación, presupuesto estimado, etc.",
    submit: "Solicitar Propuesta Gratuita",
    submitting: "Enviando...",
    success: "¡Gracias! Respondemos en menos de 24 horas.",
    error: "Hubo un error. Intenta de nuevo o contáctanos directamente.",
    guarantee: "* Respuesta garantizada en menos de 24 horas",
  },

  serviceForm: {
    heading: "Solicitar Propuesta",
    sent: "¡Gracias! Te contactaremos muy pronto.",
    name: "Nombre",
    email: "Email",
    company: "Empresa",
    phone: "Teléfono",
    message: "Cuéntanos sobre tu proyecto",
    submit: "Enviar",
    submitting: "Enviando...",
    error: "Hubo un error. Intenta de nuevo o contáctanos directamente.",
    privacy: "Protegemos tu información. Solo la usamos para responder a tu solicitud.",
  },

  projectGallery: {
    heading: "Galería del Proyecto",
    summaryHeading: "Resumen del Proyecto",
    zoomAria: "Ampliar imagen",
    ofLabel: "de",
    closeAria: "Cerrar galería",
    prevAria: "Imagen anterior",
    nextAria: "Imagen siguiente",
    goToAria: "Ir a imagen",
    enlargedAria: "imagen ampliada",
    fallbackAlt: "Proyecto arquitectónico",
    viewLabel: "vista",
    ofDesign: "del diseño arquitectónico",
  },
};

/** The English object must satisfy this exactly — missing keys break the build. */
export type UIStrings = typeof es;

const en: UIStrings = {
  common: {
    skipToContent: "Skip to content",
    close: "Close",
    viewProject: "View project",
    backToHome: "Back to home",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you are looking for does not exist or has moved.",
  },

  lang: {
    switchTo: "Español",
    switchAria: "Cambiar a español",
    current: "English",
  },

  nav: {
    goHome: "Arte y Dimensiones — go to homepage",
    services: "Services",
    ourServices: "Our Services",
    projects: "Projects",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View all projects →",
    viewAll: "View all →",
    about: "About",
    team: "Team",
    gallery: "Gallery",
    blog: "Blog",
    contact: "Contact Us",
    requestProposal: "Request a Proposal",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    sectionsLabel: "SECTIONS",
    servicesLabel: "SERVICES",
    projectsLabel: "PROJECTS",
    portfolio: "Portfolio",
    caseStudy: "Case Study",
    clients: "Clients",
    contactSection: "Contact",
  },

  hero: {
    titlePre: "We turn concepts into spaces that",
    titleHighlight: "come to life",
    subtitle: "Commercial and Corporate Architecture in Panama",
    ctaPrimary: "Request a Proposal",
    ctaSecondary: "See Our Projects",
    imageAlt: "Arte y Dimensiones - Modern architecture in Panama",
    yearsSuffix: " years",
    yearsLabel: "of experience",
    areaLabel: "of commercial projects",
    projectsSuffix: " projects",
    projectsLabel: "built",
  },

  pillars: {
    eyebrow: "WHAT WE BRING",
    heading: "Three commitments that make your investment in space pay off from day one.",
    items: [
      {
        title: "Strategic Oversight",
        description:
          "We run every phase against a clear control board, with weekly deliverables and executive reporting, so your project never loses momentum.",
      },
      {
        title: "Direct Partnership",
        description:
          "You work with us continuously, start to finish, on design solutions built around your requirements, your expectations and your budget.",
      },
      {
        title: "Earned Trust",
        description:
          "Quality protocols, transparent contracts, and more than two decades building spaces that meet both code and brand expectations.",
      },
    ],
  },

  about: {
    eyebrow: "End-to-end consulting",
    heading:
      "We design and deliver projects that balance aesthetics, code compliance and financial return.",
    body: "We work alongside developers and investors — optimizing budgets, coordinating suppliers and protecting delivery dates for retail, office and institutional projects across Panama.",
    badgeTitle: "Dedicated teams",
    badgeBody: "A senior principal stays on every project.",
    imageAlt: "The Arte y Dimensiones team coordinating a project",
  },

  servicesSection: {
    eyebrow: "Services",
    heading: "Design built around ROI",
    subheading:
      "One methodology from masterplan through construction, so every phase stays traceable and accountable.",
    cardEyebrow: "Service",
    cta: "View details",
  },

  projectsSection: {
    eyebrow: "Portfolio",
    headingPre: "Featured",
    headingHighlight: "Projects",
    subheading:
      "Commercial and corporate architecture designed to maximize traffic, profitability and experience.",
    hoverCta: "View Project",
  },

  gallerySection: {
    eyebrow: "Gallery",
    headingPre: "Architecture from first idea to finished",
    headingHighlight: "Project",
    cta: "View the full gallery",
    openImage: "Open image",
  },

  caseStudy: {
    headingPre: "Case",
    headingHighlight: "Study",
    subtitle: "Santa María Business Park – Prival Bank Headquarters",
    eyebrow: "CASE STUDY",
    title: "Santa María Business Park – Prival Bank Headquarters",
    challengeHeading: "The challenge",
    challengeBody:
      "We inherited the excavation and basement walls of an abandoned project. The task was to fit a new design to those site conditions while holding contractual deadlines and a fixed budget — with drawings still being produced as construction moved ahead.",
    solutionHeading: "The solution",
    solutionBody:
      "We combined architecture and project management in one team: a technical survey of what already existed, a design that was adaptable and genuinely buildable, phased planning, and constant coordination with the client and contractors to keep the project viable both technically and financially.",
    resultsHeading: "Results",
    results: [
      "Delivered on the contracted schedule",
      "New design integrated cleanly with the existing structure",
      "Buildable project, on budget",
      "Client satisfied and operating from the new headquarters today",
    ],
    valueHeading: "The value",
    valueBody: "Design that actually gets built, delivered on time, and works for the people in it.",
    cta: "Request an Analysis of My Project",
  },

  clients: {
    headingPre: "Trusted by",
    headingHighlight: "Leaders",
    subheading:
      "Leading developers and institutions in Panama rely on our architectural solutions",
    logoAltSuffix: "Arte y Dimensiones client",
  },

  map: {
    sectionAria: "Map of Panama showing Arte y Dimensiones projects",
    imageAlt: "Map of Panama showing Arte y Dimensiones projects",
    penonomeTitle: "Boulevard Penonomé",
    penonomeDescription:
      "Mixed-use boulevard in Penonomé, built around daily convenience and vehicle traffic.",
    viewDetailsAria: "View Boulevard Penonomé details",
  },

  footer: {
    tagline:
      "An architecture firm specialized in corporate and commercial spaces that drive performance and productivity.",
    servicesHeading: "Services",
    viewAllServices: "View All Services",
    contactHeading: "Contact",
    address: "Calle Alberto Navarro, Mandalay Apartments, Ground Floor, Panama City, Panama",
    homeAria: "Go to homepage",
    copyright: "© 2026 Arte y Dimensiones · Architecture that drives results",
    creditPre: "Design and development by",
  },

  servicePage: {
    inPanama: "in Panama",
    ctaPrimary: "Request a Proposal",
    viewPortfolio: "View Portfolio",
    valueHeading: "What this delivers for your organization",
    processHeading: "Our Process",
    processSteps: [
      { title: "Discovery", desc: "Site survey, stakeholder interviews, objectives. We set the KPIs and the scope." },
      { title: "Design", desc: "Concept, layout, materials, renders and documentation ready to build from." },
      { title: "Delivery", desc: "Site coordination, quality, safety and handover without surprises." },
    ],
    faqHeading: "Frequently Asked Questions",
    relatedHeading: "You may also need",
    ctaHeading: "Ready to transform your space?",
    ctaBody: "Tell us about your project and we will put together a proposal built around it.",
    ctaButton: "Get In Touch With Us",
    heroAlt: "Service image",
  },

  projectPage: {
    ctaHeading: "Want a space like this for your project?",
    ctaBody: "Let's talk. We will come back to you with a proposal built around your requirements.",
    ctaButton: "Request a Proposal",
    backHome: "← Back to Home",
  },

  featuredProjects: {
    headingPre: "Featured",
    headingHighlight: "Projects",
    subheading: "A selection of our most significant developments in Panama",
    hoverCta: "View Project",
  },

  aboutPage: {
    heroTitle: "A Commercial & Corporate Architecture Firm in Panama",
    heroSubtitle: "26 years turning space into business results",
    heroAlt: "The Arte y Dimensiones team on an architectural project",
    teamPhotoAlt: "The professional team at Arte y Dimensiones",
    stats: [
      { value: "150+", label: "Projects delivered" },
      { value: "410,000+", label: "m² designed" },
      { value: "12", label: "Professionals" },
      { value: "26+", label: "Years in practice" },
    ],
    bodyHeading: "Specialist commercial architects since 1999",
    bodyP1:
      "Arte y Dimensiones is an architecture firm in Panama that works exclusively on commercial and corporate projects. We work alongside developers and investors — optimizing budgets, coordinating suppliers and protecting delivery dates.",
    bodyP2:
      "Our team of 12 — architects, project managers and technical specialists — designs spaces that balance aesthetics, code compliance and financial return for retail, office and institutional projects across Panama. We work with international clients and report in English.",
    specialtiesHeading: "What we specialize in",
    specialties: [
      {
        title: "Commercial Architecture",
        desc: "Retail plazas, shopping centers and storefronts designed to turn footfall into sales.",
        slug: "arquitectura-comercial",
      },
      {
        title: "Corporate Architecture",
        desc: "Offices that lift productivity, wellbeing and brand identity — including regional headquarters.",
        slug: "arquitectura-corporativa",
      },
      {
        title: "Space Planning",
        desc: "Layouts driven by real occupancy data, so every square meter earns its place.",
        slug: "space-planning",
      },
      {
        title: "Office Design",
        desc: "End-to-end workplace design, from concept through contractor coordination and handover.",
        slug: "diseno-de-oficinas",
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "What are the top architecture firms in Panama for commercial projects?",
        a: "The firms that specialize in commercial and corporate work — rather than doing a bit of everything — are the ones to shortlist. Arte y Dimensiones has worked exclusively on commercial, corporate and industrial projects since 1999: 150+ projects and 410,000+ m² delivered, including Santa María Business Park, Boulevard Penonomé (23,500 m²) and Brisas Capital (11,950 m²).",
      },
      {
        q: "Can a foreign company hire an architect in Panama?",
        a: "Yes. Panamanian law requires drawings to be sealed by a locally licensed architect, which is exactly the role we play for international clients — we handle design, municipal permitting and site coordination while your team stays wherever it is. We work and report in English.",
      },
      {
        q: "Where do multinationals locate their offices in Panama?",
        a: "Mostly Costa del Este, Panamá Pacífico and the Santa María Business District, which is where the modern corporate stock, the fiber and the parking ratios actually are. We have built in these districts and can run a test fit on candidate floors before you sign a lease.",
      },
      {
        q: "What makes Arte y Dimensiones different from other architecture studios in Panama?",
        a: "We do not do residential. One hundred percent of our work is commercial, corporate and industrial, and every project carries an ROI analysis, space KPIs and full coordination through to occupancy. The specialization is the differentiator.",
      },
    ],
  },

  galleryPage: {
    back: "Back to Home",
    eyebrow: "Gallery",
  },

  blogPage: {
    heading: "Blog",
    subheading:
      "Costs, timelines and strategy for commercial and corporate architecture in Panama — written for the people who sign off on the budget.",
    readMore: "Read article",
    minutesSuffix: "min",
    ctaHeading: "Have a project in mind?",
    ctaBody: "Tell us about your commercial or corporate space and we will come back with a proposal built around it.",
    ctaButton: "Request a Proposal",
    backToBlog: "Back to Blog",
    readingTime: "min read",
    faqHeading: "Frequently Asked Questions",
    relatedHeading: "Related Articles",
  },

  contactPage: {
    heroPre: "Book Your Project",
    heroHighlight: "Assessment",
    heroSubtitle:
      "In 30 minutes we identify the opportunities in your space and give you a clear plan. No cost, no obligation.",
    bullets: [
      "Free professional assessment",
      "Just 30 minutes of your time",
      "No purchase commitment",
    ],
    calendarHeading: "Pick a Time That Works",
    calendarSubheading: "Choose the day and time that fits your schedule",
    iframeTitle: "Book a meeting with Arte y Dimensiones",
    includesHeading: "What the assessment covers",
    includes: [
      "A review of your current space",
      "The improvement opportunities we can see in it",
      "A concrete action plan",
      "An investment and ROI estimate",
    ],
    commitmentHeading: "What We Commit To",
    commitments: [
      "150+ projects delivered in Panama",
      "We work and report in English with international clients",
      "Specialists in Panamanian building code and permitting",
      "End-to-end project management",
    ],
    privacyNote: "Your information stays private. We do not share your data with third parties.",
    altContactHeading: "Prefer to Reach Us Directly?",
  },

  teamPage: {
    heroPre: "Our",
    heroHighlight: "Team",
    heroSubtitle: "25 years of running projects on time, with open communication and no surprises.",
    heroAlt: "The Arte y Dimensiones team",
    historyHeading: "Our Story",
    historyBody:
      "For more than 25 years our leadership has taken the firm through drawings, site visits, client meetings, inspections and handovers — holding to the same three things throughout: hitting the dates, communicating openly and constantly with both the team and the client, and staying transparent at every stage of design and delivery.",
    stats: [
      { value: "25+", label: "Years of Experience" },
      { value: "150+", label: "Projects Completed" },
      { value: "12", label: "Professionals" },
      { value: "100+", label: "Clients Served" },
    ],
    valuesHeading: "Our Values",
    valuesSubheading: "The principles behind every decision and every project we take on",
    leadershipHeading: "Leadership",
    leadershipEyebrow: "The Principals",
    leadershipBody:
      "Arte y Dimensiones was founded to give architects room to grow and take on harder work. That drive to keep evolving is what has pushed us into the projects that set us apart in commercial architecture in Panama.",
    directoryHeading: "The Team",
    directoryBody: "The professionals behind the work",
    ctaHeading: "Ready to work with our team?",
    ctaBody: "Get in touch and we will talk through how to turn your project into something buildable.",
    ctaPrimary: "Request a Proposal",
    ctaSecondary: "Contact Us",
  },

  memberPage: {
    backToTeam: "Back to Team",
    linkedinCta: "Connect on LinkedIn",
    careerHeading: "Professional Background",
    educationHeading: "Education",
    specializationsHeading: "Areas of Specialization",
    achievementsHeading: "Selected Achievements",
    ctaHeading: "Interested in working with our team?",
    ctaBody: "Let's talk about what it would take to deliver your next project.",
    ctaPrimary: "Request a Proposal",
    ctaSecondary: "See the Full Team",
    seoDescPrefix: "Meet",
    seoDescMiddle: "at Arte y Dimensiones.",
  },

  ctaForm: {
    heading: "Ready to Transform Your Space?",
    subheading:
      "Book a free consultation and we will show you what your space could actually be doing for the business.",
    whyHeading: "Why Arte y Dimensiones?",
    whyPoints: [
      "26+ years in corporate architecture",
      "Built around ROI and space performance",
      "Specialists in Panamanian building code and permitting",
      "End-to-end project management",
    ],
    contactHeading: "Get In Touch",
    emailLabel: "Email",
    phoneLabel: "Phone",
    officeLabel: "Office",
    formHeading: "Send us a message",
    nameLabel: "Full Name *",
    namePlaceholder: "Your full name",
    emailFieldLabel: "Work Email *",
    emailPlaceholder: "you@company.com",
    projectTypeLabel: "Project Type *",
    projectTypePlaceholder: "Select your project type",
    projectTypes: [
      { value: "oficinas-corporativas", label: "Corporate Offices" },
      { value: "comercial", label: "Commercial Development" },
      { value: "institucional", label: "Institutional Project" },
      { value: "residencial", label: "Residential Development" },
      { value: "mixto", label: "Mixed-Use Project" },
      { value: "otro", label: "Other" },
    ],
    messageLabel: "Project Details",
    messagePlaceholder: "Tell us about the project — location, size, estimated budget, timeline.",
    submit: "Request a Free Proposal",
    submitting: "Sending...",
    success: "Thank you. We reply within 24 hours.",
    error: "Something went wrong. Try again, or contact us directly.",
    guarantee: "* We reply within 24 hours, guaranteed",
  },

  serviceForm: {
    heading: "Request a Proposal",
    sent: "Thank you. We will be in touch shortly.",
    name: "Name",
    email: "Email",
    company: "Company",
    phone: "Phone",
    message: "Tell us about your project",
    submit: "Send",
    submitting: "Sending...",
    error: "Something went wrong. Try again, or contact us directly.",
    privacy: "We protect your information and use it only to answer your request.",
  },

  projectGallery: {
    heading: "Project Gallery",
    summaryHeading: "Project Overview",
    zoomAria: "Enlarge image",
    ofLabel: "of",
    closeAria: "Close gallery",
    prevAria: "Previous image",
    nextAria: "Next image",
    goToAria: "Go to image",
    enlargedAria: "enlarged image",
    fallbackAlt: "Architectural project",
    viewLabel: "view",
    ofDesign: "of the architectural design",
  },
};

export const UI: Record<Locale, UIStrings> = { es, en };
