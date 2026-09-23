import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type LegalSection = { title: string; body: React.ReactNode };

interface LegalPageProps {
  title: string;
  path: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

// Mise en page commune aux pages légales (confidentialité, CGU), alignée sur les mentions légales.
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
      <main style={{ background: "var(--cream)" }} className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 style={{ color: "var(--bordeaux)" }} className="text-3xl font-bold mb-2">{title}</h1>
          <div style={{ color: "var(--text-mid)" }} className="text-sm mb-10">{intro}</div>
          {sections.map(({ title: heading, body }) => (
            <section key={heading} className="mb-8">
              <h2 style={{ color: "var(--bordeaux)" }} className="text-lg font-semibold mb-3">{heading}</h2>
              <div style={{ color: "var(--charcoal)" }} className="text-sm leading-relaxed space-y-3">{body}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const linkStyle = { color: "var(--bordeaux)" };
