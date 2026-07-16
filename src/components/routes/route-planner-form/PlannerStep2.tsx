import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { InterestSelector } from "./InterestSelector";
import { BudgetSelector } from "./BudgetSelector";
import { PaceSelector } from "./PaceSelector";

interface PlannerStep2Props {
  values: RoutePlannerFormValues;
  updateField: <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => void;
}

export function PlannerStep2({ values, updateField }: PlannerStep2Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-12"
    >
      <div className="sr-only" aria-live="polite">
        Langkah 2 dari 3: Preferensi perjalanan
      </div>

      <InterestSelector 
        value={values.interests} 
        onChange={(v) => updateField("interests", v)} 
      />

      <BudgetSelector 
        value={values.budgetLevel} 
        onChange={(v) => updateField("budgetLevel", v)} 
      />

      <PaceSelector 
        value={values.travelPace} 
        onChange={(v) => updateField("travelPace", v)} 
      />
    </motion.div>
  );
}
