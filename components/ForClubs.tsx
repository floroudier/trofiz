interface ForClubsProps {
  onCtaClick: () => void;
}

export default function ForClubs({ onCtaClick }: ForClubsProps) {
  return (
    <section id="clubs" style={{ background: "var(--bordeaux)" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div
            style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Pour les clubs
          </div>
          <h2 className="text-white text-3xl font-semibold mb-6 leading-snug">
            Votre club mérite un budget à la hauteur de ce qu'il apporte.
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8">
            Vous gérez des équipes, des bénévoles, des licenciés — et vous courez après les financements.
            Trofiz vous trouve des partenaires qui comprennent la réalité du club amateur et s'engagent dans la durée.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Partenariats adaptés à votre taille et vos valeurs",
              "Aucune démarche commerciale de votre part",
              "Visibilité renforcée sur votre territoire",
              "Accompagnement de A à Z, de la mise en relation à la convention",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                <span style={{ color: "var(--gold)" }} className="mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => { onCtaClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Parler à un conseiller
          </button>
        </div>

        <div className="space-y-4">
          {[
            { title: "Clubs omnisports", desc: "Football, basketball, handball, rugby, natation — toutes les disciplines du sport de territoire." },
            { title: "Clubs ancrés localement", desc: "Vous touchez des centaines de licenciés et leurs proches. C'est votre valeur la plus forte." },
            { title: "Clubs sans service commercial", desc: "Vous n'avez pas de chargé de mécénat. Trofiz remplit ce rôle." },
          ].map(({ title, desc }) => (
            <div
              key={title}
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}
              className="border rounded-lg p-6"
            >
              <h3 className="text-white font-medium mb-1.5 text-sm">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
