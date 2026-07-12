import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const jawaTimurReferences: ScientificReference[] = [
  {
    id: "jtm-ref-bps",
    title: "Provinsi Jawa Timur Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Timur"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Jawa Timur",
    url: "https://jatim.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-timur"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "jtm-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Jawa Timur",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-timur"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "jtm-ref-majapahit",
    title: "Negarakertagama dan Sejarah Majapahit",
    authors: ["Muljana, Slamet"],
    year: 2006,
    publisher: "LKiS",
    url: "https://id.wikipedia.org/wiki/Majapahit",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["jawa-timur"],
    topicIds: ["history", "society"],
  },
  {
    id: "jtm-ref-bromo-tengger",
    title: "Taman Nasional Bromo Tengger Semeru",
    authors: ["Kementerian Lingkungan Hidup dan Kehutanan"],
    year: 2020,
    publisher: "KLHK",
    url: "https://bromotenggersemeru.org/",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-timur"],
    topicIds: ["biodiversity", "destinations", "society"],
  },
  {
    id: "jtm-ref-ijen",
    title: "Ijen UNESCO Global Geopark",
    authors: ["UNESCO Global Geoparks"],
    year: 2023,
    publisher: "UNESCO",
    url: "https://en.unesco.org/global-geoparks/ijen",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jawa-timur"],
    topicIds: ["geography", "destinations"],
  }
];

