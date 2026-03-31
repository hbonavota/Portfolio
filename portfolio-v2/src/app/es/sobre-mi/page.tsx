import { buildMetadata } from "@/lib/metadata";

import { AboutPage } from "@/components/pages/about-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/sobre-mi",
  title: "Sobre mí",
  description: "Ingeniero de software que convierte necesidades ambiguas en ejecución técnica clara."
});

export default function Page() {
  return <AboutPage locale="es" />;
}
