import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Work from "@/components/Work";
import AlmooApproach from "@/components/AlmooApproach";
import Founder from "@/components/Founder";
import AuditCTA from "@/components/AuditCTA";
import Contact from "@/components/Contact";
import { CinematicFooter } from "@/components/CinematicFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Work />
        <AlmooApproach />
        <Founder />
        <AuditCTA />
        <Contact />
      </main>
      <CinematicFooter />
    </>
  );
}
