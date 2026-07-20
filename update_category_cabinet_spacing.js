const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/CategoryCabinet.tsx');

let content = fs.readFileSync(targetPath, 'utf8');

// 1. Change Background Colors to a unique light monochrome (e.g. Warm Taupe/Beige)
// Previous light colors were #E8E1D3 (outer) and #F3EBDD (sticky)
// Let's use a premium distinctive color like #DCD1C4 or #E4D8C9
content = content.replace(/bg-\[#E8E1D3\]/g, 'bg-[#E3D6C5]'); // Outer wrapper background
content = content.replace(/bg-\[#F3EBDD\]/g, 'bg-[#E3D6C5]'); // Sticky container background

// 2. Adjust sticky container spacing to prevent cropping
// Remove pt-20 and use flex center with a smaller card height
content = content.replace(
  /<div className="sticky top-0 h-screen pt-20 overflow-hidden flex items-center bg-\[#E3D6C5\]">/g,
  '<div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-[#E3D6C5] pt-16 md:pt-24">'
);

// 3. Move the title "KABINET KATEGORI" to be a static header at the top center/left
// instead of absolute which overlaps.
// We will change it from absolute top-24 left-10 to absolute top-6 left-1/2 -translate-x-1/2
content = content.replace(
  /<div className="absolute top-24 left-10 md:top-32 md:left-20 z-50 pointer-events-none">/g,
  '<div className="absolute top-24 md:top-32 left-8 md:left-12 z-50 pointer-events-none">' // Or just give the card a max-width and margin
);

// 4. Reduce the height of the cards from 85vh to 70vh so they fit nicely
// and don't overlap the navbar or get cropped at the bottom.
// Also reduce the image height on mobile.
content = content.replace(
  /w-full max-w-7xl h-\[85vh\] flex flex-col/g,
  'w-full max-w-7xl h-[65vh] md:h-[70vh] flex flex-col mt-12 md:mt-16' // mt-12 to push down away from the title
);

// We need to move the title out of the way or push the cards down.
// By adding mt-12 to the card container, it pushes the content down, leaving space for the title at top-32!
// Wait, the absolute title is top-24 md:top-32.
// Let's place the title in the normal document flow inside the sticky container, above the horizontal track!
// Actually, I can just replace the absolute positioning block:

content = content.replace(
  /<div className="absolute top-24 md:top-32 left-8 md:left-12 z-50 pointer-events-none">/g,
  '<div className="absolute top-20 md:top-24 left-8 md:left-20 z-50 pointer-events-none">'
);

// And we adjust the typography of the title
content = content.replace(
  /className="font-playfair text-xl md:text-2xl text-\[#29221B\]\/40 uppercase tracking-\[0\.2em\] mb-2 font-bold"/g,
  'className="font-playfair text-lg md:text-xl text-[#29221B]/40 uppercase tracking-[0.3em] font-bold"'
);

// 5. Update the horizontal track wrapper to center items vertically better
content = content.replace(
  /className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-12 lg:p-24"/g,
  'className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-12 lg:p-24"'
);

// 6. Fix image height to prevent cropping
content = content.replace(
  /className="w-full md:w-1\/2 h-\[40vh\] md:h-full relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"/g,
  'className="w-full md:w-1/2 h-[35vh] md:h-full relative rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer"'
);

fs.writeFileSync(targetPath, content);
console.log('CategoryCabinet spacing and distinct light color applied!');
