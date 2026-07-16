import React from "react";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { 
  REGION_DISPLAY_OPTIONS, 
  PACE_OPTIONS, 
  BUDGET_OPTIONS,
  INTEREST_OPTIONS
} from "@/data/routes/routePlannerOptions";
import { provinceMapData } from "@/data/provinces/provinces";

interface RouteImpactPreviewProps {
  values: RoutePlannerFormValues;
  activeStep: 1 | 2 | 3;
}

export function RouteImpactPreview({ values, activeStep }: RouteImpactPreviewProps) {
  // Compute impact
  const selectedRegion = REGION_DISPLAY_OPTIONS.find(r => r.id === values.destinationRegionId);
  const selectedPace = PACE_OPTIONS.find(p => p.value === values.travelPace);
  const selectedBudget = BUDGET_OPTIONS.find(b => b.value === values.budgetLevel);
  const originProvince = values.originProvinceId ? provinceMapData.find(p => p.id === values.originProvinceId) : null;
  const selectedInterests = values.interests.map(i => INTEREST_OPTIONS.find(opt => opt.value === i)?.label).filter(Boolean);

  const clusterCount = values.travelPace === "eksploratif" ? 4 : values.travelPace === "seimbang" ? 3 : 2;
  const adjustedClusterCount = Math.min(clusterCount, Math.max(2, Math.floor(values.durationDays / 2)));
  const originText = originProvince?.name || "Asal Keberangkatan";

  return (
    <div className="w-full bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] rounded-2xl flex flex-col relative shadow-[0_4px_24px_rgba(37,30,24,0.02)] z-10 overflow-hidden">
      
      {/* Dossier Header */}
      <div className="p-4 md:p-5 border-b border-[var(--planner-warm-border)] bg-[var(--planner-canvas)]/50 relative z-10 flex items-center justify-between">
        <h3 className="font-inter text-[13px] font-bold text-[var(--planner-ink)] flex items-center gap-2">
          Preview rute
        </h3>
        <span className="font-inter text-[11px] font-medium text-[var(--planner-muted)] flex items-center gap-1.5">
          {activeStep < 3 && (
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--planner-primary)] animate-pulse" />
          )}
          Diperbarui otomatis
        </span>
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-6 relative z-10">
        
        {/* Main Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-end gap-1">
            <span className="font-playfair text-[32px] md:text-[36px] font-bold text-[var(--planner-primary)] leading-none">
              {String(values.durationDays).padStart(2, '0')}
            </span>
            <span className="font-inter text-[14px] font-bold text-[var(--planner-ink)] pb-1">
              Hari
            </span>
          </div>

          {/* Route Origin -> Dest */}
          <div className="flex gap-4 relative">
            {/* Route Line */}
            <div className="w-[1px] bg-[var(--planner-primary)]/30 ml-[5px] absolute top-2 bottom-2"></div>
            
            <div className="flex flex-col gap-6 w-full">
              {/* Origin */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full border-2 border-[var(--planner-primary)] bg-[var(--planner-paper)] mt-1 z-10 shadow-[0_0_0_4px_var(--planner-paper)]" />
                <div className="flex flex-col">
                  <span className={`font-inter text-[14px] leading-tight ${originProvince ? "font-bold text-[var(--planner-ink)]" : "font-medium text-[var(--planner-muted)]"}`}>
                    {originText}
                  </span>
                  {!originProvince && (
                    <span className="font-inter text-[11px] text-[var(--planner-muted)]">Belum dipilih</span>
                  )}
                </div>
              </div>

              {/* Destination */}
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--planner-primary)] mt-1 z-10 shadow-[0_0_0_4px_var(--planner-paper)]" />
                <div className="flex flex-col">
                  <span className="font-inter text-[14px] font-bold text-[var(--planner-ink)] leading-tight">
                    {selectedRegion?.label || "Wilayah Tujuan"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[var(--planner-warm-border)]" />

        {/* Structural Spec */}
        <div className="flex flex-col gap-3">
          <h4 className="font-inter text-[11px] font-bold tracking-widest text-[var(--planner-muted)] uppercase">
            PERKIRAAN STRUKTUR
          </h4>
          
          <ul className="flex flex-col gap-2 font-inter text-[13px] text-[var(--planner-ink)] font-medium">
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--planner-warm-border)] shrink-0" />
              0{adjustedClusterCount}–0{adjustedClusterCount + 1} area utama
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--planner-warm-border)] shrink-0" />
              {selectedPace?.activitiesPerDay || "1-2"} aktivitas per hari
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--planner-warm-border)] shrink-0" />
              {selectedBudget?.label || "Hemat"} &middot; {selectedPace?.label || "Santai"}
            </li>
          </ul>
        </div>

        {/* Interests */}
        {selectedInterests.length > 0 && (
          <div className="flex flex-col gap-3 mt-1">
            <h4 className="font-inter text-[11px] font-bold tracking-widest text-[var(--planner-muted)] uppercase">
              FOKUS RUTE
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedInterests.map((interest, idx) => (
                <span key={idx} className="font-inter text-[11px] font-semibold text-[var(--planner-ink)] bg-[var(--planner-paper-raised)] border border-[var(--planner-warm-border)] px-2.5 py-1 rounded-md">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
      
      {/* Footer Note */}
      <div className="p-5 border-t border-[var(--planner-warm-border)] bg-[var(--planner-canvas)]/30 text-center relative z-10 mt-auto">
        <span className="font-inter text-[11px] text-[var(--planner-muted)]">
          Rute final dibuat setelah kamu meninjau semua pilihan.
        </span>
      </div>
    </div>
  );
}
