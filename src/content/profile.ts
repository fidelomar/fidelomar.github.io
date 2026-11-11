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
        "SQL Server, procedimientos almacenados y mantenimiento de procesos de consulta y actualización de información empresarial.",
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
        "Metodología propia para analizar necesidades, diseñar microtareas, coordinar agentes y validar cada cambio antes de integrarlo.",
    },
  ],
  aiWorkflow: {
    title: "Metodología de desarrollo asistido por IA",
    lead: "He incorporado agentes de IA a un marco de trabajo estructurado que parte de una necesidad humana y termina con software revisado y validado. La IA acelera la ejecución; el análisis, las decisiones técnicas y la aceptación del resultado permanecen bajo supervisión humana.",
    tools: ["ChatGPT", "Claude", "Gemini", "Antigravity", "Jules", "OG Engine"],
    humanSupervisionNote: "No delego el criterio de ingeniería: defino el alcance, organizo el trabajo, reviso los cambios y valido el resultado antes de avanzar a la siguiente tarea.",
    steps: [
      {
        title: "Comprensión y análisis",
        description:
          "Traduzco una necesidad, incidencia o mejora en un objetivo técnico claro. Reviso el código involucrado, dependencias, impacto, migraciones necesarias y alternativas de solución.",
      },
      {
        title: "Diseño y microtareas",
        description:
          "Organizo la solución en historias de usuario y tareas pequeñas, verificables y con alcance definido, aplicando prácticas de desarrollo y elementos de Scrum.",
      },
      {
        title: "Ejecución asistida",
        description:
          "Coordino las microtareas mediante OG Engine y agentes de programación, proporcionando el contexto y los criterios necesarios para ejecutar cada cambio de forma controlada.",
      },
      {
        title: "Auditoría y validación",
        description:
          "Reviso el commit, ejecuto pruebas unitarias y compilación local, y valido el comportamiento en el navegador. Solo después de aprobar el resultado continúo con la siguiente tarea.",
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
        "Integraciones con sistemas de atención telefónica.",
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
      id: "integracion-ecommerce-erp",
      title: "Integración de comercio electrónico con ERP",
      sector: "Comercio electrónico y distribución",
      challenge:
        "Registrar pedidos y mantener existencias consistentes entre canales de venta y el sistema empresarial central.",
      responsibility:
        "Desarrollo de un servicio en .NET para intercambiar órdenes e inventario entre las plataformas.",
      technologies: [".NET", "APIs REST", "Azure", "Shopify", "Mercado Libre", "SAP"],
      result:
        "Servicio publicado en Azure para registrar órdenes de venta y actualizar existencias de manera fiable y automatizada entre las plataformas integradas.",
    },
    {
      id: "apis-atencion-telefonica",
      title: "APIs para atención telefónica automatizada",
      sector: "Medios de pago y servicios financieros",
      challenge:
        "Permitir que un sistema telefónico automatizado consultara saldos e información solicitada por clientes.",
      responsibility:
        "Desarrollo de APIs de integración entre el IVR y la plataforma del centro de llamadas.",
      technologies: ["C#", ".NET", "SQL Server", "APIs REST"],
      result:
        "APIs utilizadas para consultar saldos e información solicitada mediante la línea telefónica automatizada.",
    },
    {
      id: "apps-moviles-campo",
      title: "Aplicaciones móviles para personal de campo",
      sector: "Agricultura y nutrición vegetal",
      challenge:
        "Convertir calculadoras especializadas creadas en Excel en herramientas móviles para uso en campo.",
      responsibility:
        "Desarrollo y publicación de aplicaciones móviles para Android e iOS a partir de las fórmulas y reglas agronómicas del negocio.",
      technologies: ["C#", "Xamarin Forms", "Google Play", "App Store"],
      result:
        "Aplicaciones publicadas en Google Play y App Store para apoyar el trabajo del personal de campo.",
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
