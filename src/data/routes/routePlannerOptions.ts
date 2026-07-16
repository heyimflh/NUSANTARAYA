/**
 * NUSANTARAYA — Route Planner Form Options
 * Static option definitions for duration, interest, budget, and pace selectors.
 * Labels and descriptions are in Indonesian (primary) with English fallback ready.
 */

import type {
  RouteDuration,
  RouteInterest,
  BudgetLevel,
  TravelPace,
} from "@/types/route-planner";

// ─── Duration Options ────────────────────────────────────────────────────────

export interface DurationOption {
  value: RouteDuration;
  label: string;
  description: string;
  labelEn: string;
  descriptionEn: string;
}

export const DURATION_OPTIONS: readonly DurationOption[] = [
  {
    value: 3,
    label: "3 hari",
    description: "Jelajah singkat",
    labelEn: "3 days",
    descriptionEn: "Quick exploration",
  },
  {
    value: 5,
    label: "5 hari",
    description: "Ritme paling seimbang",
    labelEn: "5 days",
    descriptionEn: "Most balanced pace",
  },
  {
    value: 7,
    label: "7 hari",
    description: "Eksplorasi lebih mendalam",
    labelEn: "7 days",
    descriptionEn: "Deeper exploration",
  },
] as const;

// ─── Interest Options ────────────────────────────────────────────────────────

export interface InterestOption {
  value: RouteInterest;
  label: string;
  labelEn: string;
  icon: string; // Lucide icon name
}

export const INTEREST_OPTIONS: readonly InterestOption[] = [
  { value: "budaya", label: "Budaya", labelEn: "Culture", icon: "Landmark" },
  { value: "alam", label: "Alam", labelEn: "Nature", icon: "Mountain" },
  { value: "kuliner", label: "Kuliner", labelEn: "Culinary", icon: "UtensilsCrossed" },
  { value: "sejarah", label: "Sejarah", labelEn: "History", icon: "BookOpen" },
  { value: "petualangan", label: "Petualangan", labelEn: "Adventure", icon: "Compass" },
  { value: "relaksasi", label: "Relaksasi", labelEn: "Relaxation", icon: "Waves" },
  { value: "hidden-gems", label: "Hidden Gems", labelEn: "Hidden Gems", icon: "Gem" },
  { value: "kota-kreatif", label: "Kota & Kreativitas", labelEn: "Cities & Creativity", icon: "Building2" },
] as const;

// ─── Budget Options ──────────────────────────────────────────────────────────

export interface BudgetOption {
  value: BudgetLevel;
  label: string;
  labelEn: string;
  symbol: string;
  description: string;
  descriptionEn: string;
}

export const BUDGET_OPTIONS: readonly BudgetOption[] = [
  {
    value: "hemat",
    label: "Hemat",
    labelEn: "Budget",
    symbol: "Rp",
    description: "Pilihan lokal ekonomis dan aktivitas terjangkau",
    descriptionEn: "Local budget-friendly options and affordable activities",
  },
  {
    value: "menengah",
    label: "Menengah",
    labelEn: "Comfort",
    symbol: "RpRp",
    description: "Keseimbangan kenyamanan dan pengalaman",
    descriptionEn: "Balance of comfort and experience",
  },
  {
    value: "premium",
    label: "Premium",
    labelEn: "Premium",
    symbol: "RpRpRp",
    description: "Kenyamanan lebih tinggi dan pengalaman terkurasi",
    descriptionEn: "Higher comfort and curated experiences",
  },
  {
    value: "fleksibel",
    label: "Fleksibel",
    labelEn: "Flexible",
    symbol: "±",
    description: "Kecocokan pengalaman menjadi prioritas",
    descriptionEn: "Experience fit is the priority",
  },
] as const;

// ─── Travel Pace Options ─────────────────────────────────────────────────────

