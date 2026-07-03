interface HeroProps {
  onClubClick: () => void;
  onSponsorClick: () => void;
}

export default function Hero({ onClubClick, onSponsorClick }: HeroProps) {
  return (
    <section style={{ background: "var(--bordeaux)" }} className="pt-20 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div
          style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
          className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-8"
        >
          Sport amateur
        </div>

        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-6 whitespace-nowrap">
          Le sport local, <em style={{ color: "var(--gold)" }} className="not-italic">levier de croissance partagée.</em>
        </h1>

        <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Trofiz connecte les clubs de football, basketball, handball et bien d'autres
          avec les entreprises qui veulent s'ancrer dans leur territoire. Ensemble, on fait avancer quelque chose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => { onClubClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Je représente un club
          </button>
          <button
            onClick={() => { onSponsorClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Je suis une entreprise
          </button>
        </div>

        <div className="flex justify-center gap-12 mt-16 pt-10 border-t border-white/10">
          {[
            { val: "60%", label: "Réduction d'impôt" },
            { val: "100%", label: "Clubs amateurs" },
            { val: "Local", label: "Ancrage territorial" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={{ color: "var(--gold)" }} className="text-2xl font-semibold">{val}</div>
              <div className="text-white/45 text-xs mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
