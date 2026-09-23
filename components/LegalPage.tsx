import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type LegalSection = { title: string; body: React.ReactNode };

interface LegalPageProps {
  title: string;
  path: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

// Mise en page commune aux pages légales (mentions, confidentialité, CGU) : bandeau nuit, sections numérotées sur papier.
export default function LegalPage({ title, path, intro, sections }: LegalPageProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.trofiz.fr" },
      { "@type": "ListItem", position: 2, name: title, item: `https://www.trofiz.fr${path}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="flex-1">
        <header className="grain px-4 sm:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16" style={{ background: "var(--nuit)", color: "var(--craie)" }}>
          <div className="max-w-3xl mx-auto">
            <p className="t-label kicker" style={{ color: "var(--or-vif)" }}>Informations légales</p>
            <h1 className="t-h2 mt-6 text-[clamp(40px,6vw,64px)]">{title}</h1>
            <div className="mt-5 text-[15px] leading-relaxed max-w-[60ch]" style={{ color: "var(--craie-muted)" }}>{intro}</div>
          </div>
        </header>
        <div className="grain px-4 sm:px-8 py-14 sm:py-20" style={{ background: "var(--papier)", color: "var(--encre)" }}>
          <div className="max-w-3xl mx-auto">
            {sections.map(({ title: heading, body }, i) => (
              <section key={heading} className="grid sm:grid-cols-[64px_1fr] gap-x-6 py-8 border-t first:border-t-0 first:pt-0 border-[var(--papier-line)]">
                <span className="t-label text-[12px] pt-2" style={{ color: "var(--or-encre)" }} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="t-h2 text-[28px] sm:text-[32px] mb-3" style={{ color: "var(--club)" }}>{heading}</h2>
                  <div className="text-[15px] leading-relaxed space-y-3">{body}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const linkStyle = { color: "var(--club)" };
