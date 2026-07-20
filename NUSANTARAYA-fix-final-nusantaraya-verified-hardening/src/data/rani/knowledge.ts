import { RaniSource, RaniKnowledgeRecord } from "@/types/rani";

export const raniSources: Record<string, RaniSource> = {
  "src-jalur-rempah": {
    id: "src-jalur-rempah",
    label: "Jalur Rempah Nusantara",
    publisher: "Kemdikbudristek",
    url: "https://jalurrempah.kemdikbud.go.id/",
    sourceType: "government",
    relatedRecordIds: ["know-maluku-rempah"],
  },
  "src-etika-bali": {
    id: "src-etika-bali",
    label: "Panduan Etika Wisatawan",
    publisher: "Dinas Pariwisata Bali",
    sourceType: "official-tourism",
    relatedRecordIds: ["know-etika-pura"],
  },
  "src-kuliner-minang": {
    id: "src-kuliner-minang",
    label: "Ensiklopedia Kuliner Minangkabau",
    publisher: "Balai Pelestarian Nilai Budaya",
    sourceType: "academic",
    relatedRecordIds: ["know-rendang"],
  },
};

export const raniKnowledgeBase: RaniKnowledgeRecord[] = [
  {
    id: "know-maluku-rempah",
    type: "culture",
    title: "Jalur Rempah Maluku",
    summary: "Maluku dikenal sebagai 'The Spice Islands', pusat rempah dunia pada masa lampau yang mengubah sejarah global.",
    locale: "id",
    provinceIds: ["maluku", "maluku-utara"],
    regionIds: ["maluku-dan-papua"],
    layerIds: ["rempah", "sejarah"],
    modeTags: ["explore", "learn"],
    keywords: ["rempah", "maluku", "cengkeh", "pala", "sejarah"],
    sourceIds: ["src-jalur-rempah"],
    actionTargets: [
      { type: "OPEN_PROVINCE_ATLAS", payload: { provinceId: "maluku" } }
    ],
    isDemoPreset: true,
  },
  {
    id: "know-etika-pura",
    type: "etiquette",
    title: "Etika Mengunjungi Pura",
    summary: "Saat mengunjungi Pura di Bali, wajib mengenakan pakaian sopan dan memakai kamen (kain) serta selendang yang diikatkan di pinggang.",
    locale: "id",
    provinceIds: ["bali"],
    regionIds: ["bali-nusa-tenggara"],
    layerIds: ["budaya"],
    modeTags: ["tourist"],
    keywords: ["etika", "pura", "bali", "pakaian", "sopan"],
    sourceIds: ["src-etika-bali"],
    actionTargets: [
      { type: "OPEN_PROVINCE_SUMMARY", payload: { provinceId: "bali" } }
    ],
    isDemoPreset: true,
  },
  {
    id: "know-rendang",
    type: "culinary",
    title: "Rendang Minangkabau",
    summary: "Rendang adalah masakan daging asli Minangkabau yang dimasak dengan suhu rendah dalam waktu lama menggunakan aneka rempah dan santan.",
    locale: "id",
    provinceIds: ["sumatera-barat"],
    regionIds: ["sumatera"],
    layerIds: ["kuliner", "budaya"],
    modeTags: ["explore", "tourist"],
    keywords: ["rendang", "kuliner", "makanan", "minang", "padang", "sumatera barat"],
    sourceIds: ["src-kuliner-minang"],
    actionTargets: [
      { type: "OPEN_PROVINCE_ATLAS", payload: { provinceId: "sumatera-barat" } }
    ],
    isDemoPreset: true,
  }
];
