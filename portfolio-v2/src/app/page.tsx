import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Software engineer for platforms, integrations, backend and product work."
});

export default function Page() {
  return <HomePage locale="en" />;
}
