
import { Button } from "@/components/ui/button";

interface ClosingCTAProps {
  onScrollToForm: () => void;
}

export const ClosingCTA = ({ onScrollToForm }: ClosingCTAProps) => {
  return (
    <section className="py-24 container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Transform Your Consulting Practice?
      </h2>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Join our network of forward-thinking consultants and leverage the power of
        AI to drive business success.
      </p>
      <Button
        onClick={onScrollToForm}
        size="lg"
        className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
      >
        Become a Consultant
      </Button>
    </section>
  );
};
