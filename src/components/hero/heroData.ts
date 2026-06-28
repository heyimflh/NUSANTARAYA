export type Destination = {
  id: string;
  province: string;
  title: string;
  shortLabel: string;
  background: string;
  mask: string;
  alt: string;
};

export const destinations: Destination[] = [
  {
    id: "ntt",
    province: "Nusa Tenggara Timur",
    title: "Labuan Bajo",
    shortLabel: "NTT",
    background: "/assets/video/video1_optimized.mp4",
    mask: "/assets/foreground mask.png",
    alt: "Pemandangan laut Labuan Bajo",
  },
  {
    id: "jateng",
    province: "Jawa Tengah",
    title: "Borobudur",
    shortLabel: "Jateng",
    background: "/assets/video/video2_optimized.mp4",
    mask: "/assets/foreground mask.png",
    alt: "Candi Borobudur saat matahari terbit",
  },
  {
    id: "papua-barat",
    province: "Papua Barat",
    title: "Raja Ampat",
    shortLabel: "Papua Barat",
    background: "/assets/video/video3_optimized.mp4",
    mask: "/assets/foreground mask.png",
    alt: "Pulau karang Raja Ampat dari ketinggian",
  },
  {
    id: "bali",
    province: "Bali",
    title: "Pura Ulun Danu",
    shortLabel: "Bali",
    background: "/assets/video/video4_optimized.mp4",
    mask: "/assets/foreground mask.png",
    alt: "Keindahan Pura Ulun Danu di Bali",
  },
  {
    id: "sumbar",
    province: "Sumatera Barat",
    title: "Jam Gadang",
    shortLabel: "Sumbar",
    background: "/assets/video/video5_optimized.mp4",
    mask: "/assets/foreground mask.png",
    alt: "Landmark Jam Gadang di Bukittinggi",
  }
];
