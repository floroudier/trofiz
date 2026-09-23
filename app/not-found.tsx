import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { TrofizMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page introuvable — Trofiz",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--bordeaux)" }} className="flex-1 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <TrofizMark className="h-16 w-auto mb-8" grooveColor="var(--bordeaux)" />
          <p style={{ color: "var(--gold-bright)" }} className="text-sm font-medium tracking-widest uppercase mb-3">
            Erreur 404
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Cette page est sortie du terrain.
          </h1>
          <p className="text-white/80 text-base leading-relaxed mb-10">
            Le lien est peut-être erroné ou la page n’existe plus. Revenez à l’accueil pour découvrir comment
            Trofiz relie les clubs amateurs et les entreprises de leur territoire.
          </p>
          <Link
            href="/"
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Revenir à l’accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
