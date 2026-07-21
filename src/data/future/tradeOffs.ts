export type FutureTradeOff = {
  id: string;
  title: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
};

export const FUTURE_TRADEOFFS: Record<string, FutureTradeOff> = {
  "ecological-footprint": {
    id: "ecological-footprint",
    title: "Jejak Ekologis vs Pembangunan",
    description: "Infrastruktur besar membutuhkan pembukaan lahan yang berisiko pada keanekaragaman hayati jika tidak diimbangi restorasi agresif.",
    riskLevel: "high"
  },
  "digital-divide": {
    id: "digital-divide",
    title: "Kesenjangan Digital",
    description: "Inovasi yang bertumpu pada internet berkecepatan tinggi dapat meninggalkan komunitas marginal dan desa terpencil.",
    riskLevel: "medium"
  },
  "gentrification": {
    id: "gentrification",
    title: "Gentrifikasi",
    description: "Modernisasi kota dapat meningkatkan biaya hidup dan menggusur penduduk asli dari wilayah tempat tinggal mereka.",
    riskLevel: "high"
  },
  "cultural-erosion": {
    id: "cultural-erosion",
    title: "Erosi Budaya",
    description: "Komersialisasi budaya lokal untuk skala global tanpa pelindungan memadai dapat menghilangkan makna aslinya.",
    riskLevel: "medium"
  },
  "data-privacy": {
    id: "data-privacy",
    title: "Privasi Data Warga",
    description: "Integrasi layanan publik secara digital meningkatkan risiko keamanan data pribadi warga jika pengamanan tidak berlapis.",
    riskLevel: "high"
  }
};
