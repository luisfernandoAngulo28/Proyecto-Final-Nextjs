type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

function formatCategoryLabel(category: string) {
  if (category === "all") return "Todos";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border ${
              isActive
                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20 scale-105"
                : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {formatCategoryLabel(category)}
          </button>
        );
      })}
    </div>
  );
}
