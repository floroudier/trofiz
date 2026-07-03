import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trofiz — Sports Tech",
  description: "Trofiz connecte les clubs sportifs amateurs avec les entreprises qui veulent s'ancrer dans leur territoire.",
  openGraph: {
    title: "Trofiz — Sports Tech",
    description: "Le lien entre clubs sportifs amateurs et entreprises qui veulent s'ancrer dans leur territoire.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