export interface PaceOption {
  value: TravelPace;
  label: string;
  labelEn: string;
  activitiesPerDay: string;
  description: string;
  descriptionEn: string;
}

export const PACE_OPTIONS: readonly PaceOption[] = [
  {
    value: "santai",
    label: "Santai",
    labelEn: "Relaxed",
    activitiesPerDay: "1–2",
    description: "Waktu jeda lebih panjang, perpindahan minimal",
    descriptionEn: "More rest time, minimal transfers",
  },
  {
    value: "seimbang",
    label: "Seimbang",
    labelEn: "Balanced",
    activitiesPerDay: "2–3",
    description: "Perpaduan eksplorasi dan istirahat",
    descriptionEn: "Mix of exploration and rest",
  },
  {
    value: "eksploratif",
    label: "Eksploratif",
    labelEn: "Explorative",
    activitiesPerDay: "3–4",
    description: "Lebih aktif, tetapi tetap realistis",
    descriptionEn: "More active, yet realistic",
  },
] as const;

// ─── Region Display Data (for form cards) ────────────────────────────────────

export interface RegionDisplayOption {
  id: string;
  label: string;
  labelEn: string;
  keywords: string;
  keywordsEn: string;
  sampleProvinces: string[];
  accentColor: string;
}

export const REGION_DISPLAY_OPTIONS: readonly RegionDisplayOption[] = [
  {
    id: "sumatera",
    label: "Sumatera",
    labelEn: "Sumatra",
    keywords: "Tradisi, rasa, jalur maritim",
    keywordsEn: "Tradition, flavors, maritime route",
    sampleProvinces: ["Aceh", "Sumatera Barat", "Lampung"],
    accentColor: "var(--color-sumatera)",
  },
  {
    id: "jawa",
    label: "Jawa",
    labelEn: "Java",
    keywords: "Warisan, kota kreatif, kuliner, sejarah",
    keywordsEn: "Heritage, creative cities, culinary, history",
    sampleProvinces: ["Yogyakarta", "Jawa Tengah", "Jawa Timur"],
    accentColor: "var(--color-jawa)",
  },
  {
    id: "kalimantan",
    label: "Kalimantan",
    labelEn: "Kalimantan",
    keywords: "Hutan, sungai, komunitas, masa depan",
    keywordsEn: "Forests, rivers, communities, future",
    sampleProvinces: ["Kalimantan Barat", "Kalimantan Timur"],
    accentColor: "var(--color-kalimantan)",
  },
  {
    id: "sulawesi",
    label: "Sulawesi",
    labelEn: "Sulawesi",
    keywords: "Laut, aksara, pegunungan, pelaut",
    keywordsEn: "Sea, scripts, mountains, sailors",
    sampleProvinces: ["Sulawesi Selatan", "Sulawesi Utara"],
    accentColor: "var(--color-sulawesi)",
  },
  {
    id: "bali-nusa-tenggara",
    label: "Bali–Nusa Tenggara",
    labelEn: "Bali–Nusa Tenggara",
    keywords: "Tradisi hidup, pulau, lanskap kontras",
    keywordsEn: "Living traditions, islands, contrasting landscapes",
    sampleProvinces: ["Bali", "NTB", "NTT"],
    accentColor: "var(--color-bali-nusa)",
  },
  {
    id: "maluku",
    label: "Maluku",
    labelEn: "Maluku",
    keywords: "Rempah, sejarah, kepulauan",
    keywordsEn: "Spices, history, archipelago",
    sampleProvinces: ["Maluku", "Maluku Utara"],
    accentColor: "var(--color-maluku)",
  },
  {
    id: "papua",
    label: "Papua",
    labelEn: "Papua",
    keywords: "Biodiversitas, komunitas, lanskap luas",
    keywordsEn: "Biodiversity, communities, vast landscapes",
    sampleProvinces: ["Papua", "Papua Barat Daya"],
    accentColor: "var(--color-papua)",
  },
] as const;
