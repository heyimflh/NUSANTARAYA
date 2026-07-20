import { useState, useCallback, useEffect, useRef } from "react";
import { RaniMapContext, RaniConversationState, RaniPrompt, RaniMessage } from "@/types/rani";
import { classifyRaniIntent } from "@/lib/rani/classifyRaniIntent";
import { rankRaniRecommendations } from "@/lib/rani/rankRaniRecommendations";
import { retrieveRaniKnowledge } from "@/lib/rani/retrieveRaniKnowledge";
import { composeLocalRaniResponse } from "@/lib/rani/composeLocalRaniResponse";
import { ExploreModeId } from "@/data/exploreControls";

type UseRaniConversationParams = {
  context: RaniMapContext;
};

export function useRaniConversation({ context }: UseRaniConversationParams) {
  const [conversation, setConversation] = useState<RaniConversationState>({
    messages: [],
    status: "idle",
    lastQuery: null,
    lastIntent: null,
    exchangeCount: 0,
    generatedBy: null,
    error: null
  });
  
  const [isOffline, setIsOffline] = useState(false);
  const prevContextRef = useRef(context);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
          { id: "p4", label: "Bandingkan dua wilayah tanpa menentukan yang terbaik" },
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

  // Compute a proactive recommendation if there are no messages
  const computeProactiveRecommendation = useCallback(() => {
    setConversation(prev => ({ ...prev, status: "loading" }));
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const candidates = retrieveRaniKnowledge("", "UNKNOWN", context);
      const ranked = rankRaniRecommendations(candidates, context, "UNKNOWN");
      const bestCandidate = ranked.length > 0 ? ranked[0] : null;
      
      const response = composeLocalRaniResponse(bestCandidate, "UNKNOWN");
      const newMsg: RaniMessage = {
        id: `msg-sys-${Date.now()}`,
        role: "rani",
        response,
        timestamp: new Date().toISOString()
      };
      
      setConversation(prev => ({
        ...prev,
        status: "idle",
        messages: [newMsg],
        generatedBy: "local"
      }));
    }, 250);
  }, [context]);

  // Initial load
  useEffect(() => {
    if (conversation.messages.length === 0 && conversation.status === "idle") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      computeProactiveRecommendation();
    }
  }, [conversation.messages.length, conversation.status, computeProactiveRecommendation]);

  // Update recommendation when context changes drastically (only if we haven't conversed much)
  useEffect(() => {
    if (conversation.exchangeCount === 0) {
      if (
        context.selectedProvinceId !== prevContextRef.current.selectedProvinceId ||
        context.activeRegionId !== prevContextRef.current.activeRegionId ||
        context.nextMilestone?.provinceId !== prevContextRef.current.nextMilestone?.provinceId ||
        context.activeLayer !== prevContextRef.current.activeLayer
      ) {
        computeProactiveRecommendation();
      }
    }
    prevContextRef.current = context;
  }, [context, conversation.exchangeCount, computeProactiveRecommendation]);

  const submitQuery = useCallback((query: string) => {
    if (!query.trim()) return;
    
    const userMsg: RaniMessage = {
      id: `msg-user-${Date.now()}`,
      role: "user",
      text: query.trim(),
      timestamp: new Date().toISOString()
    };
    
    // We only keep up to 2 exchanges (4 messages). If exceeded, we drop the oldest.
    setConversation(prev => {
      const currentMsgs = prev.messages;
      // If we are at 2 exchanges (4 messages: 1 proactive + 1 user + 1 rani + 1 user? wait. Let's just keep last 3 + the new one)
      const keptMsgs = currentMsgs.length >= 4 ? currentMsgs.slice(currentMsgs.length - 3) : currentMsgs;
      return { 
        ...prev, 
        status: "loading",
        messages: [...keptMsgs, userMsg],
        lastQuery: query,
        exchangeCount: prev.exchangeCount + 1
      };
    });
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const { intent } = classifyRaniIntent(query, context.activeMode);
      
      const candidates = retrieveRaniKnowledge(query, intent, context);
      const ranked = rankRaniRecommendations(candidates, context, intent);
      const bestCandidate = ranked.length > 0 ? ranked[0] : null;
      
      const response = composeLocalRaniResponse(bestCandidate, intent);
      
      const raniMsg: RaniMessage = {
        id: `msg-rani-${Date.now()}`,
        role: "rani",
        response,
        timestamp: new Date().toISOString()
      };
      
      setConversation(prev => ({
        ...prev,
        status: "idle",
        lastIntent: intent,
        messages: [...prev.messages, raniMsg]
      }));
    }, 450); // Simulated delay
    
  }, [context]);

  const resetConversation = useCallback(() => {
    setConversation({
      messages: [],
      status: "idle",
      lastQuery: null,
      lastIntent: null,
      exchangeCount: 0,
      generatedBy: null,
      error: null
    });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => computeProactiveRecommendation(), 50);
  }, [computeProactiveRecommendation]);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);
    
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
    conversation,
    isOffline,
    quickPrompts: getQuickPrompts(context.activeMode),
    submitQuery,
    resetConversation
  };
}
