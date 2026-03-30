import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { switchLocalePath } from "@/lib/i18n";

type MetadataArgs = {
  locale: "en" | "es";
  pathname: string;
  title: string;
  description: string;
};

export function buildMetadata({ locale, pathname, title, description }: MetadataArgs): Metadata {
  const alternatePath = switchLocalePath(pathname);
  const url = new URL(pathname, siteConfig.domain).toString();
  const alternateUrl = new URL(alternatePath, siteConfig.domain).toString();

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: {
        en: locale === "en" ? pathname : alternatePath,
        es: locale === "es" ? pathname : alternatePath,
        "x-default": "/"
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_GB" : "es_ES",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    metadataBase: new URL(siteConfig.domain),
    other: {
      "alternate:en": locale === "en" ? url : alternateUrl,
      "alternate:es": locale === "es" ? url : alternateUrl
    }
  };
}
