export default function SkeletonCard() {
  return (
    <div className="bg-[#161618] rounded-xl overflow-hidden flex flex-col serie-card-shadow border border-white/5">
      <div className="relative aspect-[2/3] bg-white/5 animate-shimmer" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-4 w-16 bg-white/5 rounded animate-shimmer" />
        <div className="h-6 w-3/4 bg-white/5 rounded animate-shimmer" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-white/5 rounded animate-shimmer" />
          <div className="h-3 w-5/6 bg-white/5 rounded animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
