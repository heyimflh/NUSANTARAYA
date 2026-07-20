const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/ArchiveItemCard.tsx');

let content = fs.readFileSync(targetPath, 'utf8');

// Change text-white to a warm aesthetic bright color (cream/gold)
content = content.replace(
  /text-white drop-shadow-lg/g,
  'text-[#F3EBDD] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
);

content = content.replace(
  /text-white\/80/g,
  'text-[#F3EBDD]/90'
);

fs.writeFileSync(targetPath, content);
console.log('ArchiveItemCard text colors updated to bright aesthetic warm colors!');
