import type { Metadata } from "next";
import LegalPage, { linkStyle } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Trofiz",
  description: "Comment Trofiz collecte, utilise et protège vos données personnelles, et comment exercer vos droits (RGPD).",
  alternates: { canonical: "https://www.trofiz.fr/confidentialite" },
};

const mail = <a href="mailto:contact@trofiz.fr" style={linkStyle} className="underline">contact@trofiz.fr</a>;

export default function Confidentialite() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      path="/confidentialite"
      intro={<p>Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Dernière mise à jour : 24 septembre 2026.</p>}
      sections={[
        {
          title: "Responsable du traitement",
          body: <p>Florian Roudier, entrepreneur individuel exploitant le nom commercial Trofiz, SIRET 92214491000010, 12 boulevard du Général Leclerc, 92000 Nanterre. Contact : {mail}.</p>,
        },
        {
          title: "Données collectées",
          body: (
            <>
              <p><strong>Via le formulaire de contact :</strong> votre profil (club ou entreprise), nom et prénom, nom du club ou de l’entreprise, adresse email, téléphone et message (facultatifs).</p>
              <p><strong>Pour la prospection :</strong> Trofiz peut contacter des clubs et des entreprises à partir de coordonnées professionnelles publiques (registre officiel des entreprises, sites internet des clubs et des entreprises) : nom de la structure, ville, nom et fonction du dirigeant ou du responsable, coordonnées professionnelles.</p>
            </>
          ),
        },
        {
          title: "Finalités et bases légales",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre à votre demande et organiser un premier échange : mesures précontractuelles prises à votre demande.</li>
              <li>Préparer et suivre une mise en relation entre un club et une entreprise : exécution des mesures précontractuelles et du contrat.</li>
              <li>Prospection commerciale auprès de professionnels : intérêt légitime de Trofiz à faire connaître son activité. Vous pouvez vous y opposer à tout moment.</li>
            </ul>
          ),
        },
        {
          title: "Destinataires et sous-traitants",
          body: (
            <>
              <p>Vos données sont destinées à Trofiz uniquement. Elles ne sont ni vendues ni cédées. Lorsqu’une mise en relation est engagée, les informations utiles sont partagées avec le club ou l’entreprise concerné, avec votre accord.</p>
              <p>Trofiz s’appuie sur des sous-traitants techniques : Vercel (hébergement du site), Google (stockage des demandes et du suivi), Hostinger (messagerie et serveur) et Anthropic (assistant d’intelligence artificielle qui aide Trofiz à organiser le suivi des demandes et à préparer des brouillons de réponse, toujours validés par une personne).</p>
              <p>Certains de ces prestataires sont situés hors de l’Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types de la Commission européenne ou cadre de protection des données UE–États-Unis).</p>
            </>
          ),
        },
        {
          title: "Durée de conservation",
          body: <p>Les données sont conservées au maximum 3 ans après le dernier échange avec vous, puis supprimées. Les données liées à un contrat sont conservées pendant la durée légale applicable.</p>,
        },
        {
          title: "Vos droits",
          body: (
            <>
              <p>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition, y compris à la prospection, sans avoir à vous justifier. Pour les exercer, écrivez à {mail}. Une réponse vous sera apportée dans un délai d’un mois.</p>
              <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" style={linkStyle} className="underline" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
            </>
          ),
        },
        {
          title: "Cookies",
          body: <p>Le site trofiz.fr ne dépose aucun cookie publicitaire ni de mesure d’audience. Aucun bandeau de consentement n’est donc nécessaire.</p>,
        },
      ]}
    />
  );
}
