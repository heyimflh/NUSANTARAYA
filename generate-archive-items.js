const fs = require('fs');
const path = require('path');

const provincesDir = path.resolve('public/assets/nusa-archive/provinces');
const outputFile = path.resolve('src/data/archive/generatedArchiveItems.ts');

const CATEGORY_MAP = {
  "01": "rumah-adat",
  "02": "tarian",
  "03": "alat-musik",
  "04": "pakaian-adat",
  "05": "upacara-adat",
  "06": "cerita-rakyat",
  "07": "senjata-tradisional",
  "08": "kerajinan",
  "09": "bahasa-aksara",
  "10": "motif-kain",
  "11": "tokoh-daerah",
  "12": "kosmologi"
};

// Seeded random for deterministic output
function seedRandom(seed) {
  let h = 0xdeadbeef;
  for(let i = 0; i < seed.length; i++)
      h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
  return function() {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
  }
}

// Convert "rumah-gadang" to "Rumah Gadang"
function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const DESC_TEMPLATES = {
  "rumah-adat": [
    "Merupakan manifestasi arsitektur vernakular masyarakat {province} yang dirancang untuk beradaptasi dengan kondisi geografis setempat. Struktur bangunan ini bukan sekadar hunian, melainkan pusat kosmologi dan sistem kekerabatan yang mengikat komunitas sejak era leluhur.",
    "Bentuk arsitektur tradisional dari wilayah {province} yang mencerminkan filosofi hidup masyarakatnya. Pembangunan struktur ini melibatkan perhitungan astronomis lokal dan ritual khusus yang menandakan harmoni antara mikrokosmos (manusia) dan makrokosmos (alam semesta).",
    "Peninggalan arsitektur warisan leluhur di {province} yang menjadi bukti kecerdasan spasial masyarakat masa lampau. Pola tata ruangnya sangat hierarkis, merepresentasikan stratifikasi sosial dan nilai-nilai religiositas komunal."
  ],
  "tarian": [
    "Seni pertunjukan gerak tradisional dari {province} yang awalnya tumbuh dalam lingkungan ritual keraton maupun perayaan panen rakyat. Koreografinya mengandung metafora kehidupan, peperangan purba, atau ungkapan syukur kepada sang pencipta.",
    "Bentuk ekspresi kinestetik warisan masyarakat {province}. Secara historis, repertoar tari ini diturunkan melalui tradisi lisan dan menjadi instrumen penting dalam berbagai upacara ritus peralihan (rites of passage).",
    "Komposisi tari tradisional {province} yang memadukan keanggunan ritmis dengan narasi epik lokal. Busana penari dan iringan instrumen pengiring dirancang spesifik untuk membangkitkan suasana sakral sekaligus menghibur."
  ],
  "alat-musik": [
    "Instrumen musikal endemik dari wilayah {province} yang umumnya dibuat dari material alam sekitar seperti bambu, kayu keras, atau paduan perunggu. Bunyi yang dihasilkan dipercaya mampu menghubungkan dimensi manusia dengan alam roh.",
    "Artefak bunyi tradisional khas {province} yang memiliki sistem tala akustik unik. Instrumen ini memainkan peran krusial sebagai pengiring ritus adat, sarana komunikasi antar desa, hingga medium penyembuhan (healing).",
    "Perangkat musik pusaka masyarakat {province} yang cara pembuatannya mewajibkan puasa atau ritual khusus bagi sang empu (pembuatnya). Bunyi instrumen ini merepresentasikan detak kehidupan dan identitas kultural komunal."
  ],
  "pakaian-adat": [
    "Artefak tekstil dan busana seremonial dari {province} yang ditenun dengan teknik leluhur. Setiap helai benang, motif, dan aksesoris logam yang melengkapinya menyimpan kode status sosial dan doa-doa keselamatan.",
    "Pakaian kebesaran masyarakat {province} yang hanya dikenakan pada momen-momen krusial seperti pernikahan adat atau pelantikan tetua. Ragam hias pada kainnya merupakan rekaman visual dari mitologi dan pandangan hidup setempat.",
    "Karya seni kriya busana warisan {province} yang melibatkan proses pewarnaan alami yang rumit. Detail ornamen dan siluet pakaian ini mencerminkan asimilasi budaya maritim dengan kearifan lokal nusantara."
  ],
  "upacara-adat": [
    "Ritus komunal masyarakat {province} yang diselenggarakan untuk menjaga keseimbangan tatanan kosmis. Melalui berbagai sesaji dan mantra, upacara ini menjadi ruang negosiasi spiritual antara manusia, alam, dan leluhur.",
    "Sistem ritual warisan di {province} yang berfungsi sebagai perekat kohesi sosial. Pelaksanaan upacara ini menuntut gotong royong seluruh elemen desa dan menjadi sarana transmisi nilai-nilai luhur kepada generasi muda.",
    "Perayaan sakral khas {province} yang menandai titik-titik penting dalam siklus agraris atau siklus hidup manusia. Kompleksitas sesaji yang disiapkan merefleksikan kekayaan keanekaragaman hayati wilayah tersebut."
  ],
  "senjata-tradisional": [
    "Mahakarya tempa logam dari {province} yang tidak sekadar berfungsi sebagai alat perlindungan diri. Dalam tradisi masyarakatnya, senjata ini adalah pusaka yang dipercaya memiliki tuah (kekuatan magis) dan representasi maskulinitas.",
    "Senjata pusaka warisan tetua di {province} yang pamornya (pola pada bilah) dibuat dengan teknik pelipatan besi dan nikel yang rumit. Benda ini sering kali diwariskan turun-temurun sebagai simbol legitimasi dan kehormatan keluarga.",
    "Benda tajam bernilai historis dari kawasan {province}. Bentuk geometris bilah dan ukiran pada hulu (gagangnya) merupakan simbol pelindung spiritual yang mencerminkan keberanian dan filosofi ksatria lokal."
  ],
  "kerajinan": [
    "Karya kriya warisan masyarakat {province} yang dikerjakan menggunakan metode manual yang diwariskan lintas generasi. Setiap produk bukan sekadar benda fungsional, melainkan saksi bisu perjalanan sejarah industri rumahan nusantara.",
    "Artefak kriya terapan khas {province} yang memanfaatkan material organik endemis. Teknik anyaman atau ukiran yang diterapkan pada benda ini mengandung nilai estetika tinggi yang telah diakui hingga ke kancah perdagangan maritim purba."
  ],
  "bahasa-aksara": [
    "Sistem tanda dan medium komunikasi verbal masyarakat {province} yang menjadi pilar utama pelestarian memori kolektif. Naskah kuno yang ditulis dengan aksara ini memuat pengobatan tradisional, hukum adat, hingga sastra epik.",
    "Peninggalan literasi kuno dari {province} yang membuktikan tingginya tingkat peradaban masa lampau. Morfologi dan sintaksis bahasa ini mencerminkan struktur berpikir masyarakat nusantara yang sangat terikat dengan alam."
  ],
  "cerita-rakyat": [
    "Tradisi lisan masyarakat {province} yang dituturkan oleh tetua adat di sekitar api unggun atau beranda rumah adat. Narasi epik ini berfungsi sebagai institusi pendidikan informal purba yang mengajarkan etika dan tabu.",
    "Kisah mitologis dari wilayah {province} yang menjelaskan asal-usul bentang alam, marga, atau tradisi tertentu. Dongeng ini merupakan alat kontrol sosial yang diwariskan secara verbal melintasi zaman."
  ],
  "motif-kain": [
    "Ragam hias tekstil khas {province} yang dibuat dengan teknik celup rintang atau tenun ikat ganda. Pola geometris maupun organis pada kain ini merupakan sandi visual yang merangkum pandangan kosmologis pembuatnya.",
    "Karya seni tekstil warisan {province} yang setiap motifnya ditenun bersamaan dengan lantunan doa. Warna-warna alami yang digunakan merepresentasikan siklus kehidupan, kematian, dan kelahiran kembali dalam kepercayaan lokal."
  ],
  "kosmologi": [
    "Sistem kepercayaan asli (indigenous) masyarakat {province} yang mengatur tata hubungan vertikal dengan Sang Pencipta dan horizontal dengan alam. Sistem nilai ini melahirkan berbagai tabu dan anjuran pelestarian ekologi lokal.",
    "Konsep spiritualitas purba di wilayah {province} yang memandang alam semesta sebagai sebuah organisme hidup. Ajaran ini menjadi landasan bagi hampir seluruh praktik adat, seni, dan tatanan sosial masyarakat setempat."
  ],
  "tokoh-daerah": [
    "Figur historis dari wilayah {province} yang rekam jejak perjuangannya mewarnai dinamika perlawanan antikolonial atau penyebaran agama. Kisah hidupnya kini menjadi epik yang menginspirasi gerakan kebudayaan lokal.",
    "Intelektual dan pejuang kebudayaan masyarakat {province} yang gagasan-gagasannya melampaui zamannya. Kepeloporannya dalam menjaga kedaulatan Nusantara dicatat secara mendalam dalam berbagai historiografi lokal."
  ]
};

