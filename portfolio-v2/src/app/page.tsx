import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Software engineer focused on platforms, integrations, backend systems and product development."
});

export default function Page() {
  return <HomePage locale="en" />;
}
