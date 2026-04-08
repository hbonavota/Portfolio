import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Ingeniero de software enfocado en integraciones, backend, validación y trabajo de producto en producción."
});

export default function Page() {
  return <HomePage locale="es" />;
}
