import { useState } from "react";
import { AgentCard } from "@/components/AgentCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Brain, Rocket } from "lucide-react";

const agents = [
  {
    id: "calendlysocial",
    title: "CalendlySocial",
    description: "Automate your social media calendar with AI-powered scheduling",
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
];

const categories = ["Content Creation", "Marketing Strategy", "Decision Making", "Understand your own data", "JP Morgan Specific"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAgents = activeCategory === "all" 
    ? agents 
    : agents.filter(agent => agent.category === activeCategory);

  return (
    <div className="min-h-screen bg-garden-dark text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="flex justify-center mb-6">
            <Rocket className="h-16 w-16 text-garden-accent" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-garden-accent bg-clip-text text-transparent">
            From Consultation to Automation: Grow Your Business
          </h1>
          <p className="text-xl text-gray-400">
            Discover AI agents that help your business thrive in the digital age
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;