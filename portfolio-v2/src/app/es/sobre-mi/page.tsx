import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/sobre-mi",
  title: "Sobre mí",
  description: "Software engineer y product engineer enfocado en integraciones, sistemas en producción y software orientado a negocio."
});

export default function Page() {
  return <AboutPage locale="es" />;
}
