import fs from "fs";
import path from "node:path";
import { ROUTE_PRESETS, presetToRecommendation } from "../src/data/routes/routePresets";
import { resolveActiveRouteWorkspace } from "../src/lib/routes/workspace/resolveActiveRouteWorkspace";
import { getRouteSectionHref } from "../src/lib/routes/routeSections";
import { getRouteScrollBehavior } from "../src/lib/routes/navigateToRouteSection";
import { DEFAULT_PASSPORT } from "../src/lib/passport/transitions";
import { RoutePlannerFormValues } from "../src/types/route-planner";

function assertIntegration(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`INTEGRATION FAIL: ${message}`);
    process.exit(1);
  }
}

const mockValues: RoutePlannerFormValues = {
  originProvinceId: "jawa-barat",
  durationDays: 5,
  destinationRegionId: "jawa",
  interests: ["budaya"],
  budgetLevel: "menengah", travelPace: "santai",
};

async function runIntegration() {
  console.log("Testing Navigation Helpers...");
  assertIntegration(getRouteSectionHref("planner") === "#route-atelier", "planner href correct");
  assertIntegration(getRouteSectionHref("presets") === "#preset-routes", "presets href correct");
  assertIntegration(getRouteSectionHref("result") === "#route-recommendation-result", "result href correct");
  assertIntegration(getRouteSectionHref("itinerary") === "#day-by-day-itinerary", "itinerary href correct");
  assertIntegration(getRouteSectionHref("map") === "#route-map-transport-summary", "map href correct");
  assertIntegration(getRouteSectionHref("readiness") === "#route-readiness", "readiness href correct");
  assertIntegration(getRouteSectionHref("saveRani") === "#route-save-rani-section", "saveRani href correct");
  assertIntegration(getRouteScrollBehavior(true) === "auto", "reduced motion produces auto");
  assertIntegration(getRouteScrollBehavior(false) === "smooth", "normal motion produces smooth");

  console.log("Starting Route Integration Test (Phase 5)...");

  for (const preset of ROUTE_PRESETS) {
    // 1. Match/preset menghasilkan recommendation
    const rec = presetToRecommendation(preset);
    assertIntegration(!!rec, `Recommendation berhasil dibuat untuk ${preset.id}`);

    // 2. Resolver menghasilkan workspace ready
    const workspace = resolveActiveRouteWorkspace(
      rec,
      mockValues,
      DEFAULT_PASSPORT,
      "preset",
      "id"
    );
    assertIntegration(workspace.status === "ready", `Workspace ready untuk ${preset.id}. Errors: ${JSON.stringify(workspace.errors)}`);
    assertIntegration(!!workspace.itinerary, "Itinerary valid didapatkan dari workspace");

    // 3. Recommendation ID sama dengan activeRouteKey prefix
    assertIntegration(workspace.activeRouteKey?.startsWith(rec.id) || false, `ID cocok untuk ${preset.id}`);

    // 4. Recommendation version sama dengan itinerary version
    assertIntegration(rec.version === workspace.itinerary!.version, `Version cocok untuk ${preset.id}`);

    // 5. Map menggunakan route ID yang sama
    const mapModel = workspace.mapModel;
    assertIntegration(!!mapModel && mapModel.routeId === rec.id, `Map ID cocok untuk ${preset.id}`);

    // 6. Map menggunakan stop itinerary yang sesuai
    const mapStops = mapModel!.stops.map((s: any) => s.id);
    const itineraryStops = Array.from(new Set(workspace.itinerary!.days.map(d => d.stopId).filter(Boolean)));
    assertIntegration(mapStops.length === itineraryStops.length, `Jumlah map stops sesuai dengan itinerary untuk ${preset.id}`);

    // 7. Passport snapshot
    assertIntegration(workspace.canSavePassport, `Passport can save route ${rec.id}`);
    assertIntegration(workspace.saveSnapshot?.routeId === rec.id, `Passport menyimpan rute ${rec.id} yang benar`);

    console.log(`o. Integration ${preset.id} passed.`);
  }

  console.log("Route Integration Test Complete. PASS");
  process.exit(0);
}

runIntegration();





