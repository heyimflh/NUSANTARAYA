const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/CategoryCabinet.tsx');

let content = fs.readFileSync(targetPath, 'utf8');

// 1. Change Background Colors to Light Theme
content = content.replace(/bg-\[#161616\]/g, 'bg-[#E8E1D3]'); // Outer wrapper background
content = content.replace(/bg-\[#111111\]/g, 'bg-[#F3EBDD]'); // Sticky container background

// 2. Fix the header positioning to avoid navbar overlap
content = content.replace(
  /className="absolute top-10 left-10 md:top-14 md:left-20 z-50 pointer-events-none"/g,
  'className="absolute top-24 left-10 md:top-32 md:left-20 z-50 pointer-events-none"'
);

// 3. Change "KABINET KATEGORI" text color
content = content.replace(
  /className="font-playfair text-xl md:text-2xl text-white\/40 uppercase tracking-\[0\.2em\] mb-2"/g,
  'className="font-playfair text-xl md:text-2xl text-[#29221B]/40 uppercase tracking-[0.2em] mb-2 font-bold"'
);

// 4. Change internal text colors (from white to dark #29221B)
content = content.replace(
  /text-white font-bold mb-8/g,
  'text-[#29221B] font-bold mb-8'
);

content = content.replace(
  /text-\[#E8E1D3\] text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed/g,
  'text-[#3A332D] text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed'
);

content = content.replace(
  /text-white\/70/g,
  'text-[#29221B]/80 font-medium'
);

// 5. Change Ghost Button styles
content = content.replace(
  /border-\[#D4B56A\]\/40 rounded-full hover:bg-\[#D4B56A\]\/10 hover:border-\[#D4B56A\] transition-all duration-300 text-white font-medium/g,
  'border-[#D4B56A] rounded-full hover:bg-[#D4B56A] hover:border-[#D4B56A] hover:text-white transition-all duration-300 text-[#29221B] font-bold'
);

// 6. Ensure the main container accounts for the navbar height in its sticky behavior
content = content.replace(
  /<div className="sticky top-0 h-screen overflow-hidden flex items-center bg-\[#F3EBDD\]">/g,
  '<div className="sticky top-0 h-screen pt-20 overflow-hidden flex items-center bg-[#F3EBDD]">'
);

fs.writeFileSync(targetPath, content);
console.log('CategoryCabinet light mode applied!');
