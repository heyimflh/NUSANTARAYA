const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/data/archive/archiveItems.ts');

let content = fs.readFileSync(targetPath, 'utf8');

// Replace `export const archiveItems: ArchiveItem[] = [`
// with `import { generatedArchiveItems } from "./generatedArchiveItems";\n\nconst manualArchiveItems: ArchiveItem[] = [`
content = content.replace(
  'export const archiveItems: ArchiveItem[] = [',
  'import { generatedArchiveItems } from "./generatedArchiveItems";\n\nconst manualArchiveItems: ArchiveItem[] = ['
);

// We need to insert the combine logic right AFTER the array definition ends, and BEFORE `export const archiveItemMap = new Map(`
const searchStr = '\n// ─── Index & Lookup ──────────────────────────────────────────────────────────\n';
const combineLogic = `
// Combine and Deduplicate (prefer manual items if src is identical)
const manualSrcSet = new Set(manualArchiveItems.map(item => item.media[0]?.src).filter(Boolean));

const filteredGeneratedItems = generatedArchiveItems.filter(item => {
  const src = item.media[0]?.src;
  return src && !manualSrcSet.has(src);
});

export const archiveItems: ArchiveItem[] = [...manualArchiveItems, ...filteredGeneratedItems];
`;

content = content.replace(searchStr, combineLogic + searchStr);

fs.writeFileSync(targetPath, content);
console.log('archiveItems.ts safely modified to include generated items before Map initialization!');
