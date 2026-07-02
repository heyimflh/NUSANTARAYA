export type MapLayerId = "all" | "budaya" | "kuliner" | "alam" | "sejarah" | "rempah" | "future";

export interface MapLayer {
  id: MapLayerId;
  label: string;
  icon: string;
}

export const mapPreviewLayers: MapLayer[] = [
  {
    id: "all",
    label: "Semua",
    icon: "/assets/ui/icons/icon-map.svg" // Fallback if doesn't exist
  },
  {
    id: "budaya",
    label: "Budaya",
    icon: "/assets/map/pins/pin-budaya-nusantara.svg"
  },
  {
    id: "kuliner",
    label: "Kuliner",
    icon: "/assets/map/pins/pin-kuliner-nusantara.svg"
  },
  {
    id: "alam",
    label: "Alam",
    icon: "/assets/map/pins/pin-alam-nusantara.svg"
  },
  {
    id: "sejarah",
    label: "Sejarah",
    icon: "/assets/map/pins/pin-sejarah-nusantara.svg"
  },
  {
    id: "rempah",
    label: "Rempah",
    icon: "/assets/map/pins/pin-rempah-nusantara.svg"
  },
  {
    id: "future",
    label: "Kota Masa Depan",
    icon: "/assets/map/pins/pin-kota-nusantara.svg"
  }
];

export interface FeaturedProvince {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  highlights: string[];
  category: MapLayerId[];
  thumbnail: string;
  pinIcon: string;
  previewPosition: { x: number; y: number };
  color: string;
  href: string;
}

