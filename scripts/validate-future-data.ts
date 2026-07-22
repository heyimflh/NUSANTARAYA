import { FUTURE_SIGNALS } from "../src/data/future/signals";
import { FUTURE_THEMES } from "../src/data/future/themes";
import { FUTURE_SOURCES } from "../src/data/future/sourceRegistry";
import { regions } from "../src/data/regions/regions";
import { provinceMapData } from "../src/data/provinces/provinces";

export function validateFutureData() {
  let errors = 0;
  
  const themeIds = new Set(FUTURE_THEMES.map(t => t.id));
  const regionIds = new Set(regions.map(r => r.id));
  const provinceIds = new Set(provinceMapData.map(p => p.id));
  const sourceIds = new Set(Object.keys(FUTURE_SOURCES));

  console.log(`Validating ${FUTURE_SIGNALS.length} Future Signals...`);

  FUTURE_SIGNALS.forEach(signal => {
    // Check Themes
    signal.themeIds.forEach(themeId => {
      if (!themeIds.has(themeId as any)) {
        console.error(`❌ Signal ${signal.id}: Invalid themeId '${themeId}'`);
        errors++;
      }
    });

    // Check Regions
    signal.regionIds.forEach(regionId => {
      if (!regionIds.has(regionId as any)) {
        console.error(`❌ Signal ${signal.id}: Invalid regionId '${regionId}'`);
        errors++;
      }
    });

    // Check Provinces
    signal.provinceIds.forEach(provinceId => {
      if (!provinceIds.has(provinceId as any)) {
        console.error(`❌ Signal ${signal.id}: Invalid provinceId '${provinceId}'`);
        errors++;
      }
    });

    // Check Sources
    signal.sourceRefs.forEach(sourceId => {
      if (!sourceIds.has(sourceId)) {
        console.error(`❌ Signal ${signal.id}: Invalid sourceId '${sourceId}'`);
        errors++;
      }
    });
  });

  if (errors > 0) {
    console.error(`\n💥 Validation failed with ${errors} errors.`);
    process.exit(1);
  } else {
    console.log("\n✅ All future data is valid.");
  }
}

// Allow running from CLI directly
if (require.main === module) {
  validateFutureData();
}
