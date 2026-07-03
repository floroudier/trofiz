const STEPS = [
  {
    num: "01",
    title: "On analyse",
    body: "Trofiz cartographie les clubs de votre territoire et sélectionne ceux qui correspondent à votre image, vos valeurs et vos objectifs.",
  },
  {
    num: "02",
    title: "On qualifie",
    body: "Nous préparons pour vous une présentation claire de chaque opportunité : audience, visibilité terrain, avantages fiscaux applicables.",
  },
  {
    num: "03",
    title: "On connecte",
    body: "Trofiz facilite la première prise de contact entre votre entreprise et le club, dans un cadre structuré et bienveillant.",
  },
  {
    num: "04",
    title: "On accompagne",
    body: "Nous restons disponibles pour répondre à vos questions et vous orienter vers les bons interlocuteurs pour formaliser le partenariat.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="py-20 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div
            style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
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
