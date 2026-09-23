interface ForSponsorsProps {
  onCtaClick: () => void;
}

// Les trois formules : la réduction de 60 % ne concerne que la part don (mécénat, art. 238 bis CGI) ;
// la visibilité (logo, panneaux) relève du partenariat, facturé et déductible comme une dépense de communication.
const FORMULES = [
  {
    stat: "Don",
    label: "Mécénat",
    desc: "60 % de réduction d'impôt, avec un reçu fiscal du club. Un don de 5 000 € vous revient à 2 000 €.",
  },
  {
    stat: "Logo",
    label: "Partenariat",
    desc: "Maillots, panneaux, réseaux du club : une prestation facturée par le club, déductible comme une dépense de communication.",
  },
  {
    stat: "Mixte",
    label: "Les deux",
    desc: "Un don et un partenariat, en deux contrats séparés : la réduction d'impôt et la visibilité.",
  },
];

export default function ForSponsors({ onCtaClick }: ForSponsorsProps) {
  return (
    <section id="entreprises" style={{ background: "var(--cream-dark)" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-4 order-2 md:order-1">
          {FORMULES.map(({ stat, label, desc }) => (
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
          <p style={{ color: "var(--text-mid)" }} className="text-xs leading-relaxed">
            Réduction d’impôt dans la limite de 20 000 € ou de 0,5 % du chiffre d’affaires. Chiffres indicatifs, à confirmer avec votre comptable.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div
            style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Pour les entreprises
          </div>
          <h2 style={{ color: "var(--charcoal)" }} className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            Votre marque au cœur de votre ville, avec un montage sans risque.
          </h2>
          <p style={{ color: "var(--text-mid)" }} className="text-base leading-relaxed mb-8">
            Soutenir un club amateur, c’est vous ancrer là où vivent vos clients et vos collaborateurs.
            Trofiz choisit avec vous le club et la bonne formule, puis prépare des contrats conformes.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Un club choisi selon votre zone et votre image",
              "Le coût réel calculé selon votre situation",
              "Les contrats préparés : convention de mécénat, contrat de partenariat",
              "L'argent versé directement au club",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                <span aria-hidden="true" style={{ color: "var(--gold-ink)" }} className="mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => { onCtaClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--bordeaux)", color: "white" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Trouver mon club
          </button>
        </div>
      </div>
    </section>
  );
}
