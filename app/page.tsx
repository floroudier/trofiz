import HomeClient from "@/components/HomeClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Est-ce que c'est gratuit pour le club ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Trofiz se rémunère uniquement sur le partenariat conclu, auprès du club — et seulement si on trouve un sponsor. Si ça ne marche pas, vous ne payez rien.",
      },
    },
    {
      "@type": "Question",
      name: "On n'a pas de service communication, ça marche quand même ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tout à fait. Trofiz prépare le dossier de présentation du club et structure les contreparties. Vous n'avez pas besoin d'un chargé de com — on s'occupe de la mise en forme.",
      },
    },
    {
      "@type": "Question",
      name: "Comment ça marche concrètement la réduction d'impôt ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous versez un don au club (mécénat). Le club vous remet un reçu fiscal Cerfa. Vous déduisez 60% du montant de votre impôt sur les sociétés. Exemple : 5 000€ donnés = 3 000€ d'IS en moins. C'est la loi Aillagon (art. 238 bis CGI).",
      },
    },
    {
      "@type": "Question",
      name: "On est une TPE, c'est fait pour nous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, c'est même le profil idéal. Les grandes entreprises ont déjà leurs partenariats. Trofiz cible les TPE et PME locales qui veulent un ancrage territorial concret, avec un budget accessible — les clubs amateurs s'accommodent de montants dès 1 000€.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trofiz — Sponsoring & mécénat sportif local",
  description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales pour des partenariats de mécénat et de sponsoring.",
  url: "https://www.trofiz.fr",
  inLanguage: "fr-FR",
  isPartOf: {
    "@type": "WebSite",
    name: "Trofiz",
    url: "https://www.trofiz.fr",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.trofiz.fr",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <HomeClient />
    </>
  );
}
