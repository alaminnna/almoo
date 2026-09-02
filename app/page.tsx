import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Work from "@/components/Work";
import AlmooApproach from "@/components/AlmooApproach";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { CinematicFooter } from "@/components/CinematicFooter";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import PersonSchema from "@/components/seo/PersonSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <PersonSchema />
      <FAQSchema />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <Work />
        <AlmooApproach />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <CinematicFooter />
    </>
  );
}
