"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FutureSignalDesk } from "@/components/future/FutureSignalDesk";
import { ArchipelagoObservatory } from "@/components/future/ArchipelagoObservatory";
import { FutureSignalStatus, FutureThemeId } from "@/types/future";
import { RegionId } from "@/types/region";
import { searchFutureSignals } from "@/lib/future/searchFutureSignals";

export function FutureClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeRegion, setActiveRegion] = useState<RegionId | null>(null);
  
  // Initialize from URL
  useEffect(() => {
    const region = searchParams.get("region") as RegionId | null;
    if (region && region !== activeRegion) {
      setActiveRegion(region);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearch = useCallback((query: string, theme: FutureThemeId | null, status: FutureSignalStatus | null) => {
    // We would typically sync to URL here, but for now we'll just log it or update local state
    // To sync to URL properly without blowing away other params:
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set("q", query); else params.delete("q");
    if (theme) params.set("theme", theme); else params.delete("theme");
    if (status) params.set("status", status); else params.delete("status");
    
    // We use replace to not flood history for every keystroke debounce
    router.replace(`/future?${params.toString()}`, { scroll: false });
    
    // We can also fetch the filtered signals here
    const results = searchFutureSignals({ query, themeIds: theme ? [theme] : undefined, status: status || undefined });
    console.log("Filtered Results:", results.length);
  }, [router, searchParams]);

  const handleRegionSelect = useCallback((region: RegionId) => {
    setActiveRegion(region);
    const params = new URLSearchParams(searchParams.toString());
    params.set("region", region);
    router.push(`/future?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  return (
    <>
      <FutureSignalDesk onSearch={handleSearch} />
      <ArchipelagoObservatory 
        activeRegion={activeRegion}
        onRegionSelect={handleRegionSelect}
      />
    </>
  );
}
