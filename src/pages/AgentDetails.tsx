import { useParams } from "react-router-dom";
import { AgentPage } from "@/components/AgentPage";

const agentData = {
  "data-whisperer": {
    title: "Data Whisperer",
    description: "Translate complex datasets into simple, strategic insights",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    problems: [
      "Data complexity",
      "Communication challenges",
      "Information overload",
    ],
    solutions: [
      "Data simplification AI",
      "Strategic insight generation",
      "Clear data visualization",
    ],
  },
  mememorph: {
    title: "MemeMorph",
    description: "Morphing web pages into viral memes",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
    problems: [
      "Difficulty creating engaging social media content",
      "Time-consuming meme creation process",
      "Lack of viral potential in content",
    ],
    solutions: [
      "AI-powered meme generation",
      "Viral content optimization",
      "Quick and efficient content creation",
    ],
  },
  calendlysocial: {
    title: "CalendlySocial",
    description:
      "Automate your social media calendar with AI-powered scheduling",
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
  copywriter: {
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
  "risk-radar": {
    title: "Risk Radar",
    description: "Assess risks and make informed decisions with AI-driven analysis",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    problems: [
      "Difficulty assessing business risks",
      "Uncertainty in decision-making",
      "Lack of data-driven risk analysis",
    ],
    solutions: [
      "AI-powered risk assessment",
      "Data-driven decision recommendations",
      "Comprehensive risk monitoring",
    ],
  },
  "trade-off-tactician": {
    title: "Trade-Off Tactician",
    description: "Weigh pros and cons to optimize strategic choices",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    problems: [
      "Complex decision trade-offs",
      "Difficulty balancing multiple factors",
      "Suboptimal strategic choices",
    ],
    solutions: [
      "AI-driven trade-off analysis",
      "Multi-factor decision optimization",
      "Strategic choice recommendations",
    ],
  },
  "bias-buster": {
    title: "Bias Buster",
    description: "Identify and counter cognitive biases in decision-making",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    problems: [
      "Cognitive biases affecting decisions",
      "Unconscious prejudices",
      "Limited perspective in analysis",
    ],
    solutions: [
      "Bias detection algorithms",
      "Cognitive bias mitigation",
      "Balanced decision frameworks",
    ],
  },
  "consensus-builder": {
    title: "Consensus Builder",
    description: "Facilitate team alignment with AI-powered insights",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    problems: [
      "Team misalignment",
      "Difficult group decisions",
      "Ineffective consensus building",
    ],
    solutions: [
      "AI-facilitated team alignment",
      "Group decision optimization",
      "Consensus tracking analytics",
    ],
  },
  "scenario-sage": {
    title: "Scenario Sage",
    description: "Simulate future scenarios to guide better choices",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    problems: [
      "Uncertainty about future outcomes",
      "Limited scenario planning",
      "Risk in strategic decisions",
    ],
    solutions: [
      "AI-powered scenario simulation",
      "Future outcome prediction",
      "Strategic planning insights",
    ],
  },
  "insight-seeker": {
    title: "Insight Seeker",
    description: "Extract actionable insights from raw data effortlessly",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    problems: [
      "Raw data complexity",
      "Time-consuming analysis",
      "Difficulty finding actionable insights",
    ],
    solutions: [
      "Automated insight extraction",
      "Quick data analysis",
      "Action recommendation engine",
    ],
  },
  "pattern-profiler": {
    title: "Pattern Profiler",
    description: "Detect trends and anomalies in your business data",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    problems: [
      "Hidden data patterns",
      "Missed business opportunities",
      "Undetected anomalies",
    ],
    solutions: [
      "AI pattern recognition",
      "Trend analysis automation",
      "Anomaly detection system",
    ],
  },
  "kpi-compass": {
    title: "KPI Compass",
    description: "Track and interpret key performance metrics with ease",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    problems: [
      "Complex KPI tracking",
      "Metric interpretation challenges",
      "Performance visibility issues",
    ],
    solutions: [
      "Automated KPI tracking",
      "Performance metric analysis",
      "Real-time insights dashboard",
    ],
  },
  "narrative-numbers": {
    title: "Narrative Numbers",
    description: "Turn your data into compelling, easy-to-digest stories",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    problems: [
      "Boring data presentations",
      "Low data engagement",
      "Complex information sharing",
    ],
    solutions: [
      "Automated story generation",
      "Data visualization",
      "Engaging presentation creation",
    ],
  },
  "growth-guru": {
    title: "Growth Guru",
    description: "Uncover the best strategies to scale your brand effectively",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
    problems: [
      "Scaling challenges",
      "Growth strategy uncertainty",
      "Resource allocation issues",
    ],
    solutions: [
      "AI-powered growth strategies",
      "Resource optimization",
      "Scalable solution planning",
    ],
  },
  "persona-painter": {
    title: "Persona Painter",
    description: "Define and refine your ideal customer profiles with AI",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    problems: [
      "Unclear customer profiles",
      "Targeting inefficiency",
      "Market misunderstanding",
    ],
    solutions: [
      "AI customer profiling",
      "Target audience analysis",
      "Persona optimization",
    ],
  },
  "funnel-forger": {
    title: "Funnel Forger",
    description: "Optimize your sales funnel for maximum conversions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    problems: [
      "Low conversion rates",
      "Funnel bottlenecks",
      "Customer journey gaps",
    ],
    solutions: [
      "Funnel optimization AI",
      "Conversion rate improvement",
      "Customer journey mapping",
    ],
  },
  "competitive-compass": {
    title: "Competitive Compass",
    description: "Analyze competitors and position your brand strategically",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    problems: [
      "Market positioning challenges",
      "Competitor analysis difficulty",
      "Strategic differentiation",
    ],
    solutions: [
      "Competitor analysis AI",
      "Market positioning strategy",
      "Differentiation insights",
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
