import { CulinaryMedia } from "./culinary.types";

export type DishAssetEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
  focalPoint?: "center" | "top" | "bottom" | "left" | "right";
  credit?: string;
  sourceUrl?: string;
  license?: string;
};

export const DISH_ASSETS: Record<string, DishAssetEntry> = {
  "asinan-betawi": {
    src: "/assets/culinary/dishes/asinan-betawi.webp",
    width: 1632,
    height: 1276,
    alt: "Asinan Betawi segar dengan kerupuk mie kuning dan sayuran.",
    focalPoint: "center",
  },
  "ayam-woku": {
    src: "/assets/culinary/dishes/ayam-woku.webp",
    width: 1280,
    height: 960,
    alt: "Ayam Woku bumbu kuning pedas dengan daun kemangi segar.",
    focalPoint: "center",
  },
  "batagor": {
    src: "/assets/culinary/dishes/batagor.webp",
    width: 1280,
    height: 1280,
    alt: "Potongan batagor goreng renyah disiram bumbu kacang gurih.",
    focalPoint: "center",
  },
  "bau-peapi": {
    src: "/assets/culinary/dishes/bau-peapi.webp",
    width: 1920,
    height: 1440,
    alt: "Olahan ikan Bau Peapi dengan kuah kuning khas Mandar.",
    focalPoint: "center",
  },
  "binte-biluhuta": {
    src: "/assets/culinary/dishes/binte-biluhuta.webp",
    width: 1920,
    height: 1227,
    alt: "Semangkuk sup Binte Biluhuta dengan jagung manis dan pelengkap.",
    focalPoint: "center",
  },
  "bolu-kemojo": {
    src: "/assets/culinary/dishes/bolu-kemojo.webp",
    width: 1280,
    height: 1280,
    alt: "Bolu Kemojo hijau dengan bentuk menyerupai bunga.",
    focalPoint: "center",
  },
  "choi-pan": {
    src: "/assets/culinary/dishes/choi-pan.webp",
    width: 960,
    height: 1280,
    alt: "Choi pan kukus berbentuk setengah lingkaran dengan taburan bawang goreng putih.",
    focalPoint: "center",
  },
  "garang-asem": {
    src: "/assets/culinary/dishes/garang-asem.webp",
    width: 1920,
    height: 1440,
    alt: "Ayam Garang Asem berkuah segar di dalam bungkus daun pisang.",
    focalPoint: "center",
  },
  "gohu-ikan": {
    src: "/assets/culinary/dishes/gohu-ikan.webp",
    width: 1920,
    height: 1446,
    alt: "Gohu Ikan mentah berbumbu merah segar dengan potongan kasar.",
    focalPoint: "center",
  },
  "juhu-singkah": {
    src: "/assets/culinary/dishes/juhu-singkah.webp",
    width: 1920,
    height: 1440,
    alt: "Juhu Singkah olahan umbut rotan berkuah rempah.",
    focalPoint: "center",
  },
  "kaledo": {
    src: "/assets/culinary/dishes/kaledo.webp",
    width: 1920,
    height: 1280,
    alt: "Potongan tulang Kaledo dengan sumsum dalam kuah bening asam pedas.",
    focalPoint: "center",
  },
  "kapurung": {
    src: "/assets/culinary/dishes/kapurung.webp",
    width: 1920,
    height: 1440,
    alt: "Semangkuk Kapurung dengan bola sagu kenyal, sayuran, dan protein ikan.",
    focalPoint: "center",
  },
  "karedok": {
    src: "/assets/culinary/dishes/karedok.webp",
    width: 1632,
    height: 1189,
    alt: "Sayuran mentah segar dilumuri bumbu kacang kental khas Karedok.",
    focalPoint: "center",
  },
  "kerak-telor": {
    src: "/assets/culinary/dishes/kerak-telor.webp",
    width: 1920,
    height: 1277,
    alt: "Kerak telor bertekstur padat dengan taburan serundeng kelapa dan bawang goreng.",
    focalPoint: "center",
  },
  "lawar-bali": {
    src: "/assets/culinary/dishes/lawar-bali.webp",
    width: 1600,
    height: 1200,
    alt: "Campuran daging cincang dan sayuran berbumbu khas Lawar Bali.",
    focalPoint: "center",
  },
  "lempah-kuning": {
    src: "/assets/culinary/dishes/lempah-kuning.webp",
    width: 1920,
    height: 1440,
    alt: "Potongan ikan segar berpadu kuah Lempah Kuning yang cerah.",
    focalPoint: "center",
  },
  "lumpia-semarang": {
    src: "/assets/culinary/dishes/lumpia-semarang.webp",
    width: 703,
    height: 1368,
    alt: "Gulungan Lumpia Semarang goreng bersanding dengan cabai rawit dan saus kental.",
    focalPoint: "center",
  },
  "mandai": {
    src: "/assets/culinary/dishes/mandai.webp",
    width: 1920,
    height: 1280,
    alt: "Tumisan olahan kulit cempedak hasil fermentasi berbumbu pekat.",
    focalPoint: "center",
  },
  "mie-bangka": {
    src: "/assets/culinary/dishes/mie-bangka.webp",
    width: 1920,
    height: 1080,
    alt: "Mie Bangka kenyal dengan taburan daging cincang manis gurih dan sayuran.",
    focalPoint: "center",
  },
  "nasi-bekepor": {
    src: "/assets/culinary/dishes/nasi-bekepor.webp",
    width: 960,
    height: 1280,
    alt: "Sajian Nasi Bekepor lengkap dengan lauk pauk khas pedalaman Kalimantan Timur.",
    focalPoint: "center",
  },
  "nasi-liwet": {
    src: "/assets/culinary/dishes/nasi-liwet.webp",
    width: 1387,
    height: 924,
    alt: "Nasi Liwet gurih disajikan di atas daun pisang dengan pelengkap sayur labu dan telur.",
    focalPoint: "center",
  },
  "rawon": {
    src: "/assets/culinary/dishes/nasi-rawon.webp",
    width: 1920,
    height: 1382,
    alt: "Semangkuk rawon berkuah hitam kluwek dengan daging dan pelengkap tauge.",
    focalPoint: "center",
  },
  "pallubasa": {
    src: "/assets/culinary/dishes/pallubasa.webp",
    width: 1920,
    height: 1440,
    alt: "Sup daging Pallubasa dengan kuah rempah bersalut serundeng kelapa dan kuning telur.",
    focalPoint: "center",
  },
  "pecel-betawi": {
    src: "/assets/culinary/dishes/pecel-betawi.webp",
    width: 533,
    height: 800,
    alt: "Potongan sayur segar disiram bumbu pecel kental.",
    focalPoint: "center",
  },
  "pecel-madiun": {
    src: "/assets/culinary/dishes/pecel-madiun.webp",
    width: 850,
    height: 679,
    alt: "Nasi sayuran bumbu pecel disajikan di piring beralas daun pisang khas Madiun.",
    focalPoint: "center",
  },
  "pendap-bengkulu": {
    src: "/assets/culinary/dishes/pendap-bengkulu.webp",
    width: 2403,
    height: 1802,
    alt: "Ikan bumbu kelapa pedas terbungkus rapi dalam daun talas khas Pendap.",
    focalPoint: "center",
  },
  "plecing-kangkung": {
    src: "/assets/culinary/dishes/plecing-kangkung.webp",
    width: 1920,
    height: 1440,
    alt: "Rebusan kangkung hijau cerah dengan sambal tomat pedas khas Lombok.",
    focalPoint: "center",
  },
  "rujak-cingur": {
    src: "/assets/culinary/dishes/rujak-cingur.webp",
    width: 1500,
    height: 1130,
    alt: "Campuran buah, sayuran, dan irisan cingur sapi berlumur bumbu petis pekat.",
    focalPoint: "center",
  },
  "sate-bandeng": {
    src: "/assets/culinary/dishes/sate-bandeng.webp",
    width: 1632,
    height: 1224,
    alt: "Ikan bandeng utuh tanpa duri yang diisi adonan bumbu rempah bakar.",
    focalPoint: "center",
  },
  "sate-lilit": {
    src: "/assets/culinary/dishes/sate-lilit.webp",
    width: 1040,
    height: 780,
    alt: "Sate lilit daging berbumbu dipanggang menggunakan tusukan batang serai.",
    focalPoint: "center",
  },
  "sate-padang": {
    src: "/assets/culinary/dishes/sate-padang.webp",
    width: 1632,
    height: 1088,
    alt: "Sate Padang dengan kuah rempah kental dan potongan ketupat.",
    focalPoint: "center",
  },
  "sate-rembiga": {
    src: "/assets/culinary/dishes/sate-rembiga.webp",
    width: 1920,
    height: 967,
    alt: "Tusukan sate daging sapi bumbu rempah manis pedas khas Rembiga.",
    focalPoint: "center",
  },
  "seblak": {
    src: "/assets/culinary/dishes/seblak.webp",
    width: 960,
    height: 1280,
    alt: "Kuah merah pedas kental berisi kerupuk basah, makaroni, dan pelengkap seblak.",
    focalPoint: "center",
  },
  "sei-sapi": {
    src: "/assets/culinary/dishes/sei-sapi.webp",
    width: 960,
    height: 1509,
    alt: "Irisan Se'i Sapi asap dengan sambal dan sayuran pendamping.",
    focalPoint: "center",
  },
  "seruit-lampung": {
    src: "/assets/culinary/dishes/seruit-lampung.webp",
    width: 816,
    height: 1088,
    alt: "Sambal tempoyak dan ikan bakar berpadu khas tradisi Seruit.",
    focalPoint: "center",
  },
  "soto-betawi": {
    src: "/assets/culinary/dishes/soto-betawi.webp",
    width: 1701,
    height: 1438,
    alt: "Semangkuk Soto Betawi kuah susu putih kekuningan dengan potongan daging.",
    focalPoint: "center",
  },
  "soto-lamongan": {
    src: "/assets/culinary/dishes/soto-lamongan.webp",
    width: 1632,
    height: 1224,
    alt: "Soto Lamongan berkuah kuning bening dengan suwiran ayam, soun, dan taburan koya.",
    focalPoint: "center",
  },
  "rendang": {
    src: "/assets/province/sumatera-barat/food.webp",
    width: 1200,
    height: 800,
    alt: "Olahan daging sapi Rendang khas Minangkabau dengan bumbu rempah kering.",
    focalPoint: "center",
  },
  "gudeg": {
    src: "/assets/province/di-yogyakarta/food.webp",
    width: 1200,
    height: 800,
    alt: "Sajian Gudeg nangka muda manis dengan pelengkap khas Yogyakarta.",
    focalPoint: "center",
  },
  "soto-banjar": {
    src: "/assets/province/kalimantan-selatan/food.webp",
    width: 1200,
    height: 800,
    alt: "Soto Banjar berkuah harum rempah dengan pelengkap ketupat.",
    focalPoint: "center",
  },
  "coto-makassar": {
    src: "/assets/province/sulawesi-selatan/food.webp",
    width: 1200,
    height: 800,
    alt: "Semangkuk Coto Makassar daging sapi dengan kuah pekat kaya rempah.",
    focalPoint: "center",
  },
  "ayam-betutu": {
    src: "/assets/province/bali/food.webp",
    width: 1200,
    height: 800,
    alt: "Ayam Betutu Bali utuh yang dimasak perlahan dengan bumbu base genep.",
    focalPoint: "center",
  },
  "papeda": {
    src: "/assets/province/papua/food.webp",
    width: 1200,
    height: 800,
    alt: "Papeda sagu lengket disajikan bersama ikan kuah kuning khas Indonesia Timur.",
    focalPoint: "center",
  },
};

