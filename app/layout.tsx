import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trofiz — Sponsoring & mécénat sportif local | Réduction d'impôt 60%",
  description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales. Bénéficiez de 60% de réduction d'IS via la loi Aillagon. Premier échange sans engagement.",
  keywords: ["mécénat sportif", "sponsoring club amateur", "loi Aillagon", "réduction impôt sport", "partenariat sportif local", "club sportif financement", "mécénat PME", "sponsoring local entreprise"],
  openGraph: {
    title: "Trofiz — Sponsoring & mécénat sportif local",
    description: "Soutenez un club sportif près de chez vous et déduisez 60% du montant de vos impôts. Trofiz s'occupe de tout.",
    locale: "fr_FR",
    type: "website",
    url: "https://www.trofiz.fr",
    siteName: "Trofiz",
    images: [
      {
        url: "https://www.trofiz.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trofiz — Sponsoring & mécénat sportif local",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trofiz — Sponsoring & mécénat sportif local",
    description: "Soutenez un club sportif près de chez vous et déduisez 60% du montant de vos impôts.",
    images: ["https://www.trofiz.fr/og-image.png"],
  },
  alternates: {
    canonical: "https://www.trofiz.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Trofiz",
    url: "https://www.trofiz.fr",
    logo: "https://www.trofiz.fr/logo.png",
    image: "https://www.trofiz.fr/og-image.png",
    description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales via le mécénat sportif (loi Aillagon). Réduction d'IS de 60% pour les entreprises.",
    email: "victor@trofiz.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Boulevard du Général Leclerc",
      addressLocality: "Nanterre",
      postalCode: "92000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8927,
      longitude: 2.2075,
    },
    founder: {
      "@type": "Person",
      name: "Florian Roudier",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    priceRange: "€€",
    sameAs: ["https://www.trofiz.fr"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mise en relation mécénat sportif",
    provider: {
      "@type": "LocalBusiness",
      name: "Trofiz",
      url: "https://www.trofiz.fr",
    },
    description: "Trofiz identifie les clubs sportifs amateurs adaptés à votre territoire et structure le partenariat de mécénat ou de sponsoring, de la mise en relation au reçu fiscal Cerfa.",
    serviceType: "Mécénat sportif et sponsoring local",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    offers: {
      "@type": "Offer",
      description: "Premier échange de 20 minutes sans engagement. Commission uniquement sur partenariat conclu.",
      priceCurrency: "EUR",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
