import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Ingeniero de software enfocado en plataformas, integraciones, sistemas backend y desarrollo de producto."
});

export default function Page() {
  return <HomePage locale="es" />;
}
