import type { DemoJourneyStep } from "./demoJourney.types"

export const demoJourneySteps: DemoJourneyStep[] = [
  {
    id: "map",
    number: "01",
    title: "Buka Nusa Map",
    shortTitle: "Nusa Map",
    description:
      "Mulai dari peta interaktif Indonesia dan lihat 38 provinsi sebagai pintu masuk eksplorasi.",
    microcopy: "Satu peta sebagai gerbang awal.",
    icon: "/assets/ui/icons/icon-map.svg",
    color: "#2D6BE4",
    features: ["38 Provinsi", "Layer", "Search"],
    mockupType: "map"
  },
  {
    id: "province",
    number: "02",
    title: "Pilih Provinsi",
    shortTitle: "Provinsi",
    description:
      "Klik provinsi untuk melihat ringkasan budaya, kuliner, destinasi, sejarah, dan potensi modern daerah tersebut.",
    microcopy: "Setiap provinsi punya cerita pertama.",
    icon: "/assets/ui/icons/icon-archive.svg",
    color: "#C9A84C",
    features: ["Ringkasan", "Highlight", "CTA Detail"],
    mockupType: "province"
  },
  {
    id: "detail",
    number: "03",
    title: "Baca Detail Provinsi",
    shortTitle: "Detail",
    description:
      "Telusuri timeline sejarah, tradisi, aksara, destinasi, cerita daerah, potensi modern, dan quiz mini dalam satu halaman provinsi.",
    microcopy: "Dari ringkasan menuju kedalaman.",
    icon: "/assets/ui/icons/icon-archive.svg",
    color: "#8B2020",
    features: ["Timeline", "Tradisi", "Quiz"],
    mockupType: "detail"
  },
  {
    id: "culture-rasa",
    number: "04",
    title: "Jelajahi Budaya & Rasa",
    shortTitle: "Budaya & Rasa",
    description:
      "Buka Nusa Archive dan NusaRasa untuk menemukan arsip budaya, tradisi, kuliner khas, rempah, dan cerita rasa dari tiap daerah.",
    microcopy: "Budaya dibaca, rasa dicicipi.",
    icon: "/assets/ui/icons/icon-culinary.svg",
    color: "#D4691E",
    features: ["Archive", "NusaRasa", "Food Battle"],
    mockupType: "cultureRasa"
  },
  {
    id: "route",
    number: "05",
    title: "Buat Rute Perjalanan",
    shortTitle: "Route",
    description:
      "Gunakan Route Planner untuk menyusun itinerary berdasarkan durasi, minat, wilayah, budget, dan gaya traveler.",
    microcopy: "Dari inspirasi menjadi perjalanan.",
    icon: "/assets/ui/icons/icon-route.svg",
    color: "#2D5A27",
    features: ["Itinerary", "Budget", "Checklist"],
    mockupType: "route"
  },
  {
    id: "passport",
    number: "06",
    title: "Kumpulkan Passport",
    shortTitle: "Passport",
    description:
      "Dapatkan stempel provinsi, badge wilayah, dan level explorer saat kamu membuka provinsi, menyelesaikan quiz, atau menyimpan rute.",
    microcopy: "Setiap eksplorasi meninggalkan jejak.",
    icon: "/assets/ui/icons/icon-passport.svg",
    color: "#C9A84C",
    features: ["Stamp", "Badge", "Level"],
    mockupType: "passport"
  },
  {
    id: "rani",
    number: "07",
    title: "Tanya RANI",
    shortTitle: "RANI",
    description:
      "Minta rekomendasi destinasi, tips budaya, itinerary, etika wisata, atau ide perjalanan berikutnya dari RANI AI Guide.",
    microcopy: "Eksplorasi berlanjut dengan pemandu digital.",
    icon: "/assets/ui/icons/icon-rani.svg",
    color: "#6B3FA0",
    features: ["AI Guide", "Tips", "Rekomendasi"],
    mockupType: "rani"
  }
]
