import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable — Trofiz",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="grain flex-1 px-4 sm:px-8 py-24 sm:py-32" style={{ background: "var(--nuit)", color: "var(--craie)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="t-label kicker" style={{ color: "var(--or-vif)" }}>Erreur 404 · Hors-jeu</p>
          <h1 className="t-display mt-6 text-[clamp(56px,11vw,120px)]">
            Sortie du{" "}<br />terrain<span style={{ color: "var(--or)" }}>.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed" style={{ color: "var(--craie-muted)" }}>
            Le lien est peut-être erroné ou la page n’existe plus. Revenez à l’accueil pour voir comment
            Trofiz fait équipe avec les clubs amateurs et les entreprises locales.
          </p>
          <Link href="/" className="btn btn-or mt-10">
            Revenir à l’accueil <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
