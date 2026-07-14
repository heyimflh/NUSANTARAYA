"use client";

import { useMemo, useState, KeyboardEvent, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/app-context";
import { RaniMapContext, RaniAction } from "@/types/rani";
import { buildRaniContext } from "@/lib/rani/buildRaniContext";
import { useRaniConversation } from "@/hooks/useRaniConversation";
import { resolveRaniAction } from "@/lib/rani/resolveRaniActions";
import { RaniContextRibbon } from "./RaniContextRibbon";
import { RaniQuickPrompts } from "./RaniQuickPrompts";
import { RaniConversationStage } from "./RaniConversationStage";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { RegionId } from "@/types/region";
import { usePassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { Send, ShieldCheck, Sparkles } from "lucide-react";

type Props = {
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  highlightedRegionId: RegionId | null;
  onExploreMapRegion: (regionId: string) => void;
  onOpenSummary: (provinceId: string) => void;
  onOpenAtlas: (provinceId: string) => void;
};

export function RaniMapAssistantSection({
  activeMode,
  activeLayer,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
  highlightedRegionId,
  onExploreMapRegion,
  onOpenSummary,
  onOpenAtlas,
}: Props) {
  const router = useRouter();
  const { t } = useLanguage();
  
  // 1. Get Passport summary for next milestones
  const passportSummary = usePassportProgressSummary(highlightedRegionId, selectedProvinceId);
  
  // 2. Build local context
  const context = useMemo(() => {
    return buildRaniContext({
      locale: "id", // Using "id" for MVP
      activeMode,
      activeLayer,
      selectedProvinceId,
      searchQuery,
      showFlagshipOnly,
      activeRegionId: highlightedRegionId,
      highlightedRegionId,
      activeJourneyId: null,
      journeyProvinceIds: [],
      plannedProvinceIds: passportSummary.planned,
      startedProvinceIds: passportSummary.started,
      completedProvinceIds: passportSummary.completed,
      latestAchievementId: passportSummary.latestAchievement?.id || null,
      nextMilestone: passportSummary.nextMilestone,
      entrySource: "section-scroll",
    });
  }, [
    activeMode,
    activeLayer,
    selectedProvinceId,
    searchQuery,
    showFlagshipOnly,
    highlightedRegionId,
    passportSummary
  ]);

  // 3. Initialize Conversation Engine
  const {
    currentResponse,
    isLoading,
    isOffline,
    quickPrompts,
    submitQuery,
    resetConversation
  } = useRaniConversation({ context });

  // 4. Input State
  const [inputValue, setInputValue] = useState("");

  const handleAction = (action: RaniAction) => {
    resolveRaniAction({
      action,
      onExploreMapRegion,
      onOpenSummary,
      onOpenAtlas,
      router
    });
  };

  const handlePromptSelect = (query: string) => {
    submitQuery(query);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      submitQuery(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Determine placeholders based on mode
  const placeholderText = activeMode === "explore" 
    ? "Tanyakan provinsi, budaya, rasa, atau perjalanan berikutnya..."
    : activeMode === "tourist" 
    ? "Tanyakan destinasi, kuliner, etika, atau itinerary..."
    : "Tanyakan sejarah, budaya, istilah, atau sumber pembelajaran...";

  return (
    <section 
      id="rani-map-assistant" 
      aria-labelledby="rani-map-assistant-heading"
      className="relative w-full py-20 md:py-32 bg-[#F8F4EA] overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#C9A84C] to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#10233A] to-transparent mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-medium tracking-widest text-[#C9A84C] uppercase text-sm">
              10 · RANI MAP ASSISTANT
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E8E0CE] rounded-full text-[10px] font-semibold tracking-wider text-[#5E6570] uppercase">
              <ShieldCheck className="w-3 h-3 text-[#2D6A4F]" />
              Panduan Lokal NUSANTARAYA
            </div>
            {/* Hybrid AI badge could be shown dynamically if an API is connected in future */}
          </div>
          
          <h2 id="rani-map-assistant-heading" className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#0D1B2A] mb-6">
            Temukan Langkah <br className="hidden md:block"/> Berikutnya Bersama RANI
          </h2>
          
          <p className="max-w-2xl text-[16px] md:text-[18px] text-[#5E6570] leading-relaxed">
            RANI membaca pilihan peta, minat, mode jelajah, dan progress Passport-mu untuk memberi rekomendasi yang relevan, dapat dijelaskan, dan langsung bisa ditindaklanjuti.
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Presence / Context Info */}
          <div className="lg:col-span-4 flex flex-col order-2 lg:order-1">
            
            <RaniContextRibbon context={context} />
            
            <div className="relative w-full max-w-[200px] mx-auto lg:mx-0 aspect-[3/4] mb-8 lg:mb-12 hidden md:block">
              {/* Fallback to rani-sapa or rani-avatar */}
              <Image 
                src="/assets/rani/rani-sapa.png"
                alt=""
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
                aria-hidden="true"
                priority
              />
            </div>

            <div className="mt-auto hidden lg:block bg-white/50 backdrop-blur rounded-xl p-4 border border-[#E8E0CE]">
               <div className="flex items-start gap-3 text-xs text-[#5E6570]">
                 <ShieldCheck className="w-5 h-5 shrink-0 text-[#2D6A4F] mt-0.5" />
                 <p>RANI menggunakan data terkurasi NUSANTARAYA. Jawaban tertentu dapat memakai AI sebagai peningkatan, tetapi fallback lokal tetap tersedia.</p>
               </div>
            </div>
            
          </div>

          {/* Right Conversation Stage */}
          <div className="lg:col-span-8 flex flex-col gap-6 order-1 lg:order-2">
            
            <RaniConversationStage 
              response={currentResponse} 
              isLoading={isLoading}
              isOffline={isOffline}
              onAction={handleAction}
              onClear={resetConversation}
            />

            <RaniQuickPrompts 
              prompts={quickPrompts}
              onSelect={handlePromptSelect}
              disabled={isLoading}
            />

            {/* Input Composer */}
            <div className="relative bg-white rounded-2xl border border-[#E8E0CE] shadow-sm p-2 transition-all focus-within:border-[#2D6BE4] focus-within:ring-2 focus-within:ring-[#2D6BE4]/20">
              <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholderText}
                disabled={isLoading}
                maxLength={500}
                rows={1}
                className="w-full resize-none bg-transparent border-0 focus:ring-0 px-4 py-3 text-[15px] text-[#0D1B2A] placeholder:text-[#5E6570] disabled:opacity-50"
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-2">
                <span className="text-[10px] text-gray-400 font-medium tracking-wider hidden sm:block">SHIFT + ENTER = NEWLINE</span>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-[#0D1B2A] flex items-center justify-center text-white disabled:bg-gray-200 disabled:text-gray-400 hover:bg-[#C9A84C] transition-colors"
                  aria-label="Kirim Pertanyaan"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </div>
            </div>

            {/* Mobile Trust Note */}
            <div className="lg:hidden mt-4 flex items-start gap-3 text-xs text-[#5E6570]">
              <ShieldCheck className="w-5 h-5 shrink-0 text-[#2D6A4F] mt-0.5" />
              <p>RANI menggunakan data terkurasi NUSANTARAYA.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
