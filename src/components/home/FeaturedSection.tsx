
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface FeaturedAgent {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeaturedSectionProps {
  featuredAgent: FeaturedAgent;
}

export const FeaturedSection = ({ featuredAgent }: FeaturedSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-6 mb-12">
      <Card
        onClick={() => navigate(`/agent/${featuredAgent.id}`)}
        className="w-2/3 group cursor-pointer overflow-hidden bg-garden-dark border-garden-accent/20 hover:border-garden-accent/40 transition-all duration-300"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={featuredAgent?.image}
            alt={featuredAgent?.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="text-xs text-garden-accent mb-2">Featured Agent</div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            {featuredAgent?.title}
          </h3>
          <p className="text-gray-400 text-sm">{featuredAgent?.description}</p>
        </div>
      </Card>

      <Card className="w-1/3 relative group cursor-pointer overflow-hidden bg-garden-dark/50 backdrop-blur border-garden-accent/20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e')",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Lock className="h-12 w-12 text-garden-accent/80" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-garden-dark/60 backdrop-blur-sm">
          <p className="text-white text-center px-6">
            Coming back more or giving feedback to unlock the advanced agents
          </p>
        </div>
      </Card>
    </div>
  );
};
