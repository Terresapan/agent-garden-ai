import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className="rounded-full bg-garden-accent/20 hover:bg-garden-accent/30 border-garden-accent/30 text-white"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full ${
            activeCategory === category
              ? "bg-garden-accent text-white hover:bg-garden-accent/90"
              : "bg-garden-accent/20 hover:bg-garden-accent/30 border-garden-accent/30 text-white"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};