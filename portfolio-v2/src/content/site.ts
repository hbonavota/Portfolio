export type Locale = "en" | "es";

export type Category = "product" | "client-work" | "lab" | "ecosystem";

export type LocalizedText = Record<Locale, string>;

export type LinkItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  category: Category;
  featured: boolean;
  title: LocalizedText;
  strapline: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  overview: Record<Locale, string[]>;
  challenge: Record<Locale, string[]>;
  approach: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
  outcome: Record<Locale, string[]>;
  publicLinks: LinkItem[];
  pageRequired: boolean;
};

export const siteConfig = {
  name: "Hernán Bonavota",
  description: {
    en: "Software engineer focused on critical systems and integrations.",
    es: "Ingeniero de software en sistemas críticos e integraciones."
  },
  domain: "https://hbonavota.com",
  portfolioDomains: ["https://hbonavota.com/", "https://hbonavota.es/"],
  approvedLinks: {
    linkedin: "https://www.linkedin.com/in/bonavota",
    github: "https://github.com/hbonavota",
    verifiko: "https://www.verifiko.es/",
    orbytia: "https://orbytia.es/",
    proyectar: "https://proyectarsl.es/",
    tuProximoSeguro: "https://tuproximoseguro.es/",
    lunetia: "https://lunetia.es/"
  }
} as const;

export const categoryLabels: Record<Category, LocalizedText> = {
  product: { en: "Product", es: "Producto" },
  "client-work": { en: "Production systems", es: "Sistemas en producción" },
  lab: { en: "Lab", es: "Lab" },
  ecosystem: { en: "Secondary context", es: "Contexto secundario" }
};

export const navigation = {
  en: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  es: [
    { label: "Trabajo", href: "/es/trabajo" },
    { label: "Sobre mí", href: "/es/sobre-mi" },
    { label: "Contacto", href: "/es/contacto" }
  ]
} as const;

export const homeContent = {
  en: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Software engineer for integrations and critical systems.",
      description:
        "I design and run platforms where concurrency, validation, and reliability directly impact business outcomes.",
      primaryCta: { label: "See experience", href: "/work" },
      secondaryCta: { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin }
    },
    selectedWork: {
      eyebrow: "Selected experience",
      title: "Production systems",
      description:
        "Integrations, validation, and operational control in production environments."
    },
    capabilities: {
      eyebrow: "What I solve",
      title: "Technical scope.",
      description:
        "Integrations, validation, WordPress, AWS, and end-to-end delivery in production."
    },
    experience: {
      eyebrow: "Current experience",
      title: "Real-world experience",
      description:
        "Ticketing, membership validation, and AWS-backed integrations in production."
    },
    ecosystem: {
      eyebrow: "Professional context",
      title: "Where Orbytia fits.",
      description:
        "My engineering profile is the main path here. Orbytia stays as complementary consulting context."
    },
    about: {
      eyebrow: "About",
      title: "How I work.",
      description:
        "Technical judgment, end-to-end delivery, and direct work with clients and teams."
    },
    contact: {
      eyebrow: "Contact",
      title: "Direct contact.",
      description:
        "LinkedIn is the fastest way to reach me for recruiting or technical conversations."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Ingeniero de software para integraciones y sistemas críticos.",
      description:
        "Diseño y opero plataformas donde la concurrencia, la validación y la fiabilidad impactan directamente en el negocio.",
      primaryCta: { label: "Ver experiencia", href: "/es/trabajo" },
      secondaryCta: { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin }
    },
    selectedWork: {
      eyebrow: "Experiencia destacada",
      title: "Sistemas en producción",
      description:
        "Integraciones, validación y control operativo en entornos de producción."
    },
    capabilities: {
      eyebrow: "Qué resuelvo",
      title: "Alcance técnico.",
      description:
        "Integraciones, validación, WordPress, AWS y entrega de punta a punta en producción."
    },
    experience: {
      eyebrow: "Experiencia actual",
      title: "Experiencia real",
      description:
        "Ticketing, validación de socios e integraciones sobre AWS en producción."
    },
    ecosystem: {
      eyebrow: "Contexto profesional",
      title: "Dónde encaja Orbytia.",
      description:
        "Mi perfil de ingeniería es la vía principal. Orbytia queda como contexto complementario de consultoría."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo trabajo.",
      description:
        "Criterio técnico, entrega de punta a punta y trato directo con cliente y equipo."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacto directo.",
      description:
        "LinkedIn es la vía más directa para recruiters, hiring managers y conversaciones técnicas."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "Ticketing and member portals",
      text: "Sales, validation, access, and account flows tied to real club operations."
    },
    {
      title: "Integrations and data validation",
      text: "LALIGA APIs, legacy normalization, and mandatory profile update flows."
    },
    {
      title: "WordPress under operational load",
      text: "Custom plugins and frontend integrations where business teams need direct operational control."
    },
    {
      title: "AWS and end-to-end delivery",
      text: "Frontend, backend, infrastructure, and production releases without waiting on internal handoffs."
    }
  ],
  es: [
    {
      title: "Portales de ticketing y socios",
      text: "Venta, validación, acceso y flujos de cuenta ligados a la operativa real del club."
    },
    {
      title: "Integraciones y validación de datos",
      text: "APIs de LALIGA, normalización de legacy y flujos obligatorios de actualización de perfil."
    },
    {
      title: "WordPress bajo carga operativa",
      text: "Plugins a medida e integraciones frontend donde negocio necesita control operativo directo."
    },
    {
      title: "AWS y entrega de punta a punta",
      text: "Frontend, backend, infraestructura y salidas a producción sin depender de handoffs internos."
    }
  ]
} as const;

