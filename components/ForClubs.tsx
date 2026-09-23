interface ForClubsProps {
  onCtaClick: () => void;
}

export default function ForClubs({ onCtaClick }: ForClubsProps) {
  return (
    <section id="clubs" style={{ background: "var(--bordeaux)" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div
            style={{ color: "var(--gold-bright)", borderColor: "var(--gold-bright)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Pour les clubs
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            Votre club mérite un budget à la hauteur de ce qu’il apporte.
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8">
            Vous gérez des équipes, des bénévoles, des licenciés — et vous courez après les financements.
            Trofiz vous trouve des partenaires qui comprennent la réalité du club amateur et s’engagent dans la durée.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Aucune démarche commerciale de votre part",
              "Des partenaires adaptés à votre taille et à vos valeurs",
              "Vérification de votre éligibilité au reçu fiscal",
              "Contrats préparés, de la mise en relation à la signature",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90 text-sm">
                <span aria-hidden="true" style={{ color: "var(--gold-bright)" }} className="mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: "var(--gold-bright)" }} className="text-sm font-medium mb-8">
            Rien à payer avant la signature d’un partenariat.
          </p>
          <button
            onClick={() => { onCtaClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Présenter mon club
          </button>
        </div>

        <div className="space-y-4">
          {[
            { title: "Clubs omnisports", desc: "Football, basketball, handball, rugby, volley — toutes les disciplines du sport de territoire." },
            { title: "Clubs ancrés localement", desc: "Vous touchez des centaines de licenciés et leurs proches. C'est votre valeur la plus forte." },
            { title: "Clubs sans service commercial", desc: "Vous n'avez pas de chargé de mécénat. Trofiz remplit ce rôle." },
          ].map(({ title, desc }) => (
            <div
              key={title}
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}
              className="border rounded-lg p-6"
            >
              <h3 className="text-white font-medium mb-1.5 text-sm">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
