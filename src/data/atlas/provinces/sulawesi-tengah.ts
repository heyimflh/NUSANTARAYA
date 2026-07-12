import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sulawesiTengahReferences: ScientificReference[] = [
  {
    id: "slt-ref-bps",
    title: "Provinsi Sulawesi Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sulawesi Tengah",
    url: "https://sulteng.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "slt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sulawesi Tengah",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "slt-ref-lorelindu",
    title: "Lore Lindu National Park and Megalithic Culture",
    authors: ["UNESCO World Heritage Centre"],
    year: 2004,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/tentativelists/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "slt-ref-tsunami",
    title: "Palu Earthquake, Tsunami, and Liquefaction 2018",
    authors: ["BMKG & BNPB"],
    year: 2019,
    publisher: "Badan Nasional Penanggulangan Bencana",
    url: "https://bnpb.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["history", "contemporary"],
  },
  {
    id: "slt-ref-imip",
    title: "The Nickel Rush in Morowali",
    authors: ["Pusat Studi Ekonomi Asia"],
    year: 2022,
    publisher: "Jurnal Pertambangan Indonesia",
    url: "https://id.wikipedia.org/wiki/Morowali",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["contemporary", "society"],
  }
];

export const sulawesiTengahAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-tengah",
  slug: "sulawesi-tengah",
  title: "Sulawesi Tengah",
  tagline: "Tanah Seribu Megalit, Episentrum Kebangkitan Nikel Global",
  summary: [
    {
      id: "slt-sum-01",
      content: "Sulawesi Tengah (Sulteng) adalah provinsi terbesar di hamparan pulau 'K' Sulawesi. Membelah dua lautan dan dilewati tepat oleh garis khatulistiwa, provinsi ini adalah kanvas geologi yang menakjubkan sekaligus mematikan; dilintasi patahan bumi raksasa Sesar Palu-Koro yang meledak dalam tragedi likuifaksi Tsunami 2018. Di balik tanah rawan gempanya, Sulteng menyembunyikan teka-teki purba ribuan patung megalitikum (Lore Lindu), serta kini melesat menjadi pusat industri peleburan Nikel paling raksasa di dunia (Morowali) yang memacu kemandirian baterai kendaraan listrik.",
      citationIds: ["slt-ref-bps", "slt-ref-tsunami", "slt-ref-imip"],
    }
  ],
  quickFacts: [
    { id: "slt-qf-01", label: "Ibu Kota", value: "Palu", citationIds: ["slt-ref-bps"] },
    { id: "slt-qf-02", label: "Luas Wilayah", value: "61.841,29 km²", citationIds: ["slt-ref-bps"], dataYear: 2024 },
    { id: "slt-qf-03", label: "Populasi", value: "3.081.702 jiwa", citationIds: ["slt-ref-bps"], dataYear: 2023 },
    { id: "slt-qf-04", label: "Sesar Aktif", value: "Sesar Palu-Koro", citationIds: ["slt-ref-tsunami"] },
    { id: "slt-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["slt-ref-bps"] },
    { id: "slt-qf-06", label: "Gubernur", value: "Rusdy Mastura", citationIds: ["slt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "slt-geo-01",
        content: "Bentuk Sulteng ibarat pertemuan leher dan dada tubuh Sulawesi, yang dicabik oleh garis patahan purba dan teluk laut dalam.",
        citationIds: ["slt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "slt-geo-02",
        content: "Topografinya sangat ekstrem. Teluk Palu membelah jauh masuk ke daratan, sementara pegunungan rapat yang dibungkus Taman Nasional Lore Lindu berdiri mengurung Danau Poso yang purba di tengah-tengah. Di arah khatulistiwa (Donggala dan Parigi Moutong), tanahnya subur. Di arah timur laut, terdapat perairan Kepulauan Togean yang tenang dan gugusan maritim kepulauan Banggai yang terisolasi sempurna.",
        citationIds: ["slt-ref-bps", "slt-ref-lorelindu"],
      }
    ],
    referenceIds: ["slt-ref-bps", "slt-ref-lorelindu"],
  },

  history: {
    introduction: [
      {
        id: "slt-his-01",
        content: "Riwayat Sulteng adalah sejarah pengorbanan luar biasa menembus dua trauma modern: Konflik Komunal milenium baru, dan Likuifaksi Palu.",
        citationIds: ["slt-ref-tsunami"],
      }
    ],
    timeline: [
      {
        id: "slt-era-01",
        period: "Ribuan Tahun SM",
        title: "Peradaban Megalitik Lore",
        description: "Salah satu misteri terbesar arkeologi dunia; peradaban Austronesia misterius yang memahat ribuan patung wajah batu raksasa (mirip Pulau Paskah) dan tempayan kubur dari batu utuh (Kalamba) yang dibiarkan berserakan di padang savana Lembah Bada, Napu, dan Behoa.",
        citationIds: ["slt-ref-lorelindu"],
      },
      {
        id: "slt-era-02",
        period: "1998 – 2001",
        title: "Konflik Komunal Poso",
        description: "Periode kelam bentrokan horizontal bernuansa agama (Islam-Kristen) di pesisir Teluk Tomini (Poso) yang menelan ribuan korban, yang berhasil diakhiri secara damai melalui Deklarasi Malino pada tahun 2001.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-era-03",
        period: "28 September 2018",
        title: "Gempa, Tsunami, & Likuifaksi Palu",
        description: "Pergeseran mematikan Sesar Palu-Koro memicu gempa (7.4 SR) dan gelombang Tsunami di Teluk Palu. Yang paling mengejutkan dunia sains adalah munculnya fenomena Likuifaksi seketika (tanah berubah wujud menjadi lumpur hisap mematikan) yang menelan hidup-hidup dua kelurahan (Balaroa dan Petobo) dalam hitungan menit.",
        citationIds: ["slt-ref-tsunami"],
      },
      {
        id: "slt-era-04",
        period: "2013 – Saat Ini",
        title: "Ledakan Industri Morowali",
        description: "Kabupaten miskin Morowali bertransformasi menjadi magnet ribuan tenaga kerja asing Tiongkok (IMIP), mengolah jutaan ton nikel dalam smelter kotor demi menghidupi mimpi rantai pasok mobil listrik (EV) global.",
        citationIds: ["slt-ref-imip"],
      }
    ],
    referenceIds: ["slt-ref-tsunami", "slt-ref-lorelindu", "slt-ref-imip"],
  },

  society: {
    introduction: [
      {
        id: "slt-soc-01",
        content: "Demografi etnis Sulteng sangat bervariasi, dipisahkan oleh bentang alam tajam namun saling membaur dalam trauma pasca-bencana dan rekonsiliasi.",
        citationIds: ["slt-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "slt-soc-02",
        content: "Etnis aslinya dikelompokkan ke dalam 12 subsuku, yang paling dominan adalah suku Kaili di pesisir barat (Palu, Donggala). Di daratan tengah (Poso), bermukim Suku Pamona dan Suku Lore yang beragama Kristen (menjaga situs patung purba). Di sisi timur kepulauan, Suku Banggai, Saluan, dan Balantak (Babasal) bermukim dengan kebanggaan baharinya. Slogan 'Nosarara Nosabatutu' (Kita Semua Bersaudara) kini menjadi perekat trauma masyarakat di Lembah Palu.",
        citationIds: ["slt-ref-bps", "slt-ref-wbtb"],
      }
    ],
    referenceIds: ["slt-ref-bps", "slt-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "slt-cul-01",
        content: "Kebudayaan Sulteng berpusat pada tenunan pesisir yang sarat sentuhan India, dan tarian massal melingkar sebagai lambang penyatuan damai.",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slt-cul-item-01",
        category: "Kain Kriya Tenun",
        title: "Tenun Ikat Donggala (Buya Sabe)",
        description: "Kain sutra khas pelabuhan rempah Donggala. Sejak abad 19, kain Donggala menggunakan motif geometris dan warna cerah, sangat dihormati di pasar perdagangan kuno Bugis sebagai sarung kelas atas.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-cul-item-02",
        category: "Tari Sukacita Petani",
        title: "Tari Pamonte",
        description: "Tarian klasik Suku Kaili yang menceritakan keanggunan perempuan pedesaan dalam memanen (mombulu) dan menumbuk padi. Ditarikan pada acara penyambutan tamu pemerintahan.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-cul-item-03",
        category: "Tari Perdamaian Massal",
        title: "Tari Dero",
        description: "Tarian pergaulan bebas tanpa kasta dari Suku Pamona. Puluhan hingga ratusan orang membentuk formasi lingkaran besar sambil bergandengan tangan, menghentakkan kaki serempak. Tarian ini dimainkan semalaman di acara pesta muda-mudi, seringkali menjadi ajang cari jodoh.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-cul-item-04",
        category: "Instrumen Pertanian Tiup",
        title: "Lalove",
        description: "Seruling bambu panjang tradisional suku Kaili. Zaman dahulu ditiup panjang dengan nada magis (balia) sebagai medium upacara penyembuhan memanggil roh leluhur untuk menyembuhkan orang kerasukan.",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    referenceIds: ["slt-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "slt-lang-01",
        content: "Bahasa Kaili memiliki fenomena dialektika unik: membedakan sub-suku (klan) hanya berdasarkan kata 'TIDAK' yang mereka ucapkan.",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    vocabulary: [
      { id: "slt-voc-01", word: "Ledo / Tara / Rai / Edo", meaning: "Kata yang berarti 'Tidak' dalam berbagai dialek Kaili.", citationIds: ["slt-ref-wbtb"] },
      { id: "slt-voc-02", word: "Kaledo", meaning: "Secara harfiah 'Kaki Lembu Donggala' (Sop balungan kaki).", citationIds: ["slt-ref-wbtb"] },
      { id: "slt-voc-03", word: "Tabe", meaning: "Permisi / Maaf, kata sapaan sopan khas suku Kaili dan sekitarnya.", citationIds: ["slt-ref-bps"] },
      { id: "slt-voc-04", word: "Nosarara Nosabatutu", meaning: "Bersama kita satu (Motto Kota Palu yang berarti perdamaian pasca konflik).", citationIds: ["slt-ref-wbtb"] },
    ],
    referenceIds: ["slt-ref-bps", "slt-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "slt-culi-01",
        content: "Menu khas Sulteng diwarnai sensasi kaldu tulang sumsum yang dihisap kuat (Kaledo) atau olahan asam mangga yang dikombinasikan kepulan asap (Uta Dada).",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slt-culi-item-01",
        title: "Kaledo (Kaki Lembu Donggala)",
        description: "Sup berkuah bening kekuningan asam segar (menggunakan campuran buah asam jawa muda utuh). Isiannya berupa potongan raksasa tulang kaki sapi lengkap dengan sumsum basah (yang dihisap memakai sedotan bambu/plastik). Sangat keras dan macho disajikan.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-culi-item-02",
        title: "Uta Dada",
        description: "Ayam kampung berlumur bumbu rempah kelapa sangrai (dada) yang sebelumnya diasap hingga kulitnya mengering, kemudian dimasak dalam kuah santan kelapa kental pedas yang diimbangi kesegaran perasan buah mangga mentah/asam jawa.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-culi-item-03",
        title: "Palumara",
        description: "Sup ikan laut (kakap merah/bandeng) kuah asam padeh (tanpa santan) khas Teluk Palu. Ciri khasnya adalah penggunaan belimbing wuluh dan rempah kunyit yang sangat tajam menyengat hidung.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-culi-item-04",
        title: "Onyop / Kapurung Sulteng",
        description: "Sajian berbahan dasar sagu cair kenyal yang disiram kuah ikan kuah kuning/asam pedas (Serupa dengan Papeda Papua, namun Onyop adalah khas pesisir Timur Luwuk Banggai).",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    referenceIds: ["slt-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "slt-bio-01",
        content: "Di kawasan garis lintang Wallace ini, fauna-fauna kuno seperti sapi bertubuh kambing (anoa) berevolusi menyepi di tengah hutan pinus pegunungan Lore.",
        citationIds: ["slt-ref-lorelindu"],
      }
    ],
    species: [
      {
        id: "slt-bio-item-01",
        category: "Fauna Endemik (Darat)",
        title: "Anoa (Bubalus depressicornis)",
        description: "Sapi/kerbau cebol asli dataran tinggi Sulawesi. Hewan pemalu dan terancam punah (kurang dari 5.000 ekor di alam bebas) ini adalah simbol provinsi, mendiami lembah TN Lore Lindu yang kaya pasokan air.",
        citationIds: ["slt-ref-lorelindu"],
      },
      {
        id: "slt-bio-item-02",
        category: "Burung Endemik Pesisir",
        title: "Burung Maleo (Macrocephalon maleo)",
        description: "Burung ini tidak mengerami telurnya. Ia berjalan puluhan kilometer dari hutan menuju pesisir berpasir panas vulkanik di Banggai/Salodik, menggali lubang, mengubur telur super raksasa (5x telur ayam biasa), lalu meninggalkannya menetas sendirian.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-bio-item-03",
        category: "Primata Malam",
        title: "Tangasi / Tarsius (Tarsius dentatus/pumilus)",
        description: "Kembaran tarsius Sulawesi Utara, mamalia kecil bermata belo pemakan serangga yang hidup bersembunyi di rimbunan bambu Taman Nasional.",
        citationIds: ["slt-ref-lorelindu"],
      }
    ],
    referenceIds: ["slt-ref-lorelindu", "slt-ref-wbtb"],
  },

  destinations: {
    introduction: [
      {
        id: "slt-dest-01",
        content: "Menjelajah Sulteng membutuhkan nyali tinggi untuk menempuh perjalanan darat ratusan kilometer menembus hutan tropis dan jurang kapur laut.",
        citationIds: ["slt-ref-bps"],
      }
    ],
    items: [
      {
        id: "slt-dest-item-01",
        category: "Misteri Purbakala Dunia",
        title: "Lembah Bada (Megalitikum Lore Lindu)",
        description: "Terkubur di dataran tinggi berkabut (Kabupaten Poso), ratusan patung batu manusia berwajah kaku (patung 'Palindo' setinggi 4 meter yang tersenyum miring ke laut) berdiri misterius. Usianya diperkirakan menembus 2.000 SM, dan hingga kini tak ada literatur pasti siapa pembuatnya.",
        citationIds: ["slt-ref-lorelindu"],
      },
      {
        id: "slt-dest-item-02",
        category: "Kepulauan Terisolasi",
        title: "Kepulauan Togean",
        description: "Berada tepat di tengah teluk Tomini. Situs bagi para backpaker Eropa bersembunyi dari peradaban. Di sini terdapat danau berisi ubur-ubur tidak menyengat (Stingless Jellyfish) dan atol cincin karang sempurna.",
        citationIds: ["slt-ref-bps"],
      },
      {
        id: "slt-dest-item-03",
        category: "Keajaiban Geologi Darat",
        title: "Pusentasi (Pusat Laut Donggala)",
        description: "Sebuah sumur/lubang purba raksasa berdiameter 10 meter alami di daratan yang menembus terowongan ke laut lepas, sehingga pasang-surutnya mengikuti laut. Konon di kedalamannya tersimpan spesies ikan unik.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-dest-item-04",
        category: "Situs Pasca Bencana",
        title: "Monumen Likuefaksi (Balaroa & Petobo)",
        description: "Hamparan padang rumput datar yang menimbun 2000+ unit perumahan. Tanah ini ambles layaknya bubur selama 10 menit (September 2018), kini menjadi kawasan wisata duka dan edukasi geologi (Red Zone) yang tak boleh dihuni kembali selamanya.",
        citationIds: ["slt-ref-tsunami"],
      }
    ],
    referenceIds: ["slt-ref-lorelindu", "slt-ref-bps", "slt-ref-tsunami", "slt-ref-wbtb"],
  },

  stories: {
    introduction: [
      {
        id: "slt-story-01",
        content: "Banyak kisah dan pusaka budaya di Sulteng sangat erat bertalian dengan pelayaran perintis leluhur Bugis kuno (La Galigo).",
        citationIds: ["slt-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "slt-story-item-01",
        title: "Sawerigading di Tanah Banggai",
        description: "Dalam teks raksasa La Galigo, ksatria Bugis Purba (Sawerigading) pernah singgah menebang pohon raksasa 'Welenreng' di perairan Banggai untuk memotong halang rintang di lautan. Kisah ini menjelaskan akar rumpun persaudaraan kuat etnis Babasal dengan pelaut selatan.",
        citationIds: ["slt-ref-wbtb"],
      },
      {
        id: "slt-story-item-02",
        title: "Mitos Patung Kutukan Palindo",
        description: "Masyarakat lokal Lore meyakini bahwa patung megalitikum 'Palindo' (Sang Penghibur) di Lembah Bada adalah jasad seorang pemimpin angkuh (Panglima To Bada) yang dikutuk menjadi batu ketika merayakan kemenangan palsunya.",
        citationIds: ["slt-ref-lorelindu"],
      }
    ],
    referenceIds: ["slt-ref-wbtb", "slt-ref-lorelindu"],
  },

  contemporary: {
    introduction: [
      {
        id: "slt-cont-01",
        content: "Ledakan raksasa ekonomi Morowali menghadirkan surga nikel dunia yang sayangnya dibarengi debu beracun bagi lingkungan pesisir.",
        citationIds: ["slt-ref-imip"],
      }
    ],
    economy: [
      {
        id: "slt-cont-02",
        content: "Kawasan Industri Morowali (IMIP) mempekerjakan puluhan ribu buruh dalam lautan pabrik peleburan stainless steel/nikel. Di satu sisi, ini adalah pencapaian hilirisasi tambang paling gemilang di Indonesia yang menghasilkan ekspor puluhan triliun rupiah, namun di sisi lain, konflik ketenagakerjaan dan masifnya kerusakan polusi udara/limbah panas ke laut (yang mematikan tangkapan nelayan) memicu kritik global dari kelompok pro-lingkungan hijau.",
        citationIds: ["slt-ref-imip", "slt-ref-bps"],
      }
    ],
    referenceIds: ["slt-ref-imip", "slt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "slt-travel-01",
        content: "Berwisata ke Palu adalah perenungan tentang betapa merdekanya kekuatan alam membentuk dan menghancurkan tanah di atas patahan.",
        citationIds: ["slt-ref-tsunami"],
      }
    ],
    etiquette: [
      {
        id: "slt-travel-02",
        content: "Hormati tapak-tapak tanah kosong di wilayah Palu (seperti Balaroa dan Petobo) sebagai makam massal yang tak bersuara, hindari membuang sampah/bercanda secara tidak layak. Di wilayah Togean, fasilitas sangat minim, persiapkan obat anti-malaria dan jangan menyentuh terumbu karang mati saat menyelam. Di area patung Megalitik Lore, patuhi tabu lokal dengan tidak memanjat atau merusak batu-batu tersebut karena penduduk lokal menjaga kesakralannya dengan keras.",
        citationIds: ["slt-ref-tsunami", "slt-ref-lorelindu"],
      }
    ],
    referenceIds: ["slt-ref-tsunami", "slt-ref-lorelindu"],
  },

  lastReviewedAt: "2026-07-13T00:35:00Z",
  contentStatus: "draft",
  referenceIds: [
    "slt-ref-bps",
    "slt-ref-wbtb",
    "slt-ref-lorelindu",
    "slt-ref-tsunami",
    "slt-ref-imip"
  ]
};
