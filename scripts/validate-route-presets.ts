import { ROUTE_PRESETS } from "../src/data/routes/routePresets";
import { ROUTE_PLANNER_REGION_IDS } from "../src/types/route-planner";

function validatePresets() {
  console.log("Validating 10 Presets...");

  const errors: string[] = [];

  // Check 10 published presets
  const published = ROUTE_PRESETS.filter((p) => p.status === "published");
  if (published.length !== 10) {
    errors.push(`Expected 10 published presets, found ${published.length}`);
  }

  const ids = new Set<string>();

  ROUTE_PRESETS.forEach((preset) => {
    // Unique ID
    if (ids.has(preset.id)) {
      errors.push(`Duplicate ID found: ${preset.id}`);
    }
    ids.add(preset.id);

    // Regions validation
    if (!ROUTE_PLANNER_REGION_IDS.includes(preset.primaryRegionId)) {
      errors.push(`Invalid primaryRegionId ${preset.primaryRegionId} in preset ${preset.id}`);
    }
    if (!preset.regionIds || preset.regionIds.length === 0) {
      errors.push(`regionIds is empty in preset ${preset.id}`);
    }
    preset.regionIds.forEach((rid) => {
      if (!ROUTE_PLANNER_REGION_IDS.includes(rid)) {
        errors.push(`Invalid regionId ${rid} in preset ${preset.id}`);
      }
    });

    // Check stops mapping
    if (preset.stops.length === 0) {
      errors.push(`Preset ${preset.id} has no stops.`);
    }

    // Check legacy ids
    if (!preset.legacyIds || preset.legacyIds.length === 0) {
      console.warn(`[WARN] Preset ${preset.id} has no legacy IDs. (This might break existing bookmarks)`);
    }
  });

  if (errors.length > 0) {
    console.error("❌ Route Presets Validation Failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log("✅ Route Presets Validation Passed.");
}

validatePresets();
