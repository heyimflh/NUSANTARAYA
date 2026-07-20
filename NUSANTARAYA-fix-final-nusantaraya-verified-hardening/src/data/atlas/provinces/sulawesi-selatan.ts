// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Selatan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulsel-ref-bps",
    title: "Provinsi Sulawesi Selatan Dalam Angka 2025",
    authors: ["BPS Provinsi Sulawesi Selatan"],
    year: 2025,
    publisher: "Badan Pusat Statistik",
    url: "https://sulsel.bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-kini"],
  },
  {
    id: "sulsel-ref-unesco-pinisi",
    title: "Pinisi, art of boatbuilding in South Sulawesi",
    authors: ["UNESCO"],
    year: 2017,
    publisher: "Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/pinisi-art-of-boatbuilding-in-south-sulawesi-01197",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["budaya", "sejarah"],
  },
  {
    id: "sulsel-ref-wbtb",
    title: "Penetapan Warisan Budaya Takbenda Indonesia (Sulawesi Selatan)",
    authors: ["Kementerian Kebudayaan"],
    year: 2024,
    publisher: "Direktorat Jenderal Kebudayaan",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["budaya", "kuliner", "cerita"],
  },
  {
    id: "sulsel-ref-unesco-lagaligo",
    title: "La Galigo - Memory of the World",
    authors: ["UNESCO Memory of the World"],
    year: 2011,
    publisher: "UNESCO",
    url: "https://en.unesco.org/memoryoftheworld/registry/255",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["sejarah", "budaya", "cerita"],
  },
  {
    id: "sulsel-ref-maros-geopark",
    title: "Maros Pangkep UNESCO Global Geopark",
    authors: ["UNESCO Global Geoparks"],
    year: 2023,
    publisher: "UNESCO",
    url: "https://en.unesco.org/global-geoparks/maros-pangkep",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["alam", "geografi", "destinasi"],
  },
  {
    id: "sulsel-ref-bantimurung",
    title: "Taman Nasional Bantimurung Bulusaraung (The Kingdom of Butterfly)",
    authors: ["Kementerian Lingkungan Hidup dan Kehutanan", "KSDAE"],
    year: 2023,
    publisher: "Balai TN Babul",
    url: "https://tn-babul.org",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["alam", "destinasi"],
  },
  {
    id: "sulsel-ref-petabahasa",
    title: "Peta Bahasa: Bahasa Bugis, Makassar, Toraja",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2024,
    publisher: "Kementerian Pendidikan Dasar dan Menengah",
    url: "https://petabahasa.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["bahasa"],
  },
  {
    id: "sulsel-ref-sejarah-gowa",
    title: "Kerajaan Gowa-Tallo dan Hegemoni Maritim di Nusantara Timur",
    authors: ["Pelras, C."],
    year: 2006,
    publisher: "Nalar (Terjemahan: The Bugis)",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["sejarah"],
  },
  {
    id: "sulsel-ref-toraja",
    title: "Aluk Todolo dan Rambu Solo: Ritual Kematian di Tana Toraja",
    authors: ["Sandarupa, S."],
    year: 2012,
    publisher: "Jurnal Antropologi Indonesia",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["masyarakat", "budaya"],
  },
  {
    id: "sulsel-ref-kuliner",
    title: "Kuliner Tradisional Makassar: Sejarah Coto dan Konro",
    authors: ["Rahman, N."],
    year: 2019,
    publisher: "Jurnal Pariwisata dan Budaya",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["kuliner"],
  },
  {
    id: "sulsel-ref-tourism",
    title: "Statistik Kunjungan Wisatawan Sulawesi Selatan",
    authors: ["Dinas Kebudayaan dan Kepariwisataan Sulawesi Selatan"],
    year: 2024,
    publisher: "Pemerintah Provinsi Sulawesi Selatan",
    url: "https://disbudpar.sulselprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["destinasi", "masa-kini"],
  }
];

