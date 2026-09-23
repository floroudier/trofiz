// La méthode en quatre étapes : numéros en contour, comme un dos de maillot (l’ordre compte ici).
const STEPS = [
  ["01", "On échange", "Territoire, budget, objectifs : un premier échange sans engagement, pour le club comme pour l’entreprise."],
  ["02", "On propose", "Le bon partenaire et la bonne formule (mécénat, partenariat ou les deux), avec le coût réel."],
  ["03", "On prépare", "Nous vérifions que le club peut émettre un reçu fiscal et rédigeons les contrats."],
  ["04", "Vous signez", "L’argent est versé directement au club. Nous restons disponibles toute la saison."],
];

export default function HowItWorks() {
  return (
    <section id="comment" className="grain px-4 sm:px-8 py-20 sm:py-28" style={{ background: "var(--papier)", color: "var(--encre)" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="t-label kicker" style={{ color: "var(--or-encre)" }}>La méthode</p>
        <h2 className="t-h2 mt-6 text-[clamp(40px,5vw,60px)] max-w-[18ch]">Quatre étapes, zéro démarche pour le club.</h2>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {STEPS.map(([num, title, body], i) => (
            <li key={num} className={`pr-6 border-[var(--papier-line)] ${i % 2 !== 0 ? "sm:pl-6 sm:border-l" : ""} ${i % 4 !== 0 ? "lg:pl-6 lg:border-l" : "lg:pl-0 lg:border-l-0"}`}>
              <span className="t-number text-[104px] block" aria-hidden="true">{num}</span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--gris)" }}>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
