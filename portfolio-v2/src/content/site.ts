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
  architecture?: Record<Locale, string>;
  architectureSteps?: Record<Locale, string[]>;
  publicLinks: LinkItem[];
  pageRequired: boolean;
};

export const siteConfig = {
  name: "Hernán Bonavota",
  description: {
    en: "Software engineer building ticketing, member portals and LALIGA integrations for first-division football clubs.",
    es: "Ingeniero de software construyendo ticketing, portales de socios e integraciones con LALIGA para clubes de primera división."
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
  "client-work": { en: "Ticketing & portals", es: "Ticketing y portales" },
  lab: { en: "Lab", es: "Lab" },
  ecosystem: { en: "Consulting context", es: "Contexto de consultoría" }
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

export const recruiterAnchor = {
  en: {
    years: "6+ years in IT, building and operating production systems.",
    location: "Palma de Mallorca, Balearic Islands, Spain · Remote · CET",
    locationShort: "Palma de Mallorca · CET",
    availability: "Open to engineering roles, 2026",
    ndaLine: "Recent work for first-division football clubs (under NDA)."
  },
  es: {
    years: "+6 años en IT, construyendo y operando sistemas en producción.",
    location: "Palma de Mallorca, Islas Baleares, España · Remoto · CET",
    locationShort: "Palma de Mallorca · CET",
    availability: "Abierto a roles de ingeniería, 2026",
    ndaLine: "Trabajo reciente para clubes de primera división (bajo NDA)."
  }
} as const;

export const stack: readonly {
  en: string;
  es: string;
  items: readonly string[];
}[] = [
  {
    en: "Languages",
    es: "Lenguajes",
    items: ["JavaScript / TypeScript", "PHP", "Python"]
  },
  {
    en: "Frameworks",
    es: "Frameworks",
    items: ["React / Next.js", "Node.js", "WordPress / WooCommerce"]
  },
  {
    en: "Data",
    es: "Datos",
    items: ["MySQL / MariaDB"]
  },
  {
    en: "Infrastructure",
    es: "Infraestructura",
    items: ["AWS (EC2, RDS, S3, ACM)", "Nginx", "Linux"]
  },
  {
    en: "Testing",
    es: "Testing",
    items: ["Playwright", "Cypress", "Jest"]
  },
  {
    en: "Tools",
    es: "Herramientas",
    items: ["Git", "REST APIs"]
  }
] as const;

export const homeContent = {
  en: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Software engineer specializing in integrations and production-critical systems.",
      description:
        "I design and operate platforms where concurrency, validation, and reliability affect sales, access, and operational flows.",
      primaryCta: { label: "See experience", href: "/work" },
      secondaryCta: { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin }
    },
    selectedWork: {
      eyebrow: "Selected work",
      title: "Selected case studies",
      description:
        "Queue control, member validation, and registration under concurrency."
    },
    capabilities: {
      eyebrow: "Scope",
      title: "What I cover",
      description: "Where the work usually lives."
    },
    experience: {
      eyebrow: "Currently",
      title: "At Rezolve",
      description:
        "Ticketing, member portals and AWS-backed integrations."
    },
    about: {
      eyebrow: "About",
      title: "How I work",
      description:
        "Discovery, written spec, demo, rollout. End-to-end ownership across frontend, backend, integrations and the AWS box it ships on."
    },
    contact: {
      eyebrow: "Contact",
      title: "Direct contact.",
      description:
        "LinkedIn for roles and tech conversations. GitHub for code."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Ingeniero de software especializado en integraciones y sistemas críticos en producción.",
      description:
        "Diseño y opero plataformas donde la concurrencia, la validación y la fiabilidad impactan directamente en ventas, accesos y flujos operativos.",
      primaryCta: { label: "Ver experiencia", href: "/es/trabajo" },
      secondaryCta: { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin }
    },
    selectedWork: {
      eyebrow: "Trabajo seleccionado",
      title: "Casos seleccionados",
      description:
        "Control de colas, validación de socios y registro bajo concurrencia."
    },
    capabilities: {
      eyebrow: "Alcance",
      title: "Lo que cubro",
      description: "Dónde suele vivir el trabajo."
    },
    experience: {
      eyebrow: "Actualmente",
      title: "En Rezolve",
      description:
        "Ticketing, portales de socios e integraciones sobre AWS."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo trabajo",
      description:
        "Descubrimiento, spec escrita, demo y salida a producción. Propiedad de punta a punta entre frontend, backend, integraciones y la máquina AWS donde corre."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacto directo.",
      description:
        "LinkedIn para roles y conversaciones técnicas. GitHub para código."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "Ticketing and member portals",
      text: "Sale flows, access control and member account journeys anchored to the club's operating reality."
    },
    {
      title: "LALIGA integrations and data validation",
      text: "Two LALIGA internal platforms — ticketing and member management — integrated through APIs I built and own, plus legacy normalization and validated forms that feed a CRM Data Lake in real time."
    },
    {
      title: "WordPress under operational load",
      text: "Custom plugins, WooCommerce flows and frontend integrations where the business team needs to operate the portal without a deploy."
    },
    {
      title: "AWS and end-to-end delivery",
      text: "EC2 (AMIs, scaling), RDS, S3, ACM and Nginx — from staging to release without waiting on a platform team."
    }
  ],
  es: [
    {
      title: "Portales de ticketing y socios",
      text: "Flujos de venta, control de acceso y recorridos de socio anclados a la operativa real del club."
    },
    {
      title: "Integraciones LALIGA y validación de datos",
      text: "Dos plataformas internas de LALIGA — ticketing y gestión de socios — integradas mediante APIs que construí y mantengo, normalización de legacy y formularios validados que alimentan en tiempo real un Data Lake del CRM."
    },
    {
      title: "WordPress bajo carga operativa",
      text: "Plugins a medida, flujos WooCommerce e integraciones frontend donde negocio necesita operar el portal sin esperar a un deploy."
    },
    {
      title: "AWS y entrega de punta a punta",
      text: "EC2 (AMIs, escalado), RDS, S3, ACM y Nginx — de staging a producción sin esperar a un equipo de plataforma."
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
    en: "At Rezolve I run ticketing, member portals and LALIGA integrations for professional football clubs. Two LALIGA internal platforms — ticketing and member management — are integrated through APIs I built and operate.",
    es: "En Rezolve llevo ticketing, portales de socios e integraciones con LALIGA para clubes de fútbol profesional. Dos plataformas internas de LALIGA — ticketing y gestión de socios — integradas mediante APIs que construí y opero."
  },
  notes: {
    en: [
      "Direct client work: discovery, written spec, estimation, demo to stakeholders, and production rollout.",
      "Owned APIs against the two LALIGA internal platforms for member validation, account services and ticketing operations.",
      "AWS, Nginx, SSL and production operations without relying on an internal platform team."
    ],
    es: [
      "Trabajo directo con cliente: descubrimiento, spec escrita, estimación, demo a stakeholders y salida a producción.",
      "APIs propias contra las dos plataformas internas de LALIGA para validación de socios, servicios de cuenta y operación de ticketing.",
      "AWS, Nginx, SSL y operación en producción sin depender de un equipo interno de plataforma."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "Most of what I do at Rezolve has the same shape: a club brings a portal problem — sale collapses, members get blocked, data drifts — and I'm the person who turns that into a written spec, a demo, and a release that survives match day.",
    sections: [
      {
        title: "From the client call to the AWS box",
        body:
          "I take the requirement directly from the client, push back on the parts that won't survive contact with production, write the spec, build it, and put it on the EC2 instance it runs on. No internal handoff between any of those steps."
      },
      {
        title: "Where the work actually lives",
        body:
          "Frontend in WordPress and Next.js, backend in PHP and Node.js, MySQL behind it, and the integration layer against LALIGA's ticketing and member-management platforms — including the APIs I built for that integration. AWS (EC2, RDS, S3, ACM) and Nginx are the engine room."
      },
      {
        title: "Spec first, then code",
        body:
          "I write the spec before I write the code, validate against that spec, and use AI tooling inside that loop where it accelerates writing and exploration — not where it would replace engineering judgment. Releases that survive match day are the test."
      }
    ],
    background:
      "10+ years in tech and product, with a background in commercial operations."
  },
  es: {
    intro:
      "Casi todo lo que hago en Rezolve tiene la misma forma: un club llega con un problema en su portal — la venta cae, los socios se bloquean, los datos derivan — y yo soy quien lo convierte en una spec escrita, una demo y una release que aguanta el día de partido.",
    sections: [
      {
        title: "De la llamada con el cliente a la instancia AWS",
        body:
          "Recojo el requisito directamente del cliente, discuto las partes que no van a aguantar en producción, escribo la spec, lo construyo y lo dejo corriendo en la instancia EC2 donde vive. Sin handoffs internos entre medio."
      },
      {
        title: "Dónde vive el trabajo",
        body:
          "Frontend en WordPress y Next.js, backend en PHP y Node.js, MySQL por detrás y la capa de integración contra las plataformas de ticketing y gestión de socios de LALIGA — incluidas las APIs que construí para integrarlas. AWS (EC2, RDS, S3, ACM) y Nginx son la sala de máquinas."
      },
      {
        title: "Primero la spec, después el código",
        body:
          "Escribo la spec antes que el código, valido contra esa spec y uso herramientas de IA dentro de ese loop donde aceleran la escritura y la exploración — no donde sustituirían el criterio de ingeniería. Las releases que aguantan el día de partido son el examen."
      }
    ],
    background:
      "10+ años en tecnología y producto, con background en operaciones comerciales."
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the consulting brand for some of my client work. The engineering portfolio is the main page; Orbytia covers service enquiries.",
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
        body: "For service enquiries."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es la marca de consultoría para parte de mi trabajo con clientes. El portfolio de ingeniería es la página principal; Orbytia cubre consultas de servicios.",
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
        body: "Para consultas de servicios."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Let's talk",
    description:
      "LinkedIn for role conversations and technical chats. GitHub for code. CV on request."
  },
  es: {
    title: "Hablemos",
    description:
      "LinkedIn para conversaciones sobre roles y temas técnicos. GitHub para código. CV bajo petición."
  }
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "verifiko",
    category: "product",
    featured: false,
    pageRequired: false,
    title: { en: "Verifiko", es: "Verifiko" },
    strapline: {
      en: "URL risk analysis with explainable signals.",
      es: "Análisis de riesgo sobre URLs con señales explicables."
    },
    summary: {
      en: "Own product for analyzing suspicious URLs and exposing technical risk signals in a clear, reviewable, actionable format.",
      es: "Producto propio para analizar URLs sospechosas y mostrar señales técnicas de riesgo de forma clara, revisable y accionable."
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
      es: "Implementé una capa para estabilizar la venta en picos de más de 10.000 usuarios concurrentes."
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
        "The immediate problem was uncontrolled concurrency: timeouts, failed purchases and lost revenue once traffic hit around 10,000 concurrent users.",
        "The hard constraint was an external LALIGA platform sitting inside the purchase flow. It didn't scale under peak load and we couldn't modify it, so any viable solution had to throttle access before reaching it.",
        "The problem was already hitting the business: a commercial account had been lost after exactly this kind of failure during a previous on-sale."
      ],
      es: [
        "El problema inmediato era la concurrencia descontrolada: timeouts, compras fallidas y pérdida de ingresos cuando el tráfico rondaba los 10.000 usuarios concurrentes.",
        "La restricción clave era una plataforma externa de LALIGA dentro del flujo de compra. No escalaba bajo picos y no podíamos modificarla, así que la solución viable tenía que regular el acceso antes de llegar ahí.",
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
        "That gave the ticketing operation a controlled entry point and supported larger commercial accounts afterwards.",
        "The queue protects the external platform but doesn't make it faster — when LALIGA's side slows down, the queue's progress slows with it. We accepted that trade-off explicitly: ordered failure beats uncontrolled collapse."
      ],
      es: [
        "La venta dejó de colapsar alrededor de los 10.000 usuarios concurrentes y pasó a una cola ordenada de unos 60.000 usuarios.",
        "Eso dio a la operativa de ticketing un punto de entrada controlado y ayudó a sostener cuentas comerciales de mayor exigencia después.",
        "La cola protege a la plataforma externa pero no la hace más rápida — cuando el lado de LALIGA va lento, el avance de la cola va lento también. Aceptamos ese trade-off explícitamente: una caída ordenada es mejor que un colapso descontrolado."
      ]
    },
    architecture: {
      en: "User → WordPress landing → Queue-Fair waiting room → LALIGA ticketing platform → confirmation",
      es: "Usuario → landing WordPress → sala de espera Queue-Fair → plataforma de ticketing de LALIGA → confirmación"
    },
    architectureSteps: {
      en: [
        "User",
        "WordPress landing",
        "Queue-Fair waiting room",
        "LALIGA ticketing platform",
        "Confirmation"
      ],
      es: [
        "Usuario",
        "Landing WordPress",
        "Sala de espera Queue-Fair",
        "Plataforma de ticketing de LALIGA",
        "Confirmación"
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
        "This work ran in member portals where users had to validate themselves with their credentials, then update profile data before accessing services or purchase flows."
      ],
      es: [
        "Este trabajo se ejecutó sobre portales de socios donde los usuarios tenían que validarse con sus credenciales, y después actualizar datos de perfil antes de acceder a servicios o flujos de compra."
      ]
    },
    challenge: {
      en: [
        "Legacy data was inconsistent and unreliable. Postal codes and municipalities didn't match, country fields came in several different formats, and the forms had accumulated years of un-normalized values.",
        "Users were getting blocked at login and update because identity and profile fields were often wrong at the source, so the portal had to distinguish between invalid credentials, malformed input and recoverable data issues.",
        "The flow had to validate against the LALIGA member-management platform's API and push corrected data to the CRM Data Lake, so accepting broken input to clean later wasn't an option."
      ],
      es: [
        "Los datos que llegaban desde sistemas legacy eran inconsistentes: códigos postales y municipios no coincidían, los países aparecían en formatos distintos y los formularios acumulaban años de valores sin normalizar.",
        "Además, los usuarios se bloqueaban en login y actualización porque los campos de identidad y perfil muchas veces estaban mal desde origen, así que el portal tenía que distinguir entre credenciales inválidas, input mal formado y problemas de datos recuperables.",
        "El flujo tenía que validar contra la API de la plataforma de gestión de socios de LALIGA y empujar los datos corregidos al Data Lake del CRM, así que no se podía aceptar entrada defectuosa para limpiarla después."
      ]
    },
    approach: {
      en: [
        "I designed login, registration, and mandatory profile update flows with validation on both frontend and backend, including credentials checks before the user could move deeper into the portal.",
        "For normalization, I used explicit rules plus JSON mappings to verify postal code and municipality pairs, and added server-side validation, duplicate controls, indexes, and database restrictions before persisting and forwarding data."
      ],
      es: [
        "Diseñé flujos de login, registro y actualización obligatoria de perfil con validación tanto en frontend como en backend, incluyendo comprobaciones de credenciales antes de dejar avanzar al usuario dentro del portal.",
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
        "That reduced blocked users caused by malformed identity and profile input, and lowered the amount of mismatched records reaching the Data Lake and downstream operational flows.",
        "The trade-off is that the portal now blocks users with malformed legacy records until they update — we kept the path recoverable, but it added friction for accounts that hadn't been touched in years."
      ],
      es: [
        "Los portales dejaron de aceptar datos de perfil inconsistentes tal cual y pasaron a exigir actualizaciones normalizadas antes de continuar.",
        "Eso redujo usuarios bloqueados por input mal formado en identidad y perfil, y bajó la cantidad de registros desajustados que llegaban al Data Lake y a flujos operativos aguas abajo.",
        "El trade-off es que el portal ahora bloquea a usuarios con registros legacy mal formados hasta que actualizan — dejamos el camino recuperable, pero añadió fricción para cuentas que llevaban años sin tocarse."
      ]
    },
    architecture: {
      en: "User → WordPress portal → credentials → LALIGA member-management platform\n                     ↓\n          Local validation (frontend + backend + DB constraints)\n                     ↓\n                CRM Data Lake",
      es: "Usuario → portal WordPress → credenciales → plataforma de gestión de socios de LALIGA\n                          ↓\n              Validación local (frontend + backend + restricciones de BBDD)\n                          ↓\n                     Data Lake del CRM"
    },
    architectureSteps: {
      en: [
        "User",
        "WordPress portal",
        "Credentials",
        "LALIGA member-management platform",
        "Local validation (frontend + backend + DB constraints)",
        "CRM Data Lake"
      ],
      es: [
        "Usuario",
        "Portal WordPress",
        "Credenciales",
        "Plataforma de gestión de socios de LALIGA",
        "Validación local (frontend + backend + restricciones de BBDD)",
        "Data Lake del CRM"
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
      es: "Diseñé flujos de registro capaces de soportar alta concurrencia, prevenir duplicados y asegurar escrituras consistentes en producción."
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
        "I enforced validation on both sides of the request, deduplication via DB constraints, idempotency on the write path, and rate limiting at entry — so concurrent and repeated submissions wouldn't create double entries, but legitimate retries by the same user still went through.",
        "The goal was to reject bad registrations as early as possible, keep persistence rules strict, and leave enough signal in production to debug incidents quickly."
      ],
      es: [
        "Implementé validación a ambos lados de la petición, deduplicación con restricciones de BBDD, idempotencia en el camino de escritura y rate limiting en la entrada — de forma que los envíos concurrentes y repetidos no generaran entradas duplicadas, pero los reintentos legítimos del mismo usuario siguieran funcionando.",
        "El objetivo era rechazar registros malos cuanto antes, mantener estrictas las reglas de persistencia y dejar suficiente señal en producción para depurar incidentes rápido."
      ]
    },
    highlights: {
      en: [
        "Synchronizing frontend checks with backend validation so the same record could not pass in one layer and fail in another.",
        "DB constraints and indexes for duplicate prevention, combined with idempotent writes so retries stayed safe.",
        "Handling traffic spikes without opening the door to repeated entries, fraud patterns, or partial writes."
      ],
      es: [
        "Sincronizar comprobaciones en frontend con validación en backend para que un mismo registro no pasara en una capa y fallara en otra.",
        "Restricciones e índices de BBDD para prevenir duplicados, junto con escrituras idempotentes para que los reintentos siguieran siendo seguros.",
        "Soportar picos de concurrencia sin abrir la puerta a entradas repetidas, patrones de fraude o escrituras parciales."
      ]
    },
    outcome: {
      en: [
        "The draw flows moved from ad-hoc validation to controlled registration paths with deduplication, idempotent writes, rate limiting, and clearer operational signals.",
        "That reduced inconsistent records, repeated entries, and manual cleanup during high-demand windows, while keeping legitimate retries from the same user working."
      ],
      es: [
        "Los flujos de sorteos pasaron de validación ad hoc a caminos de registro controlados con deduplicación, escrituras idempotentes, rate limiting y señales operativas más claras.",
        "Eso redujo registros inconsistentes, entradas repetidas y limpieza manual durante ventanas de alta demanda, manteniendo a la vez los reintentos legítimos del mismo usuario funcionando."
      ]
    },
    publicLinks: []
  },
  {
    slug: "orbytia",
    category: "ecosystem",
    featured: false,
    pageRequired: false,
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
