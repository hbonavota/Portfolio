import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/contacto",
  title: "Contacto",
  description: "La mejor forma de iniciar una conversación sobre software, automatización o sistemas."
});

export default function Page() {
  return <ContactPage locale="es" />;
}
