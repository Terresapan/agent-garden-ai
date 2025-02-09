import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CheckCircle, XCircle, MessageSquare } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

interface AgentPageProps {
  agent: {
    title: string;
    description: string;
    image: string;
    problems: string[];
    solutions: string[];
  };
}

export const AgentPage = ({ agent }: AgentPageProps) => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate("/");
    setTimeout(() => {
      const feedbackSection = document.getElementById("feedback");
      if (feedbackSection) {
        feedbackSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-garden-dark">
      <Header />

      <div className="container mx-auto px-4 py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={agent.image}
              alt={agent.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-white">
              {agent.title}
            </h1>
            <p className="text-gray-400 text-lg">{agent.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-garden-dark/50 backdrop-blur">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <XCircle className="text-red-500" />
                Problems
              </h2>
              <ul className="space-y-3">
                {agent.problems.map((problem, index) => (
                  <li
                    key={index}
                    className="text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-garden-dark/50 backdrop-blur">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <CheckCircle className="text-garden-success" />
                Solutions
              </h2>
              <ul className="space-y-3">
                {agent.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-garden-success mt-1">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-garden-dark/50 backdrop-blur mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <MessageSquare className="text-garden-accent" />
              User Instructions
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-garden-accent mt-1">•</span>
                Visit the tool using the "Try Me" button below
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-garden-accent mt-1">•</span>
                Follow the on-screen prompts to input your requirements
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-garden-accent mt-1">•</span>
                Review the AI-generated suggestions and implement them
              </li>
            </ul>
          </Card>

          <div className="text-center flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-garden-accent hover:bg-garden-accent/90 text-garden-dark"
              onClick={() =>
                window.open("https://mrdatawhisperer.streamlit.app/", "_blank")
              }
            >
              <Brain className="mr-2 h-5 w-5" />
              Try Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-garden-accent text-garden-accent hover:bg-garden-accent hover:text-white"
              onClick={handleFeedbackClick}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Tell Us What You Think
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
