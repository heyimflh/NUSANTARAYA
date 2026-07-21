export type FutureSource = {
  id: string;
  name: string;
  type: "academic" | "government" | "news" | "ngo" | "community" | "nusa-editorial";
  url?: string;
  dateStr?: string;
};

export const FUTURE_SOURCES: Record<string, FutureSource> = {
  "ikn-masterplan": {
    id: "ikn-masterplan",
    name: "Cetak Biru Kota Cerdas Nusantara",
    type: "government",
    dateStr: "2023",
  },
  "nusa-editorial-2024": {
    id: "nusa-editorial-2024",
    name: "Observasi Lapangan NUSANTARAYA",
    type: "nusa-editorial",
    dateStr: "2024-05",
  },
  "bappenas-rpjpn-2045": {
    id: "bappenas-rpjpn-2045",
    name: "RPJPN 2025-2045 Bappenas",
    type: "government",
    dateStr: "2023",
  },
  "kominfo-100-smart-city": {
    id: "kominfo-100-smart-city",
    name: "Gerakan Menuju 100 Smart City",
    type: "government",
  },
  "desa-digital-jabar": {
    id: "desa-digital-jabar",
    name: "Laporan Ekosistem Desa Digital Jawa Barat",
    type: "government",
  },
  "kemenparekraf-creative": {
    id: "kemenparekraf-creative",
    name: "Outlook Ekonomi Kreatif Indonesia",
    type: "government",
  }
};
