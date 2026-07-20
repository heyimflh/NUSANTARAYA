import { ROUTE_PRESETS, presetToRecommendation } from "../src/data/routes/routePresets";
import { matchRoutePreset } from "../src/lib/routes/matchRoutePreset";
import { DEFAULT_FORM_VALUES, type RoutePlannerFormValues } from "../src/types/route-planner";
import { validateFormValues } from "../src/lib/routes/routePlannerSchema";
import { reduceRouteBudget } from "../src/lib/routes/save-rani/pureAdjustments";
import { resolveRouteItinerary } from "../src/lib/routes/itinerary/resolveRouteItinerary";
import { resolveRouteReadiness } from "../src/lib/routes/readiness/resolveRouteReadiness";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`PASS: ${message}`);
  }
}

async function run() {
  try {
    console.log("--- 1. Schema & Sanitasi ---");
    const validForm: RoutePlannerFormValues = {
      ...DEFAULT_FORM_VALUES,
      durationDays: 5,
      destinationRegionId: "jawa",
      originProvinceId: "jawa-tengah",
      interests: ["alam"],
      budgetLevel: "menengah",
      travelPace: "seimbang"
    };
    const validated = validateFormValues(validForm);
    assert(validated.length === 0, "Valid input diloloskan schema.");
    
    const invalidForm = {
      ...validForm,
      originProvinceId: "fake-province-id",
      hackerField: "malicious"
    } as unknown as RoutePlannerFormValues;
    const validatedInvalid = validateFormValues(invalidForm);
    assert(validatedInvalid.length > 0, "Unknown province ID ditolak.");

    console.log("--- 2. Matcher Scoring ---");
    const match1 = matchRoutePreset(validForm);
    assert(match1.recommendation !== null, "Menghasilkan rekomendasi untuk input valid.");
    
    // Determinism
    const match1_duplicate = matchRoutePreset(validForm);
    assert(match1.recommendation?.id === match1_duplicate.recommendation?.id, "Input sama menghasilkan skor deterministik yang sama.");
    
    // Hard constraint: region
    const sumatraInput: RoutePlannerFormValues = { ...validForm, destinationRegionId: "sumatera" };
    const matchSumatra = matchRoutePreset(sumatraInput);
    if (matchSumatra.recommendation) {
      assert(matchSumatra.recommendation.provinceIds.some(p => p.startsWith("sumatera") || p === "aceh"), "Region merupakan hard constraint (memilih preset Sumatra).");
    }

    console.log("--- 3. Duration Adaptation ---");
    const matchDuration3 = matchRoutePreset({ ...validForm, durationDays: 3 });
    const matchDuration4 = matchRoutePreset({ ...validForm, durationDays: 4 as 3 | 5 | 7 });
    assert(matchDuration3.status === "matched", "Durasi 3 hari didukung secara resmi");
    assert(matchDuration4.metadata.matchType === "fallback-preset", "Durasi 4 hari tidak didukung (menghasilkan status jujur)");

    console.log("--- 4. Itinerary Resolver ---");
    const preset = presetToRecommendation(ROUTE_PRESETS[0]);
    const itRes = resolveRouteItinerary(preset);
    assert(itRes.status === "ready", "Itinerary resolver valid -> ready");
    
    const fakeRec = { ...preset, id: "jawa-budaya-kuliner-5", version: "9.9.9" };
    const itResFake = resolveRouteItinerary(fakeRec);
    assert(itResFake.status === "invalid", "Route/version mismatch ditolak");

    console.log("--- 5. Route Adjustment (Pure RANI) ---");
    const adjusted = reduceRouteBudget(preset, itRes.itinerary!);
    assert(adjusted !== null && adjusted.proposedRoute.version !== preset.version, "RANI reduceRouteBudget menghasilkan state adjusted");
    
    

    console.log("--- 6. Readiness Resolver ---");
    if (itRes.status === "ready") {
      const read = resolveRouteReadiness(preset, itRes.itinerary, preset.version, itRes.itinerary.version, "id");
      assert(read.status === "ready", "Readiness untuk valid itinerary -> ready");
    }

  } catch (err) {
    console.error("Error in route engine test:", err);
    process.exit(1);
  }
}

run();
