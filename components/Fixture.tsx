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

function Team({ name, detail, children }: { name: string; detail: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      {children}
      <span className="t-display text-[28px] leading-[.9]" style={{ color: "var(--nuit)" }}>{name}</span>
      <span className="text-xs" style={{ color: "var(--gris)" }}>{detail}</span>
    </div>
  );
}

export default function Fixture() {
  return (
    <figure
      className="relative m-0 px-6 pt-5 pb-5 pr-8 shadow-[0_30px_60px_rgba(0,0,0,.35)]"
      style={{ background: "var(--craie)", color: "var(--nuit)", clipPath: "polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%)" }}
      aria-label="Exemple d’affiche : votre club et votre entreprise, en pack mixte pour la saison 2026-2027"
    >
      <div className="flex items-center justify-between pb-3.5 border-b" style={{ borderColor: "var(--papier-line)" }}>
        <span className="t-label" style={{ color: "var(--or-encre)" }}>L’affiche de la saison</span>
        <span className="t-label text-[9px] px-2 py-0.5" style={{ background: "var(--nuit)", color: "var(--craie)", clipPath: "polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)" }}>
          Exemple
        </span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 pt-5 pb-4">
        <Team name="Votre club" detail="Handball · Asnières">
          <svg viewBox="0 0 64 72" className="w-16 h-[72px]" aria-hidden="true">
            <path d="M32 2 L60 10 V34 C60 52 48 64 32 70 C16 64 4 52 4 34 V10 Z" fill="var(--club)" />
            <path d="M32 8 L54 14 V34 C54 48 45 58 32 63 C19 58 10 48 10 34 V14 Z" fill="none" stroke="var(--or-vif)" strokeWidth="1.5" />
            <g transform="translate(19 23) scale(1.08)"><BallIcon color="var(--craie)" size={24} /></g>
          </svg>
        </Team>
        <span className="t-display text-[52px]" style={{ color: "var(--or)" }} aria-hidden="true">×</span>
        <Team name="Votre entreprise" detail="Commerce · Asnières">
          <svg viewBox="0 0 64 72" className="w-16 h-[72px]" aria-hidden="true">
            <path d="M16 10 L62 10 L54 62 L8 62 Z" fill="var(--nuit)" />
            <g transform="translate(20 22) scale(1.1)"><BriefcaseIcon color="var(--or-vif)" size={24} /></g>
          </svg>
        </Team>
      </div>
      <figcaption className="flex justify-between gap-3 pt-3.5 border-t-2 border-dashed text-xs" style={{ borderColor: "var(--papier-line)", color: "var(--gris)" }}>
        <span><b style={{ color: "var(--nuit)" }}>Pack mixte</b> · don + partenariat</span>
        <span>Saison 2026-2027</span>
      </figcaption>
    </figure>
  );
}
