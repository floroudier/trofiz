"use client";
import Link from "next/link";
import { useState } from "react";
import { TrofizMark, TrofizWordmark } from "./Logo";

const LINKS = [
  ["/#clubs", "Clubs"],
  ["/#entreprises", "Entreprises"],
  ["/#formules", "Formules"],
  ["/#faq", "FAQ"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "var(--nuit)" }} className="sticky top-0 z-50 border-b border-[var(--nuit-line)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Trofiz, accueil">
          <TrofizMark className="h-9 w-auto shrink-0" grooveColor="var(--nuit)" />
          <TrofizWordmark className="h-5 w-auto" color="var(--craie)" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="text-[13px] font-medium hover:text-[var(--craie)] transition-colors"
              style={{ color: "var(--craie-muted)", fontStretch: "112%" }}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="btn btn-craie hidden md:inline-flex" style={{ padding: "10px 20px 10px 18px", fontSize: 13, ["--elan" as string]: "8px" }}>
          Nous écrire
        </Link>

        <button
          className="md:hidden p-1"
          style={{ color: "var(--craie)" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l14 14M6 20L20 6" /> : <path d="M3 8h20M3 13h20M3 18h20" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="md:hidden px-4 pb-6 flex flex-col gap-1" style={{ background: "var(--nuit)" }}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="t-h2 text-3xl py-2 border-b border-[var(--nuit-line)]" style={{ color: "var(--craie)" }}>
              {label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-or mt-4">
            Nous écrire <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </header>
  );
}
