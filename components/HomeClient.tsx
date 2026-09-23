"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Duo from "@/components/Duo";
import Offers from "@/components/Offers";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [contactType, setContactType] = useState<"club" | "entreprise" | null>(null);
  const toClub = () => setContactType("club");
  const toEntreprise = () => setContactType("entreprise");

  return (
    <main>
      <Nav />
      <Hero onClubClick={toClub} onSponsorClick={toEntreprise} />
      <Duo onClubClick={toClub} onSponsorClick={toEntreprise} />
      <Offers />
      <HowItWorks />
      <FAQ />
      <Contact defaultType={contactType} />
      <Footer />
    </main>
  );
}
