import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Software engineer and product engineer building reliable web platforms, integrations and production systems."
});

export default function Page() {
  return <HomePage locale="en" />;
}
