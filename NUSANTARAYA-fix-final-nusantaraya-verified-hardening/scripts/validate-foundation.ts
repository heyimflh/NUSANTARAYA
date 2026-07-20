import fs from "fs";
import path from "path";
import { PROVINCE_ID_SET } from "../src/data/provinces/provinceIds";
import { getAtlasIds, hasAtlasData } from "../src/data/atlas/utils";
import { regions } from "../src/data/regions/regions";

const SRC_DIR = path.join(process.cwd(), "src");
let hasError = false;

function reportError(category: string, msg: string) {
  console.error(`❌ [${category}] ${msg}`);
  hasError = true;
}

function checkDirectory(dir: string, assetPaths: Set<string>) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDirectory(fullPath, assetPaths);
    } else if (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      
      // [ROUTING]
      if (content.includes('href="/map"') || content.includes("href: '/map'") || content.includes('href: "/map"')) {
        reportError("ROUTING", `Found active route '/map' in ${fullPath}`);
      }
      if (content.includes('href="/planner"') || content.includes("push('/planner')") || content.includes('push("/planner")') || content.includes('href="/route-planner"')) {
        reportError("ROUTING", `Found dead route '/planner' or '/route-planner' in ${fullPath}`);
      }
      if (content.match(/\/provinsi\/\d+/)) {
        reportError("ROUTING", `Found numeric province route (/provinsi/{number}) in ${fullPath}`);
      }

      // [PASSPORT]
      if ((fullPath.includes("components") || fullPath.includes("app")) && content.includes("addStamp(")) {
        reportError("PASSPORT", `UI direct stamp detected (addStamp) in ${fullPath}. Use plan/start/complete transitions instead.`);
      }

      // [CITATION]
      if (content.includes("{{https://doi.org/")) {
        reportError("CITATION", `Found incorrect DOI format '{{https://doi.org/' in ${fullPath}`);
      }

      // [ASSET]
      const assetMatches = content.match(/\/assets\/[^"'`\s\)]+/g);
      if (assetMatches) {
        for (const match of assetMatches) {
          // trim trailing params if any
          const cleanPath = match.split("?")[0].split("#")[0];
          assetPaths.add(cleanPath);
        }
      }
    }
  }
}

console.log("Validating foundation...");

// E. Province registry consistency
const atlasIds = getAtlasIds();
if (atlasIds.length !== 38 || PROVINCE_ID_SET.size !== 38) {
  reportError("REGISTRY", `Expected 38 provinces. Atlas: ${atlasIds.length}, Registry: ${PROVINCE_ID_SET.size}`);
}
for (const id of PROVINCE_ID_SET) {
  if (!hasAtlasData(id)) {
    reportError("REGISTRY", `Province ${id} is in PROVINCE_IDS but missing from Atlas data.`);
  }
}
let regionProvCount = 0;
for (const region of regions) {
  for (const pid of region.provinceIds) {
    regionProvCount++;
    if (!PROVINCE_ID_SET.has(pid)) {
      reportError("REGISTRY", `Region ${region.id} has invalid province ID: ${pid}`);
    }
  }
}
if (regionProvCount !== 38) {
  reportError("REGISTRY", `Regions mapped to ${regionProvCount} provinces, expected 38.`);
}

// Check source files
const assetPaths = new Set<string>();
checkDirectory(SRC_DIR, assetPaths);

// F. Static assets
for (const asset of assetPaths) {
  if (asset.includes("${")) continue;
  const absolutePath = path.join(process.cwd(), "public", asset);
  if (!fs.existsSync(absolutePath)) {
    reportError("ASSET", `Missing static asset: ${asset}`);
  }
}

// H. Package scripts
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8"));
if (!packageJson.devDependencies?.tsx) {
  reportError("TOOLING", "tsx is not in devDependencies");
}
if (!packageJson.scripts?.["test:passport"]) {
  reportError("TOOLING", "test:passport script is missing");
}
if (!packageJson.scripts?.["qa:sprint2"]) {
  reportError("TOOLING", "qa:sprint2 script is missing");
}
for (const [scriptName, scriptCmd] of Object.entries(packageJson.scripts || {})) {
  if (typeof scriptCmd === "string" && scriptCmd.includes("npx tsx")) {
    reportError("TOOLING", `Script ${scriptName} uses 'npx tsx'. Use 'tsx' directly.`);
  }
}

if (hasError) {
  console.error("❌ Foundation validation failed!");
  process.exit(1);
} else {
  console.log("✅ Foundation validation passed.");
}
