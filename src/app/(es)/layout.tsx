import type { Metadata } from "next";
import RootDocument from "../RootDocument";
import { BASE_URL } from "@/content/site";

// Spanish root layout (/es/…): <html lang="es"> in the static HTML.
// Each page sets its own title, description, canonical and hreflang.

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  openGraph: { siteName: "Ativa Insurance", type: "website", locale: "es_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument htmlLang="es">{children}</RootDocument>;
}
