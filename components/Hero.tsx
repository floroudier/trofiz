import Fixture from "./Fixture";

interface HeroProps {
  onClubClick: () => void;
  onSponsorClick: () => void;
}

const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

// Lignes de terrain à la craie, 9 % d’opacité : elles cadrent la scène
function FieldLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#FFFDF7" strokeOpacity=".09" strokeWidth="2">
        <line x1="1010" y1="0" x2="1010" y2="820" />
        <circle cx="1010" cy="400" r="190" />
        <circle cx="1010" cy="400" r="5" fill="#FFFDF7" fillOpacity=".12" />
        <rect x="40" y="170" width="220" height="460" />
        <rect x="40" y="290" width="80" height="220" />
        <path d="M260 310 A120 120 0 0 1 260 490" />
        <rect x="40" y="40" width="1360" height="740" />
      </g>
    </svg>
  );
}

const SCORE = [
  ["60 %", "de réduction d’impôt sur la part don"],
  ["0 €", "à payer par le club avant la signature"],
  ["2", "contrats clairs, un seul montage"],
];

export default function Hero({ onClubClick, onSponsorClick }: HeroProps) {
  return (
    <section className="grain overflow-hidden" style={{ background: "var(--nuit)", color: "var(--craie)" }}>
      <FieldLines />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-6 items-center pt-16 sm:pt-20 pb-12">
          <div>
            <p className="t-label kicker mb-6" style={{ color: "var(--or-vif)" }}>Jouez local</p>
            <h1 className="t-display text-[clamp(76px,13vw,168px)]">
              Faites{" "}<br />équipe<span style={{ color: "var(--or)" }}>.</span>
            </h1>
            <p className="mt-7 max-w-[34ch] text-[clamp(17px,1.6vw,20px)] leading-relaxed" style={{ color: "var(--craie-muted)" }}>
              Trofiz réunit les clubs amateurs et les entreprises de leur ville pour viser les sommets, ensemble. Et on s’occupe du montage.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <button className="btn btn-or" onClick={() => { onClubClick(); goContact(); }}>
                Je suis un club <span className="arr" aria-hidden="true">→</span>
              </button>
              <button className="btn btn-craie" onClick={() => { onSponsorClick(); goContact(); }}>
                Je suis une entreprise <span className="arr" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[440px] mx-auto lg:mr-0 py-8">
            <svg className="absolute -right-[6%] top-1/2 -translate-y-1/2 w-[118%] pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M20 14 L94 14 L86 32 L60 32 C56 48 52 64 54 76 C55 83 61 87 70 88 L34 88 C38 70 42 50 44 32 L12 32 Z" fill="none" stroke="var(--or)" strokeOpacity=".28" strokeWidth=".35" />
              <path d="M55 36 C52 52 49 64 51 74" fill="none" stroke="var(--or)" strokeOpacity=".28" strokeWidth=".35" />
            </svg>
            <div className="relative"><Fixture /></div>
          </div>
        </div>

        <dl className="grid sm:grid-cols-3 border-t border-[var(--nuit-line)]">
          {SCORE.map(([val, label], i) => (
            <div key={label} className={`flex items-baseline gap-3.5 py-5 sm:py-6 ${i > 0 ? "border-t sm:border-t-0 sm:border-l sm:pl-7 border-[var(--nuit-line)]" : ""}`}>
              <dt className="sr-only">{label}</dt>
              <dd className="t-stat text-[54px] m-0" style={{ color: "var(--or-vif)" }}>{val}</dd>
              <dd className="text-[13px] leading-snug max-w-[18ch] m-0" style={{ color: "var(--craie-muted)" }} aria-hidden="true">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
