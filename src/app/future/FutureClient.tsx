"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FutureSignalDesk } from "@/components/future/FutureSignalDesk";
import { ArchipelagoObservatory } from "@/components/future/ArchipelagoObservatory";
import { searchFutureSignals } from "@/lib/future/searchFutureSignals";
import { parseFutureSearchParams, serializeFutureSearchParams, FutureExplorerState } from "@/lib/future/futureSearchParams";
import { RegionId } from "@/types/region";
import { FutureSignalStatus, FutureThemeId, FutureSignal } from "@/types/future";
import { FutureSignalResults } from "@/components/future/FutureSignalResults";
import { FutureSignalDetailDrawer } from "@/components/future/FutureSignalDetailDrawer";
import { usePassport } from "@/context/app-context";

export function FutureClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { passport, toggleFutureSignal } = usePassport();

  const [state, setState] = useState<FutureExplorerState>(() => parseFutureSearchParams(searchParams));
  
  // Local state for UI
  const [openedSignalId, setOpenedSignalId] = useState<string | null>(null);
  
  // Derived state from global passport
  const savedSignalIds = useMemo(() => new Set(passport.savedFutureSignals || []), [passport.savedFutureSignals]);

  // Sync state when URL search params change (e.g., Browser Back/Forward)
  useEffect(() => {
    setState(parseFutureSearchParams(searchParams));
  }, [searchParams]);

  // Derived state: calculate filtered signals
  const filteredSignals = useMemo(() => searchFutureSignals(state), [state]);
  const activeSignal = useMemo(() => filteredSignals.find(s => s.id === openedSignalId) || null, [filteredSignals, openedSignalId]);

  const updateStateAndUrl = useCallback((updates: Partial<FutureExplorerState>, method: "push" | "replace" = "replace") => {
    const next = { ...state, ...updates };
    setState(next);
    
    const newUrl = `/future?${serializeFutureSearchParams(next).toString()}`;
    const finalUrl = newUrl.endsWith("?") ? "/future" : newUrl;
    
    if (method === "push") {
      router.push(finalUrl, { scroll: false });
    } else {
      router.replace(finalUrl, { scroll: false });
    }
  }, [state, router]);

  const handleSearch = useCallback((query: string, theme: FutureThemeId | null, status: FutureSignalStatus | null) => {
    updateStateAndUrl({ query, themeId: theme, signalStatus: status }, "replace");
  }, [updateStateAndUrl]);

  const handleRegionSelect = useCallback((region: RegionId) => {
    updateStateAndUrl({ regionId: region }, "push");
  }, [updateStateAndUrl]);

  const handleResetFilters = useCallback(() => {
    updateStateAndUrl({ query: "", themeId: null, regionId: null, signalStatus: null }, "push");
  }, [updateStateAndUrl]);

  return (
    <>
      <FutureSignalDesk 
        initialQuery={state.query}
        initialTheme={state.themeId}
        initialStatus={state.signalStatus}
        onSearch={handleSearch} 
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12" id="explorer">
        <FutureSignalResults 
          signals={filteredSignals}
          savedSignalIds={savedSignalIds}
          onToggleSave={toggleFutureSignal}
          onOpenDetail={setOpenedSignalId}
          onResetFilters={handleResetFilters}
        />
      </div>

      <ArchipelagoObservatory 
        activeRegion={state.regionId}
        onRegionSelect={handleRegionSelect}
      />

      <FutureSignalDetailDrawer 
        signal={activeSignal}
        isOpen={!!activeSignal}
        isSaved={activeSignal ? savedSignalIds.has(activeSignal.id) : false}
        onClose={() => setOpenedSignalId(null)}
        onToggleSave={toggleFutureSignal}
      />
    </>
  );
}
