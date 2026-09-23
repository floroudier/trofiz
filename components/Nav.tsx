"use client";
import Link from "next/link";
import { useState } from "react";
import { TrofizMark, TrofizWordmark } from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "var(--bordeaux-dark)" }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Trofiz, accueil">
          <TrofizMark className="h-9 w-auto shrink-0" grooveColor="var(--bordeaux-dark)" />
          <div>
            <TrofizWordmark className="h-5 w-auto" color="var(--cream)" />
            <div style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.18em" }} className="leading-none mt-1">SPORT & TERRITOIRE</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#clubs" className="text-white/80 hover:text-white text-sm transition-colors">Clubs</a>
          <a href="#entreprises" className="text-white/80 hover:text-white text-sm transition-colors">Entreprises</a>
          <a href="#comment" className="text-white/80 hover:text-white text-sm transition-colors">Comment ça marche</a>
          <a href="#faq" className="text-white/80 hover:text-white text-sm transition-colors">FAQ</a>
        </nav>

        <a
          href="#contact"
          style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
          className="hidden md:inline-block text-sm font-semibold px-5 py-2 rounded transition-opacity hover:opacity-90"
        >
          Nous contacter
        </a>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" style={{ background: "var(--bordeaux-dark)" }} className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#clubs" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Clubs</a>
          <a href="#entreprises" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Entreprises</a>
          <a href="#comment" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Comment ça marche</a>
          <a href="#faq" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }} className="text-sm font-semibold px-5 py-2 rounded text-center mt-2" onClick={() => setOpen(false)}>
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
