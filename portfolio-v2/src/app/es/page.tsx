import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Ingeniero de software construyendo ticketing, portales de socios e integraciones con LALIGA para clubes de primera división."
});

export default function Page() {
  return <HomePage locale="es" />;
}
