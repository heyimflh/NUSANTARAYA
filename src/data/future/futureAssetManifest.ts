export type FutureAsset = {
  id: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: string;
  altId: string;
  altEn?: string;
  credit?: string;
  license: "copyright" | "creative-commons" | "public-domain" | "editorial-use-only";
};

export const FUTURE_ASSET_MANIFEST: FutureAsset[] = [
  {
    id: "hero-masa-depan",
    src: "/assets/heritage-future/masa-depan.webp",
    width: 1200,
    height: 800,
    aspectRatio: "3/2",
    altId: "Observatorium masa depan Nusantara",
    license: "editorial-use-only"
  },
  {
    id: "hero-masa-kini",
    src: "/assets/heritage-future/masa-kini.webp",
    width: 800,
    height: 600,
    aspectRatio: "4/3",
    altId: "Kondisi masa kini Indonesia",
    license: "editorial-use-only"
  },
  {
    id: "hero-warisan",
    src: "/assets/heritage-future/warisan.webp",
    width: 800,
    height: 600,
    aspectRatio: "4/3",
    altId: "Warisan budaya Nusantara",
    license: "editorial-use-only"
  },
  {
    id: "ikn-modern",
    src: "/assets/province/kalimantan-timur/modern.webp",
    width: 800,
    height: 600,
    aspectRatio: "4/3",
    altId: "Pemandangan modern Ibu Kota Nusantara",
    license: "editorial-use-only"
  },
  {
    id: "explore-future-layer",
    src: "/assets/explore/layers/future.webp",
    width: 800,
    height: 600,
    aspectRatio: "4/3",
    altId: "Lapisan eksplorasi masa depan",
    license: "editorial-use-only"
  },
  {
    id: "future-preview-cta",
    src: "/assets/features/future-preview-v2.webp",
    width: 800,
    height: 450,
    aspectRatio: "16/9",
    altId: "Pratinjau masa depan",
    license: "editorial-use-only"
  }
];
