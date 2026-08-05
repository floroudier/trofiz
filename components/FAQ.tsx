"use client";

import { useState } from "react";

const FAQS = [
  {
    tag: "Club",
    q: "Est-ce que c'est gratuit pour le club ?",
    a: "Oui. Trofiz se rémunère uniquement sur le partenariat conclu, auprès du club — et seulement si on trouve un sponsor. Si ça ne marche pas, vous ne payez rien.",
  },
  {
    tag: "Club",
    q: "On n'a pas de service communication, ça marche quand même ?",
    a: "Tout à fait. Trofiz prépare le dossier de présentation du club et structure les contreparties. Vous n'avez pas besoin d'un chargé de com — on s'occupe de la mise en forme.",
  },
  {
    tag: "Entreprise",
    q: "Comment ça marche concrètement la réduction d'impôt ?",
    a: "Vous versez un don au club (mécénat). Le club vous remet un reçu fiscal Cerfa. Vous déduisez 60% du montant de votre impôt sur les sociétés. Exemple : 5 000€ donnés = 3 000€ d'IS en moins. C'est la loi Aillagon (art. 238 bis CGI).",
  },
  {
    tag: "Entreprise",
    q: "On est une TPE, c'est fait pour nous ?",
    a: "Oui, c'est même le profil idéal. Les grandes entreprises ont déjà leurs partenariats. Trofiz cible les TPE et PME locales qui veulent un ancrage territorial concret, avec un budget accessible — les clubs amateurs s'accommodent de montants dès 1 000€.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--cream)" }} className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <p style={{ color: "var(--gold)" }} className="text-xs font-medium tracking-widest uppercase mb-3 text-center">
          Questions fréquentes
        </p>
        <h2 style={{ color: "var(--bordeaux)" }} className="text-2xl font-semibold text-center mb-10">
          Ce qu'on nous demande souvent
        </h2>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{ borderColor: "var(--cream-dark)" }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:opacity-80 transition-opacity"
                style={{ background: open === i ? "var(--cream-dark)" : "white" }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span
                    style={{
                      background: faq.tag === "Club" ? "var(--bordeaux)" : "var(--gold)",
                      color: faq.tag === "Club" ? "white" : "var(--bordeaux-dark)",
                    }}
                    className="text-xs font-semibold px-2 py-0.5 rounded shrink-0"
                  >
                    {faq.tag}
                  </span>
                  <span style={{ color: "var(--charcoal)" }} className="font-medium text-sm leading-snug">
                    {faq.q}
                  </span>
                </div>
                <span style={{ color: "var(--bordeaux)" }} className="text-lg font-light shrink-0 mt-0.5">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  style={{ background: "var(--cream-dark)", color: "var(--text-mid)" }}
                  className="px-5 pb-4 text-sm leading-relaxed border-t"
                  style={{ borderColor: "var(--cream-dark)" }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
