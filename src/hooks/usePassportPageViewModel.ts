import { useState, useEffect } from "react";
import { usePassport } from "@/context/app-context";
import { usePassportProgressSummary, PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { buildSavedRouteView, SavedRoutePassportView } from "@/lib/passport/buildSavedRouteView";
import { buildProvinceLedgerView, PassportProvinceView } from "@/lib/passport/buildProvinceLedger";
import { getAllRegionIds } from "@/data/regions/regionProvinceMap";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";
import { RegionalProgress } from "@/types/region";

export type PassportPageViewModel = {
  hydrated: boolean;
  identity: PassportProgressSummary;
  savedRoutes: SavedRoutePassportView[];
  provinces: {
    planned: PassportProvinceView[];
    started: PassportProvinceView[];
    completed: PassportProvinceView[];
  };
  regionalProgress: RegionalProgress[];
};

export function usePassportPageViewModel(): PassportPageViewModel {
  const { passport } = usePassport();
  const [hydrated, setHydrated] = useState(false);
  const summary = usePassportProgressSummary();

  // All 7 regions progress (statically calling the hook for each region)
  const regionalProgress = [
    useRegionalPassportProgress("sumatera"),
    useRegionalPassportProgress("jawa"),
    useRegionalPassportProgress("kalimantan"),
    useRegionalPassportProgress("sulawesi"),
    useRegionalPassportProgress("bali-nusa-tenggara"),
    useRegionalPassportProgress("maluku"),
    useRegionalPassportProgress("papua"),
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  const savedRoutes = (passport.savedRoutes || []).map((routeId) => 
    buildSavedRouteView(routeId, passport.savedRouteDetails)
  );

  const provinces = {
    planned: buildProvinceLedgerView(summary.planned, "planned"),
    started: buildProvinceLedgerView(summary.started, "started"),
    completed: buildProvinceLedgerView(summary.completed, "completed"),
  };

  return {
    hydrated,
    identity: summary,
    savedRoutes,
    provinces,
    regionalProgress,
  };
}
