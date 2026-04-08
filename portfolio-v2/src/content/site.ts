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
    en: "Software engineer focused on ticketing portals, integrations, backend systems and operational product work.",
    es: "Ingeniero de software enfocado en integraciones, sistemas backend y trabajo de producto en producción."
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
  "client-work": { en: "Client Project", es: "Trabajo para clientes" },
  lab: { en: "Lab", es: "Lab" },
  ecosystem: { en: "Secondary Context", es: "Contexto secundario" }
};

export const navigation = {
  en: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Orbytia", href: "/orbytia" },
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
      title: "Software engineer for ticketing portals, integrations and backend systems.",
      description:
        "I work across ticketing, member validation, data flows and infrastructure where failures have direct operational cost.",
      primaryCta: { label: "See work", href: "/work" },
      secondaryCta: { label: "Contact", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Case studies from production work.",
      description:
        "Ticketing, member validation, concurrency control and product work, with concrete scope and decisions."
    },
    capabilities: {
      eyebrow: "What I Cover",
      title: "What I usually cover.",
      description:
        "Ticketing portals, integrations, data validation, WordPress, AWS and end-to-end implementation."
    },
    experience: {
      eyebrow: "Current Work",
      title: "Current production scope.",
      description:
        "Today I work on ticketing, member validation, queueing, forms and infrastructure."
    },
    ecosystem: {
      eyebrow: "Professional Context",
      title: "Where Orbytia sits.",
      description:
        "Hernán Bonavota is the main professional profile. Orbytia stays as secondary consulting context, not the main hiring path."
    },
    about: {
      eyebrow: "About",
      title: "How I operate.",
      description:
        "End-to-end delivery, technical judgment and direct work with clients and teams."
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to engineering roles and technical conversations.",
      description:
        "LinkedIn is the best first contact for recruiters and hiring managers. Orbytia stays only as the separate route for service enquiries."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Ingeniero de software para integraciones, sistemas backend y producto en producción.",
      description:
        "Trabajo sobre validación, concurrencia, flujos de datos, infraestructura e implementación de punta a punta cuando el fallo tiene impacto directo en operación.",
      primaryCta: { label: "Ver trabajo", href: "/es/trabajo" },
      secondaryCta: { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin }
    },
    selectedWork: {
      eyebrow: "Trabajo destacado",
      title: "Casos de trabajo en producción.",
      description:
        "Integración, validación, concurrencia y producto, con alcance, restricciones y decisiones concretas."
    },
    capabilities: {
      eyebrow: "Qué cubro",
      title: "Lo que suelo cubrir.",
      description:
        "Integraciones, validación de datos, WordPress, AWS e implementación de punta a punta."
    },
    experience: {
      eyebrow: "Trabajo actual",
      title: "Alcance actual en producción.",
      description:
        "Hoy trabajo con validación de socios, colas, formularios, integraciones e infraestructura."
    },
    ecosystem: {
      eyebrow: "Contexto profesional",
      title: "Dónde queda Orbytia.",
      description:
        "Hernán Bonavota es el perfil profesional principal. Orbytia queda como contexto de consultoría secundario, no como la vía principal de contratación."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo opero.",
      description:
        "Criterio técnico, entrega de punta a punta y trato directo con cliente."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Abierto a oportunidades de ingeniería y conversaciones técnicas.",
      description:
        "LinkedIn es la mejor vía de primer contacto para recruiters y hiring managers."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "Ticketing and member portals",
      text: "Sales, validation, access and account flows tied to club operations."
    },
    {
      title: "Integrations and data validation",
      text: "LALIGA APIs, legacy normalization and mandatory data update flows."
    },
    {
      title: "WordPress under operational load",
      text: "Custom plugins and frontend integrations where business teams need direct control."
    },
    {
      title: "AWS and end-to-end delivery",
      text: "Frontend, backend, infrastructure and release work without waiting on internal handoffs."
    }
  ],
  es: [
    {
      title: "Portales, acceso y validación",
      text: "Venta, validación, acceso y flujos de cuenta ligados a operación."
    },
    {
      title: "Integraciones y validación de datos",
      text: "APIs de LALIGA, normalización de legacy y flujos obligatorios de actualización de datos."
    },
    {
      title: "WordPress bajo carga operativa",
      text: "Plugins a medida e integraciones frontend donde el equipo de negocio necesita control directo."
    },
    {
      title: "AWS y entrega de punta a punta",
      text: "Frontend, backend, infraestructura y puesta en producción sin depender de terceros internos."
    }
  ]
} as const;

