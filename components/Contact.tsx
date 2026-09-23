"use client";
import { useEffect, useRef, useState } from "react";

interface ContactProps {
  defaultType: "club" | "entreprise" | null;
}

export default function Contact({ defaultType }: ContactProps) {
  const [type, setType] = useState<"club" | "entreprise">("club");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ nom: "", organisation: "", email: "", telephone: "", message: "" });
  const prevDefault = useRef<"club" | "entreprise" | null>(null);

  useEffect(() => {
    if (defaultType && defaultType !== prevDefault.current) {
      setType(defaultType);
      prevDefault.current = defaultType;
    }
  }, [defaultType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  // Champs soulignés à l’encre ; au focus, soulignement bordeaux et trait or
  const inputClass = "w-full px-4 py-3.5 text-[15px] border-0 border-b-2 border-[var(--encre)] outline-none focus:border-[var(--club)] focus:shadow-[inset_0_-3px_0_var(--or)] transition-colors";
  const inputStyle = { background: "var(--craie)", color: "var(--encre)" };
  const labelClass = "block text-[13px] font-semibold mb-2";

  return (
    <section id="contact" className="grain px-4 sm:px-8 py-20 sm:py-28" style={{ background: "var(--nuit)", color: "var(--craie)" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-start">
        <div>
          <p className="t-label kicker" style={{ color: "var(--or-vif)" }}>Contact</p>
          <h2 className="t-h2 mt-6 text-[clamp(48px,7vw,88px)]">Parlons-en<span style={{ color: "var(--or)" }}>.</span></h2>
          <p className="mt-6 max-w-[38ch] text-[17px] leading-relaxed" style={{ color: "var(--craie-muted)" }}>
            Un premier échange sans engagement, pour les clubs comme pour les entreprises. Dites-nous qui vous êtes et ce que vous cherchez.
          </p>
        </div>

        {status === "sent" ? (
          <div role="status" className="p-10" style={{ background: "var(--club)" }}>
            <p className="t-h2 text-4xl">Demande envoyée<span style={{ color: "var(--or-vif)" }}>.</span></p>
            <p className="mt-3 text-sm" style={{ color: "var(--craie-muted)" }}>Merci. Nous revenons vers vous pour organiser un premier échange.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5" style={{ background: "var(--papier)", color: "var(--encre)" }}>
            <div role="group" aria-label="Vous êtes" className="inline-grid grid-cols-2 p-1 w-full sm:w-auto" style={{ background: "var(--nuit)" }}>
              {(["club", "entreprise"] as const).map((t) => (
                <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)}
                  className="px-4 sm:px-5 py-2.5 text-[13px] font-semibold transition-colors"
                  style={type === t
                    ? { background: "var(--craie)", color: "var(--nuit)", clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }
                    : { color: "var(--craie-muted)" }}>
                  {t === "club" ? "Je suis un club" : "Je suis une entreprise"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-nom" className={labelClass}>Nom et prénom</label>
                <input id="contact-nom" name="nom" autoComplete="name" required value={form.nom} onChange={handleChange} style={inputStyle} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-organisation" className={labelClass}>{type === "club" ? "Nom du club" : "Entreprise"}</label>
                <input id="contact-organisation" name="organisation" autoComplete="organization" required value={form.organisation} onChange={handleChange} style={inputStyle} className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-email" className={labelClass}>Adresse email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} style={inputStyle} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-telephone" className={labelClass}>Téléphone <span className="font-normal" style={{ color: "var(--gris)" }}>(facultatif)</span></label>
                <input id="contact-telephone" name="telephone" type="tel" autoComplete="tel" value={form.telephone} onChange={handleChange} style={inputStyle} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass}>Votre message <span className="font-normal" style={{ color: "var(--gris)" }}>(facultatif)</span></label>
              <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleChange}
                placeholder={type === "club" ? "Votre club, votre ville, vos besoins pour la saison…" : "Votre entreprise, votre ville, ce que vous recherchez…"}
                style={{ ...inputStyle, resize: "none" }} className={inputClass} />
            </div>

            {status === "error" && (
              <p role="alert" className="text-sm" style={{ color: "#B3261E" }}>
                L’envoi n’a pas abouti. Vérifiez votre connexion et réessayez, ou écrivez-nous à contact@trofiz.fr.
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn btn-club w-full sm:w-auto">
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"} <span className="arr" aria-hidden="true">→</span>
            </button>

            <p className="text-xs leading-relaxed" style={{ color: "var(--gris)" }}>
              Vos informations servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées.{" "}
              <a href="/confidentialite" className="underline" style={{ color: "var(--club)" }}>En savoir plus sur vos données</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
