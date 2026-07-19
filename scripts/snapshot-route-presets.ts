import * as fs from "fs";
import { ROUTE_PRESETS } from "../src/data/routes/routePresets";
import * as crypto from "crypto";

function snapshotRoutePresets() {
  if (!ROUTE_PRESETS || !Array.isArray(ROUTE_PRESETS)) {
    console.error("Failed to load ROUTE_PRESETS.");
    process.exit(1);
  }

  if (ROUTE_PRESETS.length !== 10) {
    console.error(`Expected 10 presets, found ${ROUTE_PRESETS.length}. Failing Phase 0.`);
    process.exit(1);
  }

  const sortedPresets = [...ROUTE_PRESETS].sort((a, b) => a.id.localeCompare(b.id));

  const snapshot = sortedPresets.map(preset => ({
    id: preset.id,
    title: preset.title,
    regionId: preset.regionId,
    durationDays: preset.durationDays,
    interests: preset.interests,
    supportedBudgets: preset.supportedBudgets,
    supportedPaces: preset.supportedPaces,
    provinceIds: preset.provinceIds,
    stops: preset.stops,
    transportSummary: preset.transportSummary,
    etiquetteTips: preset.etiquetteTips,
    heroImage: preset.heroImage ?? null,
    collections: preset.collections ?? null,
  }));

  const jsonStr = JSON.stringify(snapshot, null, 2);
  const hash = crypto.createHash("sha256").update(jsonStr).digest("hex");
  console.log(`Snapshot SHA-256: ${hash}`);

  fs.writeFileSync("route-presets.snapshot.json", jsonStr);
}

snapshotRoutePresets();
