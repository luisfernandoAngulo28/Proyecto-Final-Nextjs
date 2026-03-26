import { Star } from "lucide-react";

type SerieCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
  actions?: React.ReactNode;
  detailTrigger?: React.ReactNode;
};

export default function SerieCard({
  title,
  description,
  image,
  category,
  estreno,
  calificacion,
  plataforma,
  actions,
  detailTrigger,
}: SerieCardProps) {
  return (
    <div className="relative group bg-[#161618] rounded-xl overflow-hidden flex flex-col serie-card-shadow hover-zoom transition-all duration-300 border border-white/5 hover:border-white/20">
      {actions && (
        <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-lg flex gap-2 border border-white/10">
            {actions}
          </div>
        </div>
      )}

      <div className="relative aspect-[2/3] overflow-hidden bg-[#222]">
        <img
          src={image || "/placeholder-poster.png"}
          alt={title}
          className="w-full h-full object-cover transition-poster"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5 flex flex-col flex-1 z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-600/30 px-2 py-0.5 rounded">
            {category.split(",")[0].trim()}
          </span>
          <span className="text-[10px] font-bold text-gray-500">
            {plataforma}
          </span>
        </div>

        <h3 className="font-bold text-lg text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-3 mt-1 text-[10px] font-semibold text-gray-500">
          <span>{estreno}</span>
          <div className="w-1 h-1 rounded-full bg-gray-700" />
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={10} fill="currentColor" />
            <span>{calificacion}</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs line-clamp-2 mt-3 leading-relaxed flex-1">
          {description}
        </p>

        {detailTrigger && <div className="mt-4">{detailTrigger}</div>}
      </div>
    </div>
  );
}
