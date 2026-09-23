import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { linkStyle } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Trofiz",
  description: "Mentions légales du site trofiz.fr",
  alternates: { canonical: "https://www.trofiz.fr/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <LegalPage
      title="Mentions légales"
      path="/mentions-legales"
      intro={<p>Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN).</p>}
      sections={[
        {
          title: "Éditeur du site",
          body: (
            <p>
              <strong>Trofiz</strong> est un nom commercial exploité par :<br /><br />
              Florian Roudier<br />
              Auto-entrepreneur<br />
              SIRET : 92214491000010<br />
              Code APE : 6202A<br />
              12 Boulevard du Général Leclerc<br />
              92000 Nanterre, France<br /><br />
              Email : <a href="mailto:contact@trofiz.fr" style={linkStyle} className="underline">contact@trofiz.fr</a><br />
              Site web : <a href="https://www.trofiz.fr" style={linkStyle} className="underline">www.trofiz.fr</a>
            </p>
          ),
        },
        { title: "Directeur de la publication", body: <p>Florian Roudier</p> },
        {
          title: "Hébergeur",
          body: (
            <p>
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, États-Unis<br />
              Site web : <a href="https://vercel.com" style={linkStyle} className="underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          ),
        },
        {
          title: "Propriété intellectuelle",
          body: <p>L’ensemble des contenus présents sur ce site (textes, images, logos, structure) est protégé par le droit d’auteur et appartient à Florian Roudier / Trofiz, sauf mention contraire. Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.</p>,
        },
        {
          title: "Données personnelles",
          body: (
            <p>
              Le traitement de vos données personnelles (formulaire de contact, prospection, sous-traitants, durées de conservation, droits) est décrit dans notre{" "}
              <Link href="/confidentialite" style={linkStyle} className="underline">politique de confidentialité</Link>.
            </p>
          ),
        },
        {
          title: "Cookies",
          body: <p>Ce site n’utilise pas de cookies de traçage ou publicitaires. Aucune donnée de navigation n’est collectée à des fins analytiques ou commerciales.</p>,
        },
        {
          title: "Limitation de responsabilité",
          body: <p>Trofiz s’efforce d’assurer l’exactitude des informations publiées sur ce site. Toutefois, la responsabilité de Trofiz ne saurait être engagée en cas d’erreur, d’omission ou d’indisponibilité temporaire du site.</p>,
        },
      ]}
    />
  );
}
