import React from "react";
import { Clock } from "lucide-react";

export function PlannerIntroSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Left Column (Main content) */}
      <div className="flex-1 max-w-[680px]">
        <span className="inline-block font-inter text-[12px] font-bold text-[var(--planner-primary)] uppercase tracking-wide mb-3">
          Nusa Route Planner
        </span>
        <h1 className="font-playfair text-[32px] md:text-[44px] font-bold text-[var(--planner-ink)] leading-[1.1] mb-4">
          Buat rute yang menyesuaikan waktu, minat, dan ritmemu.
        </h1>
        <p className="font-inter text-[16px] md:text-[17px] text-[var(--planner-earth)] leading-relaxed max-w-[540px]">
          Jawab beberapa pertanyaan singkat. Kami akan menyusun urutan destinasi, pembagian hari, dan catatan perjalanan.
        </p>
      </div>

      {/* Right Column (Outcomes) */}
      <div className="w-full md:w-[280px] shrink-0 md:border-l border-[var(--planner-warm-border)] md:pl-8 py-2 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[var(--planner-primary)]">
          <Clock className="w-4 h-4" />
          <span className="font-inter text-[13px] font-semibold">
            Selesai sekitar 1 menit
          </span>
        </div>
        
        <ul className="flex flex-col gap-2.5 font-inter text-[14px] text-[var(--planner-ink)] list-disc pl-4 marker:text-[var(--planner-saffron)]">
          <li>Urutan destinasi</li>
          <li>Itinerary harian</li>
          <li>Catatan perjalanan</li>
        </ul>
      </div>

    </div>
  );
}
