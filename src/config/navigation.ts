import { NavigationItem } from "@/components/navigation/navigation.types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "beranda",
    label: {
      id: "Beranda",
      en: "Home"
    },
    href: "/"
  },
  {
    id: "jelajahi",
    label: {
      id: "Jelajahi",
      en: "Explore"
    },
    href: "/explore"
  },
  {
    id: "rute",
    label: {
      id: "Rute",
      en: "Routes"
    },
    href: "/routes"
  },
  {
    id: "ekosistem",
    label: {
      id: "Ekosistem Nusa",
      en: "Nusa Ecosystem"
    },
    children: [
      {
        id: "archive",
        label: {
          id: "Nusa Archive",
          en: "Nusa Archive"
        },
        href: "/archive",
        description: {
          id: "Arsip dan memori budaya Nusantara",
          en: "Archives and cultural memory of Nusantara"
        }
      },
      {
        id: "atlas",
        label: {
          id: "Nusa Atlas",
          en: "Nusa Atlas"
        },
        href: "/explore#interactive-map",
        description: {
          id: "Atlas interaktif 38 provinsi",
          en: "Interactive atlas of 38 provinces"
        }
      },
      {
        id: "rasa",
        label: {
          id: "NusaRasa",
          en: "NusaRasa"
        },
        href: "/rasa",
        description: {
          id: "Peta kuliner dan cerita rasa Nusantara",
          en: "Culinary map and flavor stories of Nusantara"
        }
      },
      {
        id: "future",
        label: {
          id: "Nusa Future",
          en: "Nusa Future"
        },
        href: "/future",
        description: {
          id: "Observatorium masa depan Nusantara",
          en: "Observatory of Nusantara's future"
        }
      },
      {
        id: "passport",
        label: {
          id: "Nusa Passport",
          en: "Nusa Passport"
        },
        href: "/passport",
        description: {
          id: "Progres, stempel, badge, dan rute tersimpan",
          en: "Progress, stamps, badges, and saved routes"
        }
      }
    ]
  },
  {
    id: "tentang",
    label: {
      id: "Tentang",
      en: "About"
    },
    href: "/about"
  }
];

export function getActiveNavigationId(pathname: string): string | null {
  if (pathname === "/") return "beranda";
  if (pathname === "/explore") return "jelajahi";
  if (pathname === "/routes") return "rute";
  if (pathname === "/about") return "tentang";
  
  if (pathname.startsWith("/archive")) return "ekosistem";
  if (pathname.startsWith("/rasa")) return "ekosistem";
  if (pathname.startsWith("/future")) return "ekosistem";
  if (pathname.startsWith("/passport")) return "ekosistem";
  if (pathname.startsWith("/provinsi")) return "ekosistem";
  
  return null;
}

export function getActiveChildId(pathname: string): string | null {
  if (pathname.startsWith("/archive")) return "archive";
  if (pathname.startsWith("/rasa")) return "rasa";
  if (pathname.startsWith("/future")) return "future";
  if (pathname.startsWith("/passport")) return "passport";
  if (pathname.startsWith("/provinsi")) return "atlas";
  
  return null;
}
