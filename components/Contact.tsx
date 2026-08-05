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

  const inputClass = "w-full px-4 py-3 rounded text-sm border outline-none transition-colors focus:border-bordeaux";

  return (
    <section id="contact" style={{ background: "var(--cream)" }} className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <div
            style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
            className="inline-block text-xs font-medium tracking-widest uppercase border px-4 py-1.5 rounded-full mb-6"
          >
            Contact
          </div>
          <h2 style={{ color: "var(--charcoal)" }} className="text-3xl font-semibold mb-3">Parlons-en</h2>
          <p style={{ color: "var(--text-mid)" }} className="text-sm mb-1">
            Premier échange de 20 minutes, sans engagement.
          </p>
          <p style={{ color: "var(--text-mid)" }} className="text-sm opacity-70">
            On vous recontacte sous 24h ouvrées.
          </p>
        </div>

        {status === "sent" ? (
          <div
            style={{ background: "var(--bordeaux)", color: "white" }}
            className="rounded-lg p-10 text-center"
          >
            <div style={{ color: "var(--gold)" }} className="text-3xl mb-4">✓</div>
            <h3 className="font-semibold text-lg mb-2">Message envoyé</h3>
            <p className="text-white/70 text-sm">Nous vous recontacterons dans les 24 heures ouvrées.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex rounded overflow-hidden border" style={{ borderColor: "var(--cream-dark)" }}>
              {(["club", "entreprise"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className="flex-1 py-2.5 text-sm font-medium transition-colors"
                  style={
                    type === t
                      ? { background: "var(--bordeaux)", color: "white" }
                      : { background: "var(--cream-dark)", color: "var(--text-mid)" }
                  }
                >
                  {t === "club" ? "Je représente un club" : "Je suis une entreprise"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="nom"
                placeholder="Nom"
                required
                value={form.nom}
                onChange={handleChange}
                style={{ borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)" }}
                className={inputClass}
              />
              <input
                name="organisation"
                placeholder={type === "club" ? "Nom du club" : "Entreprise"}
                required
                value={form.organisation}
                onChange={handleChange}
                style={{ borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)" }}
                className={inputClass}
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              style={{ borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)" }}
              className={inputClass}
            />
            <input
              name="telephone"
              type="tel"
              placeholder="Téléphone (optionnel)"
              value={form.telephone}
              onChange={handleChange}
              style={{ borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)" }}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder={type === "club" ? "Parlez-nous de votre club, vos besoins..." : "Présentez votre entreprise et vos attentes..."}
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ borderColor: "var(--cream-dark)", background: "white", color: "var(--charcoal)", resize: "none" }}
              className={inputClass}
            />

            {status === "error" && (
              <p className="text-red-600 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "var(--bordeaux)", color: "white" }}
              className="w-full py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
