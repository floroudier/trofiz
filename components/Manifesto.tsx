export default function Manifesto() {
  return (
    <section style={{ background: "var(--cream-dark)" }} className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          style={{ color: "var(--bordeaux)", borderColor: "var(--bordeaux)" }}
          className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-8"
        >
          Notre conviction
        </div>

        <blockquote style={{ color: "var(--charcoal)" }} className="text-xl md:text-3xl font-light leading-relaxed mb-8">
          "Des milliers de clubs franciliens font vivre le sport de quartier.{" "}
          <span style={{ color: "var(--bordeaux)" }} className="font-medium">
            Ils manquent de moyens, pas de valeur.
          </span>"
        </blockquote>

        <p style={{ color: "var(--text-mid)" }} className="text-base leading-relaxed max-w-xl mx-auto">
          En face, des entreprises cherchent à s'ancrer dans leur territoire, à valoriser leur image,
          à bénéficier d'avantages fiscaux. Le lien entre les deux n'existait pas. C'est ce que Trofiz construit.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-14 pt-10 border-t" style={{ borderColor: "var(--cream)" }}>
          {[
            {
              icon: "◆",
              title: "Le sport amateur, un levier sous-estimé",
              body: "Les clubs locaux touchent directement des centaines de familles, ancrent les valeurs de territoire et créent du lien social là où les grandes marques ne vont pas.",
            },
            {
              icon: "◆",
              title: "Le sponsoring local, une opportunité manquée",
              body: "PME, artisans, commerces — beaucoup ignorent qu'ils peuvent déduire leurs dons sportifs à 60% et gagner en visibilité là où vivent leurs clients.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="flex-1 text-left">
              <div style={{ color: "var(--gold)" }} className="text-lg mb-3">{icon}</div>
              <h3 style={{ color: "var(--charcoal)" }} className="font-semibold mb-2 text-sm tracking-wide uppercase">{title}</h3>
              <p style={{ color: "var(--text-mid)" }} className="text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
