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
    en: "Freelance software engineer for web platforms, integrations and production systems.",
    es: "Desarrollador freelance para plataformas web, integraciones y sistemas en producción."
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
  ecosystem: { en: "Own Setup", es: "Estructura propia" }
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
      title: "Freelance software engineer for platforms, integrations and backend.",
      description:
        "APIs, payments, validation, WordPress and software in production.",
      primaryCta: { label: "See work", href: "/work" },
      secondaryCta: { label: "Contact me", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Work built for real operations.",
      description:
        "Client projects, own products and production software."
    },
    capabilities: {
      eyebrow: "What I Build",
      title: "What I build.",
      description:
        "Integrations, backend, frontend and WordPress."
    },
    experience: {
      eyebrow: "Current Work",
      title: "Current work.",
      description:
        "Ticketing, payments, validation and backend flows."
    },
    ecosystem: {
      eyebrow: "Own Products",
      title: "Own products, separate from client work.",
      description:
        "Client work goes under my name. Orbytia is only for my own products."
    },
    about: {
      eyebrow: "About",
      title: "How I work.",
      description:
        "Clear execution for software used in real operations."
    },
    contact: {
      eyebrow: "Contact",
      title: "Need a developer for a real platform?",
      description:
        "Backend, integrations, WordPress or full-stack delivery."
    }
  },
  es: {
    hero: {
      eyebrow: "Hernán Bonavota",
      title: "Desarrollador freelance para plataformas, integraciones y backend.",
      description:
        "APIs, pagos, validación, WordPress y software en producción.",
      primaryCta: { label: "Ver trabajo", href: "/es/trabajo" },
      secondaryCta: { label: "Contactar", href: "/es/contacto" }
    },
    selectedWork: {
      eyebrow: "Trabajo destacado",
      title: "Trabajo para operaciones reales.",
      description:
        "Proyectos para clientes, productos propios y software en producción."
    },
    capabilities: {
      eyebrow: "Qué construyo",
      title: "Lo que construyo.",
      description:
        "Integraciones, backend, frontend y WordPress."
    },
    experience: {
      eyebrow: "Trabajo actual",
      title: "Trabajo actual.",
      description:
        "Ticketing, pagos, validación y flujos backend."
    },
    ecosystem: {
      eyebrow: "Productos propios",
      title: "Productos propios, separados del trabajo para clientes.",
      description:
        "El trabajo para clientes va bajo mi nombre. Orbytia queda solo para mis productos."
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Cómo trabajo.",
      description:
        "Ejecución clara para software que se usa en operaciones reales."
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Necesitas un desarrollador para una plataforma real?",
      description:
        "Backend, integraciones, WordPress o delivery full-stack."
    }
  }
} as const;

