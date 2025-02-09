import { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";

export const IdeaForm = () => {
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

  return (
    <section id="idea-form" className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Submit Your AI Consulting Idea
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
  );
};
