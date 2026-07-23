// ═══════════════════════════════════════════════════════════════════════════
// Atlas Chapter Images — Per-Province, Per-Chapter Image Mapping
//
// Memetakan gambar spesifik untuk setiap bab di halaman Nusa Atlas,
// menggunakan aset dari:
//   - /assets/nusa-archive/provinces/[province]/ (gambar budaya khas)
//   - /assets/nusarasa/food/                     (gambar kuliner)
//   - /assets/province/[province]/               (gambar hero, destination, dst)
//
// Setiap provinsi memiliki hingga 12 gambar bertema:
//   01-rumah-adat   → budaya (arsitektur)
//   02-tarian       → budaya
//   05-upacara      → masyarakat
//   06-cerita-rakyat → cerita / sejarah
//   08-kerajinan    → budaya
//   09-aksara       → bahasa
//   10-motif-kain   → budaya
//   11-tokoh-daerah → sejarah
//   12-kepercayaan  → masyarakat
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Struktur gambar per-bab untuk satu provinsi.
 * Semua field optional — fallback ke aset provinsi standar jika tidak ada.
 */
export type ChapterImages = {
  /** BAB 00: Ringkasan — hero utama provinsi */
  ringkasan?: string;
  /** BAB 01: Geografi — lanskap / alam */
  geografi?: string;
  /** BAB 02: Sejarah — tokoh daerah / monumen sejarah */
  sejarah?: string;
  /** BAB 03: Masyarakat — pakaian adat / upacara / kepercayaan */
  masyarakat?: string;
  /** BAB 04: Budaya — rumah adat / tarian / kerajinan */
  budaya?: string;
  /** BAB 05: Bahasa — aksara / manuskrip */
  bahasa?: string;
  /** BAB 06: Kuliner — makanan khas */
  kuliner?: string;
  /** BAB 07: Alam — ekosistem / flora-fauna */
  alam?: string;
  /** BAB 08: Destinasi — tempat wisata */
  destinasi?: string;
  /** BAB 09: Cerita — cerita rakyat / legenda */
  cerita?: string;
  /** BAB 10: Masa Kini — wajah modern */
  masaKini?: string;
  /** BAB 11: Perjalanan — destinasi / perjalanan */
  perjalanan?: string;
};

// ─── Base Path Shortcuts ─────────────────────────────────────────────────────
const ar = "/assets/nusa-archive/provinces"; // archive
const pv = "/assets/province";               // province
const fd = "/assets/nusarasa/food";          // food

