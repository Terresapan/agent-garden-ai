
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const partners = [
  {
    name: "JP Morgan Chase",
    contribution: "Providing grants and AI-powered consulting services to SMBs",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  // Add more partners here as needed
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-garden-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-500 to-green-300 text-transparent bg-clip-text">
            Empowering Businesses Together with AI-Driven Consulting
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our partners play a crucial role in empowering SMBs by providing grants, donations, and access to AI-powered consulting services, helping businesses innovate, grow, and thrive in a competitive landscape.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-garden-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Partner with Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-garden-dark/30 backdrop-blur-sm border border-garden-accent/10">
              <h3 className="text-xl font-semibold mb-4 text-garden-accent">Supporting SMBs</h3>
              <p className="text-gray-300">Empower businesses with AI-powered consulting solutions and drive innovation.</p>
            </div>
            <div className="p-6 rounded-lg bg-garden-dark/30 backdrop-blur-sm border border-garden-accent/10">
              <h3 className="text-xl font-semibold mb-4 text-garden-accent">Expanding Resources</h3>
              <p className="text-gray-300">Provide comprehensive advisory services and resources to your clients.</p>
            </div>
            <div className="p-6 rounded-lg bg-garden-dark/30 backdrop-blur-sm border border-garden-accent/10">
              <h3 className="text-xl font-semibold mb-4 text-garden-accent">Strengthening CSR</h3>
              <p className="text-gray-300">Enhance your corporate social responsibility initiatives through impactful partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Partners</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-6 text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-gray-300 text-sm">{partner.contribution}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-garden-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-garden-accent text-garden-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Apply or Connect</h3>
              <p className="text-gray-300">Institutions express interest in partnership.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-garden-accent text-garden-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Define Partnership Scope</h3>
              <p className="text-gray-300">Outline grants, consulting services, or AI resources.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-garden-accent text-garden-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Collaborate & Impact</h3>
              <p className="text-gray-300">Launch joint initiatives to support SMBs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in empowering SMBs with AI-powered solutions and create lasting positive change in the business community.
          </p>
          <Button
            size="lg"
            className="bg-garden-accent text-garden-dark hover:bg-garden-accent/90"
          >
            Become a Partner
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
