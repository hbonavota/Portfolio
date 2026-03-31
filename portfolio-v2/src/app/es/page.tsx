import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Desarrollador freelance para plataformas web, integraciones y sistemas en producción."
});

export default function Page() {
  return <HomePage locale="es" />;
}
