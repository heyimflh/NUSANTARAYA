const fs = require('fs');
const content = fs.readFileSync('src/data/provinces/provinces.ts', 'utf8');
const matches = content.match(/id:\s*"([^"]+)"/g);
console.log('Total provinces found:', matches ? matches.length : 0);
if (matches) {
  console.log(matches.map(m => m.split('"')[1]).join(', '));
}
