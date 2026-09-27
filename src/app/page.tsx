import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { CloudPhoneSystems } from "@/components/CloudPhoneSystems";
import { Services } from "@/components/Services";
import { Models } from "@/components/Models";
import { HowItWorks } from "@/components/HowItWorks";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Heritage />
        <CloudPhoneSystems />
        <Services />
        <Models />
        <HowItWorks />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
