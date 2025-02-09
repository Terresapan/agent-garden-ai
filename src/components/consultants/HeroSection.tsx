import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection = ({ onScrollToForm }: HeroSectionProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-garden-dark/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-500 to-green-200 bg-clip-text text-transparent">
            Join the Agent Garden Consultant Network
          </h1>
          <p className="text-2xl text-white mb-8">
            Leverage AI-powered agents to drive business success. Get exclusive
            tools, support, and revenue opportunities.
          </p>
          <Button
            onClick={onScrollToForm}
            size="lg"
            className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
          >
            Join as a Consultant
          </Button>
        </div>
      </div>
    </div>
  );
};