export const featuredProvinces: FeaturedProvince[] = [
  {
    id: "sumatera-barat",
    name: "Sumatera Barat",
    region: "Sumatera",
    tagline: "Rasa Minangkabau dan Warisan Rumah Gadang",
    description: "Menjadi saksi bisu kejayaan kuliner dan budaya Minangkabau. Dari megahnya Rumah Gadang yang kaya akan filosofi hingga kelezatan Rendang yang mendunia, Sumatera Barat menawarkan pesona alam yang dipadukan dengan warisan tradisi yang masih sangat kental.",
    highlights: ["Rendang", "Rumah Gadang", "Jam Gadang"],
    category: ["kuliner", "budaya"],
    thumbnail: "/assets/province/sumatera-barat/thumb.webp",
    pinIcon: "/assets/map/pins/pin-kuliner-nusantara.svg",
    previewPosition: { x: 23, y: 38 }, 
    color: "#B85C38",
    href: "/provinsi/sumatera-barat"
  },
  {
    id: "di-yogyakarta",
    name: "DI Yogyakarta",
    region: "Jawa",
    tagline: "Jantung Budaya Jawa dan Kota Pelajar",
    description: "Kota yang tak pernah kehilangan jiwa keratonnya. Yogyakarta adalah pusat kebudayaan Jawa yang memadukan keanggunan seni batik, kemegahan candi, serta kearifan lokal dalam balutan nuansa kota pelajar yang klasik dan berbudaya.",
    highlights: ["Keraton", "Batik", "Gudeg"],
    category: ["budaya", "sejarah"],
    thumbnail: "/assets/province/di-yogyakarta/thumb.webp",
    pinIcon: "/assets/map/pins/pin-budaya-nusantara.svg",
    previewPosition: { x: 38, y: 73 },
    color: "#2B4C8C",
    href: "/provinsi/di-yogyakarta"
  },
  {
    id: "bali",
    name: "Bali",
    region: "Bali & Nusa Tenggara",
    tagline: "Pulau Ritual, Seni, dan Lanskap Tropis",
    description: "Pulau Dewata yang menjadi magnet dunia. Di setiap sudutnya, Bali memancarkan pesona spiritual melalui pura-pura yang indah, harmoni alam tropis dari sawah subak hingga pantai, dan tarian tradisional yang menghipnotis.",
    highlights: ["Pura", "Tari Bali", "Subak"],
    category: ["budaya", "alam"],
    thumbnail: "/assets/province/bali/thumb.webp",
    pinIcon: "/assets/map/pins/pin-budaya-nusantara.svg",
    previewPosition: { x: 50, y: 75 },
    color: "#6B3FA0",
    href: "/provinsi/bali"
  },
  {
    id: "kalimantan-timur",
    name: "Kalimantan Timur",
    region: "Kalimantan",
    tagline: "Gerbang IKN dan Masa Depan Nusantara",
    description: "Menjadi simbol peradaban baru Indonesia dengan berdirinya Ibu Kota Nusantara (IKN). Kalimantan Timur adalah perpaduan antara lebatnya hutan hujan tropis, aliran Sungai Mahakam yang megah, dan visi masa depan yang cerah.",
    highlights: ["IKN", "Hutan", "Mahakam"],
    category: ["future", "alam"],
    thumbnail: "/assets/province/kalimantan-timur/thumb.webp",
    pinIcon: "/assets/map/pins/pin-kota-nusantara.svg",
    previewPosition: { x: 55, y: 44 },
    color: "#1A5C3A",
    href: "/provinsi/kalimantan-timur"
  },
  {
    id: "sulawesi-selatan",
    name: "Sulawesi Selatan",
    region: "Sulawesi",
    tagline: "Pinisi, Toraja, dan Warisan Maritim",
    description: "Tanah kelahiran para pelaut ulung. Sulawesi Selatan menyimpan kekayaan maritim melalui kapal Pinisi yang legendaris, serta tradisi kuno Tana Toraja yang mistis, berpadu dengan kekayaan kuliner khas yang kaya rempah.",
    highlights: ["Pinisi", "Toraja", "Coto"],
    category: ["budaya", "kuliner"],
    thumbnail: "/assets/province/sulawesi-selatan/thumb.webp",
    pinIcon: "/assets/map/pins/pin-budaya-nusantara.svg",
    previewPosition: { x: 56, y: 62 },
    color: "#D4691E",
    href: "/provinsi/sulawesi-selatan"
  },
  {
    id: "maluku",
    name: "Maluku",
    region: "Maluku",
    tagline: "Jantung Jalur Rempah Nusantara",
    description: "Kepulauan Rempah yang pernah memikat bangsa-bangsa Eropa. Maluku menyuguhkan keindahan laut yang tak tertandingi di Banda Neira, sejarah masa lalu yang epik, serta keharuman pala dan cengkeh yang melegenda.",
    highlights: ["Pala", "Banda Neira", "Cengkeh"],
    category: ["rempah", "sejarah"],
    thumbnail: "/assets/province/maluku/thumb.webp",
    pinIcon: "/assets/map/pins/pin-rempah-nusantara.svg",
    previewPosition: { x: 80, y: 55 },
    color: "#1B7A7A",
    href: "/provinsi/maluku"
  },
  {
    id: "nusa-tenggara-timur",
    name: "Nusa Tenggara Timur",
    region: "Bali & Nusa Tenggara",
    tagline: "Komodo, Tenun, dan Laut Timur Indonesia",
    description: "Bumi komodo dengan pesona alam yang eksotis. NTT memanjakan mata dengan savana yang luas, kekayaan bawah laut Labuan Bajo yang spektakuler, serta keindahan kain tenun yang sarat akan makna budaya.",
    highlights: ["Komodo", "Labuan Bajo", "Tenun"],
    category: ["alam", "budaya"],
    thumbnail: "/assets/province/nusa-tenggara-timur/thumb.webp",
    pinIcon: "/assets/map/pins/pin-alam-nusantara.svg",
    previewPosition: { x: 62, y: 78 },
    color: "#6B3FA0",
    href: "/provinsi/nusa-tenggara-timur"
  },
  {
    id: "papua-barat-daya",
    name: "Papua Barat Daya",
    region: "Papua",
    tagline: "Raja Ampat dan Keajaiban Laut Nusantara",
    description: "Surga tersembunyi di ujung timur Indonesia. Dengan kepulauan Raja Ampat sebagai ikonnya, Papua Barat Daya menyajikan keajaiban biodiversitas laut terkaya di dunia, dihiasi dengan ragam budaya lokal yang autentik.",
    highlights: ["Raja Ampat", "Tifa", "Biodiversitas"],
    category: ["alam", "budaya"],
    thumbnail: "/assets/province/papua-barat-daya/thumb.webp",
    pinIcon: "/assets/map/pins/pin-alam-nusantara.svg",
    previewPosition: { x: 88, y: 48 },
    color: "#1A4A7A",
    href: "/provinsi/papua-barat-daya"
  }
];
