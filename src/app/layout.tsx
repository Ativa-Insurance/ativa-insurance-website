import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/a27.css";
import "@/styles/a27-v2.css";
import GoogleMapsScript from "@/components/GoogleMapsScript";

const BASE_URL = "https://ativainsurance.com";

// 2027 type system: Montserrat (headings, buttons, labels) + DM Sans (body)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-dm-sans",
});

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

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Ativa Insurance LLC",
  image: `${BASE_URL}/logos/Personal Logo.png`,
  url: BASE_URL,
  telephone: "+15619468261",
  email: "info@ativainsurance.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 SE Ocean Blvd",
    addressLocality: "Stuart",
    addressRegion: "FL",
    postalCode: "34994",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.1975,
    longitude: -80.2528,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <GoogleMapsScript />
        {children}
      </body>
    </html>
  );
}
