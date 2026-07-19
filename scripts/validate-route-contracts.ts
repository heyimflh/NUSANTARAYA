import { ROUTE_PRESETS, presetToRecommendation } from "../src/data/routes/routePresets";
import { isProvinceId, ProvinceId } from "../src/data/provinces/provinceIds";
import { resolveRouteItinerary } from "../src/lib/routes/itinerary/resolveRouteItinerary";
import { resolveRouteMap } from "../src/lib/routes/map/resolveRouteMap";
import { resolveRouteReadiness } from "../src/lib/routes/readiness/resolveRouteReadiness";
import { saveRouteTransition, DEFAULT_PASSPORT } from "../src/lib/passport/transitions";

function assertContract(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`CONTRACT FAIL: ${message}`);
    process.exit(1);
  }
}

function runContractValidation() {
  console.log("Starting Route Contract Validation...");

  assertContract(!!ROUTE_PRESETS, "Registry preset berhasil dimuat");
  assertContract(ROUTE_PRESETS.length === 10, "Registry berisi 10 preset");

  for (const preset of ROUTE_PRESETS) {
    const rec = presetToRecommendation(preset);
    assertContract(preset.id === rec.id, `Preset ID cocok dengan Recommendation ID: ${preset.id}`);
    
    // Test Resolver
    const res = resolveRouteItinerary(rec);
    assertContract(res.status === "ready", `Itinerary resolver harus ready untuk ${preset.id}`);
    
    const itinerary = res.status === "ready" ? res.itinerary : null;
    assertContract(!!itinerary, `Itinerary object ada untuk ${preset.id}`);
    
    // Recommendation == Itinerary Contracts
    assertContract(rec.id === itinerary!.routeId, `recommendation.id === itinerary.routeId untuk ${preset.id}`);
    assertContract(rec.version === itinerary!.version, `recommendation.version === itinerary.version untuk ${preset.id}`);
    assertContract(rec.durationDays === itinerary!.durationDays, `recommendation.durationDays === itinerary.durationDays untuk ${preset.id}`);
    assertContract(itinerary!.days.length === rec.durationDays, `Jumlah itinerary days cocok dengan durasi untuk ${preset.id}`);

    // Province constraints
    for (const day of itinerary!.days) {
      if (day.provinceIds && day.provinceIds.length > 0) {
        for (const provId of day.provinceIds) {
          assertContract(isProvinceId(provId), `Province ID valid: ${provId} di ${preset.id}`);
          assertContract(rec.provinceIds.includes(provId), `Province itinerary ⊆ recommendation province: ${provId} di ${preset.id}`);
        }
      }
    }

    // Day numbers
    let prevDay = 0;
    for (const day of itinerary!.days) {
      assertContract(day.dayNumber === prevDay + 1, `Day number kontinu: expected ${prevDay + 1}, got ${day.dayNumber} di ${preset.id}`);
      prevDay = day.dayNumber;
      
      // Stop IDs exist and unique inside the day
      if (day.segments) {
        const itemIds = new Set();
        for (const segment of day.segments) {
          assertContract(!itemIds.has(segment.id), `Segment ID unik di dalam hari: ${segment.id} di ${preset.id}`);
          itemIds.add(segment.id);
        }
      }
    }

    // Map checks
    const mapRes = resolveRouteMap(rec, itinerary!);
    assertContract(!!mapRes, `Map resolver berhasil untuk ${preset.id}`);
    assertContract(mapRes!.model.routeId === rec.id, `map.routeId === recommendation.id untuk ${preset.id}`);

    // Readiness checks
    const readiness = resolveRouteReadiness(rec, itinerary, rec.version, itinerary!.version, "id");
    assertContract(readiness.status === "ready", `Readiness status ready untuk ${preset.id}`);
    if (readiness.status === "ready") {
      assertContract(readiness.routeId === rec.id, `readiness.routeId === recommendation.id untuk ${preset.id}`);
    }

    // Passport transition checks
    const passport = saveRouteTransition(DEFAULT_PASSPORT, rec.id, rec.provinceIds);
    assertContract(passport.savedRoutes.includes(rec.id), `savedRoute.routeId === recommendation.id untuk ${preset.id}`);

    // Fallback checks
    if (!rec.provinceIds.includes("jawa-tengah") && !rec.provinceIds.includes("di-yogyakarta") && !rec.provinceIds.includes("jawa-barat") && !rec.provinceIds.includes("jawa-timur") && !rec.provinceIds.includes("dki-jakarta") && !rec.provinceIds.includes("banten")) {
      const isJawaItinerary = itinerary!.routeId === "jawa-budaya-kuliner-5" || itinerary!.routeId === "jawa-bali-heritage-7";
      assertContract(!isJawaItinerary, `Tidak ada fallback itinerary lintas region untuk ${preset.id}`);
    }

    console.log(`o. ${preset.id} valid`);
  }

  console.log("\n10/10 itinerary contracts valid.");
  console.log("Route Contract Validation Complete.");
  process.exit(0);
}

runContractValidation();