export const capabilities = {
  en: [
    {
      title: "Integrations and APIs",
      text: "Services, internal tools and backend flows."
    },
    {
      title: "Transactional platforms",
      text: "Payments, validation and user flows."
    },
    {
      title: "Advanced WordPress",
      text: "Custom builds that stay easy to manage."
    },
    {
      title: "Backend and full-stack delivery",
      text: "Frontend and backend for real operations."
    }
  ],
  es: [
    {
      title: "Integraciones y APIs",
      text: "Servicios, herramientas internas y flujos backend."
    },
    {
      title: "Plataformas transaccionales",
      text: "Pagos, validaciones y recorridos de usuario."
    },
    {
      title: "WordPress avanzado",
      text: "Desarrollos a medida fáciles de mantener."
    },
    {
      title: "Backend y full-stack",
      text: "Frontend y backend para operaciones reales."
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
    en: "At Rezolve I work on ticketing, payments, validation and backend flows for high-traffic production systems.",
    es: "En Rezolve trabajo con ticketing, pagos, validación y backend sobre sistemas en producción de alto tráfico."
  },
  notes: {
    en: [
      "High-traffic transactional systems.",
      "Work tied to day-to-day operations."
    ],
    es: [
      "Sistemas transaccionales de alto tráfico.",
      "Trabajo ligado a operaciones reales."
    ]
  }
} as const;

export const aboutPage = {
  en: {
    intro:
      "I build software for companies that need execution, not just ideas.",
    sections: [
      {
        title: "How I work",
        body:
          "I reduce ambiguity early and focus on what needs to ship."
      },
      {
        title: "What I build",
        body:
          "Integrations, backends, WordPress, internal tools and business platforms."
      },
      {
        title: "Why clients hire me",
        body:
          "I turn messy requirements into working software."
      }
    ]
  },
  es: {
    intro:
      "Construyo software para empresas que necesitan ejecución, no solo ideas.",
    sections: [
      {
        title: "Cómo trabajo",
        body:
          "Reduzco ambigüedad pronto y me centro en lo que hay que entregar."
      },
      {
        title: "Qué construyo",
        body:
          "Integraciones, backend, WordPress, herramientas internas y plataformas de negocio."
      },
      {
        title: "Por qué me contratan",
        body:
          "Convierto requisitos desordenados en software que funciona."
      }
    ]
  }
} as const;

export const orbytiaPage = {
  en: {
    intro:
      "Orbytia is the label for my own products.",
    sections: [
      {
        title: "What it is",
        body:
          "Own products and experiments."
      },
      {
        title: "How it fits",
        body:
          "Client work stays under my name."
      },
      {
        title: "Why it matters",
        body:
          "It keeps product work separate from freelance work."
      }
    ]
  },
  es: {
    intro:
      "Orbytia es la etiqueta para mis productos propios.",
    sections: [
      {
        title: "Qué es",
        body:
          "Productos propios y experimentos."
      },
      {
        title: "Cómo encaja",
        body:
          "El trabajo para clientes sigue bajo mi nombre."
      },
      {
        title: "Por qué importa",
        body:
          "Separa el trabajo de producto del trabajo freelance."
      }
    ]
  }
} as const;

export const contactPage = {
  en: {
    title: "Project contact.",
    description:
      "If you need help with software, integrations or backend work, write me here."
  },
  es: {
    title: "Contacto para proyectos.",
    description:
      "Si necesitas ayuda con software, integraciones o backend, puedes escribirme por aquí."
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
      en: "Own product.",
      es: "Producto propio."
    },
    summary: {
      en: "Verification flows, backend checks and product thinking.",
      es: "Flujos de verificación, lógica backend y trabajo de producto."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "Own product focused on trust and validation."
      ],
      es: [
        "Producto propio centrado en confianza y validación."
      ]
    },
    challenge: {
      en: [
        "The flow had to feel clear from the first step."
      ],
      es: [
        "El flujo tenía que entenderse desde el primer paso."
      ]
    },
    approach: {
      en: [
        "I simplified the path and supported it with backend logic."
      ],
      es: [
        "Simplifiqué el recorrido y lo apoyé con lógica backend."
      ]
    },
    highlights: {
      en: [
        "Verification flow.",
        "Backend logic."
      ],
      es: [
        "Flujo de verificación.",
        "Lógica backend."
      ]
    },
    outcome: {
      en: [
        "Shows how I build product around trust and real use."
      ],
      es: [
        "Muestra cómo construyo producto alrededor de confianza y uso real."
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
      en: "Own setup.",
      es: "Estructura propia."
    },
    summary: {
      en: "Structure for my own products, separate from client work.",
      es: "Estructura para mis productos, separada del trabajo para clientes."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "It explains where products like Verifiko fit."
      ],
      es: [
        "Explica dónde encajan productos como Verifiko."
      ]
    },
    challenge: {
      en: [
        "Without it, product work and client work compete."
      ],
      es: [
        "Sin ella, producto propio y trabajo para clientes se mezclan."
      ]
    },
    approach: {
      en: [
        "My name is for client work. Orbytia is for own products."
      ],
      es: [
        "Trabajo con clientes bajo mi nombre. Orbytia queda para producto propio."
      ]
    },
    highlights: {
      en: [
        "Own products.",
        "Separate from client work."
      ],
      es: [
        "Productos propios.",
        "Separado del trabajo para clientes."
      ]
    },
    outcome: {
      en: [
        "It keeps the site easier to read."
      ],
      es: [
        "Hace la web más fácil de entender."
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
      en: "Business platform for day-to-day operations.",
      es: "Plataforma de negocio para la operativa diaria."
    },
    role: {
      en: "Full-stack Developer / Web Platform Engineer",
      es: "Desarrollador full-stack / Web Platform Engineer"
    },
    overview: {
      en: [
        "Client work for a platform used day to day."
      ],
      es: [
        "Trabajo para cliente sobre una plataforma de uso diario."
      ]
    },
    challenge: {
      en: [
        "It had to be clear and easy to maintain."
      ],
      es: [
        "Tenía que ser clara y fácil de mantener."
      ]
    },
    approach: {
      en: [
        "I worked on structure, frontend and backend delivery."
      ],
      es: [
        "Trabajé la estructura y el delivery frontend y backend."
      ]
    },
    highlights: {
      en: [
        "Business platform.",
        "Maintainable delivery."
      ],
      es: [
        "Plataforma de negocio.",
        "Delivery mantenible."
      ]
    },
    outcome: {
      en: [
        "Shows reliable execution for client work."
      ],
      es: [
        "Muestra ejecución fiable en trabajo para clientes."
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
      en: "Client website.",
      es: "Web para cliente."
    },
    summary: {
      en: "Business website built for trust and conversion.",
      es: "Web de negocio centrada en confianza y conversión."
    },
    role: {
      en: "Web / Product Engineer",
      es: "Web / Product Engineer"
    },
    overview: {
      en: [
        "A public site where clarity directly affects contact."
      ],
      es: [
        "Una web pública donde la claridad afecta al contacto."
      ]
    },
    challenge: {
      en: [
        "Users had to understand the offer fast."
      ],
      es: [
        "El usuario tenía que entender la propuesta rápido."
      ]
    },
    approach: {
      en: [
        "I focused on structure, trust signals and frontend delivery."
      ],
      es: [
        "Lo enfoqué en estructura, señales de confianza y delivery frontend."
      ]
    },
    highlights: {
      en: [
        "Clear offer.",
        "Trust-focused UX."
      ],
      es: [
        "Oferta clara.",
        "UX orientada a confianza."
      ]
    },
    outcome: {
      en: [
        "Shows web delivery where clarity helps conversion."
      ],
      es: [
        "Muestra delivery web donde la claridad ayuda a convertir."
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
      en: "Early product exploration kept in the lab category.",
      es: "Exploración de producto en fase temprana dentro del lab."
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
