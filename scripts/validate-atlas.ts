import * as fs from 'fs';
import * as path from 'path';

// Kita tidak bisa langsung import type ProvinceAtlas karena file ini akan dijalankan dengan tsx
// Jadi kita menggunakan any untuk membaca struktur objectnya.

const PROVINCES_DIR = path.join(process.cwd(), 'src/data/atlas/provinces');

function findCitedParagraphs(obj: Record<string, unknown> | unknown): Record<string, unknown>[] {
  let results: Record<string, unknown>[] = [];
  if (Array.isArray(obj)) {
    for (const item of obj) {
      results = results.concat(findCitedParagraphs(item));
    }
  } else if (obj !== null && typeof obj === 'object') {
    const record = obj as Record<string, unknown>;
    if (record.content && typeof record.content === 'string' && Array.isArray(record.citationIds)) {
      results.push(record);
    }
    for (const key of Object.keys(obj as Record<string, unknown>)) {
      if (key !== 'citationIds') { // hindari rekursi tak perlu
        results = results.concat(findCitedParagraphs((obj as Record<string, unknown>)[key]));
      }
    }
  }
  return results;
}

import { pathToFileURL } from 'url';

async function validateProvince(filePath: string) {
  const fileUrl = pathToFileURL(filePath).href;
  const mod = await import(fileUrl);
  let atlasObj: Record<string, unknown> | null = null;
  const provinceName = path.basename(filePath, '.ts');

  for (const key in mod) {
    if (mod[key] && typeof mod[key] === 'object' && mod[key].provinceId && mod[key].slug) {
      atlasObj = mod[key] as Record<string, unknown>;
      break;
    }
  }

  if (!atlasObj) {
    console.warn(`[SKIP] ${provinceName}: Tidak ditemukan export ProvinceAtlas (cek provinceId dan slug).`);
    return true;
  }

  console.log(`\nValidating ${atlasObj.title} (${atlasObj.provinceId})...`);
  let isValid = true;

  // 1. Validate completeness based on FASE 11 requirements
  // (society, natural, tourism, economic, historical, governance)
  // Ini bisa di-map ke chapter yang ada di ProvinceAtlas.
  const requiredChapters = ['society', 'geography', 'destinations', 'history'];
  const missingChapters = requiredChapters.filter(ch => !atlasObj[ch]);
  if (missingChapters.length > 0) {
    console.warn(`  [WARN] Chapter penting belum lengkap: ${missingChapters.join(', ')}`);
    if (atlasObj.contentStatus === 'published') {
      isValid = false;
    }
  } else {
    console.log(`  [OK] Chapter dasar terpenuhi.`);
  }

  // 2. Validate citationIndex
  const referenceIds = (atlasObj.referenceIds as string[]) || [];
  const allParagraphs = findCitedParagraphs(atlasObj);
  let citationErrorCount = 0;

  for (const para of allParagraphs) {
    const citations = (para.citationIds as string[]) || [];
    for (const citation of citations) {
      if (!referenceIds.includes(citation)) {
        console.error(`  [ERROR] Paragraph ID '${para.id}' menggunakan citationId '${citation}' yang tidak terdaftar di referenceIds provinsi.`);
        citationErrorCount++;
        isValid = false;
      }
    }
  }

  if (citationErrorCount === 0) {
    console.log(`  [OK] ${allParagraphs.length} paragraf yang memiliki sitasi tervalidasi dengan referenceIds.`);
  }

  return isValid;
}

async function main() {
  console.log("=== NUSANTARAYA Atlas Validator ===");
  const files = fs.readdirSync(PROVINCES_DIR).filter(f => f.endsWith('.ts'));
  let allValid = true;

  for (const file of files) {
    const filePath = path.join(PROVINCES_DIR, file);
    const valid = await validateProvince(filePath);
    if (!valid) allValid = false;
  }

  console.log("\n=== Validasi Selesai ===");
  if (!allValid) {
    console.error("Terdapat error pada validasi.");
    process.exit(1);
  } else {
    console.log("Semua provinsi valid.");
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
