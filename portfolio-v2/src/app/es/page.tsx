import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Inicio",
  description: "Software engineer y product engineer centrado en plataformas web fiables, integraciones y sistemas en producción."
});

export default function Page() {
  return <HomePage locale="es" />;
}
