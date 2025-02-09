import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ChatAssistant } from "@/components/home/ChatAssistant";
import { FeedbackSection } from "@/components/home/FeedbackSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { AgentsList } from "@/components/home/AgentsList";

const agents = [
  {
    id: "data-whisperer",
    title: "Data Whisperer",
    description: "Translate complex datasets into simple, strategic insights",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
  },
  {
    id: "mememorph",
    title: "MemeMorph",
    description: "Morphing web pages into viral memes",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
  },
  {
    id: "calendlysocial",
    title: "CalendlySocial",
    description:
      "Automate your social media calendar with AI-powered scheduling",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: "mr-blogger",
    title: "Mr. Blogger",
    description: "Generate engaging blog posts with AI assistance",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: "copywriter",
    title: "Copywriter",
    description: "Create compelling social media posts automatically",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "positioning-master",
    title: "Positioning Master",
    description: "Verify and optimize your marketing positioning",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: "six-thinking-hats",
    title: "Six Thinking Hats",
    description: "Make better decisions with structured thinking",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: "debating-arena",
    title: "Debating Arena",
    description: "Challenge your ideas with AI-powered debate",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: "brand-alchemist",
    title: "Brand Alchemist",
    description: "Transforms ideas into powerful brand strategies",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    id: "site-sage",
    title: "Site Sage",
    description: "Analyzes and optimizes websites for peak performance",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "lead-scout",
    title: "Lead Scout",
    description: "Hunts and delivers high-quality leads",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    id: "capital-navigator",
    title: "Capital Navigator",
    description: "Guides businesses in securing funding and financial growth",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    id: "value-architect",
    title: "Value Architect",
    description: "Crafts compelling value propositions that resonate",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
  },
  {
    id: "customer-oracle",
    title: "Customer Oracle",
    description: "Deciphers customer needs and behaviors",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: "vision-setter",
    title: "Vision Setter",
    description: "Helps define, prioritize, and achieve business goals",
    category: "JP Morgan Chase Specific",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    id: "risk-radar",
    title: "Risk Radar",
    description:
      "Assess risks and make informed decisions with AI-driven analysis",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: "trade-off-tactician",
    title: "Trade-Off Tactician",
    description: "Weigh pros and cons to optimize strategic choices",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: "bias-buster",
    title: "Bias Buster",
    description: "Identify and counter cognitive biases in decision-making",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: "consensus-builder",
    title: "Consensus Builder",
    description: "Facilitate team alignment with AI-powered insights",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "scenario-sage",
    title: "Scenario Sage",
    description: "Simulate future scenarios to guide better choices",
    category: "Decision Making",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: "insight-seeker",
    title: "Insight Seeker",
    description: "Extract actionable insights from raw data effortlessly",
    category: "Understand Your Own Data",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: "pattern-profiler",
    title: "Pattern Profiler",
    description: "Detect trends and anomalies in your business data",
    category: "Understand Your Own Data",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "kpi-compass",
    title: "KPI Compass",
    description: "Track and interpret key performance metrics with ease",
    category: "Understand Your Own Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: "data-whisperer",
    title: "Data Whisperer",
    description: "Translate complex datasets into simple, strategic insights",
    category: "Understand Your Own Data",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
  },
  {
    id: "narrative-numbers",
    title: "Narrative Numbers",
    description: "Turn your data into compelling, easy-to-digest stories",
    category: "Understand Your Own Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: "growth-guru",
    title: "Growth Guru",
    description: "Uncover the best strategies to scale your brand effectively",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
  },
  {
    id: "persona-painter",
    title: "Persona Painter",
    description: "Define and refine your ideal customer profiles with AI",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    id: "funnel-forger",
    title: "Funnel Forger",
    description: "Optimize your sales funnel for maximum conversions",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    id: "competitive-compass",
    title: "Competitive Compass",
    description: "Analyze competitors and position your brand strategically",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
];

const categories = [
  "Content Creation",
  "Marketing Strategy",
  "Decision Making",
  "Understand Your Own Data",
  "JP Morgan Chase Specific",
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const featuredAgent = agents.find((agent) => agent.category === "Featured");

  return (
    <div className="min-h-screen bg-garden-dark">
      <Header />
      <HeroSection />

      <div className="container mx-auto px-4 py-24">
        <div className="w-full bg-garden-dark py-16 mb-16 border-y border-garden-accent/20">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-200">
            Try Our Most Popular AI Agents
          </h2>
        </div>

        <FeaturedSection featuredAgent={featuredAgent!} />

        <div className="w-full bg-garden-accent/10 py-24 mt-28 mb-28 flex flex-col items-center">
          <h2 className="text-5xl font-bold text-garden-accent">
            Scale Your Business with Intelligent AI Solutions
          </h2>
        </div>

        <AgentsList
          agents={agents}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <FeedbackSection />
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default Index;
