import { useState } from "react";
import { Sparkles, Loader2, ArrowRightCircle } from "lucide-react";
import { RouteAdjustmentIntent, RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { resolveRouteAdjustment } from "@/lib/routes/save-rani/resolveRouteAdjustment";
import { RouteAdjustmentDiff } from "./RouteAdjustmentDiff";

interface RaniAdjustmentLaneProps {
  result: RouteRecommendation;
  itinerary: RouteItinerary;
  values: RoutePlannerFormValues;
  locale: "id" | "en";
  onApplyDraft: (draft: RouteAdjustmentDraft) => void;
}

export function RaniAdjustmentLane({ result, itinerary, values, locale, onApplyDraft }: RaniAdjustmentLaneProps) {
  const [isResolving, setIsResolving] = useState(false);
  const [activeDraft, setActiveDraft] = useState<RouteAdjustmentDraft | null>(null);

  const quickPrompts: { intent: RouteAdjustmentIntent; label: string }[] = [
    { intent: "REDUCE_BUDGET", label: locale === "en" ? "Reduce budget" : "Kurangi budget" },
    { intent: "SLOWER_PACE", label: locale === "en" ? "More relaxed pace" : "Lebih santai" },
    { intent: "REDUCE_TRANSFERS", label: locale === "en" ? "Less transfers" : "Kurangi pindah" },
  ];

  const handlePromptClick = async (intent: RouteAdjustmentIntent) => {
    setIsResolving(true);
    setActiveDraft(null);
    try {
      const draft = await resolveRouteAdjustment(intent, result, itinerary, values, locale);
      // Simulate network/think delay for RANI UX
      setTimeout(() => {
        setActiveDraft(draft);
        setIsResolving(false);
      }, 600);
    } catch (e) {
      setIsResolving(false);
    }
  };

  const handleCancelDraft = () => {
    setActiveDraft(null);
  };

  const handleApplyDraft = () => {
    if (activeDraft) {
      onApplyDraft(activeDraft);
      setActiveDraft(null);
    }
  };

  return (
    <div className="flex flex-col border border-[#D4AF37]/30 rounded-2xl p-6 bg-gradient-to-br from-[#FFFDF8] to-[#F9F6F0] relative overflow-hidden">
      {/* RANI background decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start gap-4 mb-5 relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B3932F] rounded-xl flex items-center justify-center shrink-0 shadow-sm text-white">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-display font-medium text-lg text-[#2C3E50]">
            Ask RANI
          </h4>
          <p className="text-sm text-[#5C6D7E] leading-relaxed">
            {locale === "en" 
              ? "Need adjustments? I can help you find a better alternative without starting over." 
              : "Ada yang kurang pas? Saya bisa bantu carikan alternatif rute tanpa harus mengulang dari awal."}
          </p>
        </div>
      </div>

      {!activeDraft && (
        <div className="flex flex-wrap gap-2 relative z-10 mt-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt.intent}
              onClick={() => handlePromptClick(prompt.intent)}
              disabled={isResolving}
              className="px-4 py-2 bg-white border border-[#E8E0CE] text-[#2C3E50] text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {prompt.label}
              <ArrowRightCircle className="w-4 h-4 opacity-70" />
            </button>
          ))}
        </div>
      )}

      {isResolving && (
        <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mt-6 p-4 bg-white/50 rounded-xl border border-[#D4AF37]/20">
          <Loader2 className="w-5 h-5 animate-spin" />
          {locale === "en" ? "RANI is preparing an alternative..." : "RANI sedang menyusun alternatif..."}
        </div>
      )}

      {activeDraft && !isResolving && (
        <RouteAdjustmentDiff 
          draft={activeDraft} 
          locale={locale} 
          onApply={handleApplyDraft} 
          onCancel={handleCancelDraft} 
        />
      )}
    </div>
  );
}
