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
  {
    id: "juan-manuel-rodriguez",
    slug: "juan-manuel-rodriguez",
    name: "Arq. Juan Manuel Rodríguez Gotti",
    role: "Co-fundador y Arquitecto Superior",
    photo: "/images/team/JuanRodriguez.png",
    shortBio: "Co-fundador de Arte y Dimensiones con más de 25 años liderando proyectos arquitectónicos innovadores que han transformado el paisaje comercial de Panamá.",
    bio: "Juan Manuel Rodríguez Gotti es co-fundador y Arquitecto Superior de Arte y Dimensiones, una firma que nació en 1999 como una iniciativa para potenciar las habilidades arquitectónicas y el crecimiento profesional. Con más de 25 años de trayectoria, Juan Manuel ha sido el visionario detrás de proyectos emblemáticos que han redefinido la arquitectura comercial en Panamá y la región. Su liderazgo se caracteriza por un compromiso inquebrantable con la innovación, la excelencia técnica y la búsqueda constante de soluciones que superen las expectativas de los clientes. Como Arquitecto Superior, supervisa personalmente los proyectos más complejos y estratégicos, asegurando que cada diseño refleje los valores fundamentales de la firma: puntualidad, comunicación abierta y transparencia. Su experiencia abarca desde grandes centros comerciales hasta proyectos corporativos de alta complejidad, siempre manteniendo un enfoque en la funcionalidad, la estética contemporánea y la viabilidad económica.",
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
      "Más de 200 proyectos arquitectónicos completados exitosamente",
      "Liderazgo en proyectos emblemáticos de Panamá",
      "25+ años de excelencia en arquitectura comercial",
      "Reconocimiento como líder en innovación arquitectónica",
      "Desarrollo de relaciones duraderas con clientes principales"
    ],
    order: -2
  },
  {
    id: "alejandra-arosemena",
    slug: "alejandra-arosemena",
    name: "Arq. Alejandra Arosemena de Rodríguez",
    role: "Co-fundadora y Arquitecta Asociada",
    photo: "/images/Team/Alejandra copy.png",
    shortBio: "Co-fundadora de Arte y Dimensiones, arquitecta asociada con más de 25 años de experiencia en diseño arquitectónico y gestión de proyectos complejos.",
    bio: "Alejandra Arosemena de Rodríguez es co-fundadora y Arquitecta Asociada de Arte y Dimensiones, desempeñando un papel fundamental en el crecimiento y éxito de la firma desde su fundación en 1999. Con más de 25 años de experiencia, Alejandra combina una visión creativa excepcional con una rigurosa atención al detalle técnico y la gestión eficiente de proyectos. Su enfoque holístico del diseño arquitectónico integra las necesidades funcionales del cliente con soluciones estéticas innovadoras y sostenibles. Como Arquitecta Asociada, Alejandra supervisa el desarrollo conceptual y técnico de proyectos clave, coordinando equipos multidisciplinarios y asegurando que cada entrega cumpla con los más altos estándares de calidad. Su experiencia abarca proyectos comerciales, corporativos e institucionales, donde su capacidad para entender profundamente las necesidades del cliente y traducirlas en espacios arquitectónicos excepcionales ha sido reconocida consistentemente. Alejandra es también mentora de las nuevas generaciones de arquitectos en la firma, transmitiendo los valores y la filosofía que han hecho de Arte y Dimensiones un referente en la arquitectura comercial.",
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
      "Gestión exitosa de más de 200 proyectos arquitectónicos",
      "Liderazgo en coordinación de proyectos de alta complejidad",
      "25+ años de excelencia en diseño y gestión",
      "Reconocimiento por innovación en arquitectura comercial",
      "Desarrollo de metodologías de trabajo eficientes"
    ],
    order: -1
  },
  {
    id: "jose-antonio-rodriguez",
    slug: "jose-antonio-rodriguez",
    name: "Lic. José Antonio Rodríguez Gotti",
    role: "Gerente Financiero",
    photo: "/images/Team/JoseRodriguez.png",
    shortBio: "Gerente Financiero con más de 25 años de experiencia en gestión financiera estratégica, asegurando la solidez económica y el crecimiento sostenible de Arte y Dimensiones.",
    bio: "José Antonio Rodríguez Gotti es el Gerente Financiero de Arte y Dimensiones, un rol que ha desempeñado con excelencia desde la fundación de la firma en 1999. Con más de 25 años de experiencia en gestión financiera y administración de negocios, José Antonio ha sido el pilar económico que ha permitido el crecimiento sostenible y la estabilidad financiera de la empresa. Su expertise en finanzas corporativas, análisis de viabilidad de proyectos, gestión de presupuestos y planificación estratégica ha sido fundamental para el éxito de la firma. José Antonio trabaja en estrecha colaboración con el equipo de arquitectos para asegurar que cada proyecto sea no solo arquitectónicamente excepcional, sino también financieramente viable y rentable. Su visión estratégica ha permitido a Arte y Dimensiones expandir sus operaciones, invertir en tecnología de punta y mantener una posición sólida en el mercado. Como Gerente Financiero, supervisa todas las operaciones financieras, desde la gestión de flujo de caja hasta la planificación a largo plazo, asegurando que la firma mantenga su compromiso con la transparencia y la excelencia operativa que caracteriza cada aspecto de su trabajo.",
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
      "Gestión exitosa de más de 200 proyectos arquitectónicos",
      "Implementación de sistemas de control financiero eficientes",
      "Crecimiento sostenible y estabilidad financiera de la firma",
      "Optimización de recursos y maximización de rentabilidad",
      "Liderazgo en planificación estratégica empresarial"
    ],
    order: 0
  },
  {
    id: "roxana-castillo",
    slug: "roxana-castillo",
    name: "Arq. Roxana Castillo",
    role: "Coordinadora de Proyectos",
    photo: "/images/Team/roxana-castillo.jpg",
    shortBio: "Arquitecta coordinadora especializada en gestión integral de proyectos, garantizando la excelencia en cada fase del desarrollo arquitectónico.",
    bio: "Roxana Castillo es una arquitecta comprometida con la excelencia en la coordinación de proyectos arquitectónicos. Su formación en la Universidad de Panamá le ha proporcionado las herramientas necesarias para liderar equipos multidisciplinarios y asegurar que cada proyecto se desarrolle con los más altos estándares de calidad. Con una visión integral del proceso arquitectónico, Roxana coordina eficientemente todas las fases del proyecto, desde la conceptualización hasta la entrega final, manteniendo una comunicación constante con clientes y equipos técnicos para garantizar resultados excepcionales.",
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
    order: 1
  },
  {
    id: "mitzenia-ortega",
    slug: "mitzenia-ortega",
    name: "Lic. Mitzenia Ortega",
    role: "Asistente Administrativa",
    photo: "/images/Team/mitzenia-ortega.jpg",
    shortBio: "Profesional administrativa encargada de la gestión operativa y soporte estratégico en Arte y Dimensiones.",
    bio: "Mitzenia Ortega es el pilar administrativo que mantiene la operación diaria de Arte y Dimensiones funcionando con eficiencia y profesionalismo. Su capacidad organizativa y atención al detalle son fundamentales para el éxito de la firma. Mitzenia coordina las actividades administrativas, gestiona la comunicación interna y externa, y proporciona soporte estratégico a todos los departamentos. Su dedicación y profesionalismo aseguran que los equipos técnicos puedan concentrarse en la excelencia del diseño mientras ella mantiene la estructura organizacional funcionando sin contratiempos.",
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
    order: 2
  },
  {
    id: "sergio-cardenas",
    slug: "sergio-cardenas",
    name: "Ing. Sergio Cárdenas",
    role: "Gerente de Proyectos",
    photo: "/images/Team/sergio-cardenas.jpg",
    shortBio: "Ingeniero civil y gerente de proyectos con amplia formación en alta gerencia y finanzas, especializado en liderazgo técnico y administrativo.",
    bio: "Sergio Cárdenas combina una sólida formación en ingeniería civil con expertise en gerencia de proyectos y administración de negocios. Graduado de la Universidad Nacional de Colombia como Ingeniero Civil, complementó su formación con un posgrado en Alta Gerencia y un MBA con énfasis en banca y finanzas en la Universidad Latina de Panamá. Esta combinación única de conocimientos técnicos y gerenciales le permite liderar proyectos complejos con una visión integral que abarca desde los aspectos estructurales hasta la viabilidad financiera y administrativa. Su liderazgo estratégico ha sido fundamental en la entrega exitosa de proyectos de gran envergadura.",
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
    order: 3
  },
  {
    id: "cesar-rodriguez",
    slug: "cesar-rodriguez",
    name: "César Rodríguez",
    role: "Desarrollador de Planos - Coordinador",
    photo: "/images/Team/cesar-rodriguez.jpg",
    shortBio: "Especialista en desarrollo y coordinación técnica de planos arquitectónicos, garantizando precisión y calidad en la documentación de proyectos.",
    bio: "César Rodríguez lidera el equipo de desarrollo de planos en Arte y Dimensiones, asegurando que cada documento técnico cumpla con los más altos estándares de precisión y claridad. Su expertise en sistemas CAD y BIM, combinado con su profundo conocimiento de normas y códigos de construcción, lo convierten en un coordinador técnico excepcional. César supervisa la producción de planos arquitectónicos, coordina con las diferentes disciplinas de ingeniería, y garantiza que toda la documentación técnica esté perfectamente sincronizada y lista para la construcción. Su atención meticulosa al detalle previene errores y asegura la constructibilidad de cada proyecto.",
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
    order: 4
  },
  {
    id: "luis-morales",
    slug: "luis-morales",
    name: "Luis Morales",
    role: "Modelador BIM y Desarrollador de Planos",
    photo: "/images/Team/luis-morales.jpg",
    shortBio: "Experto en modelado BIM y desarrollo de planos técnicos, especializado en la implementación de tecnologías de vanguardia en proyectos arquitectónicos.",
    bio: "Luis Morales es un especialista en tecnologías BIM (Building Information Modeling) que ha transformado la forma en que Arte y Dimensiones desarrolla y documenta sus proyectos. Su dominio de herramientas de modelado tridimensional y su capacidad para generar documentación técnica precisa a partir de modelos digitales han elevado significativamente la eficiencia y calidad de los proyectos. Luis trabaja en estrecha colaboración con arquitectos e ingenieros para crear modelos BIM completos que facilitan la coordinación, detectan conflictos antes de la construcción, y generan planos técnicos de alta precisión que sirven como base para una ejecución impecable.",
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
    order: 5
  },
  {
    id: "david-frias",
    slug: "david-frias",
    name: "Arq. David Frías",
    role: "Arquitecto Senior",
    photo: "/images/Team/david-frias.jpg",
    shortBio: "Arquitecto senior con más de 20 años de experiencia en diseño y desarrollo de proyectos comerciales y corporativos de gran escala.",
    bio: "David Frías es un arquitecto experimentado cuya carrera de más de dos décadas en Arte y Dimensiones ha sido fundamental para el desarrollo de proyectos emblemáticos. Graduado de la Universidad de Panamá en 2002, David ha perfeccionado su expertise en arquitectura comercial y corporativa, liderando el diseño de espacios que combinan funcionalidad excepcional con estética contemporánea. Su profundo conocimiento técnico, combinado con su sensibilidad para las necesidades del cliente, lo han convertido en un referente dentro del equipo. David mentoriza a arquitectos junior, aporta soluciones creativas a desafíos complejos, y asegura que cada proyecto refleje los más altos estándares de excelencia arquitectónica.",
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
    order: 6
  },
  {
    id: "arnel-perez",
    slug: "arnel-perez",
    name: "Arq. Arnel Pérez",
    role: "Arquitecto Junior - Líder de Proyectos y Coordinación Técnica",
    photo: "/images/Team/arnel-perez.jpg",
    shortBio: "Arquitecto junior especializado en liderazgo de proyectos y coordinación técnica, aportando visión fresca y dominio de tecnologías contemporáneas.",
    bio: "Arnel Pérez representa la nueva generación de arquitectos en Arte y Dimensiones, combinando formación académica reciente con pasión por la excelencia en diseño y coordinación. Graduado de la Universidad Católica Santa María La Antigua en Chiriquí en 2024, Arnel ha demostrado rápidamente su capacidad para liderar proyectos y coordinar aspectos técnicos complejos. Su dominio de herramientas digitales contemporáneas, su enfoque metodológico, y su habilidad para trabajar en equipo lo han posicionado como un líder emergente dentro del equipo. Arnel contribuye con ideas innovadoras mientras asegura que cada detalle técnico sea ejecutado con precisión.",
    linkedin: "",
    education: [
      {
        degree: "Arquitectura",
        institution: "Universidad Católica Santa María La Antigua - Chiriquí",
        year: "2024",
        details: "Enfoque en diseño arquitectónico contemporáneo"
      }
    ],
    specializations: [
      "Coordinación Técnica de Proyectos",
      "Liderazgo de Equipos Junior",
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
    order: 7
  },
  {
    id: "marien-rojas",
    slug: "marien-rojas",
    name: "Arq. Marien Rojas",
    role: "Arquitecta Junior - Líder de Proyectos y Coordinación Técnica",
    photo: "/images/Team/marien-rojas.jpg",
    shortBio: "Arquitecta junior con talento en liderazgo de proyectos y coordinación técnica, destacando por su compromiso con la calidad y atención al detalle.",
    bio: "Marien Rojas es una arquitecta talentosa que se ha integrado rápidamente al equipo de Arte y Dimensiones, demostrando capacidad excepcional para liderar proyectos y coordinar aspectos técnicos. Graduada de la Universidad de Panamá en 2025, Marien aporta una perspectiva fresca y contemporánea al desarrollo de proyectos arquitectónicos. Su capacidad organizativa, su atención meticulosa al detalle, y su habilidad para comunicarse efectivamente con clientes y equipos técnicos la han convertido en una líder de proyectos prometedora. Marien trabaja incansablemente para asegurar que cada proyecto avance según lo planificado, manteniendo los más altos estándares de calidad en cada fase del desarrollo.",
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
    order: 8
  },
  {
    id: "maria-somoza",
    slug: "maria-somoza",
    name: "Arq. María Somoza",
    role: "Arquitecta Junior - Diseño y Conceptualización de Proyectos",
    photo: "/images/Team/maria-somoza.jpg",
    shortBio: "Arquitecta junior creativa especializada en diseño conceptual y desarrollo de propuestas arquitectónicas innovadoras y funcionales.",
    bio: "María Somoza es una arquitecta creativa cuyo talento para el diseño y la conceptualización ha enriquecido significativamente el portafolio de Arte y Dimensiones. Graduada de la Universidad de Panamá en 2024, María se destaca por su capacidad para transformar ideas abstractas en propuestas arquitectónicas concretas y viables. Su sensibilidad estética, combinada con su comprensión de los principios funcionales del diseño, le permite crear conceptos innovadores que responden efectivamente a las necesidades del cliente. María participa activamente en las fases iniciales de los proyectos, donde su creatividad y visión fresca son fundamentales para establecer la dirección conceptual que guiará el desarrollo completo del proyecto.",
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
  description: "Arte y Dimensiones fue fundada en 1999 por un equipo visionario comprometido con potenciar las habilidades arquitectónicas y el crecimiento profesional. Este impulso constante por evolucionar y asumir nuevos desafíos nos ha llevado a desarrollar proyectos innovadores que nos diferencian en el campo de la arquitectura comercial.",
  extendedDescription: "Durante más de 25 años, nuestra directiva ha guiado a la firma a través de obras, diseños, reuniones, seguimientos, visitas en campo, entrevistas y más; manteniendo como pilares de trabajo: la puntualidad, la comunicación abierta y constante con el equipo y los clientes, y la transparencia en cada etapa del diseño y desarrollo. Junto a nuestro equipo de profesionales expertos, hemos construido relaciones duraderas y entregado más de 200 proyectos exitosos."
};

export const companyValues = [
  {
    title: "Excelencia",
    description: "Compromiso inquebrantable con la calidad y la innovación en cada proyecto que desarrollamos."
  },
  {
    title: "Transparencia",
    description: "Comunicación abierta y honesta en cada etapa del proceso, construyendo relaciones de confianza duraderas."
  },
  {
    title: "Innovación",
    description: "Búsqueda constante de soluciones creativas que superen las expectativas y establezcan nuevos estándares."
  },
  {
    title: "Puntualidad",
    description: "Respeto por los plazos y compromisos adquiridos, garantizando entregas exitosas y oportunas."
  },
  {
    title: "Colaboración",
    description: "Trabajo en equipo multidisciplinario que potencia las fortalezas individuales para lograr resultados excepcionales."
  },
  {
    title: "Sostenibilidad",
    description: "Diseño consciente que respeta el medio ambiente y promueve el bienestar de las comunidades."
  }
];
