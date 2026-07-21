import { FutureThemeId } from "@/types/future";

export type FutureTheme = {
  id: FutureThemeId;
  label: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  iconId: string;
  colorVar: string;
};

export const FUTURE_THEMES: FutureTheme[] = [
  {
    id: "civic-life",
    label: {
      id: "Kehidupan Warga",
      en: "Civic Life"
    },
    description: {
      id: "Pelayanan publik, ruang sosial, dan inovasi pelayanan kewargaan yang berpusat pada manusia.",
      en: "Public services, social spaces, and human-centric civic innovations."
    },
    iconId: "users",
    colorVar: "var(--future-solar)"
  },
  {
    id: "connected-mobility",
    label: {
      id: "Mobilitas Terhubung",
      en: "Connected Mobility"
    },
    description: {
      id: "Infrastruktur transportasi berkelanjutan dan konektivitas antarpulau yang inklusif.",
      en: "Sustainable transport infrastructure and inclusive inter-island connectivity."
    },
    iconId: "move",
    colorVar: "var(--future-terracotta)"
  },
  {
    id: "regenerative-environment",
    label: {
      id: "Lingkungan Regeneratif",
      en: "Regenerative Environment"
    },
    description: {
      id: "Upaya memulihkan alam, manajemen energi, dan pembangunan kota yang selaras dengan hutan.",
      en: "Nature restoration efforts, energy management, and forest-aligned urban development."
    },
    iconId: "leaf",
    colorVar: "var(--future-forest)"
  },
  {
    id: "creative-economy",
    label: {
      id: "Ekonomi Kreatif",
      en: "Creative Economy"
    },
    description: {
      id: "Pemberdayaan kreator lokal, UMKM, dan rantai nilai budaya menuju pasar masa depan.",
      en: "Empowering local creators, MSMEs, and cultural value chains for future markets."
    },
    iconId: "palette",
    colorVar: "var(--future-coral)"
  },
  {
    id: "digital-villages",
    label: {
      id: "Desa Digital",
      en: "Digital Villages"
    },
    description: {
      id: "Akses teknologi, literasi, dan pemberdayaan komunitas akar rumput tanpa mencabut akar budaya.",
      en: "Tech access, literacy, and grassroots empowerment without uprooting culture."
    },
    iconId: "home",
    colorVar: "var(--future-teal)"
  },
  {
    id: "food-ocean-resilience",
    label: {
      id: "Ketahanan Pangan & Laut",
      en: "Food & Ocean Resilience"
    },
    description: {
      id: "Inovasi agrikultur, maritim, dan kedaulatan pangan Nusantara menghadapi perubahan iklim.",
      en: "Agricultural and maritime innovations securing Nusantara's food sovereignty against climate change."
    },
    iconId: "waves",
    colorVar: "var(--future-plum)"
  },
  {
    id: "living-heritage",
    label: {
      id: "Warisan Hidup",
      en: "Living Heritage"
    },
    description: {
      id: "Adaptasi nilai tradisional, arsitektur vernakular, dan pengetahuan lokal ke dalam solusi kontemporer.",
      en: "Adapting traditional values, vernacular architecture, and local knowledge into contemporary solutions."
    },
    iconId: "history",
    colorVar: "var(--future-clay)"
  }
];

export function getFutureTheme(id: FutureThemeId): FutureTheme | undefined {
  return FUTURE_THEMES.find(t => t.id === id);
}
