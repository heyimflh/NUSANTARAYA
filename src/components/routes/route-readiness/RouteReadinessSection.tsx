"use client";

import { useMemo } from "react";
import type { RouteRecommendation, RoutePlannerStatus } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { resolveRouteReadiness } from "@/lib/routes/readiness/resolveRouteReadiness";
import { useLanguage } from "@/context/app-context";

import { RouteReadinessSkeleton } from "./RouteReadinessSkeleton";
import { RouteReadinessHeader } from "./RouteReadinessHeader";
import { RouteReadinessNavigation } from "./RouteReadinessNavigation";
import { BudgetModule } from "./BudgetModule";
import { CulinaryModule } from "./CulinaryModule";
import { EtiquetteModule } from "./EtiquetteModule";
import { ChecklistModule } from "./ChecklistModule";

interface RouteReadinessSectionProps {
  result: RouteRecommendation | null;
  itinerary: RouteItinerary | null;
  status: RoutePlannerStatus;
}

export function RouteReadinessSection({ result, itinerary, status }: RouteReadinessSectionProps) {
  const { language } = useLanguage();
  const locale = language as "id" | "en";

  const dossier = useMemo(() => {
    if (!result) return null;
    
    // Generating dummy versions since we don't have true versioning on the objects yet
    const routeVersion = "1.0";
    const itineraryVersion = itinerary?.version || "1.0";

    return resolveRouteReadiness(
      result,
      itinerary,
      routeVersion,
      itineraryVersion,
      locale
    );
  }, [result, itinerary, locale]);

  if (status === "loading") {
    return (
      <section className="w-full mt-12 md:mt-16" aria-labelledby="route-readiness-title">
        <RouteReadinessSkeleton />
      </section>
    );
  }

  if (!result || !dossier) return null;

  return (
    <section
      id="route-readiness"
      aria-labelledby="route-readiness-title"
      className="w-full mt-12 md:mt-16 scroll-mt-32"
    >
      <div className="w-full rounded-[36px] bg-[#FFFDF8] border border-[#E8E0CE] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_rgba(13,27,42,0.04)]">
        <RouteReadinessHeader status={dossier.status} />
        <RouteReadinessNavigation />

        <div className="flex flex-col">
          <BudgetModule budget={dossier.budget} locale={dossier.locale} />
          <CulinaryModule culinaryItems={dossier.culinaryItems} />
          <EtiquetteModule etiquetteItems={dossier.etiquetteItems} />
          <ChecklistModule template={dossier.checklistTemplate} />
        </div>
      </div>
    </section>
  );
}
