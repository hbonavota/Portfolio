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
    en: "Software engineer for platforms, integrations, backend and product work.",
    es: "Desarrollador de software para plataformas, integraciones, backend y trabajo de producto."
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
  product: { en: "Own Product", es: "Producto propio" },
  "client-work": { en: "Client Work", es: "Proyectos para clientes" },
  lab: { en: "Lab", es: "Lab" },
  ecosystem: { en: "Consulting", es: "Consultoría" }
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
        "I help teams build and improve software that has to work in real operations.",
      primaryCta: { label: "See work", href: "/work" },
      secondaryCta: { label: "Let's talk", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Work for real operations.",
      description:
        "Short examples of what each project actually is."
    },
    capabilities: {
      eyebrow: "What I Build",
      title: "What I usually build.",
      description:
        "Platforms, integrations, operational tools and websites that have to work."
    },
    experience: {
      eyebrow: "Current Work",
      title: "Current role in production.",
      description:
        "Today I work on ticketing, payments, validation and backend flows."
    },
    ecosystem: {
      eyebrow: "Own Work",
      title: "How Orbytia fits.",
      description:
        "Client work stays under my name. Orbytia is the line for software consulting, automation, applied AI and own initiatives."
    },
    about: {
      eyebrow: "About",
      title: "How I work.",
      description:
        "Technical work with business sense and clear communication."
    },
    contact: {
      eyebrow: "Contact",
      title: "Need help with software that has to work?",
      description:
        "Let's talk about your project, your team or the system you need to improve."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Desarrollador de software para plataformas, integraciones y sistemas backend.",
      description:
        "Ayudo a equipos a construir y mejorar software que tiene que funcionar en operaciones reales.",
      primaryCta: { label: "Ver trabajo", href: "/es/trabajo" },
      secondaryCta: { label: "Hablemos", href: "/es/contacto" }
    },
    selectedWork: {
      eyebrow: "Trabajo destacado",
      title: "Trabajo para operaciones reales.",
      description:
        "Ejemplos cortos de qué es cada proyecto."
    },
    capabilities: {
      eyebrow: "Qué construyo",
      title: "Lo que suelo construir.",
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
      eyebrow: "Trabajo propio",
      title: "Cómo encaja Orbytia.",
      description:
        "El trabajo para clientes sigue bajo mi nombre. Orbytia es la línea para consultoría de software, automatización, IA aplicada e iniciativas propias."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo trabajo.",
      description:
        "Trabajo técnico con sentido de negocio y comunicación clara."
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Necesitas ayuda con software que tiene que funcionar?",
      description:
        "Hablemos de tu proyecto, tu equipo o el sistema que necesitas mejorar."
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
      title: "Backend and full-stack delivery",
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
    en: "At Rezolve I work on ticketing, payments, validation and backend flows in high-traffic production systems.",
    es: "En Rezolve trabajo con ticketing, pagos, validación y backend sobre sistemas en producción de alto tráfico."
  },
  notes: {
    en: [
      "High-traffic transactional systems.",
      "Work tied to day-to-day club operations."
    ],
    es: [
      "Sistemas transaccionales de alto tráfico.",
      "Trabajo ligado a operaciones reales de club."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "Clients usually hire me when they need someone who can understand the problem, bring order to it and move the work forward.",
    sections: [
      {
        title: "How I work",
        body:
          "I listen first, ask the right questions and turn vague needs into concrete steps."
      },
      {
        title: "What they value",
        body:
          "Technical judgment, product sense and communication that works with non-technical people too."
      },
      {
        title: "Why clients hire me",
        body:
          "That usually leads to clearer scope, better decisions and software that is easier to ship and maintain."
      }
    ]
  },
  es: {
    intro:
      "Normalmente me contratan cuando hace falta alguien que entienda el problema, le ponga orden y ayude a sacar el trabajo adelante.",
    sections: [
      {
        title: "Cómo trabajo",
        body:
          "Primero escucho, hago las preguntas correctas y convierto necesidades difusas en pasos concretos."
      },
      {
        title: "Qué valoran",
        body:
          "Criterio técnico, visión de producto y una comunicación que también funciona con perfiles no técnicos."
      },
      {
        title: "Por qué me contratan",
        body:
          "Eso suele traducirse en mejor enfoque, mejores decisiones y software más fácil de lanzar y mantener."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the line I use for software consulting, automation, applied AI and digital solutions.",
    sections: [
      {
        title: "What it is",
        body:
          "A practical entry point for services and own initiatives."
      },
      {
        title: "How it fits",
        body:
          "My main professional identity is still Hernán Bonavota."
      },
      {
        title: "Why it matters",
        body:
          "It gives clients a clear place to explore services and start a conversation."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es la línea que uso para consultoría de software, automatización, IA aplicada y soluciones digitales.",
    sections: [
      {
        title: "Qué es",
        body:
          "Un punto de entrada práctico para servicios e iniciativas propias."
      },
      {
        title: "Cómo encaja",
        body:
          "Mi identidad profesional principal sigue siendo Hernán Bonavota."
      },
      {
        title: "Por qué importa",
        body:
          "Da un lugar claro para explorar servicios e iniciar conversación."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Let's talk about your project.",
    description:
      "LinkedIn works well for a first message. Orbytia is the best place to explore services, automation and applied AI work."
  },
  es: {
    title: "Hablemos de tu proyecto.",
    description:
      "LinkedIn funciona bien para un primer contacto. Orbytia es el mejor punto de entrada para servicios, automatización e IA aplicada."
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
      en: "Own product that analyzes URLs and detects signs of risk.",
      es: "Producto propio de ciberseguridad para analizar URLs y detectar señales de riesgo."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "A product built to help users review suspicious URLs faster."
      ],
      es: [
        "Un producto pensado para ayudar a revisar URLs sospechosas con más rapidez."
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
        "Shows product work around cybersecurity, backend and clarity."
      ],
      es: [
        "Muestra trabajo de producto en ciberseguridad, backend y claridad."
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
      en: "Services and consulting.",
      es: "Servicios y consultoría."
    },
    summary: {
      en: "Software consulting, applied AI, automation and web projects.",
      es: "Consultoría de software, IA aplicada, automatización y proyectos web."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "A clearer service entry point for software, automation and digital work."
      ],
      es: [
        "Un punto de entrada más claro para servicios de software, automatización y trabajo digital."
      ]
    },
    challenge: {
      en: [
        "It needed to explain the service side without turning into a vague brand."
      ],
      es: [
        "Tenía que explicar la parte de servicios sin convertirse en una marca ambigua."
      ]
    },
    approach: {
      en: [
        "I kept Hernán as the main identity and used Orbytia as the service and enquiry layer."
      ],
      es: [
        "Mantuve a Hernán como identidad principal y usé Orbytia como capa de servicios y entrada de contacto."
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
        "Shows a service line that is useful, concrete and easy to contact."
      ],
      es: [
        "Presenta una línea de servicios útil, concreta y fácil de contactar."
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
      en: "Client platform.",
      es: "Plataforma para cliente."
    },
    summary: {
      en: "Website with an online quoting system for renovation work.",
      es: "Web con sistema de presupuesto online para obras de reforma."
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
        "I worked on the website, the quotation flow and the delivery around it."
      ],
      es: [
        "Trabajé la web, el flujo de presupuesto y el delivery técnico que lo sostenía."
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
        "Shows practical delivery for a business website tied to a real process."
      ],
      es: [
        "Muestra un delivery práctico para una web de negocio ligada a un proceso real."
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
      en: "Lead generation website for an insurance advisor.",
      es: "Web para captación de leads de una asesora de seguros."
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
        "Shows web delivery built to support enquiries."
      ],
      es: [
        "Muestra un delivery web pensado para apoyar el contacto."
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
      en: "Early product exploration kept clearly as lab work.",
      es: "Exploración de producto en fase temprana, presentada claramente como lab."
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
