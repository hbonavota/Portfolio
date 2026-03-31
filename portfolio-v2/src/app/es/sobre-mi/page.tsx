import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/sobre-mi",
  title: "Sobre mí",
  description: "Desarrollador de software que traduce necesidades de negocio en trabajo técnico claro."
});

export default function Page() {
  return <AboutPage locale="es" />;
}
