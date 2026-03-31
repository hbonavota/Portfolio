import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Desarrollador de software para plataformas, integraciones, backend y trabajo de producto."
});

export default function Page() {
  return <HomePage locale="es" />;
}
