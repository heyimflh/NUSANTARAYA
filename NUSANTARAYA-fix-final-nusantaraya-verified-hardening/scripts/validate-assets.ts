import fs from "node:fs";
import path from "node:path";
import { ROUTE_PRESETS } from "../src/data/routes/routePresets";
import provinces from "../src/data/provinces.json";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".md"]);
const ASSET_PATTERN = /["'`](\/assets\/[^"'`?#)\s]+(?:\?[^"'`)\s]+)?)["'`)]/g;
let failed = false;

function checkAsset(assetPath: string, source: string): void {
  if (!assetPath.startsWith("/assets/")) return;
  // Skip template literals (contains ${)
  if (assetPath.includes("${")) return;
  const clean = decodeURIComponent(assetPath.split(/[?#]/)[0]);
  const absolute = path.join(PUBLIC, clean.replace(/^\//, ""));
  if (!fs.existsSync(absolute)) {
    failed = true;
    console.error(`[MISSING ASSET] ${clean} <- ${source}`);
  }
}

for (const province of provinces) {
  if (province.heroImage) checkAsset(province.heroImage, `provinces.json:${province.id}`);
  const soundscape = (province as { soundscape?: string }).soundscape;
  if (soundscape) checkAsset(soundscape, `provinces.json:${province.id}`);
}
for (const preset of ROUTE_PRESETS) {
  if (preset.heroImage?.src) checkAsset(preset.heroImage.src, `routePresets.ts:${preset.id}`);
}

// Validate dynamic province assets for all 38 provinces
console.log("Validating province assets for all 38 provinces...");
for (const province of provinces) {
  const provinceId = province.id;
  const assets = ["thumb.webp", "hero.webp", "culture.webp", "food.webp", "destination.webp", "modern.webp"];
  for (const asset of assets) {
    checkAsset(`/assets/province/${provinceId}/${asset}`, `provinces:${provinceId}`);
  }
}

// Validate Passport level assets
console.log("Validating Passport level assets...");
const levels = ["penjelajah-baru", "petualang-nusantara", "pengembara-sejati", "penjaga-warisan", "pahlawan-nusantara"];
for (const level of levels) {
  checkAsset(`/assets/passport/levels/${level}.png`, "passport:levels");
}

// Validate region badges
console.log("Validating region badge assets...");
const regionBadges = [
  "java-heritage-keeper",
  "sumatra-seeker",
  "bali-nusa-wanderer",
  "borneo-nature-guardian",
  "celebes-voyager",
  "maluku-spice-explorer",
  "papua-wonder-seeker",
  "indonesia-complete-explorer"
];
for (const badge of regionBadges) {
  checkAsset(`/assets/passport/badges/regions/${badge}.png`, "passport:regions");
}


function walk(dir: string): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    if (!SOURCE_EXTENSIONS.has(path.extname(entry.name))) continue;
    const text = fs.readFileSync(full, "utf8");
    for (const match of text.matchAll(ASSET_PATTERN)) checkAsset(match[1], path.relative(ROOT, full));
  }
}
walk(path.join(ROOT, "src"));
if (failed) process.exit(1);
console.log("All referenced local assets exist.");
