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
    en: "Software engineer and product engineer building reliable web platforms, integrations and production systems.",
    es: "Software engineer y product engineer centrado en plataformas web fiables, integraciones y sistemas en producción."
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
  "client-work": { en: "Client Work", es: "Proyectos para clientes" },
  lab: { en: "Lab", es: "Lab" },
  ecosystem: { en: "Public Setup", es: "Ecosistema" }
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
    { label: "Orbytia", href: "/es/orbytia" },
    { label: "Contacto", href: "/es/contacto" }
  ]
} as const;

export const homeContent = {
  en: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "I build and maintain platforms, integrations and backends for real operations.",
      description:
        "APIs, payments, user validation, WordPress and full-stack delivery for products already live in production.",
      primaryCta: { label: "See work", href: "/work" },
      secondaryCta: { label: "Contact me", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Real client work and production products.",
      description:
        "Each case shows the project context, the kind of platform involved and the part of the work I handled."
    },
    capabilities: {
      eyebrow: "What I Build",
      title: "Platforms, integrations and backend work built for reliability.",
      description:
        "I build systems that connect services, support operations and stay maintainable in production."
    },
    experience: {
      eyebrow: "Professional Experience",
      title: "Production systems in high-traffic environments.",
      description:
        "I currently work on systems where payments, ticketing, user validation and data consistency cannot fail."
    },
    ecosystem: {
      eyebrow: "Public Products",
      title: "Product work alongside client projects.",
      description:
        "I work under my own name. Orbytia is the label for my public product work. Verifiko is the live system in that group."
    },
    about: {
      eyebrow: "About",
      title: "I build software that has to work in production.",
      description:
        "I combine engineering with business context, so requirements turn into clear, buildable systems."
    },
    contact: {
      eyebrow: "Contact",
      title: "Need help with a platform, integration or backend project?",
      description:
        "Use the links below if you need delivery, maintenance or product engineering for software already in use."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Software fiable para integraciones, plataformas transaccionales y sistemas críticos de negocio.",
      description:
        "Construyo y mantengo sistemas donde la fiabilidad forma parte del trabajo. Eso incluye APIs, ticketing y pagos, flujos de validación de usuario, WordPress avanzado e implementación full-stack para plataformas de negocio en producción.",
      primaryCta: { label: "Ver trabajo", href: "/es/trabajo" },
      secondaryCta: { label: "Contactar", href: "/es/contacto" }
    },
    selectedWork: {
      eyebrow: "Trabajo destacado",
      title: "Productos, proyectos para clientes y trabajo técnico con alcance claro y autoría real.",
      description:
        "Cada caso se presenta con responsabilidad real, visibilidad pública y la categoría adecuada: producto, proyectos para clientes, ecosistema o lab."
    },
    capabilities: {
      eyebrow: "Qué construyo",
      title: "Software orientado a integraciones, operaciones y ejecución técnica fiable.",
      description:
        "No se trata de enumerar tecnologías, sino de convertir requisitos de negocio en software que responda bien cuando se usa de verdad."
    },
    experience: {
      eyebrow: "Experiencia profesional",
      title: "Trabajo en producción en entornos exigentes y de alto tráfico.",
      description:
        "Además de mis propios productos, trabajo sobre sistemas donde la consistencia de datos, los flujos de validación, la fiabilidad transaccional y la calidad de integración forman parte del trabajo diario."
    },
    ecosystem: {
      eyebrow: "Ecosistema de marca",
      title: "Una marca personal, un ecosistema técnico y un producto principal.",
      description:
        "Hernán Bonavota es la identidad principal. Orbytia da estructura al conjunto. Verifiko es el producto más visible dentro de ese sistema."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Un perfil técnico definido por producto, negocio y capacidad de ejecución.",
      description:
        "Mi recorrido entre software, negocio, finanzas y comunicación me ayuda a conectar la implementación con necesidades reales, en lugar de tratar el código como algo aislado."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Disponible para conversaciones serias sobre productos, plataformas e integraciones.",
      description:
        "Si el trabajo implica sistemas en producción, plataformas de negocio o software con muchas integraciones, los canales públicos de abajo son la vía adecuada para iniciar conversación."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "API and integration work",
      text: "Third-party integrations, internal tools and business workflows built to stay maintainable."
    },
    {
      title: "Transactional platforms",
      text: "Payments, validation, user access and data flows that need to work under load."
    },
    {
      title: "Advanced WordPress builds",
      text: "Custom WordPress builds for content-heavy businesses that need control and maintenance."
    },
    {
      title: "Full-stack delivery",
      text: "Frontend, backend and workflow logic for platforms used by real teams."
    }
  ],
  es: [
    {
      title: "Sistemas intensivos en integraciones",
      text: "Software que conecta servicios, APIs y flujos operativos donde la fiabilidad importa más que la novedad."
    },
    {
      title: "Plataformas transaccionales",
      text: "Implementación frontend y backend para plataformas que dependen de validaciones, lógica de pagos, consistencia de datos y recorridos de usuario fiables."
    },
    {
      title: "WordPress avanzado",
      text: "Trabajo CMS estructurado, implementación personalizada, arquitectura editorial y sistemas orientados a negocio que deben mantenerse bien en el tiempo."
    },
    {
      title: "Ejecución orientada a negocio",
      text: "Una forma práctica de construir software conectando requisitos de negocio, decisiones de producto y ejecución técnica."
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
    en: "At Rezolve, I work on production platforms used by professional football clubs in LALIGA. The work includes ticketing, payments, user validation and API-driven backend flows.",
    es: "En Rezolve trabajo sobre sistemas en producción utilizados por clubes de fútbol profesional dentro de contextos conectados al ecosistema LALIGA. El trabajo incluye plataformas de ticketing, integraciones de pago, flujos de validación de usuario, consistencia de datos y sistemas de negocio conectados por APIs."
  },
  notes: {
    en: [
      "High-traffic systems with live transactional flows.",
      "Work tied to club operations, ticket sales and API-connected platforms.",
      "Engineering decisions shaped by real business and operational needs."
    ],
    es: [
      "Contextos transaccionales de alto tráfico donde la fiabilidad operativa importa.",
      "Trabajo vinculado a entornos deportivos profesionales, operaciones de clubes y lógica de plataforma conectada por APIs.",
      "Un perfil técnico reforzado por experiencia previa en negocio, finanzas y comunicación."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "I help companies build and maintain software that supports daily operations, not just demos.",
    sections: [
      {
        title: "How I work",
        body:
          "I start with the business problem, reduce ambiguity early and build for maintainability, reliability and real usage."
      },
      {
        title: "What I build",
        body:
          "Most of my work sits around integrations, APIs, transactional flows, advanced WordPress and full-stack platform delivery."
      },
      {
        title: "Why clients hire me",
        body:
          "I can move between product needs, technical decisions and operational constraints without losing sight of what has to ship."
      }
    ]
  },
  es: {
    intro:
      "Trabajo como software engineer y product engineer centrado en software fiable para plataformas orientadas a negocio, integraciones y sistemas en producción.",
    sections: [
      {
        title: "Cómo entiendo el software",
        body:
          "Me importan la estructura, la claridad operativa y la fiabilidad a largo plazo. Eso suele implicar entender primero la necesidad de negocio, reducir ambigüedad desde el principio y construir software que pueda mantenerse bajo uso real."
      },
      {
        title: "En qué trabajo",
        body:
          "Mi trabajo diario se mueve entre integraciones, APIs, flujos transaccionales, WordPress avanzado y delivery frontend + backend. El mejor encaje suele estar en plataformas que necesitan ejecución fiable, no un prototipo llamativo."
      },
      {
        title: "Qué aporto además de código",
        body:
          "Mi recorrido previo por negocio, finanzas y comunicación me ayuda a conectar requisitos, decisiones técnicas y lo que una plataforma realmente necesita sostener en la práctica."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the name I use to group public products and experiments that sit next to my client work.",
    sections: [
      {
        title: "What it is",
        body:
          "It is not an agency or a vague studio label. It is a simple way to organize public work so products do not look like unrelated portfolio items."
      },
      {
        title: "How it fits my work",
        body:
          "I still work under my own name. Orbytia only groups the public products and experiments that need their own context."
      },
      {
        title: "Why it helps",
        body:
          "It makes products like Verifiko easier to understand because visitors can see where they belong and what kind of work they represent."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es la capa que utilizo para conectar productos, experimentos e iniciativas técnicas con una estructura más clara de la que permite un portfolio personal genérico.",
    sections: [
      {
        title: "Por qué existe",
        body:
          "Su objetivo es dar coherencia a trabajo público que, de otro modo, aparecería como una colección de proyectos desconectados. Crea espacio para productos, experimentos y dirección técnica bajo una misma capa."
      },
      {
        title: "Cómo se relaciona con mi marca personal",
        body:
          "Hernán Bonavota sigue siendo la identidad profesional principal. Orbytia no la sustituye. La complementa al ordenar lo que construyo en público, especialmente cuando los productos necesitan una relación de ecosistema más clara."
      },
      {
        title: "Por qué importa",
        body:
          "Permite presentar Verifiko y futuras iniciativas con mejor contexto, sin forzar que cada producto aparezca como un elemento aislado dentro de una cuadrícula típica de portfolio."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Public links for project enquiries and technical conversations.",
    description:
      "If you need help with a product, platform or integration, start with one of the public channels below."
  },
  es: {
    title: "Canales públicos para conversaciones serias sobre producto y software.",
    description:
      "Esta página se mantiene deliberadamente simple. Apunta solo a los canales públicos que tienen sentido para contacto profesional, conversaciones de producto y colaboración técnica."
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
      en: "Document verification product for workflows where trust matters.",
      es: "Un producto orientado a verificación desarrollado bajo el paraguas de Orbytia."
    },
    summary: {
      en: "A product built to make verification steps clearer, faster and easier to trust in real workflows.",
      es: "Un caso de producto público centrado en confianza, validación y claridad operativa, presentado como trabajo de producto y no como una demo técnica."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "Verifiko shows the kind of work I want to do more of: software that supports verification, reduces manual friction and gives users a clear process."
      ],
      es: [
        "Verifiko es el producto público más claro del portfolio. Representa el tipo de trabajo con el que quiero estar asociado: pensamiento de producto, enfoque operativo claro y software construido alrededor de flujos reales."
      ]
    },
    challenge: {
      en: [
        "The product has to make a sensitive step feel simple and trustworthy. If the flow is unclear, users hesitate and operations slow down."
      ],
      es: [
        "El reto es comunicar un contexto de producto de forma convincente: no solo cómo se ve la interfaz, sino por qué la verificación, la estructura y la confianza deben tratarse como parte del propio producto."
      ]
    },
    approach: {
      en: [
        "I focused on clear steps, product decisions that build trust and implementation that supports reliable day-to-day use, not just a polished interface."
      ],
      es: [
        "El caso se plantea desde la intención de producto, el rol, la estructura del flujo y las decisiones técnicas que sostienen la fiabilidad. La tecnología importa, pero la página se mantiene anclada al razonamiento de producto."
      ]
    },
    highlights: {
      en: [
        "Clear verification flow.",
        "Trust-focused product decisions.",
        "Built as a real public product."
      ],
      es: [
        "Narrativa de producto antes que narrativa de stack.",
        "Lógica operativa y claridad de flujo.",
        "Relación visible con Orbytia."
      ]
    },
    outcome: {
      en: [
        "The result is a public product case that shows how I approach software tied to trust, validation and real operations."
      ],
      es: [
        "Verifiko debe leerse como un producto público creíble, con una lógica operativa coherente, no como un concepto sobredimensionado o relleno de portfolio."
      ]
    },
    publicLinks: [
      { label: "Verifiko", href: siteConfig.approvedLinks.verifiko },
      { label: "Orbytia", href: siteConfig.approvedLinks.orbytia }
    ]
  },
  {
    slug: "orbytia",
    category: "ecosystem",
    featured: true,
    pageRequired: true,
    title: { en: "Orbytia", es: "Orbytia" },
    strapline: {
      en: "Public brand structure for products and experiments.",
      es: "La capa de ecosistema que conecta productos públicos, experimentos y dirección técnica."
    },
    summary: {
      en: "A simple page that shows how products and experiments connect, so the portfolio does not feel like a list of unrelated links.",
      es: "Una capa técnica y editorial que da estructura al trabajo público sin aparentar ser algo más grande de lo que realmente es."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "Orbytia helps explain how my public products relate to each other. It gives context to the work without pretending to be a large company."
      ],
      es: [
        "Orbytia no se presenta como branding decorativo. Su función es crear coherencia entre productos públicos, experimentos y el portfolio personal."
      ]
    },
    challenge: {
      en: [
        "Without a clear structure, products like Verifiko look isolated and harder to understand."
      ],
      es: [
        "El principal reto es describir Orbytia con honestidad: útil como estructura, real como capa pública, pero sin inflar su escala ni convertirla en lenguaje vago de estudio."
      ]
    },
    approach: {
      en: [
        "I kept the language direct: Orbytia exists to group public work, show relationships between products and make the portfolio easier to navigate."
      ],
      es: [
        "La página se centra en propósito, relación entre piezas y alcance actual. Explica por qué existe Orbytia, qué sostiene hoy y por qué ese marco ayuda a que productos como Verifiko tengan más sentido."
      ]
    },
    highlights: {
      en: [
        "Clear purpose.",
        "Direct link to my personal brand.",
        "Useful context for public products."
      ],
      es: [
        "Jerarquía de marca clara.",
        "Vínculo directo con la marca personal.",
        "Conexión explícita con Verifiko."
      ]
    },
    outcome: {
      en: [
        "The page makes the public work easier to understand and keeps the portfolio cleaner for potential clients."
      ],
      es: [
        "Orbytia debe sentirse creíble, útil y apoyada en trabajo real, no en teatralidad de marca."
      ]
    },
    publicLinks: [{ label: "Orbytia", href: siteConfig.approvedLinks.orbytia }]
  },
  {
    slug: "proyectar-sl",
    category: "client-work",
    featured: true,
    pageRequired: true,
    title: { en: "Proyectar SL", es: "Proyectar SL" },
    strapline: {
      en: "Client platform work for daily business operations.",
      es: "Trabajo de plataforma para cliente presentado con claridad, contención y respeto por el alcance real."
    },
    summary: {
      en: "A client platform built to support day-to-day work with pages and flows that are easy to use and maintain.",
      es: "Un caso de plataforma orientada a negocio centrado en delivery práctico, estructura mantenible y un tipo de implementación que acompaña la operación del día a día."
    },
    role: {
      en: "Full-stack Developer / Web Platform Engineer",
      es: "Desarrollador full-stack / Web Platform Engineer"
    },
    overview: {
      en: [
        "This case shows client work in a real business context, where the platform needs to support operations instead of just looking good."
      ],
      es: [
        "Este caso se presenta como un proyecto para cliente con alcance real. Es valioso porque muestra ejecución, estructura y delivery práctico sin difuminar la línea entre autoría técnica y propiedad del cliente."
      ]
    },
    challenge: {
      en: [
        "The platform had to be clear for users, practical for the business and maintainable over time."
      ],
      es: [
        "El reto es explicar trabajo de ingeniería y plataforma con sentido manteniendo precisión sobre qué me corresponde como implementación y qué pertenece al cliente como negocio y propiedad del producto."
      ]
    },
    approach: {
      en: [
        "I focused on platform structure, content organization, frontend and backend delivery, and decisions that made the system easier to run."
      ],
      es: [
        "La narrativa se centra en la estructura de la plataforma, la arquitectura de información, el delivery frontend y backend, y cualquier decisión de CMS o integración que mejorara la mantenibilidad."
      ]
    },
    highlights: {
      en: [
        "Built for daily use.",
        "Clear information structure.",
        "Maintainable delivery."
      ],
      es: [
        "Delivery profesional.",
        "Estructura UX orientada a negocio.",
        "Tratamiento respetuoso de proyectos para clientes."
      ]
    },
    outcome: {
      en: [
        "The result is a client case that shows dependable delivery for a business platform in real use."
      ],
      es: [
        "El caso debe leerse como trabajo creíble de delivery de plataforma: útil, concreto y profesionalmente presentado."
      ]
    },
    publicLinks: [{ label: "Proyectar SL", href: siteConfig.approvedLinks.proyectar }]
  },
  {
    slug: "tu-proximo-seguro",
    category: "client-work",
    featured: true,
    pageRequired: true,
    title: { en: "Tu Próximo Seguro", es: "Tu Próximo Seguro" },
    strapline: {
      en: "Client website built to improve trust and clarity.",
      es: "Proyecto para cliente con foco en confianza, claridad y delivery web orientado a negocio."
    },
    summary: {
      en: "A public business website designed to explain the offer quickly and reduce hesitation before contact.",
      es: "Un caso orientado a cliente centrado en estructura de información, UX orientada a confianza e implementación práctica para una web pública de negocio."
    },
    role: {
      en: "Web / Product Engineer",
      es: "Web / Product Engineer"
    },
    overview: {
      en: [
        "This case shows how clear pages and trust-focused UX help a public website convert better in a business context."
      ],
      es: [
        "Este caso es valioso porque muestra cómo la estructura, la claridad y la confianza afectan a una plataforma pública donde el usuario necesita entender una propuesta con rapidez y seguridad."
      ]
    },
    challenge: {
      en: [
        "Users needed to understand the offer fast and feel confident enough to take the next step."
      ],
      es: [
        "El reto editorial es mostrar una implementación cuidada y decisiones con criterio sin exagerar un impacto de negocio que pertenece al cliente ni apropiarse de sus resultados."
      ]
    },
    approach: {
      en: [
        "I worked on content layout, interface decisions and frontend delivery that made the site easier to understand and more credible."
      ],
      es: [
        "El caso se centra en una UX orientada a confianza, estructura de contenido, decisiones frontend prácticas y un tipo de delivery web que apoya la comunicación de negocio, no solo el acabado visual."
      ]
    },
    highlights: {
      en: [
        "Clear offer presentation.",
        "Trust-focused UX.",
        "Built for real business communication."
      ],
      es: [
        "Arquitectura de información.",
        "Decisiones de interfaz orientadas a confianza.",
        "Contexto práctico de conversión."
      ]
    },
    outcome: {
      en: [
        "The finished case shows practical web delivery where clarity directly supports conversion."
      ],
      es: [
        "La página final debe sentirse aterrizada, fiable y profesionalmente contenida."
      ]
    },
    publicLinks: [
      { label: "Tu Próximo Seguro", href: siteConfig.approvedLinks.tuProximoSeguro }
    ]
  },
  {
    slug: "lunetia",
    category: "lab",
    featured: true,
    pageRequired: true,
    title: { en: "Lunetia", es: "Lunetia" },
    strapline: {
      en: "Early-stage product exploration presented honestly.",
      es: "Una iniciativa experimental presentada con honestidad y disciplina editorial."
    },
    summary: {
      en: "An experimental project used to test ideas, interface directions and early product concepts without presenting it as a finished business.",
      es: "Una iniciativa de laboratorio utilizada para probar ideas, direcciones de interfaz y enfoque de producto sin fingir ser un producto comercial plenamente consolidado."
    },
    role: {
      en: "Concept / Experimental Builder",
      es: "Concept / Experimental Builder"
    },
    overview: {
      en: [
        "Lunetia stays in the portfolio as lab work. Its value is in how ideas are explored and shaped at an early stage."
      ],
      es: [
        "Lunetia debe presentarse con claridad como trabajo experimental. Su valor viene de la exploración, del enfoque y del aprendizaje, no de aparentar más madurez de la que hoy tiene."
      ]
    },
    challenge: {
      en: [
        "The challenge was to make the experiment useful to a client or recruiter without overselling its maturity."
      ],
      es: [
        "El reto es mantener una narrativa honesta y, al mismo tiempo, hacer que el caso sea útil dentro del portfolio como evidencia de curiosidad, criterio y pensamiento de producto en fase temprana."
      ]
    },
    approach: {
      en: [
        "I kept the scope simple: early exploration, interface direction and room to test ideas before committing to a full product."
      ],
      es: [
        "La página debe enfatizar exploración, criterio de interfaz y capacidad para dar forma a ideas en fase temprana sin venderlas de más."
      ]
    },
    highlights: {
      en: [
        "Early-stage exploration.",
        "Interface direction.",
        "Honest scope."
      ],
      es: [
        "Honestidad editorial.",
        "Enfoque conceptual.",
        "Espacio para crecer."
      ]
    },
    outcome: {
      en: [
        "It shows how I explore and shape early ideas without pretending they are more mature than they are."
      ],
      es: [
        "Lunetia debe reforzar el portfolio como caso de laboratorio con criterio, no debilitarlo sonando como un negocio ya terminado."
      ]
    },
    publicLinks: [{ label: "Lunetia", href: siteConfig.approvedLinks.lunetia }]
  }
];
