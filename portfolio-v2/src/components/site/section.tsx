import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="space-y-10 lg:space-y-12">
      <div className="hairline max-w-3xl space-y-4 lg:space-y-5">
        {eyebrow ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-cyan-200/72">{eyebrow}</p>
        ) : null}
        <h2 className="max-w-4xl text-[2.15rem] font-semibold tracking-tight text-white sm:text-[2.7rem] lg:text-[3rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[46rem] text-[1rem] leading-8 text-white/66 sm:text-[1.08rem] sm:leading-9">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
