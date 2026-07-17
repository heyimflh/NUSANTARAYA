import React from "react";

export function ItinerarySkeleton({ durationDays }: { durationDays: number }) {
  return (
    <div className="w-full mt-12 lg:mt-24 animate-pulse">
      <div className="h-10 w-64 bg-[#E8E0CE] rounded mb-4"></div>
      <div className="h-6 w-96 bg-[#E8E0CE] rounded mb-12"></div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:w-1/3 xl:w-1/4 flex flex-col gap-4">
          {Array.from({ length: durationDays }).map((_, i) => (
            <div key={i} className="h-12 bg-[#E8E0CE] rounded-lg w-full"></div>
          ))}
        </div>
        <div className="lg:w-2/3 xl:w-3/4 flex flex-col gap-6">
          {Array.from({ length: durationDays }).map((_, i) => (
            <div key={i} className="h-48 bg-[#FFFDF8] border border-[#E8E0CE] rounded-[24px] w-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ItineraryErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="w-full mt-12 lg:mt-24 p-8 border border-[#8B2020]/20 bg-[#8B2020]/5 rounded-[24px] text-center flex flex-col items-center justify-center">
      <h3 className="text-[#8B2020] font-bold text-lg mb-2">Detail itinerary belum dapat dimuat</h3>
      <p className="text-[#5C6470] mb-6 max-w-md">
        Ringkasan setiap hari tetap tersedia, dan kamu dapat mencoba lagi atau menggunakan itinerary terkurasi untuk rute ini.
      </p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-[#0D1B2A] text-white rounded-full font-bold hover:bg-[#1a304d] transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
