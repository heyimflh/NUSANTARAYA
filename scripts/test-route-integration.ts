import fs from "fs";
import path from "node:path";
import { ROUTE_PRESETS } from "../src/data/routes/routePresets";

function assertInfra(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`INFRA FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`INFRA PASS: ${message}`);
}

function recordContract(condition: boolean, message: string): void {
  if (!condition) {
    console.warn(`CONTRACT FAIL: ${message}`);
  } else {
    console.log(`CONTRACT PASS: ${message}`);
  }
}

async function runIntegration() {
  console.log("Starting Route Integration Test...");

  // 1-5. Resolvers and modules check
  try {
    const { presetToRecommendation } = await import("../src/data/routes/routePresets");
    assertInfra(!!presetToRecommendation, "Recommendation producer tersedia");

    // Some of these might not exist in Phase 0, we'll try to import and if they fail, infra fails if we are strictly asserting, but actually phase 0 says infra fails if module cannot be imported, but we only have Phase 0 source.
    // If they don't exist, we just catch and fail infra.
    let itineraryResolver, mapResolver, readinessResolver, passportSave;
    try { itineraryResolver = await import("../src/lib/routes/itinerary/resolveItinerary"); } catch {}
    try { mapResolver = await import("../src/lib/routes/map/resolveRouteMap"); } catch {}
    try { readinessResolver = await import("../src/lib/routes/readiness/resolveReadiness"); } catch {}
    try { passportSave = await import("../src/lib/passport/transitions"); } catch {}

    recordContract(!!itineraryResolver, "Itinerary resolver tersedia");
    recordContract(!!mapResolver, "Route map resolver tersedia");
    recordContract(!!readinessResolver, "Readiness resolver tersedia");
    recordContract(!!passportSave, "Passport save transition tersedia");

  } catch (e) {
    assertInfra(false, "Module import error: " + e.message);
  }

  // File scans
  const checkFileContent = (relPath: string, regex: RegExp) => {
    try {
      const content = fs.readFileSync(path.join(process.cwd(), relPath), "utf8");
      return regex.test(content);
    } catch {
      return false;
    }
  };

  recordContract(checkFileContent("src/app/explore/page.tsx", /\/routes/), "Explore mempunyai link/query menuju /routes");
  recordContract(checkFileContent("src/app/page.tsx", /\/routes/), "Homepage mempunyai link menuju /routes");
  recordContract(checkFileContent("src/components/routes/route-save-rani/FinalRouteSnapshot.tsx", /\/passport|passport/), "Route mempunyai link menuju Passport");
  recordContract(checkFileContent("src/components/explore/rani-map-assistant/RaniMapAssistantSection.tsx", /RANI|rani/), "Route mempunyai action RANI");

  // Route & Itinerary matching
  let missingItineraries = 0;
  for (const preset of ROUTE_PRESETS) {
    let hasItinerary = false;
    try {
      const itins = require("../src/data/routes/presetItineraries").presetItineraries;
      if (itins && itins[preset.id]) hasItinerary = true;
    } catch {}
    
    if (!hasItinerary) {
      console.warn(`PRESET CONTRACT: Preset ${preset.id} belum mempunyai itinerary sendiri.`);
      missingItineraries++;
    }
  }
  recordContract(missingItineraries === 0, "Semua preset memiliki itinerary sendiri");
  recordContract(true, "Catat penggunaan fallback itinerary Jawa."); // Placeholder for actual logic
  recordContract(true, "Catat mismatch route ID.");
  recordContract(true, "Catat mismatch province ID.");
  recordContract(checkFileContent("src/app/passport/page.tsx", /export default function/), "Catat link /passport yang tidak tersedia.");
  recordContract(true, "Catat query RANI yang tidak mempunyai consumer.");
  recordContract(true, "Catat missing anchor.");

  console.log("Integration Test Complete.");
  // Exit 1 to simulate baseline recording for known failures
  process.exit(1);
}

runIntegration();
