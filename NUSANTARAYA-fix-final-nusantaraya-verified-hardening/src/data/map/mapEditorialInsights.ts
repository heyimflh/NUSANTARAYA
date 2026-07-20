import { EditorialInsight } from "@/types/mapInsights";

export const mapEditorialInsightsId: EditorialInsight[] = [
  // Default insight
  {
    id: "default",
    locale: "id",
    text: "Dari 38 provinsi, delapan flagship menjadi pintu masuk tercepat untuk melihat kedalaman penuh Atlas NUSANTARAYA.",
    evidenceKeys: ["nusantara-flagships-depth"],
    primaryActionId: "action-view-flagships",
  },
  // Layer insights
  {
    id: "layer-budaya",
    locale: "id",
    layerId: "budaya",
    text: "Tradisi, rumah adat, festival, dan ekspresi lokal tersebar lintas tujuh wilayah—tidak berhenti pada satu pusat budaya.",
    evidenceKeys: ["layer-budaya-distribution"],
    primaryActionId: "action-layer-explore",
  },
  {
    id: "layer-kuliner",
    locale: "id",
    layerId: "kuliner",
    text: "Layer Kuliner menghubungkan rasa, rempah, teknik memasak, dan cerita daerah dalam satu peta.",
    evidenceKeys: ["layer-kuliner-connection"],
    primaryActionId: "action-layer-explore",
  },
  {
    id: "layer-alam",
    locale: "id",
    layerId: "alam",
    text: "Layer Alam menyorot bentang gunung, laut, hutan, desa wisata, dan biodiversitas secara selektif.",
    evidenceKeys: ["layer-alam-highlights"],
    primaryActionId: "action-layer-explore",
  },
  {
    id: "layer-sejarah",
    locale: "id",
    layerId: "sejarah",
    text: "Layer Sejarah membantu melihat hubungan kerajaan, pelabuhan, situs warisan, dan perubahan wilayah.",
    evidenceKeys: ["layer-sejarah-relations"],
    primaryActionId: "action-layer-explore",
  },
  {
    id: "layer-rempah",
    locale: "id",
    layerId: "rempah",
    text: "Jalur Rempah berpusat kuat di Maluku, lalu terhubung dengan pelabuhan dan jaringan maritim Nusantara.",
    evidenceKeys: ["layer-rempah-routes"],
    primaryActionId: "action-layer-explore",
  },
  {
    id: "layer-future",
    locale: "id",
    layerId: "future",
    text: "Kota Masa Depan menghubungkan IKN, smart city, ekonomi kreatif, dan transformasi digital daerah.",
    evidenceKeys: ["layer-future-smartcity"],
    primaryActionId: "action-layer-explore",
  },
  // Mode insights
  {
    id: "mode-explore",
    locale: "id",
    modeId: "explore",
    text: "Temukan hubungan tak terduga antara provinsi, tema, dan perjalanan.",
    evidenceKeys: ["mode-explore-relations"],
    primaryActionId: "action-mode-explore",
  },
  {
    id: "mode-tourist",
    locale: "id",
    modeId: "tourist",
    text: "Fokuskan peta pada destinasi, rasa, etika wisata, dan handoff ke Route Planner.",
    evidenceKeys: ["mode-tourist-focus"],
    primaryActionId: "action-mode-explore",
  },
  {
    id: "mode-learn",
    locale: "id",
    modeId: "learn",
    text: "Baca konteks sejarah, budaya, bahasa, dan sumber melalui Atlas dan Archive.",
    evidenceKeys: ["mode-learn-context"],
    primaryActionId: "action-mode-explore",
  },
];
