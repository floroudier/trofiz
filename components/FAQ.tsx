"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faq";

const TAG_STYLE = {
  Club: { background: "var(--bordeaux)", color: "white" },
  Entreprise: { background: "var(--gold)", color: "var(--bordeaux-dark)" },
  Tous: { background: "var(--cream-dark)", color: "var(--bordeaux)" },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "white" }} className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <p style={{ color: "var(--gold-ink)" }} className="text-xs font-medium tracking-widest uppercase mb-3 text-center">
          Questions fréquentes
        </p>
        <h2 style={{ color: "var(--bordeaux)" }} className="text-2xl font-semibold text-center mb-10">
          Ce qu’on nous demande souvent
        </h2>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              style={{ borderColor: "var(--cream-dark)" }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-reponse-${i}`}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:opacity-80 transition-opacity"
                style={{ background: open === i ? "var(--cream)" : "white" }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span style={TAG_STYLE[faq.tag]} className="text-xs font-semibold px-2 py-0.5 rounded shrink-0">
                    {faq.tag}
                  </span>
                  <span style={{ color: "var(--charcoal)" }} className="font-medium text-sm leading-snug">
                    {faq.q}
                  </span>
                </div>
                <span aria-hidden="true" style={{ color: "var(--bordeaux)" }} className="text-lg font-light shrink-0 mt-0.5">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-reponse-${i}`}
                  style={{ background: "var(--cream)", color: "var(--text-mid)", borderColor: "var(--cream-dark)" }}
                  className="px-5 pb-4 pt-3 text-sm leading-relaxed border-t"
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
