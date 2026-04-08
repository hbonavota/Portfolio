import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Direct contact for recruiters, hiring managers, and tech leads."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
