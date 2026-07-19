import fs from "fs";
import path from "path";
import { ROUTE_PRESETS } from "../src/data/routes/routePresets";
import provinces from "../src/data/provinces.json";

function validateAssets() {
  const publicDir = path.join(process.cwd(), "public");
  let hasErrors = false;

  console.log("Validating local assets...");

  const checkAsset = (assetPath: string, sourceName: string, context: string) => {
    if (!assetPath) return;
    if (assetPath.startsWith("http://") || assetPath.startsWith("https://") || assetPath.startsWith("data:") || assetPath.startsWith("blob:")) {
      return;
    }

    // Remove query params and hashes
    let cleanPath = assetPath.split("?")[0].split("#")[0];

    // Decode URI component (e.g. %20 -> space)
    try {
      cleanPath = decodeURIComponent(cleanPath);
    } catch (e) {
      // Ignore
    }

    // Check if the path points to the public directory
    let absolutePath = "";
    if (cleanPath.startsWith("/")) {
      absolutePath = path.join(publicDir, cleanPath);
    } else {
      absolutePath = path.join(publicDir, cleanPath);
    }

    if (!fs.existsSync(absolutePath)) {
      console.error(`\n[MISSING ASSET] ${cleanPath}`);
      console.error(`  -> Source: ${sourceName}`);
      console.error(`  -> Context: ${context}`);
      hasErrors = true;
    }
  };

  // 1. Check province data
  console.log("Checking provinces.json...");
  provinces.forEach(province => {
    if (province.heroImage) {
      checkAsset(province.heroImage, "provinces.json", `Province ID: ${province.id} (heroImage)`);
    }
    if ((province as any).soundscape) {
      checkAsset((province as any).soundscape, "provinces.json", `Province ID: ${province.id} (soundscape)`);
    }
  });

  // 2. Check route presets
  console.log("Checking route presets...");
  ROUTE_PRESETS.forEach(preset => {
    if ((preset as any).heroImage?.url) {
      checkAsset((preset as any).heroImage.url, "routePresets.ts", `Preset ID: ${preset.id} (heroImage)`);
    }
  });

  // We could also check routeMapData.ts or other canonical data if they have image references.
  // The current focus is just to have a simple validator for canonical data.

  if (hasErrors) {
    console.error("\nAsset validation failed! Some local assets are missing.");
    process.exit(1);
  } else {
    console.log("\nAll local assets validated successfully!");
    process.exit(0);
  }
}

validateAssets();


