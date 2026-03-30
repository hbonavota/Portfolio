import Link from "next/link";

import { CaseStudy, categoryLabels, Locale } from "@/content/site";
import { getLocalizedPath } from "@/lib/i18n";

type CaseCardProps = {
  locale: Locale;
  study: CaseStudy;
};

export function CaseCard({ locale, study }: CaseCardProps) {
  return (
    <article className="surface-panel group flex h-full flex-col justify-between rounded-[2.25rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 md:p-8">
      <div className="space-y-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/64">
            {categoryLabels[study.category][locale]}
          </span>
          <span className="max-w-[14rem] text-sm leading-6 text-white/44 sm:pt-0.5 sm:text-right">{study.role[locale]}</span>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="max-w-[24rem] text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-[2.1rem]">
              {study.title[locale]}
            </h3>
            <p className="max-w-xl text-[0.7rem] uppercase tracking-[0.32em] text-cyan-200/72">
              {study.strapline[locale]}
            </p>
          </div>
          <p className="max-w-[36rem] text-[1rem] leading-8 text-white/67">{study.summary[locale]}</p>
        </div>
      </div>
      <div className="mt-11 flex items-center justify-between border-t border-white/8 pt-5">
        <Link
          href={getLocalizedPath(locale, "work", study.slug)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-200"
        >
          {locale === "en" ? "Read case study" : "Ver caso"}
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          >
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}
