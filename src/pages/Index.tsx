import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import TriggersSection from "@/components/landing/TriggersSection";
import DisclaimerSection from "@/components/landing/DisclaimerSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Impacto imediato */}
      <HeroSection />

      {/* O que é o Grupo VIP */}
      <WhatIsSection />

      {/* Benefícios */}
      <BenefitsSection />

      {/* Gatilhos mentais */}
      <TriggersSection />

      {/* Provas Sociais */}
      <SocialProofSection />

      {/* Disclaimers obrigatórios */}
      <DisclaimerSection />

      {/* CTA Final */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
