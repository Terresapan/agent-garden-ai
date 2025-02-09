
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ConsultantSpotlight = () => {
  const consultants = [
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
      quote: "Agent Garden's tools have helped me scale my consulting services and create more impact for SMBs across different industries. The platform's innovative approach and AI integration have completely transformed how I deliver value to my clients."
    }
  ];

  return (
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
            {consultants.map((consultant, index) => (
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
  );
};
