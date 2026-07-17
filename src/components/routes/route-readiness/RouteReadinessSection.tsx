import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";
"use client";

import { useMemo } from "react";
import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteReadinessDossier } from "@/lib/routes/readiness/routeReadinessSchema";
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
  dossier: RouteReadinessDossier | null;
  status: "idle" | "resolving" | "ready" | "partial" | "error";
}

export function RouteReadinessSection({ result, dossier, status }: RouteReadinessSectionProps) {
  const { language } = useLanguage();
  const locale = language as "id" | "en";

  if (status === "resolving") {
    return (
      <section className="w-full mt-12 md:mt-16" aria-labelledby="route-readiness-title">
        <RouteReadinessSkeleton />
      </section>
    );
  }

  if (!result) return null;

  if (status === "partial" && !dossier) {
    return (
      <section className="w-full mt-12 lg:mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4" tabIndex={-1} data-route-section-heading>Persiapan Perjalanan belum tersedia</h2>
        <p className="text-muted-foreground">Persiapan rute ini sedang diproses.</p>
      </section>
    );
  }

  if (status === "error" && !dossier) {
    return (
      <section className="w-full mt-12 lg:mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4 text-destructive" tabIndex={-1} data-route-section-heading>Gagal Memuat Persiapan Perjalanan</h2>
      </section>
    );
  }

  if (!dossier) return null;

  return (
    <section
      id={ROUTE_SECTION_IDS.readiness}
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





