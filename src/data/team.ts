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
  en: TeamMemberEn;
}

export interface TeamMemberEn {
  role: string;
  bio: string;
  shortBio: string;
  specializations: string[];
  achievements: string[];
  education: EducationItem[];
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
    order: -3,
    en: {
      role: "Co-Founder & Principal Architect",
      shortBio:
        "Co-founder of Arte y Dimensiones, with more than 25 years leading architectural projects that have shaped Panama's commercial landscape.",
      bio: "Juan Manuel Rodríguez Gotti co-founded Arte y Dimensiones in 1999 and serves as Principal Architect. He graduated in Architecture from the Universidad de Panamá in 1998, with a focus on commercial architecture and project development. Over more than 25 years he has led the firm's commercial and corporate work, from initial strategic planning through delivery, and has directed teams across more than 150 completed projects in Panama. He remains the firm's primary point of contact for its principal clients.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "1998",
          details: "Focus on commercial architecture and project development"
        }
      ],
      specializations: [
        "Commercial and Corporate Architecture",
        "Large-Scale Project Development",
        "Strategic Architectural Planning",
        "Client Relationship Management",
        "Team Leadership and Direction",
        "Design Innovation"
      ],
      achievements: [
        "Co-founded Arte y Dimensiones in 1999",
        "More than 150 architectural projects completed",
        "Led landmark projects across Panama",
        "25+ years in commercial architecture",
        "Recognized as a leader in architectural innovation",
        "Built long-term relationships with the firm's principal clients"
      ]
    }
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
    order: -2,
    en: {
      role: "Co-Founder & Associate Architect",
      shortBio:
        "Co-founder of Arte y Dimensiones and Associate Architect, with more than 25 years of experience in architectural design and the management of complex projects.",
      bio: "Alejandra Arosemena de Rodríguez co-founded Arte y Dimensiones in 1999 and serves as Associate Architect. She graduated in Architecture from the Universidad de Panamá in 1998, specializing in architectural design and project management. She oversees design development and the technical and administrative coordination behind the firm's commercial, corporate and institutional work, and has managed more than 150 projects over 25+ years. She also leads the mentoring of the firm's younger architects.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "1998",
          details: "Specialization in architectural design and project management"
        }
      ],
      specializations: [
        "Commercial Architectural Design",
        "End-to-End Project Management",
        "Technical and Administrative Coordination",
        "Concept Development",
        "Corporate and Institutional Architecture",
        "Mentoring and Talent Development"
      ],
      achievements: [
        "Co-founded Arte y Dimensiones in 1999",
        "Managed more than 150 architectural projects",
        "Led coordination on highly complex projects",
        "25+ years in design and project management",
        "Recognized for innovation in commercial architecture",
        "Developed the firm's working methodologies"
      ]
    }
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
    order: -1,
    en: {
      role: "Finance Director",
      shortBio:
        "Finance Director with more than 25 years of experience in strategic financial management, responsible for the financial footing and sustained growth of Arte y Dimensiones.",
      bio: "José Antonio Rodríguez Gotti is the Finance Director of Arte y Dimensiones. He holds a bachelor's degree in Business Administration from the Universidad Latina de Panamá (1997) and a master's degree in Finance from the same university (2003), with an emphasis on corporate finance and investment analysis. He has led the firm's financial management for more than 25 years, covering project feasibility analysis, budgeting and cost control across more than 150 architectural projects, and the financial control systems the firm runs on today.",
      education: [
        {
          degree: "Bachelor's Degree in Business Administration",
          institution: "Universidad Latina de Panamá",
          year: "1997",
          details: "Emphasis on corporate finance and strategic management"
        },
        {
          degree: "Master's Degree in Finance",
          institution: "Universidad Latina de Panamá",
          year: "2003",
          details: "Specialization in corporate finance and investment analysis"
        }
      ],
      specializations: [
        "Corporate Financial Management",
        "Strategic Financial Planning",
        "Project Feasibility Analysis",
        "Budget and Cost Management",
        "Business Administration",
        "Financial Control and Treasury"
      ],
      achievements: [
        "25+ years leading financial management at Arte y Dimensiones",
        "Financial management of more than 150 architectural projects",
        "Implemented the firm's financial control systems",
        "Sustained growth and financial stability for the firm",
        "Resource optimization and margin management",
        "Leads strategic business planning"
      ]
    }
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
    order: 1,
    en: {
      role: "Administrative Assistant",
      shortBio:
        "Administrative professional responsible for day-to-day operations and executive support at Arte y Dimensiones.",
      bio: "Mitzenia Ortega handles the administrative operations of Arte y Dimensiones. She holds a bachelor's degree in Administration from the Universidad de Panamá (2015), with a concentration in business administrative management. She manages project documentation, internal processes and client-facing coordination, and is the first point of contact for clients reaching the office.",
      education: [
        {
          degree: "Bachelor's Degree in Administration",
          institution: "Universidad de Panamá",
          year: "2015",
          details: "Concentration in business administrative management"
        }
      ],
      specializations: [
        "Administrative Management",
        "Operational Coordination",
        "Client Service",
        "Document Control",
        "Executive Support"
      ],
      achievements: [
        "Streamlined internal administrative processes",
        "Implemented the firm's document organization systems",
        "Recognized for client service",
        "Key support in the firm's day-to-day operations"
      ]
    }
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
    order: 2,
    en: {
      role: "Project Coordinator",
      shortBio:
        "Architect and project coordinator focused on end-to-end project management across every phase of architectural development.",
      bio: "Roxana Castillo is an architect and Project Coordinator at Arte y Dimensiones. She graduated in Architecture from the Universidad de Panamá in 2023, specializing in project management and coordination. She coordinates multidisciplinary teams on the firm's commercial projects, running scheduling, quality control and progress tracking, and serves as a direct line of communication with clients through delivery.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "2023",
          details: "Specialization in project management and coordination"
        }
      ],
      specializations: [
        "Architectural Project Coordination",
        "Multidisciplinary Team Management",
        "Quality Control and Progress Tracking",
        "Client Communication",
        "Project Planning and Scheduling"
      ],
      achievements: [
        "Coordinated multiple commercial projects through delivery",
        "Implemented project tracking systems",
        "Recognized for project management",
        "Leads technical and administrative coordination"
      ]
    }
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
    order: 3,
    en: {
      role: "Senior Architect",
      shortBio:
        "Senior architect with more than 20 years of experience designing and delivering large-scale commercial and corporate projects.",
      bio: "David Frías is a Senior Architect at Arte y Dimensiones. He graduated in Architecture from the Universidad de Panamá in 2002, specializing in commercial and corporate architecture. With more than 20 years in the field, he leads the design and development of complex projects, handles advanced technical coordination, and mentors the firm's newer architects.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "2002",
          details: "Specialization in commercial and corporate architecture"
        }
      ],
      specializations: [
        "Commercial Architecture",
        "Corporate Design",
        "Complex Project Development",
        "Advanced Technical Coordination",
        "Mentoring and Team Leadership"
      ],
      achievements: [
        "More than 20 years of experience in commercial architecture",
        "Led landmark projects in Panama",
        "Recognized for architectural design",
        "Mentors the firm's next generation of architects"
      ]
    }
  },

  // 7) LUIS
  {
    id: "luis-morales",
    slug: "luis-morales",
    name: "Luis Morales",
    role: "LIDER DE PROYECTOS Y COORDINACIÓN TÉCNICA",
    photo: "/images/team/luisemilio.jpg",
    shortBio: "Profesional con 14+ años liderando coordinación técnica multidisciplinaria, especialista en BIM y planos ejecutivos, con enfoque riguroso en calidad y precisión.",
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
    order: 4,
    en: {
      role: "Project Lead & Technical Coordination",
      shortBio:
        "14+ years leading multidisciplinary technical coordination. Specialist in BIM and construction documentation, with a rigorous focus on quality and precision.",
      bio: "Luis Morales leads technical coordination at Arte y Dimensiones. He trained as a Technician in Architecture and Construction at the Universidad Tecnológica de Panamá (2012), specializing in digital design technologies. Over 14+ years he has specialized in BIM, construction documentation and digital clash detection, and has produced more than 80 architectural models. He coordinates the digital workflow across disciplines on the firm's complex projects.",
      education: [
        {
          degree: "Technician in Architecture and Construction",
          institution: "Universidad Tecnológica de Panamá",
          year: "2012",
          details: "Specialization in digital design technologies"
        }
      ],
      specializations: [
        "BIM Modeling (Building Information Modeling)",
        "Construction Documentation",
        "Digital Project Coordination",
        "Clash Detection",
        "3D Architectural Visualization"
      ],
      achievements: [
        "Rolled out BIM on complex projects",
        "Produced more than 80 architectural models",
        "Specialist in multidisciplinary digital coordination",
        "Streamlined the firm's technical documentation process"
      ]
    }
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
    order: 5,
    en: {
      role: "Drawing Production Lead & Coordinator",
      shortBio:
        "Specialist in the production and technical coordination of architectural drawings, responsible for accuracy and quality across project documentation.",
      bio: "César Rodríguez leads the drawing production team at Arte y Dimensiones. He trained as a Technician in Architectural Drafting at the Instituto Técnico Don Bosco (2010), specializing in CAD and technical documentation. He has coordinated documentation on more than 100 projects, established the team's BIM standards, and oversees quality control on the firm's most complex drawing sets.",
      education: [
        {
          degree: "Technician in Architectural Drafting",
          institution: "Instituto Técnico Don Bosco",
          year: "2010",
          details: "Specialization in CAD and technical documentation"
        }
      ],
      specializations: [
        "Architectural Drawing Production",
        "BIM Technical Coordination",
        "Construction Documentation",
        "Drawing Quality Control",
        "Multidisciplinary Coordination"
      ],
      achievements: [
        "Coordinated documentation on more than 100 projects",
        "Established BIM standards across the team",
        "Recognized for technical precision",
        "Leads production of highly complex drawing sets"
      ]
    }
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
    order: 6,
    en: {
      role: "Project Manager",
      shortBio:
        "Civil engineer and project manager with graduate training in senior management and finance, working across both the technical and administrative sides of delivery.",
      bio: "Sergio Cárdenas is a Project Manager at Arte y Dimensiones. He holds a degree in Civil Engineering from the Universidad Nacional de Colombia (2005), with a specialization in structures and construction, a postgraduate degree in Senior Management from the Universidad Latina de Panamá (2010), and an MBA from the same university (2014) with an emphasis on banking and finance. He manages complex infrastructure projects, combining structural and construction knowledge with budget and resource management on large-scale work.",
      education: [
        {
          degree: "Civil Engineering",
          institution: "Universidad Nacional de Colombia",
          year: "2005",
          details: "Specialization in structures and construction"
        },
        {
          degree: "Postgraduate Degree in Senior Management",
          institution: "Universidad Latina de Panamá",
          year: "2010",
          details: "Focus on strategic project management"
        },
        {
          degree: "MBA - Master of Business Administration",
          institution: "Universidad Latina de Panamá",
          year: "2014",
          details: "Emphasis on banking and finance"
        }
      ],
      specializations: [
        "Construction Project Management",
        "Civil and Structural Engineering",
        "Project Financial Management",
        "Strategic Planning",
        "Technical Team Leadership"
      ],
      achievements: [
        "Managed complex infrastructure projects through delivery",
        "Introduced new project management methodologies",
        "Leads technical and financial coordination",
        "Resource management on large-scale projects"
      ]
    }
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
    order: 7,
    en: {
      role: "Architect - Project Lead & Technical Coordination",
      shortBio:
        "Architect working across project leadership and technical coordination, with a focus on quality and attention to detail.",
      bio: "Marien Rojas is an architect at Arte y Dimensiones, leading projects and handling technical coordination. She graduated in Architecture from the Universidad de Panamá in 2025, specializing in project management and leadership. She runs design teams on the firm's commercial projects, applying quality control at each stage and working directly with clients.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "2025",
          details: "Specialization in project management and leadership"
        }
      ],
      specializations: [
        "Architectural Project Leadership",
        "Technical Coordination",
        "Design Team Management",
        "Quality Control",
        "Client Communication"
      ],
      achievements: [
        "Led commercial projects through delivery",
        "Implemented quality control systems",
        "Recognized for project coordination",
        "Contributed to major firm projects"
      ]
    }
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
    order: 8,
    en: {
      role: "Architect - Project Lead & Technical Coordination",
      shortBio:
        "Architect specializing in project leadership and technical coordination, with command of current digital design tools.",
      bio: "Arnel Pérez is an architect at Arte y Dimensiones, leading projects and handling technical coordination. He graduated in Architecture from the Universidad Católica Santa María La Antigua - Chiriquí in 2024, with a focus on contemporary architectural design. He works on the firm's large-scale commercial projects, coordinating technical teams and producing documentation with advanced BIM and CAD tools.",
      education: [
        {
          degree: "Architecture",
          institution:
            "Universidad Católica Santa María La Antigua - Chiriquí",
          year: "2024",
          details: "Focus on contemporary architectural design"
        }
      ],
      specializations: [
        "Technical Project Coordination",
        "Team Leadership",
        "Digital Design Technologies",
        "Commercial Project Development",
        "Technical Documentation"
      ],
      achievements: [
        "Integrated into large-scale project teams",
        "Leads technical coordination across teams",
        "Command of advanced BIM and CAD tools",
        "Contributed to major commercial projects"
      ]
    }
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
    order: 9,
    en: {
      role: "Architect - Project Design & Concept Development",
      shortBio:
        "Architect specializing in concept design and the development of architectural proposals.",
      bio: "María Somoza is an architect at Arte y Dimensiones, working on concept design and project development. She graduated in Architecture from the Universidad de Panamá in 2024, with an emphasis on conceptual design. She develops the concepts behind the firm's commercial projects and has contributed to winning architectural proposals, working through the earliest stage of each project.",
      education: [
        {
          degree: "Architecture",
          institution: "Universidad de Panamá",
          year: "2024",
          details: "Emphasis on conceptual design and architectural creativity"
        }
      ],
      specializations: [
        "Concept Design",
        "Project Conceptualization",
        "Architectural Proposal Development",
        "Creative Design",
        "Idea Visualization"
      ],
      achievements: [
        "Developed concepts for commercial projects",
        "Contributed to winning architectural proposals",
        "Recognized for design creativity",
        "Significant contribution at the concept stage of projects"
      ]
    }
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

export const teamMissionEn = {
  title: "Our Team",
  subtitle: "Leaders in Architectural Innovation",
  description:
    "Arte y Dimensiones was founded in 1999 by a team committed to advancing architectural practice and professional growth...",
  extendedDescription:
    "For more than 25 years, our leadership has guided the firm ..."
};

export const companyValuesEn = [
  {
    title: "Excellence",
    description:
      "A firm commitment to quality and innovation on every project we take on."
  },
  {
    title: "Transparency",
    description:
      "Open, honest communication at every stage of the process, which is how long-term client relationships get built."
  },
  {
    title: "Innovation",
    description:
      "A constant search for creative solutions that exceed expectations and set new standards."
  },
  {
    title: "Punctuality",
    description:
      "Respect for deadlines and commitments, so projects are delivered on time."
  },
  {
    title: "Collaboration",
    description:
      "Multidisciplinary teamwork that draws on individual strengths to produce exceptional results."
  },
  {
    title: "Sustainability",
    description:
      "Considered design that respects the environment and supports the well-being of the communities it serves."
  }
];