export const sulawesiSelatanReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiSelatanAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-selatan",
  slug: "sulawesi-selatan",
  title: "Sulawesi Selatan",
  tagline: "Gerbang Pelaut Tangguh dan Puncak Karst Megah",

  summary: [
    {
      id: "sulsel-sum-01",
      content: "Terletak di semenanjung barat daya Pulau Sulawesi, Sulawesi Selatan adalah jantung peradaban pelaut tangguh Bugis-Makassar dan keunikan magis dataran tinggi Toraja. Secara ekonomi dan infrastruktur, provinsi ini berfungsi sebagai gerbang utama dan hub logistik bagi seluruh kawasan Indonesia Timur.",
      citationIds: ["sulsel-ref-bps"],
    },
    {
      id: "sulsel-sum-02",
      content: "Warisan maritimnya diakui dunia melalui Pinisi—kapal layar tradisional beraliran aerodinamis yang diproduksi di pesisir Bulukumba—yang telah ditetapkan sebagai Warisan Budaya Takbenda oleh UNESCO. Tradisi niaga laut ini telah membentuk karakter masyarakat pesisirnya menjadi perantau dan saudagar ulung.",
      citationIds: ["sulsel-ref-unesco-pinisi", "sulsel-ref-sejarah-gowa"],
    },
    {
      id: "sulsel-sum-03",
      content: "Selain pesisir, peradaban dataran tinggi Tana Toraja di utara provinsi menawarkan salah satu kompleksitas ritual kematian (Rambu Solo) yang paling rumit dan megah di dunia, menjadi magnet utama pariwisata internasional.",
      citationIds: ["sulsel-ref-toraja"],
    }
  ],

  quickFacts: [
    { id: "sulsel-qf-01", label: "Ibu Kota", value: "Makassar", citationIds: ["sulsel-ref-bps"] },
    { id: "sulsel-qf-02", label: "Luas Wilayah", value: "46.717 km²", citationIds: ["sulsel-ref-bps"] },
    { id: "sulsel-qf-03", label: "Populasi", value: "±9.4 Juta (2025)", citationIds: ["sulsel-ref-bps"] },
    { id: "sulsel-qf-04", label: "Etnis Utama", value: "Bugis, Makassar, Toraja, Mandar", citationIds: ["sulsel-ref-bps"] },
    { id: "sulsel-qf-05", label: "Situs Geopark", value: "Maros Pangkep (UNESCO)", citationIds: ["sulsel-ref-maros-geopark"] },
    { id: "sulsel-qf-06", label: "Kapal Ikonik", value: "Pinisi", citationIds: ["sulsel-ref-unesco-pinisi"] },
    { id: "sulsel-qf-07", label: "Puncak Tertinggi", value: "Gunung Latimojong (3.478 m)", citationIds: ["sulsel-ref-bps"] },
    { id: "sulsel-qf-08", label: "Karya Sastra", value: "I La Galigo", citationIds: ["sulsel-ref-unesco-lagaligo"] },
  ],

  geography: {
    introduction: [
      {
        id: "sulsel-geo-01",
        content: "Bentuk geografis Sulawesi Selatan menyerupai kaki pulau yang memanjang ke selatan. Pesisir baratnya berbatasan dengan Selat Makassar yang sibuk, sedangkan pesisir timurnya diapit oleh Teluk Bone. Di bagian tengah, membentang pegunungan karst Maros-Pangkep yang merupakan kawasan karst terluas kedua di dunia setelah China Tenggara.",
        citationIds: ["sulsel-ref-bps", "sulsel-ref-maros-geopark"],
      },
      {
        id: "sulsel-geo-02",
        content: "Ke utara, lanskap berubah menjadi jajaran pegunungan tinggi berudara sejuk (Pegunungan Latimojong dan Tana Toraja). Danau Tempe, sebuah danau tektonik dangkal di Kabupaten Wajo, merupakan reservoir air tawar penting yang mengering secara signifikan pada musim kemarau.",
        citationIds: ["sulsel-ref-bps"],
      }
    ],
    referenceIds: ["sulsel-ref-bps", "sulsel-ref-maros-geopark"],
  },

  history: {
    introduction: [
      {
        id: "sulsel-his-01",
        content: "Catatan arkeologis menunjukkan adanya hunian manusia prasejarah di gua-gua karst Leang-Leang (Maros), yang meninggalkan lukisan tangan dan babi rusa tertua di dunia (sekitar 40.000 tahun lalu). Secara epik, fondasi peradaban ini tertuang dalam epos La Galigo, karya sastra terpanjang di dunia yang menceritakan mitos penciptaan orang Bugis.",
        citationIds: ["sulsel-ref-maros-geopark", "sulsel-ref-unesco-lagaligo"],
      },
      {
        id: "sulsel-his-02",
        content: "Pada abad ke-16 hingga ke-17, Kerajaan kembar Gowa-Tallo (Makassar) tumbuh menjadi imperium maritim raksasa yang menguasai jalur perdagangan rempah Nusantara Timur. Kekuasaan ini akhirnya runtuh setelah Perang Makassar (1666–1669) melawan VOC yang bersekutu dengan Kerajaan Bone di bawah pimpinan Arung Palakka, menghasilkan Perjanjian Bongaya.",
        citationIds: ["sulsel-ref-sejarah-gowa"],
      }
    ],
    eras: [
      {
        id: "sulsel-era-01",
        name: "Era Pra-Islam & La Galigo",
        description: "Periode di mana sistem kepercayaan awal Bugis berkembang, ditandai oleh dominasi para Bissu (pendeta androgini) dan penciptaan siklus epos I La Galigo.",
        period: "Abad Pra-14 M",
        citationIds: ["sulsel-ref-unesco-lagaligo"]
      },
      {
        id: "sulsel-era-02",
        name: "Hegemoni Gowa-Tallo",
        description: "Kerajaan Makassar mencapai masa keemasan di bawah pimpinan Sultan Hasanuddin (Ayam Jantan dari Timur). Kota Makassar menjadi pelabuhan internasional bebas (mare liberum).",
        period: "Abad ke-16 – pertengahan ke-17",
        citationIds: ["sulsel-ref-sejarah-gowa"]
      },
      {
        id: "sulsel-era-03",
        name: "Masa Kolonial & Arung Palakka",
        description: "VOC mengambil alih monopoli perdagangan pasca Perjanjian Bongaya (1667). Banyak bangsawan Bugis-Makassar yang menolak tunduk kemudian bermigrasi ke seluruh Nusantara, memengaruhi perpolitikan di Jawa, Riau, hingga Semenanjung Malaya.",
        period: "1669 – 1942",
        citationIds: ["sulsel-ref-sejarah-gowa"]
      }
    ],
    referenceIds: ["sulsel-ref-sejarah-gowa", "sulsel-ref-maros-geopark", "sulsel-ref-unesco-lagaligo"],
  },

  society: {
    introduction: [
      {
        id: "sulsel-soc-01",
        content: "Masyarakat Sulawesi Selatan dikelompokkan ke dalam empat suku utama: Bugis (mayoritas di tengah dan utara-pesisir), Makassar (selatan dan ibu kota), Toraja (dataran tinggi utara), dan Mandar (barat laut, yang sebagian besar kini masuk provinsi Sulawesi Barat).",
        citationIds: ["sulsel-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "sulsel-soc-02",
        content: "Kebudayaan Bugis-Makassar sangat berpegang pada konsep harga diri dan kehormatan yang disebut 'Siri' na Pacce'. Rasa malu (Siri') dan empati komunal (Pacce) adalah landasan moral absolut yang jika dilanggar dapat memicu konsekuensi sosial berat.",
        citationIds: ["sulsel-ref-sejarah-gowa"],
      },
      {
        id: "sulsel-soc-03",
        content: "Di pegunungan Toraja, masyarakat memiliki stratifikasi sosial ketat yang diukur dari keturunan dan jumlah kerbau (tedong) yang disembelih pada upacara kematian (Rambu Solo). Agama tradisional mereka, Aluk Todolo, kini telah diakui negara di bawah payung Hindu Dharma (meski mayoritas telah memeluk Kristen/Katolik).",
        citationIds: ["sulsel-ref-toraja"],
      }
    ],
    referenceIds: ["sulsel-ref-bps", "sulsel-ref-sejarah-gowa", "sulsel-ref-toraja"],
  },

  culture: {
    introduction: [
      {
        id: "sulsel-cul-01",
        content: "Kebudayaan material dan non-material Sulawesi Selatan memperlihatkan kontras yang indah antara tradisi maritim di pesisir dan tradisi agraris pegunungan yang megah.",
        citationIds: ["sulsel-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "sulsel-cul-item-01",
        category: "craft",
        title: "Pinisi",
        description: "Kapal layar tradisional dengan dua tiang utama dan tujuh helai layar. Teknik pembuatannya (berpusat di Tanah Beru, Bulukumba) diwariskan secara lisan tanpa cetak biru tertulis, memadukan ilmu perkapalan dan ritual magis.",
        significance: "Diakui sebagai Warisan Budaya Takbenda Kemanusiaan oleh UNESCO pada 2017.",
        citationIds: ["sulsel-ref-unesco-pinisi"],
      },
      {
        id: "sulsel-cul-item-02",
        category: "architecture",
        title: "Tongkonan",
        description: "Rumah adat Toraja bersistem panggung dengan atap melengkung menyerupai perahu (berlapis bambu atau seng). Bagian depan dihiasi tanduk-tanduk kerbau hasil upacara adat yang disusun menjulang secara vertikal.",
        significance: "Pusat spiritual dan titik kumpul silsilah keluarga besar (tongkon = duduk bersama).",
        citationIds: ["sulsel-ref-wbtb", "sulsel-ref-toraja"],
      },
      {
        id: "sulsel-cul-item-03",
        category: "art",
        title: "Tari Pakarena",
        description: "Tarian klasik khas Makassar yang ditarikan oleh perempuan dengan kipas. Gerakannya sangat lambat dan anggun, diiringi oleh hentakan gendang (ganrang) yang bertalu-talu dan menggelegar.",
        significance: "Menggambarkan kesabaran, kelembutan perempuan Makassar di tengah kerasnya tabiat para pria pelaut.",
        citationIds: ["sulsel-ref-wbtb"],
      },
      {
        id: "sulsel-cul-item-04",
        category: "tradition",
        title: "Rambu Solo'",
        description: "Upacara pemakaman adat Toraja yang melibatkan penyembelihan puluhan hingga ratusan kerbau belang (tedong bonga) dan babi, serta perarakan jenazah (tau-tau) ke makam tebing batu gantung.",
        significance: "Merupakan ritual peralihan jiwa menuju dunia arwah (Puya). Biayanya sangat mahal dan membutuhkan persiapan berbulan-bulan hingga bertahun-tahun.",
        citationIds: ["sulsel-ref-toraja"],
      }
    ],
    referenceIds: ["sulsel-ref-wbtb", "sulsel-ref-unesco-pinisi", "sulsel-ref-toraja"],
  },

  language: {
    introduction: [
      {
        id: "sulsel-lang-01",
        content: "Mayoritas masyarakat menggunakan Bahasa Bugis, Bahasa Makassar, dan Bahasa Toraja. Secara historis, bahasa Bugis dan Makassar menggunakan sistem aksara tersendiri yang disebut Aksara Lontara.",
        citationIds: ["sulsel-ref-petabahasa"],
      }
    ],
    scripts: [
      {
        id: "sulsel-script-01",
        name: "Aksara Lontara",
        description: "Aksara berjenis abugida turunan aksara Brahmi (diperkirakan berkembang dari Kawi/Pallawa kuno) dengan bentuk dasar menyerupai belah ketupat atau sulur daun. Dinamakan lontara karena naskah kunonya ditulis di atas daun lontar.",
        citationIds: ["sulsel-ref-unesco-lagaligo"],
      }
    ],
    vocabulary: [
      { id: "sulsel-vocab-01", word: "Aga Kareba", meaning: "Apa kabar? (Bahasa Bugis)", citationIds: ["sulsel-ref-petabahasa"] },
      { id: "sulsel-vocab-02", word: "Kurru Sumanga", meaning: "Terima kasih / ungkapan penyemangat (Bahasa Toraja)", citationIds: ["sulsel-ref-petabahasa"] },
      { id: "sulsel-vocab-03", word: "Tarra'", meaning: "Sangat / sekali (contoh: Bajik Tarra' = Sangat baik) (Bahasa Makassar)", citationIds: ["sulsel-ref-petabahasa"] },
      { id: "sulsel-vocab-04", word: "Siri'", meaning: "Harga diri / rasa malu (Bugis-Makassar)", citationIds: ["sulsel-ref-sejarah-gowa"] },
    ],
    referenceIds: ["sulsel-ref-petabahasa", "sulsel-ref-unesco-lagaligo", "sulsel-ref-sejarah-gowa"],
  },

  culinary: {
    introduction: [
      {
        id: "sulsel-culi-01",
        content: "Kuliner Makassar terkenal akan hidangan berbahan dasar daging sapi berdaging kuat (jerohan) dengan bumbu kacang atau rempah pekat, serta olahan makanan laut segar.",
        citationIds: ["sulsel-ref-kuliner"],
      }
    ],
    items: [
      {
        id: "sulsel-culi-item-01",
        name: "Coto Makassar",
        description: "Sup daging sapi dan jerohan sapi yang direbus dalam waktu lama dengan kuah rempah kacang tanah sangrai. Disajikan bersama ketupat (burasa).",
        citationIds: ["sulsel-ref-kuliner", "sulsel-ref-wbtb"],
      },
      {
        id: "sulsel-culi-item-02",
        name: "Sop Konro",
        description: "Sup iga sapi berkuah hitam pekat yang bumbunya berasal dari kluwek (pangi), ketumbar, lengkuas, dan asam jawa. Varian keringnya disebut Konro Bakar.",
        citationIds: ["sulsel-ref-kuliner"],
      },
      {
        id: "sulsel-culi-item-03",
        name: "Pallubasa",
        description: "Mirip Coto, namun kuahnya dicampur dengan kelapa parut sangrai (serundeng) dan sering disajikan dengan tambahan telur bebek mentah (alas) yang diaduk ke kuah panas.",
        citationIds: ["sulsel-ref-kuliner"],
      },
      {
        id: "sulsel-culi-item-04",
        name: "Pisang Epe",
        description: "Pisang kepok setengah matang yang dibakar, dipipihkan (di-epe), lalu disiram saus gula merah leleh cair dengan tambahan durian atau nangka.",
        citationIds: ["sulsel-ref-wbtb"],
      },
      {
        id: "sulsel-culi-item-05",
        name: "Kapurung",
        description: "Kuliner khas Luwu/Palopo (Bugis Utara) berbahan dasar sagu yang dibentuk bulat, disajikan dalam kuah asam pedas berisi sayuran, ikan teri, atau ikan cakalang.",
        citationIds: ["sulsel-ref-wbtb"],
      }
    ],
    referenceIds: ["sulsel-ref-kuliner", "sulsel-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "sulsel-bio-01",
        content: "Flora dan fauna di Sulawesi Selatan merupakan perpaduan endemik Wallacea yang sangat unik. Kawasan karst raksasa menyediakan mikroklimat untuk evolusi ribuan spesies kupu-kupu dan primata kecil.",
        citationIds: ["sulsel-ref-bantimurung"],
      }
    ],
    ecosystems: [
      {
        id: "sulsel-eco-01",
        content: "Taman Nasional Bantimurung-Bulusaraung dijuluki oleh naturalis Alfred Russel Wallace sebagai 'The Kingdom of Butterfly' karena memiliki ratusan spesies kupu-kupu endemik. Lanskapnya didominasi oleh menara karst yang menjulang.",
        citationIds: ["sulsel-ref-bantimurung", "sulsel-ref-maros-geopark"],
      }
    ],
    species: [
      {
        id: "sulsel-spec-01",
        category: "fauna",
        name: "Tarsius (Tarsius fuscus / Tarsius tarsier)",
        status: "Vulnerable",
        description: "Primata nokturnal endemik berukuran sangat kecil (seukuran genggaman tangan) dengan mata raksasa. Sering ditemukan di celah pohon fikus atau batu karst.",
        citationIds: ["sulsel-ref-bantimurung"], // Included in Bantimurung documentation
      },
      {
        id: "sulsel-spec-02",
        category: "fauna",
        name: "Kupu-Kupu Helena (Troides helena)",
        status: "Protected",
        description: "Spesies kupu-kupu bersayap burung (birdwing) yang berukuran besar dengan perpaduan warna hitam dan kuning emas mencolok, dilindungi keberadaannya di Bantimurung.",
        citationIds: ["sulsel-ref-bantimurung"],
      }
    ],
    referenceIds: ["sulsel-ref-bantimurung", "sulsel-ref-maros-geopark"],
  },

  destinations: {
    introduction: [
      {
        id: "sulsel-dest-01",
        content: "Destinasi wisata mencakup keindahan perkotaan pesisir, susur pulau-pulau kecil, hingga wisata budaya antropologis tingkat dunia di Toraja.",
        citationIds: ["sulsel-ref-tourism"],
      }
    ],
    items: [
      {
        id: "sulsel-dest-item-01",
        category: "culture",
        name: "Londa & Kete Kesu (Tana Toraja)",
        description: "Kompleks pemakaman batu gantung (Londa) dan desa adat Tongkonan (Kete Kesu) yang berusia ratusan tahun. Wisatawan dapat melihat deretan patung kayu representasi orang meninggal (Tau-Tau).",
        citationIds: ["sulsel-ref-toraja", "sulsel-ref-tourism"],
      },
      {
        id: "sulsel-dest-item-02",
        category: "nature",
        name: "Rammang-Rammang (Maros)",
        description: "Kawasan gugusan pegunungan karst terbesar di Indonesia, dilalui sungai tenang beralas nipah yang bisa disusuri dengan perahu kecil. Bagian dari UNESCO Global Geopark.",
        citationIds: ["sulsel-ref-maros-geopark"],
      },
      {
        id: "sulsel-dest-item-03",
        category: "nature",
        name: "Pantai Tanjung Bira (Bulukumba)",
        description: "Pantai berpasir putih sehalus tepung di ujung selatan semenanjung. Tempat wisata ini juga dekat dengan sentra pembuatan kapal Pinisi di Tanah Beru.",
        citationIds: ["sulsel-ref-tourism", "sulsel-ref-unesco-pinisi"],
      },
      {
        id: "sulsel-dest-item-04",
        category: "culture",
        name: "Pantai Losari & Benteng Rotterdam",
        description: "Landmark kota Makassar untuk menikmati sunset dan kuliner malam. Tak jauh dari situ terdapat Benteng Fort Rotterdam peninggalan era VOC dan Kerajaan Gowa.",
        citationIds: ["sulsel-ref-tourism"],
      }
    ],
    referenceIds: ["sulsel-ref-tourism", "sulsel-ref-maros-geopark", "sulsel-ref-toraja", "sulsel-ref-unesco-pinisi"],
  },

  stories: {
    introduction: [
      {
        id: "sulsel-story-01",
        content: "Cerita Bugis didominasi sastra epik, sementara mitologi Toraja sangat terfokus pada asal usul manusia (Aluk Todolo) dari dunia atas turun ke bumi.",
        citationIds: ["sulsel-ref-unesco-lagaligo", "sulsel-ref-toraja"],
      }
    ],
    stories: [
      {
        id: "sulsel-story-item-01",
        title: "Epos I La Galigo",
        description: "Menceritakan kisah Sawerigading, pangeran Luwu yang jatuh cinta pada saudari kembarnya sendiri (We Tenriabeng), namun dilarang menikahinya. Untuk memadamkan patah hatinya, ia berlayar membelah lautan dan akhirnya menemukan istrinya di negeri Tiongkok yang sangat mirip dengan saudarinya.",
        citationIds: ["sulsel-ref-unesco-lagaligo"],
      },
      {
        id: "sulsel-story-item-02",
        title: "Bissu",
        description: "Pendeta multi-gender (androgini) Bugis purba yang dipercaya sebagai jembatan antara manusia dan para dewa (boting langi). Bissu memainkan peran krusial menjaga keseimbangan kosmis dan pusaka keraton (arajang).",
        citationIds: ["sulsel-ref-wbtb", "sulsel-ref-unesco-lagaligo"],
      }
    ],
    referenceIds: ["sulsel-ref-unesco-lagaligo", "sulsel-ref-toraja", "sulsel-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "sulsel-cont-01",
        content: "Sebagai ibu kota Indonesia Timur, Makassar terus dibangun dengan infrastruktur pesisir (Center Point of Indonesia) yang mengubah wajah pelabuhan kunonya menjadi megapolitan pesisir modern.",
        citationIds: ["sulsel-ref-bps"],
      }
    ],
    economy: [
      {
        id: "sulsel-cont-02",
        content: "Provinsi ini adalah lumbung pangan utama, memproduksi padi, jagung, dan kakao yang menyuplai kawasan timur Indonesia. Sektor maritim (perikanan tangkap dan tambak udang/bandeng) juga sangat dominan.",
        citationIds: ["sulsel-ref-bps"],
      }
    ],
    development: [
      {
        id: "sulsel-cont-03",
        content: "Proyek strategis nasional Kereta Api Trans Sulawesi (rute Makassar-Parepare) telah diresmikan, menandai kebangkitan transportasi massal logistik dan penumpang pertama di Pulau Sulawesi.",
        citationIds: ["sulsel-ref-bps"],
      }
    ],
    referenceIds: ["sulsel-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "sulsel-trv-01",
        content: "Bandara Internasional Sultan Hasanuddin (UPG) merupakan hub transit bagi penerbangan ke Papua, Maluku, dan Sulawesi lainnya. Perjalanan ke Toraja memakan waktu darat 8-10 jam dari Makassar, atau via penerbangan perintis pendek.",
        citationIds: ["sulsel-ref-tourism"],
      }
    ],
    etiquette: [
      {
        id: "sulsel-trv-etq-01",
        content: "Saat menghadiri upacara kematian di Toraja, tamu disarankan mengenakan pakaian hitam atau gelap, dan sangat sopan jika membawa oleh-oleh berupa kopi gula pasir (rokok/babi) untuk keluarga yang berduka. Jangan menunjuk dengan tangan kiri atau menyentuh tulang belulang di goa makam.",
        citationIds: ["sulsel-ref-toraja"],
      }
    ],
    itineraries: [
      {
        id: "sulsel-itin-01",
        title: "City Break & Karst",
        duration: 3,
        days: [
          { day: 1, activities: ["Tiba di Makassar", "Fort Rotterdam", "Sunset di Losari & Kuliner Pisang Epe"] },
          { day: 2, activities: ["Rammang-Rammang (Maros Geopark)", "Gua Leang-Leang", "Makan Pallubasa"] },
          { day: 3, activities: ["Belanja suvenir/Batik Lontara", "Menuju Bandara"] }
        ],
        citationIds: ["sulsel-ref-tourism"]
      },
      {
        id: "sulsel-itin-02",
        title: "Eksplorasi Mistis Tana Toraja",
        duration: 5,
        days: [
          { day: 1, activities: ["Perjalanan Darat Makassar - Toraja (Rantepao)"] },
          { day: 2, activities: ["Desa Kete Kesu", "Makam Batu Londa"] },
          { day: 3, activities: ["Makam Pohon Bayi (Kambira)", "Bori Parinding (Batu Megalitik)"] },
          { day: 4, activities: ["Menghadiri Rambu Solo (jika ada) atau Lemo (Tebing Patung)", "Beli Kopi Toraja"] },
          { day: 5, activities: ["Perjalanan kembali ke Makassar via Palopo (singgah makan Kapurung)"] }
        ],
        citationIds: ["sulsel-ref-tourism", "sulsel-ref-toraja"]
      }
    ],
    referenceIds: ["sulsel-ref-tourism", "sulsel-ref-toraja"],
  },

  referenceIds: localReferences.map(r => r.id),
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
