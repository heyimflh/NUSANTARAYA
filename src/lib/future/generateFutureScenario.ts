import { FutureScenario, FutureThemeId } from "@/types/future";
import { FUTURE_SIGNALS } from "@/data/future/signals";
import { RegionId } from "@/types/region";


export type ScenarioInput = {
  perspective: "citizen" | "traveler" | "learner" | "maker";
  horizon: "2030" | "2045" | "next-decade";
  regionId?: RegionId;
  provinceId?: string;
};

// Simple deterministic string hasher for ID generation
function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export function generateFutureScenario(input: ScenarioInput): FutureScenario {
  // 1. Filter relevant signals
  let baseSignals = FUTURE_SIGNALS.filter(s => s.status === "published");
  
  if (input.provinceId) {
    baseSignals = baseSignals.filter(s => s.provinceIds.includes(input.provinceId!));
  } else if (input.regionId) {
    baseSignals = baseSignals.filter(s => s.regionIds.includes(input.regionId!));
  }

  // 2. Score and pick themes based on perspective
  const themeScores: Record<string, number> = {};
  for (const sig of baseSignals) {
    for (const theme of sig.themeIds) {
      themeScores[theme] = (themeScores[theme] || 0) + 1;
    }
  }

  // Assign bias based on perspective
  const perspectiveBias: Record<string, FutureThemeId[]> = {
    citizen: ["civic-life", "digital-villages"],
    traveler: ["living-heritage", "connected-mobility"],
    learner: ["living-heritage", "creative-economy"],
    maker: ["creative-economy", "regenerative-environment"],
  };

  const biases = perspectiveBias[input.perspective] || [];
  biases.forEach(b => {
    if (themeScores[b]) themeScores[b] += 5; // boost score
  });

  const sortedThemes = Object.entries(themeScores)
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0] as FutureThemeId);

  const priorityThemeIds = sortedThemes.slice(0, 3);
  if (priorityThemeIds.length === 0) {
    priorityThemeIds.push("civic-life");
  }

  // 3. Select Signals that match top themes
  const selectedSignals = baseSignals
    .filter(s => s.themeIds.some(t => priorityThemeIds.includes(t)))
    // Determinisic sort
    .sort((a, b) => a.id.localeCompare(b.id))
    .slice(0, 4);

  const signalIds = selectedSignals.map(s => s.localeContent.id.title);
  
  // 4. Collect Trade-offs
  const tradeOffSet = new Set<string>();
  selectedSignals.forEach(s => {
    s.tradeOffIds.forEach(t => tradeOffSet.add(t));
  });
  const tradeOffIds = Array.from(tradeOffSet).slice(0, 3);
  
  // Add horizon-specific constraints
  if (input.horizon === "2030") {
    tradeOffIds.push("Masa transisi adopsi teknologi masih menimbulkan resistensi kultural");
  } else if (input.horizon === "2045") {
    tradeOffIds.push("Ketergantungan infrastruktur terpusat vs otonomi lokal");
  }

  // 5. Build Scenario ID deterministically
  const seedString = `${input.perspective}-${input.horizon}-${input.regionId || 'all'}-${input.provinceId || 'all'}`;
  const scenarioId = `scenario-${hashString(seedString)}`;

  return {
    id: scenarioId,
    version: "1.0.0",
    provinceId: input.provinceId,
    regionId: input.regionId,
    priorityThemeIds,
    perspective: input.perspective,
    horizon: input.horizon,
    constraintIds: ["Infrastruktur Berkelanjutan", "Pendanaan Lokal"],
    signalIds,
    tradeOffIds,
    generatedBy: "local-rule-engine",
    createdAt: new Date().toISOString(),
  };
}
