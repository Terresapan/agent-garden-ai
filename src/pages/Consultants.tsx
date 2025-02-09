
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/consultants/HeroSection";
import { BenefitsSection } from "@/components/consultants/BenefitsSection";
import { HowItWorksSection } from "@/components/consultants/HowItWorksSection";
import { IdeaForm } from "@/components/consultants/IdeaForm";
import { ConsultantSpotlight } from "@/components/consultants/ConsultantSpotlight";
import { ClosingCTA } from "@/components/consultants/ClosingCTA";

const ConsultantsPage = () => {
  const scrollToForm = () => {
    document.getElementById("idea-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-garden-dark">
      <Header />
      <HeroSection onScrollToForm={scrollToForm} />
      <BenefitsSection />
      <HowItWorksSection />
      <IdeaForm />
      <ConsultantSpotlight />
      <ClosingCTA onScrollToForm={scrollToForm} />
      <Footer />
    </div>
  );
};

export default ConsultantsPage;
