const fs = require('fs');
const path = require('path');

function getWebpDimensions(filePath) {
  const buffer = Buffer.alloc(30);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 30, 0);
  fs.closeSync(fd);

  // WebP files start with RIFF...WEBPVP8
  if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
    return null; // Not a webp
  }

  const vp8Type = buffer.toString('ascii', 12, 16);
  let width, height;

  if (vp8Type === 'VP8 ') {
    // Lossy WebP
    // The dimensions are at bytes 26-27 (width) and 28-29 (height), 14 bits each
    const buf2 = Buffer.alloc(10);
    const fd2 = fs.openSync(filePath, 'r');
    fs.readSync(fd2, buf2, 0, 10, 20); // read from offset 20
    fs.closeSync(fd2);
    // bytes 26,27,28,29 are 6,7,8,9 in our buf2
    width = buf2.readUInt16LE(6) & 0x3fff;
    height = buf2.readUInt16LE(8) & 0x3fff;
  } else if (vp8Type === 'VP8L') {
    // Lossless WebP
    const buf2 = Buffer.alloc(5);
    const fd2 = fs.openSync(filePath, 'r');
    fs.readSync(fd2, buf2, 0, 5, 20); // read from offset 20
    fs.closeSync(fd2);
    const b0 = buf2[1];
    const b1 = buf2[2];
    const b2 = buf2[3];
    const b3 = buf2[4];
    width = 1 + (((b1 & 0x3F) << 8) | b0);
    height = 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6));
  } else if (vp8Type === 'VP8X') {
    // Extended WebP
    const buf2 = Buffer.alloc(6);
    const fd2 = fs.openSync(filePath, 'r');
    fs.readSync(fd2, buf2, 0, 6, 24); // read from offset 24
    fs.closeSync(fd2);
    width = 1 + (buf2[0] | (buf2[1] << 8) | (buf2[2] << 16));
    height = 1 + (buf2[3] | (buf2[4] << 8) | (buf2[5] << 16));
  }

  return { width, height };
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const fullPath = path.join(dir, file);
      const dims = getWebpDimensions(fullPath);
      console.log(`"${file}": { width: ${dims?.width}, height: ${dims?.height} },`);
    }
  }
}

console.log('// Dishes');
processDir(path.join(__dirname, '../public/assets/culinary/dishes'));
console.log('// Spices');
processDir(path.join(__dirname, '../public/assets/culinary/spices'));
