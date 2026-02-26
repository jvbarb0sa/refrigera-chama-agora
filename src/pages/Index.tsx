import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar onMenuToggle={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProblemsSection />
        <DifferentialsSection />
        <MissionSection />
        <TestimonialsSection />
        <ServiceAreaSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <WhatsAppSticky hidden={mobileMenuOpen} />
    </>
  );
};

export default Index;
