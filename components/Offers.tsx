"use client";
import { useState } from "react";

// Estimations indicatives (art. 238 bis CGI) : 60 % de réduction sur la part don, partenariat déductible au taux d’IS.
// Pack mixte : 70 % don / 30 % partenariat. Plafond du mécénat : 20 000 € ou 0,5 % du CA, non atteint ici (20 000 € max).
const eur = (n: number) => `${Math.round(n).toLocaleString("fr-FR").replace(/ | /g, " ")} €`;

type Ticket = { formule: string; tag: string; net: string; base: string; points: string[]; star?: boolean };

function Billet({ t, index }: { t: Ticket; index: number }) {
  const dark = !!t.star;
  const muted = dark ? "var(--craie-muted)" : "var(--gris)";
  return (
    <article className="billet h-full" style={{ background: dark ? "var(--club)" : "var(--craie)", color: dark ? "var(--craie)" : "var(--encre)" }}
      aria-label={`Formule ${t.formule}, exemple`}>
      <div className="flex flex-col gap-3.5 px-5 sm:px-6 pt-6 pb-5">
        <span className="t-label" style={{ color: dark ? "var(--or-vif)" : "var(--or-encre)" }}>{t.tag}</span>
        <h3 className="t-h2 text-[40px]">{t.formule}</h3>
        <p className="t-stat text-[44px] m-0" style={{ color: dark ? "var(--or-vif)" : "var(--encre)" }}>{t.net}</p>
        <p className="text-[13px] -mt-2" style={{ color: muted }}>{t.base}</p>
        <ul className="pt-3.5 border-t grid gap-2 text-sm" style={{ borderColor: dark ? "var(--nuit-line)" : "var(--papier-line)" }}>
          {t.points.map((p) => (
            <li key={p} className="flex gap-2.5"><span className="puce" style={{ color: dark ? "var(--or-vif)" : "var(--club)" }} aria-hidden="true" />{p}</li>
          ))}
        </ul>
        <p className="text-[11px] mt-auto pt-1" style={{ color: muted }}>Estimation indicative, à confirmer avec votre comptable.</p>
      </div>
      <div className="flex items-center justify-center border-l-2 border-dashed" style={{ borderColor: dark ? "var(--nuit-line)" : "var(--papier-line)" }}>
        <span className="billet-talon t-label text-[10px]" style={{ color: dark ? "var(--or-vif)" : "var(--or-encre)" }}>Exemple · 0{index + 1}</span>
      </div>
    </article>
  );
}

export default function Offers() {
  const [montant, setMontant] = useState(5000);
  const [is, setIs] = useState(0.25);
  const don = Math.round((montant * 0.7) / 100) * 100;
  const partenariat = montant - don;

  const tickets: Ticket[] = [
    { formule: "Mécénat", tag: "Don au club", net: eur(montant * 0.4), base: `coût net estimé pour un don de ${eur(montant)}`,
      points: ["Reçu fiscal du club", "60 % de réduction d’impôt", `Contreparties jusqu’à ${eur(montant * 0.25)} : nom sur la page des mécènes, invitations`] },
    { formule: "Partenariat", tag: "Visibilité", net: `≈ ${eur(montant * (1 - is))}`, base: `coût net estimé pour ${eur(montant)} HT`,
      points: ["Logo maillot, panneaux, réseaux", "Facture du club", "Déductible comme une dépense de communication"] },
    { formule: "Pack mixte", tag: "Le meilleur des deux", star: true, net: `≈ ${eur(don * 0.4 + partenariat * (1 - is))}`,
      base: `coût net estimé pour ${eur(montant)}, dont ${eur(don)} de don`,
      points: ["Don et partenariat, deux contrats", "60 % sur la part don", "Logo maillot inclus"] },
  ];

  return (
    <section id="formules" className="grain px-4 sm:px-8 py-20 sm:py-28" style={{ background: "var(--papier-2)", color: "var(--encre)" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="t-label kicker" style={{ color: "var(--or-encre)" }}>Nos formules</p>
        <h2 className="t-h2 mt-6 text-[clamp(40px,5vw,60px)] max-w-[16ch]">Trois façons de faire équipe.</h2>
        <p className="mt-5 max-w-[60ch] text-[17px]" style={{ color: "var(--gris)" }}>
          Réglez un montant : chaque billet calcule le coût réel pour l’entreprise. Ce sont des exemples, pas des offres à prix fixe.
        </p>

        <form className="mt-10 grid gap-4 px-5 sm:px-6 py-5 border-l-4" style={{ background: "var(--craie)", borderColor: "var(--club)" }}
          aria-label="Simulateur de coût net" onSubmit={(e) => e.preventDefault()}>
          <span className="t-label" style={{ color: "var(--or-encre)" }}>Simulez votre soutien</span>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <label htmlFor="sim-montant" className="font-semibold text-[15px]">Montant versé au club</label>
            <output htmlFor="sim-montant" className="t-stat text-[44px]" style={{ color: "var(--club)" }}>{eur(montant)}</output>
          </div>
          <input id="sim-montant" type="range" min={1000} max={20000} step={500} value={montant}
            onChange={(e) => setMontant(Number(e.target.value))} className="sim-range" aria-valuetext={eur(montant)} />
          <fieldset className="flex flex-wrap items-center justify-between gap-3">
            <legend className="float-left font-semibold text-[15px]">Impôt sur les sociétés de l’entreprise</legend>
            <div className="inline-flex p-[3px]" style={{ background: "var(--papier-2)" }}>
              {[0.15, 0.25].map((taux) => (
                <label key={taux} className="relative cursor-pointer">
                  <input type="radio" name="is" value={taux} checked={is === taux} onChange={() => setIs(taux)} className="peer absolute inset-0 opacity-0 cursor-pointer" />
                  <span className="block px-4 py-2 text-sm font-bold peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-[var(--or)]"
                    style={is === taux
                      ? { background: "var(--club)", color: "var(--craie)", clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }
                      : { color: "var(--gris)" }}>
                    {Math.round(taux * 100)} %
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {tickets.map((t, i) => <Billet key={t.formule} t={t} index={i} />)}
        </div>
        <p className="mt-5 text-xs" style={{ color: "var(--gris)" }}>
          Réduction d’impôt de 60 % sur les dons, dans la limite de 20 000 € ou de 0,5 % du chiffre d’affaires (article 238 bis du CGI). Taux d’IS de 15 % pour les PME sur la première tranche de bénéfice.
        </p>
      </div>
    </section>
  );
}
