
import { Banner } from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import GlassyFeatureGrid from "@/components/GlassyFeatureGrid";
import FAQSection from "@/components/FAQSection";
import HowItWorks from "@/components/HowItWorks";
import CardSwap from "@/blocks/Components/CardSwap/CardSwap";
import CardStack from "@/components/CardStack";
import LogoTicker from "@/components/LogoTicker";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <LogoTicker/>
      <GlassyFeatureGrid/>
      <CardStack/>
      <HowItWorks/>
      <FAQSection/>

    </>
  );
}
