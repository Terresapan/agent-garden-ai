export const HowItWorksSection = () => {
  const steps = [
    {
      step: "Sign up as a consultant",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person signing up",
    },
    {
      step: "Contribute valuable agent ideas",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "AI business tools",
    },
    {
      step: "Connect with SMBs and provide solutions",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Business meeting",
    },
    {
      step: "Receive a token of appreciation for your ideas",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Success metrics",
    },
  ];

  return (
    <section className="py-24 bg-garden-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {steps.map((step, index) => (
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
  );
};
