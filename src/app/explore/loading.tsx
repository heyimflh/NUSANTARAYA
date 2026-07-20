export default function ExploreLoading() {
  return (
    <div className="min-h-screen" aria-label="Memuat halaman Explore...">
      {/* Hero skeleton */}
      <div className="w-full h-[50vh] bg-[#2D2419]/5 animate-pulse" />

      {/* Map area skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="h-8 w-48 bg-[#2D2419]/10 rounded-lg animate-pulse" />
        <div className="w-full aspect-[16/9] bg-[#2D2419]/5 rounded-2xl animate-pulse" />

        {/* Control bar skeleton */}
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-[#2D2419]/8 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
