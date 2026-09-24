import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// Archivo variable avec son axe de largeur (62 à 125 %) : condensé pour les titres, étendu pour les étiquettes
const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trofiz · Mécénat et partenariat sportif local",
  description: "Trofiz relie les clubs sportifs amateurs et les entreprises de leur territoire, et sécurise le montage : mécénat, partenariat ou les deux. Premier échange sans engagement.",
  openGraph: {
    title: "Trofiz · Mécénat et partenariat sportif local",
    description: "Trofiz fait équipe avec les clubs amateurs et les entreprises de leur ville pour viser les sommets, ensemble : mécénat, partenariat ou les deux, on s’occupe du montage.",
    locale: "fr_FR",
    type: "website",
    url: "https://www.trofiz.fr",
    siteName: "Trofiz",
    images: [
      {
        url: "https://www.trofiz.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trofiz · Mécénat et partenariat sportif local",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trofiz · Mécénat et partenariat sportif local",
    description: "Trofiz fait équipe avec les clubs amateurs et les entreprises de leur ville pour viser les sommets, ensemble : mécénat, partenariat ou les deux, on s’occupe du montage.",
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
    description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises de leur territoire, et sécurise le montage du partenariat : mécénat (don avec reçu fiscal), partenariat (visibilité facturée) ou les deux.",
    email: "contact@trofiz.fr",
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
    areaServed: [
      { "@type": "State", name: "Île-de-France" },
      { "@type": "Country", name: "France" },
    ],
    sameAs: ["https://www.trofiz.fr"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mise en relation et montage de partenariats sportifs",
    provider: {
      "@type": "LocalBusiness",
      name: "Trofiz",
      url: "https://www.trofiz.fr",
    },
    description: "Trofiz identifie le club ou l'entreprise partenaire adapté, choisit la formule (mécénat, partenariat ou les deux), vérifie l'éligibilité du club au reçu fiscal et prépare les contrats.",
    serviceType: "Mécénat et partenariat sportif local",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    offers: {
      "@type": "Offer",
      description: "Premier échange sans engagement. Pour le club, rien à payer avant la signature d'un partenariat.",
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
    <html lang="fr" className={`h-full ${archivo.variable}`}>
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
