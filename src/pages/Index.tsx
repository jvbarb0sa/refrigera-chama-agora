import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TriageSection from "@/components/TriageSection";
import ProcessSection from "@/components/ProcessSection";
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
        <ServicesSection />
        <TriageSection />
        <ProcessSection />
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
