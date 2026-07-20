export type ExploreLayerId =
  | "all"
  | "budaya"
  | "kuliner"
  | "alam"
  | "sejarah"
  | "rempah"
  | "future";

export type ExploreModeId = "explore" | "tourist" | "learn";

export const exploreLayers = [
  {
    id: "all",
    label: "Semua",
    shortLabel: "Semua",
    description: "Tampilkan semua provinsi dan cerita Nusantara.",
    icon: "Map",
  },
  {
    id: "budaya",
    label: "Budaya",
    shortLabel: "Budaya",
    description: "Rumah adat, tarian, festival, upacara, dan tradisi daerah.",
    icon: "Palette",
  },
  {
    id: "kuliner",
    label: "Kuliner",
    shortLabel: "Kuliner",
    description: "Makanan khas, rempah, food story, dan peta rasa daerah.",
    icon: "Utensils",
  },
  {
    id: "alam",
    label: "Alam",
    shortLabel: "Alam",
    description: "Gunung, laut, hutan, desa wisata, dan hidden gems.",
    icon: "Mountain",
  },
  {
    id: "sejarah",
    label: "Sejarah",
    shortLabel: "Sejarah",
    description: "Kerajaan, situs warisan, tokoh daerah, dan timeline masa lalu.",
    icon: "Landmark",
  },
  {
    id: "rempah",
    label: "Jalur Rempah",
    shortLabel: "Rempah",
    description: "Pala, cengkeh, pelabuhan, maritim, dan perdagangan Nusantara.",
    icon: "Ship",
  },
  {
    id: "future",
    label: "Kota Masa Depan",
    shortLabel: "Future",
    description: "IKN, smart city, UMKM digital, dan ekonomi kreatif daerah.",
    icon: "Building2",
  },
] as const;

export const exploreModes = [
  {
    id: "explore",
    label: "Explore",
    title: "Explore Mode",
    description: "Eksplorasi bebas budaya, rasa, destinasi, dan masa depan.",
    icon: "Compass",
  },
  {
    id: "tourist",
    label: "Tourist",
    title: "Tourist Mode",
    description: "Fokus destinasi, itinerary, kuliner, dan etika wisata.",
    icon: "MapPin",
  },
  {
    id: "learn",
    label: "Learn",
    title: "Learn Mode",
    description: "Fokus sejarah, budaya, arsip, aksara, dan sumber data.",
    icon: "BookOpen",
  },
] as const;
