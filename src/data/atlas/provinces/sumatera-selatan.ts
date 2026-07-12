import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sumateraSelatanReferences: ScientificReference[] = [
  {
    id: "sms-ref-bps",
    title: "Provinsi Sumatera Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Sumatera Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sumatera Selatan",
    url: "https://sumsel.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "sms-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sumatera Selatan",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "sms-ref-sriwijaya",
    title: "Sriwijaya: Sejarah Raja-Raja dan Kerajaan",
    authors: ["Coedès, George"],
    year: 1992,
    publisher: "Pusat Penelitian Arkeologi Nasional",
    url: "https://id.wikipedia.org/wiki/Sriwijaya",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["history"],
  },
  {
    id: "sms-ref-pasemah",
    title: "Situs Megalitik Pasemah",
    authors: ["Balai Pelestarian Cagar Budaya Jambi"],
    year: 2014,
    publisher: "Kemdikbud",
    url: "https://kebudayaan.kemdikbud.go.id/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "B",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["society", "destinations"],
  },
  {
    id: "sms-ref-sembilang",
    title: "Sembilang National Park (Ramsar Site)",
    authors: ["Ramsar Convention"],
    year: 2011,
    publisher: "Ramsar Sites Information Service",
    url: "https://rsis.ramsar.org/ris/1945",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["biodiversity"],
  }
];

