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

  const inputClass = "w-full px-4 py-3 rounded text-sm border outline-none transition-colors";
  const inputStyle = { borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)" };
  const labelClass = "block text-sm font-medium mb-1.5";
  const labelStyle = { color: "var(--charcoal)" };

  return (
    <section id="contact" style={{ background: "var(--cream)" }} className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <div
            style={{ color: "var(--gold-ink)", borderColor: "var(--gold-ink)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Contact
          </div>
          <h2 style={{ color: "var(--charcoal)" }} className="text-3xl font-semibold mb-3">Parlons-en</h2>
          <p style={{ color: "var(--text-mid)" }} className="text-sm">
            Un premier échange sans engagement, pour les clubs comme pour les entreprises.
          </p>
        </div>

        {status === "sent" ? (
          <div
            role="status"
            style={{ background: "var(--bordeaux)", color: "white" }}
            className="rounded-lg p-10 text-center"
          >
            <div aria-hidden="true" style={{ color: "var(--gold-bright)" }} className="text-3xl mb-4">✓</div>
            <h3 className="font-semibold text-lg mb-2">Demande envoyée</h3>
            <p className="text-white/80 text-sm">Merci. Nous revenons vers vous pour organiser un premier échange.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div role="group" aria-label="Vous êtes" className="flex rounded overflow-hidden border" style={{ borderColor: "var(--cream-dark)" }}>
              {(["club", "entreprise"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={type === t}
                  onClick={() => setType(t)}
                  className="flex-1 py-2.5 text-sm font-medium transition-colors"
                  style={
                    type === t
                      ? { background: "var(--bordeaux)", color: "white" }
                      : { background: "var(--cream-dark)", color: "var(--text-mid)" }
                  }
                >
                  {t === "club" ? "Je représente un club" : "Je représente une entreprise"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-nom" className={labelClass} style={labelStyle}>Nom et prénom</label>
                <input id="contact-nom" name="nom" autoComplete="name" required value={form.nom} onChange={handleChange}
                  style={inputStyle} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-organisation" className={labelClass} style={labelStyle}>
                  {type === "club" ? "Nom du club" : "Entreprise"}
                </label>
                <input id="contact-organisation" name="organisation" autoComplete="organization" required value={form.organisation}
                  onChange={handleChange} style={inputStyle} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass} style={labelStyle}>Adresse email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange}
                style={inputStyle} className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-telephone" className={labelClass} style={labelStyle}>
                Téléphone <span style={{ color: "var(--text-mid)" }} className="font-normal">(facultatif)</span>
              </label>
              <input id="contact-telephone" name="telephone" type="tel" autoComplete="tel" value={form.telephone} onChange={handleChange}
                style={inputStyle} className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass} style={labelStyle}>
                Votre message <span style={{ color: "var(--text-mid)" }} className="font-normal">(facultatif)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={type === "club" ? "Votre club, votre ville, vos besoins pour la saison…" : "Votre entreprise, votre ville, ce que vous recherchez…"}
                rows={4}
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "none" }}
                className={inputClass}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="text-red-700 text-sm">
                L’envoi n’a pas abouti. Vérifiez votre connexion et réessayez, ou écrivez-nous à contact@trofiz.fr.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "var(--bordeaux)", color: "white" }}
              className="w-full py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>

            <p style={{ color: "var(--text-mid)" }} className="text-xs leading-relaxed">
              Vos informations servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées.{" "}
              <a href="/confidentialite" style={{ color: "var(--bordeaux)" }} className="underline">
                En savoir plus sur vos données
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
