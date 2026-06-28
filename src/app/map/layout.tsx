import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peta Indonesia — 38 Provinsi Interaktif",
  description: "Jelajahi 38 provinsi Indonesia melalui peta interaktif. Klik provinsi untuk melihat budaya, kuliner, destinasi, dan potensi modern.",
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
