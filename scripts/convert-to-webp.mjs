/**
 * Convert large PNG images to WebP using sharp (bundled with Next.js).
 * Run with: node scripts/convert-to-webp.mjs
 */
import sharp from 'sharp';
import { stat, unlink } from 'fs/promises';
import { join } from 'path';

const PUBLIC_ASSETS = 'public/assets';

// Files to convert (path relative to PUBLIC_ASSETS)
const targets = [
  'features/passport-preview.png',
  'features/rani-chat-preview.png', 
  'features/route-planner-preview.png',
  'features/nusa-map-previe.png',
  'features/archive-preview.png',
  'features/future-preview.png',
  'features/nusarasa-preview.png',
  'background-primary.png',
  'background-primary-mobile.png',
  'rani/rani-sapa.png',
  'branding/NUSANTARAYA_logo-full.png',
];

let totalSaved = 0;

for (const target of targets) {
  const inputPath = join(PUBLIC_ASSETS, target);
  const outputPath = inputPath.replace(/\.png$/i, '.webp');
  
  try {
    const inputStat = await stat(inputPath);
    const inputSize = inputStat.size;
    
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const outputStat = await stat(outputPath);
    const outputSize = outputStat.size;
    const saved = inputSize - outputSize;
    totalSaved += saved;
    
    console.log(`OK ${target}: ${(inputSize/1024).toFixed(0)}KB -> ${(outputSize/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB, ${((saved/inputSize)*100).toFixed(0)}%)`);
    
    // Delete original PNG after successful conversion
    await unlink(inputPath);
    console.log(`  Deleted original: ${target}`);
  } catch (err) {
    console.error(`FAIL ${target}:`, err.message);
  }
}

console.log(`\nTotal saved: ${(totalSaved/1024/1024).toFixed(2)} MB`);
