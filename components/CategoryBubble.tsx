import { LucideIcon } from "lucide-react";

type CategoryBubbleProps = {
  title: string;
  icon: LucideIcon;
};

export default function CategoryBubble({ title, icon: Icon }: CategoryBubbleProps) {
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer group flex-shrink-0">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-blue-600/20 group-hover:border-blue-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 glass">
        <Icon size={30} className="md:size-[36px] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
      </div>
      <p className="text-[10px] md:text-[11px] font-black uppercase text-gray-500 group-hover:text-white tracking-[2px] transition-colors duration-500">
        {title}
      </p>
    </div>
  );
}
