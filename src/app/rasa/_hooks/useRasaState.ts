"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { FlavorId } from "@/data/rasa/culinary.types";

export type RasaMode = "explore" | "tourist" | "learn";

export function useRasaState() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const query = searchParams.get("q") || "";
  const region = searchParams.get("region") || "";
  const province = searchParams.get("province") || "";
  const mode = (searchParams.get("mode") as RasaMode) || "explore";
  
  // Flavors can be a comma-separated list
  const flavorsQuery = searchParams.get("flavors");
  const activeFlavors: FlavorId[] = useMemo(() => {
    if (!flavorsQuery) return [];
    return flavorsQuery.split(",").filter(Boolean) as FlavorId[];
  }, [flavorsQuery]);

  const setParams = useCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    
    // Use replace for filter/query updates
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  const setQuery = (q: string) => setParams({ q });
  const setRegion = (r: string) => setParams({ region: r });
  const setProvince = (p: string) => setParams({ province: p });
  const setMode = (m: RasaMode) => setParams({ mode: m });
  const toggleFlavor = (f: FlavorId) => {
    const newFlavors = activeFlavors.includes(f)
      ? activeFlavors.filter(flavor => flavor !== f)
      : [...activeFlavors, f];
    setParams({ flavors: newFlavors.length > 0 ? newFlavors.join(",") : null });
  };
  
  const resetFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  return {
    query,
    region,
    province,
    mode,
    activeFlavors,
    setQuery,
    setRegion,
    setProvince,
    setMode,
    toggleFlavor,
    resetFilters
  };
}
