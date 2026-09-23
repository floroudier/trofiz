import Link from "next/link";
import { TrofizMark, TrofizWordmark } from "./Logo";

const NAV = [["/#clubs", "Clubs"], ["/#entreprises", "Entreprises"], ["/#formules", "Formules"], ["/#faq", "FAQ"], ["/#contact", "Contact"]];

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 pt-20 pb-10 border-t border-[var(--nuit-line)]" style={{ background: "var(--nuit)", color: "var(--craie)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Trofiz, accueil">
              <TrofizMark className="h-8 w-auto shrink-0" grooveColor="var(--nuit)" />
              <TrofizWordmark className="h-[18px] w-auto" color="var(--craie)" />
            </Link>
            <p className="t-display mt-8 text-[clamp(56px,8vw,96px)]">Jouez local<span style={{ color: "var(--or)" }}>.</span></p>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed" style={{ color: "var(--craie-muted)" }}>
              Mécénat et partenariat sportif : Trofiz réunit les clubs amateurs et les entreprises de leur ville.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="t-label mb-4" style={{ color: "var(--or-vif)" }}>Navigation</p>
              <ul className="space-y-2.5">
                {NAV.map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-sm hover:text-[var(--craie)] transition-colors" style={{ color: "var(--craie-muted)" }}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="t-label mb-4" style={{ color: "var(--or-vif)" }}>Contact</p>
              <ul className="space-y-2.5 text-sm" style={{ color: "var(--craie-muted)" }}>
                <li>contact@trofiz.fr</li>
                <li>Île-de-France et partout en France</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-[var(--nuit-line)] flex flex-col md:flex-row justify-between gap-3 text-xs" style={{ color: "var(--craie-muted)" }}>
          <p>© {new Date().getFullYear()} Trofiz. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-[var(--craie)]">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-[var(--craie)]">Confidentialité</Link>
            <Link href="/cgu" className="hover:text-[var(--craie)]">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
