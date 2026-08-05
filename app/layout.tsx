import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trofiz — Sponsoring & mécénat sportif local | Réduction d'impôt 60%",
  description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales. Bénéficiez de 60% de réduction d'IS via la loi Aillagon. Premier échange sans engagement.",
  keywords: ["mécénat sportif", "sponsoring club amateur", "loi Aillagon", "réduction impôt sport", "partenariat sportif local"],
  openGraph: {
    title: "Trofiz — Sponsoring & mécénat sportif local",
    description: "Soutenez un club sportif près de chez vous et déduisez 60% du montant de vos impôts. Trofiz s'occupe de tout.",
    locale: "fr_FR",
    type: "website",
    url: "https://www.trofiz.fr",
    siteName: "Trofiz",
  },
  alternates: {
    canonical: "https://www.trofiz.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trofiz",
  url: "https://www.trofiz.fr",
  logo: "https://www.trofiz.fr/logo.png",
  description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales via le mécénat sportif (loi Aillagon).",
  email: "victor@trofiz.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Boulevard du Général Leclerc",
    addressLocality: "Nanterre",
    postalCode: "92000",
    addressCountry: "FR",
  },
  founder: {
    "@type": "Person",
    name: "Florian Roudier",
  },
  areaServed: "FR",
  serviceType: ["Mécénat sportif", "Sponsoring club amateur", "Mise en relation partenariat sportif"],
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
