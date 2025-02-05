import { useParams } from "react-router-dom";
import { AgentPage } from "@/components/AgentPage";

const agentData = {
  "calendlysocial": {
    title: "CalendlySocial",
    description: "Automate your social media calendar with AI-powered scheduling",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    problems: [
      "Time-consuming social media scheduling",
      "Inconsistent posting schedule",
      "Difficulty maintaining multiple platforms",
    ],
    solutions: [
      "Automated content calendar generation",
      "Smart scheduling based on audience analytics",
      "Cross-platform content optimization",
    ],
  },
  // Add other agents here
};

const AgentDetails = () => {
  const { id } = useParams();
  const agent = agentData[id as keyof typeof agentData];

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return <AgentPage agent={agent} />;
};

export default AgentDetails;