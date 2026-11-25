import type { Metadata } from "next";
import RootDocument from "../RootDocument";
import { BASE_URL } from "@/content/site";

// English root layout: the homepage, blog, FAQ, RCE calculator, privacy pages
// and the English landing pages.

export const metadata: Metadata = {
  title: {
    default: "Ativa Insurance | Best Insurance Quotes in Florida & East Coast",
    template: "%s | Ativa Insurance",
  },
  description:
    "Get free insurance quotes in minutes. Ativa Insurance shops multiple top-rated carriers for auto, home, flood, and business insurance. Bilingual agents. Same-day coverage.",
  keywords:
    "insurance quotes Florida, auto insurance, home insurance, bilingual insurance agent, independent insurance agency Florida, commercial insurance Florida",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Ativa Insurance | Best Insurance Quotes in Florida & East Coast",
    description:
      "Get free insurance quotes in minutes. Ativa Insurance shops multiple top-rated carriers for auto, home, flood, and business insurance. Bilingual agents. Same-day coverage.",
    url: BASE_URL,
    siteName: "Ativa Insurance",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Ativa Insurance - Independent Insurance Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ativa Insurance | Best Insurance Quotes in Florida & East Coast",
    description: "Get free insurance quotes in minutes. Bilingual agents. Multiple top-rated carriers. Same-day coverage.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument htmlLang="en">{children}</RootDocument>;
}
