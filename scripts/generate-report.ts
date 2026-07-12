import fs from "fs";
import path from "path";
import { ALL_CHAPTERS, PROVINCES } from "../src/types/atlas";
import { getAtlasData, getActiveChapters } from "../src/data/atlas/utils";

async function generateReport() {
  console.log("Generating completeness report...");
  
  const reportDir = path.join(process.cwd(), "reports");
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  const reportData = {
    generatedAt: new Date().toISOString(),
    totalProvinces: PROVINCES.length,
    completedProvinces: 0,
    provinces: [] as any[],
  };

  let mdContent = `# Laporan Kelengkapan Atlas NUSANTARAYA\n\n`;
  mdContent += `*Diperbarui: ${new Date().toISOString()}*\n\n`;
  mdContent += `| No | Provinsi | Status | Chapter Selesai | Chapter Kurang |\n`;
  mdContent += `|---|---|---|---|---|\n`;

  for (let i = 0; i < PROVINCES.length; i++) {
    const p = PROVINCES[i];
    const atlas = await getAtlasData(p.id);
    
    if (atlas && atlas.contentStatus !== "draft" && atlas.contentStatus !== "stub" && atlas.history && atlas.society && atlas.destinations) {
      const active = getActiveChapters(atlas);
      const activeIds = active.map(c => c.id);
      
      const missingChapters = ALL_CHAPTERS.filter(c => !activeIds.includes(c.id)).map(c => c.id);
      
      reportData.completedProvinces++;
      reportData.provinces.push({
        id: p.id,
        name: p.name,
        status: "Lengkap",
        completedChaptersCount: active.length,
        missingChapters,
      });

      mdContent += `| ${i + 1} | ${p.name} | ✅ Lengkap | ${active.length} / 13 | ${missingChapters.length > 0 ? missingChapters.join(", ") : "-"} |\n`;
    } else {
      reportData.provinces.push({
        id: p.id,
        name: p.name,
        status: "Belum Lengkap",
        completedChaptersCount: 0,
        missingChapters: ALL_CHAPTERS.map(c => c.id),
      });

      mdContent += `| ${i + 1} | ${p.name} | ⏳ Belum | 0 / 13 | Semua |\n`;
    }
  }

  mdContent += `\n**Total Lengkap:** ${reportData.completedProvinces} / ${PROVINCES.length}\n`;

  fs.writeFileSync(path.join(reportDir, "atlas-completeness.json"), JSON.stringify(reportData, null, 2));
  fs.writeFileSync(path.join(reportDir, "atlas-completeness.md"), mdContent);

  console.log("Report generated at reports/atlas-completeness.json and .md");
}

generateReport().catch(console.error);