const DEFAULT_DESC = "Bagian tak terpisahkan dari kekayaan warisan budaya {province}. Benda atau tradisi ini tercatat dalam berbagai literatur lokal sebagai salah satu pilar identitas masyarakat Nusantara yang harus terus dilestarikan melalui studi antropologi berkelanjutan.";

function generateDescription(provinceSlug, categoryId, rand) {
  const provinceName = toTitleCase(provinceSlug);
  const templates = DESC_TEMPLATES[categoryId];
  if (!templates) {
    return DEFAULT_DESC.replace("{province}", provinceName);
  }
  const idx = rand() % templates.length;
  return templates[idx].replace(/{province}/g, provinceName);
}

const items = [];
let errorCount = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.webp')) {
      const match = entry.name.match(/^id-\d+-([a-z-]+?)-(\d{2})-([a-z-]+?)-(.*?)(-l\d-master-v\d+)?\.webp$/);
      if (match) {
        const provinceSlug = match[1];
        const catIndex = match[2];
        const parsedCat = match[3];
        const itemSlugStr = match[4];
        
        let categoryId = CATEGORY_MAP[catIndex] || parsedCat;
        if (categoryId === 'kepercayaan-tradisi' || categoryId === 'kepercayaan') categoryId = 'kosmologi';
        if (categoryId === 'upacara-tradisi') categoryId = 'upacara-adat';
        
        const title = toTitleCase(itemSlugStr);
        const rand = seedRandom(entry.name);
        const summary = generateDescription(provinceSlug, categoryId, rand);
        const itemId = `gen-${provinceSlug}-${catIndex}-${itemSlugStr}`.slice(0, 50); // limit length just in case
        
        // Relative path from public
        const src = fullPath.replace(path.resolve('public'), '').replace(/\\/g, '/');

        items.push({
          id: itemId,
          slug: `${itemSlugStr}-${provinceSlug}`,
          status: "published",
          categoryId: categoryId,
          provinceIds: [provinceSlug],
          localeContent: {
            id: {
              title: title,
              summary: summary,
            },
            en: {
              title: title,
              summary: "A culturally significant asset representing the heritage and local wisdom of the Nusantara archipelago, carefully preserved through generations.",
            }
          },
          aliases: [],
          keywords: [provinceSlug, categoryId, title.toLowerCase()],
          livingStatus: "living",
          media: [{
            id: `media-${itemId}`,
            type: "image",
            src: src,
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            alt: title,
          }],
          sourceRefs: ["src-archive-collection"],
          relatedItemIds: [],
          relatedFeatureRefs: [
            { target: "province-atlas", targetId: provinceSlug, label: `Lihat Provinsi`, labelEn: "View Province" }
          ],
          editorialPriority: 1,
          updatedAt: "2026-07-20"
        });
      } else {
        errorCount++;
      }
    }
  }
}

scanDir(provincesDir);

console.log(`Successfully parsed ${items.length} items. Failed to parse ${errorCount} items.`);

const tsContent = `import type { ArchiveItem } from "@/types/archive";\n\nexport const generatedArchiveItems: ArchiveItem[] = ${JSON.stringify(items, null, 2)};\n`;

fs.writeFileSync(outputFile, tsContent);
console.log(`Saved to ${outputFile}`);
