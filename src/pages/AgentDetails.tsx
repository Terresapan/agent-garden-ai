
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
  "mr-blogger": {
    title: "Mr. Blogger",
    description: "Generate engaging blog posts with AI assistance",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    problems: [
      "Writer's block and content idea generation",
      "Time-consuming blog writing process",
      "Maintaining consistent content quality",
    ],
    solutions: [
      "AI-powered content ideation",
      "Automated draft generation",
      "Smart content optimization suggestions",
    ],
  },
  "copywriter": {
    title: "Copywriter",
    description: "Create compelling social media posts automatically",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    problems: [
      "Time-consuming copywriting process",
      "Maintaining brand voice consistency",
      "Creating engaging content at scale",
    ],
    solutions: [
      "AI-powered copy generation",
      "Brand voice customization",
      "Multi-platform content adaptation",
    ],
  },
  "positioning-master": {
    title: "Positioning Master",
    description: "Verify and optimize your marketing positioning",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    problems: [
      "Unclear market positioning",
      "Difficulty standing out from competitors",
      "Inconsistent brand messaging",
    ],
    solutions: [
      "AI-driven market analysis",
      "Competitor positioning insights",
      "Brand message optimization",
    ],
  },
  "six-thinking-hats": {
    title: "Six Thinking Hats",
    description: "Make better decisions with structured thinking",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    problems: [
      "Complex decision-making processes",
      "Biased thinking patterns",
      "Limited perspective in analysis",
    ],
    solutions: [
      "Structured thinking framework",
      "Multi-perspective analysis",
      "AI-guided decision support",
    ],
  },
  "debating-arena": {
    title: "Debating Arena",
    description: "Challenge your ideas with AI-powered debate",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    problems: [
      "Echo chamber thinking",
      "Unchallenged assumptions",
      "Limited critical analysis",
    ],
    solutions: [
      "AI-powered counterarguments",
      "Structured debate framework",
      "Deep analysis of perspectives",
    ],
  },
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
