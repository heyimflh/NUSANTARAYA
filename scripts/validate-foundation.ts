import fs from "fs";
import path from "path";

const SRC_DIR = path.join(process.cwd(), "src");
let hasError = false;

function reportError(msg: string) {
  console.error(`❌ [ERROR] ${msg}`);
  hasError = true;
}

function checkDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDirectory(fullPath);
    } else if (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      
      // 1. Check for active route `/map`
      if (content.includes('href="/map"') || content.includes("href: '/map'") || content.includes('href: "/map"')) {
        reportError(`Found active route '/map' in ${fullPath}`);
      }
      
      // 2. Journey using /provinsi/{number}
      if (content.match(/\/provinsi\/\d+/)) {
        reportError(`Found numeric province route (/provinsi/{number}) in ${fullPath}`);
      }

      // 5. DOI format error
      if (content.includes("{{https://doi.org/")) {
        reportError(`Found incorrect DOI format '{{https://doi.org/' in ${fullPath}`);
      }
    }
  }
}

console.log("Validating foundation...");
checkDirectory(SRC_DIR);

if (hasError) {
  console.error("❌ Foundation validation failed!");
  process.exit(1);
} else {
  console.log("✅ Foundation validation passed.");
}
