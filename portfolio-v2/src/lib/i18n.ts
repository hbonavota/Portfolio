import { Locale } from "@/content/site";

export const locales: Locale[] = ["en", "es"];

export function getLocalizedPath(locale: Locale, key: "home" | "work" | "about" | "orbytia" | "contact", slug?: string) {
  const base =
    locale === "en"
      ? {
          home: "/",
          work: "/work",
          about: "/about",
          orbytia: "/orbytia",
          contact: "/contact"
        }
      : {
          home: "/es",
          work: "/es/trabajo",
          about: "/es/sobre-mi",
          orbytia: "/es/orbytia",
          contact: "/es/contacto"
        };

  const path = base[key];
  return slug ? `${path}/${slug}` : path;
}

export function switchLocalePath(pathname: string) {
  if (pathname === "/es") return "/";
  if (pathname === "/") return "/es";
  if (pathname.startsWith("/es/trabajo/")) return pathname.replace("/es/trabajo/", "/work/");
  if (pathname === "/es/trabajo") return "/work";
  if (pathname === "/es/sobre-mi") return "/about";
  if (pathname === "/es/orbytia") return "/orbytia";
  if (pathname === "/es/contacto") return "/contact";

  if (pathname.startsWith("/work/")) return pathname.replace("/work/", "/es/trabajo/");
  if (pathname === "/work") return "/es/trabajo";
  if (pathname === "/about") return "/es/sobre-mi";
  if (pathname === "/orbytia") return "/es/orbytia";
  if (pathname === "/contact") return "/es/contacto";

  return pathname.startsWith("/es") ? "/" : "/es";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}
