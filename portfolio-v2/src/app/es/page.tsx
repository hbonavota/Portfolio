import { buildMetadata } from "@/lib/metadata";

import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es",
  title: "Hernán Bonavota",
  description: "Ingeniero de software especializado en backend e integraciones."
});

export default function Page() {
  return <HomePage locale="es" />;
}
