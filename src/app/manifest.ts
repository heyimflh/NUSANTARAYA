import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NUSANTARAYA — Satu Peta, Ribuan Cerita",
    short_name: "NUSANTARAYA",
    description:
      "Platform eksplorasi digital Indonesia. Jelajahi 38 provinsi melalui peta interaktif, arsip budaya, atlas kuliner, route planner, dan digital passport.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EA",
    theme_color: "#2D2419",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
