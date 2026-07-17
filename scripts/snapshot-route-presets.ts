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
    id: preset.id || null,
    title: preset.title || null,
    regionId: preset.regionId || null,
    duration: preset.duration || null,
    interests: preset.interests || null,
    supportedBudgets: preset.supportedBudgets || null,
    supportedPaces: preset.supportedPaces || null,
    provinceIds: preset.provinceIds || null,
    stops: preset.stops || null,
    transportSummary: preset.transportSummary || null,
    etiquette: preset.etiquette || null,
    media: preset.media || null,
    sourceReferences: preset.sourceReferences || null
  }));

  const jsonStr = JSON.stringify(snapshot, null, 2);
  const hash = crypto.createHash("sha256").update(jsonStr).digest("hex");
  console.log(`Snapshot SHA-256: ${hash}`);

  fs.writeFileSync("route-presets.snapshot.json", jsonStr);
}

snapshotRoutePresets();
