const STEPS = [
  {
    num: "01",
    title: "On échange",
    body: "Un premier échange, sans engagement, pour comprendre le club ou l'entreprise : territoire, budget, objectifs.",
  },
  {
    num: "02",
    title: "On propose",
    body: "Nous identifions le bon partenaire et la bonne formule : mécénat, partenariat ou les deux, avec le coût réel pour l'entreprise.",
  },
  {
    num: "03",
    title: "On prépare",
    body: "Nous vérifions que le club peut émettre un reçu fiscal et préparons les contrats : convention de mécénat, contrat de partenariat.",
  },
  {
    num: "04",
    title: "Vous signez",
    body: "Le club et l'entreprise signent. L'argent est versé directement au club, et nous restons disponibles pendant la saison.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="py-20 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div
            style={{ color: "var(--gold-ink)", borderColor: "var(--gold-ink)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Méthode
          </div>
          <h2 style={{ color: "var(--charcoal)" }} className="text-3xl font-semibold">Comment ça marche ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map(({ num, title, body }) => (
            <div key={num} className="relative">
              <div
                aria-hidden="true"
                style={{ color: "var(--bordeaux)", opacity: 0.12 }}
                className="text-7xl font-bold leading-none mb-4 select-none"
              >
                {num}
              </div>
              <div
                style={{ background: "var(--bordeaux)" }}
                className="w-8 h-0.5 mb-4"
              />
              <h3 style={{ color: "var(--charcoal)" }} className="font-semibold mb-2">{title}</h3>
              <p style={{ color: "var(--text-mid)" }} className="text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