export const professionalExperience = {
  company: "Rezolve",
  role: {
    en: "Software Engineer / Product Engineer",
    es: "Software Engineer / Product Engineer"
  },
  summary: {
    en: "At Rezolve I work on ticketing portals, member validation, queueing, data update flows and AWS-backed operations for clubs in professional football.",
    es: "En Rezolve trabajo sobre portales, validación de socios, colas, flujos de actualización de datos, integraciones y operación sobre AWS para clubes de fútbol profesional."
  },
  notes: {
    en: [
      "Client-facing work from discovery and solution definition to estimation, demo and production rollout.",
      "LALIGA integrations for validation and ticketing operations.",
      "AWS, Nginx, SSL and production operations without relying on internal platform teams."
    ],
    es: [
      "Trabajo directo con cliente desde relevamiento y definición de solución hasta estimación, demo y salida a producción.",
      "Integraciones con LALIGA para validación y operación de ticketing.",
      "AWS, Nginx, SSL y operación en producción sin depender de equipos internos de plataforma."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "I tend to add the most value when a project needs one person to move between client requirements, technical decisions and implementation without losing the thread.",
    sections: [
      {
        title: "End-to-end ownership",
        body:
          "I work directly with clients to gather use cases, define scope, estimate the work, implement it, demo it and close delivery."
      },
      {
        title: "Technical range",
        body:
          "Frontend is where I move fastest, but I regularly cover backend, integrations, WordPress, AWS and production debugging when the project needs it."
      },
      {
        title: "Operating style",
        body:
          "I prefer concrete constraints, explicit trade-offs and solutions that a team can maintain after launch."
      }
    ]
  },
  es: {
    intro:
      "Suelo aportar más valor cuando un proyecto necesita a una persona capaz de moverse entre requisitos de cliente, decisiones técnicas e implementación sin perder el hilo.",
    sections: [
      {
        title: "Responsabilidad de punta a punta",
        body:
          "Trabajo directamente con clientes para relevar casos de uso, definir alcance, estimar, implementar, hacer la demo y cerrar la entrega."
      },
      {
        title: "Rango técnico",
        body:
          "El frontend es donde me muevo con más soltura, pero cubro backend, integraciones, WordPress, AWS y debugging en producción cuando el proyecto lo exige."
      },
      {
        title: "Forma de trabajo",
        body:
          "Prefiero restricciones concretas, trade-offs explícitos y soluciones que un equipo pueda mantener después del lanzamiento."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the separate consulting context around part of my work. It is not the main track of this portfolio, which stays centered on my engineering profile.",
    sections: [
      {
        title: "What it covers",
        body:
          "Selected consulting work in custom software, automation and applied AI."
      },
      {
        title: "How it relates",
        body:
          "It explains part of the client work around my profile without replacing it."
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
      "Orbytia es el contexto de consultoría separado alrededor de parte de mi trabajo. No es la vía principal de este portfolio, que sigue centrado en mi perfil de ingeniería.",
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
    title: "Open to engineering roles and technical conversations.",
    description:
      "For roles and technical conversations, LinkedIn is the best first contact. Orbytia is only for service enquiries."
  },
  es: {
    title: "Abierto a oportunidades de ingeniería y conversaciones técnicas.",
    description:
      "Para oportunidades y conversaciones técnicas, LinkedIn es el mejor primer contacto."
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
      en: "Cybersecurity product.",
      es: "Producto de ciberseguridad."
    },
    summary: {
      en: "Own product for inspecting suspicious URLs and exposing technical risk signals in a form that can be reviewed quickly.",
      es: "Producto propio para inspeccionar URLs sospechosas y exponer señales técnicas de riesgo en un formato que pueda revisarse rápido."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "Verifiko is a product initiative built outside client work. It sits in the portfolio as a product example rather than as the main source of operational experience."
      ],
      es: [
        "Verifiko es una iniciativa de producto construida fuera del trabajo con clientes. Está en el portfolio como ejemplo de producto, no como la principal fuente de experiencia operativa."
      ]
    },
    challenge: {
      en: [
        "The problem was turning technical URL checks into output that could be reviewed quickly without hiding the underlying signals."
      ],
      es: [
        "El problema era convertir comprobaciones técnicas sobre URLs en un resultado revisable con rapidez sin ocultar las señales subyacentes."
      ]
    },
    approach: {
      en: [
        "I structured the product around analysis steps, backend logic and a result model that shows why a URL looks suspicious instead of collapsing everything into a single label."
      ],
      es: [
        "Lo estructuré alrededor de pasos de análisis, lógica backend y un modelo de resultado que muestra por qué una URL parece sospechosa en lugar de reducirlo todo a una sola etiqueta."
      ]
    },
    highlights: {
      en: [
        "Balancing technical depth with readable output.",
        "Separating signal collection from final risk presentation.",
        "Keeping the scope product-sized and operationally realistic."
      ],
      es: [
        "Equilibrar profundidad técnica con lectura rápida del resultado.",
        "Separar la recogida de señales de la presentación final del riesgo.",
        "Mantener un alcance de producto acotado y operable."
      ]
    },
    outcome: {
      en: [
        "The result is a concrete product example: backend logic, security-focused analysis and decisions around how technical output is exposed to users."
      ],
      es: [
        "El resultado es un ejemplo concreto de trabajo de producto: lógica backend, análisis orientado a seguridad y decisiones sobre cómo exponer salida técnica a usuarios."
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
      en: "Ticketing Queue Control",
      es: "Control de colas para ticketing"
    },
    strapline: {
      en: "Concurrency control for high-demand sales windows.",
      es: "Control de concurrencia para ventanas de venta de alta demanda."
    },
    summary: {
      en: "Queue-Fair integration for ticketing launches that were collapsing under roughly 10,000 concurrent users.",
      es: "Integración de Queue-Fair para salidas de ticketing que colapsaban con unos 10.000 usuarios concurrentes."
    },
    role: {
      en: "Software Engineer / Technical Owner",
      es: "Software Engineer / Responsable técnico"
    },
    overview: {
      en: [
        "This work sat inside ticketing portals for professional football clubs running high-demand sales windows. Before the change there was no queue system, so users entered the sale flow at the same time and the portal broke under load."
      ],
      es: [
        "Este trabajo se hacía sobre portales de ticketing de clubes de fútbol profesional con ventanas de venta de alta demanda. Antes del cambio no existía un sistema de colas, así que los usuarios entraban todos a la vez y la venta se rompía bajo carga."
      ]
    },
    challenge: {
      en: [
        "The immediate problem was uncontrolled concurrency: timeouts, failed purchases and lost revenue once traffic reached roughly 10,000 concurrent users.",
        "A key constraint was the external AVET system from LALIGA. It was a hard dependency in the flow and it did not scale under peak traffic, so the practical solution had to regulate access before users reached that point.",
        "The issue was already affecting the business side. One account had been lost after the platform failed during this kind of launch."
      ],
      es: [
        "El problema inmediato era la concurrencia descontrolada: timeouts, compras fallidas y pérdida de ingresos cuando el tráfico rondaba los 10.000 usuarios concurrentes.",
        "La restricción clave era el sistema externo AVET de LALIGA. Era una dependencia dura dentro del flujo y no escalaba bajo picos, así que la solución viable tenía que regular el acceso antes de llegar ahí.",
        "El problema ya estaba afectando al negocio. Se había perdido una cuenta después de un fallo de este tipo durante una salida de venta."
      ]
    },
    approach: {
      en: [
        "I evaluated queue providers and selected Queue-Fair based on cost, fairness in the waiting room and evidence of use at higher scale.",
        "I handled the vendor conversation and agreement directly in English, then implemented Queue-Fair through a frontend script on WordPress because it gave faster rollout, simpler maintenance and direct operational control.",
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
        "The queue had to protect a non-scalable external dependency without blocking sales entirely.",
        "The choice of a script integration was operational, not cosmetic: WordPress teams could switch and manage it without backend deployments.",
        "The landing and sales portal were separated to reduce pressure on the main application at peak moments."
      ],
      es: [
        "La cola tenía que proteger una dependencia externa no escalable sin bloquear por completo la venta.",
        "La elección de una integración por script fue operativa, no cosmética: el equipo sobre WordPress podía activarla y gestionarla sin despliegues de backend.",
        "La landing y el portal de venta se separaron para reducir presión sobre la aplicación principal en los momentos pico."
      ]
    },
    outcome: {
      en: [
        "The sale flow stopped collapsing at around 10,000 concurrent users and moved to an ordered waiting room of roughly 60,000 users.",
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
      en: "Member Validation and Data Update",
      es: "Validación de socios y actualización de datos"
    },
    strapline: {
      en: "Portal flows tied to validation and downstream data quality.",
      es: "Flujos de portal ligados a validación y calidad del dato aguas abajo."
    },
    summary: {
      en: "Member portal work combining LALIGA validation, forced data updates and normalization of inconsistent legacy records before they reached the DataLake.",
      es: "Trabajo sobre portales de socios combinando validación con LALIGA, actualización obligatoria de datos y normalización de registros legacy inconsistentes antes de llegar al DataLake."
    },
    role: {
      en: "Full-stack Engineer / Integration Owner",
      es: "Ingeniero full-stack / Responsable de integraciones"
    },
    overview: {
      en: [
        "This work sat in member portals where users had to validate themselves with idPersona and PIN, then update profile data before accessing services or purchase flows."
      ],
      es: [
        "Este trabajo se hacía sobre portales de socios donde los usuarios tenían que validarse con idPersona y PIN, y después actualizar datos de perfil antes de acceder a servicios o flujos de compra."
      ]
    },
    challenge: {
      en: [
        "The data coming from legacy sources was inconsistent: postal codes and municipalities did not match, countries appeared in multiple formats and form fields contained years of unnormalized values.",
        "Users were also getting blocked at login and update points because identity fields and profile data were often wrong at source, so the portal had to distinguish between invalid credentials, malformed input and recoverable data issues.",
        "The flow had to validate against LALIGA APIs and push corrected data downstream to the DataLake, so bad input could not simply be accepted and cleaned later."
      ],
      es: [
        "Los datos que llegaban desde sistemas legacy eran inconsistentes: códigos postales y municipios no coincidían, los países aparecían en formatos distintos y los formularios acumulaban años de valores sin normalizar.",
        "Además, los usuarios se bloqueaban en login y actualización porque los campos de identidad y perfil muchas veces estaban mal desde origen, así que el portal tenía que distinguir entre credenciales inválidas, input mal formado y problemas de datos recuperables.",
        "El flujo tenía que validar contra APIs de LALIGA y empujar los datos corregidos hacia el DataLake, así que no se podía aceptar entrada defectuosa para limpiarla después."
      ]
    },
    approach: {
      en: [
        "I designed login, registration and mandatory profile update flows with validation on both frontend and backend, including idPersona and PIN checks before the user could move deeper into the portal.",
        "For normalization, I used explicit rules plus JSON mappings to verify postal code and municipality pairs, and added server-side validation, duplicate controls, indexes and database restrictions before persisting and forwarding data."
      ],
      es: [
        "Diseñé flujos de login, registro y actualización obligatoria de perfil con validación tanto en frontend como en backend, incluyendo comprobaciones de idPersona y PIN antes de dejar avanzar al usuario dentro del portal.",
        "Para la normalización usé reglas explícitas y mapeos en JSON para comprobar pares de código postal y municipio, y añadí validación server-side, control de duplicados, índices y restricciones en base de datos antes de guardar y enviar la información aguas abajo."
      ]
    },
    highlights: {
      en: [
        "Supporting multiple broken legacy formats without turning the login and update flow into a dead end.",
        "Making data correction mandatory at the portal entry point while keeping the user path recoverable.",
        "Aligning validation rules, DB constraints and downstream DataLake requirements in the same flow."
      ],
      es: [
        "Soportar varios formatos legacy rotos sin convertir el login y la actualización en un callejón sin salida.",
        "Hacer obligatoria la corrección de datos en la entrada del portal sin volver inutilizable el camino del usuario.",
        "Alinear reglas de validación, restricciones de BBDD y requisitos aguas abajo del DataLake en un mismo flujo."
      ]
    },
    outcome: {
      en: [
        "The portals stopped accepting inconsistent profile data as-is and started enforcing normalized updates before users continued.",
        "That reduced blocked users caused by malformed identity and profile input, and lowered the amount of mismatched records reaching the DataLake and downstream operational flows."
      ],
      es: [
        "Los portales dejaron de aceptar datos de perfil inconsistentes tal cual y pasaron a exigir actualizaciones normalizadas antes de continuar.",
        "Eso redujo usuarios bloqueados por input mal formado en identidad y perfil, y bajó la cantidad de registros desajustados que llegaban al DataLake y a flujos operativos aguas abajo."
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
      en: "High-Concurrency Draw Flows",
      es: "Flujos de sorteos con alta concurrencia"
    },
    strapline: {
      en: "Registration control under traffic spikes and duplicate risk.",
      es: "Control de registros bajo picos de tráfico y riesgo de duplicados."
    },
    summary: {
      en: "Draw and registration flows built to withstand concurrency spikes, duplicate attempts and inconsistent records in WordPress-backed portals.",
      es: "Flujos de sorteos y registro preparados para soportar picos de concurrencia, intentos duplicados y registros inconsistentes en portales soportados por WordPress."
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
        "The risk was not only load. The system also had to stop duplicate registrations, repeated submissions, invalid data combinations and edge cases created by concurrent requests.",
        "Because the stack included WordPress and existing databases, the safeguards had to work across frontend, backend and storage rather than in one layer only."
      ],
      es: [
        "El riesgo no era solo la carga. El sistema también tenía que frenar registros duplicados, envíos repetidos, combinaciones de datos inválidas y casos límite creados por peticiones concurrentes.",
        "Como el stack incluía WordPress y bases de datos existentes, las defensas tenían que funcionar en frontend, backend y persistencia, no en una sola capa."
      ]
    },
    approach: {
      en: [
        "I implemented validation on both sides of the request, added database restrictions and indexes, and instrumented the flow to make duplicate attempts and inconsistent writes visible.",
        "The objective was to reject bad registrations early, keep persistence rules strict and leave enough observability to debug incidents in production."
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
        "Handling traffic spikes without opening the door to repeated entries, fraud patterns or partial writes."
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
        "That reduced inconsistent records, repeated entries and manual cleanup during high-demand windows."
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
      en: "Secondary consulting context.",
      es: "Contexto secundario de consultoría."
    },
    summary: {
      en: "Separate consulting context for selected client work in software, automation and applied AI.",
      es: "Contexto de consultoría separado para parte del trabajo con clientes en software, automatización e IA aplicada."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "Orbytia groups part of the consulting work around my profile, but it is not meant to replace the main portfolio or become the primary hiring story."
      ],
      es: [
        "Orbytia agrupa parte del trabajo de consultoría alrededor de mi perfil, pero no está pensada para sustituir el portfolio principal ni convertirse en la historia principal de contratación."
      ]
    },
    challenge: {
      en: [
        "The main editorial constraint was keeping consulting context visible without diluting the engineering profile that the portfolio is built around."
      ],
      es: [
        "La principal restricción editorial era dejar visible el contexto de consultoría sin diluir el perfil de ingeniería sobre el que está construido el portfolio."
      ]
    },
    approach: {
      en: [
        "I kept Orbytia as a separate route, with its own page and service framing, while keeping the portfolio centered on technical case studies and hiring-oriented contact."
      ],
      es: [
        "Mantuve Orbytia como una vía separada, con su propia página y enfoque de servicios, mientras el portfolio se centraba en casos técnicos y contacto orientado a contratación."
      ]
    },
    highlights: {
      en: [
        "Keeping service enquiries separate from recruiting conversations.",
        "Avoiding overlap with product and portfolio work.",
        "Leaving enough context without turning it into the protagonist."
      ],
      es: [
        "Separar consultas de servicios de conversaciones de recruiting.",
        "Evitar solapamiento con producto y con el portfolio principal.",
        "Dejar suficiente contexto sin convertirlo en protagonista."
      ]
    },
    outcome: {
      en: [
        "Orbytia remains available as complementary context for selected client work while Hernán Bonavota stays as the main professional profile."
      ],
      es: [
        "Orbytia queda disponible como contexto complementario para parte del trabajo con clientes mientras Hernán Bonavota sigue siendo el perfil profesional principal."
      ]
    },
    publicLinks: [{ label: "Orbytia", href: siteConfig.approvedLinks.orbytia }]
  }
];
