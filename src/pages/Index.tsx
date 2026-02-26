import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MissionSection from "@/components/MissionSection";
import DifferentialsSection from "@/components/DifferentialsSection";

import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import CommerceSection from "@/components/CommerceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <DifferentialsSection />
        
        <ProcessSection />
        <ServicesSection />
        <CommerceSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <WhatsAppSticky />
    </>
  );
};

export default Index;
