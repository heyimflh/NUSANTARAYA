export type Destination = {
  id: string;
  province: string;
  title: string;
  tagline: string;
  shortLabel: string;
  background: string;
  alt: string;
  description: string;
  carouselTitle: string;
  carouselDesc: string;
  peopleCount: string;
};

export const destinations: Destination[] = [
  {
    id: "bali",
    province: "Bali",
    title: "Pantai Kelingking",
    tagline: "Pesona Surga Tersembunyi di Nusa Penida",
    shortLabel: "Bali",
    background: "/assets/video/video1_pantaikelingkingbali.mp4",
    alt: "Keindahan tebing Pantai Kelingking yang menyerupai dinosaurus",
    description: "Berdirilah di atas tebing karang ikonik berbentuk T-Rex, saksikan gulungan ombak samudra biru, dan rasakan ketenangan pasir putih yang terisolasi di Nusa Penida.",
    carouselTitle: "Tebing Kelingking",
    carouselDesc: "Nikmati panorama tebing purba spektakuler dan pantai pasir putih yang murni.",
    peopleCount: "15.4k+"
  },
  {
    id: "papua-barat",
    province: "Papua Barat",
    title: "Raja Ampat",
    tagline: "Keajaiban Surga Bawah Laut Dunia",
    shortLabel: "Papua",
    background: "/assets/video/video2_rajaampat.mp4",
    alt: "Gugusan pulau karang Raja Ampat dari ketinggian",
    description: "Jelajahi pusat keanekaragaman hayati laut global di antara labirin pulau karst hijau, air laut bening kristal, dan terumbu karang warna-warni yang menakjubkan.",
    carouselTitle: "Karang Raja Ampat",
    carouselDesc: "Selami terumbu karang terkaya di dunia dan berenang bersama biota laut langka.",
    peopleCount: "12.8k+"
  },
  {
    id: "jateng",
    province: "Jawa Tengah",
    title: "Candi Borobudur",
    tagline: "Kemegahan Spiritual Warisan Leluhur Dunia",
    shortLabel: "Jateng",
    background: "/assets/video/video3_borobudur.mp4",
    alt: "Keagungan Candi Borobudur yang diselimuti kabut pagi",
    description: "Saksikan momen magis saat matahari terbit perlahan menyinari stupa Buddha kuno di tengah kepulan kabut pagi, membangkitkan rasa damai dan keagungan sejarah.",
    carouselTitle: "Sunrise Borobudur",
    carouselDesc: "Merasakan kedamaian batin saat fajar menyingsing di atas monumen Buddha terbesar.",
    peopleCount: "18.2k+"
  },
  {
    id: "ntb",
    province: "Nusa Tenggara Barat",
    title: "Gunung Rinjani",
    tagline: "Keagungan Kaldera & Danau Segara Anak",
    shortLabel: "NTB",
    background: "/assets/video/video4_gunung rinjani.mp4",
    alt: "Kawah Gunung Rinjani dengan latar belakang Danau Segara Anak",
    description: "Taklukkan salah satu puncak vulkanik paling menantang dan memukau di Indonesia, nikmati pemandangan danau kawah Segara Anak yang mistis di bawah langit berbintang.",
    carouselTitle: "Puncak Rinjani",
    carouselDesc: "Daki puncak vulkanik megah dan berkemah di tepi danau kaldera biru jernih.",
    peopleCount: "9.5k+"
  },
  {
    id: "sumbar",
    province: "Sumatera Barat",
    title: "Lembah Harau",
    tagline: "Kedamaian Hijau Lembah & Sawah Solok",
    shortLabel: "Sumbar",
    background: "/assets/video/video5_persawahan.mp4",
    alt: "Hamparan sawah hijau subur khas Minangkabau",
    description: "Nikmati angin sepoi-sepoi di atas hamparan persawahan hijau membentang luas yang dikelilingi tebing batu granit menjulang tinggi, serta kehangatan budaya Minang.",
    carouselTitle: "Lembah & Persawahan",
    carouselDesc: "Jelajahi tebing granit megah yang memagari hamparan persawahan hijau subur.",
    peopleCount: "11.1k+"
  }
];
