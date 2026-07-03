interface ForSponsorsProps {
  onCtaClick: () => void;
}

export default function ForSponsors({ onCtaClick }: ForSponsorsProps) {
  return (
    <section id="entreprises" style={{ background: "var(--cream-dark)" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-4 order-2 md:order-1">
          {[
            {
              stat: "60%",
              label: "de réduction d'impôt",
              desc: "Sur vos dons aux clubs sportifs amateurs via la loi Aillagon.",
            },
            {
              stat: "Local",
              label: "ancrage territorial",
              desc: "Une présence visible là où vivent vos collaborateurs, clients et partenaires.",
            },
            {
              stat: "Visible",
              label: "présence terrain concrète",
              desc: "Maillots, panneaux, réseaux sociaux du club — votre marque là où la pub classique ne va pas.",
            },
          ].map(({ stat, label, desc }) => (
            <div
              key={label}
              style={{ background: "var(--cream)", borderColor: "var(--cream)" }}
              className="border rounded-lg p-6 flex gap-5"
            >
              <div style={{ color: "var(--bordeaux)" }} className="text-2xl font-bold shrink-0 w-20">{stat}</div>
              <div>
                <div style={{ color: "var(--charcoal)" }} className="font-medium text-sm mb-1">{label}</div>
                <div style={{ color: "var(--text-mid)" }} className="text-sm leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 md:order-2">
          <div
            style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Pour les entreprises
          </div>
          <h2 style={{ color: "var(--charcoal)" }} className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            Un investissement local avec un retour fiscal immédiat.
          </h2>
          <p style={{ color: "var(--text-mid)" }} className="text-base leading-relaxed mb-8">
            Sponsoriser un club sportif, c'est s'ancrer là où vivent vos clients et collaborateurs — tout en bénéficiant
            d'un avantage fiscal concret. Trofiz sélectionne pour vous les clubs qui correspondent à votre image.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Clubs pré-qualifiés selon vos critères",
              "Calcul de l'avantage fiscal adapté à votre situation",
              "Convention de partenariat clé en main",
              "Suivi du partenariat et reporting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                <span style={{ color: "var(--gold)" }} className="mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => { onCtaClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--bordeaux)", color: "white" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Découvrir les opportunités
          </button>
        </div>
      </div>
    </section>
  );
}
