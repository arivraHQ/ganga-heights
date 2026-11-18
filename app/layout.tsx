import type { Metadata } from "next";
import "./globals.css";
import { SITE_DATA } from "@/content/site";

export const metadata: Metadata = {
  title: "Ganga Heights by Arohan Realty | Architectural Residences in Kanpur",
  description:
    "Quiet luxury 2 and 3 BHK residences overlooking the Ganga corridor in Kanpur. Built by Arohan Realty with 12 years of structural heritage and clear titles.",
  keywords: [
    "Ganga Heights Kanpur",
    "Arohan Realty",
    "Luxury Apartments Kanpur",
    "Ganga Barrage Property",
    "2 BHK Flat Kanpur",
    "3 BHK Flat Kanpur",
    "Arohan Villas Civil Lines",
  ],
  authors: [{ name: "Arohan Realty" }],
  openGraph: {
    title: "Ganga Heights by Arohan Realty — Kanpur",
    description: "Homes designed around the way you live. Quiet luxury residences with clear UP RERA certification.",
    url: "https://gangaheights.arohanrealty.com",
    siteName: "Ganga Heights by Arohan Realty",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://gangaheights.arohanrealty.com/#organization",
        name: SITE_DATA.brand.developer,
        url: "https://gangaheights.arohanrealty.com",
        telephone: SITE_DATA.brand.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "14/82 Civil Lines",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "208001",
          addressCountry: "IN",
        },
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://gangaheights.arohanrealty.com/#project",
        name: SITE_DATA.brand.name,
        description: SITE_DATA.brand.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ganga Barrage Link Road",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-limestone text-ink selection:bg-brass/20 selection:text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
