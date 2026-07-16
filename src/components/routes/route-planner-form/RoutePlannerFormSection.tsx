"use client";

/**
 * RoutePlannerFormSection — Section wrapper for the planner form.
 * Placed in src/app/routes/page.tsx after Hero.
 * Orchestrates form submission to result view state (stubbed for now).
 */

import { useState } from "react";
import { PlannerSectionHeader } from "./PlannerSectionHeader";
import { RoutePlannerForm } from "./RoutePlannerForm";
import type { RouteRecommendation } from "@/types/route-planner";

export function RoutePlannerFormSection() {
  const [result, setResult] = useState<RouteRecommendation | null>(null);
  const [adjustmentNote, setAdjustmentNote] = useState<string | null>(null);

  // Focus management when result is generated
  const handleResult = (rec: RouteRecommendation, note: string | null) => {
    setResult(rec);
    setAdjustmentNote(note);
    
    // In a full implementation, this would scroll to the Result View section
    // or trigger a modal/overlay. For now, we scroll to top of section.
    const heading = document.getElementById("route-planner-heading");
    if (heading) {
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="route-planner-form" 
      className="relative w-full py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If we have a result, show the Result View (stubbed) */}
        {result ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#FFFDF8] border border-[#E8E0CE] rounded-3xl p-6 md:p-10">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-[#0D1B2A] mb-4">
                Rekomendasi Rute: {result.title}
              </h2>
              
              {adjustmentNote && (
                <div className="mb-6 p-4 rounded-xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/20 text-[#0D1B2A] font-inter text-[14px]">
                  <strong>Catatan Penyesuaian:</strong> {adjustmentNote}
                </div>
              )}
              
              <p className="font-inter text-[16px] text-[#5C6470] mb-8 leading-relaxed">
                {result.summary}
              </p>
              
              {/* Stub for Result View */}
              <div className="p-8 border-2 border-dashed border-[#E8E0CE] rounded-2xl text-center">
                <p className="font-inter text-[#9DAEC2] mb-4">
                  (Area ini akan menampilkan visualisasi rute interaktif, itinerary per hari, 
                  estimasi biaya, dan tombol "Simpan ke Passport" pada Section 3).
                </p>
                <button
                  onClick={() => setResult(null)}
                  className="px-6 py-2 rounded-xl bg-[#F8F4EA] text-[#5C6470] font-inter text-[14px] hover:bg-[#E8E0CE] transition-colors"
                >
                  Ubah Preferensi Form
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Form View */
          <div className="animate-in fade-in duration-500">
            <PlannerSectionHeader />
            <RoutePlannerForm onResult={handleResult} />
          </div>
        )}
        
      </div>
    </section>
  );
}
