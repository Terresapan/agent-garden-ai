import { useState } from "react";
import { AgentCard } from "@/components/AgentCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Rocket, Lock, MessageCircle, X, Send, Bot } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const agents = [
  {
    id: "mememorph",
    title: "MemeMorph",
    description: "Morphing web pages into viral memes",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52",
  },
  {
    id: "risk-radar",
    title: "Risk Radar",
    description: "Assess risks and make informed decisions with AI-driven analysis",
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const filteredAgents =
    activeCategory === "all"
      ? agents.filter((agent) => agent.category !== "Featured")
      : agents.filter((agent) => agent.category === activeCategory);

  const featuredAgent = agents.find((agent) => agent.category === "Featured");

  const handleChatSubmit = () => {
    navigate("/agent/mememorph");
    setIsChatOpen(false);
  };

  const handleSendMessage = () => {
    if (query.trim()) {
      setShowResponse(true);
      setQuery("");
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, comment });
    // You can add toast notification or other feedback here
  };

  return (
    <div className="min-h-screen bg-garden-dark">
      <Header />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/lovable-uploads/e115a3e1-74ab-4d9c-b2c1-35262aeaec21.png')",
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

      {/* Agents Section */}
      <div className="container mx-auto px-4 py-24">
        {/* Strategy Band */}
        <div className="w-full bg-garden-dark py-16 mb-16 border-y border-garden-accent/20">
          <h2 className="text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-200">
            Try Our Most Popular AI Agents
          </h2>
        </div>

        <div className="flex gap-6 mb-12">
          <Card
            onClick={() => navigate(`/agent/mememorph`)}
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
              <div className="text-xs text-garden-accent mb-2">
                Featured Agent
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {featuredAgent?.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {featuredAgent?.description}
              </p>
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
                Coming back more or giving feedback to unlock the advanced
                agents
              </p>
            </div>
          </Card>
        </div>

        {/* Strategy Band Band */}
        <div className="w-full bg-garden-accent/10 py-24 mt-28 mb-28 flex flex-col items-center">
          <h2 className="text-5xl font-bold text-garden-accent">
            Scale Your Business with Intelligent AI Solutions
          </h2>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="default"
            className="bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 text-white"
          >
            Load More
          </Button>
        </div>
      </div>

      {/* Feedback Band */}
      <div className="w-full bg-garden-accent/10 py-24 mb-6 flex flex-col items-center">
        <h2 className="text-6xl font-bold text-garden-accent">
          Your Feedback, Our Priority
        </h2>
      </div>

      {/* Chat Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setShowResponse(false);
            setQuery("");
          }}
          className={`${
            isChatOpen ? "h-14 w-14" : "h-14 px-6"
          } rounded-full bg-garden-accent hover:bg-garden-accent/80 transition-colors flex items-center gap-2`}
        >
          {isChatOpen ? (
            <X className="h-6 w-6 text-garden-dark" />
          ) : (
            <>
              <Bot className="h-5 w-5 text-garden-dark" />
              <span className="text-garden-dark font-medium">Ask AI</span>
            </>
          )}
        </Button>

        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-garden-dark border border-garden-accent/20 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-garden-accent/20">
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              <div className="space-y-4">
                <div className="text-white">
                  Tell me the problem you want to solve, and let me pick an
                  agent for you!
                </div>

                {showResponse && (
                  <div className="bg-garden-accent/10 p-3 rounded-lg">
                    <p className="text-white mb-2">
                      Our featured agent MemeMorph will be a perfect fit.
                    </p>
                    <Button
                      onClick={handleChatSubmit}
                      className="w-full bg-garden-accent hover:bg-garden-accent/80 text-garden-dark"
                    >
                      Try MemeMorph
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-garden-accent/20">
              <div className="flex gap-2">
                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type your question..."
                  className="min-h-[60px] bg-garden-dark text-white border-garden-accent/20 focus:border-garden-accent"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-garden-accent hover:bg-garden-accent/80 text-garden-dark"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feedback Section */}
      <div id="feedback" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-garden-dark/50 backdrop-blur">
            <h1 className="text-3xl font-bold mb-6 text-white">
              Share Your Feedback
            </h1>

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Username
                </label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Comment
                </label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-garden-dark/50 border-garden-accent/20 text-white h-32"
                  placeholder="Share your thoughts..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-garden-accent hover:bg-garden-accent/90 text-garden-dark"
              >
                Submit Feedback
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
