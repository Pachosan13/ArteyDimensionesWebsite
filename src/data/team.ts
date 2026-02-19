export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  shortBio: string;
  linkedin?: string;
  education: EducationItem[];
  specializations: string[];
  achievements: string[];
  order: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export const teamMembers: TeamMember[] = [
  // 1) JUAN MANUEL
  {
    id: "juan-manuel-rodriguez",
    slug: "juan-manuel-rodriguez",
    name: "Arq. Juan Manuel Rodríguez Gotti",
    role: "Co-fundador y Arquitecto Superior",
    photo: "/images/team/juanrodriguez.jpg",
    shortBio:
      "Co-fundador de Arte y Dimensiones con más de 25 años liderando proyectos arquitectónicos innovadores que han transformado el paisaje comercial de Panamá.",
    bio: "Juan Manuel Rodríguez Gotti es co-fundador y Arquitecto Superior ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "1998",
        details: "Especialización en arquitectura comercial y desarrollo de proyectos"
      }
    ],
    specializations: [
      "Arquitectura Comercial y Corporativa",
      "Desarrollo de Proyectos de Gran Escala",
      "Planificación Estratégica Arquitectónica",
      "Gestión de Relaciones con Clientes",
      "Liderazgo y Dirección de Equipos",
      "Innovación en Diseño Arquitectónico"
    ],
    achievements: [
      "Co-fundador de Arte y Dimensiones en 1999",
      "Más de 150 proyectos arquitectónicos completados exitosamente",
      "Liderazgo en proyectos emblemáticos de Panamá",
      "25+ años de excelencia en arquitectura comercial",
      "Reconocimiento como líder en innovación arquitectónica",
      "Desarrollo de relaciones duraderas con clientes principales"
    ],
    order: -3
  },

  // 2) ALEJANDRA
  {
    id: "alejandra-arosemena",
    slug: "alejandra-arosemena",
    name: "Arq. Alejandra Arosemena de Rodríguez",
    role: "Co-fundadora y Arquitecta Asociada",
    photo: "/images/team/Alejandra.png",
    shortBio:
      "Co-fundadora de Arte y Dimensiones, arquitecta asociada con más de 25 años de experiencia en diseño arquitectónico y gestión de proyectos complejos.",
    bio: "Alejandra Arosemena de Rodríguez es co-fundadora ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "1998",
        details: "Especialización en diseño arquitectónico y gestión de proyectos"
      }
    ],
    specializations: [
      "Diseño Arquitectónico Comercial",
      "Gestión Integral de Proyectos",
      "Coordinación Técnica y Administrativa",
      "Desarrollo Conceptual",
      "Arquitectura Corporativa e Institucional",
      "Mentoría y Desarrollo de Talento"
    ],
    achievements: [
      "Co-fundadora de Arte y Dimensiones en 1999",
      "Gestión exitosa de más de 150 proyectos arquitectónicos",
      "Liderazgo en coordinación de proyectos de alta complejidad",
      "25+ años de excelencia en diseño y gestión",
      "Reconocimiento por innovación en arquitectura comercial",
      "Desarrollo de metodologías de trabajo eficientes"
    ],
    order: -2
  },

  // 3) JOSE ANTONIO
  {
    id: "jose-antonio-rodriguez",
    slug: "jose-antonio-rodriguez",
    name: "Lic. José Antonio Rodríguez Gotti",
    role: "Gerente Financiero",
    photo: "/images/team/Jose.png",
    shortBio:
      "Gerente Financiero con más de 25 años de experiencia en gestión financiera estratégica, asegurando la solidez económica y el crecimiento sostenible de Arte y Dimensiones.",
    bio: "José Antonio Rodríguez Gotti es el Gerente Financiero ...",
    linkedin: "",
    education: [
      {
        degree: "Licenciatura en Administración de Empresas",
        institution: "Universidad Latina de Panamá",
        year: "1997",
        details: "Énfasis en finanzas corporativas y gestión estratégica"
      },
      {
        degree: "Maestría en Finanzas",
        institution: "Universidad Latina de Panamá",
        year: "2003",
        details: "Especialización en finanzas corporativas y análisis de inversiones"
      }
    ],
    specializations: [
      "Gestión Financiera Corporativa",
      "Planificación Estratégica Financiera",
      "Análisis de Viabilidad de Proyectos",
      "Gestión de Presupuestos y Costos",
      "Administración de Negocios",
      "Control Financiero y Tesorería"
    ],
    achievements: [
      "25+ años liderando la gestión financiera de Arte y Dimensiones",
      "Gestión exitosa de más de 150 proyectos arquitectónicos",
      "Implementación de sistemas de control financiero eficientes",
      "Crecimiento sostenible y estabilidad financiera de la firma",
      "Optimización de recursos y maximización de rentabilidad",
      "Liderazgo en planificación estratégica empresarial"
    ],
    order: -1
  },

  // 4) MITZENIA
  {
    id: "mitzenia-ortega",
    slug: "mitzenia-ortega",
    name: "Lic. Mitzenia Ortega",
    role: "Asistente Administrativa",
    photo: "/images/team/mitzeniaortega.jpg",
    shortBio:
      "Profesional administrativa encargada de la gestión operativa y soporte estratégico en Arte y Dimensiones.",
    bio: "Mitzenia Ortega es el pilar administrativo ...",
    linkedin: "",
    education: [
      {
        degree: "Licenciatura en Administración",
        institution: "Universidad de Panamá",
        year: "2015",
        details: "Concentración en gestión administrativa empresarial"
      }
    ],
    specializations: [
      "Gestión Administrativa",
      "Coordinación Operativa",
      "Atención al Cliente",
      "Organización de Documentación",
      "Soporte Ejecutivo"
    ],
    achievements: [
      "Optimización de procesos administrativos internos",
      "Implementación de sistemas de organización eficientes",
      "Reconocimiento por excelencia en servicio al cliente",
      "Soporte clave en la gestión operativa de la firma"
    ],
    order: 1
  },

  // 5) ROXANA
  {
    id: "roxana-castillo",
    slug: "roxana-castillo",
    name: "Arq. Roxana Castillo",
    role: "Coordinadora de Proyectos",
    photo: "/images/team/roxanacastillo.jpg",
    shortBio:
      "Arquitecta coordinadora especializada en gestión integral de proyectos, garantizando la excelencia en cada fase del desarrollo arquitectónico.",
    bio: "Roxana Castillo es una arquitecta comprometida ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "2023",
        details: "Especialización en gestión y coordinación de proyectos"
      }
    ],
    specializations: [
      "Coordinación de Proyectos Arquitectónicos",
      "Gestión de Equipos Multidisciplinarios",
      "Control de Calidad y Seguimiento",
      "Comunicación con Clientes",
      "Planificación y Programación de Proyectos"
    ],
    achievements: [
      "Coordinación exitosa de múltiples proyectos comerciales",
      "Implementación de sistemas de seguimiento eficientes",
      "Reconocimiento por excelencia en gestión de proyectos",
      "Liderazgo en coordinación técnica y administrativa"
    ],
    order: 2
  },

  // 6) DAVID
  {
    id: "david-frias",
    slug: "david-frias",
    name: "Arq. David Frías",
    role: "Arquitecto Senior",
    photo: "/images/team/davidfrias.jpg",
    shortBio:
      "Arquitecto senior con más de 20 años de experiencia en diseño y desarrollo de proyectos comerciales y corporativos de gran escala.",
    bio: "David Frías es un arquitecto experimentado ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "2002",
        details: "Especialización en arquitectura comercial y corporativa"
      }
    ],
    specializations: [
      "Arquitectura Comercial",
      "Diseño Corporativo",
      "Desarrollo de Proyectos Complejos",
      "Coordinación Técnica Avanzada",
      "Mentoría y Liderazgo de Equipos"
    ],
    achievements: [
      "Más de 20 años de experiencia en arquitectura comercial",
      "Liderazgo en proyectos icónicos en Panamá",
      "Reconocimiento por excelencia en diseño arquitectónico",
      "Mentoría de nueva generación de arquitectos"
    ],
    order: 3
  },

  // 7) LUIS
  {
    id: "luis-morales",
    slug: "luis-morales",
    name: "Luis Morales",
    role: "LIDER DE PROYECTOS Y COORDINACIÓN TÉCNICA",
    photo: "/images/team/luisemilio.jpg",
    shortBio: "Profesional con más de 14 años de experiencia en la coordinación integral de proyectos desde arquitectura, estructura y sistemas. Especialista en modelado BIM y planos técnicos, destacado por su compromiso con la calidad, precisión técnica y atención al detalle."
    bio: "Luis Morales es un especialista en tecnologías BIM ...",
    linkedin: "",
    education: [
      {
        degree: "Técnico en Arquitectura y Construcción",
        institution: "Universidad Tecnológica de Panamá",
        year: "2012",
        details: "Especialización en tecnologías digitales de diseño"
      }
    ],
    specializations: [
      "Modelado BIM (Building Information Modeling)",
      "Desarrollo de Planos Técnicos",
      "Coordinación Digital de Proyectos",
      "Detección de Conflictos",
      "Visualización Arquitectónica 3D"
    ],
    achievements: [
      "Implementación exitosa de BIM en proyectos complejos",
      "Desarrollo de más de 80 modelos arquitectónicos",
      "Especialista en coordinación digital multidisciplinaria",
      "Optimización de procesos de documentación técnica"
    ],
    order: 4
  },

  // 8) CESAR
  {
    id: "cesar-rodriguez",
    slug: "cesar-rodriguez",
    name: "César Rodríguez",
    role: "Desarrollador de Planos - Coordinador",
    photo: "/images/team/cesarrodriguez.jpg",
    shortBio:
      "Especialista en desarrollo y coordinación técnica de planos arquitectónicos, garantizando precisión y calidad en la documentación de proyectos.",
    bio: "César Rodríguez lidera el equipo de desarrollo de planos ...",
    linkedin: "",
    education: [
      {
        degree: "Técnico en Dibujo Arquitectónico",
        institution: "Instituto Técnico Don Bosco",
        year: "2010",
        details: "Especialización en CAD y documentación técnica"
      }
    ],
    specializations: [
      "Desarrollo de Planos Arquitectónicos",
      "Coordinación Técnica BIM",
      "Documentación de Construcción",
      "Control de Calidad de Planos",
      "Coordinación Multidisciplinaria"
    ],
    achievements: [
      "Coordinación de documentación en más de 100 proyectos",
      "Implementación de estándares BIM en el equipo",
      "Reconocimiento por precisión técnica",
      "Liderazgo en producción de planos de alta complejidad"
    ],
    order: 5
  },

  // 9) SERGIO
  {
    id: "sergio-cardenas",
    slug: "sergio-cardenas",
    name: "Ing. Sergio Cárdenas",
    role: "Gerente de Proyectos",
    photo: "/images/team/sergiocardenas.jpg",
    shortBio:
      "Ingeniero civil y gerente de proyectos con amplia formación en alta gerencia y finanzas, especializado en liderazgo técnico y administrativo.",
    bio: "Sergio Cárdenas combina una sólida formación ...",
    linkedin: "",
    education: [
      {
        degree: "Ingeniería Civil",
        institution: "Universidad Nacional de Colombia",
        year: "2005",
        details: "Especialización en estructuras y construcción"
      },
      {
        degree: "Posgrado en Alta Gerencia",
        institution: "Universidad Latina de Panamá",
        year: "2010",
        details: "Enfoque en gestión estratégica de proyectos"
      },
      {
        degree: "MBA - Maestría en Administración de Negocios",
        institution: "Universidad Latina de Panamá",
        year: "2014",
        details: "Énfasis en banca y finanzas"
      }
    ],
    specializations: [
      "Gerencia de Proyectos de Construcción",
      "Ingeniería Civil y Estructural",
      "Gestión Financiera de Proyectos",
      "Planificación Estratégica",
      "Liderazgo de Equipos Técnicos"
    ],
    achievements: [
      "Gerencia exitosa de proyectos de infraestructura compleja",
      "Implementación de metodologías de gestión innovadoras",
      "Liderazgo en coordinación técnica y financiera",
      "Optimización de recursos en proyectos de gran escala"
    ],
    order: 6
  },

  // 10) MARIEN
  {
    id: "marien-rojas",
    slug: "marien-rojas",
    name: "Arq. Marien Rojas",
    role: "Arquitecta - Líder de Proyectos y Coordinación Técnica",
    photo: "/images/team/marienrojas.jpg",
    shortBio:
      "Arquitecta con talento en liderazgo de proyectos y coordinación técnica, destacando por su compromiso con la calidad y atención al detalle.",
    bio: "Marien Rojas es una arquitecta talentosa ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "2025",
        details: "Especialización en gestión y liderazgo de proyectos"
      }
    ],
    specializations: [
      "Liderazgo de Proyectos Arquitectónicos",
      "Coordinación Técnica",
      "Gestión de Equipos de Diseño",
      "Control de Calidad",
      "Comunicación con Clientes"
    ],
    achievements: [
      "Liderazgo efectivo en proyectos comerciales",
      "Implementación de sistemas de control de calidad",
      "Reconocimiento por excelencia en coordinación",
      "Contribución significativa en proyectos importantes"
    ],
    order: 7
  },

  // 11) ARNEL
  {
    id: "arnel-perez",
    slug: "arnel-perez",
    name: "Arq. Arnel Pérez",
    role: "Arquitecto - Líder de Proyectos y Coordinación Técnica",
    photo: "/images/team/arnelperez.jpg",
    shortBio:
      "Arquitecto especializado en liderazgo de proyectos y coordinación técnica, aportando visión fresca y dominio de tecnologías contemporáneas.",
    bio: "Arnel Pérez representa la nueva generación ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution:
          "Universidad Católica Santa María La Antigua - Chiriquí",
        year: "2024",
        details: "Enfoque en diseño arquitectónico contemporáneo"
      }
    ],
    specializations: [
      "Coordinación Técnica de Proyectos",
      "Liderazgo de Equipos",
      "Tecnologías Digitales de Diseño",
      "Desarrollo de Proyectos Comerciales",
      "Documentación Técnica"
    ],
    achievements: [
      "Incorporación exitosa a proyectos de gran escala",
      "Liderazgo en coordinación técnica de equipos",
      "Dominio de herramientas BIM y CAD avanzadas",
      "Contribución a proyectos comerciales importantes"
    ],
    order: 8
  },

  // 12) MARÍA SOMOZA
  {
    id: "maria-somoza",
    slug: "maria-somoza",
    name: "Arq. María Somoza",
    role: "Arquitecta - Diseño y Conceptualización de Proyectos",
    photo: "/images/team/mariasomoza.jpg",
    shortBio:
      "Arquitecta creativa especializada en diseño conceptual y desarrollo de propuestas arquitectónicas innovadoras y funcionales.",
    bio: "María Somoza es una arquitecta creativa ...",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad de Panamá",
        year: "2024",
        details: "Énfasis en diseño conceptual y creatividad arquitectónica"
      }
    ],
    specializations: [
      "Diseño Conceptual",
      "Conceptualización de Proyectos",
      "Desarrollo de Propuestas Arquitectónicas",
      "Diseño Creativo",
      "Visualización de Ideas"
    ],
    achievements: [
      "Desarrollo de conceptos innovadores para proyectos comerciales",
      "Participación en propuestas arquitectónicas ganadoras",
      "Reconocimiento por creatividad en diseño",
      "Contribución significativa en fase conceptual de proyectos"
    ],
    order: 9
  }
];

