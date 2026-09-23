interface HeroProps {
  onClubClick: () => void;
  onSponsorClick: () => void;
}

export default function Hero({ onClubClick, onSponsorClick }: HeroProps) {
  return (
    <section style={{ background: "var(--bordeaux)" }} className="pt-20 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5">
          Clubs amateurs et entreprises locales : on crée le partenariat,{" "}
          <em style={{ color: "var(--gold-bright)" }} className="not-italic">on sécurise le montage.</em>
        </h1>

        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 px-2">
          Trofiz met en relation les clubs sportifs amateurs et les entreprises de leur territoire,
          choisit avec eux la bonne formule (mécénat, partenariat ou les deux) et prépare des contrats conformes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <button
            onClick={() => { onClubClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="w-full sm:w-auto px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Je représente un club →
          </button>
          <button
            onClick={() => { onSponsorClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="w-full sm:w-auto px-8 py-3 rounded font-semibold text-sm border border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            Je représente une entreprise →
          </button>
        </div>

        <div className="flex justify-center gap-6 sm:gap-12 mt-12 pt-8 border-t border-white/15">
          {[
            { val: "60 %", label: "de réduction d'impôt sur la part don" },
            { val: "0 €", label: "à payer par le club avant signature" },
            { val: "2", label: "contrats clairs : don et partenariat" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center max-w-[9rem]">
              <div style={{ color: "var(--gold-bright)" }} className="text-xl sm:text-2xl font-semibold">{val}</div>
              <div className="text-white/80 text-xs mt-1 tracking-wide leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
