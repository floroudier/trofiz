"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "var(--bordeaux-dark)" }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm shrink-0">T</div>
          <div>
            <div className="text-white font-bold tracking-widest text-sm leading-none">TROFIZ</div>
            <div style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.18em" }} className="leading-none mt-0.5">SPORT & TERRITOIRE</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#clubs" className="text-white/70 hover:text-white text-sm transition-colors">Clubs</a>
          <a href="#entreprises" className="text-white/70 hover:text-white text-sm transition-colors">Entreprises</a>
          <a href="#comment" className="text-white/70 hover:text-white text-sm transition-colors">Comment ça marche</a>
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
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--bordeaux-dark)" }} className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#clubs" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Clubs</a>
          <a href="#entreprises" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Entreprises</a>
          <a href="#comment" className="text-white/80 text-sm py-2 border-b border-white/10" onClick={() => setOpen(false)}>Comment ça marche</a>
          <a href="#contact" style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }} className="text-sm font-semibold px-5 py-2 rounded text-center mt-2" onClick={() => setOpen(false)}>
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
