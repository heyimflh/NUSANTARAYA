/**
 * NUSA ARCHIVE — Category Definitions
 * 12 canonical categories for Indonesian cultural heritage
 */

import type { ArchiveCategoryDefinition } from "@/types/archive";

export const archiveCategories: readonly ArchiveCategoryDefinition[] = [
  {
    id: "rumah-adat",
    index: 1,
    name: "Rumah Adat",
    nameEn: "Traditional Houses",
    promise: "Arsitektur yang menyimpan kosmologi dan identitas komunitas.",
    promiseEn: "Architecture that holds cosmology and community identity.",
    icon: "home",
    accentColor: "#B65D43",
    accentColorSoft: "#EAD5C8",
  },
  {
    id: "tarian",
    index: 2,
    name: "Tarian Tradisional",
    nameEn: "Traditional Dances",
    promise: "Gerak tubuh yang menceritakan sejarah, ritual, dan perayaan.",
    promiseEn: "Body movements narrating history, rituals, and celebrations.",
    icon: "music",
    accentColor: "#D0A331",
    accentColorSoft: "#F2E5B8",
  },
  {
    id: "alat-musik",
    index: 3,
    name: "Alat Musik",
    nameEn: "Musical Instruments",
    promise: "Bunyi yang menyeberangi laut dan menyatukan komunitas.",
    promiseEn: "Sounds that cross seas and unite communities.",
    icon: "volume-2",
    accentColor: "#34776C",
    accentColorSoft: "#DDE3D5",
  },
  {
    id: "pakaian-adat",
    index: 4,
    name: "Pakaian Adat",
    nameEn: "Traditional Attire",
    promise: "Kain dan busana yang menyimpan status, doa, dan identitas.",
    promiseEn: "Fabrics and garments holding status, prayers, and identity.",
    icon: "shirt",
    accentColor: "#75586D",
    accentColorSoft: "#EAD5C8",
  },
  {
    id: "upacara-adat",
    index: 5,
    name: "Upacara Adat",
    nameEn: "Traditional Ceremonies",
    promise: "Ritual yang menandai peralihan hidup dan hubungan dengan alam.",
    promiseEn: "Rituals marking life transitions and connection with nature.",
    icon: "flame",
    accentColor: "#7A342E",
    accentColorSoft: "#EAD5C8",
  },
  {
    id: "cerita-rakyat",
    index: 6,
    name: "Cerita Rakyat",
    nameEn: "Folk Tales",
    promise: "Narasi lisan yang mengajarkan etika, asal-usul, dan harapan.",
    promiseEn: "Oral narratives teaching ethics, origins, and hopes.",
    icon: "book-open",
    accentColor: "#6F7D62",
    accentColorSoft: "#DDE3D5",
  },
  {
    id: "bahasa-aksara",
    index: 7,
    name: "Bahasa & Aksara",
    nameEn: "Languages & Scripts",
    promise: "Aksara dan bahasa sebagai rumah ingatan dan identitas.",
    promiseEn: "Scripts and languages as houses of memory and identity.",
    icon: "type",
    accentColor: "#34776C",
    accentColorSoft: "#DDE3D5",
  },
  {
    id: "senjata-tradisional",
    index: 8,
    name: "Senjata Tradisional",
    nameEn: "Traditional Weapons",
    promise: "Benda berkekuatan simbolik yang melampaui fungsi tempur.",
    promiseEn: "Objects with symbolic power beyond combat function.",
    icon: "shield",
    accentColor: "#3A332D",
    accentColorSoft: "#E7DAC5",
  },
  {
    id: "kerajinan",
    index: 9,
    name: "Kerajinan Tangan",
    nameEn: "Handicrafts",
    promise: "Keterampilan tangan yang menjadi warisan dan penghidupan.",
    promiseEn: "Hand skills that become heritage and livelihoods.",
    icon: "palette",
    accentColor: "#B65D43",
    accentColorSoft: "#EAD5C8",
  },
  {
    id: "motif-kain",
    index: 10,
    name: "Batik, Tenun & Motif",
    nameEn: "Batik, Weaving & Patterns",
    promise: "Serat dan warna yang menceritakan asal, status, dan harapan.",
    promiseEn: "Fibers and colors narrating origin, status, and hopes.",
    icon: "layers",
    accentColor: "#D0A331",
    accentColorSoft: "#F2E5B8",
  },
  {
    id: "tokoh-daerah",
    index: 11,
    name: "Tokoh Daerah",
    nameEn: "Regional Figures",
    promise: "Individu yang membentuk sejarah dan identitas wilayahnya.",
    promiseEn: "Individuals who shaped their region's history and identity.",
    icon: "user",
    accentColor: "#75586D",
    accentColorSoft: "#EAD5C8",
  },
  {
    id: "kosmologi",
    index: 12,
    name: "Kepercayaan & Kosmologi",
    nameEn: "Beliefs & Cosmology",
    promise: "Sistem kepercayaan yang menghubungkan manusia, alam, dan leluhur.",
    promiseEn: "Belief systems connecting humans, nature, and ancestors.",
    icon: "sun",
    accentColor: "#7A342E",
    accentColorSoft: "#EAD5C8",
  },
] as const;

export const archiveCategoryMap = new Map(
  archiveCategories.map((c) => [c.id, c])
);

export function getArchiveCategoryById(id: string): ArchiveCategoryDefinition | undefined {
  return archiveCategoryMap.get(id as ArchiveCategoryDefinition["id"]);
}

export function getArchiveCategoryName(id: string, locale: "id" | "en" = "id"): string {
  const cat = archiveCategoryMap.get(id as ArchiveCategoryDefinition["id"]);
  if (!cat) return id;
  return locale === "en" ? cat.nameEn : cat.name;
}
