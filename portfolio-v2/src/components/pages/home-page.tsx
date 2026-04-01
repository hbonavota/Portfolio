import Link from "next/link";

import {
  capabilities,
  caseStudies,
  homeContent,
  Locale,
  professionalExperience,
  siteConfig
} from "@/content/site";
import { getLocalizedPath } from "@/lib/i18n";

import { CaseCard } from "@/components/site/case-card";
import { Section } from "@/components/site/section";
import { SiteFrame } from "@/components/site/site-frame";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <SiteFrame locale={locale}>
      <section className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">
        <div className="space-y-9 pb-2 lg:space-y-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-cyan-200/72">
            {content.hero.eyebrow}
          </p>
          <div className="space-y-7 lg:space-y-8">
            <h1 className="max-w-5xl text-[3.25rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4.4rem] lg:text-[5.95rem]">
              {content.hero.title}
            </h1>
            <p className="max-w-[43rem] text-[1.05rem] leading-8 text-white/66 sm:text-[1.2rem] sm:leading-9">
              {content.hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-1.5 lg:gap-4 lg:pt-2">
            <Link
              href={content.hero.primaryCta.href}
              className="rounded-full border border-cyan-300/24 bg-cyan-300/10 px-5.5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/16 sm:px-6 sm:py-3.5"
            >
              {content.hero.primaryCta.label}
            </Link>
            <Link
              href={content.hero.secondaryCta.href}
              className="rounded-full border border-white/10 px-5.5 py-3 text-sm font-semibold text-white/84 transition hover:border-white/22 hover:text-white sm:px-6 sm:py-3.5"
            >
              {content.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="surface-panel-strong rounded-[2.2rem] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
              {locale === "en" ? "Professional profile" : "Perfil profesional"}
            </p>
            <h2 className="mt-5 text-[1.9rem] font-semibold text-white">Hernán Bonavota</h2>
            <p className="mt-4 text-[0.96rem] leading-7 text-white/62">
              {locale === "en"
                ? "Ticketing, integrations and backend for production portals."
                : "Ticketing, integraciones y backend para portales en producción."}
            </p>
          </div>
          <div className="surface-panel rounded-[2.2rem] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
              {locale === "en" ? "Secondary context" : "Contexto secundario"}
            </p>
            <h2 className="mt-5 text-[1.9rem] font-semibold text-white">
              {locale === "en" ? "Orbytia" : "Orbytia"}
            </h2>
            <p className="mt-4 text-[0.96rem] leading-7 text-white/62">
              {locale === "en"
                ? "Separate consulting context for selected client work."
                : "Contexto de consultoría separado para parte del trabajo con clientes."}
            </p>
          </div>
          <div className="surface-accent rounded-[2.2rem] p-7 md:p-8 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/72">
              {locale === "en" ? "Own product" : "Producto propio"}
            </p>
            <h2 className="mt-5 text-[2.15rem] font-semibold text-white">
              {locale === "en" ? "Verifiko" : "Verifiko"}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-white/70">
              {locale === "en"
                ? "Own product and a concrete example of product engineering outside client delivery."
                : "Producto propio y ejemplo concreto de trabajo de producto fuera de la entrega a clientes."}
            </p>
          </div>
        </div>
      </section>

      <Section
        id="selected-work"
        eyebrow={content.selectedWork.eyebrow}
        title={content.selectedWork.title}
        description={content.selectedWork.description}
      >
        <div className="grid gap-6 xl:grid-cols-2">
          {featured.map((study) => (
            <CaseCard key={study.slug} locale={locale} study={study} />
          ))}
        </div>
      </Section>

      <Section
        id="capabilities"
        eyebrow={content.capabilities.eyebrow}
        title={content.capabilities.title}
        description={content.capabilities.description}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {capabilities[locale].map((item) => (
            <div key={item.title} className="surface-panel rounded-[2.1rem] p-[1.625rem] md:p-8">
              <h3 className="text-[1.45rem] font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-8 text-white/64">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow={content.experience.eyebrow}
        title={content.experience.title}
        description={content.experience.description}
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-panel-strong rounded-[2.2rem] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">
              {locale === "en" ? "Current context" : "Contexto actual"}
            </p>
            <h3 className="mt-5 text-[2rem] font-semibold text-white">{professionalExperience.company}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200/72">
              {professionalExperience.role[locale]}
            </p>
            <p className="mt-5 text-[0.98rem] leading-8 text-white/66">{professionalExperience.summary[locale]}</p>
          </div>
          <div className="surface-panel rounded-[2.2rem] p-7 md:p-8">
            <ul className="space-y-5 text-[0.98rem] leading-8 text-white/68">
              {professionalExperience.notes[locale].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-cyan-200" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="ecosystem"
        eyebrow={content.ecosystem.eyebrow}
        title={content.ecosystem.title}
        description={content.ecosystem.description}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Hernán Bonavota",
              text:
                locale === "en"
                  ? "Ticketing, integrations and backend for production portals."
                  : "Ticketing, integraciones y backend para portales en producción.",
              href: siteConfig.portfolioDomains[0]
            },
            {
              title: "Orbytia",
              text:
                locale === "en"
                  ? "Secondary consulting context, separate from the main hiring path."
                  : "Contexto de consultoría secundario, separado de la vía principal de contratación.",
              href: siteConfig.approvedLinks.orbytia
            },
            {
              title: "Verifiko",
              text:
                locale === "en"
                  ? "Own product and supporting evidence of product work."
                  : "Producto propio y evidencia complementaria de trabajo de producto.",
              href: siteConfig.approvedLinks.verifiko
            }
          ].map((item) => (
            <div key={item.title} className="surface-panel rounded-[2.1rem] p-[1.625rem] md:p-8">
              <h3 className="text-[1.45rem] font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-8 text-white/64">{item.text}</p>
              <Link
                href={item.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white"
              >
                {locale === "en" ? "Visit" : "Visitar"}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
      >
        <div className="max-w-4xl space-y-7 text-[1.02rem] leading-8 text-white/68">
          <p>
            {locale === "en"
              ? "Most of my work sits where the business need is already visible but the implementation still needs definition, ownership and execution."
              : "Gran parte de mi trabajo aparece cuando la necesidad de negocio ya es visible pero la implementación todavía necesita definición, responsabilidad y ejecución."}
          </p>
          <p>
            {locale === "en"
              ? "That usually means moving between client conversations, technical decisions, implementation and release without handing the problem off."
              : "Eso suele implicar moverme entre conversaciones con cliente, decisiones técnicas, implementación y salida a producción sin ir traspasando el problema a otra persona."}
          </p>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "LinkedIn", href: siteConfig.approvedLinks.linkedin },
            { label: "Orbytia", href: siteConfig.approvedLinks.orbytia },
            { label: locale === "en" ? "Contact" : "Contacto", href: getLocalizedPath(locale, "contact") }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="surface-panel flex min-h-[8rem] items-end rounded-[2rem] p-[1.625rem] text-lg font-semibold text-white transition hover:border-cyan-200/30 hover:text-cyan-100 md:min-h-[8.5rem] md:p-8"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
