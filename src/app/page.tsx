"use client";
import { useState } from "react";
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
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import PrivacyModal from "@/components/PrivacyModal";
import RequestDemoModal from "@/components/RequestDemoModal";
import CareersModal from "@/components/CareerModal";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isRequestDemoModalOpen, setRequestDemoModalOpen] = useState(false);
  const [isCareersModalOpen, setCareersModalOpen] = useState(false);

  return (
    <>
      {/* Optional: <Banner /> */}
      <Navbar onContactClick={() => setContactModalOpen(true)} />

      <Hero
        onContactClick={() => setContactModalOpen(true)}
        onRequestDemoClick={() => setRequestDemoModalOpen(true)}
      />

      <WhyChoose />
      <LogoTicker />
      <GlassyFeatureGrid />
      <CardStack />
      <HowItWorks />
      <FAQSection />

      {/* Footer (receives open handlers) */}
      <Footer
        onContactClick={() => setContactModalOpen(true)}
        onPrivacyClick={() => setPrivacyModalOpen(true)}
        onRequestDemoClick={() => setRequestDemoModalOpen(true)}
        onCareersClick={() => setCareersModalOpen(true)}
      />

      {/* Modals rendered at the root */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
      <RequestDemoModal
        isOpen={isRequestDemoModalOpen}
        onClose={() => setRequestDemoModalOpen(false)}
      />
      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setCareersModalOpen(false)}
      />
    </>
  );
}