export const teamMission = {
  title: "Nuestro Equipo",
  subtitle: "Líderes en Innovación Arquitectónica",
  description:
    "Arte y Dimensiones fue fundada en 1999 por un equipo visionario comprometido con potenciar las habilidades arquitectónicas y el crecimiento profesional...",
  extendedDescription:
    "Durante más de 25 años, nuestra directiva ha guiado a la firma ..."
};

export const companyValues = [
  {
    title: "Excelencia",
    description:
      "Compromiso inquebrantable con la calidad y la innovación en cada proyecto que desarrollamos."
  },
  {
    title: "Transparencia",
    description:
      "Comunicación abierta y honesta en cada etapa del proceso, construyendo relaciones de confianza duraderas."
  },
  {
    title: "Innovación",
    description:
      "Búsqueda constante de soluciones creativas que superen las expectativas y establezcan nuevos estándares."
  },
  {
    title: "Puntualidad",
    description:
      "Respeto por los plazos y compromisos adquiridos, garantizando entregas exitosas y oportunas."
  },
  {
    title: "Colaboración",
    description:
      "Trabajo en equipo multidisciplinario que potencia las fortalezas individuales para lograr resultados excepcionales."
  },
  {
    title: "Sostenibilidad",
    description:
      "Diseño consciente que respeta el medio ambiente y promueve el bienestar de las comunidades."
  }
];
