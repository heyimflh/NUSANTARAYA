import { CulinaryDish, FoodStory, FoodBattlePair, CulinarySpice, TastingTrail } from "./culinary.types";
import { RasaAssetManifest } from "./asset-manifest";

const defineDish = <T extends CulinaryDish>(dish: T) => dish;

export const CANONICAL_DISHES: CulinaryDish[] = [
  // ===================== SUMATERA =====================
  defineDish({
    id: "rendang",
    slug: "rendang",
    status: "published",
    provinceIds: ["sumatera-barat"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Rendang",
        summary: "Olahan daging sapi yang dimasak perlahan dengan santan dan rempah-rempah hingga bumbu meresap dan kering.",
        originContext: "Berasal dari tradisi merantau masyarakat Minangkabau di Sumatera Barat, rendang diciptakan sebagai perbekalan perjalanan karena daya tahannya yang luar biasa tanpa pengawet buatan.",
        flavorNotes: ["pedas", "gurih", "rempah-kuat"],
        keyIngredients: ["daging-sapi", "santan", "cabai", "lengkuas"],
        preparationContext: "Daging dimasak bersama santan dan bumbu dalam suhu rendah selama berjam-jam melewati fase gulai, kalio, hingga akhirnya menjadi rendang yang kering dan awet.",
      }
    },
    aliases: ["Rendang Daging", "Randang"],
    flavorIds: ["pedas", "gurih", "rempah-kuat"],
    ingredientIds: ["daging-sapi", "santan", "cabai", "lengkuas"],
    spiceIds: ["pala", "cengkeh"],
    sourceRefs: ["Nusantaraya Editorial 2026", "Ensiklopedia Kuliner Indonesia"],
    relatedDishIds: [],
    relatedStoryIds: ["aku-rendang"],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("rendang", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("rendang", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "pempek",
    slug: "pempek",
    status: "draft",
    provinceIds: ["sumatera-selatan"],
    regionIds: ["sumatera"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Pempek",
        summary: "Olahan ikan dan sagu yang disajikan dengan kuah cuko pekat yang manis, asam, dan pedas.",
        originContext: "Kudapan khas Palembang, Sumatera Selatan yang lahir dari percampuran budaya Tionghoa dan tradisi kuliner lokal yang kaya akan hasil sungai.",
        flavorNotes: ["gurih", "asam", "pedas"],
        keyIngredients: ["ikan-tenggiri", "tepung-sagu", "gula-aren", "asam-jawa"],
      }
    },
    aliases: ["Mpek-mpek"],
    flavorIds: ["gurih", "asam", "pedas"],
    ingredientIds: ["ikan-tenggiri", "tepung-sagu", "gula-aren", "asam-jawa"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("pempek", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("pempek", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "mie-aceh",
    slug: "mie-aceh",
    status: "draft",
    provinceIds: ["aceh"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Mie Aceh",
        summary: "Mie tebal dengan kuah kari kental yang kaya rempah, sering disajikan dengan daging sapi, kambing, atau seafood.",
        originContext: "Hidangan ini mencerminkan pengaruh kuat jalur perdagangan rempah Arab dan India di pesisir Aceh, memadukan kari rempah dengan mie lokal.",
        flavorNotes: ["pedas", "rempah-kuat", "gurih"],
        keyIngredients: ["mie-kuning", "daging-kambing", "kapulaga", "jintan"],
      }
    },
    aliases: [],
    flavorIds: ["pedas", "rempah-kuat", "gurih"],
    ingredientIds: ["mie-kuning", "daging-kambing", "kapulaga", "jintan"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("mie-aceh", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("mie-aceh", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "bika-ambon",
    slug: "bika-ambon",
    status: "draft",
    provinceIds: ["sumatera-utara"],
    regionIds: ["sumatera"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Bika Ambon",
        summary: "Kue pipih berwarna kuning dengan tekstur bersarang, terbuat dari tepung tapioka, telur, gula, dan santan.",
        originContext: "Walau bernama Ambon, kue ini berkembang dan menjadi ciri khas Kota Medan, Sumatera Utara, yang konon mulai dipopulerkan di Jalan Ambon.",
        flavorNotes: ["manis", "gurih"],
        keyIngredients: ["tapioka", "telur", "santan", "daun-jeruk"],
      }
    },
    aliases: [],
    flavorIds: ["manis", "gurih"],
    ingredientIds: ["tapioka", "telur", "santan", "daun-jeruk"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("bika-ambon", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("bika-ambon", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "sate-padang",
    slug: "sate-padang",
    status: "published",
    provinceIds: ["sumatera-barat"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Sate Padang",
        summary: "Sate daging khas Sumatera Barat yang disajikan dengan kuah kental berbasis tepung beras dan racikan rempah. Warnanya dapat bervariasi menurut tradisi peraciknya.",
        originContext: "Sate Padang berkembang dalam tradisi kuliner Minangkabau. Nama ini menaungi beberapa variasi regional, sehingga tampilan kuah, tingkat kepedasan, dan komposisi rempah tidak selalu seragam.",
        flavorNotes: ["pedas", "gurih", "rempah-kuat"],
        keyIngredients: ["daging-sapi", "tepung-beras", "cabai", "ketumbar", "kunyit", "lengkuas"],
        preparationContext: "Daging, lidah, atau jeroan sapi direbus dengan bumbu hingga empuk lalu dipanggang. Sisa kaldu bumbu kemudian dikentalkan dengan tepung beras untuk menjadi kuah siraman yang khas.",
      }
    },
    aliases: [],
    flavorIds: ["pedas", "gurih", "rempah-kuat"],
    ingredientIds: ["daging-sapi", "tepung-beras", "cabai", "ketumbar"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("sate-padang", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("sate-padang", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "tempoyak",
    slug: "tempoyak",
    status: "draft",
    provinceIds: ["jambi", "sumatera-selatan"],
    regionIds: ["sumatera"],
    categoryId: "sambal-pendamping",
    localeContent: {
      id: {
        title: "Tempoyak",
        summary: "Olahan durian yang difermentasi, sering dimasak bersama ikan patin atau dijadikan sambal.",
        originContext: "Berkembang di wilayah dengan hasil durian yang melimpah seperti Jambi dan Sumatera Selatan, fermentasi menjadi cara tradisional mengawetkan durian untuk bumbu masakan.",
        flavorNotes: ["asam", "pedas", "gurih"],
        keyIngredients: ["durian", "cabai", "ikan-patin"],
      }
    },
    aliases: [],
    flavorIds: ["asam", "pedas", "gurih"],
    ingredientIds: ["durian", "cabai", "ikan-patin"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("tempoyak", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("tempoyak", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "bolu-kemojo",
    slug: "bolu-kemojo",
    status: "published",
    provinceIds: ["riau"],
    regionIds: ["sumatera"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Bolu Kemojo",
        summary: "Kue basah tradisional khas Riau yang berbentuk menyerupai bunga kamboja, dengan tekstur padat dan aroma pandan yang kuat.",
        originContext: "Bolu Kemojo lekat dengan tradisi masyarakat Melayu Riau, sering disajikan dalam acara adat, pernikahan, atau sebagai hantaran silaturahmi antarkeluarga.",
        flavorNotes: ["manis", "gurih"],
        keyIngredients: ["tepung-terigu", "santan", "telur", "daun-pandan"],
        preparationContext: "Adonan yang kaya akan santan dan telur dipanggang dalam cetakan khusus berbentuk bunga kamboja (kemojo) hingga matang dan memadat.",
      }
    },
    aliases: ["Bolu Kojo"],
    flavorIds: ["manis", "gurih"],
    ingredientIds: ["tepung-terigu", "santan", "telur", "daun-pandan"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("bolu-kemojo", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("bolu-kemojo", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "lempah-kuning",
    slug: "lempah-kuning",
    status: "published",
    provinceIds: ["kepulauan-bangka-belitung"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Lempah Kuning",
        summary: "Olahan ikan berkuah kuning cerah khas Bangka dengan paduan rasa asam, pedas, dan segar yang khas.",
        originContext: "Hidangan ini adalah cerminan kekayaan laut Kepulauan Bangka Belitung, memadukan ikan segar tangkapan harian dengan bumbu aromatik dan rasa asam dari nanas atau belimbing wuluh.",
        flavorNotes: ["asam", "pedas", "segar"],
        keyIngredients: ["ikan", "kunyit", "nanas", "cabai"],
        preparationContext: "Ikan segar direbus perlahan bersama bumbu halus kuning dan potongan nanas muda, menghasilkan kuah yang segar tanpa bau amis.",
      }
    },
    aliases: ["Lempah Nanas"],
    flavorIds: ["asam", "pedas", "segar"],
    ingredientIds: ["ikan", "kunyit", "nanas", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("lempah-kuning", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("lempah-kuning", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "mie-bangka",
    slug: "mie-bangka",
    status: "published",
    provinceIds: ["kepulauan-bangka-belitung"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Mie Bangka",
        summary: "Sajian mie kenyal dengan taburan daging cincang bumbu kecap, sayuran segar, dan kuah kaldu gurih.",
        originContext: "Mie Bangka atau bakmi Bangka merupakan wujud akulturasi kuliner Tionghoa-Hakka dengan lidah Nusantara yang berkembang pesat di Pulau Bangka.",
        flavorNotes: ["gurih", "manis"],
        keyIngredients: ["mie-kuning", "daging-cincang", "sayuran", "bawang-merah"],
        preparationContext: "Mie direbus terpisah lalu diaduk dengan minyak bumbu, kemudian disajikan dengan daging berbumbu manis gurih, tauge, dan sawi rebus.",
      }
    },
    aliases: ["Bakmi Bangka", "Jamian"],
    flavorIds: ["gurih", "manis"],
    ingredientIds: ["mie-kuning", "daging-cincang", "sayuran"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("mie-bangka", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("mie-bangka", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "pendap-bengkulu",
    slug: "pendap-bengkulu",
    status: "published",
    provinceIds: ["bengkulu"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Pendap",
        summary: "Ikan berbumbu kelapa pedas yang dibungkus rapat dengan lembaran daun talas dan direbus dalam waktu lama.",
        originContext: "Pendap merupakan hidangan kebanggaan masyarakat Bengkulu yang sering hadir dalam perayaan adat. Penggunaan daun talas muda sebagai pembungkus memberikan keunikan tersendiri.",
        flavorNotes: ["pedas", "gurih", "rempah-kuat"],
        keyIngredients: ["ikan", "kelapa-parut", "daun-talas", "cabai"],
        preparationContext: "Potongan ikan dicampur dengan kelapa parut berbumbu, dibungkus berlapis-lapis daun talas, diikat rapat, lalu direbus berjam-jam hingga seluruh bagiannya matang dan empuk sempurna.",
      }
    },
    aliases: ["Pendap", "Ikan Pendap"],
    flavorIds: ["pedas", "gurih", "rempah-kuat"],
    ingredientIds: ["ikan", "kelapa-parut", "daun-talas", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("pendap-bengkulu", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("pendap-bengkulu", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "seruit-lampung",
    slug: "seruit-lampung",
    status: "published",
    provinceIds: ["lampung"],
    regionIds: ["sumatera"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Seruit Lampung",
        summary: "Kombinasi sajian ikan bakar atau goreng yang dinikmati bersama sambal terasi, tempoyak, dan lalapan segar.",
        originContext: "Seruit bukan sekadar nama masakan, melainkan tradisi makan bersama masyarakat Lampung (nyeruit). Tradisi ini mengedepankan kebersamaan dalam menikmati lauk dan lalapan.",
        flavorNotes: ["pedas", "asam", "segar"],
        keyIngredients: ["ikan", "sambal-terasi", "tempoyak", "sayuran"],
        preparationContext: "Daging ikan dihancurkan atau disuwir, kemudian dicampur atau dinikmati bersama-sama dengan sambal, tempoyak, dan berbagai sayuran mentah atau rebus (lalapan).",
      }
    },
    aliases: ["Seruit"],
    flavorIds: ["pedas", "asam", "segar"],
    ingredientIds: ["ikan", "tempoyak", "sayuran"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("seruit-lampung", "sumatera", "hero"),
      RasaAssetManifest.getDishMedia("seruit-lampung", "sumatera", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),

  // ===================== JAWA =====================
  defineDish({
    id: "gudeg",
    slug: "gudeg",
    status: "published",
    provinceIds: ["di-yogyakarta"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Gudeg",
        summary: "Sayur nangka muda yang dimasak berjam-jam bersama santan dan gula aren, disajikan dengan krecek dan telur.",
        originContext: "Gudeg sangat identik dengan identitas Yogyakarta. Pembuatannya yang memakan waktu lama mencerminkan filosofi ketekunan dan kesabaran masyarakat Jawa.",
        flavorNotes: ["manis", "gurih"],
        keyIngredients: ["nangka-muda", "santan", "gula-aren", "daun-jati"],
        preparationContext: "Nangka muda direbus bersama gula merah aren, santan, dan daun jati (yang memberikan warna kemerahan) hingga kuah menyusut kering dan bumbu terkaramelisasi.",
      }
    },
    aliases: ["Gudeg Jogja"],
    flavorIds: ["manis", "gurih"],
    ingredientIds: ["nangka-muda", "santan", "gula-aren", "daun-jati"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("gudeg", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("gudeg", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "rawon",
    slug: "rawon",
    status: "published",
    provinceIds: ["jawa-timur"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Rawon",
        summary: "Sup daging khas Jawa Timur dengan kuah gelap dari kluwek. Karakter rasanya gurih, dalam, dan sedikit earthy.",
        originContext: "Rawon lekat dengan tradisi kuliner Jawa Timur, termasuk Surabaya. Ciri visual utamanya adalah kuah cokelat sangat gelap yang berasal dari rempah kluwek.",
        flavorNotes: ["gurih", "pahit", "rempah-kuat"],
        keyIngredients: ["daging-sapi", "kluwek", "bawang-merah", "bawang-putih", "serai", "daun-jeruk"],
        preparationContext: "Daging direbus perlahan hingga empuk, lalu dicampur dengan bumbu halus yang didominasi oleh kluwek yang telah diolah, menghasilkan kaldu daging yang kaya rasa.",
      }
    },
    aliases: ["Nasi Rawon"],
    flavorIds: ["gurih", "pahit", "rempah-kuat"],
    ingredientIds: ["daging-sapi", "kluwek", "tauge"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("rawon", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("rawon", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "soto-lamongan",
    slug: "soto-lamongan",
    status: "published",
    provinceIds: ["jawa-timur"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Soto Lamongan",
        summary: "Soto ayam berkuah kuning khas Lamongan, Jawa Timur, yang umumnya dilengkapi suwiran ayam, soun, kol, dan taburan koya.",
        originContext: "Soto Lamongan dikenal luas sebagai salah satu varian soto paling populer dari Jawa Timur, sering dijajakan dalam pikulan tradisional maupun warung makan.",
        flavorNotes: ["gurih", "segar", "rempah-kuat"],
        keyIngredients: ["ayam", "kunyit", "serai", "daun-jeruk", "koya", "soun"],
        preparationContext: "Kuah kaldu ayam dibumbui rempah kuning, disajikan hangat dengan bubuk koya (campuran kerupuk udang dan bawang putih goreng) yang membuatnya gurih dan kental.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "segar", "rempah-kuat"],
    ingredientIds: ["ayam", "kunyit", "koya", "soun"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("soto-lamongan", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("soto-lamongan", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "nasi-liwet",
    slug: "nasi-liwet",
    status: "published",
    provinceIds: ["jawa-tengah"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Nasi Liwet",
        summary: "Nasi gurih yang dimasak dengan santan dan rempah aromatik, kemudian disajikan dengan lauk serta sayur pendamping.",
        originContext: "Nasi Liwet khas Solo merupakan hidangan legendaris yang lekat dengan tradisi keraton dan masyarakat Surakarta, sering dinikmati saat malam hari di warung-warung lesehan.",
        flavorNotes: ["gurih"],
        keyIngredients: ["beras", "santan", "ayam", "labu-siam"],
        preparationContext: "Beras dimasak secara tradisional (diliwet) bersama santan kelapa, daun salam, dan serai. Disajikan dengan opor ayam suwir, sayur labu siam, dan areh (santan kental berbumbu).",
      }
    },
    aliases: ["Nasi Liwet Solo"],
    flavorIds: ["gurih"],
    ingredientIds: ["beras", "santan", "ayam", "labu-siam"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("nasi-liwet", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("nasi-liwet", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "kerak-telor",
    slug: "kerak-telor",
    status: "published",
    provinceIds: ["dki-jakarta"],
    regionIds: ["jawa"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Kerak Telor",
        summary: "Kudapan Betawi dari beras ketan dan telur yang dimasak hingga membentuk lapisan padat, diberi kelapa sangrai dan bawang goreng.",
        originContext: "Hidangan ikonik ini dikenal luas melalui tradisi jajanan dan perayaan budaya Jakarta, melambangkan kreativitas kuliner masyarakat Betawi sejak era lampau.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["beras-ketan", "telur-bebek", "ebi", "kelapa-sangrai"],
        preparationContext: "Beras ketan direndam lalu dimasak di atas wajan kecil. Telur dan bumbu dicampurkan hingga setengah matang, kemudian wajan dibalik langsung menghadap bara arang hingga permukaannya berkerak.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["beras-ketan", "telur", "ebi", "kelapa-sangrai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("kerak-telor", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("kerak-telor", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "seblak",
    slug: "seblak",
    status: "published",
    provinceIds: ["jawa-barat"],
    regionIds: ["jawa"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Seblak",
        summary: "Hidangan pedas khas Jawa Barat berbahan kerupuk yang dilunakkan dan dimasak dengan bumbu kencur aromatik.",
        originContext: "Bermula sebagai jajanan jalanan di Bandung, Seblak berkembang menjadi fenomena kuliner urban dengan berbagai modifikasi modern yang mengedepankan cita rasa pedas berempah.",
        flavorNotes: ["pedas", "gurih"],
        keyIngredients: ["kerupuk", "kencur", "cabai", "telur"],
        preparationContext: "Kerupuk kering direndam hingga kenyal, lalu ditumis bersama bumbu halus dominan kencur dan cabai. Variasi modern sering ditambahkan sosis, makaroni, telur, hingga bakso.",
      }
    },
    aliases: ["Seblak Bandung"],
    flavorIds: ["pedas", "gurih"],
    ingredientIds: ["kerupuk", "kencur", "cabai", "telur"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("seblak", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("seblak", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "asinan-betawi",
    slug: "asinan-betawi",
    status: "published",
    provinceIds: ["dki-jakarta"],
    regionIds: ["jawa"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Asinan Betawi",
        summary: "Campuran sayuran segar yang disiram dengan kuah kacang bercita rasa asam, pedas, dan manis, dilengkapi dengan kerupuk mie.",
        originContext: "Merupakan salah satu kudapan salad tradisional dari masyarakat Betawi yang menggambarkan perpaduan budaya lokal dan Tionghoa dalam pengolahan bumbu kacang dan sayuran mentah.",
        flavorNotes: ["asam", "pedas", "manis", "segar"],
        keyIngredients: ["sayuran", "kacang-tanah", "cuka", "cabai", "kerupuk-mie"],
        preparationContext: "Sayuran segar seperti kol, selada, dan tauge dipotong-potong, lalu disiram bumbu kacang encer yang diseimbangkan dengan keasaman cuka, ditaburi kacang goreng dan kerupuk kuning.",
      }
    },
    aliases: [],
    flavorIds: ["asam", "pedas", "manis", "segar"],
    ingredientIds: ["sayuran", "kacang-tanah", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("asinan-betawi", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("asinan-betawi", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "batagor",
    slug: "batagor",
    status: "published",
    provinceIds: ["jawa-barat"],
    regionIds: ["jawa"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Batagor",
        summary: "Singkatan dari Bakso Tahu Goreng, merupakan camilan gurih renyah berisi adonan ikan tenggiri yang disiram bumbu kacang pekat.",
        originContext: "Batagor bermula di Bandung sebagai modifikasi inovatif dari tahu bakso kukus khas Tionghoa, yang digoreng garing untuk menciptakan tekstur baru bagi penikmat jajanan jalanan.",
        flavorNotes: ["gurih", "manis", "pedas"],
        keyIngredients: ["ikan-tenggiri", "tahu", "kulit-pangsit", "kacang-tanah"],
        preparationContext: "Adonan ikan tenggiri dimasukkan ke dalam tahu dan kulit pangsit, digoreng hingga renyah kecokelatan, lalu dipotong dan diguyur saus kacang, kecap manis, serta perasan jeruk limau.",
      }
    },
    aliases: ["Bakso Tahu Goreng"],
    flavorIds: ["gurih", "manis", "pedas"],
    ingredientIds: ["ikan-tenggiri", "tahu", "kacang-tanah"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("batagor", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("batagor", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "garang-asem",
    slug: "garang-asem",
    status: "published",
    provinceIds: ["jawa-tengah"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Garang Asem",
        summary: "Olahan ayam berkuah asam pedas yang dikukus di dalam bungkusan daun pisang, menghasilkan aroma aromatik yang kuat.",
        originContext: "Sangat populer di pesisir utara dan pedalaman Jawa Tengah, hidangan ini mengandalkan belimbing wuluh untuk memberikan rasa asam segar tanpa menggunakan asam jawa.",
        flavorNotes: ["asam", "pedas", "segar"],
        keyIngredients: ["ayam", "belimbing-wuluh", "cabai-rawit", "santan", "daun-pisang"],
        preparationContext: "Potongan ayam mentah dicampur dengan kuah santan ringan, irisan belimbing wuluh, tomat hijau, dan cabai rawit utuh, dibungkus daun pisang berbentuk tum, lalu dikukus hingga matang.",
      }
    },
    aliases: [],
    flavorIds: ["asam", "pedas", "segar"],
    ingredientIds: ["ayam", "belimbing-wuluh", "cabai", "santan"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("garang-asem", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("garang-asem", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "karedok",
    slug: "karedok",
    status: "published",
    provinceIds: ["jawa-barat"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Karedok",
        summary: "Sajian sayuran mentah segar yang dilumuri bumbu kacang kencur yang kental dan beraroma khas.",
        originContext: "Sebagai wujud kedekatan masyarakat Sunda dengan hasil bumi, Karedok menyajikan kesegaran sayuran mentah (lalab) yang dipadukan dengan bumbu ulek yang wangi.",
        flavorNotes: ["segar", "gurih", "pedas"],
        keyIngredients: ["sayuran", "kacang-tanah", "kencur", "gula-merah"],
        preparationContext: "Sayuran mentah seperti kacang panjang, kol, mentimun, kemangi, dan terong bulat diiris kecil, lalu diaduk langsung dengan bumbu kacang tanah yang diulek bersama kencur dan terasi bakar.",
      }
    },
    aliases: ["Karedok Sunda"],
    flavorIds: ["segar", "gurih", "pedas"],
    ingredientIds: ["sayuran", "kacang-tanah", "kencur"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("karedok", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("karedok", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "lumpia-semarang",
    slug: "lumpia-semarang",
    status: "published",
    provinceIds: ["jawa-tengah"],
    regionIds: ["jawa"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Lumpia Semarang",
        summary: "Gulungan kulit tipis berisi rebung manis, telur, dan udang, digoreng renyah dan disajikan dengan saus kental khas.",
        originContext: "Lumpia (Lun Pia) menjadi ikon kuliner Semarang yang merepresentasikan harmonisasi budaya memasak Tionghoa dan citarasa lokal Jawa yang cenderung manis.",
        flavorNotes: ["manis", "gurih"],
        keyIngredients: ["rebung", "udang", "telur", "kulit-lumpia"],
        preparationContext: "Rebung muda dipotong memanjang dan ditumis dengan udang dan telur hingga berkaramel, dibungkus kulit lumpia, lalu digoreng. Disajikan dengan saus kental manis, bawang segar, dan cabai rawit.",
      }
    },
    aliases: ["Lun Pia"],
    flavorIds: ["manis", "gurih"],
    ingredientIds: ["rebung", "udang", "telur"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("lumpia-semarang", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("lumpia-semarang", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "pecel-madiun",
    slug: "pecel-madiun",
    status: "published",
    provinceIds: ["jawa-timur"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Pecel Madiun",
        summary: "Sayuran rebus yang disiram bumbu pecel kental dengan aroma daun jeruk purut yang dominan, disajikan bersama nasi atau pincuk daun.",
        originContext: "Madiun sangat terkenal dengan olahan pecelnya yang memiliki ciri khas sambal kacang bertekstur legit, wangi daun jeruk, dan tidak terlalu manis dibandingkan varian pecel pesisiran.",
        flavorNotes: ["gurih", "pedas", "manis"],
        keyIngredients: ["sayuran", "kacang-tanah", "daun-jeruk", "cabai"],
        preparationContext: "Kacang tanah disangrai atau digoreng, diulek bersama asam jawa, cabai, gula merah, dan daun jeruk. Bumbu ini dilarutkan dan disiramkan ke atas berbagai sayuran rebus seperti tauge, kacang panjang, dan bayam.",
      }
    },
    aliases: ["Sego Pecel Madiun"],
    flavorIds: ["gurih", "pedas", "manis"],
    ingredientIds: ["sayuran", "kacang-tanah", "daun-jeruk"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("pecel-madiun", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("pecel-madiun", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "rujak-cingur",
    slug: "rujak-cingur",
    status: "published",
    provinceIds: ["jawa-timur"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Rujak Cingur",
        summary: "Campuran unik buah-buahan, sayur rebus, tempe, dan irisan cingur (moncong sapi) berlumur bumbu petis udang pekat.",
        originContext: "Hidangan unik dari Surabaya ini memadukan kesegaran buah-buahan rujak dengan komponen berat lauk pauk, disatukan oleh rasa petis udang yang menjadi jiwa kuliner pesisir Jawa Timur.",
        flavorNotes: ["gurih", "pedas", "manis", "segar"],
        keyIngredients: ["cingur-sapi", "petis-udang", "kacang-tanah", "buah-buahan", "sayuran"],
        preparationContext: "Cingur sapi direbus berjam-jam hingga sangat empuk. Potongan buah, sayur, tempe, dan tahu dicampur di atas cobek bersama bumbu ulek yang didominasi petis hitam pekat dan pisang batu.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "pedas", "manis", "segar"],
    ingredientIds: ["cingur-sapi", "petis-udang", "sayuran"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("rujak-cingur", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("rujak-cingur", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "sate-bandeng",
    slug: "sate-bandeng",
    status: "published",
    provinceIds: ["banten"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Sate Bandeng",
        summary: "Ikan bandeng utuh tanpa duri yang diisi kembali dengan adonan daging ikan berbumbu santan dan rempah, lalu dibakar.",
        originContext: "Konon diciptakan di lingkungan Kesultanan Banten agar para keluarga kerajaan dapat menikmati kelezatan ikan bandeng tanpa perlu khawatir akan durinya yang sangat banyak.",
        flavorNotes: ["gurih", "manis", "smoky"],
        keyIngredients: ["ikan-bandeng", "santan", "ketumbar", "bawang"],
        preparationContext: "Daging bandeng dikeluarkan dengan hati-hati melalui insang atau badan, dihaluskan, dicampur bumbu sangrai dan santan kental, lalu dimasukkan kembali ke dalam kulit aslinya sebelum dibakar atau diasap.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "manis", "smoky"],
    ingredientIds: ["ikan-bandeng", "santan", "ketumbar"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("sate-bandeng", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("sate-bandeng", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "soto-betawi",
    slug: "soto-betawi",
    status: "published",
    provinceIds: ["dki-jakarta"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Soto Betawi",
        summary: "Soto daging dan jeroan sapi khas Jakarta dengan kuah kaldu kaya rempah yang dikentalkan menggunakan santan atau susu sapi.",
        originContext: "Merupakan salah satu hidangan fusi klasik yang berkembang di Jakarta, memadukan tradisi soto berempah dengan penggunaan susu cair atau santan (atau keduanya) khas masyarakat Betawi.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["daging-sapi", "susu-sapi", "santan", "minyak-samin", "emping"],
        preparationContext: "Daging dan jeroan direbus terpisah lalu disajikan dalam mangkuk. Kuah kaldu dididihkan dengan bumbu halus aromatik, santan, atau susu sapi segar, serta terkadang ditambahkan minyak samin untuk aroma ekstra.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["daging-sapi", "santan", "susu-sapi", "emping"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("soto-betawi", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("soto-betawi", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "pecel-betawi",
    slug: "pecel-betawi",
    status: "review",
    provinceIds: ["dki-jakarta"],
    regionIds: ["jawa"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Pecel Betawi",
        summary: "Hidangan pecel dengan pengaruh Betawi, memerlukan verifikasi identitas visual lebih lanjut untuk memastikan keaslian komponen dan presentasinya.",
        originContext: "Dalam tahap peninjauan redaksional untuk memastikan gambar tidak tumpang tindih dengan hidangan pecel atau asinan dari tradisi kuliner daerah lainnya.",
        flavorNotes: ["gurih"],
        keyIngredients: ["sayuran"],
      }
    },
    aliases: [],
    flavorIds: ["gurih"],
    ingredientIds: ["sayuran"],
    spiceIds: [],
    sourceRefs: [],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("pecel-betawi", "jawa", "hero"),
      RasaAssetManifest.getDishMedia("pecel-betawi", "jawa", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),

  // ===================== BALI & NUSA TENGGARA =====================
  defineDish({
    id: "ayam-betutu",
    slug: "ayam-betutu",
    status: "published",
    provinceIds: ["bali"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Ayam Betutu",
        summary: "Ayam utuh yang diisi dengan bumbu base genep, dibungkus daun pisang, dan dipanggang atau direbus perlahan.",
        originContext: "Hidangan ini merupakan puncak seni kuliner bumbu Bali, dahulunya disajikan utamanya pada saat upacara-upacara adat (odalan) sebelum menjadi kebanggaan kuliner komersial khas Bali.",
        flavorNotes: ["pedas", "rempah-kuat"],
        keyIngredients: ["ayam-kampung", "base-genep", "daun-singkong"],
        preparationContext: "Ayam utuh dilumuri dan diisi dengan racikan rempah lengkap (base genep). Dibungkus rapat daun pisang atau pelepah pinang, kemudian dimasak sangat lambat dalam bara api sekam atau direbus berkuah.",
      }
    },
    aliases: ["Bebek Betutu"],
    flavorIds: ["pedas", "rempah-kuat"],
    ingredientIds: ["ayam", "cabai", "kunyit", "kencur"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("ayam-betutu", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("ayam-betutu", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "sate-lilit",
    slug: "sate-lilit",
    status: "published",
    provinceIds: ["bali"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Sate Lilit",
        summary: "Sate khas Bali dari adonan daging atau ikan berbumbu yang dililitkan pada batang bambu atau serai lalu dipanggang.",
        originContext: "Dalam tradisi Bali, pembuatan sate lilit sering dilakukan secara gotong royong oleh para pria dalam rangka persiapan upacara adat. Saat ini sangat umum dijumpai di berbagai rumah makan.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["daging-cincang", "serai", "kelapa-parut"],
        preparationContext: "Daging ayam, babi, atau ikan laut digiling halus, dicampur dengan parutan kelapa muda dan bumbu base genep, kemudian dikepal-lilitkan pada tangkai serai tebal sebelum dipanggang di atas arang.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["daging-cincang", "serai", "kelapa-parut"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("sate-lilit", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("sate-lilit", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "ayam-taliwang",
    slug: "ayam-taliwang",
    status: "draft",
    provinceIds: ["nusa-tenggara-barat"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Ayam Taliwang",
        summary: "Ayam bakar khas Lombok dengan bumbu pedas manis dari cabai dan terasi.",
        originContext: "Berasal dari wilayah Karang Taliwang di Lombok, hidangan ini menonjolkan kekuatan rasa terasi Lombok dan cabai rawit merah lokal.",
        flavorNotes: ["pedas", "gurih"],
        keyIngredients: ["ayam-kampung", "cabai", "terasi", "jeruk-limau"],
      }
    },
    aliases: [],
    flavorIds: ["pedas", "gurih"],
    ingredientIds: ["ayam-kampung", "cabai", "terasi"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("ayam-taliwang", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("ayam-taliwang", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "sei-sapi",
    slug: "sei-sapi",
    status: "published",
    provinceIds: ["nusa-tenggara-timur"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Se’i Sapi",
        summary: "Daging sapi asap bergaya Timor yang diiris memanjang dan diproses dengan pengasapan bertahap, menyisakan aroma asap yang pekat.",
        originContext: "Metode se'i pada awalnya digunakan oleh masyarakat Pulau Rote untuk mengawetkan daging rusa liar. Seiring waktu, sapi dan babi menjadi bahan utama yang populer di Kupang dan meluas ke seluruh Indonesia.",
        flavorNotes: ["smoky", "gurih"],
        keyIngredients: ["daging-sapi", "kayu-kosambi", "daun-singkong", "sambal-luat"],
        preparationContext: "Daging diiris memanjang, dibumbui ringan, lalu diasap di atas bara kayu dan daun pohon kosambi (kesambi) yang memberikan efek panas konveksi serta mengunci cita rasa khas asap kayu pada daging.",
      }
    },
    aliases: ["Sei Sapi", "Se'i Daging"],
    flavorIds: ["smoky", "gurih"],
    ingredientIds: ["daging-sapi", "daun-singkong"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("sei-sapi", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("sei-sapi", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "lawar-bali",
    slug: "lawar-bali",
    status: "published",
    provinceIds: ["bali"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Lawar Bali",
        summary: "Campuran daging cincang, sayur-sayuran, dan kelapa parut berbumbu kuat yang disajikan segar.",
        originContext: "Lawar adalah hidangan komunal yang sarat makna spiritual dan harmoni (keseimbangan rasa) bagi masyarakat Hindu Bali, dibuat secara kolektif menjelang hari raya besar.",
        flavorNotes: ["gurih", "rempah-kuat", "segar"],
        keyIngredients: ["daging-cincang", "kacang-panjang", "kelapa-parut", "base-genep"],
        preparationContext: "Kacang panjang atau nangka muda direbus setengah matang, dicincang halus, lalu diaduk rata menggunakan tangan bersama daging cincang matang, kelapa parut sangrai, dan rempah bumbu Bali lengkap.",
      }
    },
    aliases: ["Lawar"],
    flavorIds: ["gurih", "rempah-kuat", "segar"],
    ingredientIds: ["daging-cincang", "sayuran", "kelapa-parut"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("lawar-bali", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("lawar-bali", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "plecing-kangkung",
    slug: "plecing-kangkung",
    status: "published",
    provinceIds: ["nusa-tenggara-barat"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "sambal-pendamping",
    localeContent: {
      id: {
        title: "Plecing Kangkung",
        summary: "Rebusan kangkung segar yang disajikan dingin dengan siraman sambal tomat terasi pedas khas Lombok.",
        originContext: "Plecing Kangkung sangat populer di Pulau Lombok sebagai pendamping wajib Ayam Taliwang. Penggunaan kangkung air lokal berbatang besar memberikan tekstur renyah yang berbeda.",
        flavorNotes: ["pedas", "segar", "asam"],
        keyIngredients: ["kangkung", "tomat", "cabai", "terasi", "jeruk-limau"],
        preparationContext: "Kangkung direbus singkat agar tetap renyah, lalu dibelah membujur. Sambal mentah yang terdiri dari cabai, tomat, terasi bakar, dan perasan jeruk limau diguyurkan di atas kangkung segar.",
      }
    },
    aliases: ["Plecing"],
    flavorIds: ["pedas", "segar", "asam"],
    ingredientIds: ["sayuran", "cabai", "terasi"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("plecing-kangkung", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("plecing-kangkung", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "sate-rembiga",
    slug: "sate-rembiga",
    status: "published",
    provinceIds: ["nusa-tenggara-barat"],
    regionIds: ["bali-nusa-tenggara"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Sate Rembiga",
        summary: "Tusukan daging sapi empuk yang direndam bumbu manis pedas menyengat sebelum dipanggang, tanpa kuah kacang pelengkap.",
        originContext: "Berasal dari Kelurahan Rembiga di Kota Mataram, sate sapi ini menjadi ikon kuliner Lombok yang menonjolkan teknik marinasi tingkat tinggi tanpa saus siraman penyerta.",
        flavorNotes: ["pedas", "manis", "gurih"],
        keyIngredients: ["daging-sapi", "cabai-merah", "bawang-putih", "gula-merah", "ketumbar"],
        preparationContext: "Daging sapi ditumbuk ringan agar empuk, kemudian dimarinasi cukup lama dalam bumbu halus yang didominasi rasa manis dan pedas cabai, sebelum dibakar cepat di atas arang.",
      }
    },
    aliases: [],
    flavorIds: ["pedas", "manis", "gurih"],
    ingredientIds: ["daging-sapi", "cabai", "bawang", "ketumbar"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("sate-rembiga", "bali-nusa-tenggara", "hero"),
      RasaAssetManifest.getDishMedia("sate-rembiga", "bali-nusa-tenggara", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),

  // ===================== KALIMANTAN =====================
  defineDish({
    id: "soto-banjar",
    slug: "soto-banjar",
    status: "published",
    provinceIds: ["kalimantan-selatan"],
    regionIds: ["kalimantan"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Soto Banjar",
        summary: "Soto berkuah bening atau sedikit keruh karena susu, dibumbui dengan kayu manis, cengkeh, dan kapulaga.",
        originContext: "Soto ini mencerminkan pertemuan tradisi rempah Arab, India, dan budaya sungai masyarakat Banjar, menghasilkan soto beraroma cengkeh dan kayu manis yang sangat elegan.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["ayam", "kayu-manis", "cengkeh", "ketupat"],
        preparationContext: "Kuah kaldu direbus dengan rempah utuh yang dibungkus kain kecil agar kaldu tetap bersih. Sering dikentalkan sedikit dengan susu cair atau kuning telur, disajikan bersama ketupat dan perkedel singkong.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["ayam", "kayu-manis", "cengkeh", "ketupat"],
    spiceIds: ["pala", "cengkeh"],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("soto-banjar", "kalimantan", "hero"),
      RasaAssetManifest.getDishMedia("soto-banjar", "kalimantan", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "choi-pan",
    slug: "choi-pan",
    status: "published",
    provinceIds: ["kalimantan-barat"],
    regionIds: ["kalimantan"],
    categoryId: "kudapan",
    localeContent: {
      id: {
        title: "Choi Pan",
        summary: "Kue kukus berbalut kulit tepung beras tipis yang membungkus isian tumis bengkuang dan ebi wangi.",
        originContext: "Merupakan adaptasi hidangan masyarakat Tionghoa (Teochew) di pesisir Kalimantan Barat (Singkawang dan Pontianak), disajikan sebagai camilan sore yang populer di berbagai kedai teh.",
        flavorNotes: ["gurih", "pedas"],
        keyIngredients: ["tepung-beras", "bengkuang", "ebi", "bawang-putih"],
        preparationContext: "Adonan tepung beras diuleni hingga lentur, digilas tipis, lalu diisi tumisan bengkuang, ebi, dan ebi. Dikukus singkat lalu ditaburi minyak bawang putih goreng dan dicocol saus cabai cuka.",
      }
    },
    aliases: ["Chai Kue"],
    flavorIds: ["gurih", "pedas"],
    ingredientIds: ["tepung-beras", "bengkuang", "ebi"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("choi-pan", "kalimantan", "hero"),
      RasaAssetManifest.getDishMedia("choi-pan", "kalimantan", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "mandai",
    slug: "mandai",
    status: "published",
    provinceIds: ["kalimantan-selatan", "kalimantan-tengah"],
    regionIds: ["kalimantan"],
    categoryId: "sambal-pendamping",
    localeContent: {
      id: {
        title: "Mandai",
        summary: "Olahan fermentasi bagian kulit cempedak yang dikenal dalam tradisi kuliner Banjar, menghasilkan tekstur berserat menyerupai daging.",
        originContext: "Teknik fermentasi mandai muncul dari kearifan lokal masyarakat Kalimantan dalam memanfaatkan seluruh bagian buah cempedak yang sedang musim lebat agar tak terbuang sia-sia.",
        flavorNotes: ["asam", "gurih"],
        keyIngredients: ["kulit-cempedak", "garam", "bawang", "cabai"],
        preparationContext: "Bagian dalam kulit cempedak dibersihkan, dipotong, lalu direndam dalam air garam selama berhari-hari. Setelah difermentasi, mandai dapat digoreng atau ditumis bersama bawang dan cabai.",
      }
    },
    aliases: ["Manday"],
    flavorIds: ["asam", "gurih"],
    ingredientIds: ["kulit-cempedak", "bawang", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("mandai", "kalimantan", "hero"),
      RasaAssetManifest.getDishMedia("mandai", "kalimantan", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "juhu-singkah",
    slug: "juhu-singkah",
    status: "published",
    provinceIds: ["kalimantan-tengah"],
    regionIds: ["kalimantan"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Juhu Singkah",
        summary: "Sup berkuah kaldu ikan atau ayam dengan isian utama umbut rotan muda (singkah) yang memiliki sensasi pahit-manis alami.",
        originContext: "Hidangan ini berakar kuat pada masyarakat Dayak di pedalaman Kalimantan Tengah yang memanfaatkan kekayaan hasil hutan berupa pucuk rotan muda (umbut) sebagai sayur.",
        flavorNotes: ["gurih", "pahit", "rempah-kuat"],
        keyIngredients: ["umbi-rotan", "ikan-patin", "kunyit", "lengkuas"],
        preparationContext: "Duri rotan muda dibersihkan, bagian intinya diiris tipis dan direbus bersama ikan sungai dan rempah-rempah basah, menghasilkan harmoni rasa pahit ringan rotan dan kuah gurih segar.",
      }
    },
    aliases: ["Rotan Muda Berkuah"],
    flavorIds: ["gurih", "pahit", "rempah-kuat"],
    ingredientIds: ["umbi-rotan", "ikan", "kunyit", "lengkuas"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("juhu-singkah", "kalimantan", "hero"),
      RasaAssetManifest.getDishMedia("juhu-singkah", "kalimantan", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "nasi-bekepor",
    slug: "nasi-bekepor",
    status: "published",
    provinceIds: ["kalimantan-timur"],
    regionIds: ["kalimantan"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Nasi Bekepor",
        summary: "Nasi liwet ala Kutai yang dimasak bersama bumbu rempah, ikan asin, dan minyak sayur dalam kuali khusus.",
        originContext: "Dahulu Nasi Bekepor merupakan sajian warisan Kesultanan Kutai Kartanegara yang hanya disajikan untuk raja, namun kini dapat dinikmati secara luas sebagai kebanggaan Kalimantan Timur.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["beras", "ikan-asin", "minyak-sayur", "kemangi", "cabai"],
        preparationContext: "Beras ditanak di dalam periuk perunggu (kenceng) bersama bumbu, minyak, rempah, dan kemangi. Proses memasaknya (bekepor) diputar-putar di atas bara arang agar matang merata tanpa gosong.",
      }
    },
    aliases: [],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["beras", "ikan", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("nasi-bekepor", "kalimantan", "hero"),
      RasaAssetManifest.getDishMedia("nasi-bekepor", "kalimantan", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),

  // ===================== SULAWESI =====================
  defineDish({
    id: "coto-makassar",
    slug: "coto-makassar",
    status: "published",
    provinceIds: ["sulawesi-selatan"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Coto Makassar",
        summary: "Sup daging dan jeroan sapi dengan kuah kaldu cucian beras yang kental dan kacang tanah sangrai.",
        originContext: "Merupakan salah satu hidangan purba yang dikembangkan oleh masyarakat Bugis-Makassar. Dipercaya bumbu 40 (rampa patang pulo) di dalamnya adalah jejak Makassar sebagai jalur utama perdagangan rempah.",
        flavorNotes: ["gurih", "rempah-kuat"],
        keyIngredients: ["daging-sapi", "jeroan", "kacang-tanah", "air-cucian-beras"],
        preparationContext: "Daging direbus dengan air tajin (cucian beras putih) dan bumbu kacang tanah giling, menghasilkan kuah keruh, kental, dan sangat gurih. Disantap bersama ketupat atau burasa.",
      }
    },
    aliases: ["Coto"],
    flavorIds: ["gurih", "rempah-kuat"],
    ingredientIds: ["daging-sapi", "jeroan", "kacang-tanah"],
    spiceIds: ["cengkeh", "pala"],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("coto-makassar", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("coto-makassar", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "kapurung",
    slug: "kapurung",
    status: "published",
    provinceIds: ["sulawesi-selatan"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Kapurung",
        summary: "Hidangan berkuah kuning asam segar dengan bola-bola sagu kenyal, sayuran, dan protein ikan atau udang.",
        originContext: "Berasal dari tradisi kuliner masyarakat Luwu (Palopo), Kapurung merupakan wujud pemanfaatan sagu di semenanjung Sulawesi yang sangat kaya gizi dengan beragam sayuran.",
        flavorNotes: ["asam", "gurih", "segar"],
        keyIngredients: ["sagu", "ikan", "sayuran", "jantung-pisang", "patikala"],
        preparationContext: "Tepung sagu disiram air mendidih, dibulatkan, lalu dicampurkan ke dalam kuah kaldu ikan suwir yang ditambahkan asam patikala, bayam, jagung, dan perasan jeruk nipis.",
      }
    },
    aliases: ["Pugalu"],
    flavorIds: ["asam", "gurih", "segar"],
    ingredientIds: ["sagu", "ikan", "sayuran"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: ["papeda-hutan-sagu"],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("kapurung", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("kapurung", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "tinutuan",
    slug: "tinutuan",
    status: "draft",
    provinceIds: ["sulawesi-utara"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Tinutuan",
        summary: "Bubur khas Manado yang kaya akan berbagai jenis sayuran seperti labu, bayam, kangkung, dan jagung.",
        originContext: "Cermin keberagaman nabati Minahasa, bubur tanpa daging ini biasanya disantap di pagi hari bersama sambal roa, dabu-dabu, dan pelengkap protein.",
        flavorNotes: ["segar", "gurih"],
        keyIngredients: ["beras", "labu-kuning", "bayam", "jagung"],
      }
    },
    aliases: ["Bubur Manado"],
    flavorIds: ["segar", "gurih"],
    ingredientIds: ["beras", "labu-kuning", "sayuran"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("tinutuan", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("tinutuan", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "ayam-woku",
    slug: "ayam-woku",
    status: "published",
    provinceIds: ["sulawesi-utara"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Ayam Woku",
        summary: "Ayam yang dimasak dengan bumbu kuning pedas yang sarat dengan aromatik dedaunan khas Minahasa.",
        originContext: "Bumbu woku yang melimpah rempah daun merupakan ciri utama masakan Minahasa (Manado), menonjolkan aroma yang menusuk hidung dan rasa pedas yang membangkitkan selera.",
        flavorNotes: ["pedas", "segar", "rempah-kuat"],
        keyIngredients: ["ayam", "kemangi", "daun-pandan", "daun-jeruk", "kunyit"],
        preparationContext: "Bumbu kuning halus ditumis bersama bermacam-macam daun aromatik (kemangi, pandan iris, daun kunyit, daun jeruk), sebelum ayam dimasukkan dan dimasak hingga kuahnya menyusut menyelimuti daging (woku belanga).",
      }
    },
    aliases: ["Woku Belanga"],
    flavorIds: ["pedas", "segar", "rempah-kuat"],
    ingredientIds: ["ayam", "kunyit", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("ayam-woku", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("ayam-woku", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "bau-peapi",
    slug: "bau-peapi",
    status: "published",
    provinceIds: ["sulawesi-barat"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Bau Peapi",
        summary: "Olahan sup ikan laut segar berkuah bening asam dengan rempah kuning khas pesisir Mandar, Sulawesi Barat.",
        originContext: "Bau Peapi secara harfiah berarti ikan yang dimasak. Hidangan ini merupakan menu keseharian suku pelaut Mandar, yang memasaknya sederhana dengan bahan tangkapan laut paling segar.",
        flavorNotes: ["asam", "segar", "gurih"],
        keyIngredients: ["ikan", "kunyit", "asam-mangga", "bawang-merah"],
        preparationContext: "Ikan segar (biasanya tongkol atau cakalang) direbus perlahan dalam air berbumbu kunyit, asam mangga (pangi) cincang, minyak kelapa tradisional, dan bawang-bawangan utuh.",
      }
    },
    aliases: ["Ikan Peapi"],
    flavorIds: ["asam", "segar", "gurih"],
    ingredientIds: ["ikan", "kunyit", "bawang-merah"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("bau-peapi", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("bau-peapi", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "binte-biluhuta",
    slug: "binte-biluhuta",
    status: "published",
    provinceIds: ["gorontalo"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Binte Biluhuta",
        summary: "Sup jagung manis berkuah kaldu udang atau ikan, bertabur suwiran protein dan kelapa parut.",
        originContext: "Juga dikenal sebagai Milu Siram, hidangan purba ini mencerminkan identitas Gorontalo sebagai salah satu lumbung jagung dan hasil laut Nusantara.",
        flavorNotes: ["manis", "segar", "gurih"],
        keyIngredients: ["jagung", "udang", "kelapa-parut", "kemangi", "cabai"],
        preparationContext: "Biji jagung pipil muda direbus bersama ikan atau udang segar. Disajikan di mangkuk dengan taburan kelapa parut, daun bawang, kemangi segar, dan perasan jeruk.",
      }
    },
    aliases: ["Milu Siram"],
    flavorIds: ["manis", "segar", "gurih"],
    ingredientIds: ["jagung", "ikan", "kelapa-parut"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("binte-biluhuta", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("binte-biluhuta", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "kaledo",
    slug: "kaledo",
    status: "published",
    provinceIds: ["sulawesi-tengah"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Kaledo",
        summary: "Sup tulang kaki sapi berkuah bening asam-pedas khas Donggala, disajikan dengan sumsum di dalamnya.",
        originContext: "Kaledo (Kaki Lembu Donggala) adalah lambang keagungan kuliner Kaili. Kesederhanaan bumbunya sengaja dirancang untuk menonjolkan kelezatan sumsum dan empuknya daging gurat kaki sapi.",
        flavorNotes: ["gurih", "asam", "pedas"],
        keyIngredients: ["tulang-sapi", "asam-jawa", "cabai-rawit", "garam"],
        preparationContext: "Tulang kaki lembu direbus berjam-jam hingga daging yang menempel sangat lembut. Kuah kaldunya hanya dibumbui garam, perasan asam jawa matang, dan cabai rawit utuh.",
      }
    },
    aliases: ["Kaki Lembu Donggala"],
    flavorIds: ["gurih", "asam", "pedas"],
    ingredientIds: ["daging-sapi", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("kaledo", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("kaledo", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "pallubasa",
    slug: "pallubasa",
    status: "published",
    provinceIds: ["sulawesi-selatan"],
    regionIds: ["sulawesi"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Pallubasa",
        summary: "Sup daging dan jeroan berbumbu lekat dengan kuah keruh gelap akibat tambahan kelapa sangrai (serundeng) berlimpah.",
        originContext: "Sering disandingkan dengan Coto, Pallubasa berasal dari kota Makassar namun memiliki tekstur kaldu yang lebih berat, gelap, dan kasar karena butiran serundeng, sering disajikan bagi kelas pekerja pelabuhan.",
        flavorNotes: ["gurih", "rempah-kuat", "manis"],
        keyIngredients: ["daging-sapi", "jeroan", "kelapa-sangrai", "kuning-telur"],
        preparationContext: "Mirip dengan coto, namun kuahnya dididihkan dengan parutan kelapa tua yang telah disangrai kering. Di warung, mangkuk Pallubasa kerap ditambahkan kuning telur ayam kampung mentah (alas) saat dihidangkan panas-panas.",
      }
    },
    aliases: ["Pallu Basa"],
    flavorIds: ["gurih", "rempah-kuat", "manis"],
    ingredientIds: ["daging-sapi", "jeroan", "kelapa-sangrai"],
    spiceIds: ["pala", "cengkeh"],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("pallubasa", "sulawesi", "hero"),
      RasaAssetManifest.getDishMedia("pallubasa", "sulawesi", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),

  // ===================== MALUKU & PAPUA =====================
  defineDish({
    id: "papeda",
    slug: "papeda",
    status: "published",
    provinceIds: ["maluku", "papua"],
    regionIds: ["maluku", "papua"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Papeda",
        summary: "Bubur sagu bertekstur kental dan lengket transparan, disajikan bersama lauk berkuah kuning yang tajam bumbu.",
        originContext: "Papeda merepresentasikan makanan pokok masyarakat kepulauan Maluku dan pesisir Papua, yang bergantung pada siklus hutan sagu sebagai lumbung pangan peninggalan leluhur.",
        flavorNotes: ["gurih"],
        keyIngredients: ["sagu", "ikan-kuah-kuning"],
        preparationContext: "Tepung sagu murni diseduh perlahan dengan air mendidih sambil terus diaduk secara ritmis hingga berubah warna menjadi bening lengket. Dimakan dengan cara diseruput langsung dari piring berkuah.",
      }
    },
    aliases: [],
    flavorIds: ["gurih"],
    ingredientIds: ["sagu", "ikan"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: ["ikan-kuah-kuning"],
    relatedStoryIds: ["papeda-hutan-sagu"],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("papeda", "papua", "hero"),
      RasaAssetManifest.getDishMedia("papeda", "papua", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "ikan-kuah-kuning",
    slug: "ikan-kuah-kuning",
    status: "draft",
    provinceIds: ["maluku"],
    regionIds: ["maluku"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Ikan Kuah Kuning",
        summary: "Ikan segar yang dimasak dalam kuah bening berwarna kuning dari kunyit dengan rasa asam segar.",
        originContext: "Pendamping setia Papeda, menyeimbangkan tawar sagu dengan ledakan bumbu.",
        flavorNotes: ["asam", "segar", "gurih"],
        keyIngredients: ["ikan-tongkol", "kunyit", "kemangi", "belimbing-wuluh"],
      }
    },
    aliases: [],
    flavorIds: ["asam", "segar", "gurih"],
    ingredientIds: ["ikan", "kunyit", "kemangi"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: ["papeda-hutan-sagu"],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("ikan-kuah-kuning", "maluku", "hero"),
      RasaAssetManifest.getDishMedia("ikan-kuah-kuning", "maluku", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "gohu-ikan",
    slug: "gohu-ikan",
    status: "published",
    provinceIds: ["maluku-utara"],
    regionIds: ["maluku"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Gohu Ikan",
        summary: "Olahan ikan mentah segar khas Maluku Utara, terutama dikenal di Ternate, yang dipotong kasar lalu dibumbui citrus dan aromatik.",
        originContext: "Sering disebut sebagai sashimi-nya Indonesia Timur. Kualitas tangkapan laut perairan Ternate yang sangat baik memungkinkan ikan dinikmati mentah secara aman dalam balutan tradisi rempah.",
        flavorNotes: ["segar", "asam", "pedas"],
        keyIngredients: ["tuna", "lemon-cui", "kemangi", "bawang-merah", "cabai-rawit"],
        preparationContext: "Daging ikan tuna (atau cakalang) super segar dipotong dadu, dilumuri garam dan perasan lemon cui hingga teksturnya memadat pucat. Ditaburi irisan bawang, kemangi, dan disiram sedikit minyak kelapa panas.",
      }
    },
    aliases: ["Sashimi Ternate"],
    flavorIds: ["segar", "asam", "pedas"],
    ingredientIds: ["ikan", "kemangi", "bawang-merah", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("gohu-ikan", "maluku", "hero"),
      RasaAssetManifest.getDishMedia("gohu-ikan", "maluku", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "ikan-bakar-manokwari",
    slug: "ikan-bakar-manokwari",
    status: "draft",
    provinceIds: ["papua-barat"],
    regionIds: ["papua"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Ikan Bakar Manokwari",
        summary: "Ikan bakar yang disajikan dengan sambal mentah ulek kasar yang pedas khas pesisir Papua.",
        originContext: "Gaya kuliner pesisir Teluk Doreri di Manokwari, Papua Barat.",
        flavorNotes: ["pedas", "gurih"],
        keyIngredients: ["ikan-tongkol", "cabai-rawit", "lemon-cui"],
      }
    },
    aliases: [],
    flavorIds: ["pedas", "gurih"],
    ingredientIds: ["ikan", "cabai"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("ikan-bakar-manokwari", "papua", "hero"),
      RasaAssetManifest.getDishMedia("ikan-bakar-manokwari", "papua", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
  defineDish({
    id: "keladi-tumbuk",
    slug: "keladi-tumbuk",
    status: "draft",
    provinceIds: ["papua"],
    regionIds: ["papua"],
    categoryId: "makanan-utama",
    localeContent: {
      id: {
        title: "Keladi Tumbuk",
        summary: "Talas yang direbus lalu ditumbuk halus hingga menyerupai pasta lengket, sebagai sumber karbohidrat utama.",
        originContext: "Keladi atau talas memegang peranan krusial sebagai sumber pangan berkelanjutan di pegunungan tengah Papua.",
        flavorNotes: ["gurih"],
        keyIngredients: ["talas", "garam"],
      }
    },
    aliases: [],
    flavorIds: ["gurih"],
    ingredientIds: ["talas"],
    spiceIds: [],
    sourceRefs: ["Nusantaraya Editorial 2026"],
    relatedDishIds: [],
    relatedStoryIds: [],
    relatedFeatureRefs: [],
    media: [
      RasaAssetManifest.getDishMedia("keladi-tumbuk", "papua", "hero"),
      RasaAssetManifest.getDishMedia("keladi-tumbuk", "papua", "card")
    ],
    updatedAt: "2026-07-21T00:00:00Z"
  }),
];

export const CANONICAL_BATTLE_PAIRS: FoodBattlePair[] = [
  {
    id: "rendang-vs-rawon",
    dishAId: "rendang",
    dishBId: "rawon",
    context: "Keduanya merupakan olahan daging sapi ikonik dengan profil rempah kuat, namun satu kering dan satu berkuah.",
    dimensions: [
      { id: "dim1", label: "Asal/Konteks", dishAValue: "Minangkabau (Perbekalan perantau)", dishBValue: "Jawa Timur (Hidangan keraton & masyarakat)" },
      { id: "dim2", label: "Karakter Rasa", dishAValue: "Pedas, gurih santan, kaya rempah", dishBValue: "Gurih kaldu, pahit earthy (kluwek)" },
      { id: "dim3", label: "Bahan Utama", dishAValue: "Santan kelapa tua, cabai", dishBValue: "Kluwek, kaldu sapi" },
      { id: "dim4", label: "Tekstur", dishAValue: "Kering, berserat padat", dishBValue: "Berkuah encer, daging empuk" },
    ]
  },
  {
    id: "papeda-vs-kapurung",
    dishAId: "papeda",
    dishBId: "kapurung",
    context: "Dua representasi kuat dari olahan sagu Nusantara dengan presentasi dan komposisi yang berbeda.",
    dimensions: [
      { id: "dim1", label: "Asal/Konteks", dishAValue: "Maluku & Papua", dishBValue: "Sulawesi Selatan (Luwu)" },
      { id: "dim2", label: "Penyajian", dishAValue: "Terpisah dari kuah", dishBValue: "Campur dalam satu wadah berkuah" },
      { id: "dim3", label: "Tekstur Sagu", dishAValue: "Kental, lengket, transparan", dishBValue: "Bola-bola kecil, kenyal" },
      { id: "dim4", label: "Bahan Pelengkap", dishAValue: "Ikan kuah kuning", dishBValue: "Sayuran, jagung, jantung pisang, ikan/udang" },
    ]
  },
  {
    id: "sate-padang-vs-coto-makassar",
    dishAId: "sate-padang",
    dishBId: "coto-makassar",
    context: "Sama-sama hidangan daging dan jeroan berkuah kental dari dua wilayah budaya dagang pesisir besar.",
    dimensions: [
      { id: "dim1", label: "Asal/Konteks", dishAValue: "Sumatera Barat", dishBValue: "Makassar, Sulawesi Selatan" },
      { id: "dim2", label: "Karakter Kuah", dishAValue: "Kental tepung beras, kuning/merah", dishBValue: "Kental tajin beras dan kacang tanah" },
      { id: "dim3", label: "Karbohidrat Pendamping", dishAValue: "Ketupat Daun Kelapa", dishBValue: "Ketupat atau Burasa" },
    ]
  }
];

export const CANONICAL_STORIES: FoodStory[] = [
  {
    id: "aku-rendang",
    title: "Aku, Rendang",
    summary: "Perjalanan sepotong daging melintasi waktu, dari dapur Minangkabau hingga ke seluruh dunia.",
    author: "NusaRasa Editorial",
    chapters: [
      { id: "c1", title: "Asal Konteks", content: "Lahir dari tradisi merantau masyarakat Minangkabau, rendang diciptakan sebagai perbekalan yang tahan lama berbulan-bulan." },
      { id: "c2", title: "Proses Panjang", content: "Membutuhkan waktu hingga 8 jam, melewati fase gulai, kalio, hingga akhirnya menjadi rendang." },
    ],
    relatedDishIds: ["rendang"],
    relatedSpiceIds: ["cengkeh", "pala"]
  },
  {
    id: "papeda-hutan-sagu",
    title: "Papeda dan Hutan Sagu",
    summary: "Sagu bukan sekadar makanan, melainkan ibu yang menghidupi peradaban di Indonesia Timur.",
    author: "NusaRasa Editorial",
    chapters: [
      { id: "c1", title: "Sagu sebagai Kehidupan", content: "Masyarakat Papua memandang hutan sagu sebagai sumber kehidupan sakral." },
      { id: "c2", title: "Sinergi Rasa", content: "Keseimbangan rasa tawar papeda dengan kuah kuning yang tajam." },
    ],
    relatedDishIds: ["papeda", "kapurung"],
    relatedSpiceIds: []
  }
];

export const CANONICAL_SPICES: CulinarySpice[] = [
  {
    id: "pala",
    name: "Pala",
    aliases: ["Myristica fragrans"],
    flavorContribution: "Hangat, manis, berkayu, dan aromatik; digunakan dalam jumlah terukur untuk memberi kedalaman pada masakan dan minuman.",
    historicalNote: "Pala memiliki hubungan kuat dengan Kepulauan Banda di Maluku dan menjadi salah satu komoditas penting dalam sejarah perdagangan rempah global. Kehadirannya tidak hanya sebatas komoditas, melainkan akar kehidupan masyarakat Maluku Tengah masa lampau.",
    relatedDishIds: ["soto-banjar", "coto-makassar"],
    relatedRegionIds: ["maluku"],
    sourceStatus: "Verified by Archive",
    media: RasaAssetManifest.getSpiceMedia("pala")
  },
  {
    id: "cengkeh",
    name: "Cengkeh",
    aliases: ["Syzygium aromaticum"],
    flavorContribution: "Hangat, tajam, manis-aromatik, dan sedikit memberi sensasi kebas. Digunakan dalam masakan, minuman, serta berbagai tradisi olahan.",
    historicalNote: "Cengkeh memiliki akar botani dan sejarah yang kuat di Kepulauan Maluku, termasuk Ternate, Tidore, Moti, Makian, dan Bacan. Rempah ini berperan krusial dalam jaringan perdagangan regional dan memicu kolonialisme rempah dunia.",
    relatedDishIds: ["soto-banjar", "rendang", "coto-makassar"],
    relatedRegionIds: ["maluku-utara"],
    sourceStatus: "Verified by Archive",
    media: RasaAssetManifest.getSpiceMedia("cengkeh")
  }
];

export const CANONICAL_TRAILS: TastingTrail[] = [
  {
    id: "trail-rempah-sumatera",
    title: "Jalur Rempah Sumatera",
    description: "Perjalanan melintasi pedas dan gurihnya tradisi kuliner Pulau Sumatera.",
    dishes: CANONICAL_DISHES.filter(d => d.regionIds.includes("sumatera") && d.status === "published").slice(0, 5),
    routeCta: "Lihat Rute di Nusa Route"
  }
];
