import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Public contact channels for serious conversations about product, integrations and production systems."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
