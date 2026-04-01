import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Ingeniero de software enfocado en portales de ticketing, integraciones, sistemas backend y trabajo de producto orientado a operación."
});

export default function Page() {
  return <HomePage locale="es" />;
}
