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
  "brand-alchemist": {
    title: "Brand Alchemist",
    description: "Transforms ideas into powerful brand strategies",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    problems: [
      "Inconsistent brand messaging",
      "Difficulty standing out in the market",
      "Unclear brand identity",
    ],
    solutions: [
      "AI-powered brand strategy development",
      "Competitive positioning analysis",
      "Brand voice and identity optimization",
    ],
  },
  "site-sage": {
    title: "Site Sage",
    description: "Analyzes and optimizes websites for peak performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    problems: [
      "Poor website performance",
      "Low conversion rates",
      "Suboptimal user experience",
    ],
    solutions: [
      "Performance analytics and optimization",
      "UX improvement recommendations",
      "Conversion rate optimization",
    ],
  },
  "lead-scout": {
    title: "Lead Scout",
    description: "Hunts and delivers high-quality leads",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    problems: [
      "Inefficient lead generation",
      "Poor lead quality",
      "High customer acquisition costs",
    ],
    solutions: [
      "AI-driven lead scoring",
      "Automated lead nurturing",
      "Quality lead identification",
    ],
  },
  "capital-navigator": {
    title: "Capital Navigator",
    description: "Guides businesses in securing funding and financial growth",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    problems: [
      "Limited access to funding",
      "Complex financial planning",
      "Growth barriers",
    ],
    solutions: [
      "Funding opportunity identification",
      "Financial strategy development",
      "Growth pathway planning",
    ],
  },
  "value-architect": {
    title: "Value Architect",
    description: "Crafts compelling value propositions that resonate",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
    problems: [
      "Unclear value proposition",
      "Weak market differentiation",
      "Customer value misalignment",
    ],
    solutions: [
      "Value proposition development",
      "Market differentiation strategy",
      "Customer value alignment",
    ],
  },
  "customer-oracle": {
    title: "Customer Oracle",
    description: "Deciphers customer needs and behaviors",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    problems: [
      "Limited customer insights",
      "Misunderstood customer needs",
      "Poor customer engagement",
    ],
    solutions: [
      "AI-powered customer analysis",
      "Behavior pattern recognition",
      "Need identification automation",
    ],
  },
  "vision-setter": {
    title: "Vision Setter",
    description: "Helps define, prioritize, and achieve business goals",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    problems: [
      "Unclear business direction",
      "Goal misalignment",
      "Strategy execution challenges",
    ],
    solutions: [
      "Vision development framework",
      "Goal prioritization system",
      "Strategy execution roadmap",
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
