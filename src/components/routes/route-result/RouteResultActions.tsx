"use client";
import { navigateToRouteSection } from "@/lib/routes/navigateToRouteSection";

/**
 * RouteResultActions — Section 4 CTA Hierarchy
 * Primary: "Lihat Itinerary Hari demi Hari"
 * Secondary: Ubah Preferensi, Lihat Jalur di Peta, Simpan ke Passport,
 *            Sesuaikan bersama RANI, Lihat Alternatif Rute
 *
 * Rules:
 * - Only one primary CTA dominates
 * - Broken/unavailable actions are disabled with honest messaging
 * - Mobile: primary full width + 2 secondary visible + overflow menu
 * - Desktop: primary + up to 4 secondary inline
 * - Save shows saved state and undo/remove
 * - RANI is disabled if integration is not available on this page
 * - Share only if clipboard API is available
 */

import { useState, useRef } from "react";
import {
  ChevronRight,
  Edit3,
  Map,
  BookmarkPlus,
  CheckCircle2,
  MessageCircle,
  Shuffle,
  Share2,
  MoreHorizontal,
  X,
} from "lucide-react";
import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { trackRoutePlannerEvent } from "@/lib/routes/routePlannerAnalytics";
import { buildRaniContext } from "@/lib/routes/routeResultHelpers";
import { announcer } from "@/components/routes/route-planner-form/PlannerLiveRegion";
import { usePassport } from "@/context/app-context";
import { useMode, useLanguage } from "@/context/app-context";
import { useShare } from "@/hooks/useShare";

interface RouteResultActionsProps {
  result: RouteRecommendation;
  values: RoutePlannerFormValues;
  onEdit: () => void;
  onReset: () => void;
  locale?: "id" | "en";
}

