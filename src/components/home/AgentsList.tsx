
import { AgentCard } from "@/components/AgentCard";
import { Button } from "@/components/ui/button";
import { CategoryFilter } from "@/components/CategoryFilter";

interface Agent {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface AgentsListProps {
  agents: Agent[];
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const AgentsList = ({
  agents,
  categories,
  activeCategory,
  onCategoryChange,
}: AgentsListProps) => {
  const filteredAgents =
    activeCategory === "all"
      ? agents.filter((agent) => agent.category !== "Featured")
      : agents.filter((agent) => agent.category === activeCategory);

  return (
    <>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
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
    </>
  );
};
