import * as ScrollArea from "@radix-ui/react-scroll-area";
import CategoryBubble from "./CategoryBubble";
import { 
  Zap, 
  Map, 
  Rocket, 
  Laugh, 
  Ghost, 
  Fingerprint, 
  Film, 
  Sparkles, 
  Heart, 
  Search, 
  Skull,
  Theater,
  Clapperboard,
  Tv
} from "lucide-react";

type CategoriesSectionProps = {
  categories: string[];
  title?: string;
};

const categoryIconMap: Record<string, any> = {
  "Acción": Zap,
  "Aventuras": Map,
  "Ciencia Ficción": Rocket,
  "Comedia": Laugh,
  "Crimen": Fingerprint,
  "Drama": Theater,
  "Fantasía": Sparkles,
  "Horror": Ghost,
  "Misterio": Search,
  "Romance": Heart,
  "Terror": Skull,
  "Tragedia": Skull,
  "Serie": Tv,
  "Cine": Film
};

function formatCategoryLabel(category: string) {
  return category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CategoriesSection({
  categories,
  title = "Explorar por categoria",
}: CategoriesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center tracking-tight">
        {title}
      </h2>
      <ScrollArea.Root className="relative w-full">
        <ScrollArea.Viewport className="w-full overflow-hidden rounded-md">
          <div className="flex w-max min-w-full gap-8 md:gap-12 justify-start md:justify-center pb-2">
            {categories.map((category) => (
              <CategoryBubble
                key={category}
                title={formatCategoryLabel(category)}
                icon={categoryIconMap[category] ?? Clapperboard}
              />
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-2 touch-none select-none bg-white/5 transition-colors"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-white/20" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 touch-none select-none bg-gray-200/70 transition-colors"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-gray-400" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-200/70" />
      </ScrollArea.Root>
    </section>
  );
}
