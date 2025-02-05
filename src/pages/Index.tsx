import { useState } from "react";
import { AgentCard } from "@/components/AgentCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Rocket } from "lucide-react";

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
    <div className="min-h-screen bg-garden-dark">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image with Blur Effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/e115a3e1-74ab-4d9c-b2c1-35262aeaec21.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-garden-dark/70 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="flex justify-center mb-6">
              <Rocket className="h-20 w-20 text-garden-accent" />
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              From Consultation to Automation: Grow Your Business with Your Always-On AI Partner
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-garden-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-garden-accent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Agents Section */}
      <div className="container mx-auto px-4 py-24">
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