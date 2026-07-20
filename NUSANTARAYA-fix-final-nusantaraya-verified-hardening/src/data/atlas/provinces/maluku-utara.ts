import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const malukuUtaraReferences: ScientificReference[] = [
  {
    id: "mlu-ref-bps",
    title: "Provinsi Maluku Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Maluku Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Maluku Utara",
    url: "https://malut.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku-utara"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "mlu-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Maluku Utara",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku-utara"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "mlu-ref-ternate",
    title: "The World of Maluku: Eastern Indonesia in the Early Modern Period",
    authors: ["Andaya, Leonard Y."],
    year: 1993,
    publisher: "University of Hawaii Press",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Ternate",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["maluku-utara"],
    topicIds: ["history", "society"],
  },
  {
    id: "mlu-ref-wallace",
    title: "The Malay Archipelago (Ternate Essay)",
    authors: ["Wallace, Alfred Russel"],
    year: 1869,
    publisher: "Macmillan",
    url: "https://en.wikipedia.org/wiki/The_Malay_Archipelago",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["maluku-utara"],
    topicIds: ["biodiversity", "stories"],
  },
  {
    id: "mlu-ref-morotai",
    title: "Morotai: The US Army in WWII Pacific",
    authors: ["Smith, Robert Ross"],
    year: 1953,
    publisher: "US Army Center of Military History",
    url: "https://en.wikipedia.org/wiki/Battle_of_Morotai",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["maluku-utara"],
    topicIds: ["history", "destinations"],
  }
];

