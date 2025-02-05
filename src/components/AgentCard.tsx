import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const AgentCard = ({ id, title, description, category, image }: AgentCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/agent/${id}`)}
      className="group cursor-pointer overflow-hidden bg-garden-dark border-garden-accent/20 hover:border-garden-accent/40 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="text-xs text-garden-accent mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </Card>
  );
};