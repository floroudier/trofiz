import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Trofiz",
  description: "Mentions légales du site trofiz.fr",
};

export default function MentionsLegales() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream)" }} className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            style={{ color: "var(--bordeaux)" }}
            className="text-3xl font-bold mb-2"
          >
            Mentions légales
          </h1>
          <p style={{ color: "var(--text-mid)" }} className="text-sm mb-10">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
          </p>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Éditeur du site
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              <strong>Trofiz</strong> est un nom commercial exploité par :<br /><br />
              Florian Roudier<br />
              Auto-entrepreneur<br />
              SIRET : 92214491000010<br />
              Code APE : 6202A<br />
              12 Boulevard du Général Leclerc<br />
              92000 Nanterre, France<br /><br />
              Email : <a href="mailto:victor@trofiz.com" style={{ color: "var(--bordeaux)" }} className="underline">victor@trofiz.com</a><br />
              Site web : <a href="https://www.trofiz.fr" style={{ color: "var(--bordeaux)" }} className="underline">www.trofiz.fr</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Directeur de la publication
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              Florian Roudier
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Hébergeur
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, États-Unis<br />
              Site web : <a href="https://vercel.com" style={{ color: "var(--bordeaux)" }} className="underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Propriété intellectuelle
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, structure) est protégé par le droit d'auteur et appartient à Florian Roudier / Trofiz, sauf mention contraire. Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Données personnelles
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              Les informations collectées via le formulaire de contact (nom, organisation, email, téléphone, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont ni vendues ni transmises à des tiers.<br /><br />
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <a href="mailto:victor@trofiz.com" style={{ color: "var(--bordeaux)" }} className="underline">victor@trofiz.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Cookies
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucune donnée de navigation n'est collectée à des fins analytiques ou commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">
              Limitation de responsabilité
            </h2>
            <p style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed">
              Trofiz s'efforce d'assurer l'exactitude des informations publiées sur ce site. Toutefois, la responsabilité de Trofiz ne saurait être engagée en cas d'erreur, d'omission ou d'indisponibilité temporaire du site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
