import { provinceMapData, provincePanelData } from "./provinces";

export type FlagshipProvince = {
  provinceId: string;
  slug: string;
  name: string;
  region: string;
  index: number;
  tagline: string;
  editorialHook: string;
  whyFlagship: string;
  signatures: [string, string, string];
  dominantPillar: string;
  materialCount: number;
  heroImage: string;
  thumbnail: string;
  heroAlt: string;
  thumbnailAlt: string;
  regionalColor: string;
  atlasHref: string;
  objectPosition?: string;
};

const REGIONAL_COLORS: Record<string, string> = {
  "Sumatera": "#B85C38",
  "Jawa": "#2B4C8C",
  "Kalimantan": "#1A5C3A",
  "Sulawesi": "#D4691E",
  "Bali & Nusa Tenggara": "#6B3FA0",
  "Maluku": "#1B7A7A",
  "Papua": "#1A4A7A",
};

const FLAGSHIP_IDS = [
  "di-yogyakarta",
  "bali",
  "sumatera-barat",
  "kalimantan-timur",
  "sulawesi-selatan",
  "maluku",
  "nusa-tenggara-timur",
  "papua-barat-daya",
];

const FLAGSHIP_EDITORIAL: Record<string, {
  tagline: string;
  editorialHook: string;
  whyFlagship: string;
  signatures: [string, string, string];
  dominantPillar: string;
  objectPosition?: string;
}> = {
  "di-yogyakarta": {
    tagline: "Warisan yang terus belajar dan mencipta.",
    editorialHook: "Warisan keraton, pendidikan, dan kreativitas.",
    whyFlagship: "Mempertemukan tradisi Jawa, ruang pendidikan, seni pertunjukan, batik, kuliner, dan ekonomi kreatif dalam kota yang terus berkembang.",
    signatures: ["Keraton", "Batik", "Gudeg"],
    dominantPillar: "Tradisi",
    objectPosition: "50% 46%",
  },
  "bali": {
    tagline: "Tradisi hidup dalam lanskap dunia.",
    editorialHook: "Tradisi hidup, lanskap budaya, dan perjalanan global.",
    whyFlagship: "Menunjukkan bagaimana ritual, arsitektur, seni, alam, dan pariwisata dapat membentuk identitas daerah yang dikenal dunia tanpa kehilangan akar lokal.",
    signatures: ["Pura", "Subak", "Tari Bali"],
    dominantPillar: "Yatra",
  },
  "sumatera-barat": {
    tagline: "Identitas matrilineal dalam arsitektur dan rasa.",
    editorialHook: "Matrilineal Minangkabau, Rumah Gadang, dan rendang.",
    whyFlagship: "Menghubungkan struktur sosial Minangkabau, arsitektur ikonik, tradisi merantau, sastra lisan, dan kuliner yang memiliki pengaruh global.",
    signatures: ["Rumah Gadang", "Rendang", "Minangkabau"],
    dominantPillar: "Rasa",
  },
  "kalimantan-timur": {
    tagline: "Hutan, sungai, dan gerbang masa depan Indonesia.",
    editorialHook: "Mahakam, kebudayaan Dayak–Paser, hutan, dan IKN.",
    whyFlagship: "Menyatukan ekologi Kalimantan, jalur Sungai Mahakam, keberagaman budaya lokal, industri, konservasi, dan pembangunan pusat pemerintahan baru.",
    signatures: ["Mahakam", "Budaya Dayak", "IKN"],
    dominantPillar: "Masa Depan",
  },
  "sulawesi-selatan": {
    tagline: "Laut, aksara, dan peradaban pelaut.",
    editorialHook: "Bugis–Makassar–Toraja, Pinisi, dan Lontara.",
    whyFlagship: "Memperlihatkan pertemuan tradisi maritim, arsitektur dataran tinggi, aksara, perdagangan, dan jaringan perjalanan yang membentuk Indonesia timur.",
    signatures: ["Pinisi", "Lontara", "Toraja"],
    dominantPillar: "Aksara",
  },
  "maluku": {
    tagline: "Dari kepulauan rempah menuju dunia.",
    editorialHook: "Kepulauan rempah dan jaringan maritim dunia.",
    whyFlagship: "Menempatkan Maluku sebagai simpul penting sejarah global melalui pala, cengkeh, pelayaran, benteng, musik, dan kehidupan antarpulau.",
    signatures: ["Banda", "Pala", "Cengkeh"],
    dominantPillar: "Sejarah",
  },
  "nusa-tenggara-timur": {
    tagline: "Pulau-pulau yang menenun alam dan ingatan.",
    editorialHook: "Tenun, Komodo, megalitik, dan keragaman kepulauan.",
    whyFlagship: "Menggabungkan ekologi unik, warisan megalitik, tradisi tenun, desa adat, dan perjalanan antarpulau yang kaya identitas lokal.",
    signatures: ["Tenun Ikat", "Komodo", "Megalitik"],
    dominantPillar: "Alam",
  },
  "papua-barat-daya": {
    tagline: "Laut paling kaya, cerita pesisir yang hidup.",
    editorialHook: "Raja Ampat, budaya pesisir, dan biodiversitas laut.",
    whyFlagship: "Menampilkan hubungan antara masyarakat pesisir, pulau karst, konservasi, pengetahuan lokal, dan salah satu ekosistem laut terkaya di dunia.",
    signatures: ["Raja Ampat", "Budaya Pesisir", "Laut Papua"],
    dominantPillar: "Alam",
  },
};

export const flagshipProvinces: FlagshipProvince[] = FLAGSHIP_IDS.map((id, index) => {
  const province = provinceMapData.find(p => p.id === id);
  const panelData = provincePanelData.find(p => p.provinceId === id);
  const editorial = FLAGSHIP_EDITORIAL[id];

  if (!province || !panelData || !editorial) {
    throw new Error(`Data missing for flagship province: ${id}`);
  }

  return {
    provinceId: province.id,
    slug: province.id, // currently id is used as slug
    name: province.name,
    region: province.region,
    index: index + 1,
    tagline: editorial.tagline,
    editorialHook: editorial.editorialHook,
    whyFlagship: editorial.whyFlagship,
    signatures: editorial.signatures,
    dominantPillar: editorial.dominantPillar,
    materialCount: panelData.materialCount || 0,
    heroImage: province.assets.hero,
    thumbnail: province.assets.thumb,
    heroAlt: `Hero image of ${province.name}`,
    thumbnailAlt: `Thumbnail of ${province.name}`,
    regionalColor: REGIONAL_COLORS[province.region] || "#2B4C8C",
    atlasHref: province.href,
    objectPosition: editorial.objectPosition,
  };
});
