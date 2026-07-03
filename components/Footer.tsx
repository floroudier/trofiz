export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "white" }} className="py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div
              style={{ background: "var(--gold)", color: "var(--bordeaux-dark)" }}
              className="w-7 h-7 rounded flex items-center justify-center font-bold text-xs"
            >
              T
            </div>
            <div>
              <div className="font-semibold tracking-wider text-sm">TROFIZ</div>
              <div style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.1em" }}>SPORTS TECH</div>
            </div>
          </div>
          <p className="text-white/40 text-xs max-w-xs leading-relaxed">
            Connecter les clubs sportifs amateurs d'Île-de-France avec les entreprises qui veulent s'y ancrer.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <div style={{ color: "var(--gold)" }} className="text-xs font-medium tracking-widest uppercase mb-3">Navigation</div>
            <ul className="space-y-2">
              {[["#clubs", "Clubs"], ["#entreprises", "Entreprises"], ["#comment", "Comment ça marche"], ["#contact", "Contact"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ color: "var(--gold)" }} className="text-xs font-medium tracking-widest uppercase mb-3">Contact</div>
            <ul className="space-y-2">
              <li className="text-white/50 text-sm">contact@trofiz.fr</li>
              <li className="text-white/50 text-sm">Île-de-France</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/25 text-xs">© {new Date().getFullYear()} Trofiz. Tous droits réservés.</p>
        <p className="text-white/25 text-xs">Sport amateur · Île-de-France · Sponsoring local</p>
      </div>
    </footer>
  );
}
