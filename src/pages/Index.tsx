import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TriageSection from "@/components/TriageSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommerceSection from "@/components/CommerceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppSticky from "@/components/WhatsAppSticky";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TriageSection />
        <ProcessSection />
        <TestimonialsSection />
        <CommerceSection />
        <ServiceAreaSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <WhatsAppSticky />
    </>
  );
};

export default Index;
