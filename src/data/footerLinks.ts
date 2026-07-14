export type LinkStatus = "live" | "soon" | "anchor";

export type FooterLink = {
  label: string;
  href: string;
  status?: LinkStatus;
};

export const footerLinkGroups = [
  {
    title: "Jelajahi",
    links: [
      { label: "Nusa Map", href: "/explore", status: "live" },
      { label: "Provinsi", href: "/provinsi", status: "soon" },
      { label: "Nusa Archive", href: "/archive", status: "soon" },
      { label: "NusaRasa", href: "/rasa", status: "soon" },
      { label: "Route Planner", href: "/routes", status: "soon" },
      { label: "Passport", href: "/explore#passport-progress", status: "live" }
    ] as FooterLink[]
  },
  {
    title: "Fitur",
    links: [
      { label: "RANI AI Guide", href: "/rani", status: "soon" },
      { label: "Nusa Future", href: "/future", status: "soon" },
      { label: "Aksara Lab", href: "/aksara", status: "soon" },
      { label: "Jalur Rempah", href: "/jalur-rempah", status: "soon" },
      { label: "Event Calendar", href: "/events", status: "soon" },
      { label: "Tourist Mode", href: "/tourist", status: "soon" }
    ] as FooterLink[]
  },
  {
    title: "Tentang",
    links: [
      { label: "Tentang NUSANTARAYA", href: "/about", status: "soon" },
      { label: "Sumber Data", href: "/sources", status: "soon" },
      { label: "Roadmap", href: "/roadmap", status: "soon" },
      { label: "Credits", href: "/credits", status: "soon" },
      { label: "Kontak", href: "/contact", status: "soon" }
    ] as FooterLink[]
  }
];

export const footerSocials = [
  { label: "Instagram", href: "https://instagram.com/nusantaraya", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/mufalah", icon: "github" },
  { label: "Email", href: "mailto:mufalahcode@gmail.com", icon: "mail" },
];

export const footerMeta = {
  brand: "NUSANTARAYA",
  tagline: "Satu Peta, Ribuan Cerita",
  description:
    "Web app eksplorasi digital Indonesia yang menghubungkan peta, budaya, rasa, rute perjalanan, passport, AI guide, dan masa depan digital Nusantara.",
  copyright:
    "© 2026 NUSANTARAYA. Dibuat untuk Nusantara Digital City — Mufalah Code.",
  version: "v1.0 • Homepage MVP",
};

export const finalCta = {
  eyebrow: "Mulai Jelajah",
  title: "Satu Peta, Ribuan Cerita Menunggumu",
  description:
    "Mulai dari satu provinsi, lalu biarkan ceritanya membawamu ke budaya, rasa, perjalanan, dan masa depan digital Nusantara.",
  primary: {
    label: "Buka Nusa Map",
    href: "/explore"
  },
  secondary: {
    label: "Coba Route Planner",
    href: "/routes"
  },
  microcopy: "Mulai dari satu klik. Sisanya biarkan Nusantara bercerita."
};
