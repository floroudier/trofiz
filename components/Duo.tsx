import { BallIcon, BriefcaseIcon } from "./Fixture";

interface DuoProps {
  onClubClick: () => void;
  onSponsorClick: () => void;
}

const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

const CLUB = [
  "Aucune démarche commerciale de votre part",
  "Des partenaires adaptés à votre taille et à vos valeurs",
  "Vérification de votre éligibilité au reçu fiscal",
  "Contrats préparés, jusqu’à la signature",
];
const ENTREPRISE = [
  "Un club choisi selon votre zone et votre image",
  "Le coût réel calculé selon votre situation",
  "Deux contrats clairs : mécénat et partenariat",
  "L’argent versé directement au club",
];

// Les deux équipes, côte à côte : même promesse, deux points de vue
export default function Duo({ onClubClick, onSponsorClick }: DuoProps) {
  return (
    <div className="grid lg:grid-cols-2">
      <section id="clubs" className="grain px-4 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16 py-20 sm:py-28"
        style={{ background: "var(--club)", color: "var(--craie)" }}>
        <div className="max-w-[520px]">
          <p className="t-label kicker" style={{ color: "var(--or-vif)" }}>
            <BallIcon className="w-5 h-5 -ml-1" /> Côté club
          </p>
          <h2 className="t-h2 mt-6 text-[clamp(36px,4.4vw,56px)]">Votre club mérite des partenaires à sa hauteur.</h2>
          <ul className="mt-9 space-y-3.5">
            {CLUB.map((item) => (
              <li key={item} className="flex gap-3 text-[15px]" style={{ color: "var(--craie)" }}>
                <span className="puce" style={{ color: "var(--or-vif)" }} aria-hidden="true" />{item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold" style={{ color: "var(--or-vif)" }}>Rien à payer avant la signature d’un partenariat.</p>
          <button className="btn btn-or mt-6" onClick={() => { onClubClick(); goContact(); }}>
            Présenter mon club <span className="arr" aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section id="entreprises" className="grain px-4 sm:px-8 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pl-16 py-20 sm:py-28"
        style={{ background: "var(--papier)", color: "var(--encre)" }}>
        <div className="max-w-[520px]">
          <p className="t-label kicker" style={{ color: "var(--or-encre)" }}>
            <BriefcaseIcon className="w-5 h-5 -ml-1" /> Côté entreprise
          </p>
          <h2 className="t-h2 mt-6 text-[clamp(36px,4.4vw,56px)]">Votre nom au cœur de votre ville.</h2>
          <ul className="mt-9 space-y-3.5">
            {ENTREPRISE.map((item) => (
              <li key={item} className="flex gap-3 text-[15px]">
                <span className="puce" style={{ color: "var(--club)" }} aria-hidden="true" />{item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold" style={{ color: "var(--club)" }}>Un don de 5 000 € vous revient à 2 000 € après réduction d’impôt.</p>
          <button className="btn btn-club mt-6" onClick={() => { onSponsorClick(); goContact(); }}>
            Trouver mon club <span className="arr" aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