export const sumateraSelatanAtlas: ProvinceAtlas = {
  provinceId: "sumatera-selatan",
  slug: "sumatera-selatan",
  title: "Sumatera Selatan",
  tagline: "Bumi Sriwijaya, Arus Sungai Membelah Kota",
  summary: [
    {
      id: "sms-sum-01",
      content: "Sumatera Selatan adalah ibu kota maritim masa silam, titik episentrum Kemaharajaan Sriwijaya yang sangat melegenda di Asia Tenggara. Sungai Musi dan Jembatan Ampera tak hanya menjadi urat nadi perdagangan, tetapi juga cerminan wajah Palembang hari ini yang memadukan jejak kebesaran maritim purba, kekuatan Kesultanan Islam, dan sentuhan budaya Tionghoa (Buddhisme), semuanya terbalut dalam warisan kuliner cuka pedas asamnya (Pempek).",
      citationIds: ["sms-ref-bps", "sms-ref-sriwijaya"],
    }
  ],
  quickFacts: [
    { id: "sms-qf-01", label: "Ibu Kota", value: "Palembang", citationIds: ["sms-ref-bps"] },
    { id: "sms-qf-02", label: "Luas Wilayah", value: "91.592,43 km²", citationIds: ["sms-ref-bps"], dataYear: 2024 },
    { id: "sms-qf-03", label: "Populasi", value: "8.657.008 jiwa", citationIds: ["sms-ref-bps"], dataYear: 2023 },
    { id: "sms-qf-04", label: "Ikon Kota", value: "Jembatan Ampera (Sungai Musi)", citationIds: ["sms-ref-bps"] },
    { id: "sms-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["sms-ref-bps"] },
    { id: "sms-qf-06", label: "Gubernur", value: "Agus Fatoni (Pj.)", citationIds: ["sms-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "sms-geo-01",
        content: "Topografi Sumatera Selatan ibarat kanvas yang diwarnai oleh luasnya jaringan sungai ('Batanghari Sembilan') yang mengalir dari pegunungan vulkanik di barat, turun menuju hamparan rawa pasang surut di timur.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "sms-geo-02",
        content: "Ibu kota Palembang nyaris dibagi menjadi dua oleh aliran raksasa Sungai Musi (kawasan Seberang Ulu dan Seberang Ilir). Jauh ke barat daya (wilayah Pagaralam), kontur tanahnya menjulang tinggi dingin membentuk Gunung Dempo yang berselimut kebun teh. Sementara di pesisir pesisir Banyuasin, terbentang hutan bakau dan rawa gambut Taman Nasional Berbak-Sembilang.",
        citationIds: ["sms-ref-sembilang"],
      }
    ],
    referenceIds: ["sms-ref-bps", "sms-ref-sembilang"],
  },

  history: {
    introduction: [
      {
        id: "sms-his-01",
        content: "Kemegahan sejarah Sumatera Selatan tercatat dari penemuan prasasti-prasasti (Kedukan Bukit, Talang Tuwo) yang membuktikan eksistensi imperium maritim terbesar Nusantara.",
        citationIds: ["sms-ref-sriwijaya"],
      }
    ],
    timeline: [
      {
        id: "sms-era-01",
        period: "Abad ke-7 – 13 M",
        title: "Kemaharajaan Sriwijaya",
        description: "Sriwijaya (berpusat di tepian Sungai Musi) bangkit menjadi hegemon maritim penguasa Selat Malaka. Berpaham Buddha Vajrayana, armada laut Sriwijaya mengontrol jalur perdagangan rempah internasional antara Tiongkok dan India, serta menguasai Semenanjung Malaya hingga Thailand selatan.",
        citationIds: ["sms-ref-sriwijaya"],
      },
      {
        id: "sms-era-02",
        period: "1659 – 1823",
        title: "Kesultanan Palembang Darussalam",
        description: "Setelah runtuhnya Sriwijaya dan Majapahit, Palembang bangkit sebagai kesultanan Islam bercorak Melayu-Jawa. Kesultanan ini mengalami perang dahsyat (Perang Palembang) melawan armada Belanda dan Inggris di bawah pimpinan pahlawan nasional Sultan Mahmud Badaruddin II.",
        citationIds: ["sms-ref-sriwijaya"],
      },
      {
        id: "sms-era-03",
        period: "1965",
        title: "Peresmian Jembatan Ampera",
        description: "Jembatan raksasa yang awalnya bernama Jembatan Bung Karno (dibangun menggunakan rampasan perang Jepang) resmi dioperasikan. Bagian tengahnya dulu dapat diangkat untuk lewatnya kapal-kapal besar.",
        citationIds: ["sms-ref-bps"],
      },
      {
        id: "sms-era-04",
        period: "2018",
        title: "LRT Pertama di Indonesia & Asian Games",
        description: "Palembang dan Jakarta sukses menjadi tuan rumah bersama Asian Games 2018. Menyambut acara tersebut, Sumatera Selatan meresmikan moda kereta ringan (LRT) pertama yang beroperasi secara komersial di Indonesia.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    referenceIds: ["sms-ref-sriwijaya", "sms-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "sms-soc-01",
        content: "Banyak penduduk lokal Sumatera Selatan menelusuri garis silsilah perpaduan dari orang asli Sumatera dengan para pendatang awal berdarah Jawa Keraton, Melayu, Arab, dan Tionghoa.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "sms-soc-02",
        content: "Suku Palembang yang mendiami pesisir Musi mewarisi budaya Kesultanan dan kental dengan aksen vokalnya yang melengkung ('Bahaso Pelembang'). Namun di pedalaman (seperti Pagaralam, Lahat, OKU), masyarakat Suku Pasemah (Basemah) dan Suku Komering hidup agraris turun-temurun menjaga tradisi lisan (Guritan) serta menjaga patung megalitik kuno leluhur mereka.",
        citationIds: ["sms-ref-pasemah"],
      }
    ],
    referenceIds: ["sms-ref-bps", "sms-ref-pasemah"],
  },

  culture: {
    introduction: [
      {
        id: "sms-cul-01",
        content: "Nuansa emas kemerahan, kuku penari yang tajam menjuntai, dan kilau benang songket mewarnai puncak ekspresi kebudayaan di Bumi Sriwijaya.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "sms-cul-item-01",
        category: "Tari Persembahan",
        title: "Gending Sriwijaya",
        description: "Tari penyambutan tamu VVIP dengan keagungan paripurna. Para penari mengenakan aksesoris emas leher dan kepala khas ('Aesan Gede') serta kuku jari sambungan (tanggai) emas, diiringi syair Gending Sriwijaya untuk memuliakan tamu.",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-cul-item-02",
        category: "Kriya Tekstil Ratu",
        title: "Kain Songket Palembang",
        description: "Sering dijuluki 'Ratu Segala Kain'. Songket ditenun manual di atas benang sutra atau katun menggunakan selipan benang makau (benang emas murni peninggalan pedagang Tiongkok-Arab). Motif tertuanya adalah 'Lepar Bintang'.",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-cul-item-03",
        category: "Arsitektur Khas",
        title: "Rumah Limas",
        description: "Rumah tradisional Palembang (gambar ini dicetak di pecahan uang kertas Rp10.000). Atapnya berbentuk limas, dan lantai berundak/bertingkat-tingkat di dalamnya ('Kekijing') membagi ruang duduk sesuai tingkat kebangsawanan atau status sosial keluarga.",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-cul-item-04",
        category: "Hiasan Kepala",
        title: "Tanjak Palembang",
        description: "Penutup kepala tradisional khusus pria berbahan songket, dilipat tegak memuncak. Digunakan sebagai lambang wibawa kaum bangsawan atau saat upacara resmi pernikahan.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    referenceIds: ["sms-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "sms-lang-01",
        content: "Bahasa Melayu Palembang sangat menonjol dengan pengubahan akhiran suku kata dasar yang berakhiran vokal 'a' menjadi vokal terbuka 'o'. Bahasa ini berfungsi luas sebagai basantara (lingua franca) di Sumsel.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "sms-voc-01", word: "Payo", meaning: "Ayo / Mari.", citationIds: ["sms-ref-bps"] },
      { id: "sms-voc-02", word: "Cakmano / Makmano", meaning: "Bagaimana / Kayak mana.", citationIds: ["sms-ref-bps"] },
      { id: "sms-voc-03", word: "Wong Kito Galo", meaning: "Orang kita semua (Semboyan pergaulan bahwa kita semua bersaudara di Palembang).", citationIds: ["sms-ref-bps"] },
      { id: "sms-voc-04", word: "Kagek", meaning: "Nanti. (Contoh: Kagek dulu = Nanti dulu).", citationIds: ["sms-ref-bps"] },
    ],
    referenceIds: ["sms-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "sms-culi-01",
        content: "Dapur kuliner Sumatera Selatan merupakan perpaduan teknik memasak Tionghoa (mengolah olahan ikan sungai/ikan tenggiri dan tepung sagu) dengan kuah saus Nusantara, yang melahirkan mahakarya bernama 'Cuko'.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "sms-culi-item-01",
        title: "Pempek & Cuko",
        description: "Ikon Sumsel. Adonan ikan tenggiri/gabus yang diadon dengan tepung tapioka sagu aren, dibentuk berbagai rupa (kapal selam isi telur, lenjer, adaan) dan digoreng garing. Wajib di-'hirup' dengan kuah Cuko (cuka hitam pekat dari campuran air asam jawa, cabai rawit, bawang putih, dan gula batok murni).",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-culi-item-02",
        title: "Pindang Ikan Patin",
        description: "Sup kuah encer ikan air tawar (patin sungai Musi) berpadu kaldu berwarna kekuningan. Rasa segar mencolok berasal dari potongan nanas, tomat, asam jawa, irisan cabai, dan daun kemangi.",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-culi-item-03",
        title: "Tekwan & Model",
        description: "Sup bakso ikan khas Palembang (adonan mirip pempek, namun direbus, bukan digoreng). Kuah kaldunya bening gurih berasal dari sari udang (ebi), disajikan lengkap dengan jamur kuping, bengkuang iris, dan bunga sedap malam.",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-culi-item-04",
        title: "Mie Celor",
        description: "Mie telur basah (mirip udon) ukuran besar yang disiram kaldu kental krimer (atau santan) sarat ebi dan udang galah sungai, dilengkapi telur rebus potong.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    referenceIds: ["sms-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "sms-bio-01",
        content: "Rawa gambut Sembilang adalah salah satu ekosistem paling krusial di bumi untuk transit burung migran belahan utara (Siberia/Australia).",
        citationIds: ["sms-ref-sembilang"],
      }
    ],
    species: [
      {
        id: "sms-bio-item-01",
        category: "Fauna Rawa/Migran",
        title: "Burung Trinil (Siberian Migratory Birds)",
        description: "Jutaan ekor burung lintas benua (dari Siberia Rusia) singgah setiap Oktober-Desember di hamparan lumpur pesisir Taman Nasional Sembilang (Banyuasin) untuk mencari kehangatan dan makanan.",
        citationIds: ["sms-ref-sembilang"],
      },
      {
        id: "sms-bio-item-02",
        category: "Fauna Ikonik (Kini Terancam)",
        title: "Ikan Belida (Chitala lopis)",
        description: "Ikan air tawar sungai Musi berwajah unik dengan punggung melengkung ('pisau terbang'). Dulu merupakan bahan baku utama kerupuk kemplang dan pempek premium kelas atas, kini sangat langka dan menjadi satwa dilindungi.",
        citationIds: ["sms-ref-bps"],
      },
      {
        id: "sms-bio-item-03",
        category: "Flora Maskot",
        title: "Duku (Lansium parasiticum)",
        description: "Duku dari kawasan Komering (Duku Palembang) dinobatkan sebagai varietas duku terbaik dan termanis di Indonesia, yang berbuah lebat setahun sekali dengan panen raya membanjiri kota.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    referenceIds: ["sms-ref-sembilang", "sms-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "sms-dest-01",
        content: "Destinasi andalan Sumatera Selatan berpusat pada wisata perahu (River Cruise) menyusuri peninggalan Kesultanan di sepanjang tepian Sungai Musi.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    items: [
      {
        id: "sms-dest-item-01",
        category: "Ikon Kota",
        title: "Jembatan Ampera & Benteng Kuto Besak",
        description: "Berjalan santai atau menaiki perahu ('Ketek') di waktu senja. Benteng Kuto Besak (BKB) di pelataran ampera adalah pusat kuliner dan taman rakyat, menghadap langsung gemerlap cahaya jembatan Ampera di malam hari.",
        citationIds: ["sms-ref-bps"],
      },
      {
        id: "sms-dest-item-02",
        category: "Sejarah Religi (Tionghoa-Melayu)",
        title: "Pulau Kemaro",
        description: "Delta (pulau) berpasir di hilir Sungai Musi yang dihiasi Pagoda 9 tingkat khas Tiongkok. Tempat perayaan Cap Go Meh terbesar, konon muncul dari legenda cinta tragis.",
        citationIds: ["sms-ref-bps"],
      },
      {
        id: "sms-dest-item-03",
        category: "Sejarah Buddha purba",
        title: "Taman Purbakala Kerajaan Sriwijaya",
        description: "Situs ekskavasi prasasti/kanal kuno di Karanganyar, Palembang. Wisatawan bisa menapaktilasi tempat penemuan artefak kebesaran maritim abad ke-7 yang dahulu mengatur laju perdagangan Asia.",
        citationIds: ["sms-ref-sriwijaya"],
      },
      {
        id: "sms-dest-item-04",
        category: "Alam (Megalitikum)",
        title: "Gunung Dempo & Megalitik Pasemah",
        description: "Menjauh 7 jam ke barat daya (Pagaralam), wisatawan dapat menikmati kebun teh kaki gunung Dempo nan sejuk, sembari mencari puluhan batu arca (patung manusia/gajah purba) peninggalan zaman prasejarah megalitikum yang berserakan di tengah sawah warga.",
        citationIds: ["sms-ref-pasemah"],
      }
    ],
    referenceIds: ["sms-ref-bps", "sms-ref-sriwijaya", "sms-ref-pasemah"],
  },

  stories: {
    introduction: [
      {
        id: "sms-story-01",
        content: "Mitos masyarakat Sriwijaya dihiasi dengan kesaktian sihir (sumpah) dan tragedi percintaan beda etnis yang karam di dasar sungai Musi.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "sms-story-item-01",
        title: "Tragedi Cinta Pulau Kemaro",
        description: "Kisah Siti Fatimah (putri raja Palembang) dan Tan Bun An (Pangeran Tiongkok). Karena salah sangka mengira guci hadiah dari orangtuanya hanya berisi sawi busuk (padahal emas tertimbun di bawahnya), sang Pangeran membuang guci ke sungai. Menyadari kesalahannya, ia menerjunkan diri ke sungai. Sang istri (Fatimah) ikut terjun, dan tempat karam mereka akhirnya timbul ke permukaan menjadi 'Pulau Kemaro' (Pulau Kemarau—karena tak pernah tenggelam pasang).",
        citationIds: ["sms-ref-wbtb"],
      },
      {
        id: "sms-story-item-02",
        title: "Serunting Sakti (Si Pahit Lidah)",
        description: "Legenda pendekar dari Sumatera Bagian Selatan yang memiliki kutukan sumpah di lidahnya. Jika ia merutuki atau menyumpahi manusia/hewan, objek tersebut secara gaib akan menjadi batu. Kutukannya diyakini sebagai penjelas ribuan batu berukir patung yang tersebar di Pasemah.",
        citationIds: ["sms-ref-pasemah"],
      }
    ],
    referenceIds: ["sms-ref-wbtb", "sms-ref-pasemah"],
  },

  contemporary: {
    introduction: [
      {
        id: "sms-cont-01",
        content: "Ibu kota Palembang berkembang agresif, menjadi pionir infrastruktur kota kedua berskala internasional di luar Jakarta.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    economy: [
      {
        id: "sms-cont-02",
        content: "Secara ekonomi, tulang punggung Sumatera Selatan berada di Kabupaten Muara Enim (Tanjung Enim) dengan eksploitasi dan ekspor batubara (PT Bukit Asam). Selain energi (kilang minyak Plaju Pertamina), perkebunan karet (getah) menopang perekonomian pedesaan.",
        citationIds: ["sms-ref-bps"],
      }
    ],
    referenceIds: ["sms-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "sms-travel-01",
        content: "Budaya ngemil/jajan di Palembang bisa dibilang ekstrem: pempek dihidangkan tidak hanya sore hari, melainkan juga dinikmati hangat-hangat sebagai menu sarapan.",
        citationIds: ["sms-ref-wbtb"],
      }
    ],
    etiquette: [
      {
        id: "sms-travel-02",
        content: "Menghirup cuko (meminum cairan cuka murni dari mangkok kecil) setelah mengunyah pempek adalah apresiasi tertinggi ('wajib ain') atas budaya lokal dan dianggap tidak merusak lambung. Saat berwisata ke tepian Musi, tetap awasi barang berharga. Memasuki area kawasan Keraton Kuto Besak, Anda dianjurkan berpakaian rapi dan bersikap sopan selayaknya berkunjung ke keraton Melayu lainnya.",
        citationIds: ["sms-ref-wbtb", "sms-ref-bps"],
      }
    ],
    referenceIds: ["sms-ref-wbtb", "sms-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:11:00Z",
  contentStatus: "draft",
  referenceIds: [
    "sms-ref-bps",
    "sms-ref-wbtb",
    "sms-ref-sriwijaya",
    "sms-ref-pasemah",
    "sms-ref-sembilang"
  ]
};
