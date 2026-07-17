import { useMemo } from "react";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { useLanguage, usePassport } from "@/context/app-context";
import { buildRouteSaveSnapshot } from "@/lib/routes/save-rani/buildRouteSaveSnapshot";
import { FinalRouteSnapshot } from "./FinalRouteSnapshot";
import { PassportSaveLane } from "./PassportSaveLane";
import { RaniAdjustmentLane } from "./RaniAdjustmentLane";
import { RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";
import { motion } from "framer-motion";

interface RouteSaveRaniSectionProps {
  result: RouteRecommendation | null;
  itinerary: RouteItinerary | null;
  values: RoutePlannerFormValues;
  resultSource: "form" | "preset" | "url";
  onApplyDraft: (draft: RouteAdjustmentDraft) => void;
}

export function RouteSaveRaniSection({
  result,
  itinerary,
  values,
  resultSource,
  onApplyDraft,
}: RouteSaveRaniSectionProps) {
  const { language } = useLanguage();
  const { passport } = usePassport();
  const locale = language as "id" | "en";

  const savedRouteSnapshot = useMemo(() => {
    if (!result) return null;
    return buildRouteSaveSnapshot(result, values, passport, resultSource, locale);
  }, [result, values, passport, resultSource, locale]);

  if (!result || !itinerary || !savedRouteSnapshot) return null;

  return (
    <motion.section
      id="route-save-rani-section"
      className="w-full mt-12 mb-24"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2C3E50]">
            {locale === "en" ? "Journey Commitment Hub" : "Komitmen Perjalanan"}
          </h2>
          <p className="text-[#5C6D7E] mt-2 text-base md:text-lg">
            {locale === "en" 
              ? "Save your finalized route to Nusa Passport, or ask RANI for contextual adjustments." 
              : "Simpan rute finalmu ke Nusa Passport, atau minta RANI melakukan penyesuaian akhir."}
          </p>
        </div>

        {/* 1. Final Route Snapshot */}
        <FinalRouteSnapshot result={result} locale={locale} />

        {/* 2. Split Lanes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Passport Save */}
          <PassportSaveLane savedRoute={savedRouteSnapshot} locale={locale} />

          {/* Right: RANI Adjustment */}
          <RaniAdjustmentLane 
            result={result} 
            itinerary={itinerary} 
            values={values} 
            locale={locale} 
            onApplyDraft={onApplyDraft} 
          />
        </div>
      </div>
    </motion.section>
  );
}
