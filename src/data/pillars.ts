export type Pillar = {
  letter: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
  color: string;
};

export const nusantarayaPillars: Pillar[] = [
  {
    letter: "S",
    name: "Sejarah",
    slug: "sejarah",
    tagline: "Jejak masa lalu yang membentuk Nusantara.",
    description:
      "Telusuri kerajaan, jalur rempah, tokoh daerah, situs warisan, dan timeline sejarah tiap provinsi.",
    features: ["Timeline", "Jalur Rempah", "Situs Warisan"],
    icon: "/assets/map/pilars/pilar-sejarah.svg",
    image: "/assets/pillars/sejarah.webp",
    color: "#C9A84C",
  },
  {
    letter: "A",
    name: "Aksara",
    slug: "aksara",
    tagline: "Bahasa dan tulisan daerah yang menjaga ingatan.",
    description:
      "Kenali aksara Jawa, Bali, Sunda, Lontara, Batak, Rejang, kosakata lokal, dan suara bahasa daerah.",
    features: ["Aksara Lab", "Kosakata", "Audio"],
    icon: "/assets/map/pilars/pilar-aksara.svg",
    image: "/assets/pillars/aksara.webp",
    color: "#2D6BE4",
  },
  {
    letter: "N",
    name: "Narasi",
    slug: "narasi",
    tagline: "Cerita rakyat, legenda, dan suara daerah.",
    description:
      "Masuki cerita rakyat, micro-story, legenda lokal, dan kisah orang pertama dari benda, rasa, dan tempat Nusantara.",
    features: ["Stories", "Legenda", "Micro Story"],
    icon: "/assets/map/pilars/pilar-narasi.svg",
    image: "/assets/pillars/narasi.webp",
    color: "#6B3FA0",
  },
  {
    letter: "T",
    name: "Tradisi",
    slug: "tradisi",
    tagline: "Adat, seni, ritual, dan warisan yang tetap hidup.",
    description:
      "Jelajahi rumah adat, tarian, alat musik, pakaian adat, festival, upacara, dan kerajinan lokal.",
    features: ["Rumah Adat", "Festival", "Soundscape"],
    icon: "/assets/map/pilars/pilar-tradisi.svg",
    image: "/assets/pillars/tradisi.webp",
    color: "#8B2020",
  },
  {
    letter: "A",
    name: "Alam",
    slug: "alam",
    tagline: "Lanskap, destinasi, dan ruang hidup Nusantara.",
    description:
      "Temukan gunung, laut, hutan, desa wisata, hidden gems, green tourism, dan destinasi alam tiap wilayah.",
    features: ["Destinasi", "Hidden Gems", "Green Tourism"],
    icon: "/assets/map/pilars/pilar-alam.svg",
    image: "/assets/pillars/alam.webp",
    color: "#2D5A27",
  },
  {
    letter: "R",
    name: "Rasa",
    slug: "rasa",
    tagline: "Kuliner sebagai cerita yang bisa dicicipi.",
    description:
      "Jelajahi atlas kuliner Nusantara, rempah, food story, food battle, dan peta rasa dari tiap provinsi.",
    features: ["NusaRasa", "Food Battle", "Rempah"],
    icon: "/assets/map/pilars/pilar-rasa.svg",
    image: "/assets/pillars/rasa.webp",
    color: "#D4691E",
  },
  {
    letter: "Y",
    name: "Yatra",
    slug: "yatra",
    tagline: "Perjalanan, rute, passport, dan masa depan.",
    description:
      "Rencanakan perjalanan, kumpulkan stempel, tanya RANI, dan lihat bagaimana Nusantara bergerak menuju masa depan digital.",
    features: ["Route Planner", "Passport", "RANI"],
    icon: "/assets/map/pilars/pilar-yatra.svg",
    image: "/assets/pillars/yatra.webp",
    color: "#0D1B2A",
  },
];
