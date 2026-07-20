import { RaniResponse } from "@/types/rani";

export const raniDemoPresets: RaniResponse[] = [
  {
    id: "demo-next-step",
    intent: "NEXT_STEP",
    title: "Langkah Berikutnya",
    summary: "Rekomendasi destinasi berikutnya.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Berdasarkan eksplorasimu, saya menyarankan untuk melanjutkan ke wilayah Sulawesi yang memiliki kekayaan alam dan budaya yang unik.",
      }
    ],
    reasonCodes: ["EDITORIAL_FALLBACK"],
    sourceIds: [],
    primaryAction: {
      id: "act-next-step",
      type: "APPLY_MAP_CONTEXT",
      label: "Buka Peta Sulawesi",
      payload: { regionId: "sulawesi" },
    },
    secondaryActions: [],
    followUpPrompts: [
      { id: "prompt-sulawesi-kuliner", label: "Apa kuliner khas Sulawesi?" }
    ],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-passport-milestone",
    intent: "PASSPORT_PROGRESS",
    title: "Milestone Passport",
    summary: "Informasi milestone Passport digitalmu.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Satu provinsi lagi akan melengkapi milestone wilayah Maluku. Ini akan meningkatkan status Penjelajahmu.",
      }
    ],
    reasonCodes: ["COMPLETES_REGION_BADGE"],
    sourceIds: [],
    primaryAction: {
      id: "act-open-maluku",
      type: "OPEN_PROVINCE_SUMMARY",
      label: "Jelajahi Maluku",
      payload: { provinceId: "maluku" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-jalur-rempah",
    intent: "EXPLAIN_CULTURE",
    title: "Jalur Rempah Maluku",
    summary: "Maluku sebagai pusat rempah dunia pada masa lampau.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Maluku dikenal sebagai 'The Spice Islands', pusat rempah dunia yang pernah memikat bangsa Eropa dan mengubah sejarah global.",
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: ["src-jalur-rempah"],
    primaryAction: {
      id: "act-atlas-maluku",
      type: "OPEN_PROVINCE_ATLAS",
      label: "Buka Atlas Maluku",
      payload: { provinceId: "maluku" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-etika-budaya",
    intent: "CULTURAL_ETIQUETTE",
    title: "Etika Budaya di Bali",
    summary: "Etika mengunjungi tempat suci.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Saat mengunjungi Pura di Bali, wisatawan diwajibkan memakai pakaian yang sopan, mengenakan kamen (kain), serta mengikatkan selendang di pinggang.",
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: ["src-etika-bali"],
    primaryAction: {
      id: "act-atlas-bali",
      type: "OPEN_PROVINCE_ATLAS",
      label: "Atlas Bali",
      payload: { provinceId: "bali" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-rencana-perjalanan",
    intent: "CREATE_ITINERARY",
    title: "Rencana Perjalanan 5 Hari",
    summary: "Rencana perjalanan singkat ke destinasi unggulan.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Berikut kerangka perjalanan 5 hari yang direkomendasikan:",
      },
      {
        type: "steps",
        items: [
          "Hari 1-2: Eksplorasi kota dan wisata sejarah utama.",
          "Hari 3: Menjelajah keajaiban alam di luar kota.",
          "Hari 4: Menikmati kuliner autentik dan aktivitas budaya.",
          "Hari 5: Belanja suvenir dan persiapan pulang."
        ]
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: [],
    primaryAction: {
      id: "act-route-planner",
      type: "OPEN_ROUTE_PLANNER",
      label: "Buka Route Planner",
      payload: { promptSummary: "Rencana 5 hari umum" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-kuliner-khas",
    intent: "RECOMMEND_CULINARY",
    title: "Kuliner Khas Minangkabau",
    summary: "Rekomendasi kuliner autentik.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Rendang adalah mahakarya kuliner Minangkabau, Sumatera Barat. Daging dimasak perlahan bersama santan dan aneka rempah hingga menghasilkan cita rasa yang kompleks dan tahan lama.",
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: ["src-kuliner-minang"],
    primaryAction: {
      id: "act-nusarasa-sumbar",
      type: "OPEN_NUSARASA",
      label: "Lihat di NusaRasa",
      payload: { provinceId: "sumatera-barat" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-bandingkan-wilayah",
    intent: "COMPARE_REGIONS",
    title: "Perbandingan Wilayah",
    summary: "Karakteristik unik antara dua wilayah.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Sumatera dikenal dengan kekayaan jalur rempah dan tradisi kuliner santan yang kuat, sedangkan Jawa menampilkan perpaduan sejarah kerajaan besar dan keragaman seni pewayangan. Keduanya menawarkan pesona budaya yang sama-sama berharga.",
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: [],
    primaryAction: {
      id: "act-compare-map",
      type: "APPLY_MAP_CONTEXT",
      label: "Lihat Jawa & Sumatera",
      payload: { regionId: "jawa" }
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  },
  {
    id: "demo-sumber-informasi",
    intent: "FIND_SOURCE",
    title: "Sumber Informasi",
    summary: "Sumber referensi kebudayaan.",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Informasi budaya dan sejarah dalam NUSANTARAYA dihimpun dari berbagai lembaga resmi, seperti Kemdikbudristek, Dinas Pariwisata Daerah, dan sumber akademis terpercaya.",
      }
    ],
    reasonCodes: ["MATCHES_EXPLICIT_QUERY"],
    sourceIds: [],
    primaryAction: {
      id: "act-open-archive",
      type: "OPEN_ARCHIVE",
      label: "Buka Nusa Archive",
    },
    secondaryActions: [],
    followUpPrompts: [],
    generatedBy: "editorial-preset",
    confidence: "high",
  }
];
