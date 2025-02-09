
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bot, Brain, DollarSign, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ConsultantsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    idea: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Idea Submitted!",
      description: "Thank you for your contribution. We'll review it shortly.",
    });
    setFormData({ name: "", email: "", expertise: "", idea: "" });
  };

  const scrollToForm = () => {
    document.getElementById("idea-form")?.scrollIntoView({ behavior: "smooth" });
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
              "url('/lovable-uploads/6e7bd016-43b9-469f-91a8-8cd3c100a84e.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-garden-dark/40 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-500 to-green-200 bg-clip-text text-transparent">
              Empower SMBs with AI – Join the Agent Garden Consultant Network
            </h1>
            <p className="text-2xl text-white mb-8">
              Leverage AI-powered agents to drive business success. Get exclusive
              tools, support, and revenue opportunities.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
            >
              Join as a Consultant
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Why Join Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Bot className="h-12 w-12 text-garden-accent" />,
              title: "AI-Powered Consulting",
              description:
                "Enhance your expertise with intelligent automation.",
            },
            {
              icon: <DollarSign className="h-12 w-12 text-garden-accent" />,
              title: "New Revenue Streams",
              description:
                "Earn commissions or service fees by onboarding SMBs.",
            },
            {
              icon: <Brain className="h-12 w-12 text-garden-accent" />,
              title: "Exclusive AI Tools & Insights",
              description:
                "Get access to advanced AI models for problem-solving.",
            },
            {
              icon: <Users className="h-12 w-12 text-garden-accent" />,
              title: "Community & Collaboration",
              description: "Work with like-minded experts and SMBs.",
            },
          ].map((benefit, index) => (
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

      {/* How It Works */}
      <section className="py-24 bg-garden-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {[
              {
                step: "Sign up as a consultant",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                alt: "Person signing up"
              },
              {
                step: "Explore AI-powered business tools",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                alt: "AI business tools"
              },
              {
                step: "Connect with SMBs and provide solutions",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                alt: "Business meeting"
              },
              {
                step: "Earn commissions or consulting fees",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                alt: "Success metrics"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-garden-accent/20 flex items-center justify-center text-2xl font-bold text-garden-accent mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-white">{step.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section id="idea-form" className="py-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Contribute & Innovate – Submit Your AI Consulting Idea
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-garden-dark/50 backdrop-blur p-8 rounded-lg border border-garden-accent/20"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-garden-dark/50 border-garden-accent/20 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="expertise"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Expertise/Niche
                </label>
                <Select
                  value={formData.expertise}
                  onValueChange={(value) =>
                    setFormData({ ...formData, expertise: value })
                  }
                >
                  <SelectTrigger className="bg-garden-dark/50 border-garden-accent/20 text-white">
                    <SelectValue placeholder="Select your expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="strategy">Business Strategy</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="idea"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Your AI Idea or Use Case
                </label>
                <Textarea
                  id="idea"
                  value={formData.idea}
                  onChange={(e) =>
                    setFormData({ ...formData, idea: e.target.value })
                  }
                  className="bg-garden-dark/50 border-garden-accent/20 text-white h-32"
                  placeholder="Describe your idea..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-garden-accent hover:bg-garden-accent/90 text-garden-dark"
              >
                Submit Your Idea
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Our team will review and collaborate with selected ideas.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Consultant Spotlight */}
      <section className="py-24 bg-garden-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Consultant Spotlight
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {[
                {
                  name: "Sarah Johnson",
                  role: "Digital Strategy Consultant",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  quote: "Joining Agent Garden has transformed my consulting practice. The AI tools have helped me deliver better results for my clients while growing my business."
                },
                {
                  name: "Michael Chen",
                  role: "AI Implementation Specialist",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  quote: "The platform's AI capabilities have revolutionized how I approach client solutions. It's empowering to be part of such an innovative ecosystem."
                },
                {
                  name: "Elena Rodriguez",
                  role: "Business Transformation Consultant",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  quote: "Agent Garden's tools have helped me scale my consulting services and create more impact for SMBs across different industries."
                }
              ].map((consultant, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <div className="bg-garden-dark/50 backdrop-blur p-8 rounded-lg border border-garden-accent/20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 rounded-full overflow-hidden">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <blockquote className="text-white text-lg italic mb-4">
                          "{consultant.quote}"
                        </blockquote>
                        <p className="text-garden-accent font-semibold">
                          {consultant.name}
                        </p>
                        <p className="text-gray-400">{consultant.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Consulting Practice?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our network of forward-thinking consultants and leverage the power
          of AI to drive business success.
        </p>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
        >
          Become a Consultant
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultantsPage;
