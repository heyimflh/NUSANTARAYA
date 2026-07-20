"use client";

export function RouteReadinessSkeleton() {
  return (
    <div className="w-full rounded-[36px] bg-[#FFFDF8] border border-[#E8E0CE] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_rgba(13,27,42,0.04)] animate-pulse">
      <div className="flex flex-col gap-4 mb-8">
        <div className="h-4 w-32 bg-[#E8E0CE] rounded" />
        <div className="h-10 w-3/4 max-w-2xl bg-[#E8E0CE] rounded mb-2" />
        <div className="h-6 w-full max-w-3xl bg-[#E8E0CE] rounded" />
      </div>

      <div className="flex gap-2 mb-8 py-4 border-y border-[#E8E0CE]">
        <div className="h-10 w-28 bg-[#E8E0CE] rounded-full" />
        <div className="h-10 w-28 bg-[#E8E0CE] rounded-full" />
        <div className="h-10 w-28 bg-[#E8E0CE] rounded-full" />
        <div className="h-10 w-28 bg-[#E8E0CE] rounded-full" />
      </div>

      <div className="py-8 border-b border-[#E8E0CE]">
        <div className="h-8 w-48 bg-[#E8E0CE] rounded mb-4" />
        <div className="h-24 w-full md:w-1/3 bg-[#E8E0CE] rounded-2xl mb-6" />
        <div className="h-16 w-full bg-[#E8E0CE] rounded-3xl" />
      </div>

      <div className="py-8 border-b border-[#E8E0CE]">
        <div className="h-8 w-64 bg-[#E8E0CE] rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-48 bg-[#E8E0CE] rounded-2xl" />
          <div className="h-48 bg-[#E8E0CE] rounded-2xl" />
          <div className="h-48 bg-[#E8E0CE] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
