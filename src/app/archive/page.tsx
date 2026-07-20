import type { Metadata } from "next";
import { ArchivePage } from "@/components/archive/ArchivePage";

export const metadata: Metadata = {
  title: "Nusa Archive — Arsip Budaya Indonesia",
  description:
    "Temukan tradisi, aksara, cerita, bunyi, bentuk, dan pengetahuan dari berbagai wilayah Indonesia—lengkap dengan konteks, sumber, dan jalur eksplorasi berikutnya.",
  openGraph: {
    title: "Nusa Archive — Arsip Budaya Indonesia | NUSANTARAYA",
    description:
      "Pusat pengetahuan budaya NUSANTARAYA. Jelajahi rumah adat, tarian, alat musik, pakaian, aksara, dan ratusan warisan budaya dari 38 provinsi.",
    url: "/archive",
    type: "website",
  },
  alternates: {
    canonical: "/archive",
  },
};

export default function ArchiveRoute() {
  return <ArchivePage />;
}
