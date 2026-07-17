import fs from "fs";
import path from "path";

const targetFile = path.resolve(process.cwd(), "src/data/routes/routePresets.ts");
let content = fs.readFileSync(targetFile, "utf-8");

// 1. Add import for ROUTE_SCHEMA_VERSION
content = content.replace(
  "RouteStop,\\n} from \"@/types/route-planner\";",
  "RouteStop,\\n  ROUTE_SCHEMA_VERSION,\\n} from \"@/types/route-planner\";"
);

// 2. Update RoutePresetDefinition version type
content = content.replace(
  "version: number;",
  "version: typeof ROUTE_SCHEMA_VERSION;"
);

// 3. Replace version: 1 with version: ROUTE_SCHEMA_VERSION in the presets
content = content.replace(/version: 1,/g, "version: ROUTE_SCHEMA_VERSION,");

const lines = content.split("\\n");
let currentPresetId = "";
let stopIndex = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const idMatch = line.match(/^\s*id:\s*"([^"]+)",/);
  if (idMatch && !line.includes("legacyIds")) {
    currentPresetId = idMatch[1];
    stopIndex = 1;
  }
  
  if (line.match(/^\s*stops:\s*\[/)) {
    let j = i + 1;
    while (j < lines.length && !lines[j].match(/^\s*\],/)) {
      if (lines[j].match(/^\s*\{/)) {
        const stopIdStr = `${currentPresetId}-stop-${stopIndex.toString().padStart(2, "0")}`;
        lines.splice(j + 1, 0, `        id: "${stopIdStr}",`);
        stopIndex++;
        j++;
      }
      j++;
    }
  }
}

content = lines.join("\\n");

// 5. Update presetToRecommendation
const replacement = `export function createRouteRecommendation(
  preset: RoutePresetDefinition,
  matchType: "exact" | "adapted" | "contextual" | "fallback" = "exact"
): RouteRecommendation {
  return {
    id: preset.id,
    version: ROUTE_SCHEMA_VERSION,
    matchType,
    title: preset.title,
    summary: preset.summary,
    reason: preset.reason,
    durationDays: preset.durationDays,
    regionId: preset.regionId,
    provinceIds: preset.provinceIds,
    stops: preset.stops,
    interests: [...preset.interests],
    budgetLabel: preset.budgetLabel,
    paceLabel: preset.paceLabel,
    transportSummary: preset.transportSummary,
    etiquetteTips: preset.etiquetteTips,
  };
}

export function presetToRecommendation(`;

content = content.replace(
  "export function presetToRecommendation(",
  replacement
);

fs.writeFileSync(targetFile, content);
console.log("Updated routePresets.ts");

