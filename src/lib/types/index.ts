/**
 * NUSANTARAYA — TypeScript Type Definitions
 * Schema sesuai PRD.md §17 Model Data
 *
 * Setiap entitas data JSON memiliki type yang ketat.
 * Hindari `any` — gunakan tipe eksplisit.
 */

// ─── Province (§17.2) ────────────────────────────────────────────────────────

/** Titik sejarah dalam timeline provinsi */
export interface HistoryEvent {
  tahun: string;
  judul: string;
  deskripsi: string;
  era?: string;        // "kerajaan" | "kolonial" | "kemerdekaan" | "modern"
  ikon?: string;
}

/** Item budaya/tradisi */
export interface CultureItem {
  nama: string;
  kategori: "Rumah Adat" | "Tarian" | "Pakaian Adat" | "Upacara" | "Alat Musik" | "Kerajinan" | "Senjata" | "Motif" | "Lainnya";
  deskripsi: string;
  gambar?: string;
  maknaFilosofis?: string;
  sumber?: string[];
}

/** Item kuliner per provinsi */
export interface CulinaryItem {
  nama: string;
  rasa: string[];
  cerita: string;
  gambar?: string;
  kategori?: string;  // "makanan utama" | "minuman" | "jajanan" | "sambal" | "kue"
}

/** Destinasi wisata */
export interface Destination {
  nama: string;
  kategori: "Alam" | "Budaya" | "Sejarah" | "Religi" | "Kota" | "Keluarga" | "Hidden Gem";
  koordinat: [number, number];
  deskripsi: string;
  gambar?: string;
}

/** Aksara dan bahasa daerah */
export interface LanguageInfo {
  bahasa: string;
  kosakata?: { kata: string; arti: string; audio?: string }[];
  aksara?: string;       // nama aksara
  ctaAksaraLab?: boolean;
}

/** Cerita mikro (NUSANTARAYA Stories) */
export interface StoryItem {
  judul: string;
  sudutPandang: string;  // e.g. "Aku, Gudeg"
  isi: string;
  gambar?: string;
}

/** Item itinerary rekomendasi */
export interface ItineraryDay {
  hari: number;
  aktivitas: string[];
  kuliner?: string;
  destinasi?: string;
}

export interface Itinerary {
  durasi: number;        // hari
  judul: string;
  deskripsi?: string;
  jadwal: ItineraryDay[];
}

/** Quiz mini per provinsi */
export interface QuizQuestion {
  pertanyaan: string;
  pilihan: string[];
  jawabanBenar: number;  // index jawaban benar
}

export interface Quiz {
  provinsiId: string;
  pertanyaan: QuizQuestion[];
}

/** Provinsi terkait */
export interface RelatedProvince {
  id: string;
  alasan: string;        // e.g. "Tetangga" | "Rute lanjutan" | "Budaya serupa"
}

/** Tier konten provinsi */
export type ProvinceTier = "deep" | "standard" | "basic";

/** Wilayah/pulau */
export type ProvinceRegion = "Sumatera" | "Jawa" | "Kalimantan" | "Sulawesi" | "Bali dan Nusa Tenggara" | "Maluku" | "Papua";

/** Schema utama provinsi (§17.2 + §13.3 Detail Provinsi) */
export interface Province {
  id: string;
  kodeProv: string;            // KODE_PROV dari TopoJSON
  nama: string;
  ibukota: string;
  wilayah: ProvinceRegion;
  tier: ProvinceTier;
  tagline: string;
  ikonBudaya: string[];
  koordinat: [number, number]; // [lat, lon]
  ringkasan: string;
  bahasa: string[];
  aksara?: string[];
  heroImage?: string;

  // Section 3 — Timeline Sejarah
  sejarah: HistoryEvent[];

  // Section 4 — Budaya dan Tradisi
  budaya: CultureItem[];

  // Section 5 — Aksara dan Bahasa
  bahasaDetail?: LanguageInfo;

  // Section 6 — Kuliner
  kuliner: CulinaryItem[];

  // Section 7 — Destinasi
  destinasi: Destination[];

  // Section 8 — NUSANTARAYA Stories
  stories?: StoryItem[];

