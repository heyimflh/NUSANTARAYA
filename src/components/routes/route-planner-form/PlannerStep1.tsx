import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { DurationSelector } from "./DurationSelector";
import { OriginCombobox } from "./OriginCombobox";
import { RegionSelector } from "./RegionSelector";

interface PlannerStep1Props {
  values: RoutePlannerFormValues;
  updateField: <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => void;
}

export function PlannerStep1({ values, updateField }: PlannerStep1Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-12"
    >
      <div className="sr-only" aria-live="polite">
        Langkah 1 dari 3: Rencana dasar
      </div>

      <DurationSelector 
        value={values.durationDays} 
        onChange={(v) => updateField("durationDays", v)} 
      />

      <OriginCombobox 
        value={values.originProvinceId} 
        onChange={(v) => updateField("originProvinceId", v)} 
      />

      <RegionSelector 
        value={values.destinationRegionId} 
        onChange={(v) => updateField("destinationRegionId", v)} 
      />
    </motion.div>
  );
}
