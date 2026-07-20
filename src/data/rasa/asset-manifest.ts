import { CulinaryMedia } from "./culinary.types";

export const RasaAssetManifest = {
  // Region/Province fallbacks
  fallbackSumatera: "/assets/province/sumatera-barat/food.webp",
  fallbackJawa: "/assets/province/di-yogyakarta/food.webp",
  fallbackKalimantan: "/assets/province/kalimantan-selatan/food.webp",
  fallbackSulawesi: "/assets/province/sulawesi-selatan/food.webp",
  fallbackBaliNusra: "/assets/province/bali/food.webp",
  fallbackMaluku: "/assets/province/maluku/food.webp",
  fallbackPapua: "/assets/province/papua/food.webp",

  // Specific fallback illustrations
  fallbackSpice: "/assets/nusa-archive/spice-fallback.webp",
  fallbackIngredient: "/assets/nusa-archive/ingredient-fallback.webp",

  getDishMedia(
    dishId: string,
    regionId: string,
    type: "hero" | "card" | "macro" | "portrait"
  ): CulinaryMedia {
    // Determine a dynamic base region fallback
    let fallbackSrc = this.fallbackJawa;
    if (regionId.includes("sumatera")) fallbackSrc = this.fallbackSumatera;
    if (regionId.includes("kalimantan")) fallbackSrc = this.fallbackKalimantan;
    if (regionId.includes("sulawesi")) fallbackSrc = this.fallbackSulawesi;
    if (regionId.includes("bali") || regionId.includes("nusa-tenggara")) fallbackSrc = this.fallbackBaliNusra;
    if (regionId.includes("maluku")) fallbackSrc = this.fallbackMaluku;
    if (regionId.includes("papua")) fallbackSrc = this.fallbackPapua;

    // Ideally, we'd check if a specific image exists for the dish, e.g., `/assets/culinary/${dishId}.webp`
    // Since we are not doing dynamic FS checks in the browser, we will assign mapped images for our canonical data.
    
    // For MVP showcase, we will map some known IDs, and fallback to region foods for the rest.
    const knownImages: Record<string, string> = {
      "rendang": "/assets/province/sumatera-barat/food.webp",
      "pempek": "/assets/province/sumatera-selatan/food.webp",
      "papeda": "/assets/province/papua/food.webp",
      "gudeg": "/assets/province/di-yogyakarta/food.webp",
      "ayam-betutu": "/assets/province/bali/food.webp",
      "coto-makassar": "/assets/province/sulawesi-selatan/food.webp",
      "soto-banjar": "/assets/province/kalimantan-selatan/food.webp",
      "mie-aceh": "/assets/province/aceh/food.webp",
      "bika-ambon": "/assets/province/sumatera-utara/food.webp",
    };

    const src = knownImages[dishId] || fallbackSrc;

    return {
      src,
      width: 1200,
      height: 800,
      alt: `Visual representasi untuk ${dishId}`,
      type,
      focalPoint: "center",
      credit: "Nusantaraya Assets"
    };
  },

  getSpiceMedia(spiceId: string): CulinaryMedia {
    return {
      src: this.fallbackSpice,
      width: 800,
      height: 800,
      alt: `Ilustrasi rempah ${spiceId}`,
      type: "macro",
      focalPoint: "center",
    };
  }
};
