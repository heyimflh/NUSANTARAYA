import { useState, useRef, useEffect } from "react";
import { Sparkles, Loader2, ArrowRightCircle, AlertCircle } from "lucide-react";
import { RouteAdjustmentIntent, RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { resolveRouteAdjustment, isDraftStale } from "@/lib/routes/save-rani/resolveRouteAdjustment";
import { RouteAdjustmentDiff } from "./RouteAdjustmentDiff";

interface RaniAdjustmentLaneProps {
  result: RouteRecommendation;
  itinerary: RouteItinerary;
  values: RoutePlannerFormValues;
  locale: "id" | "en";
  onApplyDraft: (draft: RouteAdjustmentDraft) => void;
  onUndoDraft?: () => void;
  canUndo?: boolean;
}

type AdjustmentUIState = "idle" | "resolving" | "preview" | "error";

export function RaniAdjustmentLane({ result, itinerary, values, locale, onApplyDraft }: RaniAdjustmentLaneProps) {
  const [uiState, setUIState] = useState<AdjustmentUIState>("idle");
  const [activeDraft, setActiveDraft] = useState<RouteAdjustmentDraft | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeout on unmount or route change
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [result.id, result.version, itinerary.version]);

  const handlePromptClick = async (intent: RouteAdjustmentIntent) => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setUIState("resolving");
    setActiveDraft(null);
    setErrorMessage(null);

    try {
      const draft = await resolveRouteAdjustment(intent, result, itinerary, values, locale);
      
      // Simulate network/think delay for RANI UX (optional cosmetic delay)
      timeoutRef.current = setTimeout(() => {
        setActiveDraft(draft);
        setUIState(draft.status === "valid" ? "preview" : "error");
        if (draft.status === "invalid") {
          setErrorMessage(
            locale === "en"
              ? "This adjustment cannot be applied to the current route."
              : "Penyesuaian ini tidak dapat diterapkan pada rute saat ini."
          );
        }
        timeoutRef.current = null;
      }, 600);
    } catch (error) {
      // Clear timeout on error
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      setUIState("error");
      setErrorMessage(
        locale === "en"
          ? "RANI cannot prepare a safe adjustment. Try another option or keep your current route."
          : "RANI belum dapat menyiapkan penyesuaian yang aman. Coba opsi lain atau pertahankan rute saat ini."
      );
    }
  };

  const handleCancelDraft = () => {
    setActiveDraft(null);
    setUIState("idle");
    setErrorMessage(null);
  };

  const handleApplyDraft = () => {
    if (!activeDraft || activeDraft.status !== "valid") {
      return; // Defense in depth: should not happen if UI is correct
    }

    // Check if draft is stale
    if (isDraftStale(activeDraft, result.id, result.version, itinerary.version)) {
      setErrorMessage(
        locale === "en"
          ? "This draft is outdated. Please create a new preview."
          : "Draft ini sudah usang. Silakan buat ulang preview."
      );
      setUIState("error");
      return;
    }

    onApplyDraft(activeDraft);
    setActiveDraft(null);
    setUIState("idle");
    setErrorMessage(null);
  };

  const quickPrompts: { intent: RouteAdjustmentIntent; label: string }[] = [
    { intent: "REDUCE_BUDGET", label: locale === "en" ? "Reduce budget" : "Kurangi budget" },
    { intent: "SLOWER_PACE", label: locale === "en" ? "More relaxed pace" : "Lebih santai" },
    { intent: "REDUCE_TRANSFERS", label: locale === "en" ? "Less transfers" : "Kurangi pindah" },
  ];

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

      {uiState === "idle" && !activeDraft && (
        <div className="flex flex-wrap gap-2 relative z-10 mt-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt.intent}
              onClick={() => handlePromptClick(prompt.intent)}
              className="px-4 py-2 bg-white border border-[#E8E0CE] text-[#2C3E50] text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center gap-2"
            >
              {prompt.label}
              <ArrowRightCircle className="w-4 h-4 opacity-70" />
            </button>
          ))}
        </div>
      )}

      {uiState === "resolving" && (
        <div className="flex items-center gap-3 text-[#D4AF37] font-medium text-sm mt-6 p-4 bg-white/50 rounded-xl border border-[#D4AF37]/20">
          <Loader2 className="w-5 h-5 animate-spin" />
          {locale === "en" ? "RANI is preparing an alternative..." : "RANI sedang menyusun alternatif..."}
        </div>
      )}

      {uiState === "error" && errorMessage && (
        <div className="flex items-start gap-3 text-red-700 font-medium text-sm mt-6 p-4 bg-red-50 rounded-xl border border-red-200" role="alert">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p>{errorMessage}</p>
            <button
              onClick={() => {
                setUIState("idle");
                setErrorMessage(null);
                setActiveDraft(null);
              }}
              className="mt-2 text-xs underline hover:no-underline"
            >
              {locale === "en" ? "Try again" : "Coba lagi"}
            </button>
          </div>
        </div>
      )}

      {uiState === "preview" && activeDraft && activeDraft.status === "valid" && (
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
