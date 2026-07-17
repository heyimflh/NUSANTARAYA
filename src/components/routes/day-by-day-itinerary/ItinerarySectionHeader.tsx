import React from "react";

export function ItinerarySectionHeader({ durationDays }: { durationDays: number }) {
  return (
    <div className="flex flex-col gap-5 max-w-3xl mb-4">
      <h2
        id="itinerary-title"
        className="font-inter text-[13px] md:text-[14px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase"
      >
        Itinerary Perjalananmu
      </h2>
      <h3 className="font-playfair text-[36px] md:text-[44px] font-bold text-[#0D1B2A] leading-[1.15] tracking-tight">
        Jelajahi rute ini, satu hari demi satu hari.
      </h3>
      <p className="font-inter text-[16px] md:text-[18px] text-[#4A5568] leading-[1.7] max-w-2xl">
        Setiap hari disusun dengan fokus yang jelas, perpindahan yang realistis, dan ruang untuk menikmati budaya, rasa, serta cerita di sepanjang perjalanan.
      </p>
      <div className="flex items-start md:items-center gap-3 mt-4 text-[13px] text-[#8A94A6] bg-[#FFFDF8] border border-[#E8E0CE] px-4 py-3 rounded-xl w-fit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5 md:mt-0 text-[#C9A84C]">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-medium tracking-wide uppercase text-[11px] leading-tight pt-0.5">Rencana awal · Urutan dapat disesuaikan · Periksa kondisi perjalanan terbaru</span>
      </div>
    </div>
  );
}
