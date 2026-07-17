import { useMemo } from "react";
import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import type { PassportData } from "@/lib/types";
import type { ActiveRouteWorkspace } from "@/types/route-workspace";
import { resolveActiveRouteWorkspace } from "@/lib/routes/workspace/resolveActiveRouteWorkspace";

export function useActiveRouteWorkspace(
  recommendation: RouteRecommendation | null,
  values: RoutePlannerFormValues,
  passport: PassportData,
  source: string,
  locale: "id" | "en"
): ActiveRouteWorkspace {
  return useMemo(
    () => resolveActiveRouteWorkspace(recommendation, values, passport, source, locale),
    [
      recommendation,
      values, // Form values can affect snapshot build
      passport,
      source,
      locale,
    ]
  );
}

