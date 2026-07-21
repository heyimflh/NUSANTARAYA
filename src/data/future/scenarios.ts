import { FutureScenario } from "@/types/future";

export const FUTURE_SCENARIO_PRESETS: FutureScenario[] = [
  {
    id: "scenario-ikn-2030-citizen",
    version: "1.0",
    provinceId: "kalimantan-timur",
    regionId: "kalimantan",
    priorityThemeIds: ["civic-life", "regenerative-environment"],
    perspective: "citizen",
    horizon: "2030",
    constraintIds: ["rapid-population-growth"],
    signalIds: ["fs-ikn-forest-city", "fs-smart-grid-ikn"],
    tradeOffIds: ["ecological-footprint"],
    generatedBy: "local-rule-engine",
    createdAt: "2024-05-15T10:00:00Z"
  },
  {
    id: "scenario-bali-2045-traveler",
    version: "1.0",
    provinceId: "bali",
    regionId: "bali-nusa-tenggara",
    priorityThemeIds: ["connected-mobility", "regenerative-environment"],
    perspective: "traveler",
    horizon: "2045",
    constraintIds: ["overtourism"],
    signalIds: ["fs-bali-electric-mobility"],
    tradeOffIds: ["ecological-footprint"],
    generatedBy: "local-rule-engine",
    createdAt: "2024-05-15T11:00:00Z"
  },
  {
    id: "scenario-maluku-2030-maker",
    version: "1.0",
    provinceId: "maluku",
    regionId: "maluku",
    priorityThemeIds: ["creative-economy", "food-ocean-resilience"],
    perspective: "maker",
    horizon: "2030",
    constraintIds: ["supply-chain-inefficiency"],
    signalIds: ["fs-maluku-spice-traceability"],
    tradeOffIds: ["digital-divide"],
    generatedBy: "local-rule-engine",
    createdAt: "2024-05-15T12:00:00Z"
  }
];
