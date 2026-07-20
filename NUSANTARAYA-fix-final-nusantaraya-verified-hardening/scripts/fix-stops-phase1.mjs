import fs from "fs";
import path from "path";
const targetFile = path.resolve(process.cwd(), "src/data/routes/routePresets.ts");
let content = fs.readFileSync(targetFile, "utf-8");

const lines = content.split(/\r?\n/);
let currentPresetId = "";
let stopIndex = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const idMatch = line.match(/^\s*id:\s*"([^"]+)",/);
  if (idMatch && !line.includes("legacyIds")) {
    currentPresetId = idMatch[1];
    stopIndex = 1;
  }
  
  if (line.match(/^\s*stops:\s*\[/)) {
    // We are inside stops array
    let j = i + 1;
    while (j < lines.length && !lines[j].match(/^\s*\],/)) {
      if (lines[j].match(/^\s*\{\s*$/)) {
        const stopIdStr = `${currentPresetId}-stop-${stopIndex.toString().padStart(2, "0")}`;
        lines[j] = lines[j] + `\n        id: "${stopIdStr}",`;
        stopIndex++;
      }
      j++;
    }
  }
}

content = lines.join("\n");
fs.writeFileSync(targetFile, content);
console.log("Stops updated.");