  // Section 9 — Potensi Modern
  potensiModern: string[];

  // Section 10 — Itinerary
  itinerary?: Itinerary[];

  // Section 11 — Quiz
  quiz?: Quiz;

  // Section 12 — Provinsi Terkait
  provinsiTerkait?: RelatedProvince[];

  // Audio
  soundscape?: string;

  // Sumber
  sumber: string[];
}

// ─── Culture Archive (§13.7) ─────────────────────────────────────────────────

export type ArchiveCategory =
  | "Rumah Adat"
  | "Tarian"
  | "Alat Musik"
  | "Pakaian Adat"
  | "Upacara"
  | "Cerita Rakyat"
  | "Bahasa dan Aksara"
  | "Senjata"
  | "Kerajinan"
  | "Motif"
  | "Tokoh Daerah";

export interface ArchiveItem {
  id: string;
  nama: string;
  kategori: ArchiveCategory;
  provinsi: string;            // provinsi id
  deskripsi: string;
  gambar?: string;
  maknaSimbol?: string;
  konteksSejarah?: string;
  statusSaatIni?: string;
  sumber?: string[];
  kontenTerkait?: string[];    // id item terkait
}

// ─── Culinary / NusaRasa (§13.8 + §17.3) ────────────────────────────────────

export type FlavorTag = "pedas" | "gurih" | "manis" | "asam" | "rempah" | "laut" | "tradisional" | "modern";

export interface Culinary {
  id: string;
  nama: string;
  provinsi: string;            // provinsi id
  rasa: FlavorTag[];
  kategori: string;
  deskripsi: string;
  cerita: string;
  gambar?: string;
  sumber?: string[];
}

// ─── Route Planner (§13.5) ───────────────────────────────────────────────────

export interface RoutePreset {
  id: string;
  judul: string;
  judulEn?: string;
  durasi: number;
  wilayah: ProvinceRegion[];
  deskripsi: string;
  provinsiIds: string[];
  jadwal: ItineraryDay[];
  estimasiBiaya?: string;
  tipeWisata?: string[];
}

// ─── Events (§13.17) ─────────────────────────────────────────────────────────

export interface EventItem {
  id: string;
  nama: string;
  lokasi: string;
  provinsi: string;
  bulan: number;               // 1-12
  tanggal?: string;
  deskripsi: string;
  kategori: string;
  gambar?: string;
  tips?: string;
}

// ─── Nusa Future (§13.12) ────────────────────────────────────────────────────

export interface FutureItem {
  id: string;
  nama: string;
  kategori: "IKN" | "Smart City" | "UMKM Digital" | "Ekonomi Kreatif" | "Desa Wisata Digital" | "Green Tourism" | "Startup";
  provinsi?: string;
  deskripsi: string;
  gambar?: string;
}

// ─── Language & Script (§13.9) ───────────────────────────────────────────────

export interface LanguageScript {
  id: string;
  nama: string;                // e.g. "Aksara Jawa"
  asal: string;                // e.g. "Jawa"
  deskripsiSejarah: string;
  contohKarakter?: string[];
  sumber?: string[];
}

// ─── Passport (§17.4) ────────────────────────────────────────────────────────

export type BadgeWilayah =
  | "Sumatra Seeker"
  | "Java Heritage Keeper"
  | "Borneo Nature Guardian"
  | "Celebes Voyager"
  | "Bali-Nusa Wanderer"
  | "Maluku Spice Explorer"
  | "Papua Wonder Seeker"
  | "Indonesia Complete Explorer";

export type BadgeTematik =
  | "Spice Route Explorer"
  | "Heritage Trail Keeper"
  | "NusaRasa Hunter"
  | "Aksara Learner"
  | "Soundscape Listener"
  | "Future City Explorer"
  | "RANI Companion";

export interface PassportData {
  userId: string;
  stamps: string[];              // province ids
  badges: (BadgeWilayah | BadgeTematik)[];
  xp: number;
  level: string;
  completedQuizzes: string[];    // province ids
  savedRoutes: string[];         // route ids
}

// ─── App State ───────────────────────────────────────────────────────────────

export type Language = "id" | "en";
export type AppMode = "explore" | "tourist" | "learn";
