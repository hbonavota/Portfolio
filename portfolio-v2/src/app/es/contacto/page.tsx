import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/contacto",
  title: "Contacto",
  description: "Canales públicos para conversaciones serias sobre producto, integraciones y sistemas en producción."
});

export default function Page() {
  return <ContactPage locale="es" />;
}
