
import { Bot, Brain, DollarSign, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Bot className="h-12 w-12 text-garden-accent" />,
      title: "AI-Powered Consulting",
      description: "Enhance your expertise with intelligent automation.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-garden-accent" />,
      title: "New Revenue Streams",
      description: "Earn commissions or service fees by onboarding SMBs.",
    },
    {
      icon: <Brain className="h-12 w-12 text-garden-accent" />,
      title: "Exclusive AI Tools & Insights",
      description: "Get access to advanced AI models for problem-solving.",
    },
    {
      icon: <Users className="h-12 w-12 text-garden-accent" />,
      title: "Community & Collaboration",
      description: "Work with like-minded experts and SMBs.",
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Why Join Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-garden-dark/50 backdrop-blur p-6 rounded-lg border border-garden-accent/20 hover:border-garden-accent/40 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {benefit.icon}
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