export const jawaTimurAtlas: ProvinceAtlas = {
  provinceId: "jawa-timur",
  slug: "jawa-timur",
  title: "Jawa Timur",
  tagline: "Tanah Majapahit, Pesona Kawah Purba, dan Spirit Arek",
  summary: [
    {
      id: "jtm-sum-01",
      content: "Jawa Timur adalah episentrum kekuatan Kerajaan Majapahit yang legendaris yang menyatukan Nusantara. Wilayahnya mencakup ujung timur Pulau Jawa dan Pulau Madura. Diberkahi dengan keajaiban geologis dunia seperti api biru Ijen dan lautan pasir Bromo, serta dihuni oleh masyarakat beraliran 'Arek' yang egaliter dan lugas, Jawa Timur adalah wujud nyata ketangguhan dan kemegahan pesona alam timur.",
      citationIds: ["jtm-ref-bps", "jtm-ref-majapahit"],
    }
  ],
  quickFacts: [
    { id: "jtm-qf-01", label: "Ibu Kota", value: "Surabaya", citationIds: ["jtm-ref-bps"] },
    { id: "jtm-qf-02", label: "Luas Wilayah", value: "48.033,00 km²", citationIds: ["jtm-ref-bps"], dataYear: 2024 },
    { id: "jtm-qf-03", label: "Populasi", value: "41.416.407 jiwa", citationIds: ["jtm-ref-bps"], dataYear: 2023 },
    { id: "jtm-qf-04", label: "Gunung Tertinggi", value: "Semeru (3.676 mdpl)", citationIds: ["jtm-ref-bromo-tengger"] },
    { id: "jtm-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["jtm-ref-bps"] },
    { id: "jtm-qf-06", label: "Gubernur", value: "Adhy Karyono (Pj.)", citationIds: ["jtm-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "jtm-geo-01",
        content: "Geografi Jawa Timur adalah wilayah yang kontras: dari pesisir dan dataran rendah pesisir utara, Pulau Madura yang kapur kering, hingga sabuk gunung api berderet di sepanjang cincin selatan.",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "jtm-geo-02",
        content: "Di kawasan Bromo-Tengger-Semeru terdapat kaldera lautan pasir raksasa di atas gunung. Di ujung timur (Banyuwangi), terdapat Gunung Ijen dengan kawah asam terbesar di dunia. Jawa Timur juga dihubungkan dengan Pulau Madura oleh bentang Jembatan Suramadu membelah Selat Madura.",
        citationIds: ["jtm-ref-bromo-tengger", "jtm-ref-ijen"],
      }
    ],
    referenceIds: ["jtm-ref-bps", "jtm-ref-bromo-tengger", "jtm-ref-ijen"],
  },

  history: {
    introduction: [
      {
        id: "jtm-his-01",
        content: "Di sinilah kemaharajaan terbesar di Nusantara, Kerajaan Majapahit, menancapkan hegemoni Nusantara melalui Sumpah Palapa Gajah Mada, dan menjadi basis terkuat perjuangan revolusi fisik (10 November).",
        citationIds: ["jtm-ref-majapahit"],
      }
    ],
    timeline: [
      {
        id: "jtm-era-01",
        period: "Abad ke-13 (1293 M)",
        title: "Berdirinya Majapahit",
        description: "Raden Wijaya mendirikan Kerajaan Majapahit (berpusat di Trowulan, Mojokerto) setelah berhasil mengusir pasukan invasi Mongol (Kekaisaran Yuan) pimpinan Kubilai Khan. Majapahit kelak menjadi imperium Hindu-Buddha terbesar di Asia Tenggara.",
        citationIds: ["jtm-ref-majapahit"],
      },
      {
        id: "jtm-era-02",
        period: "1350 – 1389",
        title: "Masa Keemasan Majapahit",
        description: "Di bawah pimpinan Raja Hayam Wuruk dan Mahapatih Gajah Mada (dengan Sumpah Palapa-nya), Majapahit menyatukan wilayah Nusantara hingga semenanjung Malaya.",
        citationIds: ["jtm-ref-majapahit"],
      },
      {
        id: "jtm-era-03",
        period: "10 November 1945",
        title: "Pertempuran Surabaya",
        description: "Pasukan Arek-Arek Suroboyo (dengan pidato ikonik Bung Tomo) mati-matian mempertahankan kedaulatan RI melawan invasi kembali tentara Sekutu/Inggris. Hari ini diperingati sebagai Hari Pahlawan Nasional.",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    referenceIds: ["jtm-ref-majapahit", "jtm-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "jtm-soc-01",
        content: "Jawa Timur tidak sepenuhnya 'Jawa' dalam arti halus (Kejawen). Jawa Timur membagi masyarakatnya dalam beberapa zona sub-kultur besar dengan karakter yang sangat kuat.",
        citationIds: ["jtm-ref-majapahit"],
      }
    ],
    socialStructure: [
      {
        id: "jtm-soc-02",
        content: "Kultur *Arek* (Surabaya, Malang) memiliki karakter terbuka, ceplas-ceplos, berani, dan egaliter. Kultur *Mataraman* (Madiun, Kediri) lebih mirip Jawa Tengah (sopan dan hierarkis). Kultur *Pendalungan* (Tapal Kuda/pesisir timur) adalah peleburan Jawa dan Madura yang santri dan ulet. Selain itu, ada Suku *Tengger* (di Bromo) beragama Hindu, dan Suku *Osing* (di Banyuwangi) sisa pelarian Majapahit.",
        citationIds: ["jtm-ref-majapahit", "jtm-ref-bromo-tengger"],
      }
    ],
    referenceIds: ["jtm-ref-majapahit", "jtm-ref-bromo-tengger"],
  },

  culture: {
    introduction: [
      {
        id: "jtm-cul-01",
        content: "Seni pertunjukan di Jawa Timur sangat ekspresif, bertempo cepat, sering dibumbui komedi keseharian, dan kerap kali maskulin/menguji nyali.",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jtm-cul-item-01",
        category: "Seni Pertunjukan Bertopeng",
        title: "Reog Ponorogo",
        description: "Tarian kolosal mistis dari Ponorogo. Penari utamanya (Warok) mengangkat topeng raksasa (Dadap Merak) berupa kepala harimau (Singa Barong) yang dihiasi bulu merak setinggi 2 meter, hanya menggunakan gigitan giginya.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-cul-item-02",
        category: "Olahraga Tradisional",
        title: "Karapan Sapi (Madura)",
        description: "Perlombaan pacuan sapi jantan khas Pulau Madura di lintasan berlumpur/tanah kering, menggunakan kaleles (kereta kayu kecil) yang dikemudikan oleh sang Joki. Melambangkan prestise dan keuletan Suku Madura.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-cul-item-03",
        category: "Seni Tari & Penyambutan",
        title: "Tari Remo",
        description: "Tarian klasik yang menceritakan keberanian dan kegagahan pangeran. Awalnya merupakan pembukaan kesenian Ludruk (teater rakyat Jatim), kini Remo menjadi tarian penyambutan tamu resmi Jawa Timur.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-cul-item-04",
        category: "Teater Tradisional",
        title: "Ludruk",
        description: "Drama tradisional yang diperankan oleh grup lawak, mengangkat cerita kehidupan rakyat sehari-hari, sarat dengan kritik sosial, parodi lucu, dan iringan gamelan Jula-Juli yang cepat.",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    referenceIds: ["jtm-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "jtm-lang-01",
        content: "Di Jawa Timur, bahasa utama adalah Bahasa Jawa dialek Jawa Timuran (Suroboyoan/Malangan) yang sangat blak-blakan, serta Bahasa Madura yang digunakan baik di pulau Madura maupun daratan timur Jatim (tapal kuda).",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "jtm-voc-01", word: "Cuk (Jancuk)", meaning: "Kata seru/makian khas Jawa Timur. Awalnya bermakna sangat kasar, kini sering digunakan sebagai kata sapaan keakraban antar-sahabat sejati (tanpa niat menghina).", citationIds: ["jtm-ref-bps"] },
      { id: "jtm-voc-02", word: "Rek", meaning: "Sapaan / Teman-teman (Arek). Contoh: 'Ayo rek!'", citationIds: ["jtm-ref-bps"] },
      { id: "jtm-voc-03", word: "Pisang", meaning: "Bahasa Jatim untuk 'sekali' (seperti 'sisan'). Bukan buah pisang (Jatim: gedhang).", citationIds: ["jtm-ref-bps"] },
      { id: "jtm-voc-04", word: "Sengkok / Beken", meaning: "Saya / Kamu (Bahasa Madura kasar/pergaulan)", citationIds: ["jtm-ref-bps"] },
    ],
    referenceIds: ["jtm-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "jtm-culi-01",
        content: "Masakan Jawa Timur memiliki rasa yang cenderung sangat gurih, asin, dan pedas (berkat pemakaian cabai dan petis udang/ikan hitam pekat).",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jtm-culi-item-01",
        title: "Rawon",
        description: "Sup daging sapi dengan kuah berwarna hitam pekat. Warna hitam dan rasa gurih yang khas ini berasal dari rempah bernama kluwek/kepayang. Selalu disajikan dengan telur asin, tauge pendek, dan kerupuk udang.",
        citationIds: ["jrf-wbtb-01", "jtm-ref-wbtb"],
      },
      {
        id: "jtm-culi-item-02",
        title: "Rujak Cingur",
        description: "Salad tradisional khas Surabaya. Berisi irisan mulut/moncong sapi (cingur) yang direbus kenyal, sayuran kangkung, buah segar, tahu/tempe, dan disiram bumbu pekat dari petis udang Madura hitam.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-culi-item-03",
        title: "Soto Lamongan",
        description: "Varian soto paling terkenal di Indonesia. Kuah kuning gurihnya memiliki taburan khas bernama poya (bubuk kerupuk udang dan bawang putih goreng yang dihaluskan) yang membuat kuah menjadi kental dan sangat sedap.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-culi-item-04",
        title: "Pecel Madiun",
        description: "Nasi sayuran yang disiram saus kacang pecel pedas manis yang diulek kasar dengan daun jeruk, selalu disajikan (dipincuk) dengan kerupuk karak/lempeng beras, sate usus, dan rempeyek renyah.",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    referenceIds: ["jtm-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "jtm-bio-01",
        content: "Jawa Timur memegang peran penting dalam konservasi satwa besar endemik Jawa, terutama di kawasan padang savana Baluran dan rimba Taman Nasional Meru Betiri.",
        citationIds: ["jtm-ref-bromo-tengger"],
      }
    ],
    species: [
      {
        id: "jtm-bio-item-01",
        category: "Fauna Darat (Maskot)",
        title: "Ayam Bekisar (Gallus varius × Gallus gallus)",
        description: "Ayam hias hasil persilangan ayam hutan hijau (jantan) dan ayam kampung (betina) dari Kangean, Madura. Terkenal dengan bulunya yang eksotis mengilap dan suara kokokannya yang melengking khas.",
        citationIds: ["jtm-ref-bps"],
      },
      {
        id: "jtm-bio-item-02",
        category: "Fauna Darat Besar",
        title: "Banteng Jawa (Bos javanicus)",
        description: "Banteng liar yang masih merumput dalam kawanan besar di padang savana Bekol, Taman Nasional Baluran ('Africa van Java') dan Taman Nasional Alas Purwo, bersaing dengan macan tutul dan anjing hutan (ajag).",
        citationIds: ["jtm-ref-bps"],
      },
      {
        id: "jtm-bio-item-03",
        category: "Flora Pegunungan",
        title: "Bunga Edelweis Jawa (Anaphalis javanica)",
        description: "Bunga Abadi yang tidak layu (karena hormon etilen pengering terhenti di suhu dingin). Sangat dilindungi di kawasan kaldera Bromo-Tengger-Semeru. Dilarang keras dipetik oleh pendaki liar.",
        citationIds: ["jtm-ref-bromo-tengger"],
      }
    ],
    referenceIds: ["jtm-ref-bromo-tengger", "jtm-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "jtm-dest-01",
        content: "Selain metropolitan Surabaya dan wisata taman hiburan keluarga di Batu, Jawa Timur sangat diunggulkan dalam wisata alam ekstrem berstatus kelas dunia.",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    items: [
      {
        id: "jtm-dest-item-01",
        category: "Alam Pegunungan (Vulkanik)",
        title: "Gunung Bromo",
        description: "Salah satu pemandangan sunrise terbaik di Asia. Terletak di tengah lautan pasir raksasa, wisatawan naik jeep (hartop) melintasi pasir hisap menuju kaldera dan menaiki anak tangga menuju kawah Bromo yang mengepul.",
        citationIds: ["jtm-ref-bromo-tengger"],
      },
      {
        id: "jtm-dest-item-02",
        category: "Keajaiban Geologi (UNESCO)",
        title: "Kawah Ijen (Blue Fire)",
        description: "Hanya ada dua di dunia (satu di Islandia). Wisatawan mendaki pada dini hari (jam 2 pagi) menuju bibir kawah dan turun mendekati danau asam untuk melihat fenomena api biru dari gas belerang alami yang terbakar.",
        citationIds: ["jtm-ref-ijen"],
      },
      {
        id: "jtm-dest-item-03",
        category: "Alam Savana",
        title: "Taman Nasional Baluran (Situbondo)",
        description: "Taman nasional di ujung timur Jawa yang memiliki savana (padang rumput) menguning bak padang rumput Serengeti Afrika di musim kemarau, dilatari siluet Gunung Baluran yang gagah.",
        citationIds: ["jtm-ref-bps"],
      },
      {
        id: "jtm-dest-item-04",
        category: "Sejarah Purbakala",
        title: "Situs Trowulan (Mojokerto)",
        description: "Kompleks kota purba seluas 11x11 km yang pernah menjadi ibu kota Kerajaan Majapahit, berisi Gapura Bajang Ratu, Candi Tikus (petirtaan), dan Gapura Wringin Lawang (gerbang istana).",
        citationIds: ["jtm-ref-majapahit"],
      }
    ],
    referenceIds: ["jtm-ref-bps", "jtm-ref-bromo-tengger", "jtm-ref-ijen", "jtm-ref-majapahit"],
  },

  stories: {
    introduction: [
      {
        id: "jtm-story-01",
        content: "Cerita rakyat dari Timur Jawa dipenuhi aura kepahlawanan historis, intrik kekuasaan (kudeta), ilmu sihir (santet/Leak), dan cinta tragis.",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "jtm-story-item-01",
        title: "Kutukan Keris Mpu Gandring (Ken Arok)",
        description: "Kisah berdirinya Kerajaan Singhasari. Ken Arok, seorang perampok, membunuh pembuat keris (Mpu Gandring) sebelum kerisnya selesai, memicu kutukan bahwa keris itu kelak akan membunuh 7 turunan wangsa Rajasa, termasuk diri Ken Arok sendiri.",
        citationIds: ["jtm-ref-wbtb"],
      },
      {
        id: "jtm-story-item-02",
        title: "Calon Arang",
        description: "Legenda penyihir (janda sakti) dari Desa Girah (Kediri) di era Raja Airlangga yang menyebarkan tulah penyakit mematikan karena putrinya (Ratna Manggali) tidak ada yang mau melamar (takut pada ilmu hitamnya).",
        citationIds: ["jtm-ref-wbtb"],
      }
    ],
    referenceIds: ["jtm-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "jtm-cont-01",
        content: "Surabaya adalah kota terpadat dan sentra ekonomi terbesar kedua di Indonesia setelah Jakarta, serta hub penghubung logistik untuk seluruh kawasan Indonesia Timur.",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    economy: [
      {
        id: "jtm-cont-02",
        content: "Selain Pelabuhan Tanjung Perak dan kawasan industri di Gresik-Sidoarjo, Jembatan Nasional Suramadu yang membentang 5,4 km berhasil mengubah peta ekonomi Madura. Kota Batu (Malang) juga meledak sebagai kiblat wisata theme park (Jatim Park 1,2,3) dan pariwisata modern terpadu bertaraf internasional.",
        citationIds: ["jtm-ref-bps"],
      }
    ],
    referenceIds: ["jtm-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "jtm-travel-01",
        content: "Medan geografis tempat-tempat ikonik di Jawa Timur (terutama Bromo dan Ijen) cukup menantang secara fisik, sehingga perlu persiapan matang.",
        citationIds: ["jtm-ref-bromo-tengger"],
      }
    ],
    etiquette: [
      {
        id: "jtm-travel-02",
        content: "Saat mendaki kawah Ijen berburu Blue Fire, Anda wajib menyewa masker gas respirator khusus (bukan masker medis biasa) karena gas belerang sangat pekat dan mematikan. Di lautan pasir Bromo, dilarang keras menaiki atap Jeep atau menginjak bagian suci pura umat Hindu Tengger (Pura Luhur Poten) dan dilarang masuk saat upacara Kasada (kecuali dengan izin).",
        citationIds: ["jtm-ref-ijen", "jtm-ref-bromo-tengger"],
      }
    ],
    referenceIds: ["jtm-ref-ijen", "jtm-ref-bromo-tengger"],
  },

  lastReviewedAt: "2026-07-12T16:58:00Z",
  contentStatus: "draft",
  referenceIds: [
    "jtm-ref-bps",
    "jtm-ref-wbtb",
    "jtm-ref-majapahit",
    "jtm-ref-bromo-tengger",
    "jtm-ref-ijen"
  ]
};
