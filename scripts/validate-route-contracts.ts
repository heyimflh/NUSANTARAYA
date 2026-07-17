import { ROUTE_PRESETS, presetToRecommendation } from "../src/data/routes/routePresets";
import { isProvinceId, ProvinceId } from "../src/data/provinces/provinceIds";
import { ITINERARIES_BY_ROUTE_ID } from "../src/data/routes/itineraries";
import { resolveActiveRouteWorkspace } from "../src/lib/routes/workspace/resolveActiveRouteWorkspace";
import { ROUTE_SECTION_IDS, RouteSectionKey } from "../src/lib/routes/routeSections";
import { DEFAULT_PASSPORT } from "../src/lib/passport/transitions";
import { RoutePlannerFormValues } from "../src/types/route-planner";

function assertContract(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`CONTRACT FAIL: ${message}`);
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

function runContractValidation() {
  console.log("Validating Route Section Anchors...");
  const keys = Object.keys(ROUTE_SECTION_IDS);
  assertContract(keys.length === 7, "Registry mempunyai tepat tujuh key");
  const values = Object.values(ROUTE_SECTION_IDS);
  const uniqueValues = new Set(values);
  assertContract(uniqueValues.size === 7, "0 duplicate route section IDs");
  values.forEach(v => assertContract(!!v, "Seluruh value non-empty"));
  console.log("7/7 route section anchors valid");

  console.log("Starting Route Contract Validation...");

  assertContract(!!ROUTE_PRESETS, "Registry preset berhasil dimuat");
  assertContract(ROUTE_PRESETS.length === 10, "Registry berisi 10 preset");
  assertContract(Object.keys(ITINERARIES_BY_ROUTE_ID).length === 10, "Registry itinerary berisi 10 entry");

  let validItineraries = 0;

  for (const preset of ROUTE_PRESETS) {
    const rec = presetToRecommendation(preset);
    
    // Test Workspace Resolver
    const workspace = resolveActiveRouteWorkspace(
      rec,
      mockValues,
      DEFAULT_PASSPORT,
      "preset",
      "id"
    );
    assertContract(workspace.status === "ready", `Workspace resolver harus ready untuk ${preset.id}. Status: ${workspace.status}`);
    
    const itinerary = workspace.itinerary;
    assertContract(!!itinerary, "Itinerary object ada");
    
    // Itinerary checks
    assertContract(itinerary!.routeId === preset.id, `Registry key cocok dengan itinerary.routeId untuk ${preset.id}`);
    assertContract(itinerary!.version === preset.version, "Version cocok");
    assertContract(itinerary!.durationDays === preset.durationDays, "Duration cocok");
    assertContract(itinerary!.days.length === preset.durationDays, "Jumlah hari cocok");

    // Route Map Checks
    const mapModel = workspace.mapModel;
    assertContract(!!mapModel, "Map resolver berhasil");
    assertContract(mapModel!.routeId === preset.id, "Map view model memakai route yang sama");
    
    validItineraries++;
    console.log(`o. ${preset.id}`);
  }

  assertContract(validItineraries === 10, "10/10 itinerary contracts valid");
  console.log("\n10/10 itinerary contracts valid.");
  console.log("Route Contract Validation Complete.");
  process.exit(0);
}

runContractValidation();