export const SPICE_ASSETS: Record<string, DishAssetEntry> = {
  "cengkeh": {
    src: "/assets/culinary/spices/cengkeh.webp",
    width: 1920,
    height: 1280,
    alt: "Kuncup cengkeh kering berwarna cokelat gelap ditampilkan dalam komposisi specimen.",
    focalPoint: "center",
  },
  "pala": {
    src: "/assets/culinary/spices/pala.webp",
    width: 1920,
    height: 1440,
    alt: "Buah dan biji pala dengan fuli merah terlihat jelas pada permukaannya.",
    focalPoint: "center",
  },
};

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
    // Check for explicit mapping
    const exactMapping = DISH_ASSETS[dishId];
    if (exactMapping) {
      return {
        ...exactMapping,
        type,
        credit: exactMapping.credit || "Nusantaraya Assets"
      };
    }

    // Determine a dynamic base region fallback
    let fallbackSrc = this.fallbackJawa;
    if (regionId.includes("sumatera")) fallbackSrc = this.fallbackSumatera;
    if (regionId.includes("kalimantan")) fallbackSrc = this.fallbackKalimantan;
    if (regionId.includes("sulawesi")) fallbackSrc = this.fallbackSulawesi;
    if (regionId.includes("bali") || regionId.includes("nusa-tenggara")) fallbackSrc = this.fallbackBaliNusra;
    if (regionId.includes("maluku")) fallbackSrc = this.fallbackMaluku;
    if (regionId.includes("papua")) fallbackSrc = this.fallbackPapua;

    return {
      src: fallbackSrc,
      width: 1200,
      height: 800,
      alt: `Visual representasi untuk ${dishId}`,
      type,
      focalPoint: "center",
      credit: "Nusantaraya Assets"
    };
  },

  getSpiceMedia(spiceId: string): CulinaryMedia {
    const exactMapping = SPICE_ASSETS[spiceId];
    if (exactMapping) {
      return {
        ...exactMapping,
        type: "macro",
        credit: exactMapping.credit || "Nusantaraya Assets"
      };
    }

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
