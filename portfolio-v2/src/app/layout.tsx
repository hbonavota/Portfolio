import type { Metadata } from "next";

import "@/app/globals.css";

import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Hernán Bonavota",
    template: "%s | Hernán Bonavota"
  },
  description: siteConfig.description.en,
  applicationName: "Hernán Bonavota Portfolio",
  icons: {
    icon: "/favicon.svg"
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    title: "Hernán Bonavota",
    description: siteConfig.description.en,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernán Bonavota",
    description: siteConfig.description.en
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
