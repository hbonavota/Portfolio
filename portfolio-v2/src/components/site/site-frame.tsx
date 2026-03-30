import { ReactNode } from "react";

import { Locale } from "@/content/site";

import { Footer } from "./footer";
import { Header } from "./header";

type SiteFrameProps = {
  locale: Locale;
  children: ReactNode;
};

export function SiteFrame({ locale, children }: SiteFrameProps) {
  return (
    <div className="min-h-screen text-white">
      <Header locale={locale} />
      <main className="mx-auto max-w-[88rem] space-y-28 px-5 py-10 sm:px-8 sm:py-14 lg:space-y-32 lg:px-10 lg:py-20">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
