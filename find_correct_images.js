const fs = require('fs');
const path = require('path');

const tsPath = path.resolve('src/data/archive/archiveItems.ts');
const collectionsPath = path.resolve('src/data/archive/archiveCollections.ts');

const badPaths = [
  "/assets/nusa-archive/provinces/Aceh/id-11-aceh-02-tarian-tari-saman-gayo.webp",
  "/assets/nusa-archive/provinces/bali/id-51-bali-12-kepercayaan-pura-tanah-lot-bali.webp",
  "/assets/nusa-archive/provinces/bali/id-51-bali-02-tarian-tari-barong-bali.webp",
  "/assets/nusa-archive/provinces/bali/id-51-bali-05-upacara-tradisi-subak-irigasi-sawah-bali.webp",
  "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-09-aksara-lontara-bugis-makassar.webp",
  "/assets/nusa-archive/provinces/maluku/id-81-maluku-01-rumah-adat-baileo-maluku.webp",
  "/assets/nusa-archive/provinces/nusa-tenggara-timur/id-53-nusa-tenggara-timur-10-motif-kain-tenun-ikat-ntt.webp",
  "/assets/nusa-archive/provinces/kalimantan-timur/id-64-kalimantan-timur-01-rumah-adat-lamin-dayak.webp",
  "/assets/nusa-archive/provinces/papua-pegunungan/id-95-papua-pegunungan-01-rumah-adat-honai-dani.webp",
  "/assets/nusa-archive/provinces/jawa-tengah/id-33-jawa-tengah-10-motif-kain-batik-pesisir-pekalongan.webp",
  "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-08-kerajinan-perahu-pinisi-bulukumba.webp"
];

for (const badPath of badPaths) {
  const parts = badPath.split('/');
  const filename = parts.pop();
  const dirPath = path.join(process.cwd(), 'public', parts.join('/'));
  
  if (!fs.existsSync(dirPath)) {
    // Try to find if dir is lowercase
    const parentDir = path.dirname(dirPath);
    const dirName = path.basename(dirPath);
    if (fs.existsSync(parentDir)) {
      const dirs = fs.readdirSync(parentDir);
      const matchDir = dirs.find(d => d.toLowerCase() === dirName.toLowerCase());
      if (matchDir && matchDir !== dirName) {
        console.log(`Directory case mismatch: ${dirName} -> ${matchDir}`);
      } else {
        console.log(`Dir not found: ${dirPath}`);
      }
    }
    continue;
  }
  
  const files = fs.readdirSync(dirPath);
  
  // Try to match by the "id-XX-prov-YY" prefix
  const match = filename.match(/id-\d+-[a-z-]+-\d+/);
  if (match) {
    const prefix = match[0];
    const candidate = files.find(f => f.startsWith(prefix));
    if (candidate) {
      console.log(`Replace:\n  ${badPath}\nWith:\n  ${parts.join('/')}/${candidate}\n`);
    } else {
      console.log(`No match for prefix ${prefix} in ${dirPath}`);
      console.log(files);
    }
  } else {
    console.log(`Regex fail on ${filename}`);
  }
}