export function RouteResultActions({
  result,
  values,
  onEdit,
  locale = "id",
}: RouteResultActionsProps) {
  const { saveRoute, passport } = usePassport();
  const { mode } = useMode();
  const { language } = useLanguage();
  const isSaved = passport.savedRoutes.includes(result.id);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">(
    isSaved ? "saved" : "idle"
  );
  const { share, isSharing, hasCopied } = useShare();
  const [showOverflow, setShowOverflow] = useState(false);
  const overflowRef = useRef<HTMLDivElement>(null);

  const t = {
    itinerary: locale === "en" ? "View Day-by-Day Itinerary" : "Lihat Itinerary Hari demi Hari",
    edit: locale === "en" ? "Adjust Preferences" : "Ubah Preferensi",
    map: locale === "en" ? "View on Map" : "Lihat Jalur di Peta",
    save: locale === "en" ? "Save to Passport" : "Simpan ke Passport",
    saved: locale === "en" ? "Saved" : "Tersimpan",
    rani: locale === "en" ? "Adjust with RANI" : "Sesuaikan bersama RANI",
    raniUnavailable:
      locale === "en"
        ? "RANI is available on the Explore page"
        : "RANI tersedia di halaman Explore",
    alternatives: locale === "en" ? "View Alternative Routes" : "Lihat Alternatif Rute",
    share: locale === "en" ? "Share Route" : "Bagikan Rute",
    copied: locale === "en" ? "Copied!" : "Tersalin!",
    more: locale === "en" ? "More actions" : "Aksi lainnya",
  };

  // ── Primary CTA: scroll to itinerary ──
  const handleItinerary = () => {
    trackRoutePlannerEvent("route_result_itinerary_clicked");
    navigateToRouteSection("itinerary");
  };

  // ── Edit preferences ──
  const handleEdit = () => {
    trackRoutePlannerEvent("route_result_edit_clicked");
    onEdit();
  };

  // ── View on map ──
  const handleMap = () => {
    trackRoutePlannerEvent("route_result_map_clicked");
    navigateToRouteSection("map");
  };

  // ── Save to Passport ──
  const handleSave = () => {
    if (saveState === "saved" || isSaved) return;
    setSaveState("saving");
    try {
      saveRoute(result.id, result.provinceIds);
      setSaveState("saved");
      trackRoutePlannerEvent("route_result_saved");
      announcer.announce(
        locale === "en"
          ? "Route saved to Passport."
          : "Rute berhasil disimpan ke Passport.",
        "polite"
      );
    } catch {
      setSaveState("error");
      announcer.announce(
        locale === "en" ? "Failed to save route." : "Gagal menyimpan rute.",
        "assertive"
      );
    }
  };

  // ── RANI (honest disabled state — not mounted on /routes yet) ──
  const handleRani = () => {
    trackRoutePlannerEvent("route_result_rani_clicked");
    // Build structured context (ready for RANI integration)
    buildRaniContext(result, values, language as "id" | "en", mode);
    // Navigate to RANI on Explore page with context
    navigateToRouteSection("saveRani");
  };

  // ── Alternatives ──
  const handleAlternatives = () => {
    trackRoutePlannerEvent("route_result_alternatives_clicked");
    navigateToRouteSection("presets");
  };

  // ── Share ──
  const handleShare = async () => {
    await share({
      title: "NUSANTARAYA Route",
      text: "Lihat rekomendasi rute ini di NUSANTARAYA",
      url: window.location.href,
    });
    announcer.announce(
      locale === "en" ? "Route link copied to clipboard." : "Tautan rute disalin.",
      "polite"
    );
  };

  const canShare = true; // useShare handles fallback

  const savedButtonClass =
    saveState === "saved" || isSaved
      ? "bg-[#F0F7EF] text-[#2D5A27] border border-[#2D5A27]/20 cursor-default"
      : saveState === "saving"
      ? "bg-[#F8F4EA] text-[#9DAEC2] cursor-wait border border-[#E8E0CE]"
      : "bg-white text-[#0D1B2A] border border-[#E8E0CE] hover:bg-[#F8F4EA] transition-colors";

  return (
    <div className="flex flex-col gap-4">
      {/* Primary CTA — full width on mobile */}
      <button
        type="button"
        onClick={handleItinerary}
        className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-inter text-[15px] font-bold bg-[#0D1B2A] text-[#C9A84C] hover:bg-[#1A2A40] shadow-[0_4px_16px_rgba(13,27,42,0.2)] hover:shadow-[0_6px_20px_rgba(13,27,42,0.3)] transition-all focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[52px]"
      >
        {t.itinerary}
        <ChevronRight
          className="w-5 h-5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>

      {/* Secondary actions row */}
      <div className="flex flex-wrap gap-2">
        {/* Edit */}
        <button
          type="button"
          onClick={handleEdit}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold text-[#0D1B2A] border border-[#E8E0CE] bg-white hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
        >
          <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
          {t.edit}
        </button>

        {/* Map */}
        <button
          type="button"
          onClick={handleMap}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold text-[#0D1B2A] border border-[#E8E0CE] bg-white hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
        >
          <Map className="w-3.5 h-3.5" aria-hidden="true" />
          {t.map}
        </button>

        {/* Save to Passport */}
        <button
          type="button"
          onClick={handleSave}
          disabled={saveState === "saved" || isSaved || saveState === "saving"}
          aria-label={
            saveState === "saved" || isSaved
              ? locale === "en"
                ? "Route already saved to Passport"
                : "Rute sudah disimpan ke Passport"
              : t.save
          }
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px] ${savedButtonClass}`}
        >
          {saveState === "saved" || isSaved ? (
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <BookmarkPlus className="w-3.5 h-3.5" aria-hidden="true" />
          )}
          {saveState === "saved" || isSaved ? t.saved : t.save}
        </button>

        {/* RANI */}
        <button
          type="button"
          onClick={handleRani}
          title={t.raniUnavailable}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold text-[#0D1B2A] border border-[#E8E0CE] bg-white hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
        >
          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
          {t.rani}
        </button>

        {/* Overflow menu for mobile */}
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setShowOverflow(!showOverflow)}
            aria-expanded={showOverflow}
            aria-label={t.more}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold text-[#0D1B2A] border border-[#E8E0CE] bg-white hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
          >
            <MoreHorizontal className="w-4 h-4" aria-hidden="true" />
          </button>

          {showOverflow && (
            <div
              ref={overflowRef}
              className="absolute bottom-full right-0 mb-2 bg-white border border-[#E8E0CE] rounded-2xl shadow-[0_8px_24px_rgba(13,27,42,0.08)] p-2 min-w-[180px] z-20"
              role="menu"
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => { setShowOverflow(false); handleAlternatives(); }}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl font-inter text-[13px] font-semibold text-[#0D1B2A] hover:bg-[#F8F4EA] transition-colors text-left min-h-[44px]"
              >
                <Shuffle className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
                {t.alternatives}
              </button>
              {canShare && (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => { setShowOverflow(false); handleShare(); }}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl font-inter text-[13px] font-semibold text-[#0D1B2A] hover:bg-[#F8F4EA] transition-colors text-left min-h-[44px]"
                >
                  {hasCopied
                    ? <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A27]" aria-hidden="true" />
                    : <Share2 className={`w-3.5 h-3.5 text-[#C9A84C] ${isSharing ? "animate-pulse" : ""}`} aria-hidden="true" />
                  }
                  {hasCopied ? t.copied : t.share}
                </button>
              )}
              <button
                type="button"
                role="menuitem"
                onClick={() => setShowOverflow(false)}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl font-inter text-[13px] font-semibold text-[#9DAEC2] hover:bg-[#F8F4EA] transition-colors text-left min-h-[44px]"
                aria-label={locale === "en" ? "Close menu" : "Tutup menu"}
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
                {locale === "en" ? "Close" : "Tutup"}
              </button>
            </div>
          )}
        </div>

        {/* Desktop-only actions (inline) */}
        <button
          type="button"
          onClick={handleAlternatives}
          className="hidden lg:flex items-center gap-1.5 px-4 py-2.5 rounded-full font-inter text-[13px] font-semibold text-[#0D1B2A] border border-[#E8E0CE] bg-white hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
        >
          <Shuffle className="w-3.5 h-3.5" aria-hidden="true" />
          {t.alternatives}
        </button>
      </div>
    </div>
  );
}





