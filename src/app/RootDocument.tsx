// Shared <html> document for the three root layouts ((en), (pt), (es)).
// Each language has its own root layout so <html lang> is correct in the
// static HTML that Google indexes. Fonts, global styles and the agency
// structured data live here once.

import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/a27.css";
import "@/styles/a27-v2.css";
import GoogleMapsScript from "@/components/GoogleMapsScript";
import { BASE_URL, AGENCY_ID } from "@/content/site";

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

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": AGENCY_ID,
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

export default function RootDocument({ htmlLang, children }: { htmlLang: string; children: React.ReactNode }) {
  return (
    <html lang={htmlLang} className={`${montserrat.variable} ${dmSans.variable}`}>
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
