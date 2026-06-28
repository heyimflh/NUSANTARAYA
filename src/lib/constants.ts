/**
 * NUSANTARAYA Design Tokens — Heritage Futuristic (Light Mode)
 * Sumber kebenaran: PRD.md §16 Design System
 *
 * Semua warna, font, spacing, dan breakpoint didefinisikan di sini
 * dan di-mirror ke CSS variables (globals.css) + Tailwind @theme.
 */

// ─── Warna Primer ────────────────────────────────────────────────────────────
export const COLORS = {
  // Background & Surface
  bg: "#F8F4EA",           // Krem Gading — latar utama
  bgWarm: "#FFFDF8",       // Putih hangat — alternatif
  surface: "#FFFFFF",      // Card / surface putih
  border: "#E8E0CE",       // Border tipis card
  borderLight: "#F0E9D8",  // Border lebih ringan

  // Teks
  text: "#0D1B2A",         // Navy Dalam — teks utama
  textSecondary: "#4A5568", // Teks sekunder
  textMuted: "#9DAEC2",    // Teks muted

  // Aksen Utama
  gold: "#C9A84C",         // Emas Nusantara — CTA/aksen utama
  goldLight: "#E8D48B",    // Emas terang
  goldDark: "#A08A3A",     // Emas gelap

  // Aksen Pendukung
  merah: "#8B2020",        // Merah Pusaka
  biru: "#2D6BE4",         // Biru Digital
  hijau: "#2D5A27",        // Hijau Hutan

  // Warna per Wilayah (untuk pin peta & badge)
  wilayah: {
    sumatera: "#B85C38",
    jawa: "#2B4C8C",
    kalimantan: "#1A5C3A",
    sulawesi: "#D4691E",
    baliNusaTenggara: "#6B3FA0",
    maluku: "#1B7A7A",
    papua: "#1A4A7A",
  },
} as const;

// ─── Tipografi ───────────────────────────────────────────────────────────────
export const FONTS = {
  heading: "var(--font-playfair)",   // Playfair Display
  body: "var(--font-inter)",         // Inter
  uiLabel: "var(--font-inter)",      // Inter Medium (weight 500)
} as const;

// ─── Breakpoints (Tailwind defaults, dokumentasi) ────────────────────────────
export const BREAKPOINTS = {
  mobile: 0,       // base — mobile first
  tablet: 768,     // md
  desktop: 1024,   // lg
  wide: 1280,      // xl
} as const;

// ─── Navigasi ────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Beranda", labelEn: "Home", href: "/", icon: "home" },
  { label: "Jelajahi", labelEn: "Explore", href: "/map", icon: "map" },
  { label: "Rute", labelEn: "Routes", href: "/routes", icon: "route" },
  { label: "Passport", labelEn: "Passport", href: "/passport", icon: "stamp" },
  { label: "Menu", labelEn: "Menu", href: "#menu", icon: "menu" },
] as const;

export const DESKTOP_NAV_ITEMS = [
  { label: "Beranda", labelEn: "Home", href: "/" },
  { label: "Jelajahi", labelEn: "Explore", href: "/map", children: [
    { label: "Peta Indonesia", labelEn: "Indonesia Map", href: "/map" },
  ]},
  { label: "Budaya", labelEn: "Culture", href: "/archive" },
  { label: "Kuliner", labelEn: "Culinary", href: "/nusarasa" },
  { label: "Wisata", labelEn: "Travel", href: "/routes" },
  { label: "Passport", labelEn: "Passport", href: "/passport" },
] as const;

// ─── Wilayah Mapping ─────────────────────────────────────────────────────────
export const REGIONS = [
  "Sumatera",
  "Jawa",
  "Kalimantan",
  "Sulawesi",
  "Bali dan Nusa Tenggara",
  "Maluku",
  "Papua",
] as const;

export type Region = typeof REGIONS[number];

// ─── Passport Levels ─────────────────────────────────────────────────────────
export const PASSPORT_LEVELS = [
  { name: "Penjelajah Baru", nameEn: "New Explorer", minStamps: 0, maxStamps: 5 },
  { name: "Petualang Nusantara", nameEn: "Nusantara Adventurer", minStamps: 6, maxStamps: 15 },
  { name: "Pengembara Sejati", nameEn: "True Wanderer", minStamps: 16, maxStamps: 25 },
  { name: "Penjaga Warisan", nameEn: "Heritage Guardian", minStamps: 26, maxStamps: 35 },
  { name: "Pahlawan Nusantara", nameEn: "Nusantara Hero", minStamps: 36, maxStamps: 38 },
] as const;
