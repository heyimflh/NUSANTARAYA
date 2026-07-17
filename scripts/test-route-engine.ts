import { ROUTE_PRESETS, presetToRecommendation } from "../src/data/routes/routePresets";
import { matchRoutePreset } from "../src/lib/routes/matchRoutePreset";
import { DEFAULT_FORM_VALUES, type RoutePlannerFormValues } from "../src/types/route-planner";

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
    assert(ROUTE_PRESETS !== undefined, "Registry berhasil dimuat.");
    assert(ROUTE_PRESETS.length === 10, "Jumlah preset tepat 10.");

    const ids = new Set<string>();
    for (const preset of ROUTE_PRESETS) {
      assert(preset.id !== undefined && preset.id !== "", `Preset ${preset.title} has a valid non-empty ID`);
      assert(!ids.has(preset.id), `ID ${preset.id} is unique`);
      ids.add(preset.id);
    }
    
    // Matcher test
    const input: RoutePlannerFormValues = {
      ...DEFAULT_FORM_VALUES,
      durationDays: 5,
      destinationRegionId: "bali-nusa",
      originProvinceId: null,
      interests: ["alam", "budaya"],
      budgetLevel: "menengah",
      travelPace: "seimbang"
    };

    let result;
    try {
      result = matchRoutePreset(input);
      assert(true, "Matcher tidak crash untuk input valid");
    } catch (e) {
      assert(false, "Matcher crash untuk input valid");
    }

    if (result) {
      assert(result.id !== undefined, "Matcher menghasilkan recommendation.");
      assert(ids.has(result.id), "Recommendation ID berasal dari registry.");
      
      const result2 = matchRoutePreset(input);
      assert(result.id === result2.id, "Input yang sama menghasilkan recommendation ID yang sama.");
      assert(result.durationDays === input.durationDays, "Duration hasil sama dengan input.");
      
      assert(input.durationDays === 5, "Result tidak memutasi input.");
    } else {
      assert(false, "Matcher gagal mengembalikan rekomendasi.");
    }
    
  } catch (err) {
    console.error("Error in route engine test:", err);
    process.exit(1);
  }
}

run();
