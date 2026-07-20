import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaReferences: ScientificReference[] = [
  {
    id: "pap-ref-bps",
    title: "Provinsi Papua Dalam Angka 2024",
    authors: ["BPS Provinsi Papua"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua",
    url: "https://papua.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "pap-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "pap-ref-biak",
    title: "The Biak-Numfor: Seafarers of Papua",
    authors: ["Kamma, Freerk C."],
    year: 1972,
    publisher: "Martinus Nijhoff",
    url: "https://id.wikipedia.org/wiki/Suku_Biak",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["papua"],
    topicIds: ["history", "society", "stories"],
  },
  {
    id: "pap-ref-sentani",
    title: "Art and Culture of Lake Sentani",
    authors: ["Greub, Suzanne"],
    year: 1992,
    publisher: "Tribal Art Centre",
    url: "https://en.wikipedia.org/wiki/Lake_Sentani",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["papua"],
    topicIds: ["society", "culture", "destinations"],
  },
  {
    id: "pap-ref-macarthur",
    title: "MacArthur's New Guinea Campaign",
    authors: ["Taaffe, Stephen R."],
    year: 1998,
    publisher: "University Press of Kansas",
    url: "https://en.wikipedia.org/wiki/Battle_of_Hollandia",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua"],
    topicIds: ["history", "destinations"],
  }
];

export const papuaAtlas: ProvinceAtlas = {
  provinceId: "papua",
  slug: "papua",
  title: "Papua",
  tagline: "Karya Agung Tabi-Saireri, Matahari Terbit di Teluk Hollandia",
  summary: [
    {
      id: "pap-sum-01",
      content: "Pasca-pemekaran mega-wilayah (2022), Provinsi Papua kini berfokus mengelola permata utara (Wilayah Adat Tabi dan Saireri). Berpusat di Kota Jayapura (dulunya bernama Hollandia—markas komando raksasa Jenderal MacArthur pada PD II), alamnya didominasi oleh perairan pasifik pesisir, Danau Sentani yang sakral, serta gugusan pulau atol pualam Biak-Numfor (Saireri). Menjadi tapal batas terdepan (titik nol) Republik Indonesia di ufuk timur yang berbatasan langsung dengan daratan Papua Nugini (PNG), masyarakat pesisir Papua berdansa ritmis Yospan menyambut sinar matahari pagi pertama nusantara menyinari hutan mereka.",
      citationIds: ["pap-ref-bps", "pap-ref-macarthur"],
    }
  ],
  quickFacts: [
    { id: "pap-qf-01", label: "Ibu Kota", value: "Kota Jayapura", citationIds: ["pap-ref-bps"] },
    { id: "pap-qf-02", label: "Luas Wilayah", value: "81.049,30 km²", citationIds: ["pap-ref-bps"], dataYear: 2024 },
    { id: "pap-qf-03", label: "Populasi", value: "1.042.846 jiwa", citationIds: ["pap-ref-bps"], dataYear: 2023 },
    { id: "pap-qf-04", label: "Wilayah Adat", value: "Tabi & Saireri", citationIds: ["pap-ref-bps"] },
    { id: "pap-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["pap-ref-bps"] },
    { id: "pap-qf-06", label: "Gubernur", value: "Ridwan Rumasukun (Pj.)", citationIds: ["pap-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "pap-geo-01",
        content: "Dataran utara papua ditekuk oleh pegunungan Cyclops yang menghadap ke luasnya samudera biru Pasifik Utara, dengan gugusan kepulauan Biak di utaranya.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "pap-geo-02",
        content: "Geografi Provinsi Papua (induk) terbelah menjadi dua wajah: dataran darat (Tabi) dan kepulauan Teluk Cenderawasih (Saireri). Di dataran tinggi Tabi, pegunungan cagar alam Cyclops (Dafonsoro) bertindak sebagai dinding raksasa yang membendung air tawar Danau Sentani di bawahnya sebelum jatuh ke pantai pesisir utara Jayapura dan Sarmi. Jauh di utara seberang laut (Saireri), pulau karang koral putih Biak, Supiori, dan pulau rawa mangrove Yapen menantang langsung ganasnya ombak khatulistiwa Samudera Pasifik.",
        citationIds: ["pap-ref-bps", "pap-ref-sentani"],
      }
    ],
    referenceIds: ["pap-ref-bps", "pap-ref-sentani"],
  },

  history: {
    introduction: [
      {
        id: "pap-his-01",
        content: "Jayapura tidak hanya dikenal sebagai ibu kota timur, tetapi saksi bisu amukan bom B-29 Sekutu dan titik tumpu operasi pembebasan pembebasan Filipina.",
        citationIds: ["pap-ref-macarthur"],
      }
    ],
    timeline: [
      {
        id: "pap-era-01",
        period: "Abad ke-15 – 16",
        title: "Peradaban Maritim Biak & Mitos Koreri",
        description: "Suku Biak adalah pelaut ulung (Viking-nya Papua) yang telah melakukan pelayaran jauh sebelum Eropa datang. Mitos 'Koreri' (kedatangan Ratu Adil/Messiah) membakar semangat perlawanan mereka (Gerakan Manseren Koreri) menentang ekspansi Kesultanan Tidore maupun Belanda di awal abad 20.",
        citationIds: ["pap-ref-biak"],
      },
      {
        id: "pap-era-02",
        period: "April 1944",
        title: "Invasion of Hollandia (PD II)",
        description: "Pasukan Amerika pimpinan MacArthur mendarat di Jayapura (Hollandia) dan menyulap Danau Sentani menjadi landasan pesawat amfibi militer sekutu terbesar di Pasifik (mengusir garnisun Jepang pimpinan Jenderal Hatazo Adachi).",
        citationIds: ["pap-ref-macarthur"],
      },
      {
        id: "pap-era-03",
        period: "1 Mei 1963",
        title: "Integrasi Irian Barat",
        description: "Berdasarkan Perjanjian New York dan tekanan internasional (UNTEA), bendera PBB diturunkan di Holandia dan digantikan Merah Putih, menandai kembalinya Papua ke dalam NKRI (yang lalu diperkuat Pepera 1969).",
        citationIds: ["pap-ref-bps"],
      },
      {
        id: "pap-era-04",
        period: "2022",
        title: "Pemekaran Otonomi Baru (DOB)",
        description: "Undang-Undang membagi Provinsi Papua menjadi empat (Papua Induk, Pegunungan, Tengah, Selatan). Papua Induk kini difokuskan pada penguatan koridor perbatasan utara (Tabi-Saireri) dan pusat ekonomi perbatasan RI-PNG.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    referenceIds: ["pap-ref-biak", "pap-ref-macarthur", "pap-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "pap-soc-01",
        content: "Masyarakat Tabi-Saireri dibesarkan di atas kano-kano panjang pinggir danau dan jaring nelayan, berbeda 180 derajat dari saudara mereka di pegunungan.",
        citationIds: ["pap-ref-sentani"],
      }
    ],
    socialStructure: [
      {
        id: "pap-soc-02",
        content: "Wilayah Adat Tabi (Jayapura, Keerom, Sarmi, Mamberamo) dihuni etnis pesisir seperti Suku Sentani yang mahir mengukir kayu dan mendirikan rumah di atas air (Kampung Yoboi). Sementara Wilayah Adat Saireri (Biak, Supiori, Yapen, Waropen) didominasi oleh Suku Biak yang tangguh, keras mengarungi lautan malam bermodal rasi bintang. Masyarakat Papua utara memeluk agama Kristen Protestan dan Katolik. Berkat status ibukota Jayapura, masyarakat aslinya sangat cair berakulturasi berbaur dengan transmigran Bugis-Makassar dan Jawa.",
        citationIds: ["pap-ref-bps", "pap-ref-biak", "pap-ref-sentani"],
      }
    ],
    referenceIds: ["pap-ref-bps", "pap-ref-biak", "pap-ref-sentani"],
  },

  culture: {
    introduction: [
      {
        id: "pap-cul-01",
        content: "Ritmik hentakan kaki dari Tabi-Saireri sangat energik, menertawakan kerasnya badai pasifik dengan ukiran seni perahu memanjang.",
        citationIds: ["pap-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pap-cul-item-01",
        category: "Tarian Hentak Massal",
        title: "Tari Yospan (Yosim Pancar)",
        description: "Tarian pergaulan kontemporer paling populer di seantero Papua yang lahir dari percampuran budaya Biak dan Serui. Sangat dinamis (mirip poco-poco/samba). Ditarikan secara berpasangan dengan hentakan kaki yang memantul ceria mengikuti petikan gitar bas betot tali satu (stem bass).",
        citationIds: ["pap-ref-wbtb"],
      },
      {
        id: "pap-cul-item-02",
        category: "Kriya Ukir Danau",
        title: "Seni Ukir Sentani (Ondofolo)",
        description: "Berbeda dengan ukiran Asmat yang seram dan kasar, ukiran Suku Sentani (biasanya digurat pada pilar rumah adat / Ondofolo) lebih halus, berbentuk figuratif spiral simetris (motif burung/kadai/biawak) memanjang khas ornamen Austronesia purba.",
        citationIds: ["pap-ref-sentani"],
      },
      {
        id: "pap-cul-item-03",
        category: "Perayaan Tahunan Air Tawar",
        title: "Festival Danau Sentani (FDS)",
        description: "Pagelaran budaya tahunan (pertengahan tahun) yang memamerkan konvoi ratusan perahu hias berukir, tarian adat Isolo di atas perahu, serta pameran kuliner unik di distrik Kalkhote, pinggir Danau Sentani.",
        citationIds: ["pap-ref-sentani"],
      },
      {
        id: "pap-cul-item-04",
        category: "Kriya Noken Kebanggaan",
        title: "Noken Saireri & Anggrek",
        description: "Suku Biak juga menenun tas sakral Noken (Diakui UNESCO), namun bahan bakunya lebih variatif, tak hanya dari serat kulit kayu, tapi di kawasan utara ini ada yang dianyam mahal menggunakan serat batang anggrek hutan berwarna kuning/hitam mengkilap.",
        citationIds: ["pap-ref-wbtb"],
      }
    ],
    referenceIds: ["pap-ref-wbtb", "pap-ref-sentani"],
  },

  language: {
    introduction: [
      {
        id: "pap-lang-01",
        content: "Bahasa Melayu Papua adalah roh interaksi seluruh warga; melodi pelafalannya patah-patah sangat cepat tanpa banyak imbuhan awalan.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "pap-voc-01", word: "Pace / Mace / Usi", meaning: "Panggilan Bapak (Pace), Ibu (Mace), dan Kakak Perempuan (Usi) bagi masyarakat Papua.", citationIds: ["pap-ref-bps"] },
      { id: "pap-voc-02", word: "Ko / Sa", meaning: "Kamu (Ko) / Saya (Sa). (Contoh: Sa pu nama = Nama saya).", citationIds: ["pap-ref-bps"] },
      { id: "pap-voc-03", word: "Trada / Tra", meaning: "Tidak ada / Tidak. (Contoh: Tra usah = Tidak usah).", citationIds: ["pap-ref-bps"] },
      { id: "pap-voc-04", word: "Waaa Waaa Waaa", meaning: "Seruan sorak syukur/terima kasih (Khas suku pegunungan yang juga sering digunakan di Jayapura).", citationIds: ["pap-ref-wbtb"] },
    ],
    referenceIds: ["pap-ref-bps", "pap-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "pap-culi-01",
        content: "Bagi orang Tabi Saireri, sagu adalah daging ibu, dan ikan laut segar adalah nyawanya; perpaduan gurih lengket yang menghangatkan malam di tepi laut lepas.",
        citationIds: ["pap-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pap-culi-item-01",
        title: "Papeda & Ikan Kuah Kuning (Versi Papua)",
        description: "Serupa dengan papeda Maluku, tapi papeda Papua pesisir terkadang disajikan dengan kuah ikan yang rasanya lebih asam tajam karena menggunakan tambahan belimbing sayur Papua segar dan tomat hijau, serta ikan kakap merah pasifik berlemak tebal.",
        citationIds: ["pap-ref-wbtb"],
      },
      {
        id: "pap-culi-item-02",
        title: "Ulat Sagu (Koo)",
        description: "Larva serangga kumbang moncong yang gemuk dan kaya protein ekstrem. Biasanya didapatkan langsung dari batang pohon sagu yang membusuk. Bisa dimakan mentah-mentah (rasanya legit dan lumer), digoreng kering, atau dibakar sate lezat selaiknya sosis berlemak hewani.",
        citationIds: ["pap-ref-wbtb"],
      },
      {
        id: "pap-culi-item-03",
        title: "Keladi Tumbuk & Kangkung Bunga Pepaya",
        description: "Umbi talas hutan (Keladi) berukuran raksasa direbus lalu ditumbuk kasar namun tak sampai halus. Dimakan bersama tumisan kangkung yang diiris kasar dicampur bunga pepaya pahit. Makanan diet alami non-kolesterol.",
        citationIds: ["pap-ref-wbtb"],
      },
      {
        id: "pap-culi-item-04",
        title: "Mujair Danau Sentani",
        description: "Ikan Mujair lokal yang hanya hidup di Danau Sentani. Rasanya berbeda dengan mujair kolam Jawa karena air telaga sentani sangat luas dan dalam; tidak berbau lumpur tanah, melainkan manis gurih dibakar dengan rica-rica.",
        citationIds: ["pap-ref-sentani"],
      }
    ],
    referenceIds: ["pap-ref-wbtb", "pap-ref-sentani"],
  },

  biodiversity: {
    introduction: [
      {
        id: "pap-bio-01",
        content: "Bioma Papua tidak dikuasai kera dan harimau asia; di sini, kangguru belajar memanjat pohon hijau dan burung memiliki ekor kawat emas.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    species: [
      {
        id: "pap-bio-item-01",
        category: "Avifauna Raja Langit (Maskot)",
        title: "Burung Cenderawasih (Bird of Paradise)",
        description: "Raja burung sedunia. Di kawasan Tabi (Cyclops) banyak ditemukan Cenderawasih Mati-kawat yang memiliki bulu antena keras, serta cenderawasih kuning besar yang bulu pinggulnya menjuntai menari untuk memikat betina di kerimbunan fajar hutan Papua.",
        citationIds: ["pap-ref-bps"],
      },
      {
        id: "pap-bio-item-02",
        category: "Mamalia Berkantung Memanjat",
        title: "Kangguru Pohon (Dendrolagus mbaiso/goodfellowi)",
        description: "Karena tidak ada singa dan harimau, evolusi mamalia berkantung marsupial (Kangguru) di Papua justru pindah naik ke atas pohon (tidak melompat di sabana darat). Wajahnya mirip beruang kecil berbulu oranye/cokelat keemasan yang pemalu.",
        citationIds: ["pap-ref-bps"],
      },
      {
        id: "pap-bio-item-03",
        category: "Anggrek Langka Epifit",
        title: "Anggrek Hitam / Anggrek Besi Papua",
        description: "Bunga endemik mahal yang kelopaknya keras bertekstur aneh, hidup menempel di pepohonan tua hutan Cagar Alam Cyclops Jayapura. Semakin tua kayunya, semakin gelap bunganya mekar liar.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    referenceIds: ["pap-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "pap-dest-01",
        content: "Melihat Jembatan Youtefa yang megah menembus awan dan deburan ombak pasifik putih Base-G adalah oase setelah panjangnya penerbangan pesawat Jakarta-Jayapura.",
        citationIds: ["pap-ref-macarthur"],
      }
    ],
    items: [
      {
        id: "pap-dest-item-01",
        category: "Danau Raksasa Kaki Gunung",
        title: "Danau Sentani & Bukit Teletubbies (Tungkuwiri)",
        description: "Danau vulkanik raksasa yang menampung puluhan pulau kecil di tengahnya. Spot foto terbaik adalah dari atas perbukitan bergelombang hijau halus (Bukit Tungkuwiri / Teletubbies) yang menghadap langsung matahari terbenam menyinari hamparan air danau yang memantulkan bayangan gunung Cyclops.",
        citationIds: ["pap-ref-sentani"],
      },
      {
        id: "pap-dest-item-02",
        category: "Sejarah Sekutu Pasifik",
        title: "Tugu MacArthur (Ifar Gunung)",
        description: "Monumen di atas bukit markas (Rindam XVII/Cenderawasih) tempat Jenderal MacArthur dulu membangun markas taktis militer (Hollandia 1944). Dari bukit ini, pengunjung bisa melihat seluruh landasan bandara Sentani dan danau secara utuh membiru layaknya peta satelit.",
        citationIds: ["pap-ref-macarthur"],
      },
      {
        id: "pap-dest-item-03",
        category: "Pantai Kota & Infrastruktur Megah",
        title: "Pantai Base-G & Jembatan Youtefa",
        description: "Base-G adalah pantai landai berombak Pasifik biru tajam yang mudah diakses dari Jayapura. Di sisi timur kota (Holtekamp), terdapat landmark modern baru yang sangat memukau: Jembatan Youtefa yang merah melengkung baja kokoh melintasi teluk laut dangkal, resmikan di atas pecahan uang kertas edisi khusus RI ke-75.",
        citationIds: ["pap-ref-bps"],
      },
      {
        id: "pap-dest-item-04",
        category: "Pos Lintas Batas Negara Terluar",
        title: "PLBN Skouw (Perbatasan RI - PNG)",
        description: "Pos batas (border post) modern nan megah di ujung timur Jayapura. Wisatawan sangat suka berfoto di depan pagar tapal batas, atau melangkah satu kaki masuk ke zona pasar rakyat ('no man land') di wilayah Papua Nugini (Wutung) membeli sosis PNG dan cinderamata perbatasan kaukasia.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    referenceIds: ["pap-ref-sentani", "pap-ref-macarthur", "pap-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "pap-story-01",
        content: "Legenda Papua pesisir selalu bercerita tentang kepahlawanan pelaut pengembara dan hantu naga yang tidur di dasar sungai danau.",
        citationIds: ["pap-ref-sentani"],
      }
    ],
    stories: [
      {
        id: "pap-story-item-01",
        title: "Mitos Naga Danau Sentani",
        description: "Konon pulau-pulau kecil memanjang yang ada di Danau Sentani sebenarnya adalah raga bangkai sepasang naga gaib raksasa dari pegunungan yang dihukum menjadi tanah akibat bertarung mengganggu kedamaian ikan dan burung di atas danau. Lekukan pulau mencerminkan punggung naga berlekuk.",
        citationIds: ["pap-ref-sentani"],
      },
      {
        id: "pap-story-item-02",
        title: "Uis Neno & Gerakan Manseren Koreri (Biak)",
        description: "Mitos Suku Biak meramalkan datangnya Manseren Manggundi (Ratu Adil yang menghilang dan akan kembali menggunakan sampan cahaya). Kepercayaan messianik ini membangkitkan pemberontakan buta berani mati (Koreri) dari warga Biak terhadap peluru kolonial Belanda dan meriam serdadu Jepang pada Perang Dunia 2 karena mengira musuh adalah iblis penghalang ratu adil.",
        citationIds: ["pap-ref-biak"],
      }
    ],
    referenceIds: ["pap-ref-sentani", "pap-ref-biak"],
  },

  contemporary: {
    introduction: [
      {
        id: "pap-cont-01",
        content: "Jayapura sedang bergerak memantapkan posisinya sebagai metropolis ekonomi raksasa Pasifik Selatan.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    economy: [
      {
        id: "pap-cont-02",
        content: "Pasca PON XX Papua 2021 yang meninggalkan jejak stadion Olimpiade berkelas dunia (Stadion Lukas Enembe), Jayapura bertransformasi menjadi pusat pemerintahan provinsi otonomi khusus. Karena bebas dari area konflik separatisme ekstrim, Kota Jayapura berkembang menjadi wilayah 'super hub' jasa perikanan, pelabuhan kargo (Depapre), dan pendidikan, dibanjiri para pendatang (migran ekonomi) yang meraup cuan dari tingginya APBD berstatus Otonomi Khusus Otsus Papua.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    referenceIds: ["pap-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "pap-travel-01",
        content: "Warna senja tidak ada yang lebih merah membakar selain dari pemandangan matahari tenggelam Danau Sentani, sambil meminum kopi tubruk ampas dari dataran tinggi.",
        citationIds: ["pap-ref-sentani"],
      }
    ],
    etiquette: [
      {
        id: "pap-travel-02",
        content: "Orang pesisir Papua (Jayapura, Biak) memiliki cara bertutur kata yang lugas dan to the point tanpa basa-basi Jawa; jangan pernah menganggap suara keras mereka sebagai ancaman (mereka sangat ramah). Jika memakan Pinang (Pinang-Sirih-Kapur), jangan meludah sembarangan di aspal atau gedung putih (sebaiknya telan airnya atau buang di tempat sampah), karena ludah merah pinang sangat susah dibersihkan dan diprotes keras pemerintah kota Jayapura yang menginginkan tata kota bersih peraih Adipura.",
        citationIds: ["pap-ref-bps"],
      }
    ],
    referenceIds: ["pap-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:50:00Z",
  contentStatus: "draft",
  referenceIds: [
    "pap-ref-bps",
    "pap-ref-wbtb",
    "pap-ref-biak",
    "pap-ref-sentani",
    "pap-ref-macarthur"
  ]
};
