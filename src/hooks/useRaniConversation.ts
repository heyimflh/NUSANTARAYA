import { useState, useCallback, useEffect, useRef } from "react";
import { RaniMapContext, RaniResponse, RaniPrompt } from "@/types/rani";
import { raniDemoPresets } from "@/data/rani/presets";
import { classifyRaniIntent } from "@/lib/rani/classifyRaniIntent";
import { rankRaniRecommendations } from "@/lib/rani/rankRaniRecommendations";
import { raniKnowledgeBase } from "@/data/rani/knowledge";
import { ExploreModeId } from "@/data/exploreControls";

type UseRaniConversationParams = {
  context: RaniMapContext;
};

export function useRaniConversation({ context }: UseRaniConversationParams) {
  const [currentResponse, setCurrentResponse] = useState<RaniResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  
  // Track previous context to see if it significantly changed to update recommendation
  const prevContextRef = useRef(context);

  // Default quick prompts based on mode
  const getQuickPrompts = useCallback((mode: ExploreModeId): RaniPrompt[] => {
    switch (mode) {
      case "tourist":
        return [
          { id: "p1", label: "Apa yang sebaiknya saya lihat?" },
          { id: "p2", label: "Apa kuliner yang patut dicoba?" },
          { id: "p3", label: "Buat rencana perjalanan ringkas" },
          { id: "p4", label: "Apa etika budaya yang perlu diketahui?" },
        ];
      case "learn":
        return [
          { id: "p1", label: "Jelaskan budaya wilayah ini" },
          { id: "p2", label: "Apa konteks sejarahnya?" },
          { id: "p3", label: "Tampilkan sumber pembelajaran" },
          { id: "p4", label: "Bandingkan dua wilayah" },
        ];
      case "explore":
      default:
        return [
          { id: "p1", label: "Ke mana saya harus lanjut?" },
          { id: "p2", label: "Apa milestone Passport saya berikutnya?" },
          { id: "p3", label: "Tunjukkan hidden gem editorial" },
          { id: "p4", label: "Buat journey dari pilihan ini" },
        ];
    }
  }, []);

  // Update proactive recommendation when context changes
  useEffect(() => {
    // Only update if selected province or active region changed significantly
    if (
      context.selectedProvinceId !== prevContextRef.current.selectedProvinceId ||
      context.activeRegionId !== prevContextRef.current.activeRegionId ||
      context.nextMilestone?.provinceId !== prevContextRef.current.nextMilestone?.provinceId
    ) {
      setIsLoading(true);
      
      // Simulate slight processing delay for proactive recommendation
      const timer = setTimeout(() => {
        const rec = rankRaniRecommendations(context);
        setCurrentResponse(rec);
        setIsLoading(false);
      }, 300);
      
      prevContextRef.current = context;
      return () => clearTimeout(timer);
    }
  }, [context]);

  // Initial load
  useEffect(() => {
    if (!currentResponse && !isLoading) {
      const rec = rankRaniRecommendations(context);
      setCurrentResponse(rec);
    }
  }, [context, currentResponse, isLoading]);

  const submitQuery = useCallback((query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const classification = classifyRaniIntent(query, context.activeMode);
      
      // 1. Try exact preset match
      let response = raniDemoPresets.find(p => p.intent === classification.intent);
      
      // 2. Try knowledge base match
      if (!response && classification.confidence !== "low") {
         const kbMatch = raniKnowledgeBase.find(k => 
           k.keywords.some(kw => query.toLowerCase().includes(kw)) ||
           (k.type === "culture" && classification.intent === "EXPLAIN_CULTURE") ||
           (k.type === "culinary" && classification.intent === "RECOMMEND_CULINARY")
         );
         
         if (kbMatch) {
           response = {
             id: `resp-${kbMatch.id}`,
             intent: classification.intent,
             title: kbMatch.title,
             summary: kbMatch.summary,
             bodyBlocks: [{ type: "paragraph", text: kbMatch.summary }],
             reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
             sourceIds: kbMatch.sourceIds,
             primaryAction: kbMatch.actionTargets.length > 0 ? {
               id: `act-${kbMatch.id}`,
               type: kbMatch.actionTargets[0].type,
               label: "Lihat Detail",
               payload: kbMatch.actionTargets[0].payload
             } : null,
             secondaryActions: [],
             followUpPrompts: [],
             generatedBy: "local-template",
             confidence: "high"
           };
         }
      }
      
      // 3. Fallback to out of scope
      if (!response) {
         response = {
           id: "resp-oos",
           intent: "OUT_OF_SCOPE",
           title: "Di Luar Cakupan",
           summary: "Pertanyaan di luar cakupan RANI.",
           bodyBlocks: [{
             type: "warning",
             text: "Maaf, RANI berfokus pada eksplorasi budaya, provinsi, kuliner, perjalanan, dan fitur NUSANTARAYA. Saya belum memiliki data untuk pertanyaan ini."
           }],
           reasonCodes: ["EDITORIAL_FALLBACK"],
           sourceIds: [],
           primaryAction: null,
           secondaryActions: [],
           followUpPrompts: [],
           generatedBy: "local-template",
           confidence: "high"
         };
      }
      
      setCurrentResponse(response);
      setIsLoading(false);
    }, 400); // 400ms simulated local delay
    
  }, [context]);

  const resetConversation = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentResponse(rankRaniRecommendations(context));
      setIsLoading(false);
    }, 200);
  }, [context]);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);
    
    if (typeof window !== "undefined") {
      setIsOffline(!window.navigator.onLine);
      window.addEventListener("offline", handleOffline);
      window.addEventListener("online", handleOnline);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("offline", handleOffline);
        window.removeEventListener("online", handleOnline);
      }
    };
  }, []);

  return {
    currentResponse,
    isLoading,
    isOffline,
    quickPrompts: getQuickPrompts(context.activeMode),
    submitQuery,
    resetConversation
  };
}
