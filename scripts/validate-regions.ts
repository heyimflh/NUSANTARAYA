import { regions } from "../src/data/regions/regions";
import { provinceMapData } from "../src/data/provinces/provinces";
import fs from "fs";
import path from "path";

const EXPECTED_REGION_COUNT = 7;
const EXPECTED_PROVINCE_COUNT = 38;

let hasError = false;

function error(msg: string) {
  console.error(`❌ [ERROR] ${msg}`);
  hasError = true;
}

function success(msg: string) {
  console.log(`✅ [OK] ${msg}`);
}

console.log("Starting Region Validation...");

// 1. Tepat tujuh region
if (regions.length !== EXPECTED_REGION_COUNT) {
  error(`Expected ${EXPECTED_REGION_COUNT} regions, found ${regions.length}`);
} else {
  success(`Found exactly ${EXPECTED_REGION_COUNT} regions.`);
}

// 2. Region ID Unik
const regionIds = new Set();
for (const r of regions) {
  if (regionIds.has(r.id)) {
    error(`Duplicate region ID found: ${r.id}`);
  }
  regionIds.add(r.id);
}

// 3. Province Coverage 38/38, 4. Province ID valid, 5. No duplicates, 6. No missing
const allMappedProvinceIds = new Set<string>();
let mappedCount = 0;

for (const r of regions) {
  for (const pid of r.provinceIds) {
    if (allMappedProvinceIds.has(pid)) {
      error(`Province ID ${pid} is mapped multiple times!`);
    }
    allMappedProvinceIds.add(pid);
    mappedCount++;
    
    // Check if province exists in provinceMapData
    const p = provinceMapData.find(prov => prov.id === pid);
    if (!p) {
      error(`Province ID ${pid} in region ${r.id} is invalid (not found in provinceMapData).`);
    } else {
      // 7. Flagship in correct region
      if (r.flagshipProvinceIds.includes(pid)) {
        if (!p.isFlagship) {
          error(`Province ${pid} is set as flagship in region ${r.id} but isFlagship is false in provinceMapData.`);
        }
      }
    }
  }

  // 8. Signals tepat tiga
  if (r.signals.length !== 3) {
    error(`Region ${r.id} has ${r.signals.length} signals. Expected exactly 3.`);
  }

  // 9. Accent valid
  if (!r.accentColor || !r.accentColor.startsWith("#")) {
    error(`Region ${r.id} has invalid accentColor: ${r.accentColor}`);
  }

  // 10. Asset tersedia
  if (r.visualAsset) {
    const assetPath = path.join(process.cwd(), "public", r.visualAsset);
    if (!fs.existsSync(assetPath)) {
      error(`Visual asset not found for region ${r.id}: ${r.visualAsset}`);
    }
  }

  // 11. Alt text tidak kosong
  if (!r.visualAlt || r.visualAlt.trim() === "") {
    error(`Region ${r.id} has empty visualAlt.`);
  }

  // 14. Province count
  if (r.provinceIds.length === 0) {
    error(`Region ${r.id} has 0 provinces.`);
  }
}

if (mappedCount !== EXPECTED_PROVINCE_COUNT) {
  error(`Mapped provinces count is ${mappedCount}, expected ${EXPECTED_PROVINCE_COUNT}`);
} else {
  success(`Successfully mapped ${EXPECTED_PROVINCE_COUNT}/${EXPECTED_PROVINCE_COUNT} provinces.`);
}

// Check if any province in provinceMapData is missing from regions
for (const p of provinceMapData) {
  if (!allMappedProvinceIds.has(p.id)) {
    error(`Province ${p.id} from provinceMapData is missing from region mapping!`);
  }
}

if (hasError) {
  console.error("❌ Validation Failed. Please fix the errors above.");
  process.exit(1);
} else {
  console.log("🎉 All Region validations passed!");
}