export const malukuUtaraAtlas: ProvinceAtlas = {
  provinceId: "maluku-utara",
  slug: "maluku-utara",
  title: "Maluku Utara",
  tagline: "Moloku Kie Raha, Takhta Empat Gunung dan Tanah Cengkeh Purba",
  summary: [
    {
      id: "mlu-sum-01",
      content: "Maluku Utara (Malut) adalah mandala kekuasaan 'Moloku Kie Raha' (Kesultanan Ternate, Tidore, Bacan, dan Jailolo) yang wibawanya pada abad ke-16 merajai seluruh wilayah Indonesia Timur hingga Papua dan Mindanao. Pulau-pulau vulkanik kecilnya yang dikelilingi lautan adalah pusat asal mula pohon Cengkeh di dunia, yang memancing armada Spanyol dan Portugis bertempur di perairannya. Di daratan raksasa Halmahera, tersimpan hutan perawan rumah burung bidadari Alfred Russel Wallace. Hari ini, Maluku Utara meroket bukan karena cengkeh, melainkan tambang raksasa Nikel yang menyala siang dan malam menerangi langit Halmahera.",
      citationIds: ["mlu-ref-bps", "mlu-ref-ternate", "mlu-ref-wallace"],
    }
  ],
  quickFacts: [
    { id: "mlu-qf-01", label: "Ibu Kota", value: "Sofifi (Halmahera)", citationIds: ["mlu-ref-bps"] },
    { id: "mlu-qf-02", label: "Luas Wilayah Daratan", value: "31.982,50 km²", citationIds: ["mlu-ref-bps"], dataYear: 2024 },
    { id: "mlu-qf-03", label: "Populasi", value: "1.336.216 jiwa", citationIds: ["mlu-ref-bps"], dataYear: 2023 },
    { id: "mlu-qf-04", label: "Gunung Berapi Aktif", value: "Gamalama (Ternate), Kie Matubu (Tidore)", citationIds: ["mlu-ref-bps"] },
    { id: "mlu-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["mlu-ref-bps"] },
    { id: "mlu-qf-06", label: "Gubernur", value: "Samsuddin A. Kadir (Pj.)", citationIds: ["mlu-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "mlu-geo-01",
        content: "Bentuk geografi Malut dipusatkan pada pulau Halmahera yang berwujud huruf K (mirip miniatur Sulawesi), dikelilingi kerucut vulkanik kembar Ternate dan Tidore di sisi baratnya.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "mlu-geo-02",
        content: "Lanskap Malut sangat dinamis; Ternate dan Tidore hanyalah puncak gunung api strato (Gamalama & Kie Matubu) yang mencuat vertikal ke atas laut, tanpa memiliki sungai darat sama sekali. Pulau raksasa Halmahera di sebelahnya memanjang berupa hutan hujan perbukitan kars yang mengandung miliaran ton bijih besi dan nikel laterit. Di ujung utara, kepulauan Morotai membentang dengan hamparan pantai karang atol (pasir putih timbul) sisa puing-puing Perang Dunia II.",
        citationIds: ["mlu-ref-bps", "mlu-ref-morotai"],
      }
    ],
    referenceIds: ["mlu-ref-bps", "mlu-ref-morotai"],
  },

  history: {
    introduction: [
      {
        id: "mlu-his-01",
        content: "Ini adalah tanah di mana dua kerajaan Nusantara membelah dunia, beraliansi dengan Portugis dan Spanyol untuk berebut monopoli Cengkeh.",
        citationIds: ["mlu-ref-ternate"],
      }
    ],
    timeline: [
      {
        id: "mlu-era-01",
        period: "1512 – 1521",
        title: "Kedatangan Portugis (Ternate) & Spanyol (Tidore)",
        description: "Portugis membangun benteng (Kastela/Kalamata) dengan izin Sultan Ternate, sementara armada Magelhaens-Elcano (Spanyol) mendarat di Tidore beraliansi dengan Sultan Tidore. Perseteruan dua kerajaan lokal ini menjadi representasi benturan hegemoni Spanyol-Portugis (Perjanjian Tordesillas) di ujung dunia.",
        citationIds: ["mlu-ref-ternate"],
      },
      {
        id: "mlu-era-02",
        period: "1570 – 1575",
        title: "Perang Pengusiran Portugis",
        description: "Sultan Baabullah dari Ternate marah besar atas pembunuhan ayahnya (Sultan Hairun) oleh Portugis secara licik. Ia memimpin perang jihad maritim selama 5 tahun yang berhasil menaklukkan benteng-benteng Portugis, mengusir mereka selamanya ke Timor/Makau, dan membawa Ternate pada puncak keemasan (menguasai 72 pulau berpenghuni).",
        citationIds: ["mlu-ref-ternate"],
      },
      {
        id: "mlu-era-03",
        period: "1944 – 1945",
        title: "Pangkalan Militer Mac Arthur (Morotai)",
        description: "Jenderal Douglas MacArthur (Sekutu/AS) merebut Pulau Morotai dari Jepang dan menyulapnya secara instan menjadi pangkalan udara/laut militer terpenting di Pasifik. Dari sinilah (dengan 60.000 pasukan), Sekutu merencanakan penyerangan terakhir membebaskan Filipina dan membom Jepang.",
        citationIds: ["mlu-ref-morotai"],
      },
      {
        id: "mlu-era-04",
        period: "1999",
        title: "Pembentukan Provinsi Maluku Utara",
        description: "Resmi dimekarkan dari Provinsi Maluku di tengah kecamuk konflik horizontal 1999. Awalnya Ternate dijadikan ibu kota sementara, hingga dipindahkan sepenuhnya ke daratan Sofifi (Halmahera) pada 2010.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    referenceIds: ["mlu-ref-ternate", "mlu-ref-morotai", "mlu-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "mlu-soc-01",
        content: "Identitas Malut ditegakkan oleh panji kebesaran Kesultanan Islam, yang merengkuh persaudaraan dengan ras Melanesia pegunungan.",
        citationIds: ["mlu-ref-ternate"],
      }
    ],
    socialStructure: [
      {
        id: "mlu-soc-02",
        content: "Empat kesultanan (Ternate, Tidore, Bacan, Jailolo) merepresentasikan kebudayaan keraton Islam beraksen Melayu timur. Suku Ternate dan Tidore mendominasi urusan sosial birokrasi, dibalut tradisi 'Bala' (Rakyat Kesultanan) yang kental di mana kharisma (Jou/Sultan) masih sangat dihormati melebihi pimpinan daerah negara. Sementara di pedalaman lebat Halmahera (Weda/Maba), berdiam Suku Togutil (Suku O Hongana Manyawa)—masyarakat adat nomaden nomaden terasing yang menolak peradaban dan hidup murni dari meramu hasil hutan dan berburu.",
        citationIds: ["mlu-ref-ternate", "mlu-ref-bps"],
      }
    ],
    referenceIds: ["mlu-ref-ternate", "mlu-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "mlu-cul-01",
        content: "Seni Maluku Utara adalah rekaman memori kegigihan bala tentara membebaskan raja dari pengkhianatan kolonialis.",
        citationIds: ["mlu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mlu-cul-item-01",
        category: "Tari Perang Patriotik",
        title: "Tari Soya-Soya",
        description: "Tarian maskulin heroik pria Ternate. Diciptakan dari kisah nyata penyerbuan prajurit Sultan Baabullah untuk mengambil (menyelamatkan) jenazah Sultan Hairun dari benteng Portugis Nostra Senhora del Rosario (Kastela) pada abad ke-16. Penari membawa perisai (salawaku) dan pedang kayu tajam, menari dengan mimik wajah emosional.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-cul-item-02",
        category: "Festival Ulang Tahun Raja",
        title: "Legu Gam",
        description: "Pesta rakyat massal terbesar Kesultanan Ternate untuk merayakan hari kelahiran Sultan Ternate. Diisi dengan tarian adat di keraton, penobatan gelar adat, dan pameran kriya di bawah rindangnya alun-alun kedaton.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-cul-item-03",
        category: "Tradisi Syukuran Keraton",
        title: "Kololi Kie",
        description: "Tradisi adat laut Ternate, di mana rombongan kesultanan mengitari (mengelilingi) Pulau Ternate (Gunung Gamalama) dari laut menggunakan perahu hias militer purba (Kora-kora) untuk mendoakan keselamatan gunung dari marabahaya erupsi.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-cul-item-04",
        category: "Alat Transportasi Perang",
        title: "Perahu Kora-kora",
        description: "Perahu layar kuno berbadan sangat ramping namun bertenaga dayung ratusan pria yang digunakan Sultan Ternate/Tidore untuk mengawasi pulau-pulau rempah, sering dihiasi patung naga atau ukiran kayu seram di ujung haluannya.",
        citationIds: ["mlu-ref-ternate"],
      }
    ],
    referenceIds: ["mlu-ref-wbtb", "mlu-ref-ternate"],
  },

  language: {
    introduction: [
      {
        id: "mlu-lang-01",
        content: "Berbeda dengan Ambon, Melayu Ternate dan Tidore terasa lebih kaku, ritmis, dipengaruhi oleh kosakata istana dan rumpun bahasa Halmahera Utara (Non-Austronesia).",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "mlu-voc-01", word: "Jou / Jou Lamo", meaning: "Tuhan / Paduka Yang Mulia (Sultan).", citationIds: ["mlu-ref-ternate"] },
      { id: "mlu-voc-02", word: "Tara No Ate", meaning: "Turun dan peluklah (Cikal bakal asal kata nama kota Ternate).", citationIds: ["mlu-ref-wbtb"] },
      { id: "mlu-voc-03", word: "Gomutu / Guraka", meaning: "Kopi / Jahe (Bahasa Ternate).", citationIds: ["mlu-ref-wbtb"] },
      { id: "mlu-voc-04", word: "Fufu", meaning: "Asap/Pengasapan (Pisang goreng fufu = Pisang goreng batu/asap).", citationIds: ["mlu-ref-bps"] },
    ],
    referenceIds: ["mlu-ref-bps", "mlu-ref-ternate", "mlu-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "mlu-culi-01",
        content: "Dapur Ternate dipenuhi aroma cengkeh purba, kacang kenari panggang, rempah pala basah, dan daging ikan tuna segar yang diiris tipis.",
        citationIds: ["mlu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mlu-culi-item-01",
        title: "Gohu Ikan (Sashimi Ternate)",
        description: "Mahakarya pesisir berupa ikan tuna atau cakalang segar yang dipotong dadu (tidak dimasak dengan api), lalu dilumuri garam kasar, perasan jeruk lemon cui/kalamansi, ditaburi tumisan kasar rajangan bawang merah dan daun kemangi dengan baluran minyak kelapa murni panas.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-culi-item-02",
        title: "Pisang Mulu Bebe (Pisang Mulut Bebek)",
        description: "Pisang khas Halmahera yang bentuknya pipih melengkung (seperti paruh bebek). Digoreng tipis garing (mirip keripik renyah) dan disantap dengan cocolan sambal dabu-dabu roa serta ikan teri. Pendamping wajib sore hari rakyat Ternate.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-culi-item-03",
        title: "Air Guraka",
        description: "Minuman penghangat perut di kawasan tapal kuda Gunung Gamalama. Berupa rebusan jahe merah parut pekat, dicampur gula aren padat, dan diberi taburan serutan kasar kacang kenari. Minuman tongkrongan malam hari (cafe) terfavorit muda-mudi.",
        citationIds: ["mlu-ref-wbtb"],
      },
      {
        id: "mlu-culi-item-04",
        title: "Pupeda & Kuah Soro",
        description: "Papeda Maluku Utara (Beda dari Ambon yang bening/santan kuah kuning). Di Ternate, papeda disajikan dengan sayur kuah Soro (sayur bunga pepaya pahit/daun gedi) dan siraman ikan fufu (asap) masak bening.",
        citationIds: ["mlu-ref-wbtb"],
      }
    ],
    referenceIds: ["mlu-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "mlu-bio-01",
        content: "Hutan hujan pulau Halmahera menyembunyikan kepakan sayap burung surga berwarna zamrud yang memukau teori evolusi barat.",
        citationIds: ["mlu-ref-wallace"],
      }
    ],
    species: [
      {
        id: "mlu-bio-item-01",
        category: "Avifauna Penemu Teori Wallace",
        title: "Burung Bidadari Halmahera (Semioptera wallacii)",
        description: "Spesies 'Bird of Paradise' (Cendrawasih) unik bertubuh cokelat dengan 'bulu standar' putih panjang menjuntai di bahunya bak sayap peri bidadari. Spesies ini diteliti dengan takjub oleh Alfred Russel Wallace saat bermukim di Ternate (1858).",
        citationIds: ["mlu-ref-wallace"],
      },
      {
        id: "mlu-bio-item-02",
        category: "Flora Rempah Tertua Dunia",
        title: "Cengkeh Afo (Afo Clove Tree)",
        description: "Pohon cengkeh setinggi 30 meter di lereng Gamalama, yang diyakini (terdokumentasi sejak era VOC) berusia lebih dari 400 tahun. Inilah 'Ibu' (pohon indukan genetik) dari seluruh pohon cengkeh yang ditanam secara global di dunia masa kini (bibitnya dicuri Prancis untuk disebar di Madagaskar/Afrika).",
        citationIds: ["mlu-ref-ternate"],
      }
    ],
    referenceIds: ["mlu-ref-wallace", "mlu-ref-ternate"],
  },

  destinations: {
    introduction: [
      {
        id: "mlu-dest-01",
        content: "Berwisata di Malut adalah pelayaran melintasi pulau-pulau kecil kerucut dan menjajaki dinding tebal benteng benteng angker bangsa Eropa.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    items: [
      {
        id: "mlu-dest-item-01",
        category: "Sejarah Perang Dunia 2 (PD II)",
        title: "Pulau Morotai & Dodola",
        description: "Morotai adalah magnet sejarah dengan 'Museum Perang Dunia II' yang memajang artefak senjata, kendaraan militer lapis baja berkarat sisa tentara Amerika Serikat. Tak jauh dari pulau ini, terdapat Pulau Dodola yang fenomenal (dua pulau terhubung oleh jembatan pasir putih alami yang hanya muncul saat laut surut).",
        citationIds: ["mlu-ref-morotai"],
      },
      {
        id: "mlu-dest-item-02",
        category: "Keraton & Benteng Benteng Laut (Ternate)",
        title: "Kedaton Kesultanan & Benteng Tolukko",
        description: "Ikon arsitektur kerajaan Ternate berbentuk oktagonal bergaya singa duduk menghadap laut. Wisatawan bisa mengelilingi Ternate menyusuri jejak deretan benteng-benteng pertahanan Portugis, Spanyol, dan Belanda (Tolukko, Kastela, Oranje, Kalamata).",
        citationIds: ["mlu-ref-ternate"],
      },
      {
        id: "mlu-dest-item-03",
        category: "Danau Kawah Hijau Misterius",
        title: "Danau Tolire Besar & Kecil",
        description: "Danau kawah (maar) berwarna hijau gelap yang menyerupai mangkuk raksasa curam di bawah kaki Gunung Gamalama. Dipercaya dihuni buaya putih mistis. Wisatawan sering melakukan uji mitos (melempar batu sekuat tenaga ke danau, dan diyakini tidak akan pernah menyentuh permukaan air karena angin anomali kawah).",
        citationIds: ["mlu-ref-bps"],
      },
      {
        id: "mlu-dest-item-04",
        category: "Landmark Vulkanik Kembar (Mata Uang Seribu)",
        title: "Pulau Maitara & Tidore",
        description: "Titik (viewpoint) di Ngade (Ternate) di mana kita bisa melihat siluet Pulau Maitara yang kecil hijau bulat diapit Pulau Tidore yang menjulang tinggi, persis dengan lukisan legendaris di belakang uang kertas lembaran seribu rupiah emisi lawas.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    referenceIds: ["mlu-ref-bps", "mlu-ref-morotai", "mlu-ref-ternate"],
  },

  stories: {
    introduction: [
      {
        id: "mlu-story-01",
        content: "Sebuah surat pendek ('Letter from Ternate') yang ditulis dalam balutan demam malaria di kaki gunung Gamalama, mengubah sains biologi Barat selamanya.",
        citationIds: ["mlu-ref-wallace"],
      }
    ],
    stories: [
      {
        id: "mlu-story-item-01",
        title: "Wallace dan The Letter from Ternate",
        description: "Pada Februari 1858, Alfred Russel Wallace yang menetap di Ternate terserang malaria parah. Dalam racauan demam, ia mendapat ilham bahwa 'hanya yang kuat yang akan bertahan' di alam. Ia menuliskan pemikirannya menjadi makalah ringkas (Ternate Essay) lalu mengirimkannya lewat kapal pos ke Charles Darwin di Inggris. Makalah inilah yang kemudian memaksa Darwin segera merampungkan teori 'On the Origin of Species'-nya agar tak didahului.",
        citationIds: ["mlu-ref-wallace"],
      },
      {
        id: "mlu-story-item-02",
        title: "Legenda Kutukan Danau Tolire",
        description: "Mitos lisan yang menyebutkan bahwa danau raksasa Tolire Besar dulunya adalah sebuah desa makmur. Desa tersebut dikutuk Tuhan amblas menjadi kawah danau setelah terjadi skandal inses (hubungan sedarah) terlarang antara pemimpin desa dengan putrinya sendiri. Harta karun mereka konon dijaga siluman buaya putih.",
        citationIds: ["mlu-ref-wbtb"],
      }
    ],
    referenceIds: ["mlu-ref-wallace", "mlu-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "mlu-cont-01",
        content: "Dari daerah penyumbang rempah dunia di masa lalu, Maluku Utara kini menjadi mesin pengeruk energi transisi tersibuk, mendongkrak pertumbuhan ekonomi tertinggi di dunia (tahun 2022-2023).",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    economy: [
      {
        id: "mlu-cont-02",
        content: "Berdirinya 'Weda Bay Industrial Park' (IWIP) di Halmahera Tengah dan 'Harita Nickel' di Pulau Obi mengubah drastis ekologi ekonomi Malut. Kawasan smelter raksasa (Peleburan Nikel baterai mobil listrik/EV) menyedot puluhan ribu pekerja Tiongkok dan lokal, mencatatkan pertumbuhan ekonomi provinsi Malut hingga menyentuh 22-26%—angka ekstrem yang tertinggi di Indonesia bahkan Asia pada puncaknya. Pemindahan ibukota pemerintahan ke Sofifi adalah upaya untuk menyeimbangkan sesaknya pembangunan Kota Ternate.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    referenceIds: ["mlu-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "mlu-travel-01",
        content: "Datanglah ke Ternate untuk wisata sejarah kesultanan dan rempah yang magis, dan menyeberanglah ke Halmahera jika Anda siap melihat pergeseran ekstrem geologis industri.",
        citationIds: ["mlu-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "mlu-travel-02",
        content: "Berpakaianlah sopan/tertutup layaknya berwisata di wilayah mayoritas Islam yang taat saat berkunjung ke keraton Kedaton Kesultanan atau berbaur di pasar rempah Bastiong (Ternate/Tidore). Dilarang keras memakai celana pendek/hotpants jika diundang masuk ke istana sultan. Saat melempar batu di Danau Tolire, hindari melempar sambil berkata kotor/menantang arwah karena banyak penduduk yang masih sangat meyakini klenik penjaga danau (buaya kramat) tersebut.",
        citationIds: ["mlu-ref-wbtb", "mlu-ref-ternate"],
      }
    ],
    referenceIds: ["mlu-ref-bps", "mlu-ref-wbtb", "mlu-ref-ternate"],
  },

  lastReviewedAt: "2026-07-13T00:47:00Z",
  contentStatus: "draft",
  referenceIds: [
    "mlu-ref-bps",
    "mlu-ref-wbtb",
    "mlu-ref-ternate",
    "mlu-ref-wallace",
    "mlu-ref-morotai"
  ]
};
