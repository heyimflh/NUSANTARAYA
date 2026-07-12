export type ProvinceSearchItem = {
  id: string;
  name: string;
  region: string;
  capital: string;
  tier: "deep" | "standard";
  categories: string[];
  highlights: string[];
  keywords: string[];
};

export const provinceSearchData: ProvinceSearchItem[] = [
  {
    id: "sumatera-barat",
    name: "Sumatera Barat",
    region: "Sumatera",
    capital: "Padang",
    tier: "deep",
    categories: ["kuliner", "budaya", "alam"],
    highlights: ["Rendang", "Rumah Gadang", "Jam Gadang"],
    keywords: ["rendang", "minang", "rumah gadang", "jam gadang", "padang"],
  },
  {
    id: "di-yogyakarta",
    name: "DI Yogyakarta",
    region: "Jawa",
    capital: "Yogyakarta",
    tier: "deep",
    categories: ["budaya", "sejarah", "kuliner"],
    highlights: ["Keraton", "Batik", "Gudeg"],
    keywords: ["keraton", "batik", "gudeg", "malioboro", "prambanan"],
  },
  {
    id: "bali",
    name: "Bali",
    region: "Bali & Nusa Tenggara",
    capital: "Denpasar",
    tier: "deep",
    categories: ["budaya", "alam", "kuliner"],
    highlights: ["Pura", "Tari Bali", "Subak"],
    keywords: ["pura", "subak", "tari kecak", "ubud", "denpasar"],
  },
  {
    id: "kalimantan-timur",
    name: "Kalimantan Timur",
    region: "Kalimantan",
    capital: "Samarinda",
    tier: "deep",
    categories: ["future", "alam"],
    highlights: ["IKN", "Hutan", "Mahakam"],
    keywords: ["ikn", "nusantara", "mahakam", "samarinda", "smart city"],
  },
  {
    id: "sulawesi-selatan",
    name: "Sulawesi Selatan",
    region: "Sulawesi",
    capital: "Makassar",
    tier: "deep",
    categories: ["budaya", "kuliner", "rempah"],
    highlights: ["Pinisi", "Toraja", "Coto"],
    keywords: ["pinisi", "toraja", "coto", "makassar", "maritim"],
  },
  {
    id: "nusa-tenggara-timur",
    name: "Nusa Tenggara Timur",
    region: "Bali & Nusa Tenggara",
    capital: "Kupang",
    tier: "deep",
    categories: ["alam", "budaya"],
    highlights: ["Komodo", "Labuan Bajo", "Tenun"],
    keywords: ["komodo", "labuan bajo", "tenun", "kupang", "savana"],
  },
  {
    id: "maluku",
    name: "Maluku",
    region: "Maluku",
    capital: "Ambon",
    tier: "deep",
    categories: ["rempah", "sejarah", "alam"],
    highlights: ["Pala", "Banda Neira", "Cengkeh"],
    keywords: ["pala", "cengkeh", "banda", "ambon", "jalur rempah"],
  },
  {
    id: "papua-barat-daya",
    name: "Papua Barat Daya",
    region: "Papua",
    capital: "Sorong",
    tier: "deep",
    categories: ["alam", "budaya"],
    highlights: ["Raja Ampat", "Tifa", "Biodiversitas"],
    keywords: ["raja ampat", "sorong", "tifa", "laut", "biodiversitas"],
  },
];
