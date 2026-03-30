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
  ecosystem: { en: "Ecosystem", es: "Ecosistema" }
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
      title: "Reliable software for integrations, transactional platforms and business-critical systems.",
      description:
        "I build and maintain systems where reliability is part of the job. That includes APIs, ticketing and payment integrations, user validation flows, advanced WordPress implementation, and full-stack work for business platforms already in production.",
      primaryCta: { label: "View work", href: "/work" },
      secondaryCta: { label: "Get in touch", href: "/contact" }
    },
    selectedWork: {
      eyebrow: "Selected Work",
      title: "Products, client projects and technical work with clear scope and real authorship.",
      description:
        "Each case is framed around actual responsibility, public visibility and the right category: product, client projects, ecosystem or lab."
    },
    capabilities: {
      eyebrow: "What I Build",
      title: "Software built around integrations, operations and reliable execution.",
      description:
        "Not a stack list, but a way of turning business requirements into software that holds up under real use."
    },
    experience: {
      eyebrow: "Professional Experience",
      title: "Production work in demanding, high-traffic environments.",
      description:
        "Alongside my own products, I work on systems where data consistency, validation flows, transactional reliability and integration quality are part of the job."
    },
    ecosystem: {
      eyebrow: "Brand Ecosystem",
      title: "A personal brand, a technical ecosystem and a flagship product.",
      description:
        "Hernán Bonavota is the main identity. Orbytia gives structure to the work around it. Verifiko is the most visible product within that system."
    },
    about: {
      eyebrow: "About",
      title: "A technical profile shaped by product, business context and execution.",
      description:
        "My background across software, business, finance and communication helps me connect implementation with real operating needs instead of treating code in isolation."
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to serious conversations about products, platforms and integrations.",
      description:
        "If the work involves production systems, business platforms or integration-heavy software, the public channels below are the right place to start."
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
      title: "Integration-heavy systems",
      text: "Software that connects services, APIs and operational workflows where reliability matters more than novelty."
    },
    {
      title: "Transactional platforms",
      text: "Frontend and backend delivery for platforms that depend on validation flows, payment logic, data consistency and dependable user journeys."
    },
    {
      title: "Advanced WordPress",
      text: "Structured CMS work, custom implementation, editorial architecture and business-oriented publishing systems that need to be maintainable."
    },
    {
      title: "Business-oriented execution",
      text: "A practical way of building software that connects business requirements, product decisions and technical execution."
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
    en: "At Rezolve, I work on production systems used by professional football clubs in contexts connected to the LALIGA ecosystem. The work includes ticketing platforms, payment integrations, user validation flows, data consistency and API-connected business systems.",
    es: "En Rezolve trabajo sobre sistemas en producción utilizados por clubes de fútbol profesional dentro de contextos conectados al ecosistema LALIGA. El trabajo incluye plataformas de ticketing, integraciones de pago, flujos de validación de usuario, consistencia de datos y sistemas de negocio conectados por APIs."
  },
  notes: {
    en: [
      "High-traffic transactional contexts where operational reliability matters.",
      "Work connected to professional sports environments, club operations and API-driven platform logic.",
      "A technical profile reinforced by prior experience in business, finance and communication."
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
      "I work as a software engineer and product engineer focused on reliable software for business-oriented platforms, integrations and production systems.",
    sections: [
      {
        title: "How I approach software",
        body:
          "I care about structure, operational clarity and long-term reliability. That usually means understanding the business requirement first, reducing ambiguity early and building software that can be maintained under real usage conditions."
      },
      {
        title: "What I work on",
        body:
          "My day-to-day work sits between integrations, APIs, transactional flows, advanced WordPress delivery and frontend + backend implementation. The strongest fit is usually a platform that needs dependable execution, not a flashy prototype."
      },
      {
        title: "What I bring beyond code",
        body:
          "My background in business, finance and communication helps me bridge the gap between requirements, technical decisions and what a platform actually needs to support in practice."
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
      "Orbytia is the layer I use to connect products, experiments and technical initiatives with a clearer sense of structure than a generic personal portfolio would allow.",
    sections: [
      {
        title: "Why it exists",
        body:
          "The goal is to give coherence to public work that would otherwise appear as disconnected projects. It creates room for products, experiments and technical direction to live under a shared umbrella."
      },
      {
        title: "How it relates to my personal brand",
        body:
          "Hernán Bonavota remains the main professional identity. Orbytia does not replace that. It helps organize what I build publicly, especially where products need a clearer ecosystem relationship."
      },
      {
        title: "Why it matters",
        body:
          "It allows Verifiko and future initiatives to be presented with better context, instead of forcing every product to sit as an isolated item inside a traditional portfolio grid."
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
    title: "Public channels for serious technical and product conversations.",
    description:
      "This page stays intentionally simple. It points only to the public channels that make sense for professional outreach, product discussions and technical collaboration."
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
      en: "A verification-oriented product developed under the Orbytia umbrella.",
      es: "Un producto orientado a verificación desarrollado bajo el paraguas de Orbytia."
    },
    summary: {
      en: "A public product case focused on trust, validation and operational clarity, presented as product work rather than as a technical demo.",
      es: "Un caso de producto público centrado en confianza, validación y claridad operativa, presentado como trabajo de producto y no como una demo técnica."
    },
    role: {
      en: "Founder / Product Engineer",
      es: "Founder / Product Engineer"
    },
    overview: {
      en: [
        "Verifiko is the clearest public product in the portfolio. It represents the kind of work I want to be associated with: product thinking, clear operational framing and software built around real workflows."
      ],
      es: [
        "Verifiko es el producto público más claro del portfolio. Representa el tipo de trabajo con el que quiero estar asociado: pensamiento de producto, enfoque operativo claro y software construido alrededor de flujos reales."
      ]
    },
    challenge: {
      en: [
        "The challenge is to communicate a product context convincingly: not just what the interface looks like, but why verification, structure and trust need to be treated as part of the product itself."
      ],
      es: [
        "El reto es comunicar un contexto de producto de forma convincente: no solo cómo se ve la interfaz, sino por qué la verificación, la estructura y la confianza deben tratarse como parte del propio producto."
      ]
    },
    approach: {
      en: [
        "The case is framed through product intent, role, workflow structure and technical decisions that support reliability. The technology matters, but the page stays anchored in product reasoning."
      ],
      es: [
        "El caso se plantea desde la intención de producto, el rol, la estructura del flujo y las decisiones técnicas que sostienen la fiabilidad. La tecnología importa, pero la página se mantiene anclada al razonamiento de producto."
      ]
    },
    highlights: {
      en: [
        "Product framing before stack framing.",
        "Operational logic and workflow clarity.",
        "Visible relationship to Orbytia."
      ],
      es: [
        "Narrativa de producto antes que narrativa de stack.",
        "Lógica operativa y claridad de flujo.",
        "Relación visible con Orbytia."
      ]
    },
    outcome: {
      en: [
        "Verifiko should read as a credible public product with a coherent operating logic, not as an oversized concept or portfolio filler."
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
      en: "The ecosystem layer connecting public products, experiments and technical direction.",
      es: "La capa de ecosistema que conecta productos públicos, experimentos y dirección técnica."
    },
    summary: {
      en: "A technical and editorial umbrella that gives structure to public-facing work without pretending to be something bigger than it is.",
      es: "Una capa técnica y editorial que da estructura al trabajo público sin aparentar ser algo más grande de lo que realmente es."
    },
    role: {
      en: "Founder / Builder",
      es: "Founder / Builder"
    },
    overview: {
      en: [
        "Orbytia is not presented as decorative branding. Its purpose is to create coherence between public products, experiments and the personal portfolio."
      ],
      es: [
        "Orbytia no se presenta como branding decorativo. Su función es crear coherencia entre productos públicos, experimentos y el portfolio personal."
      ]
    },
    challenge: {
      en: [
        "The main challenge is to describe Orbytia honestly: useful as a structure, real as a public layer, but without inflating its scale or turning it into vague studio language."
      ],
      es: [
        "El principal reto es describir Orbytia con honestidad: útil como estructura, real como capa pública, pero sin inflar su escala ni convertirla en lenguaje vago de estudio."
      ]
    },
    approach: {
      en: [
        "The page focuses on purpose, relationship mapping and current scope. It explains why Orbytia exists, what it currently supports and why that framing helps products like Verifiko make more sense."
      ],
      es: [
        "La página se centra en propósito, relación entre piezas y alcance actual. Explica por qué existe Orbytia, qué sostiene hoy y por qué ese marco ayuda a que productos como Verifiko tengan más sentido."
      ]
    },
    highlights: {
      en: [
        "Clear brand hierarchy.",
        "Direct link to the personal brand.",
        "Explicit connection with Verifiko."
      ],
      es: [
        "Jerarquía de marca clara.",
        "Vínculo directo con la marca personal.",
        "Conexión explícita con Verifiko."
      ]
    },
    outcome: {
      en: [
        "Orbytia should feel credible, useful and grounded in real work rather than in branding theater."
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
      en: "Client platform work presented with clarity, restraint and respect for real scope.",
      es: "Trabajo de plataforma para cliente presentado con claridad, contención y respeto por el alcance real."
    },
    summary: {
      en: "A business-oriented platform case focused on practical delivery, maintainable structure and the kind of implementation that supports day-to-day operations.",
      es: "Un caso de plataforma orientada a negocio centrado en delivery práctico, estructura mantenible y un tipo de implementación que acompaña la operación del día a día."
    },
    role: {
      en: "Full-stack Developer / Web Platform Engineer",
      es: "Desarrollador full-stack / Web Platform Engineer"
    },
    overview: {
      en: [
        "This case is presented as client work with real scope. It is useful because it shows execution, structure and practical delivery without blurring the line between technical authorship and client ownership."
      ],
      es: [
        "Este caso se presenta como un proyecto para cliente con alcance real. Es valioso porque muestra ejecución, estructura y delivery práctico sin difuminar la línea entre autoría técnica y propiedad del cliente."
      ]
    },
    challenge: {
      en: [
        "The challenge is to explain meaningful engineering and platform work while staying precise about what belongs to me as implementation and what belongs to the client as business and product ownership."
      ],
      es: [
        "El reto es explicar trabajo de ingeniería y plataforma con sentido manteniendo precisión sobre qué me corresponde como implementación y qué pertenece al cliente como negocio y propiedad del producto."
      ]
    },
    approach: {
      en: [
        "The story focuses on platform structure, information architecture, practical frontend and backend delivery, and any CMS or integration decisions that improved maintainability."
      ],
      es: [
        "La narrativa se centra en la estructura de la plataforma, la arquitectura de información, el delivery frontend y backend, y cualquier decisión de CMS o integración que mejorara la mantenibilidad."
      ]
    },
    highlights: {
      en: [
        "Professional delivery.",
        "Business-oriented UX structure.",
        "Respectful treatment of client work."
      ],
      es: [
        "Delivery profesional.",
        "Estructura UX orientada a negocio.",
        "Tratamiento respetuoso de proyectos para clientes."
      ]
    },
    outcome: {
      en: [
        "The case should read as credible platform delivery work: useful, concrete and professionally framed."
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
      en: "Client work focused on trust, clarity and business-oriented web delivery.",
      es: "Proyecto para cliente con foco en confianza, claridad y delivery web orientado a negocio."
    },
    summary: {
      en: "A client-facing case centered on information structure, trust-oriented UX and practical implementation for a public business website.",
      es: "Un caso orientado a cliente centrado en estructura de información, UX orientada a confianza e implementación práctica para una web pública de negocio."
    },
    role: {
      en: "Web / Product Engineer",
      es: "Web / Product Engineer"
    },
    overview: {
      en: [
        "This case is valuable because it shows how structure, clarity and trust affect a public-facing platform where the user needs to understand an offer quickly and confidently."
      ],
      es: [
        "Este caso es valioso porque muestra cómo la estructura, la claridad y la confianza afectan a una plataforma pública donde el usuario necesita entender una propuesta con rapidez y seguridad."
      ]
    },
    challenge: {
      en: [
        "The editorial challenge is to show thoughtful implementation and decision-making without overstating business impact or claiming ownership of the client's results."
      ],
      es: [
        "El reto editorial es mostrar una implementación cuidada y decisiones con criterio sin exagerar un impacto de negocio que pertenece al cliente ni apropiarse de sus resultados."
      ]
    },
    approach: {
      en: [
        "The case focuses on trust-oriented UX, content structure, practical frontend decisions and the kind of web delivery that supports business communication rather than just visual polish."
      ],
      es: [
        "El caso se centra en una UX orientada a confianza, estructura de contenido, decisiones frontend prácticas y un tipo de delivery web que apoya la comunicación de negocio, no solo el acabado visual."
      ]
    },
    highlights: {
      en: [
        "Information architecture.",
        "Trust-oriented interface decisions.",
        "Practical conversion context."
      ],
      es: [
        "Arquitectura de información.",
        "Decisiones de interfaz orientadas a confianza.",
        "Contexto práctico de conversión."
      ]
    },
    outcome: {
      en: [
        "The final page should feel grounded, trustworthy and professionally restrained."
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
      en: "An experimental initiative framed honestly and with editorial discipline.",
      es: "Una iniciativa experimental presentada con honestidad y disciplina editorial."
    },
    summary: {
      en: "A lab-oriented initiative used to test ideas, interface directions and product framing without pretending to be a fully established commercial product.",
      es: "Una iniciativa de laboratorio utilizada para probar ideas, direcciones de interfaz y enfoque de producto sin fingir ser un producto comercial plenamente consolidado."
    },
    role: {
      en: "Concept / Experimental Builder",
      es: "Concept / Experimental Builder"
    },
    overview: {
      en: [
        "Lunetia should be presented clearly as experimental work. Its value comes from exploration, framing and learning, not from pretending to be more mature than it currently is."
      ],
      es: [
        "Lunetia debe presentarse con claridad como trabajo experimental. Su valor viene de la exploración, del enfoque y del aprendizaje, no de aparentar más madurez de la que hoy tiene."
      ]
    },
    challenge: {
      en: [
        "The challenge is to keep the framing honest while still making the case useful inside the portfolio as evidence of curiosity, judgment and early-stage product thinking."
      ],
      es: [
        "El reto es mantener una narrativa honesta y, al mismo tiempo, hacer que el caso sea útil dentro del portfolio como evidencia de curiosidad, criterio y pensamiento de producto en fase temprana."
      ]
    },
    approach: {
      en: [
        "The page should emphasize exploration, interface thinking and the ability to give shape to early-stage ideas without overselling them."
      ],
      es: [
        "La página debe enfatizar exploración, criterio de interfaz y capacidad para dar forma a ideas en fase temprana sin venderlas de más."
      ]
    },
    highlights: {
      en: [
        "Editorial honesty.",
        "Concept framing.",
        "Room for future expansion."
      ],
      es: [
        "Honestidad editorial.",
        "Enfoque conceptual.",
        "Espacio para crecer."
      ]
    },
    outcome: {
      en: [
        "Lunetia should strengthen the portfolio as a disciplined lab case, not weaken it by sounding like a finished business."
      ],
      es: [
        "Lunetia debe reforzar el portfolio como caso de laboratorio con criterio, no debilitarlo sonando como un negocio ya terminado."
      ]
    },
    publicLinks: [{ label: "Lunetia", href: siteConfig.approvedLinks.lunetia }]
  }
];