export const professionalExperience = {
  company: "Rezolve",
  role: {
    en: "Software Engineer / Systems Integrations",
    es: "Software Engineer / Integraciones y sistemas"
  },
  summary: {
    en: "At Rezolve, I work on ticketing, membership validation, and production integrations for professional LALIGA football clubs, connecting business flows, external APIs, and operational systems.",
    es: "En Rezolve trabajo en ticketing, validación de socios e integraciones en producción para clubes de fútbol bajo el ecosistema de LALIGA, conectando flujos de negocio, APIs externas y sistemas operativos."
  },
  notes: {
    en: [
      "Direct client work from discovery and solution definition to estimation, demo, and production rollout.",
      "LALIGA integrations for validation, member services, and ticketing operations.",
      "AWS, Nginx, SSL, and production operations without relying on internal platform teams."
    ],
    es: [
      "Trabajo directo con cliente desde relevamiento y definición de solución hasta estimación, demo y salida a producción.",
      "Integraciones con LALIGA para validación, servicios al socio y operación de ticketing.",
      "AWS, Nginx, SSL y operación en producción sin depender de equipos internos de plataforma."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "I work on projects where understanding the real problem is as important as building the solution, keeping business needs, technical decisions, and implementation aligned until production.",
    sections: [
      {
        title: "End-to-end responsibility",
        body:
          "I work directly with clients to clarify requirements, define the right solution, implement it, and take it to production without losing focus on the original objective."
      },
      {
        title: "Technical coverage",
        body:
          "I move across frontend, backend, integrations, WordPress, and AWS, covering what the project needs to work under real operational conditions."
      },
      {
        title: "How I work",
        body:
          "I focus on removing ambiguity early, making trade-offs explicit, and delivering solutions that remain stable and maintainable after release."
      }
    ]
  },
  es: {
    intro:
      "Trabajo en proyectos donde entender bien el problema es tan importante como construir la solución, manteniendo alineados negocio, decisiones técnicas e implementación hasta producción.",
    sections: [
      {
        title: "Responsabilidad de punta a punta",
        body:
          "Trabajo directamente con los clientes para aclarar requerimientos, definir la solución adecuada, implementarla y llevarla a producción sin perder el foco en el objetivo real."
      },
      {
        title: "Alcance técnico",
        body:
          "Me muevo entre frontend, backend, integraciones, WordPress y AWS, cubriendo lo necesario para que el sistema funcione en condiciones reales de operación."
      },
      {
        title: "Forma de trabajo",
        body:
          "Me centro en eliminar ambigüedad desde el inicio, hacer explícitos los trade-offs y entregar soluciones que se mantengan estables y mantenibles tras el lanzamiento."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is a separate consulting context around part of my work. This portfolio remains centered on my engineering profile.",
    sections: [
      {
        title: "What it covers",
        body:
          "Selected consulting work in custom software, automation, and applied AI."
      },
      {
        title: "How it relates",
        body:
          "It adds context around part of my client work without replacing the main profile."
      },
      {
        title: "When it matters",
        body:
          "It matters for service enquiries. Recruiting conversations should stay on the main portfolio and LinkedIn."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es un contexto de consultoría separado alrededor de parte de mi trabajo. Este portfolio sigue centrado en mi perfil de ingeniería.",
    sections: [
      {
        title: "Qué cubre",
        body:
          "Trabajo puntual de consultoría en software a medida, automatización e IA aplicada."
      },
      {
        title: "Cómo se relaciona",
        body:
          "Aporta contexto sobre parte del trabajo con clientes, pero no sustituye al perfil principal."
      },
      {
        title: "Cuándo importa",
        body:
          "Importa para consultas de servicios. Las conversaciones de recruiting deberían quedarse en el portfolio principal y LinkedIn."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Let’s talk.",
    description:
      "Reach out via LinkedIn for technical discussions, opportunities, or collaboration."
  },
  es: {
    title: "Hablemos",
    description:
      "Escríbeme por LinkedIn para hablar sobre proyectos, oportunidades o temas técnicos."
  }
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "verifiko",
    category: "product",
    featured: true,
    pageRequired: true,
    title: { en: "Verifiko", es: "Verifiko" },
    strapline: {
      en: "URL risk analysis with explainable signals.",
      es: "Análisis de riesgo sobre URLs con señales explicables."
    },
    summary: {
      en: "Product built to inspect suspicious URLs and expose technical risk signals in a format that can be reviewed and understood quickly.",
      es: "Producto creado para inspeccionar URLs sospechosas y exponer señales técnicas de riesgo en un formato claro y revisable con rapidez."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "Verifiko is a product focused on analyzing suspicious URLs and exposing technical risk signals in a way that can be reviewed, understood, and acted on."
      ],
      es: [
        "Verifiko es un producto centrado en analizar URLs sospechosas y exponer señales técnicas de riesgo de forma que puedan revisarse, entenderse y utilizarse en la toma de decisiones."
      ]
    },
    challenge: {
      en: [
        "The problem was not just detecting risky URLs, but presenting technical signals without losing accuracy or turning the result into an opaque score."
      ],
      es: [
        "El problema no era solo detectar URLs sospechosas, sino presentar señales técnicas sin perder precisión ni convertir el resultado en un valor opaco."
      ]
    },
    approach: {
      en: [
        "I designed the system around a layered analysis model, separating signal collection, risk evaluation, and final presentation to make the output both transparent and usable."
      ],
      es: [
        "Diseñé el sistema en capas, separando la recogida de señales, la evaluación de riesgo y la presentación final para conseguir un resultado transparente y usable."
      ]
    },
    highlights: {
      en: [
        "Clear separation between signal collection, evaluation, and presentation.",
        "Balancing technical depth with readable output.",
        "Avoiding black-box scoring in favor of explainable results."
      ],
      es: [
        "Separación clara entre recogida de señales, evaluación y presentación.",
        "Equilibrio entre profundidad técnica y lectura del resultado.",
        "Evitar modelos opacos en favor de resultados explicables."
      ]
    },
    outcome: {
      en: [
        "The result is a product that exposes why a URL is considered risky, allowing faster and more informed decisions instead of relying on a single score."
      ],
      es: [
        "El resultado es un producto que muestra por qué una URL se considera riesgosa, permitiendo decisiones más rápidas e informadas en lugar de depender de una única puntuación."
      ]
    },
    publicLinks: [
      { label: "Verifiko", href: siteConfig.approvedLinks.verifiko }
    ]
  },
  {
    slug: "ticketing-queue-control",
    category: "client-work",
    featured: true,
    pageRequired: true,
    title: {
      en: "Queue control for high-demand ticketing",
      es: "Control de colas para ticketing de alta demanda"
    },
    strapline: {
      en: "Access control under high concurrency.",
      es: "Control de acceso bajo alta concurrencia."
    },
    summary: {
      en: "I implemented a queue layer to stabilize ticket sales under peaks of 10,000+ concurrent users.",
      es: "Implemente una capa para estabilizar la venta en picos de más de 10.000 usuarios concurrentes."
    },
    role: {
      en: "Software Engineer",
      es: "Software Engineer"
    },
    overview: {
      en: [
        "This work ran inside ticketing portals for professional football clubs during high-demand sales windows. Before the change, there was no queue system, so users entered the sales flow at the same time and the portal broke under load."
      ],
      es: [
        "Este trabajo se ejecutó sobre portales de ticketing de clubes de fútbol profesional durante ventanas de venta de alta demanda. Antes del cambio no existía un sistema de colas, así que los usuarios entraban todos a la vez y la venta se rompía bajo carga."
      ]
    },
    challenge: {
      en: [
        "The system collapsed under uncontrolled concurrency: timeouts, failed purchases, and revenue loss once traffic reached ~10,000 concurrent users.",
        "A critical constraint was the external AVET system from LALIGA, which did not scale under peak load and could not be modified.",
        "The failure was already impacting the business, including the loss of at least one commercial account."
      ],
      es: [
        "El problema inmediato era la concurrencia descontrolada: timeouts, compras fallidas y pérdida de ingresos cuando el tráfico rondaba los 10.000 usuarios concurrentes.",
        "La restricción clave era el sistema externo AVET de LALIGA. Era una dependencia dura dentro del flujo y no escalaba bajo picos, así que la solución viable tenía que regular el acceso antes de llegar ahí.",
        "El problema ya estaba afectando al negocio. Se había perdido una cuenta después de un fallo de este tipo durante una salida de venta."
      ]
    },
    approach: {
      en: [
        "I evaluated queue providers and selected Queue-Fair based on cost, fairness in the waiting room, and evidence of use at higher scale.",
        "I handled the vendor conversation and agreement directly in English, then implemented Queue-Fair through a frontend script on WordPress because it gave faster rollout, simpler maintenance, and direct operational control.",
        "The implementation combined that script integration with a decoupled match landing page, so access control could be activated and adjusted from WordPress without backend changes."
      ],
      es: [
        "Evalué proveedores de cola y elegí Queue-Fair por coste, equidad dentro de la espera y referencias probadas a mayor escala.",
        "Llevé directamente la conversación y el acuerdo con el proveedor en inglés, y luego integré Queue-Fair mediante script en frontend sobre WordPress porque daba despliegue más rápido, mantenimiento más simple y control operativo directo.",
        "La implementación combinó esa integración por script con el desacople de la landing del partido, de forma que el control de acceso pudiera activarse y ajustarse desde WordPress sin cambios de backend."
      ]
    },
    highlights: {
      en: [
        "Shielding a non-scalable external dependency without blocking sales.",
        "Operational integration that could be controlled directly from WordPress.",
        "Reducing pressure on the core system during peak traffic."
      ],
      es: [
        "Proteger una dependencia externa no escalable sin bloquear por completo la venta.",
        "Integración operativa por script que el equipo sobre WordPress podía gestionar sin despliegues de backend.",
        "Separación entre landing y portal de venta para reducir presión sobre la aplicación principal."
      ]
    },
    outcome: {
      en: [
        "The sales flow stopped collapsing at around 10,000 concurrent users and moved to an ordered waiting room of roughly 60,000 users.",
        "That gave the ticketing operation a controlled entry point and supported larger commercial accounts afterwards."
      ],
      es: [
        "La venta dejó de colapsar alrededor de los 10.000 usuarios concurrentes y pasó a una cola ordenada de unos 60.000 usuarios.",
        "Eso dio a la operativa de ticketing un punto de entrada controlado y ayudó a sostener cuentas comerciales de mayor exigencia después."
      ]
    },
    publicLinks: []
  },
  {
    slug: "member-validation-data-update",
    category: "client-work",
    featured: true,
    pageRequired: true,
    title: {
      en: "Membership validation and data quality",
      es: "Validación de socios y calidad de datos"
    },
    strapline: {
      en: "Validation flows integrated with LALIGA and Data Lake.",
      es: "Flujos de validación integrados con LALIGA y Data Lake."
    },
    summary: {
      en: "Normalized legacy data and enforced validation at entry points to prevent inconsistencies across systems.",
      es: "Normalización de datos legacy y validación en puntos de entrada para evitar inconsistencias entre sistemas."
    },
    role: {
      en: "Software Engineer / Integration Owner",
      es: "Software Engineer / Responsable de integraciones"
    },
    overview: {
      en: [
        "This work ran in member portals where users had to validate themselves with idPersona and PIN, then update profile data before accessing services or purchase flows."
      ],
      es: [
        "Este trabajo se ejecutó sobre portales de socios donde los usuarios tenían que validarse con idPersona y PIN, y después actualizar datos de perfil antes de acceder a servicios o flujos de compra."
      ]
    },
    challenge: {
      en: [
        "Legacy data was inconsistent and unreliable: mismatched postal codes, duplicated formats, and years of unvalidated input.",
        "Users were frequently blocked due to incorrect identity and profile data, requiring the system to distinguish between invalid credentials and recoverable data issues.",
        "The system had to validate against LALIGA APIs and push clean data downstream, making it impossible to defer corrections."
      ],
      es: [
        "Los datos que llegaban desde sistemas legacy eran inconsistentes: códigos postales y municipios no coincidían, los países aparecían en formatos distintos y los formularios acumulaban años de valores sin normalizar.",
        "Además, los usuarios se bloqueaban en login y actualización porque los campos de identidad y perfil muchas veces estaban mal desde origen, así que el portal tenía que distinguir entre credenciales inválidas, input mal formado y problemas de datos recuperables.",
        "El flujo tenía que validar contra APIs de LALIGA y empujar los datos corregidos hacia el Data Lake, así que no se podía aceptar entrada defectuosa para limpiarla después."
      ]
    },
    approach: {
      en: [
        "I designed login, registration, and mandatory profile update flows with validation on both frontend and backend, including idPersona and PIN checks before the user could move deeper into the portal.",
        "For normalization, I used explicit rules plus JSON mappings to verify postal code and municipality pairs, and added server-side validation, duplicate controls, indexes, and database restrictions before persisting and forwarding data."
      ],
      es: [
        "Diseñé flujos de login, registro y actualización obligatoria de perfil con validación tanto en frontend como en backend, incluyendo comprobaciones de idPersona y PIN antes de dejar avanzar al usuario dentro del portal.",
        "Para la normalización usé reglas explícitas y mapeos en JSON para comprobar pares de código postal y municipio, y añadí validación server-side, control de duplicados, índices y restricciones en base de datos antes de guardar y enviar la información aguas abajo."
      ]
    },
    highlights: {
      en: [
        "Supporting broken legacy formats without turning the user flow into a dead end.",
        "Making data correction mandatory at the portal entry point while keeping the path recoverable.",
        "Aligning validation rules, DB constraints, and downstream Data Lake requirements in the same flow."
      ],
      es: [
        "Soportar formatos legacy rotos sin convertir el flujo del usuario en un callejón sin salida.",
        "Hacer obligatoria la corrección de datos en la entrada del portal sin volver inutilizable el camino del usuario.",
        "Alinear reglas de validación, restricciones de BBDD y requisitos aguas abajo del Data Lake en un mismo flujo."
      ]
    },
    outcome: {
      en: [
        "The portals stopped accepting inconsistent profile data as-is and started enforcing normalized updates before users continued.",
        "That reduced blocked users caused by malformed identity and profile input, and lowered the amount of mismatched records reaching the Data Lake and downstream operational flows."
      ],
      es: [
        "Los portales dejaron de aceptar datos de perfil inconsistentes tal cual y pasaron a exigir actualizaciones normalizadas antes de continuar.",
        "Eso redujo usuarios bloqueados por input mal formado en identidad y perfil, y bajó la cantidad de registros desajustados que llegaban al Data Lake y a flujos operativos aguas abajo."
      ]
    },
    publicLinks: []
  },
  {
    slug: "high-concurrency-draw-flows",
    category: "client-work",
    featured: true,
    pageRequired: true,
    title: {
      en: "High-concurrency registration flows",
      es: "Flujos de registro bajo alta concurrencia"
    },
    strapline: {
      en: "Traffic spikes, duplicate prevention, and data integrity.",
      es: "Picos de tráfico, prevención de duplicados e integridad de datos."
    },
    summary: {
      en: "Designed registration flows capable of handling high concurrency, duplicate prevention, and consistent data writes in production.",
      es: "Diseño de flujos de registro capaces de soportar alta concurrencia, prevenir duplicados y asegurar escrituras consistentes en producción."
    },
    role: {
      en: "Full-stack Engineer / Implementation Owner",
      es: "Ingeniero full-stack / Responsable de implementación"
    },
    overview: {
      en: [
        "These flows ran on portals where users registered for draws under time pressure. The same release had to hold under bursts of traffic while preventing duplicate or inconsistent entries."
      ],
      es: [
        "Estos flujos corrían sobre portales donde los usuarios se registraban a sorteos bajo presión de tiempo. La misma entrega tenía que aguantar ráfagas de tráfico mientras evitaba entradas duplicadas o inconsistentes."
      ]
    },
    challenge: {
      en: [
        "The risk was not only load. The system also had to stop duplicate registrations, repeated submissions, invalid data combinations, and edge cases created by concurrent requests.",
        "Because the stack included WordPress and existing databases, the safeguards had to work across frontend, backend, and storage rather than in one layer only."
      ],
      es: [
        "El riesgo no era solo la carga. El sistema también tenía que frenar registros duplicados, envíos repetidos, combinaciones de datos inválidas y casos límite creados por peticiones concurrentes.",
        "Como el stack incluía WordPress y bases de datos existentes, las defensas tenían que funcionar en frontend, backend y persistencia, no en una sola capa."
      ]
    },
    approach: {
      en: [
        "I enforced validation across frontend, backend, and database layers, adding constraints and indexes to prevent duplicates and inconsistent writes.",
        "The system was instrumented to expose anomalies and make production issues observable and debuggable."
      ],
      es: [
        "Implementé validación a ambos lados de la petición, añadí restricciones e índices en base de datos, y metí observabilidad para hacer visibles los intentos duplicados y las escrituras inconsistentes.",
        "El objetivo era rechazar registros malos cuanto antes, mantener estrictas las reglas de persistencia y dejar suficiente observabilidad para depurar incidentes en producción."
      ]
    },
    highlights: {
      en: [
        "Synchronizing frontend checks with backend validation so the same record could not pass in one layer and fail in another.",
        "Designing DB constraints and indexes around duplicate prevention without breaking the existing portal.",
        "Handling traffic spikes without opening the door to repeated entries, fraud patterns, or partial writes."
      ],
      es: [
        "Sincronizar comprobaciones en frontend con validación en backend para que un mismo registro no pasara en una capa y fallara en otra.",
        "Diseñar restricciones e índices de BBDD alrededor de la prevención de duplicados sin romper el portal existente.",
        "Soportar picos de concurrencia sin abrir la puerta a entradas repetidas, patrones de fraude o escrituras parciales."
      ]
    },
    outcome: {
      en: [
        "The draw flows moved from ad-hoc validation to controlled registration paths with duplicate prevention and clearer operational signals.",
        "That reduced inconsistent records, repeated entries, and manual cleanup during high-demand windows."
      ],
      es: [
        "Los flujos de sorteos pasaron de validación ad hoc a caminos de registro controlados con prevención de duplicados y señales operativas más claras.",
        "Eso redujo registros inconsistentes, entradas repetidas y limpieza manual durante ventanas de alta demanda."
      ]
    },
    publicLinks: []
  },
  {
    slug: "orbytia",
    category: "ecosystem",
    featured: false,
    pageRequired: true,
    title: { en: "Orbytia", es: "Orbytia" },
    strapline: {
      en: "Consulting, automation, and applied AI.",
      es: "Consultoría, automatización e IA aplicada."
    },
    summary: {
      en: "Separate consulting context for selected work in custom software, automation, and applied AI.",
      es: "Contexto de consultoría separado para trabajos puntuales en software a medida, automatización e IA aplicada."
    },
    role: {
      en: "Founder",
      es: "Founder"
    },
    overview: {
      en: [
        "Orbytia is the consulting side of my work, focused on custom software, automation, and applied AI projects with direct client involvement."
      ],
      es: [
        "Orbytia es la parte de consultoría de mi trabajo, centrada en proyectos de software a medida, automatización e IA aplicada con implicación directa con cliente."
      ]
    },
    challenge: {
      en: [
        "The challenge was to keep this work visible without diluting the core engineering focus of the portfolio."
      ],
      es: [
        "El objetivo era dar visibilidad a este trabajo de consultoría sin mezclarlo con la narrativa principal de ingeniería del portfolio."
      ]
    },
    approach: {
      en: [
        "I kept Orbytia as a separate context, with its own positioning and service-oriented framing, while the main portfolio stayed focused on production systems, integrations, and technical case studies."
      ],
      es: [
        "Mantuve Orbytia como un contexto separado, con su propio posicionamiento y enfoque de servicios, mientras el portfolio principal seguía centrado en sistemas en producción, integraciones y casos técnicos."
      ]
    },
    highlights: {
      en: [
        "Separate consulting context with its own positioning.",
        "Clear distinction between services and engineering profile.",
        "Additional context without competing with core work."
      ],
      es: [
        "Espacio separado para trabajo de consultoría.",
        "Separación clara entre servicios y perfil de ingeniería.",
        "Contexto útil sin competir con el portfolio principal."
      ]
    },
    outcome: {
      en: [
        "Orbytia remains available as complementary context for consulting enquiries, while this portfolio stays centered on my engineering profile and technical experience."
      ],
      es: [
        "Orbytia queda como contexto complementario para consultas de consultoría, mientras este portfolio sigue centrado en mi perfil de ingeniería y experiencia técnica."
      ]
    },
    publicLinks: [{ label: "Orbytia", href: siteConfig.approvedLinks.orbytia }]
  }
];
