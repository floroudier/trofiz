"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faq";

const SIDE = { Club: "Côté club", Entreprise: "Côté entreprise", Tous: "Pour tous" };

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grain px-4 sm:px-8 py-20 sm:py-28" style={{ background: "var(--papier-2)", color: "var(--encre)" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="t-label kicker" style={{ color: "var(--or-encre)" }}>Questions fréquentes</p>
        <h2 className="t-h2 mt-6 text-[clamp(40px,5vw,60px)] max-w-[18ch]">Ce qu’on nous demande souvent.</h2>

        <div className="mt-12 border-t-2" style={{ borderColor: "var(--encre)" }}>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border-b" style={{ borderColor: "var(--papier-line)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-reponse-${i}`}
                className="w-full text-left py-5 grid grid-cols-[1fr_28px] md:grid-cols-[170px_1fr_28px] gap-x-5 gap-y-1 items-start"
              >
                <span className="t-label text-[10px] pt-1.5 col-span-2 md:col-span-1" style={{ color: "var(--club)" }}>{SIDE[faq.tag]}</span>
                <span className="text-lg font-bold leading-snug">{faq.q}</span>
                <span aria-hidden="true" className="relative w-[22px] h-[22px] mt-1">
                  <span className="absolute left-[3px] right-[3px] top-[10px] h-[2px]" style={{ background: "var(--club)" }} />
                  {open !== i && <span className="absolute left-[3px] right-[3px] top-[10px] h-[2px] rotate-90" style={{ background: "var(--club)" }} />}
                </span>
              </button>
              {open === i && (
                <p id={`faq-reponse-${i}`} className="pb-6 md:pl-[190px] pr-12 text-[15px] leading-relaxed max-w-[78ch]" style={{ color: "var(--gris)" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
