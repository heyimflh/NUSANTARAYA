const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/ArchiveItemCard.tsx');

let content = fs.readFileSync(targetPath, 'utf8');

// Use !important for the text colors to override the global .archive-page h3 CSS specificity
content = content.replace(
  /text-\[#F3EBDD\] drop-shadow-\[0_2px_4px_rgba\(0,0,0,0.5\)\]/g,
  '!text-[#F3EBDD] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
);

content = content.replace(
  /text-\[#F3EBDD\]\/90 text-sm/g,
  '!text-[#F3EBDD]/90 text-sm'
);

fs.writeFileSync(targetPath, content);
console.log('ArchiveItemCard text colors forced to bright with !important override!');
