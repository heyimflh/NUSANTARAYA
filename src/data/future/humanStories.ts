export type FutureHumanStory = {
  id: string;
  name: string;
  role: "maker" | "teacher" | "health-worker" | "mobility-user" | "fisher" | "farmer" | "researcher" | "organizer";
  location: string;
  themeId: string;
  chapters: {
    title: string;
    content: string;
  }[];
  isComposite: boolean;
};

export const FUTURE_HUMAN_STORIES: FutureHumanStory[] = [
  {
    id: "story-dayak-forest-guardian",
    name: "Yulianus",
    role: "organizer",
    location: "Kalimantan Timur",
    themeId: "regenerative-environment",
    chapters: [
      {
        title: "Penjaga Hutan di Era Pemindahan Kota",
        content: "Bagi komunitas adat, hutan bukan sekadar deretan pohon, melainkan perpustakaan hidup dan sumber apotek alami yang telah menopang generasi."
      },
      {
        title: "Mendesain Koridor Satwa",
        content: "Kini, Yulianus dan rekan-rekannya dilibatkan dalam pemetaan wilayah hijau untuk memastikan pembangunan kota tidak memotong jalur lintasan orangutan dan beruang madu."
      }
    ],
    isComposite: true
  },
  {
    id: "story-digital-farmer-jabar",
    name: "Asep",
    role: "farmer",
    location: "Jawa Barat",
    themeId: "digital-villages",
    chapters: [
      {
        title: "Bertani dengan Sensor Cuaca",
        content: "Dulu, gagal panen adalah takdir yang harus diterima. Kini, Asep memanfaatkan sensor tanah terjangkau yang dikembangkan oleh universitas lokal untuk mengukur kelembapan secara presisi."
      },
      {
        title: "Dari Desa ke Pasar Nasional",
        content: "Melalui ekosistem desa digital, hasil panen langsung didistribusikan ke jaringan logistik tanpa harus melewati rantai tengkulak yang panjang, memberikan harga adil bagi petani."
      }
    ],
    isComposite: true
  }
];
