import type { Metadata } from "next";
import LegalPage, { linkStyle } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation — Trofiz",
  description: "Conditions d’utilisation du site trofiz.fr.",
  alternates: { canonical: "https://www.trofiz.fr/cgu" },
};

export default function Cgu() {
  return (
    <LegalPage
      title="Conditions générales d’utilisation"
      path="/cgu"
      intro={<p>Les présentes conditions encadrent l’utilisation du site trofiz.fr. En naviguant sur le site, vous les acceptez. Dernière mise à jour : 24 septembre 2026.</p>}
      sections={[
        {
          title: "Objet du site",
          body: <p>Le site présente l’activité de Trofiz : la mise en relation de clubs sportifs amateurs et d’entreprises, et l’accompagnement dans le montage de leur partenariat (mécénat, partenariat ou les deux). Il permet de prendre contact via un formulaire. Aucune vente n’est conclue en ligne.</p>,
        },
        {
          title: "Accès au site",
          body: <p>Le site est accessible gratuitement, sans création de compte. Trofiz s’efforce de le maintenir accessible, mais peut l’interrompre pour maintenance ou en cas de difficulté technique, sans que sa responsabilité soit engagée.</p>,
        },
        {
          title: "Informations fiscales et juridiques",
          body: <p>Les informations du site, notamment les exemples de calcul de réduction d’impôt, sont fournies à titre indicatif et général. Elles ne constituent pas un conseil fiscal ou juridique personnalisé. Chaque situation doit être vérifiée avec un expert-comptable ou un conseil. Les montages proposés par Trofiz sont formalisés dans des contrats dédiés.</p>,
        },
        {
          title: "Utilisation du formulaire de contact",
          body: <p>Vous vous engagez à fournir des informations exactes et à ne pas utiliser le formulaire à des fins illicites ou de sollicitation non désirée. Le traitement de vos données est décrit dans la <a href="/confidentialite" style={linkStyle} className="underline">politique de confidentialité</a>.</p>,
        },
        {
          title: "Propriété intellectuelle",
          body: <p>Les contenus du site (textes, logo, éléments graphiques, structure) appartiennent à Florian Roudier / Trofiz. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite.</p>,
        },
        {
          title: "Liens externes",
          body: <p>Le site peut contenir des liens vers d’autres sites. Trofiz n’est pas responsable de leur contenu.</p>,
        },
        {
          title: "Droit applicable",
          body: <p>Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. Pour toute question : <a href="mailto:contact@trofiz.fr" style={linkStyle} className="underline">contact@trofiz.fr</a>.</p>,
        },
      ]}
    />
  );
}
