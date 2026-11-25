import type { Metadata } from "next";
import RootDocument from "../RootDocument";
import { BASE_URL } from "@/content/site";

// Portuguese root layout (/pt/…): <html lang="pt-BR"> in the static HTML.
// Each page sets its own title, description, canonical and hreflang.

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  openGraph: { siteName: "Ativa Insurance", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument htmlLang="pt-BR">{children}</RootDocument>;
}
