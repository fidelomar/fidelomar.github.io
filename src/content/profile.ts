export interface Profile {
  name: string;
  tagline: string;
  title: string;
  summary: string;
  availability: string;
  location: string;
  experienceSummary: string;
  specialties: string[];
  paragraphs: string[];
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface AiWorkflowStep {
  title: string;
  description: string;
}

export interface AiAssistedMethodology {
  title: string;
  lead: string;
  tools: string[];
  humanSupervisionNote: string;
  steps: AiWorkflowStep[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization?: string;
  period: string;
  modality?: string;
  description: string;
  responsibilities: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  challenge: string;
  responsibility: string;
  technologies: string[];
  result: string;
  badge?: string;
}

export interface ProfessionalLink {
  label: string;
  url: string;
  description: string;
}

export interface ContentData {
  profile: Profile;
  capabilities: Capability[];
  aiWorkflow: AiAssistedMethodology;
  experience: ExperienceEntry[];
  caseStudies: CaseStudy[];
  professionalLinks: ProfessionalLink[];
}

export const contentData: ContentData = {
  profile: {
    name: "Fidel Omar García",
    tagline: "Ingeniería de software empresarial",
    title: "Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
    summary: "Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.",
    availability: "Disponible para trabajo remoto desde México.",
    location: "Tampico, Tamaulipas, México.",
    experienceSummary: "Más de 15 años desarrollando, manteniendo y modernizando aplicaciones empresariales.",
    specialties: [
      "C# / .NET",
      "SQL Server",
      "APIs REST",
      "Integraciones empresariales",
      "Desarrollo asistido por IA",
    ],
    paragraphs: [
      "Ingeniero de software con más de 15 años de experiencia desarrollando, manteniendo y modernizando aplicaciones empresariales. Especializado principalmente en el ecosistema C#/.NET, bases de datos SQL Server y diseño de APIs REST, con enfoque constante en la estabilidad de sistemas en producción y la resolución rigurosa de incidencias.",
      "Comprendo la operación del negocio para traducir requerimientos funcionales en arquitecturas estables. Trabajo de forma autónoma o en equipos remotos bajo Scrum, integrando agentes de IA para acelerar el ciclo de desarrollo siempre bajo un estricto principio de supervisión, auditoría y validación humana propia antes de integrar cualquier cambio.",
    ],
  },
  capabilities: [
    {
      id: "backend",
      number: "01",
      title: "Desarrollo backend",
      description:
        "C#, .NET Framework, .NET Core, ASP.NET MVC, ASP.NET Core, Web Forms, Entity Framework y LINQ.",
    },
    {
      id: "databases",
      number: "02",
      title: "Bases de datos",
      description:
        "SQL Server, procedimientos almacenados y optimización de consultas en esquemas transaccionales de alta exigencia.",
    },
    {
      id: "apis",
      number: "03",
      title: "APIs e integraciones",
      description:
        "Diseño y mantenimiento de APIs REST e integración de sistemas empresariales, plataformas de pago y servicios externos.",
    },
    {
      id: "modernization",
      number: "04",
      title: "Modernización y mantenimiento",
      description:
        "Mantenimiento de aplicaciones heredadas en .NET y VB.NET, estabilización de sistemas en producción y migración hacia .NET MAUI.",
    },
    {
      id: "ai-assisted",
      number: "05",
      title: "Desarrollo asistido por IA",
      description:
        "Adopción de agentes de IA para comprensión de código legado, generación de pruebas y refactorización, con revisión humana en cada etapa.",
    },
  ],
  aiWorkflow: {
    title: "Desarrollo asistido por IA bajo supervisión humana",
    lead: "Integro agentes de IA de última generación como multiplicadores de productividad, manteniendo el control arquitectónico, la verificación de seguridad y la responsabilidad técnica en manos humanas.",
    tools: ["Claude", "Codex", "GitHub Copilot", "OG Engine"],
    humanSupervisionNote: "Principio no negociable: la IA propone y acelera; el criterio de ingeniería humano analiza el contexto de negocio, audita cada línea, previene regresiones y valida la solución en producción.",
    steps: [
      {
        title: "Análisis de código heredado",
        description:
          "Exploración asistida de sistemas complejos sin documentación para mapear reglas de negocio, dependencias ocultas y flujos de datos antes de intervenir.",
      },
      {
        title: "Especificación e implementación",
        description:
          "Estructuración de requerimientos en especificaciones atómicas que guían a los modelos de código, reduciendo alucinaciones y acelerando la implementación.",
      },
      {
        title: "Documentación y casos de prueba",
        description:
          "Generación sistemática de cobertura de pruebas unitarias, documentación técnica de arquitectura y contratos de APIs para robustecer el mantenimiento.",
      },
      {
        title: "Auditoría y validación humana",
        description:
          "Revisión minuciosa de cada cambio: seguridad, estilo, rendimiento en base de datos y apego a las políticas operativas del negocio antes del commit.",
      },
    ],
  },
  experience: [
    {
      id: "consultor-independiente",
      role: "Consultor de TI y desarrollador independiente",
      period: "Agosto de 2025 – actualidad",
      description:
        "Mantenimiento y evolución de sistemas empresariales para sectores como transporte, seguros, comercio electrónico, distribución y servicios.",
      responsibilities: [
        "Mantenimiento de sistemas en VB.NET, ASP.NET Web Forms, PHP/Laravel y SQL Server.",
        "Integraciones empresariales desarrolladas con .NET.",
        "Desarrollo de herramientas de soporte como OG Engine para orquestación de tareas en paralelo.",
        "Aplicaciones web con Node.js y React.",
        "Modernización de aplicaciones móviles hacia .NET MAUI.",
      ],
    },
    {
      id: "toka-internacional",
      role: "Desarrollador Full Stack .NET",
      organization: "Toka Internacional",
      period: "Junio de 2022 – Julio de 2025",
      modality: "Remoto",
      description:
        "Desarrollo y mantenimiento de plataformas transaccionales y servicios backend en entorno corporativo.",
      responsibilities: [
        "Desarrollo y mantenimiento de sistemas empresariales en C#, ASP.NET MVC y Web Forms.",
        "Construcción y mantenimiento de APIs REST con .NET y SQL Server.",
        "Integraciones con sistemas de atención telefónica (IVR) con alto volumen de consultas simultáneas.",
        "Procesos de backend para registro de usuarios y códigos de verificación OTP.",
        "Trabajo remoto con un equipo Scrum y seguimiento mediante Jira.",
      ],
    },
    {
      id: "el-surco",
      role: "Ingeniero de Software",
      organization: "El Surco",
      period: "2018 – 2022",
      description:
        "Desarrollo y mantenimiento de aplicaciones móviles para el ámbito agroindustrial y personal de campo.",
      responsibilities: [
        "Desarrollo de aplicaciones móviles de nutrición vegetal a partir de calculadoras de negocio en Excel.",
        "Desarrollo multiplataforma con C# y Xamarin Forms.",
        "Publicación y administración de aplicaciones en Google Play y App Store.",
        "Mantenimiento de aplicaciones utilizadas por personal de campo.",
      ],
    },
    {
      id: "fortia-technology",
      role: "Ingeniero de Software",
      organization: "Fortia Technology",
      period: "2016 – 2018",
      description:
        "Evolución y soporte especializado de software corporativo de gestión de capital humano.",
      responsibilities: [
        "Desarrollo y mantenimiento de módulos de recursos humanos y nómina en ASP.NET MVC.",
        "Trabajo con SQL Server y procedimientos almacenados.",
        "Resolución de incidencias en sistemas en producción.",
        "Asesoría técnica a consultores de implementación.",
      ],
    },
    {
      id: "prointernet",
      role: "Desarrollador Web",
      organization: "ProInternet",
      period: "2010 – 2016",
      description:
        "Desarrollo de sitios web, CMS e intranets para empresas de distintos sectores.",
      responsibilities: [
        "Desarrollo de sitios, CMS e intranets.",
        "Programación en PHP, ASP clásico, HTML, CSS y JavaScript.",
        "Análisis de requerimientos con responsables de negocio.",
        "Capacitación y soporte técnico a usuarios finales.",
      ],
    },
  ],
  caseStudies: [
    {
      id: "og-engine",
      title: "OG Engine: Orquestador de tareas atómicas para agentes de programación",
      sector: "Herramientas de ingeniería y productividad de software",
      badge: "Herramienta propia",
      challenge:
        "Gestionar el flujo de trabajo con agentes de IA autónomos de forma ordenada y predecible, evitando sobrecarga de contexto, pérdida de foco o modificaciones no controladas al código fuente.",
      responsibility:
        "Diseño de arquitectura y desarrollo completo de una solución en Node.js y MongoDB que descompone requerimientos complejos en tareas atómicas estructuradas, entregándolas secuencialmente al agente de codificación y registrando el resultado para auditoría humana.",
      technologies: ["Node.js", "MongoDB", "Agentes de IA", "Orquestación", "Git"],
      result:
        "Herramienta propia en producción que permite avanzar múltiples proyectos en paralelo de forma disciplinada, con trazabilidad completa de cada cambio y validación humana continua.",
    },
    {
      id: "integracion-ecommerce-erp",
      title: "Integración de comercio electrónico con ERP",
      sector: "Comercio electrónico y distribución",
      challenge:
        "Registrar pedidos y mantener existencias consistentes en tiempo real entre múltiples canales de venta y el sistema empresarial central.",
      responsibility:
        "Desarrollo de un servicio en .NET para intercambiar órdenes e inventario entre plataformas, asegurando idempotencia y manejo de errores transaccionales.",
      technologies: [".NET", "APIs REST", "Azure", "Shopify", "Mercado Libre", "SAP"],
      result:
        "Servicio publicado en Azure para registrar órdenes de venta y actualizar existencias de manera fiable y automatizada entre las plataformas integradas.",
    },
    {
      id: "apis-atencion-telefonica",
      title: "APIs para atención telefónica automatizada",
      sector: "Medios de pago y servicios financieros",
      challenge:
        "Permitir que un sistema telefónico automatizado (IVR) consultara saldos e información de clientes con alta concurrencia y tiempos de respuesta mínimos.",
      responsibility:
        "Desarrollo de APIs de integración entre el conmutador interactivo (IVR) y la plataforma central de servicios financieros.",
      technologies: ["C#", ".NET", "SQL Server", "APIs REST"],
      result:
        "APIs robustas en producción capaces de soportar un alto volumen simultáneo de consultas de clientes con disponibilidad continua.",
    },
    {
      id: "apps-moviles-campo",
      title: "Aplicaciones móviles para personal de campo",
      sector: "Agricultura y nutrición vegetal",
      challenge:
        "Convertir complejas calculadoras especializadas creadas en hojas de cálculo en aplicaciones móviles intuitivas para ingenieros en campo.",
      responsibility:
        "Desarrollo y publicación de aplicaciones móviles para Android e iOS a partir de las fórmulas y reglas agronómicas del negocio.",
      technologies: ["C#", "Xamarin Forms", "Google Play", "App Store"],
      result:
        "Aplicaciones publicadas en Google Play y App Store utilizadas activamente por el personal técnico en campo para la toma de decisiones agrícolas.",
    },
  ],
  professionalLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/fidelomar",
      description: "Perfil profesional en LinkedIn",
    },
    {
      label: "GitHub",
      url: "https://github.com/fidelomar",
      description: "Proyectos públicos y repositorios en GitHub",
    },
  ],
};
