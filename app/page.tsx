"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import HowItWorks from "@/components/HowItWorks";
import ForClubs from "@/components/ForClubs";
import ForSponsors from "@/components/ForSponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactType, setContactType] = useState<"club" | "entreprise" | null>(null);

  return (
    <main>
      <Nav />
      <Hero
        onClubClick={() => setContactType("club")}
        onSponsorClick={() => setContactType("entreprise")}
      />
      <Manifesto />
      <HowItWorks />
      <ForClubs onCtaClick={() => setContactType("club")} />
      <ForSponsors onCtaClick={() => setContactType("entreprise")} />
      <FAQ />
      <Contact defaultType={contactType} />
      <Footer />
    </main>
  );
}
