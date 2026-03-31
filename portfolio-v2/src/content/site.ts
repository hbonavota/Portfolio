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
    en: "Software engineer focused on platforms, integrations, backend systems and product development.",
    es: "Ingeniero de software enfocado en plataformas, integraciones, sistemas backend y desarrollo de producto."
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
  ecosystem: { en: "Consulting Line", es: "Línea de consultoría" }
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
      title: "Software engineer for platforms, integrations and backend systems.",
      description:
        "I build and improve software that has to hold up in real operations.",
      primaryCta: { label: "See work", href: "/work" },
      secondaryCta: { label: "Contact", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Work grounded in real operations.",
      description:
        "Short case studies focused on the project, the need and my role."
    },
    capabilities: {
      eyebrow: "What I Build",
      title: "What I build most often.",
      description:
        "Platforms, integrations, operational tools and websites that have to work."
    },
    experience: {
      eyebrow: "Current Work",
      title: "Current work in production.",
      description:
        "Today I work on ticketing, payments, validation and backend flows."
    },
    ecosystem: {
      eyebrow: "Professional Context",
      title: "Where Orbytia fits.",
      description:
        "This portfolio is my main professional profile. Orbytia appears here only as the separate line for consulting, automation, applied AI and related work."
    },
    about: {
      eyebrow: "About",
      title: "How I work.",
      description:
        "Technical work with business sense and clear communication."
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to roles, collaborations and technical conversations.",
      description:
        "Best for recruiters, hiring managers or teams evaluating fit. Orbytia stays as the separate route for service enquiries."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Ingeniero de software para plataformas, integraciones y sistemas backend.",
      description:
        "Construyo y mejoro software que tiene que responder bien en operaciones reales.",
      primaryCta: { label: "Ver trabajo", href: "/es/trabajo" },
      secondaryCta: { label: "Contacto", href: "/es/contacto" }
    },
    selectedWork: {
      eyebrow: "Trabajo destacado",
      title: "Trabajo con base en operaciones reales.",
      description:
        "Casos breves centrados en el proyecto, la necesidad y mi papel."
    },
    capabilities: {
      eyebrow: "Qué construyo",
      title: "Lo que construyo con más frecuencia.",
      description:
        "Plataformas, integraciones, herramientas operativas y webs que tienen que funcionar."
    },
    experience: {
      eyebrow: "Trabajo actual",
      title: "Trabajo actual en producción.",
      description:
        "Hoy trabajo con ticketing, pagos, validación y flujos backend."
    },
    ecosystem: {
      eyebrow: "Contexto profesional",
      title: "Dónde encaja Orbytia.",
      description:
        "Este portfolio es mi perfil profesional principal. Orbytia aparece aquí solo como línea separada para consultoría, automatización, IA aplicada y trabajo relacionado."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo trabajo.",
      description:
        "Trabajo técnico con sentido de negocio y comunicación clara."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Abierto a oportunidades, colaboraciones y conversaciones técnicas.",
      description:
        "Es la mejor vía para recruiters, hiring managers o equipos que quieran valorar encaje. Orbytia queda como canal separado para consultas de servicios."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "Integrations and APIs",
      text: "APIs, third-party services and internal flows."
    },
    {
      title: "Transactional platforms",
      text: "Payments, validation and user access."
    },
    {
      title: "Advanced WordPress",
      text: "Custom WordPress for teams that need control."
    },
    {
      title: "Backend and full-stack development",
      text: "Frontend and backend connected to real operations."
    }
  ],
  es: [
    {
      title: "Integraciones y APIs",
      text: "APIs, servicios externos y flujos internos."
    },
    {
      title: "Plataformas transaccionales",
      text: "Pagos, validaciones y acceso de usuarios."
    },
    {
      title: "WordPress avanzado",
      text: "WordPress a medida para equipos que necesitan control."
    },
    {
      title: "Backend y full-stack",
      text: "Frontend y backend conectados a operaciones reales."
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
    en: "At Rezolve I work on ticketing, payments, validation and backend flows in high-traffic production systems tied to day-to-day club operations.",
    es: "En Rezolve trabajo con ticketing, pagos, validación y flujos backend sobre sistemas en producción de alto tráfico ligados a la operativa diaria del club."
  },
  notes: {
    en: [
      "High-traffic transactional systems.",
      "Work tied to day-to-day club operations."
    ],
    es: [
      "Sistemas transaccionales de alto tráfico.",
      "Trabajo ligado a la operativa diaria de un club."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "I usually add the most value when a team needs someone who can understand the problem, bring structure to it and move execution forward.",
    sections: [
      {
        title: "How I work",
        body:
          "I listen first, ask the right questions and turn vague needs into concrete steps."
      },
      {
        title: "What teams value",
        body:
          "Technical judgment, product sense and communication that works with non-technical people too."
      },
      {
        title: "What that produces",
        body:
          "That usually leads to clearer scope, better decisions and software that is easier to ship and maintain."
      }
    ]
  },
  es: {
    intro:
      "Suelo aportar más valor cuando un equipo necesita a alguien que entienda el problema, le dé estructura y ayude a empujar la ejecución.",
    sections: [
      {
        title: "Cómo trabajo",
        body:
          "Primero escucho, hago las preguntas correctas y convierto necesidades difusas en pasos concretos."
      },
      {
        title: "Qué valoran los equipos",
        body:
          "Criterio técnico, visión de producto y una comunicación que también funciona con perfiles no técnicos."
      },
      {
        title: "Lo que eso produce",
        body:
          "Eso suele traducirse en mejor enfoque, mejores decisiones y software más fácil de lanzar y mantener."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the separate line for consulting, software, automation and applied AI for clients.",
    sections: [
      {
        title: "What it is",
        body:
          "A separate service line, not the main focus of this portfolio."
      },
      {
        title: "How it fits",
        body:
          "My main professional identity here is still Hernán Bonavota."
      },
      {
        title: "Why it appears here",
        body:
          "It helps explain the consulting context around part of my work and the initiatives that sit next to my personal profile."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es la línea separada para consultoría, software, automatización e IA aplicada para clientes.",
    sections: [
      {
        title: "Qué es",
        body:
          "Una línea de servicios separada, no el foco principal de este portfolio."
      },
      {
        title: "Cómo encaja",
        body:
          "Mi identidad profesional principal aquí sigue siendo Hernán Bonavota."
      },
      {
        title: "Por qué aparece aquí",
        body:
          "Ayuda a explicar el contexto de consultoría alrededor de parte de mi trabajo y las iniciativas que conviven con mi perfil personal."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Open to roles, collaborations and technical conversations.",
    description:
      "For roles, collaborations or technical conversations, LinkedIn is the best first contact. Orbytia is only for service enquiries."
  },
  es: {
    title: "Abierto a oportunidades, colaboraciones y conversaciones técnicas.",
    description:
      "Para oportunidades, colaboraciones o conversaciones técnicas, puedes contactarme por LinkedIn como mejor contacto. Si quieres que anilicemos tu proyecto ingresa en Orbytia."
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
      en: "Cybersecurity product for analyzing suspicious URLs and surfacing risk signals.",
      es: "Producto de ciberseguridad para analizar URLs sospechosas y mostrar señales de riesgo."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "A product built to help users review suspicious URLs faster and with more clarity."
      ],
      es: [
        "Un producto pensado para revisar URLs sospechosas con más rapidez y más claridad."
      ]
    },
    challenge: {
      en: [
        "The product had to make technical checks easier to understand."
      ],
      es: [
        "El producto tenía que hacer comprensibles unas comprobaciones técnicas."
      ]
    },
    approach: {
      en: [
        "I focused on clarity, analysis signals and backend logic."
      ],
      es: [
        "Lo enfoqué en claridad, señales de análisis y lógica backend."
      ]
    },
    highlights: {
      en: [
        "URL analysis.",
        "Risk signals."
      ],
      es: [
        "Análisis de URLs.",
        "Señales de riesgo."
      ]
    },
    outcome: {
      en: [
        "Shows product work around cybersecurity, backend logic and clarity."
      ],
      es: [
        "Muestra trabajo de producto en ciberseguridad, lógica backend y claridad."
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
      en: "Separate consulting line.",
      es: "Línea separada de consultoría."
    },
    summary: {
      en: "Separate line for consulting, software, automation and applied AI for clients.",
      es: "Línea separada para consultoría, software, automatización e IA aplicada para clientes."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "A separate line that groups service work and related initiatives without replacing my personal professional profile."
      ],
      es: [
        "Una línea separada que agrupa servicios e iniciativas relacionadas sin sustituir mi perfil profesional personal."
      ]
    },
    challenge: {
      en: [
        "It had to explain the service side clearly without diluting the personal portfolio."
      ],
      es: [
        "Tenía que explicar la parte de servicios con claridad sin diluir el portfolio personal."
      ]
    },
    approach: {
      en: [
        "I kept Hernán Bonavota as the main profile and positioned Orbytia as complementary context."
      ],
      es: [
        "Mantuve a Hernán Bonavota como perfil principal y situé Orbytia como contexto complementario."
      ]
    },
    highlights: {
      en: [
        "Software consulting.",
        "Automation and AI."
      ],
      es: [
        "Consultoría de software.",
        "Automatización e IA."
      ]
    },
    outcome: {
      en: [
        "Shows the consulting context around part of my work without making it the main story."
      ],
      es: [
        "Muestra el contexto de consultoría alrededor de parte de mi trabajo sin convertirlo en la historia principal."
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
      en: "Business website and quoting flow.",
      es: "Web corporativa y flujo de presupuestos."
    },
    summary: {
      en: "Company website with a custom online quoting flow for renovation work.",
      es: "Web corporativa con un flujo de presupuestos online a medida para trabajos de reforma."
    },
    role: {
      en: "Full-stack Developer / Web Platform Engineer",
      es: "Desarrollador full-stack / Web Platform Engineer"
    },
    overview: {
      en: [
        "A business website with a quotation flow built into the experience."
      ],
      es: [
        "Una web de negocio con un sistema de presupuestos integrado en la experiencia."
      ]
    },
    challenge: {
      en: [
        "The quoting flow had to be clear for users and manageable for the business."
      ],
      es: [
        "El flujo de presupuesto tenía que ser claro para el usuario y fácil de gestionar para el negocio."
      ]
    },
    approach: {
      en: [
        "I worked on the website, the quotation flow and the technical implementation behind it."
      ],
      es: [
        "Trabajé la web, el flujo de presupuesto y la implementación técnica que lo sostenía."
      ]
    },
    highlights: {
      en: [
        "Online quotes.",
        "Business website."
      ],
      es: [
        "Presupuesto online.",
        "Web de negocio."
      ]
    },
    outcome: {
      en: [
        "Shows practical execution for a business website tied to a real process."
      ],
      es: [
        "Muestra una ejecución práctica en una web de negocio ligada a un proceso real."
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
      en: "Lead generation website.",
      es: "Web de captación."
    },
    summary: {
      en: "Lead-generation website for an insurance advisor, built to generate trust and make first contact easier.",
      es: "Web de captación para una asesora de seguros, planteada para generar confianza y facilitar el primer contacto."
    },
    role: {
      en: "Web / Product Engineer",
      es: "Web / Product Engineer"
    },
    overview: {
      en: [
        "A business website where trust and clarity directly affect enquiries."
      ],
      es: [
        "Una web de negocio donde la confianza y la claridad afectan directamente al contacto."
      ]
    },
    challenge: {
      en: [
        "The offer had to be easy to understand and easy to contact."
      ],
      es: [
        "La propuesta tenía que entenderse rápido y facilitar el contacto."
      ]
    },
    approach: {
      en: [
        "I focused on content structure, trust signals and a straightforward frontend."
      ],
      es: [
        "Lo enfoqué en estructura de contenido, señales de confianza y un frontend directo."
      ]
    },
    highlights: {
      en: [
        "Lead capture.",
        "Trust signals."
      ],
      es: [
        "Captación de leads.",
        "Señales de confianza."
      ]
    },
    outcome: {
      en: [
        "Shows web work built to support lead generation and first contact."
      ],
      es: [
        "Muestra un trabajo web pensado para apoyar la captación de leads y el primer contacto."
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
      en: "Experimental work.",
      es: "Trabajo experimental."
    },
    summary: {
      en: "Early product exploration kept clearly framed as lab work.",
      es: "Exploración de producto en fase temprana, presentada claramente como trabajo de laboratorio."
    },
    role: {
      en: "Concept / Experimental Builder",
      es: "Concept / Experimental Builder"
    },
    overview: {
      en: [
        "Early exploration, not a finished product."
      ],
      es: [
        "Exploración temprana, no un producto terminado."
      ]
    },
    challenge: {
      en: [
        "It needed to stay honest about its stage."
      ],
      es: [
        "Tenía que ser honesto con su etapa."
      ]
    },
    approach: {
      en: [
        "I kept the scope small and exploratory."
      ],
      es: [
        "Mantuve un alcance pequeño y exploratorio."
      ]
    },
    highlights: {
      en: [
        "Early exploration.",
        "Honest scope."
      ],
      es: [
        "Exploración temprana.",
        "Alcance honesto."
      ]
    },
    outcome: {
      en: [
        "Shows how I shape ideas at an early stage."
      ],
      es: [
        "Muestra cómo doy forma a ideas en fase temprana."
      ]
    },
    publicLinks: [{ label: "Lunetia", href: siteConfig.approvedLinks.lunetia }]
  }
];
