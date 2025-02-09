import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Bot, Brain, DollarSign, Users } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const partners = [
  {
    name: "JP Morgan Chase",
    contribution: "Providing grants and AI-powered consulting services to SMBs",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    name: "Microsoft",
    contribution: "Supporting AI integration and cloud solutions for businesses",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    name: "Google Cloud",
    contribution: "Offering cloud infrastructure and machine learning resources",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

const HowItWorksCards = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title: "Connect",
    description: "Join our network of partners",
  },
  {
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df",
    title: "Define",
    description: "Set your partnership goals",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    title: "Impact",
    description: "Create meaningful change",
  },
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-garden-dark">
      <Header />

      {/* Hero Section with Background Image */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-garden-dark/60 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-500 to-green-200 bg-clip-text text-transparent">
              Empowering Businesses Together with AI-Driven Consulting
            </h1>
            <p className="text-2xl text-white mb-8">
              Our partners play a crucial role in empowering SMBs by providing grants, donations, and access to AI-powered consulting services.
            </p>
            <Button
              size="lg"
              className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
              onClick={() => document.getElementById('featured-partners')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Partners
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Why Partner with Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Bot className="h-12 w-12 text-garden-accent" />,
              title: "Supporting SMBs",
              description: "Empower businesses with AI-powered consulting solutions.",
            },
            {
              icon: <DollarSign className="h-12 w-12 text-garden-accent" />,
              title: "Expanding Resources",
              description: "Provide comprehensive advisory services to your clients.",
            },
            {
              icon: <Brain className="h-12 w-12 text-garden-accent" />,
              title: "Strengthening CSR",
              description: "Enhance your corporate social responsibility initiatives.",
            },
            {
              icon: <Users className="h-12 w-12 text-garden-accent" />,
              title: "Building Community",
              description: "Join a network of forward-thinking institutions.",
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
          <div className="flex flex-col md:flex-row gap-8 justify-between max-w-4xl mx-auto">
            {HowItWorksCards.map((card, index) => (
              <div
                key={index}
                className="group relative flex-1 cursor-pointer transition-all duration-300"
              >
                <div className="overflow-hidden rounded-xl h-[300px] relative group-hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-garden-dark/60 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-3xl font-bold text-garden-accent mb-2">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section id="featured-partners" className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured Partners
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="bg-garden-dark/50 backdrop-blur p-8 rounded-lg border border-garden-accent/20 hover:border-garden-accent/40 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-gray-400">{partner.contribution}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Make an Impact?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join us in empowering SMBs with AI-powered solutions and create lasting positive change in the business community.
        </p>
        <Button
          size="lg"
          className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
        >
          Become a Partner
        </Button>
      </section>
    </div>
  );
};

export default PartnersPage;