// ─── Province Chapter Image Registry ────────────────────────────────────────
export const PROVINCE_CHAPTER_IMAGES: Record<string, ChapterImages> = {

  // ── Aceh ─────────────────────────────────────────────────────────────────
  "aceh": {
    ringkasan:  `${pv}/aceh/hero.webp`,
    geografi:   `${pv}/aceh/destination.webp`,
    sejarah:    `${ar}/Aceh/id-11-aceh-11-tokoh-daerah-cut-nyak-dhien.webp`,
    masyarakat: `${ar}/Aceh/id-11-aceh-12-kepercayaan-masjid-raya-baiturrahman.webp`,
    budaya:     `${ar}/Aceh/id-11-aceh-01-rumah-adat-rumoh-aceh.webp`,
    bahasa:     `${ar}/Aceh/id-11-aceh-08-kerajinan-sulaman-kerawang-gayo.webp`,
    kuliner:    `${pv}/aceh/food.webp`,
    alam:       `${pv}/aceh/destination.webp`,
    destinasi:  `${pv}/aceh/destination.webp`,
    cerita:     `${ar}/Aceh/id-11-aceh-06-cerita-rakyat-hikayat-aceh.webp`,
    masaKini:   `${pv}/aceh/modern.webp`,
    perjalanan: `${pv}/aceh/hero.webp`,
  },

  // ── Sumatera Utara ────────────────────────────────────────────────────────
  "sumatera-utara": {
    ringkasan:  `${pv}/sumatera-utara/hero.webp`,
    geografi:   `${pv}/sumatera-utara/destination.webp`,
    sejarah:    `${ar}/sumatera-utara/id-12-sumatera-utara-11-tokoh-daerah-sisingamangaraja-xii.webp`,
    masyarakat: `${ar}/sumatera-utara/id-12-sumatera-utara-12-kepercayaan-parmalim-huta-tinggi.webp`,
    budaya:     `${ar}/sumatera-utara/id-12-sumatera-utara-01-rumah-adat-rumah-bolon.webp`,
    bahasa:     `${ar}/sumatera-utara/id-12-sumatera-utara-10-motif-kain-ulos-ragidup.webp`,
    kuliner:    `${pv}/sumatera-utara/food.webp`,
    alam:       `${pv}/sumatera-utara/destination.webp`,
    destinasi:  `${pv}/sumatera-utara/destination.webp`,
    cerita:     `${ar}/sumatera-utara/id-12-sumatera-utara-06-cerita-rakyat-legenda-danau-toba.webp`,
    masaKini:   `${pv}/sumatera-utara/modern.webp`,
    perjalanan: `${pv}/sumatera-utara/hero.webp`,
  },

  // ── Sumatera Barat ────────────────────────────────────────────────────────
  "sumatera-barat": {
    ringkasan:  `${pv}/sumatera-barat/hero.webp`,
    geografi:   `${pv}/sumatera-barat/destination.webp`,
    sejarah:    `${ar}/sumatera-barat/id-13-sumatera-barat-11-tokoh-daerah-mohammad-hatta-l1-master-v01.webp`,
    masyarakat: `${ar}/sumatera-barat/id-13-sumatera-barat-12-kepercayaan-surau-lubuk-bauk-l1-master-v01.webp`,
    budaya:     `${ar}/sumatera-barat/id-13-sumatera-barat-01-rumah-adat-rumah-gadang-l1-master-v01.webp`,
    bahasa:     `${ar}/sumatera-barat/id-13-sumatera-barat-09-aksara-arab-melayu-minangkabau-l1-master-v01.webp`,
    kuliner:    `${fd}/sate-padang.webp`,
    alam:       `${pv}/sumatera-barat/destination.webp`,
    destinasi:  `${pv}/sumatera-barat/destination.webp`,
    cerita:     `${ar}/sumatera-barat/id-13-sumatera-barat-06-cerita-rakyat-malin-kundang-l1-master-v01.webp`,
    masaKini:   `${pv}/sumatera-barat/modern.webp`,
    perjalanan: `${pv}/sumatera-barat/hero.webp`,
  },

  // ── Riau ──────────────────────────────────────────────────────────────────
  "riau": {
    ringkasan:  `${pv}/riau/hero.webp`,
    geografi:   `${pv}/riau/destination.webp`,
    sejarah:    `${pv}/riau/culture.webp`,
    masyarakat: `${pv}/riau/culture.webp`,
    budaya:     `${pv}/riau/culture.webp`,
    bahasa:     `${pv}/riau/culture.webp`,
    kuliner:    `${fd}/bolu-kemojo.webp`,
    alam:       `${pv}/riau/destination.webp`,
    destinasi:  `${pv}/riau/destination.webp`,
    cerita:     `${pv}/riau/culture.webp`,
    masaKini:   `${pv}/riau/modern.webp`,
    perjalanan: `${pv}/riau/hero.webp`,
  },

  // ── Kepulauan Riau ────────────────────────────────────────────────────────
  "kepulauan-riau": {
    ringkasan:  `${pv}/kepulauan-riau/hero.webp`,
    geografi:   `${pv}/kepulauan-riau/destination.webp`,
    sejarah:    `${pv}/kepulauan-riau/culture.webp`,
    masyarakat: `${pv}/kepulauan-riau/culture.webp`,
    budaya:     `${pv}/kepulauan-riau/culture.webp`,
    bahasa:     `${pv}/kepulauan-riau/culture.webp`,
    kuliner:    `${pv}/kepulauan-riau/food.webp`,
    alam:       `${pv}/kepulauan-riau/destination.webp`,
    destinasi:  `${pv}/kepulauan-riau/destination.webp`,
    cerita:     `${pv}/kepulauan-riau/culture.webp`,
    masaKini:   `${pv}/kepulauan-riau/modern.webp`,
    perjalanan: `${pv}/kepulauan-riau/hero.webp`,
  },

  // ── Jambi ─────────────────────────────────────────────────────────────────
  "jambi": {
    ringkasan:  `${pv}/jambi/hero.webp`,
    geografi:   `${pv}/jambi/destination.webp`,
    sejarah:    `${pv}/jambi/culture.webp`,
    masyarakat: `${pv}/jambi/culture.webp`,
    budaya:     `${pv}/jambi/culture.webp`,
    bahasa:     `${pv}/jambi/culture.webp`,
    kuliner:    `${pv}/jambi/food.webp`,
    alam:       `${pv}/jambi/destination.webp`,
    destinasi:  `${pv}/jambi/destination.webp`,
    cerita:     `${pv}/jambi/culture.webp`,
    masaKini:   `${pv}/jambi/modern.webp`,
    perjalanan: `${pv}/jambi/hero.webp`,
  },

  // ── Sumatera Selatan ──────────────────────────────────────────────────────
  "sumatera-selatan": {
    ringkasan:  `${pv}/sumatera-selatan/hero.webp`,
    geografi:   `${pv}/sumatera-selatan/destination.webp`,
    sejarah:    `${pv}/sumatera-selatan/culture.webp`,
    masyarakat: `${pv}/sumatera-selatan/culture.webp`,
    budaya:     `${pv}/sumatera-selatan/culture.webp`,
    bahasa:     `${pv}/sumatera-selatan/culture.webp`,
    kuliner:    `${pv}/sumatera-selatan/food.webp`,
    alam:       `${pv}/sumatera-selatan/destination.webp`,
    destinasi:  `${pv}/sumatera-selatan/destination.webp`,
    cerita:     `${pv}/sumatera-selatan/culture.webp`,
    masaKini:   `${pv}/sumatera-selatan/modern.webp`,
    perjalanan: `${pv}/sumatera-selatan/hero.webp`,
  },

  // ── Bengkulu ──────────────────────────────────────────────────────────────
  "bengkulu": {
    ringkasan:  `${pv}/bengkulu/hero.webp`,
    geografi:   `${pv}/bengkulu/destination.webp`,
    sejarah:    `${pv}/bengkulu/culture.webp`,
    masyarakat: `${pv}/bengkulu/culture.webp`,
    budaya:     `${pv}/bengkulu/culture.webp`,
    bahasa:     `${pv}/bengkulu/culture.webp`,
    kuliner:    `${fd}/pendap-bengkulu.webp`,
    alam:       `${pv}/bengkulu/destination.webp`,
    destinasi:  `${pv}/bengkulu/destination.webp`,
    cerita:     `${pv}/bengkulu/culture.webp`,
    masaKini:   `${pv}/bengkulu/modern.webp`,
    perjalanan: `${pv}/bengkulu/hero.webp`,
  },

  // ── Lampung ───────────────────────────────────────────────────────────────
  "lampung": {
    ringkasan:  `${pv}/lampung/hero.webp`,
    geografi:   `${pv}/lampung/destination.webp`,
    sejarah:    `${pv}/lampung/culture.webp`,
    masyarakat: `${pv}/lampung/culture.webp`,
    budaya:     `${pv}/lampung/culture.webp`,
    bahasa:     `${pv}/lampung/culture.webp`,
    kuliner:    `${fd}/seruit-lampung.webp`,
    alam:       `${pv}/lampung/destination.webp`,
    destinasi:  `${pv}/lampung/destination.webp`,
    cerita:     `${pv}/lampung/culture.webp`,
    masaKini:   `${pv}/lampung/modern.webp`,
    perjalanan: `${pv}/lampung/hero.webp`,
  },

  // ── Kepulauan Bangka Belitung ──────────────────────────────────────────────
  "kepulauan-bangka-belitung": {
    ringkasan:  `${pv}/kepulauan-bangka-belitung/hero.webp`,
    geografi:   `${pv}/kepulauan-bangka-belitung/destination.webp`,
    sejarah:    `${pv}/kepulauan-bangka-belitung/culture.webp`,
    masyarakat: `${pv}/kepulauan-bangka-belitung/culture.webp`,
    budaya:     `${pv}/kepulauan-bangka-belitung/culture.webp`,
    bahasa:     `${pv}/kepulauan-bangka-belitung/culture.webp`,
    kuliner:    `${fd}/lempah-kuning.webp`,
    alam:       `${pv}/kepulauan-bangka-belitung/destination.webp`,
    destinasi:  `${pv}/kepulauan-bangka-belitung/destination.webp`,
    cerita:     `${pv}/kepulauan-bangka-belitung/culture.webp`,
    masaKini:   `${pv}/kepulauan-bangka-belitung/modern.webp`,
    perjalanan: `${pv}/kepulauan-bangka-belitung/hero.webp`,
  },

  // ── Banten ────────────────────────────────────────────────────────────────
  "banten": {
    ringkasan:  `${pv}/banten/hero.webp`,
    geografi:   `${pv}/banten/destination.webp`,
    sejarah:    `${pv}/banten/culture.webp`,
    masyarakat: `${pv}/banten/culture.webp`,
    budaya:     `${pv}/banten/culture.webp`,
    bahasa:     `${pv}/banten/culture.webp`,
    kuliner:    `${fd}/sate-bandeng.webp`,
    alam:       `${pv}/banten/destination.webp`,
    destinasi:  `${pv}/banten/destination.webp`,
    cerita:     `${pv}/banten/culture.webp`,
    masaKini:   `${pv}/banten/modern.webp`,
    perjalanan: `${pv}/banten/hero.webp`,
  },

  // ── DKI Jakarta ──────────────────────────────────────────────────────────
  "dki-jakarta": {
    ringkasan:  `${pv}/dki-jakarta/hero.webp`,
    geografi:   `${pv}/dki-jakarta/destination.webp`,
    sejarah:    `${ar}/dki-jakarta/id-31-dki-jakarta-11-tokoh-daerah-mohammad-husni-thamrin.webp`,
    masyarakat: `${ar}/dki-jakarta/id-31-dki-jakarta-12-kepercayaan-masjid-jami-keramat-luar-batang.webp`,
    budaya:     `${ar}/dki-jakarta/id-31-dki-jakarta-01-rumah-adat-rumah-kebaya-betawi.webp`,
    bahasa:     `${ar}/dki-jakarta/id-31-dki-jakarta-09-aksara-jawi-betawi.webp`,
    kuliner:    `${fd}/kerak-telor.webp`,
    alam:       `${pv}/dki-jakarta/destination.webp`,
    destinasi:  `${pv}/dki-jakarta/destination.webp`,
    cerita:     `${ar}/dki-jakarta/id-31-dki-jakarta-06-cerita-rakyat-si-pitung.webp`,
    masaKini:   `${pv}/dki-jakarta/modern.webp`,
    perjalanan: `${pv}/dki-jakarta/hero.webp`,
  },

  // ── Jawa Barat ────────────────────────────────────────────────────────────
  "jawa-barat": {
    ringkasan:  `${pv}/jawa-barat/hero.webp`,
    geografi:   `${pv}/jawa-barat/destination.webp`,
    sejarah:    `${ar}/jawa-barat/id-32-jawa-barat-11-tokoh-daerah-dewi-sartika.webp`,
    masyarakat: `${ar}/jawa-barat/id-32-jawa-barat-12-kepercayaan-masjid-raya-bandung.webp`,
    budaya:     `${ar}/jawa-barat/id-32-jawa-barat-01-rumah-adat-rumah-kampung-naga.webp`,
    bahasa:     `${ar}/jawa-barat/id-32-jawa-barat-09-aksara-aksara-sunda-baku.webp`,
    kuliner:    `${fd}/karedok.webp`,
    alam:       `${pv}/jawa-barat/destination.webp`,
    destinasi:  `${pv}/jawa-barat/destination.webp`,
    cerita:     `${ar}/jawa-barat/id-32-jawa-barat-06-cerita-rakyat-legenda-sangkuriang.webp`,
    masaKini:   `${pv}/jawa-barat/modern.webp`,
    perjalanan: `${pv}/jawa-barat/hero.webp`,
  },

  // ── Jawa Tengah ──────────────────────────────────────────────────────────
  "jawa-tengah": {
    ringkasan:  `${pv}/jawa-tengah/hero.webp`,
    geografi:   `${pv}/jawa-tengah/destination.webp`,
    sejarah:    `${ar}/jawa-tengah/id-33-jawa-tengah-11-tokoh-daerah-ra-kartini.webp`,
    masyarakat: `${ar}/jawa-tengah/id-33-jawa-tengah-12-kepercayaan-masjid-agung-demak.webp`,
    budaya:     `${ar}/jawa-tengah/id-33-jawa-tengah-01-rumah-adat-rumah-joglo.webp`,
    bahasa:     `${ar}/jawa-tengah/id-33-jawa-tengah-09-aksara-aksara-jawa-hanacaraka.webp`,
    kuliner:    `${fd}/lumpia-semarang.webp`,
    alam:       `${pv}/jawa-tengah/destination.webp`,
    destinasi:  `${pv}/jawa-tengah/destination.webp`,
    cerita:     `${ar}/jawa-tengah/id-33-jawa-tengah-06-cerita-rakyat-legenda-rawa-pening.webp`,
    masaKini:   `${pv}/jawa-tengah/modern.webp`,
    perjalanan: `${pv}/jawa-tengah/hero.webp`,
  },

  // ── DI Yogyakarta ─────────────────────────────────────────────────────────
  "di-yogyakarta": {
    ringkasan:  `${pv}/di-yogyakarta/hero.webp`,
    geografi:   `${pv}/di-yogyakarta/destination.webp`,
    sejarah:    `${ar}/di-yogyakarta/id-34-di-yogyakarta-05-upacara-tradisi-sekaten-yogyakarta.webp`,
    masyarakat: `${ar}/di-yogyakarta/id-34-di-yogyakarta-12-kepercayaan-masjid-gedhe-kauman.webp`,
    budaya:     `${ar}/di-yogyakarta/id-34-di-yogyakarta-01-rumah-adat-rumah-joglo-muhadi.webp`,
    bahasa:     `${ar}/di-yogyakarta/id-34-di-yogyakarta-09-aksara-aksara-jawa-hanacaraka.webp`,
    kuliner:    `${pv}/di-yogyakarta/food.webp`,
    alam:       `${pv}/di-yogyakarta/destination.webp`,
    destinasi:  `${pv}/di-yogyakarta/destination.webp`,
    cerita:     `${ar}/di-yogyakarta/id-34-di-yogyakarta-06-cerita-rakyat-legenda-rara-jonggrang.webp`,
    masaKini:   `${pv}/di-yogyakarta/modern.webp`,
    perjalanan: `${pv}/di-yogyakarta/hero.webp`,
  },

  // ── Jawa Timur ────────────────────────────────────────────────────────────
  "jawa-timur": {
    ringkasan:  `${pv}/jawa-timur/hero.webp`,
    geografi:   `${pv}/jawa-timur/destination.webp`,
    sejarah:    `${ar}/jawa-timur/id-35-jawa-timur-11-tokoh-daerah-bung-tomo.webp`,
    masyarakat: `${ar}/jawa-timur/id-35-jawa-timur-12-kepercayaan-masjid-jamik-sumenep.webp`,
    budaya:     `${ar}/jawa-timur/id-35-jawa-timur-01-rumah-adat-taneyan-lanjhang.webp`,
    bahasa:     `${ar}/jawa-timur/id-35-jawa-timur-09-aksara-aksara-jawa-hanacaraka.webp`,
    kuliner:    `${fd}/nasi-rawon.webp`,
    alam:       `${pv}/jawa-timur/destination.webp`,
    destinasi:  `${pv}/jawa-timur/destination.webp`,
    cerita:     `${ar}/jawa-timur/id-35-jawa-timur-06-cerita-rakyat-legenda-lembu-suro.webp`,
    masaKini:   `${pv}/jawa-timur/modern.webp`,
    perjalanan: `${pv}/jawa-timur/hero.webp`,
  },

  // ── Bali ──────────────────────────────────────────────────────────────────
  "bali": {
    ringkasan:  `${pv}/bali/hero.webp`,
    geografi:   `${pv}/bali/destination.webp`,
    sejarah:    `${ar}/bali/id-51-bali-11-tokoh-daerah-i-gusti-ngurah-rai.webp`,
    masyarakat: `${ar}/bali/id-51-bali-12-kepercayaan-pura-agung-besakih.webp`,
    budaya:     `${ar}/bali/id-51-bali-01-rumah-adat-kompleks-rumah-tradisional-bali.webp`,
    bahasa:     `${ar}/bali/id-51-bali-09-aksara-aksara-bali-hanacaraka.webp`,
    kuliner:    `${fd}/lawar-bali.webp`,
    alam:       `${pv}/bali/destination.webp`,
    destinasi:  `${pv}/bali/destination.webp`,
    cerita:     `${ar}/bali/id-51-bali-06-cerita-rakyat-kisah-calon-arang.webp`,
    masaKini:   `${pv}/bali/modern.webp`,
    perjalanan: `${pv}/bali/hero.webp`,
  },

  // ── Nusa Tenggara Barat ───────────────────────────────────────────────────
  "nusa-tenggara-barat": {
    ringkasan:  `${pv}/nusa-tenggara-barat/hero.webp`,
    geografi:   `${pv}/nusa-tenggara-barat/destination.webp`,
    sejarah:    `${ar}/nusa-tenggara-barat/id-52-nusa-tenggara-barat-11-tokoh-daerah-lalu-muhammad-zohri.webp`,
    masyarakat: `${ar}/nusa-tenggara-barat/id-52-nusa-tenggara-barat-12-kepercayaan-masjid-kuno-bayan-beleq.webp`,
    budaya:     `${ar}/nusa-tenggara-barat/id-52-nusa-tenggara-barat-01-rumah-adat-rumah-tradisional-sasak.webp`,
    bahasa:     `${ar}/nusa-tenggara-barat/id-52-nusa-tenggara-barat-09-aksara-aksara-jejawaan-sasak.webp`,
    kuliner:    `${fd}/plecing-kangkung.webp`,
    alam:       `${pv}/nusa-tenggara-barat/destination.webp`,
    destinasi:  `${pv}/nusa-tenggara-barat/destination.webp`,
    cerita:     `${ar}/nusa-tenggara-barat/id-52-nusa-tenggara-barat-06-cerita-rakyat-legenda-putri-mandalika.webp`,
    masaKini:   `${pv}/nusa-tenggara-barat/modern.webp`,
    perjalanan: `${pv}/nusa-tenggara-barat/hero.webp`,
  },

  // ── Nusa Tenggara Timur ───────────────────────────────────────────────────
  "nusa-tenggara-timur": {
    ringkasan:  `${pv}/nusa-tenggara-timur/hero.webp`,
    geografi:   `${pv}/nusa-tenggara-timur/destination.webp`,
    sejarah:    `${ar}/nusa-tenggara-timur/id-53-nusa-tenggara-timur-11-tokoh-daerah-herman-johannes.webp`,
    masyarakat: `${ar}/nusa-tenggara-timur/id-53-nusa-tenggara-timur-12-kepercayaan-marapu-ratenggaro.webp`,
    budaya:     `${ar}/nusa-tenggara-timur/id-53-nusa-tenggara-timur-01-rumah-adat-mbaru-niang-wae-rebo.webp`,
    bahasa:     `${ar}/nusa-tenggara-timur/id-53-nusa-tenggara-timur-09-aksara-aksara-lota-ende.webp`,
    kuliner:    `${fd}/sei-sapi.webp`,
    alam:       `${pv}/nusa-tenggara-timur/destination.webp`,
    destinasi:  `${pv}/nusa-tenggara-timur/destination.webp`,
    cerita:     `${ar}/nusa-tenggara-timur/id-53-nusa-tenggara-timur-06-cerita-rakyat-legenda-danau-kelimutu.webp`,
    masaKini:   `${pv}/nusa-tenggara-timur/modern.webp`,
    perjalanan: `${pv}/nusa-tenggara-timur/hero.webp`,
  },

  // ── Kalimantan Barat ──────────────────────────────────────────────────────
  "kalimantan-barat": {
    ringkasan:  `${pv}/kalimantan-barat/hero.webp`,
    geografi:   `${pv}/kalimantan-barat/destination.webp`,
    sejarah:    `${ar}/kalimantan-barat/id-61-kalimantan-barat-11-tokoh-daerah-jc-oevaang-oeray.webp`,
    masyarakat: `${ar}/kalimantan-barat/id-61-kalimantan-barat-12-kepercayaan-suku-dayak-kaharingan.webp`,
    budaya:     `${ar}/kalimantan-barat/id-61-kalimantan-barat-01-rumah-adat-rumah-radakng-pontianak.webp`,
    bahasa:     `${ar}/kalimantan-barat/id-61-kalimantan-barat-10-motif-kain-ragam-motif-kain-kalimantan-barat.webp`,
    kuliner:    `${fd}/choi-pan.webp`,
    alam:       `${pv}/kalimantan-barat/destination.webp`,
    destinasi:  `${pv}/kalimantan-barat/destination.webp`,
    cerita:     `${ar}/kalimantan-barat/id-61-kalimantan-barat-06-cerita-rakyat-legenda-batu-menangis.webp`,
    masaKini:   `${pv}/kalimantan-barat/modern.webp`,
    perjalanan: `${pv}/kalimantan-barat/hero.webp`,
  },

  // ── Kalimantan Tengah ─────────────────────────────────────────────────────
  "kalimantan-tengah": {
    ringkasan:  `${pv}/kalimantan-tengah/hero.webp`,
    geografi:   `${pv}/kalimantan-tengah/destination.webp`,
    sejarah:    `${ar}/kalimantan-tengah/id-62-kalimantan-tengah-11-tokoh-daerah-tjilik-riwut.webp`,
    masyarakat: `${ar}/kalimantan-tengah/id-62-kalimantan-tengah-12-kepercayaan-kaharingan-sandung-ngabe-sukah.webp`,
    budaya:     `${ar}/kalimantan-tengah/id-62-kalimantan-tengah-01-rumah-adat-rumah-betang.webp`,
    bahasa:     `${ar}/kalimantan-tengah/id-62-kalimantan-tengah-10-motif-kain-benang-bintik.webp`,
    kuliner:    `${fd}/juhu-singkah.webp`,
    alam:       `${pv}/kalimantan-tengah/destination.webp`,
    destinasi:  `${pv}/kalimantan-tengah/destination.webp`,
    cerita:     `${ar}/kalimantan-tengah/id-62-kalimantan-tengah-06-cerita-rakyat-legenda-batu-banama.webp`,
    masaKini:   `${pv}/kalimantan-tengah/modern.webp`,
    perjalanan: `${pv}/kalimantan-tengah/hero.webp`,
  },

  // ── Kalimantan Selatan ────────────────────────────────────────────────────
  "kalimantan-selatan": {
    ringkasan:  `${pv}/kalimantan-selatan/hero.webp`,
    geografi:   `${pv}/kalimantan-selatan/destination.webp`,
    sejarah:    `${ar}/kalimantan-selatan/id-63-kalimantan-selatan-11-tokoh-daerah-pangeran-antasari.webp`,
    masyarakat: `${ar}/kalimantan-selatan/id-63-kalimantan-selatan-12-kepercayaan-masjid-sultan-suriansyah.webp`,
    budaya:     `${ar}/kalimantan-selatan/id-63-kalimantan-selatan-01-rumah-adat-rumah-bubungan-tinggi.webp`,
    bahasa:     `${ar}/kalimantan-selatan/id-63-kalimantan-selatan-10-motif-kain-ragam-pola-sasirangan.webp`,
    kuliner:    `${fd}/mandai.webp`,
    alam:       `${pv}/kalimantan-selatan/destination.webp`,
    destinasi:  `${pv}/kalimantan-selatan/destination.webp`,
    cerita:     `${ar}/kalimantan-selatan/id-63-kalimantan-selatan-06-cerita-rakyat-legenda-putri-junjung-buih.webp`,
    masaKini:   `${pv}/kalimantan-selatan/modern.webp`,
    perjalanan: `${pv}/kalimantan-selatan/hero.webp`,
  },

  // ── Kalimantan Timur ──────────────────────────────────────────────────────
  "kalimantan-timur": {
    ringkasan:  `${pv}/kalimantan-timur/hero.webp`,
    geografi:   `${pv}/kalimantan-timur/destination.webp`,
    sejarah:    `${ar}/kalimantan-timur/id-64-kalimantan-timur-11-tokoh-daerah-sultan-aji-muhammad-idris.webp`,
    masyarakat: `${ar}/kalimantan-timur/id-64-kalimantan-timur-12-kepercayaan-masjid-shiratal-mustaqiem.webp`,
    budaya:     `${ar}/kalimantan-timur/id-64-kalimantan-timur-01-rumah-adat-lamin-adat-pemung-tawai.webp`,
    bahasa:     `${ar}/kalimantan-timur/id-64-kalimantan-timur-08-kerajinan-tenun-ulap-doyo.webp`,
    kuliner:    `${fd}/nasi-bekepor.webp`,
    alam:       `${pv}/kalimantan-timur/destination.webp`,
    destinasi:  `${pv}/kalimantan-timur/destination.webp`,
    cerita:     `${ar}/kalimantan-timur/id-64-kalimantan-timur-06-cerita-rakyat-legenda-pesut-mahakam.webp`,
    masaKini:   `${pv}/kalimantan-timur/modern.webp`,
    perjalanan: `${pv}/kalimantan-timur/hero.webp`,
  },

  // ── Kalimantan Utara ──────────────────────────────────────────────────────
  "kalimantan-utara": {
    ringkasan:  `${pv}/kalimantan-utara/hero.webp`,
    geografi:   `${pv}/kalimantan-utara/destination.webp`,
    sejarah:    `${ar}/kalimantan-utara/id-65-kalimantan-utara-10-tokoh-daerah-sultan-maulana-muhammad-djalaluddin.webp`,
    masyarakat: `${ar}/kalimantan-utara/id-65-kalimantan-utara-11-kepercayaan-keraton-kesultanan-bulungan.webp`,
    budaya:     `${ar}/kalimantan-utara/id-65-kalimantan-utara-01-rumah-adat-rumah-baloy-mayo-adat-tidung.webp`,
    bahasa:     `${ar}/kalimantan-utara/id-65-kalimantan-utara-09-motif-kain-batik-khas-kalimantan-utara.webp`,
    kuliner:    `${pv}/kalimantan-utara/food.webp`,
    alam:       `${pv}/kalimantan-utara/destination.webp`,
    destinasi:  `${pv}/kalimantan-utara/destination.webp`,
    cerita:     `${ar}/kalimantan-utara/id-65-kalimantan-utara-06-cerita-rakyat-legenda-buaya-kuning.webp`,
    masaKini:   `${pv}/kalimantan-utara/modern.webp`,
    perjalanan: `${pv}/kalimantan-utara/hero.webp`,
  },

  // ── Sulawesi Utara ────────────────────────────────────────────────────────
  "sulawesi-utara": {
    ringkasan:  `${pv}/sulawesi-utara/hero.webp`,
    geografi:   `${pv}/sulawesi-utara/destination.webp`,
    sejarah:    `${ar}/sulawesi-utara/id-71-sulawesi-utara-11-tokoh-daerah-sam-ratulangi.webp`,
    masyarakat: `${ar}/sulawesi-utara/id-71-sulawesi-utara-12-kepercayaan-tradisi-pemakaman-waruga.webp`,
    budaya:     `${ar}/sulawesi-utara/id-71-sulawesi-utara-01-rumah-adat-wale-wangko-minahasa.webp`,
    bahasa:     `${ar}/sulawesi-utara/id-71-sulawesi-utara-10-motif-kain-ragam-motif-kain-bentenan.webp`,
    kuliner:    `${fd}/ayam-woku.webp`,
    alam:       `${pv}/sulawesi-utara/destination.webp`,
    destinasi:  `${pv}/sulawesi-utara/destination.webp`,
    cerita:     `${ar}/sulawesi-utara/id-71-sulawesi-utara-06-cerita-rakyat-legenda-toar-dan-lumimuut.webp`,
    masaKini:   `${pv}/sulawesi-utara/modern.webp`,
    perjalanan: `${pv}/sulawesi-utara/hero.webp`,
  },

  // ── Gorontalo ─────────────────────────────────────────────────────────────
  "gorontalo": {
    ringkasan:  `${pv}/gorontalo/hero.webp`,
    geografi:   `${pv}/gorontalo/destination.webp`,
    sejarah:    `${ar}/gorontalo/id-75-gorontalo-11-tokoh-daerah-nani-wartabone.webp`,
    masyarakat: `${ar}/gorontalo/id-75-gorontalo-12-kepercayaan-masjid-hunto-sultan-amai.webp`,
    budaya:     `${ar}/gorontalo/id-75-gorontalo-01-rumah-adat-rumah-dulohupa.webp`,
    bahasa:     `${ar}/gorontalo/id-75-gorontalo-10-motif-kain-ragam-hias-pahangga-karawo.webp`,
    kuliner:    `${fd}/binte-biluhuta.webp`,
    alam:       `${pv}/gorontalo/destination.webp`,
    destinasi:  `${pv}/gorontalo/destination.webp`,
    cerita:     `${ar}/gorontalo/id-75-gorontalo-06-cerita-rakyat-legenda-lahilote.webp`,
    masaKini:   `${pv}/gorontalo/modern.webp`,
    perjalanan: `${pv}/gorontalo/hero.webp`,
  },

  // ── Sulawesi Tengah ───────────────────────────────────────────────────────
  "sulawesi-tengah": {
    ringkasan:  `${pv}/sulawesi-tengah/hero.webp`,
    geografi:   `${pv}/sulawesi-tengah/destination.webp`,
    sejarah:    `${ar}/sulawesi-tengah/id-72-sulawesi-tengah-11-tokoh-daerah-tombolotutu.webp`,
    masyarakat: `${ar}/sulawesi-tengah/id-72-sulawesi-tengah-12-kepercayaan-megalit-palindo-lembah-bada.webp`,
    budaya:     `${ar}/sulawesi-tengah/id-72-sulawesi-tengah-01-rumah-adat-rumah-tambi.webp`,
    bahasa:     `${ar}/sulawesi-tengah/id-72-sulawesi-tengah-10-motif-kain-motif-buya-bomba-donggala.webp`,
    kuliner:    `${fd}/kaledo.webp`,
    alam:       `${pv}/sulawesi-tengah/destination.webp`,
    destinasi:  `${pv}/sulawesi-tengah/destination.webp`,
    cerita:     `${ar}/sulawesi-tengah/id-72-sulawesi-tengah-06-cerita-rakyat-legenda-danau-poso.webp`,
    masaKini:   `${pv}/sulawesi-tengah/modern.webp`,
    perjalanan: `${pv}/sulawesi-tengah/hero.webp`,
  },

  // ── Sulawesi Barat ────────────────────────────────────────────────────────
  "sulawesi-barat": {
    ringkasan:  `${pv}/sulawesi-barat/hero.webp`,
    geografi:   `${pv}/sulawesi-barat/destination.webp`,
    sejarah:    `${ar}/sulawesi-barat/id-76-sulawesi-barat-11-tokoh-daerah-andi-depu.webp`,
    masyarakat: `${ar}/sulawesi-barat/id-76-sulawesi-barat-12-kepercayaan-masjid-imam-lapeo.webp`,
    budaya:     `${ar}/sulawesi-barat/id-76-sulawesi-barat-01-rumah-adat-rumah-boyang-mandar.webp`,
    bahasa:     `${ar}/sulawesi-barat/id-76-sulawesi-barat-10-motif-kain-ragam-motif-sekomandi.webp`,
    kuliner:    `${fd}/kapurung.webp`,
    alam:       `${pv}/sulawesi-barat/destination.webp`,
    destinasi:  `${pv}/sulawesi-barat/destination.webp`,
    cerita:     `${ar}/sulawesi-barat/id-76-sulawesi-barat-06-cerita-rakyat-asal-usul-pulau-karampuang.webp`,
    masaKini:   `${pv}/sulawesi-barat/modern.webp`,
    perjalanan: `${pv}/sulawesi-barat/hero.webp`,
  },

  // ── Sulawesi Selatan ──────────────────────────────────────────────────────
  "sulawesi-selatan": {
    ringkasan:  `${pv}/sulawesi-selatan/hero.webp`,
    geografi:   `${pv}/sulawesi-selatan/destination.webp`,
    sejarah:    `${ar}/sulawesi-selatan/id-73-sulawesi-selatan-11-tokoh-daerah-sultan-hasanuddin.webp`,
    masyarakat: `${ar}/sulawesi-selatan/id-73-sulawesi-selatan-12-kepercayaan-masjid-tua-katangka.webp`,
    budaya:     `${ar}/sulawesi-selatan/id-73-sulawesi-selatan-01-rumah-adat-tongkonan-toraja.webp`,
    bahasa:     `${ar}/sulawesi-selatan/id-73-sulawesi-selatan-09-aksara-aksara-lontara-bugis.webp`,
    kuliner:    `${fd}/pallubasa.webp`,
    alam:       `${pv}/sulawesi-selatan/destination.webp`,
    destinasi:  `${pv}/sulawesi-selatan/destination.webp`,
    cerita:     `${ar}/sulawesi-selatan/id-73-sulawesi-selatan-06-cerita-rakyat-epos-i-la-galigo.webp`,
    masaKini:   `${pv}/sulawesi-selatan/modern.webp`,
    perjalanan: `${pv}/sulawesi-selatan/hero.webp`,
  },

  // ── Sulawesi Tenggara ─────────────────────────────────────────────────────
  "sulawesi-tenggara": {
    ringkasan:  `${pv}/sulawesi-tenggara/hero.webp`,
    geografi:   `${pv}/sulawesi-tenggara/destination.webp`,
    sejarah:    `${ar}/sulawesi-tenggara/id-74-sulawesi-tenggara-11-tokoh-daerah-halu-oleo-sultan-murhum.webp`,
    masyarakat: `${ar}/sulawesi-tenggara/id-74-sulawesi-tenggara-12-kepercayaan-masjid-agung-keraton-buton.webp`,
    budaya:     `${ar}/sulawesi-tenggara/id-74-sulawesi-tenggara-01-rumah-adat-laika-rumah-adat-tolaki.webp`,
    bahasa:     `${ar}/sulawesi-tenggara/id-74-sulawesi-tenggara-10-motif-kain-ragam-motif-tenun-buton.webp`,
    kuliner:    `${fd}/bau-peapi.webp`,
    alam:       `${pv}/sulawesi-tenggara/destination.webp`,
    destinasi:  `${pv}/sulawesi-tenggara/destination.webp`,
    cerita:     `${ar}/sulawesi-tenggara/id-74-sulawesi-tenggara-06-cerita-rakyat-legenda-oheo.webp`,
    masaKini:   `${pv}/sulawesi-tenggara/modern.webp`,
    perjalanan: `${pv}/sulawesi-tenggara/hero.webp`,
  },

  // ── Maluku ────────────────────────────────────────────────────────────────
  "maluku": {
    ringkasan:  `${pv}/maluku/hero.webp`,
    geografi:   `${pv}/maluku/destination.webp`,
    sejarah:    `${ar}/maluku/id-81-maluku-11-tokoh-daerah-kapitan-pattimura.webp`,
    masyarakat: `${ar}/maluku/id-81-maluku-12-kepercayaan-masjid-tua-wapauwe.webp`,
    budaya:     `${ar}/maluku/id-81-maluku-01-rumah-adat-rumah-baileo-negeri-akoon.webp`,
    bahasa:     `${ar}/maluku/id-81-maluku-09-aksara-aksara-jawi-hikayat-tanah-hitu.webp`,
    kuliner:    `${fd}/gohu-ikan.webp`,
    alam:       `${pv}/maluku/destination.webp`,
    destinasi:  `${pv}/maluku/destination.webp`,
    cerita:     `${ar}/maluku/id-81-maluku-06-cerita-rakyat-legenda-nenek-luhu.webp`,
    masaKini:   `${pv}/maluku/modern.webp`,
    perjalanan: `${pv}/maluku/hero.webp`,
  },

  // ── Maluku Utara ──────────────────────────────────────────────────────────
  "maluku-utara": {
    ringkasan:  `${pv}/maluku-utara/hero.webp`,
    geografi:   `${pv}/maluku-utara/destination.webp`,
    sejarah:    `${ar}/maluku-utara/id-82-maluku-utara-11-tokoh-daerah-sultan-nuku-muhammad-amiruddin.webp`,
    masyarakat: `${ar}/maluku-utara/id-82-maluku-utara-12-kepercayaan-masjid-sultan-ternate.webp`,
    budaya:     `${ar}/maluku-utara/id-82-maluku-utara-01-rumah-adat-rumah-hibualamo-tobelo.webp`,
    bahasa:     `${ar}/maluku-utara/id-82-maluku-utara-09-aksara-aksara-jawi-surat-sultan-abu-hayat.webp`,
    kuliner:    `${fd}/gohu-ikan.webp`,
    alam:       `${pv}/maluku-utara/destination.webp`,
    destinasi:  `${pv}/maluku-utara/destination.webp`,
    cerita:     `${ar}/maluku-utara/id-82-maluku-utara-06-cerita-rakyat-legenda-danau-tolire.webp`,
    masaKini:   `${pv}/maluku-utara/modern.webp`,
    perjalanan: `${pv}/maluku-utara/hero.webp`,
  },

  // ── Papua ─────────────────────────────────────────────────────────────────
  "papua": {
    ringkasan:  `${pv}/papua/hero.webp`,
    geografi:   `${pv}/papua/destination.webp`,
    sejarah:    `${ar}/papua/id-91-papua-05-upacara-tradisi-festival-danau-sentani.webp`,
    masyarakat: `${ar}/papua/id-91-papua-12-kepercayaan-gereja-jayapura.webp`,
    budaya:     `${ar}/papua/id-91-papua-08-kerajinan-noken-serat-tumbuhan.webp`,
    bahasa:     `${ar}/papua/id-91-papua-10-motif-kain-motif-lukis-tubuh-sentani.webp`,
    kuliner:    `${pv}/papua/food.webp`,
    alam:       `${pv}/papua/destination.webp`,
    destinasi:  `${pv}/papua/destination.webp`,
    cerita:     `${ar}/papua/id-91-papua-06-cerita-rakyat-asal-usul-danau-sentani.webp`,
    masaKini:   `${pv}/papua/modern.webp`,
    perjalanan: `${pv}/papua/hero.webp`,
  },

  // ── Papua Barat ───────────────────────────────────────────────────────────
  "papua-barat": {
    ringkasan:  `${pv}/papua-barat/hero.webp`,
    geografi:   `${pv}/papua-barat/destination.webp`,
    sejarah:    `${ar}/papua-barat-daya/id-96-papua-barat-daya-05-upacara-tradisi-sasi-laut-raja-ampat.webp`,
    masyarakat: `${ar}/papua-barat-daya/id-96-papua-barat-daya-12-kepercayaan-keberagaman-agama-sorong.webp`,
    budaya:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-01-rumah-adat-rumah-kaki-seribu.webp`,
    bahasa:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-10-motif-kain-motif-hias-tehit.webp`,
    kuliner:    `${pv}/papua-barat/food.webp`,
    alam:       `${pv}/papua-barat/destination.webp`,
    destinasi:  `${pv}/papua-barat/destination.webp`,
    cerita:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-06-cerita-rakyat-legenda-empat-raja.webp`,
    masaKini:   `${pv}/papua-barat/modern.webp`,
    perjalanan: `${pv}/papua-barat/hero.webp`,
  },

  // ── Papua Barat Daya ──────────────────────────────────────────────────────
  "papua-barat-daya": {
    ringkasan:  `${pv}/papua-barat-daya/hero.webp`,
    geografi:   `${pv}/papua-barat-daya/destination.webp`,
    sejarah:    `${ar}/papua-barat-daya/id-96-papua-barat-daya-05-upacara-tradisi-sasi-laut-raja-ampat.webp`,
    masyarakat: `${ar}/papua-barat-daya/id-96-papua-barat-daya-12-kepercayaan-keberagaman-agama-sorong.webp`,
    budaya:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-01-rumah-adat-rumah-kaki-seribu.webp`,
    bahasa:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-10-motif-kain-motif-hias-tehit.webp`,
    kuliner:    `${pv}/papua-barat-daya/food.webp`,
    alam:       `${pv}/papua-barat-daya/destination.webp`,
    destinasi:  `${pv}/papua-barat-daya/destination.webp`,
    cerita:     `${ar}/papua-barat-daya/id-96-papua-barat-daya-06-cerita-rakyat-legenda-empat-raja.webp`,
    masaKini:   `${pv}/papua-barat-daya/modern.webp`,
    perjalanan: `${pv}/papua-barat-daya/hero.webp`,
  },

  // ── Papua Tengah ──────────────────────────────────────────────────────────
  "papua-tengah": {
    ringkasan:  `${pv}/papua-tengah/hero.webp`,
    geografi:   `${pv}/papua-tengah/destination.webp`,
    sejarah:    `${ar}/papua-tengah/id-94-papua-tengah-05-upacara-tradisi-gapiia-bakar-batu-paniai.webp`,
    masyarakat: `${ar}/papua-tengah/id-94-papua-tengah-12-kepercayaan-kekristenan-masyarakat-mee.webp`,
    budaya:     `${ar}/papua-tengah/id-94-papua-tengah-02-tarian-tarian-adat-suku-mee.webp`,
    bahasa:     `${ar}/papua-tengah/id-94-papua-tengah-10-motif-kain-motif-geometris-noken-mee.webp`,
    kuliner:    `${pv}/papua-tengah/food.webp`,
    alam:       `${pv}/papua-tengah/destination.webp`,
    destinasi:  `${pv}/papua-tengah/destination.webp`,
    cerita:     `${ar}/papua-tengah/id-94-papua-tengah-06-cerita-rakyat-legenda-danau-paniai.webp`,
    masaKini:   `${pv}/papua-tengah/modern.webp`,
    perjalanan: `${pv}/papua-tengah/hero.webp`,
  },

  // ── Papua Pegunungan ──────────────────────────────────────────────────────
  "papua-pegunungan": {
    ringkasan:  `${pv}/papua-pegunungan/hero.webp`,
    geografi:   `${pv}/papua-pegunungan/destination.webp`,
    sejarah:    `${ar}/papua-pegunungan/id-95-papua-pegunungan-05-upacara-tradisi-bakar-batu-barapen.webp`,
    masyarakat: `${ar}/papua-pegunungan/id-95-papua-pegunungan-11-kepercayaan-mumi-suku-dani.webp`,
    budaya:     `${ar}/papua-pegunungan/id-95-papua-pegunungan-01-rumah-adat-honai.webp`,
    bahasa:     `${ar}/papua-pegunungan/id-95-papua-pegunungan-09-motif-kain-motif-noken.webp`,
    kuliner:    `${pv}/papua-pegunungan/food.webp`,
    alam:       `${pv}/papua-pegunungan/destination.webp`,
    destinasi:  `${pv}/papua-pegunungan/destination.webp`,
    cerita:     `${ar}/papua-pegunungan/id-95-papua-pegunungan-06-cerita-rakyat-legenda-asal-usul-wamena.webp`,
    masaKini:   `${pv}/papua-pegunungan/modern.webp`,
    perjalanan: `${pv}/papua-pegunungan/hero.webp`,
  },

  // ── Papua Selatan ─────────────────────────────────────────────────────────
  "papua-selatan": {
    ringkasan:  `${pv}/papua-selatan/hero.webp`,
    geografi:   `${pv}/papua-selatan/destination.webp`,
    sejarah:    `${ar}/papua-selatan/id-93-papua-selatan-04-upacara-tradisi-upacara-bisj-asmat.webp`,
    masyarakat: `${ar}/papua-selatan/id-93-papua-selatan-09-kepercayaan-roh-leluhur-topeng-jipae.webp`,
    budaya:     `${ar}/papua-selatan/id-93-papua-selatan-06-kerajinan-ukiran-kayu-asmat.webp`,
    bahasa:     `${ar}/papua-selatan/id-93-papua-selatan-07-motif-kain-ragam-hias-asmat.webp`,
    kuliner:    `${pv}/papua-selatan/food.webp`,
    alam:       `${pv}/papua-selatan/destination.webp`,
    destinasi:  `${pv}/papua-selatan/destination.webp`,
    cerita:     `${ar}/papua-selatan/id-93-papua-selatan-11-cerita-rakyat-hikayat-fumeripits.webp`,
    masaKini:   `${pv}/papua-selatan/modern.webp`,
    perjalanan: `${pv}/papua-selatan/hero.webp`,
  },
};

/**
 * Mengambil ChapterImages untuk provinsi tertentu.
 * @param provinceId slug provinsi (contoh: "kalimantan-timur")
 */
export function getChapterImages(provinceId: string): ChapterImages {
  return PROVINCE_CHAPTER_IMAGES[provinceId] ?? {};
}
