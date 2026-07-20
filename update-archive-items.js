const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/data/archive/archiveItems.ts');

let content = fs.readFileSync(targetPath, 'utf8');

// Replace `export const archiveItems: ArchiveItem[] = [`
// with `const manualArchiveItems: ArchiveItem[] = [`
content = content.replace(
  'export const archiveItems: ArchiveItem[] = [',
  'import { generatedArchiveItems } from "./generatedArchiveItems";\n\nconst manualArchiveItems: ArchiveItem[] = ['
);

// Add deduplication logic at the very end of the file
const deduplicationLogic = `
// Combine and Deduplicate (prefer manual items if src is identical)
const manualSrcSet = new Set(manualArchiveItems.map(item => item.media[0]?.src).filter(Boolean));

const filteredGeneratedItems = generatedArchiveItems.filter(item => {
  const src = item.media[0]?.src;
  return src && !manualSrcSet.has(src);
});

export const archiveItems: ArchiveItem[] = [...manualArchiveItems, ...filteredGeneratedItems];
`;

content += deduplicationLogic;

fs.writeFileSync(targetPath, content);
console.log('archiveItems.ts modified to include generated items with deduplication!');
