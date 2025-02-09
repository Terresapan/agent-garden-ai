
import { Rocket } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/smb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-garden-dark/60 backdrop-blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="flex justify-center mb-6">
            <Rocket className="h-20 w-20 text-garden-accent" />
          </div>
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-500 to-green-200 bg-clip-text text-transparent">
            From Consultation to Automation
          </h1>
          <p className="text-4xl text-white">
            Grow Your Business with Your Always-On AI Partner
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-garden-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-garden-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
