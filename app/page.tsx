import HomeClient from "@/components/HomeClient";
import { FAQS } from "@/lib/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trofiz · Mécénat et partenariat sportif local",
  description: "Trofiz met en relation les clubs sportifs amateurs et les entreprises locales et sécurise le montage : mécénat, partenariat ou les deux.",
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
