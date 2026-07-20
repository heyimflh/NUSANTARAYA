export default function RoutesLoading() {
  return (
    <div className="min-h-screen" aria-label="Memuat halaman Routes...">
      {/* Hero skeleton */}
      <div className="w-full h-[40vh] bg-[#2D2419]/5 animate-pulse" />

      {/* Form area skeleton */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <div className="h-8 w-64 bg-[#2D2419]/10 rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 bg-[#2D2419]/5 rounded-xl animate-pulse" />
          ))}
        </div>
        <div className="h-12 w-48 bg-[#C4A35A]/20 rounded-full animate-pulse mx-auto" />
      </div>
    </div>
  );
}
