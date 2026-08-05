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

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Votre entreprise soutient un club local.{" "}
          <em style={{ color: "var(--gold)" }} className="not-italic">Vous déduisez 60% du montant de vos impôts.</em>
        </h1>

        <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto mb-10 px-2">
          Trofiz identifie le bon club près de chez vous, structure le partenariat
          et s'occupe de tout — de la mise en relation au reçu fiscal.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <button
            onClick={() => { onClubClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
            className="w-full sm:w-auto px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Je représente un club
          </button>
          <button
            onClick={() => { onSponsorClick(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="w-full sm:w-auto px-8 py-3 rounded font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Je suis une entreprise
          </button>
        </div>

        <div className="flex justify-center gap-6 sm:gap-12 mt-12 pt-8 border-t border-white/10">
          {[
            { val: "60%", label: "Réduction d'IS — loi Aillagon" },
            { val: "0€", label: "Pour le club" },
            { val: "Local", label: "Ancrage territorial" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div style={{ color: "var(--gold)" }} className="text-xl sm:text-2xl font-semibold">{val}</div>
              <div className="text-white/45 text-xs mt-1 tracking-wide leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
