export default function PassportLoading() {
  return (
    <main className="relative min-h-screen isolate overflow-hidden bg-[#F3EBDD]">
      <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Masthead Skeleton */}
        <div className="animate-pulse flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex-1 w-full flex flex-col gap-4">
            <div className="h-4 w-32 bg-[#DCCDB8] rounded-full" />
            <div className="h-12 md:h-16 w-3/4 bg-[#DCCDB8] rounded" />
            <div className="h-20 w-5/6 bg-[#DCCDB8] rounded mt-4" />
          </div>
          <div className="flex-1 w-full md:w-1/2">
            <div className="h-64 w-full bg-[#DCCDB8] rounded-xl" />
          </div>
        </div>

        {/* Saved Routes Skeleton */}
        <div className="animate-pulse mt-24">
          <div className="h-8 w-64 bg-[#DCCDB8] rounded mb-8" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/5 h-80 bg-[#DCCDB8] rounded-xl" />
            <div className="w-full md:w-3/5 flex flex-col gap-4">
              <div className="h-24 w-full bg-[#DCCDB8] rounded-xl" />
              <div className="h-24 w-full bg-[#DCCDB8] rounded-xl" />
              <div className="h-24 w-full bg-[#DCCDB8] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
