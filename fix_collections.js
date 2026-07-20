const fs = require('fs');
const path = require('path');

const tsPath = path.resolve('src/data/archive/archiveCollections.ts');
let code = fs.readFileSync(tsPath, 'utf-8');

const replacements = [
  {
    from: "id-11-aceh-02-tarian-tari-saman-gayo.webp",
    to: "id-11-aceh-02-tarian-tari-saman.webp"
  },
  {
    from: "id-51-bali-12-kepercayaan-pura-tanah-lot-bali.webp",
    to: "id-51-bali-12-kepercayaan-pura-agung-besakih.webp"
  },
  {
    from: "id-51-bali-02-tarian-tari-barong-bali.webp",
    to: "id-51-bali-02-tarian-tari-kecak-uluwatu.webp"
  },
  {
    from: "id-51-bali-05-upacara-tradisi-subak-irigasi-sawah-bali.webp",
    to: "id-51-bali-05-upacara-tradisi-upacara-ngaben.webp"
  },
  {
    from: "id-73-sulawesi-selatan-09-aksara-lontara-bugis-makassar.webp",
    to: "id-73-sulawesi-selatan-09-aksara-aksara-lontara-bugis.webp"
  },
  {
    from: "id-81-maluku-01-rumah-adat-baileo-maluku.webp",
    to: "id-81-maluku-01-rumah-adat-rumah-baileo-negeri-akoon.webp"
  },
  {
    from: "id-53-nusa-tenggara-timur-10-motif-kain-tenun-ikat-ntt.webp",
    to: "id-53-nusa-tenggara-timur-10-motif-kain-ragam-motif-tenun-ikat-sumba.webp"
  },
  {
    from: "id-64-kalimantan-timur-01-rumah-adat-lamin-dayak.webp",
    to: "id-64-kalimantan-timur-01-rumah-adat-lamin-adat-pemung-tawai.webp"
  },
  {
    from: "id-95-papua-pegunungan-01-rumah-adat-honai-dani.webp",
    to: "id-95-papua-pegunungan-01-rumah-adat-honai.webp"
  },
  {
    from: "id-33-jawa-tengah-10-motif-kain-batik-pesisir-pekalongan.webp",
    to: "id-33-jawa-tengah-10-motif-kain-batik-lasem-bunga-gringsing.webp"
  },
  {
    from: "id-73-sulawesi-selatan-08-kerajinan-perahu-pinisi-bulukumba.webp",
    to: "id-73-sulawesi-selatan-08-kerajinan-pembuatan-pinisi-bulukumba.webp"
  }
];

for (const {from, to} of replacements) {
  code = code.replace(from, to);
}

// Also replace /Aceh/ with /aceh/
code = code.replace(/\/provinces\/Aceh\//g, "/provinces/aceh/");

fs.writeFileSync(tsPath, code);
console.log('Fixed archiveCollections.ts');
