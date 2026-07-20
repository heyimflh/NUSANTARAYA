/**
 * NUSA ARCHIVE — Story Threads
 * Thematic journeys connecting items across provinces and categories
 */

import type { ArchiveStoryThread } from "@/types/archive";

export const archiveStoryThreads: readonly ArchiveStoryThread[] = [
  {
    id: "thread-serat-identitas",
    slug: "dari-serat-menjadi-identitas",
    title: "Dari Serat Menjadi Identitas",
    titleEn: "From Fiber to Identity",
    promise: "Telusuri perjalanan kain tradisional — dari benang mentah hingga menjadi identitas komunitas, status sosial, dan doa yang teranyam.",
    promiseEn: "Follow the journey of traditional textiles — from raw thread to woven identity, social status, and prayers.",
    itemIds: ["yogya-batik", "ntt-tenun-ikat", "sumbar-tenun-pandai-sikek", "sumsel-songket-palembang", "jateng-batik-pekalongan", "sumbar-pucuak-rebuang"],
    provinceIds: ["di-yogyakarta", "nusa-tenggara-timur", "sumatera-barat", "sumatera-selatan", "jawa-tengah"],
    kind: "explore-trail",
    primaryPillar: "Tradisi",
    reasonCodes: ["multi-region", "living-heritage", "craft"],
    sourceCompleteness: "complete",
  },
  {
    id: "thread-suara-laut",
    slug: "suara-yang-menyeberangi-laut",
    title: "Suara yang Menyeberangi Laut",
    titleEn: "Sounds that Cross the Sea",
    promise: "Dari gamelan Jawa hingga tifa Papua — dengarkan bagaimana musik tradisional menyatukan dan membedakan komunitas kepulauan.",
    promiseEn: "From Javanese gamelan to Papuan tifa — hear how traditional music unites and distinguishes island communities.",
    itemIds: ["yogya-gamelan", "sumbar-talempong", "maluku-tifa-maluku", "sulut-kolintang"],
    provinceIds: ["di-yogyakarta", "sumatera-barat", "maluku", "sulawesi-utara"],
    kind: "learning-path",
    primaryPillar: "Tradisi",
    reasonCodes: ["multi-region", "performance", "comparison"],
    sourceCompleteness: "complete",
  },
  {
    id: "thread-aksara-ingatan",
    slug: "aksara-sebagai-rumah-ingatan",
    title: "Aksara sebagai Rumah Ingatan",
    titleEn: "Scripts as Houses of Memory",
    promise: "Aksara bukan hanya alat tulis — ia menyimpan hukum adat, sastra, doa, dan identitas komunitas yang mencipta dan memeliharanya.",
    promiseEn: "Scripts are more than writing tools — they hold customary law, literature, prayers, and community identity.",
    itemIds: ["yogya-aksara-jawa", "sulsel-lontara", "sumbar-aksara-melayu", "sumsel-surat-ulu"],
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur", "sulawesi-selatan", "sumatera-barat", "sumatera-selatan"],
    kind: "learning-path",
    primaryPillar: "Aksara",
    reasonCodes: ["literacy", "identity", "revitalization"],
    sourceCompleteness: "complete",
  },
  {
    id: "thread-rempah-dapur",
    slug: "rempah-dapur-dan-perdagangan",
    title: "Rempah, Dapur, dan Perdagangan",
    titleEn: "Spice, Kitchen, and Trade",
    promise: "Rempah bukan hanya bumbu — ia menggerakkan armada, membentuk kota pelabuhan, dan menghubungkan Nusantara dengan dunia.",
    promiseEn: "Spices are more than seasoning — they powered fleets, shaped port cities, and connected the archipelago to the world.",
    itemIds: ["maluku-baileo", "sulsel-pinisi", "sumbar-tabuik"],
    provinceIds: ["maluku", "sulawesi-selatan", "sumatera-barat"],
    kind: "tourist-context",
    primaryPillar: "Rasa",
    reasonCodes: ["spice-route", "maritime", "global"],
    sourceCompleteness: "partial",
  },
  {
    id: "thread-rumah-kosmologi",
    slug: "rumah-ruang-dan-kosmologi",
    title: "Rumah, Ruang, dan Kosmologi",
    titleEn: "House, Space, and Cosmology",
    promise: "Arsitektur tradisional Indonesia bukan hanya soal bentuk — setiap tiang, arah, dan ruang menceritakan hubungan manusia dengan alam semesta.",
    promiseEn: "Traditional Indonesian architecture is not just form — every pillar, direction, and space tells of humanity's cosmic relationship.",
    itemIds: ["yogya-rumah-joglo", "sumbar-rumah-gadang", "sulsel-tongkonan", "kaltim-lamin", "papuabardaya-honai", "aceh-rumoh-aceh"],
    provinceIds: ["di-yogyakarta", "sumatera-barat", "sulawesi-selatan", "kalimantan-timur", "papua-barat-daya", "aceh"],
    kind: "explore-trail",
    primaryPillar: "Tradisi",
    reasonCodes: ["multi-region", "cosmology", "architecture"],
    sourceCompleteness: "complete",
  },
  {
    id: "thread-cerita-alam-etika",
    slug: "cerita-rakyat-tentang-alam-dan-etika",
    title: "Cerita Rakyat tentang Alam dan Etika",
    titleEn: "Folk Tales of Nature and Ethics",
    promise: "Kisah-kisah yang mengajarkan hubungan manusia dengan alam, etika sosial, dan konsekuensi pilihan — dari Malin Kundang hingga Rara Jonggrang.",
    promiseEn: "Stories teaching humanity's relationship with nature, social ethics, and the consequences of choices.",
    itemIds: ["sumbar-malin-kundang", "yogya-rara-jonggrang"],
    provinceIds: ["sumatera-barat", "di-yogyakarta"],
    kind: "learning-path",
    primaryPillar: "Narasi",
    reasonCodes: ["oral-tradition", "ethics", "education"],
    sourceCompleteness: "partial",
  },
];

export const archiveStoryThreadMap = new Map(
  archiveStoryThreads.map((t) => [t.id, t])
);
