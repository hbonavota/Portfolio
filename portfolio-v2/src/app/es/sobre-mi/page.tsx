import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/sobre-mi",
  title: "Sobre mí",
  description: "Cómo trabajo de punta a punta en Rezolve — de la llamada de descubrimiento a la instancia AWS."
});

export default function Page() {
  return <AboutPage locale="es" />;
}
