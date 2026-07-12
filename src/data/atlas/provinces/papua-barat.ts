import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaBaratReferences: ScientificReference[] = [
  {
    id: "pbr-ref-bps",
    title: "Provinsi Papua Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua Barat",
    url: "https://papuabarat.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "pbr-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua Barat",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "pbr-ref-mansinam",
    title: "Sejarah Pekabaran Injil di Tanah Papua",
    authors: ["Gereja Kristen Injili (GKI) di Tanah Papua"],
    year: 2005,
    publisher: "Sinode GKI",
    url: "https://id.wikipedia.org/wiki/Pulau_Mansinam",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "B",
    provinceIds: ["papua-barat"],
    topicIds: ["history", "society", "destinations"],
  },
  {
    id: "pbr-ref-arfak",
    title: "Ecology of the Arfak Mountains",
    authors: ["Gibbs, David"],
    year: 1994,
    publisher: "Bulletin of the British Ornithologists' Club",
    url: "https://en.wikipedia.org/wiki/Arfak_Mountains",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["papua-barat"],
    topicIds: ["biodiversity", "geography"],
  },
  {
    id: "pbr-ref-kaimana",
    title: "Teluk Triton dan Sejarah Kaimana",
    authors: ["Pemerintah Kabupaten Kaimana"],
    year: 2020,
    publisher: "Dinas Pariwisata Kaimana",
    url: "https://id.wikipedia.org/wiki/Kabupaten_Kaimana",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "B",
    provinceIds: ["papua-barat"],
    topicIds: ["destinations", "stories"],
  }
];

