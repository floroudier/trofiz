import { TrofizMark, TrofizWordmark } from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "white" }} className="py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrofizMark className="h-8 w-auto shrink-0" grooveColor="var(--charcoal)" />
            <TrofizWordmark className="h-[18px] w-auto" color="var(--cream)" />
          </div>
          <p className="text-white/70 text-xs max-w-xs leading-relaxed">
            Connecter les clubs sportifs amateurs avec les entreprises qui veulent s’ancrer dans leur territoire.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <div style={{ color: "var(--gold)" }} className="text-xs font-medium tracking-widest uppercase mb-3">Navigation</div>
            <ul className="space-y-2">
              {[["/#clubs", "Clubs"], ["/#entreprises", "Entreprises"], ["/#comment", "Comment ça marche"], ["/#faq", "FAQ"], ["/#contact", "Contact"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/75 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ color: "var(--gold)" }} className="text-xs font-medium tracking-widest uppercase mb-3">Contact</div>
            <ul className="space-y-2">
              <li className="text-white/75 text-sm">contact@trofiz.fr</li>
              <li className="text-white/75 text-sm">Île-de-France et partout en France</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/60 text-xs">© {new Date().getFullYear()} Trofiz. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="text-white/60 hover:text-white text-xs transition-colors">Mentions légales</a>
          <a href="/confidentialite" className="text-white/60 hover:text-white text-xs transition-colors">Confidentialité</a>
          <a href="/cgu" className="text-white/60 hover:text-white text-xs transition-colors">CGU</a>
          <p className="text-white/60 text-xs">Sport amateur · Mécénat et partenariat local</p>
        </div>
      </div>
    </footer>
  );
}
