export type FeatureStatus = "live" | "soon";

export interface FeatureData {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  chips: string[];
  icon: string;
  image: string;
  color: string;
  href: string;
  status?: FeatureStatus;
  featured?: boolean;
}

export const mainFeatures: FeatureData[] = [
  {
    id: "route-planner",
    title: "Nusa Route Planner",
    eyebrow: "Rancang Perjalanan",
    description:
      "Susun itinerary lintas provinsi berdasarkan durasi, minat, wilayah, budget, dan gaya traveler.",
    chips: ["3/5/7 Hari", "Budget", "Itinerary"],
    icon: "/assets/ui/icons/icon-route.svg",
    image: "/assets/features/route-planner-preview.png",
    color: "#C9A84C",
    href: "/routes?source=home-feature",
    featured: true
  },
  {
    id: "nusa-map",
    title: "Nusa Map",
    eyebrow: "Peta Interaktif",
    description:
      "Jelajahi 38 provinsi melalui peta interaktif dengan layer budaya, kuliner, alam, sejarah, dan masa depan.",
    chips: ["38 Provinsi", "Layer", "Flagship"],
    icon: "/assets/ui/icons/icon-map.svg",
    image: "/assets/features/nusa-map-previe.png",
    color: "#2D6BE4",
    href: "/explore"
  },
  {
    id: "archive",
    title: "Nusa Archive",
    eyebrow: "Ensiklopedia Budaya",
    description:
      "Temukan rumah adat, tarian, alat musik, pakaian adat, aksara, cerita rakyat, dan sumber budaya terpercaya.",
    chips: ["Budaya", "Search", "Sumber"],
    icon: "/assets/ui/icons/icon-archive.svg",
    image: "/assets/features/archive-preview.png",
    color: "#8B2020",
    href: "/archive",
    status: "soon"
  },
  {
    id: "nusarasa",
    title: "NusaRasa",
    eyebrow: "Atlas Kuliner",
    description:
      "Jelajahi kuliner Nusantara, rempah, food story, food battle, dan peta rasa dari berbagai provinsi.",
    chips: ["Kuliner", "Rempah", "Food Battle"],
    icon: "/assets/ui/icons/icon-culinary.svg",
    image: "/assets/features/nusarasa-preview.png",
    color: "#D4691E",
    href: "/rasa",
    status: "soon"
  },
  {
    id: "passport",
    title: "Nusa Passport",
    eyebrow: "Gamifikasi",
    description:
      "Kumpulkan stempel provinsi, badge wilayah, dan level explorer saat menjelajahi Indonesia secara digital.",
    chips: ["Stempel", "Badge", "Level"],
    icon: "/assets/ui/icons/icon-passport.svg",
    image: "/assets/features/passport-preview.png",
    color: "#C9A84C",
    href: "/explore#passport-progress"
  },
  {
    id: "rani",
    title: "RANI AI Guide",
    eyebrow: "Pemandu Digital",
    description:
      "Tanya rekomendasi destinasi, etika budaya, itinerary, kuliner, dan tips perjalanan kepada RANI.",
    chips: ["AI", "Itinerary", "Etika"],
    icon: "/assets/ui/icons/icon-rani.svg",
    image: "/assets/features/rani-chat-preview.png",
    color: "#6B3FA0",
    href: "/rani",
    status: "soon"
  },
  {
    id: "future",
    title: "Nusa Future",
    eyebrow: "Digital City",
    description:
      "Lihat IKN, smart city, UMKM digital, ekonomi kreatif, desa wisata digital, dan green tourism Nusantara.",
    chips: ["IKN", "Smart City", "UMKM"],
    icon: "/assets/ui/icons/icon-future.svg",
    image: "/assets/features/future-preview.png",
    color: "#1A5C3A",
    href: "/future",
    status: "soon"
  }
];