export const papuaBaratAtlas: ProvinceAtlas = {
  provinceId: "papua-barat",
  slug: "papua-barat",
  title: "Papua Barat",
  tagline: "Semenanjung Bomberai dan Takhta Suci Mansinam",
  summary: [
    {
      id: "pbr-sum-01",
      content: "Pasca pemisahan Sorong Raya menjadi Provinsi Papua Barat Daya (2022), identitas 'Papua Barat' kini terkonsentrasi di kawasan leher hingga sebagian besar tulang punggung Pulau Papua (Kepala Burung & Bomberai). Berpusat di Manokwari, ini adalah Tanah Peradaban di mana Injil pertama kali menjejakkan kaki di tanah Papua (Pulau Mansinam 1855). Di perbukitannya, suku Arfak berkalung manik-manik menari menghentak tanah dengan keras. Sementara di lautannya, Hiu Paus Teluk Cenderawasih dan lembayung magis 'Senja Kaimana' menyihir memori masa lalu.",
      citationIds: ["pbr-ref-bps", "pbr-ref-mansinam", "pbr-ref-kaimana"],
    }
  ],
  quickFacts: [
    { id: "pbr-qf-01", label: "Ibu Kota", value: "Manokwari", citationIds: ["pbr-ref-bps"] },
    { id: "pbr-qf-02", label: "Luas Wilayah", value: "60.275,33 km²", citationIds: ["pbr-ref-bps"], dataYear: 2024 },
    { id: "pbr-qf-03", label: "Populasi", value: "561.403 jiwa", citationIds: ["pbr-ref-bps"], dataYear: 2023 },
    { id: "pbr-qf-04", label: "Situs Rohani", value: "Pulau Mansinam (Pekabaran Injil)", citationIds: ["pbr-ref-mansinam"] },
    { id: "pbr-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["pbr-ref-bps"] },
    { id: "pbr-qf-06", label: "Gubernur", value: "Ali Baham Temongmere (Pj.)", citationIds: ["pbr-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "pbr-geo-01",
        content: "Bentuk geografi layaknya leher burung raksasa yang dicekik oleh dua teluk besar di utara dan di selatannya.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "pbr-geo-02",
        content: "Geografi Papua Barat dibatasi oleh Pegunungan Arfak yang menjulang nyaris 3.000 mdpl di utara, merangkul ibukota pesisir Manokwari di tepian Samudera Pasifik. Di tengah (Teluk Bintuni dan Teluk Wondama), lanskap berubah menjadi perairan rawa bakau pasang-surut yang sangat luas (habitat mega kilang gas). Membentang ke selatan menuju Kaimana dan Fakfak (Semenanjung Bomberai), alam menonjolkan deretan pulau-pulau tebing karst raksasa tegak lurus (Triton Bay) mirip dengan kondisi Wayag di utara.",
        citationIds: ["pbr-ref-bps", "pbr-ref-arfak", "pbr-ref-kaimana"],
      }
    ],
    referenceIds: ["pbr-ref-bps", "pbr-ref-arfak", "pbr-ref-kaimana"],
  },

  history: {
    introduction: [
      {
        id: "pbr-his-01",
        content: "Cahaya peradaban Papua tidak dimulai dari pedalaman rimba, melainkan dari kedatangan perahu kayu kecil misionaris di bibir pantai utara Manokwari.",
        citationIds: ["pbr-ref-mansinam"],
      }
    ],
    timeline: [
      {
        id: "pbr-era-01",
        period: "Abad ke-16 – 18",
        title: "Dominasi Tidore dan Mbaham Matta",
        description: "Wilayah selatan (Fakfak) sejak dahulu menjalin hubungan darah dengan Kesultanan Tidore. Mereka menganut Islam dengan kuat, dikenal sebagai kawasan toleransi pertama (keluarga satu tungku tiga batu) di tanah Papua.",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-era-02",
        period: "5 Februari 1855",
        title: "Hari Pekabaran Injil di Papua",
        description: "Dua misionaris muda asal Jerman (C.W. Ottow dan J.G. Geissler) mendarat di Pulau Mansinam, Manokwari. Mereka berlutut dan menancapkan salib, membawa terang ajaran Kristus dan baca-tulis pertama bagi penduduk daratan Papua.",
        citationIds: ["pbr-ref-mansinam"],
      },
      {
        id: "pbr-era-03",
        period: "1898",
        title: "Afdeeling Noord Nieuw-Guinea",
        description: "Hindia Belanda resmi mendirikan pos pemerintahan dan ibukota otonomi perdananya di Manokwari, menandai dimulainya dominasi total militer dan birokrasi pemerintahan kolonial Barat atas Papua.",
        citationIds: ["pbr-ref-bps"],
      },
      {
        id: "pbr-era-04",
        period: "1999 – 2022",
        title: "Pemekaran dan Transisi Batas Provinsi",
        description: "Papua Barat resmi dibentuk memisahkan diri dari Provinsi Papua, dengan ibukota Manokwari. Namun pada 2022, kawasan Sorong (Papua Barat Daya) dimekarkan lagi dari Papua Barat untuk mengakselerasi perekonomian pesisir masing-masing.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    referenceIds: ["pbr-ref-wbtb", "pbr-ref-mansinam", "pbr-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "pbr-soc-01",
        content: "Peradaban orang Papua Barat tidak tunggal, namun menyandingkan tradisi Islam tua berbalut pala di selatan (Fakfak) dengan sentral Kristen pegunungan Arfak di utara.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "pbr-soc-02",
        content: "Suku Arfak adalah penduduk adat asli raksasa di pegunungan utara Manokwari yang ditakuti karena ketangguhan berburunya; mereka terbagi dalam empat sub-suku (Hatam, Moile, Meyakh, Sough). Sementara di bagian pesisir leher burung, Suku Doreri menguasai perairan laut Manokwari. Di selatan (Semenanjung Bomberai Fakfak), masyarakat adat Mbaham Matta hidup secara rukun (toleransi ekstrem antara Islam, Katolik, dan Protestan dalam satu atap keluarga besar).",
        citationIds: ["pbr-ref-bps", "pbr-ref-wbtb", "pbr-ref-arfak"],
      }
    ],
    referenceIds: ["pbr-ref-bps", "pbr-ref-wbtb", "pbr-ref-arfak"],
  },

  culture: {
    introduction: [
      {
        id: "pbr-cul-01",
        content: "Kaki manusia Arfak tidak menari, namun menghancurkan (menumbuk) bumi, merayakan suka cita layaknya serangga raksasa memanggil hujan.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pbr-cul-item-01",
        category: "Tarian Massa Serentak",
        title: "Tari Tumbuk Tanah (Suku Arfak)",
        description: "Tarian (Tumbut) kolosal melingkar seperti ular (menyerupai lipan) yang dilakukan ratusan pria dan wanita Suku Arfak. Mereka melompat-lompat serempak menghantamkan kaki ke tanah hingga bumi bergetar (layaknya gempa pelan), diiringi teriakan liar penawar lelah/bahagia dari panen besar (menyambut tamu).",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-cul-item-02",
        category: "Seni Tari Fakfak",
        title: "Tari Magasa",
        description: "Tarian adat dari Fakfak untuk menyambut tokoh penting. Penari bergerak dengan irama rebana yang diakulturasi dari pengaruh Kerajaan Islam masa lalu. Penarinya memutar-mutarkan properti parang dan perisai tipis.",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-cul-item-03",
        category: "Perayaan Sejarah Injil",
        title: "Hari PI (Pekabaran Injil) 5 Februari",
        description: "Setiap tanggal 5 Februari, ribuan warga lokal dan pendatang dari seluruh pegunungan turun ke daratan pesisir. Mereka menaiki puluhan kapal laut sewaan berparade konvoi di lautan Manokwari menuju Pulau Mansinam, diiringi tabuhan puji-pujian sakral.",
        citationIds: ["pbr-ref-mansinam"],
      },
      {
        id: "pbr-cul-item-04",
        category: "Rumah Panggung Laba-laba",
        title: "Rumah Kaki Seribu (Mod Aki Aksa)",
        description: "Rumah adat khas suku Arfak (pegunungan). Dindingnya dianyam dari kulit kayu keras dan beratap daun pandan rumbia. Ciri utamanya: ditopang oleh ratusan (banyak) pilar tiang kayu (menyerupai kaki seribu) dengan fungsi menghadang masuknya hawa dingin/hewan buas malam.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    referenceIds: ["pbr-ref-wbtb", "pbr-ref-mansinam"],
  },

  language: {
    introduction: [
      {
        id: "pbr-lang-01",
        content: "Melayu Papua tetap mendominasi lisan pasar harian, bergesekan dengan intonasi Arfak yang serak dan keras saat berada di pegunungan utara.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "pbr-voc-01", word: "Ayo / Kasih Jalan", meaning: "Minggir / Permisi (Biasa digunakan sebagai klakson mulut saat berkendara di Manokwari).", citationIds: ["pbr-ref-bps"] },
      { id: "pbr-voc-02", word: "Penyakit Mati", meaning: "Kondisi sangat gembira/lucu hingga tidak bisa bernapas/banyak tertawa (ungkapan gaul lokal).", citationIds: ["pbr-ref-bps"] },
      { id: "pbr-voc-03", word: "Kiti-kiti", meaning: "Sebutan untuk uang receh (ribuan) atau uang kecil belanjaan.", citationIds: ["pbr-ref-wbtb"] },
      { id: "pbr-voc-04", word: "Igi Ya / Igi Nya", meaning: "Terima Kasih / Selamat Datang (Bahasa Arfak Moile/Hatam).", citationIds: ["pbr-ref-arfak"] },
    ],
    referenceIds: ["pbr-ref-bps", "pbr-ref-wbtb", "pbr-ref-arfak"],
  },

  culinary: {
    introduction: [
      {
        id: "pbr-culi-01",
        content: "Kuliner Manokwari sangat mirip dengan Maluku (Papeda), namun di sisi Fakfak (selatan), kue panada pinjaman rempah Portugis merajai meja makan pagi.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pbr-culi-item-01",
        title: "Ikan Bakar Manokwari",
        description: "Ikan segar (Tuna/Cakalang/Kakap) yang dibakar setengah matang lalu disiram bumbu tumis cabai halus khas Manokwari yang tidak manis namun gurih menggelegar karena disiram perasan jeruk limau yang berlebih.",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-culi-item-02",
        title: "Kue Lontar (Pie Susu Papua)",
        description: "Pie tart manis berbentuk bundar (piring) dengan isi vla susu (telur+susu kental manis+rhum) yang sangat manis kuning mengkilap. Konon merupakan peninggalan akulturasi Belanda (Ronde Taart) di sekitar perairan Fakfak dan Sorong, yang kini menyebar ke Manokwari.",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-culi-item-03",
        title: "Sate Ulat Sagu Berbumbu",
        description: "Berbeda dari suku Asmat yang makan hidup-hidup, Suku Arfak dan pedalaman Bintuni gemar mengolah ulat sagu gendut (Koo) dengan cara ditusuk lidi pelepah dan dibakar sate layaknya daging sosis, diolesi sambal kacang/rica ringan (gurih sangat berlemak seperti mentega cair di lidah).",
        citationIds: ["pbr-ref-wbtb"],
      },
      {
        id: "pbr-culi-item-04",
        title: "Abon Gulung",
        description: "Roti gulung moderen bertabur abon sapi pedas/manis basah dalam jumlah gila-gilaan (super tebal menutupi semua permukaan roti) yang paling sering dijadikan oleh-oleh penerbangan dari Manokwari menuju Jakarta.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    referenceIds: ["pbr-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "pbr-bio-01",
        content: "Rimbu Arfak menyembunyikan spesies yang pandai membangun taman bunga estetik, serta kupu-kupu yang bentang sayapnya sebesar piring makan manusia dewasa.",
        citationIds: ["pbr-ref-arfak"],
      }
    ],
    species: [
      {
        id: "pbr-bio-item-01",
        category: "Arsitek Romantis Hutan Rimba",
        title: "Burung Pintar / Namdur (Bowerbird)",
        description: "Burung kecil endemik Arfak yang memiliki kecerdasan arsitektur luar biasa. Burung jantan akan menyusun ranting rumit menyerupai miniatur rumah kubah rapi (Bower). Ia kemudian menghias halaman 'rumahnya' itu dengan mengumpulkan buah beri, tutup botol plastik biru, kerang, bunga, hingga batu mengkilap terang secara simetris mutlak untuk merayu betina bersanggama (kawin) di dalam bower tersebut.",
        citationIds: ["pbr-ref-arfak"],
      },
      {
        id: "pbr-bio-item-02",
        category: "Kupu-Kupu Raksasa (Terbesar Dunia)",
        title: "Kupu-Kupu Sayap Burung Goliath (Ornithoptera goliath)",
        description: "Spesies kupu-kupu raksasa bersayap kuning hijau fosfor/hijau emas. Lebar sayap betinanya saat mengepak bisa mencapai 28 sentimeter (nyaris satu penggaris anak sekolah). Hewan ini diternakkan oleh warga pegunungan Arfak (penangkaran) sebagai ekspor awetan ke kolektor jepang/eropa berharga tinggi untuk menunjang konservasi ekonomis alam.",
        citationIds: ["pbr-ref-arfak"],
      },
      {
        id: "pbr-bio-item-03",
        category: "Raksasa Laut Ramah",
        title: "Hiu Paus (Rhincodon typus)",
        description: "Mamalia ikan terbesar di lautan (Whaleshark) yang secara mengejutkan menjinakkan diri dan berkumpul secara teratur di perairan Teluk Cenderawasih (Kwatisore/Nabire perbatasan Papua Barat/Tengah), terbiasa berinteraksi dan meminta makan teri dari nelayan bagan penduduk asli laut.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    referenceIds: ["pbr-ref-arfak", "pbr-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "pbr-dest-01",
        content: "Pesona utara di ujung patung perunggu Kristus, berbanding senja merah muda darah teluk purba yang mendendangkan lagu tua di Kaimana.",
        citationIds: ["pbr-ref-mansinam", "pbr-ref-kaimana"],
      }
    ],
    items: [
      {
        id: "pbr-dest-item-01",
        category: "Ziarah Rohani Katolik/Protestan",
        title: "Pulau Mansinam & Monumen Kristus",
        description: "Pulau di teluk Teluk Doreri Manokwari (15 menit menyeberang) yang memiliki patung Yesus Kristus raksasa setinggi 30 meter. Seluruh pulau adalah museum hidup sejarah masuknya agama Kristen, mulai dari sisa bangunan gereja gereja tua kayu hingga sumur Ottow Geissler.",
        citationIds: ["pbr-ref-mansinam"],
      },
      {
        id: "pbr-dest-item-02",
        category: "Raja Ampat-nya Semenanjung Selatan",
        title: "Taman Wisata Alam Teluk Triton (Kaimana)",
        description: "Gugusan bukit tebing tinggi karang raksasa yang vertikal terbelah tajam menjulang di lautan. Lukisan prasejarah telapak tangan berwarna darah menempel pada dinding-dinding karts lautnya. Sepi dari turis asing karena sulit dijangkau, menjadikannya 'Surga Tersembunyi Kedua' Papua.",
        citationIds: ["pbr-ref-kaimana"],
      },
      {
        id: "pbr-dest-item-03",
        category: "Ekspedisi Hutan Dingin & Kupu-Kupu",
        title: "Pegunungan Arfak (Surga Pengamat Burung/Birdwatching)",
        description: "Kabupaten dataran tinggi yang udaranya sejuk menusuk tulang. Desa-desa seperti Mokwam dan Hingk menjadi sasaran utama peneliti biologi global (dilengkapi gubuk penyamaran birdwatching) untuk mendokumentasikan tarian gila burung Cenderawasih Parotia (yang bentuknya aneh berdansa mengibaskan rok tutu balet hitam) di pagi buta (pukul 4 pagi).",
        citationIds: ["pbr-ref-arfak"],
      },
      {
        id: "pbr-dest-item-04",
        category: "Menyelam dengan Raksasa Laut (Whaleshark)",
        title: "Kwatisore (Teluk Cenderawasih)",
        description: "Meski secara administratif beririsan (Taman Nasional di bawah balai BKSDA Papua Barat), Kwatisore adalah destinasi paling langka di Indonesia untuk menyelam (Scuba) bersama Hiu Paus raksasa berbintik sejauh lengan berjarak. Tidak ada Hiu Paus yang sejinak di bawah bagan nelayan papua ini.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    referenceIds: ["pbr-ref-mansinam", "pbr-ref-kaimana", "pbr-ref-arfak", "pbr-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "pbr-story-01",
        content: "Nostalgia dari lagu keroncong pop lawas abadi hingga misteri lukisan telapak tangan merah di tebing laut prasejarah.",
        citationIds: ["pbr-ref-kaimana"],
      }
    ],
    stories: [
      {
        id: "pbr-story-item-01",
        title: "Nostalgia Senja di Kaimana (Lagu Alfian 1960)",
        description: "Kaimana dijuluki Kota Senja karena matahari terbenamnya memantulkan semburat senja oranye menyala tanpa terhalang pulau lain di kaki cakrawala laut Arafuru/Banda. Pemandangan ini menginspirasi penyanyi legendaris Alfian pada tahun 1960-an untuk merekam lagu 'Senja di Kaimana' yang kemudian menghipnotis ratusan ribu kuping orang tua era Orde Lama-Orde Baru yang bermimpi romantis melangkah ke timur, meskipun tidak pernah tiba di Kaimana seumur hidupnya.",
        citationIds: ["pbr-ref-kaimana"],
      },
      {
        id: "pbr-story-item-02",
        title: "Misteri Cap Tangan Darah (Kokas)",
        description: "Tebing tebing karang di pesisir Kokas (Fakfak) digambari cap telapak tangan manusia berwarna merah, gambar ikan, dan tulang tulang pra sejarah yang berserakan. Mitos Mbaham Matta (Fakfak) mempercayai bahwa itu adalah tulah cap peninggalan orang-orang gaib nenek moyang pada zaman es. Pigmen pewarna purbanya konon belum pernah pudar walau dihantam badai laut ribuan tahun.",
        citationIds: ["pbr-ref-wbtb"],
      }
    ],
    referenceIds: ["pbr-ref-kaimana", "pbr-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "pbr-cont-01",
        content: "Saat pesisirnya menjadi ikon suci ziarah Kekristenan, perairan rawanya menyedot miliaran meter kubik gas bumi transnasional (Pabrik Gas Tangguh Bintuni).",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    economy: [
      {
        id: "pbr-cont-02",
        content: "Proyek LNG (Liquefied Natural Gas) Tangguh di Teluk Bintuni adalah operasi pengeboran/kilang gas alam terbesar yang dioperasikan konsorsium Inggris (BP) bernilai puluhan triliun rupiah. Ia menyumbang nyaris separuh PDRB total dari seluruh provinsi Papua Barat. Di Manokwari, pembangunan perumahan baru berkelas dan kampus universitas menjamur membelah perbukitan karena gelombang arus migran masuk.",
        citationIds: ["pbr-ref-bps"],
      }
    ],
    referenceIds: ["pbr-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "pbr-travel-01",
        content: "Berkunjung ke Fakfak rasanya bagaikan mengunjungi Maluku (berbau rempah Pala), namun berlabuh di Manokwari (Pulau Mansinam) Anda akan segera dihantam keaslian ibadah minggu orang Papua utara.",
        citationIds: ["pbr-ref-mansinam"],
      }
    ],
    etiquette: [
      {
        id: "pbr-travel-02",
        content: "Hormati kesunyian gereja pada hari Minggu di Manokwari, sebab di pulau ini hukum gerejawi tidak tertulis meniadakan perputaran pasar/kantor secara total hingga siang hari agar tidak mengganggu ibadah umat kristiani. Jika berkunjung ke perbukitan Arfak, disarankan menggunakan celana tebal penahan angin dingin dan siapkan nyali menumpangi mobil jeep Double-Cabin khusus (Triton/Hilux gardan ganda dengan as roda dipendekkan dan ban pacul) karena kemiringan tanjakan jalannya luar biasa mematikan dan licin karena basah hujan abadi.",
        citationIds: ["pbr-ref-arfak", "pbr-ref-bps"],
      }
    ],
    referenceIds: ["pbr-ref-mansinam", "pbr-ref-arfak", "pbr-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:51:00Z",
  contentStatus: "draft",
  referenceIds: [
    "pbr-ref-bps",
    "pbr-ref-wbtb",
    "pbr-ref-mansinam",
    "pbr-ref-arfak",
    "pbr-ref-kaimana"
  ]
};
