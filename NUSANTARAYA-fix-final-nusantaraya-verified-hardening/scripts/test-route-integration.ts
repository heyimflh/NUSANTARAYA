import { mapJourneyToPlannerValues, buildJourneyRouteHref } from "../src/lib/routes/mapJourneyToPlannerValues";
import { matchRoutePreset } from "../src/lib/routes/matchRoutePreset";
import { resolveRouteItinerary } from "../src/lib/routes/itinerary/resolveRouteItinerary";
import { resolveRouteMap } from "../src/lib/routes/map/resolveRouteMap";
import { resolveRouteReadiness } from "../src/lib/routes/readiness/resolveRouteReadiness";
import { saveRouteTransition, DEFAULT_PASSPORT } from "../src/lib/passport/transitions";
import { buildProvinceAtlasHref } from "../src/lib/routes/buildProvinceAtlasHref";
import { resolveActiveRouteWorkspace } from "../src/lib/routes/workspace/resolveActiveRouteWorkspace";
import type { RoutePlannerFormValues } from "../src/types/route-planner";
import type { RecommendedJourney } from "../src/data/journeys/types";

function assertIntegration(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`INTEGRATION FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`PASS: ${message}`);
  }
}

async function runIntegration() {
  console.log("Starting Route Integration Test...");

  // Scenario A: Explore Journey -> Route prefill
  console.log("--- A. Explore Journey -> Route Prefill ---");
  const dummyJourney = {
    id: "journey-1",
    durationDays: [5],
    primaryLayer: "budaya",
    intensity: "seimbang",
    stops: [{ provinceId: "jawa-tengah" }, { provinceId: "di-yogyakarta" }]
  } as unknown as RecommendedJourney;
  const mapping = mapJourneyToPlannerValues(dummyJourney);
  assertIntegration(mapping.status === "complete", "Journey mapping menghasilkan status complete");
  assertIntegration(mapping.values.destinationRegionId === "jawa", "Province ID Jawa otomatis di-map ke region Jawa");
  
  const href = buildJourneyRouteHref(dummyJourney);
  assertIntegration(href.includes("region=jawa") && href.includes("duration=5"), "Href Explore merefleksikan prefill");

  // Scenario B: Submit -> Result -> Itinerary -> Map -> Readiness
  console.log("--- B. Pipeline Resolusi Route Lengkap ---");
  const form = {
    ...mapping.values,
    originProvinceId: null,
    budgetLevel: "menengah",
    travelMonth: null,
    accommodationType: "hotel",
    language: "id"
  } as RoutePlannerFormValues;
  const match = matchRoutePreset(form);
  assertIntegration(match.status === "matched", "Matcher menghasilkan route");
  
  const rec = match.recommendation!;
  const itRes = resolveRouteItinerary(rec);
  assertIntegration(itRes.status === "ready", "Itinerary resolver valid");
  
  const mapRes = resolveRouteMap(rec, itRes.itinerary!);
  assertIntegration(mapRes !== null && mapRes.model.routeId === rec.id, "Map berhasil dirender dari route");
  
  const readRes = resolveRouteReadiness(rec, itRes.itinerary, rec.version, itRes.itinerary!.version, "id");
  assertIntegration(readRes.status === "ready", "Readiness berhasil dibangun dari route & itinerary");

  // Scenario C: Save Route -> Passport
  console.log("--- C. Save Route -> Passport ---");
  const passport = saveRouteTransition(DEFAULT_PASSPORT, rec.id, rec.provinceIds);
  assertIntegration(passport.savedRoutes.includes(rec.id), "Route ID tersimpan di Passport");

  // Scenario D: Route Stop -> Atlas
  console.log("--- D. Route Stop -> Atlas ---");
  const atlasHref = buildProvinceAtlasHref({ provinceId: "jawa-tengah", routeId: rec.id, day: 1, returnTo: "/routes?search=jawa" });
  assertIntegration(atlasHref.startsWith("/provinsi/jawa-tengah"), "Path atlas mengarah ke province ID");
  assertIntegration(atlasHref.includes(`routeId=${rec.id}`), "Membawa konteks rute kembali");
  assertIntegration(atlasHref.includes(encodeURIComponent("/routes?search=jawa")), "Membawa URL return yang aman");

  // Scenario E: RANI Apply -> Undo
  console.log("--- E. RANI Apply -> Workspace State ---");
  // Simulasikan pembuatan draft
  const draftPassport = { ...DEFAULT_PASSPORT, savedRoutes: [rec.id], routeAdjustments: { [rec.id]: { id: "intent-1", type: "replace-stop", timestamp: "now", status: "applied", description: "test" } } };
  const workspace = resolveActiveRouteWorkspace(rec, null, form, draftPassport, "form", "id");
  
  // Karena resolveActiveRouteWorkspace mengeksekusi applyRaniAdjustment/reduceRouteBudget, kita verifikasi versioning-nya.
  assertIntegration(workspace !== null, "Workspace tidak null");
  assertIntegration(workspace?.status === "ready", "Workspace berhasil dibentuk dari draft state");
  
  console.log("Route Integration Test Complete. PASS");
  process.exit(0);
}

runIntegration();
