import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/sobre-mi",
  title: "Sobre mí",
  description: "Ingeniero de software que trabaja entre requisitos de cliente, decisiones técnicas y entrega de punta a punta."
});

export default function Page() {
  return <AboutPage locale="es" />;
}
