// Affiche de match « votre club × votre entreprise » : l’image de la collaboration (design system V2).

type IconProps = { className?: string; color?: string; size?: number };

// size : dimensions explicites, nécessaires quand l’icône est imbriquée dans un autre SVG
export function BallIcon({ className, color = "currentColor", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12c4.8-3 13.2-3 18 0" />
      <path d="M6 5.5c3 4.5 3 9.5 1.2 13" />
      <path d="M18 5.5c-3 4.5-3 9.5-1.2 13" />
    </svg>
  );
}

export function BriefcaseIcon({ className, color = "currentColor", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V4.5h6V7" />
      <path d="M3 12.5h18" />
      <path d="M11 12.5v2h2v-2" />
    </svg>
  );
}

// Écusson commun aux deux équipes : même silhouette, couleurs propres à chaque camp.
function Crest({ fill, children }: { fill: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 72" className="w-16 h-[72px]" aria-hidden="true">
      <path d="M32 2 L60 10 V34 C60 52 48 64 32 70 C16 64 4 52 4 34 V10 Z" fill={fill} />
      <path d="M32 8 L54 14 V34 C54 48 45 58 32 63 C19 58 10 48 10 34 V14 Z" fill="none" stroke="var(--or-vif)" strokeWidth="1.5" />
      <g transform="translate(19 23) scale(1.08)">{children}</g>
    </svg>
  );
}

// Nom sur deux lignes pour les deux camps : écussons et noms restent alignés.
function Team({ name, children }: { name: string; children: React.ReactNode }) {
  const [first, ...rest] = name.split(" ");
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      {children}
      <span className="t-display text-[28px] leading-[.9]" style={{ color: "var(--nuit)" }}>{first}<br />{rest.join(" ")}</span>
    </div>
  );
}

export default function Fixture() {
  return (
    <figure
      className="relative m-0 px-6 pt-5 pb-6 pr-8 shadow-[0_30px_60px_rgba(0,0,0,.35)]"
      style={{ background: "var(--craie)", color: "var(--nuit)", clipPath: "polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%)" }}
      aria-label="Affiche : votre club et votre entreprise"
    >
      <div className="pb-3.5 border-b" style={{ borderColor: "var(--papier-line)" }}>
        <span className="t-label" style={{ color: "var(--or-encre)" }}>L’affiche de la saison</span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3 pt-6">
        <Team name="Votre club">
          <Crest fill="var(--club)"><BallIcon color="var(--craie)" size={24} /></Crest>
        </Team>
        <span className="t-display text-[52px] h-[72px] flex items-center" style={{ color: "var(--or)" }} aria-hidden="true">×</span>
        <Team name="Votre entreprise">
          <Crest fill="var(--nuit)"><BriefcaseIcon color="var(--or-vif)" size={24} /></Crest>
        </Team>
      </div>
    </figure>
  );
}
