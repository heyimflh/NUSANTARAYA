"use client";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";

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
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-[#F8F4EA] border border-[#E8E0CE] rounded-3xl text-center">
          <div className="w-16 h-16 bg-[#E8E0CE] rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5C6470]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-3" tabIndex={-1} data-route-section-heading>Persiapan Belum Tersedia</h2>
          <p className="text-[#5C6470] max-w-md">Data persiapan perjalanan dinamis untuk rute ini masih dalam proses penyusunan.</p>
        </div>
      </section>
    );
  }

  if (status === "error" && !dossier) {
    return (
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-red-50 border border-red-100 rounded-3xl text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-red-700 mb-3" tabIndex={-1} data-route-section-heading>Gagal Memuat Persiapan</h2>
          <p className="text-red-600/80 max-w-md">Terjadi kendala saat memuat persiapan perjalanan. Silakan coba kembali beberapa saat lagi.</p>
        </div>
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






