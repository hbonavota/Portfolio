import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { switchLocalePath } from "@/lib/i18n";

type MetadataArgs = {
  locale: "en" | "es";
  pathname: string;
  title: string;
  description: string;
  /**
   * Set to true for routes whose own segment provides an `opengraph-image`
   * (the home routes and the case-study `[slug]` segments). In those cases we
   * leave `images` unset so the file-based image wins; everywhere else we point
   * `images` at the locale's root image so child segments don't lose it.
   */
  ownImage?: boolean;
};

export function buildMetadata({
  locale,
  pathname,
  title,
  description,
  ownImage = false
}: MetadataArgs): Metadata {
  const alternatePath = switchLocalePath(pathname);
  const url = new URL(pathname, siteConfig.domain).toString();
  const alternateUrl = new URL(alternatePath, siteConfig.domain).toString();

  const ogImagePath = locale === "en" ? "/opengraph-image" : "/es/opengraph-image";
  const twitterImagePath = locale === "en" ? "/twitter-image" : "/es/twitter-image";
  const ogImages = ownImage
    ? undefined
    : [{ url: ogImagePath, width: 1200, height: 630, alt: title }];
  const twitterImages = ownImage
    ? undefined
    : [{ url: twitterImagePath, width: 1200, height: 630, alt: title }];

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
      type: "website",
      ...(ogImages ? { images: ogImages } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(twitterImages ? { images: twitterImages } : {})
    },
    metadataBase: new URL(siteConfig.domain),
    other: {
      "alternate:en": locale === "en" ? url : alternateUrl,
      "alternate:es": locale === "es" ? url : alternateUrl
    }
  };
}
