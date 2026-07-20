const fs = require('fs');
const path = require('path');

const tsPath = path.resolve('src/data/archive/archiveItems.ts');
const code = fs.readFileSync(tsPath, 'utf-8');

// Regex to find all "/assets/nusa-archive/...webp" strings
const regex = /\/assets\/nusa-archive\/[^"']+\.webp/g;
let match;
const badPaths = [];
const goodPaths = [];

while ((match = regex.exec(code)) !== null) {
  const mediaPath = match[0];
  const absolutePath = path.join(process.cwd(), 'public', mediaPath);
  if (!fs.existsSync(absolutePath)) {
    badPaths.push(mediaPath);
  } else {
    goodPaths.push(mediaPath);
  }
}

console.log('Bad paths (' + badPaths.length + '):');
badPaths.forEach(p => console.log('  ' + p));
console.log('Good paths (' + goodPaths.length + ')');
