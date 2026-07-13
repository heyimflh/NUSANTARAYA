# Planning Lengkap — Section 5 Flagship Provinces NUSANTARAYA

<aside>
🏛️

**Dokumen source of truth untuk Section 5 — Flagship Provinces pada halaman `/explore`.** Section ini membentuk jalur eksplorasi terkurasi menuju delapan provinsi dengan materi Atlas terdalam. Pengalaman harus terasa seperti **editorial province showcase**, bukan grid kartu destinasi biasa.

</aside>

---

## 1. Ringkasan Eksekutif

**Flagship Provinces** adalah section kelima halaman `/explore`, ditempatkan setelah pengguna mencoba peta dan memahami satu provinsi melalui Province Summary Panel. Fungsinya bukan mengulang informasi panel, tetapi membantu pengguna menemukan delapan pintu masuk terbaik menuju cerita Nusantara tanpa harus mencari ulang di peta.

Konsep final:

```
Curated Gateway to the Best Stories of Nusantara
```

Versi pengalaman:

```
Delapan provinsi pilihan, delapan cara memahami Indonesia.
```

Section ini menampilkan satu provinsi aktif dalam **Featured Province Stage** berukuran besar, lalu tujuh provinsi lain sebagai rail editorial yang dapat dipilih. Setiap pilihan harus menjelaskan *mengapa provinsi tersebut penting*, menampilkan identitas visual yang kuat, dan memberi jalan langsung menuju Summary Panel, Deep Province Atlas, serta Passport.

<aside>
🎯

**Formula UX final:** Peta membebaskan pengguna memilih → Flagship Section mengkurasi pilihan → Summary memberi orientasi → Atlas memperdalam → Passport menyimpan perjalanan.

</aside>

### 1.1 Keputusan utama

1. Tepat **delapan** flagship ditampilkan.
2. Hanya **satu** flagship menjadi featured province pada satu waktu.
3. Desktop memakai **featured stage besar + vertical side rail**.
4. Tablet memakai **featured stage + horizontal rail**.
5. Mobile memakai **stacked featured card + snap carousel**.
6. Aset memakai ulang `hero.webp` dan `thumb.webp` dari sistem provinsi existing.
7. Section tidak memuat gambar budaya, kuliner, destinasi, atau konten Atlas mendalam.
8. State flagship tersinkron dengan `selectedProvinceId` dari peta bila provinsi terpilih termasuk flagship.
9. CTA **Lihat Ringkasan** memakai sistem Section 4; tidak membuat modal/detail baru.
10. CTA **Buka Atlas Provinsi** menuju route canonical `/provinsi/[slug]`.
11. Passport memakai store/localStorage existing dan harus idempotent.
12. Autoplay tidak diperlukan; kontrol tetap di tangan pengguna.

---

## 2. Posisi dalam Halaman `/explore`

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
5. Flagship Provinces ← SECTION INI
6. Explore by Layer
7. Recommended Journey
8. Regional Explorer
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Hubungan dengan section sebelumnya

Section 4 menjawab:

> “Apa yang membuat provinsi yang saya pilih menarik?”
> 

Section 5 menjawab:

> “Jika saya ingin pilihan terbaik, provinsi mana yang sebaiknya saya jelajahi berikutnya?”
> 

### 2.2 Hubungan dengan Section 6

Section 5 mengkurasi berdasarkan **provinsi**. Section 6 mengubah cara eksplorasi menjadi berdasarkan **minat/layer** seperti budaya, rasa, alam, sejarah, rempah, dan masa depan.

Transisi naratif:

```
Delapan provinsi pilihan
→ bandingkan karakter dan pilar dominan
→ pilih cara eksplorasi berdasarkan minat
```

### 2.3 Anchor wajib

```
#flagship-provinces
```

CTA dari Map Hero atau bagian lain yang menargetkan flagship harus menuju anchor ini tanpa menutupi heading oleh sticky navigation.

---

## 3. Quality Gate Sebelum Implementasi

Section 5 baru boleh dipoles penuh setelah pengalaman Section 4 stabil.

- [ ]  Summary Panel dapat dibuka dari peta dan search.
- [ ]  Pergantian provinsi tidak merusak panel.
- [ ]  CTA **Buka Atlas Provinsi** bekerja.
- [ ]  Route `/provinsi/[slug]` dapat dibuka langsung.
- [ ]  Browser Back kembali ke peta dengan state yang benar.
- [ ]  Passport tersimpan dan tidak menghasilkan duplikasi.
- [ ]  Tidak ada chapter navigation menuju bab kosong.
- [ ]  Mobile Summary Sheet dan Deep Atlas responsif.
- [ ]  Lint, type-check, validator, dan production build lulus.

Jika intercepted route belum stabil, gunakan standalone route terlebih dahulu. Section 5 tidak boleh bergantung pada implementasi modal premium yang masih rapuh.

---

## 4. Tujuan Produk dan UX

### 4.1 Tujuan pengguna

Pengguna dapat:

1. Menemukan provinsi unggulan tanpa mencari di peta.
2. Memahami perbedaan karakter delapan flagship dalam beberapa detik.
3. Membandingkan heritage, alam, rasa, maritim, kreativitas, dan masa depan.
4. Membuka Summary Panel dari showcase.
5. Masuk langsung ke Deep Province Atlas.
6. Menambah atau menghapus provinsi dari Passport.
7. Mendapat petunjuk eksplorasi berikutnya.
8. Berpindah flagship menggunakan mouse, touch, atau keyboard.

### 4.2 Tujuan emosional

Pengguna harus merasa:

```
Ini bukan daftar provinsi.
Ini adalah delapan editorial cover story tentang Indonesia.
Setiap pilihan punya alasan, suasana, dan jalur eksplorasi yang berbeda.
```

### 4.3 Tujuan demo kompetisi

- Memperlihatkan kedalaman konten tanpa membuka seluruh Atlas.
- Menunjukkan bahwa sistem peta, data, route, dan Passport saling terhubung.
- Menghadirkan visual premium setelah section peta yang app-like.
- Menjadi jeda editorial sebelum pengalaman filter pada Section 6.
- Mendorong pembukaan minimal satu Atlas flagship selama demo.

### 4.4 KPI produk yang disarankan

- `flagship_selector_changed`: interaksi selector per sesi.
- `flagship_summary_opened`: CTR menuju Summary Panel.
- `flagship_atlas_opened`: CTR menuju Atlas.
- `flagship_passport_toggled`: konversi Passport.
- `flagship_section_completed`: pengguna melihat minimal 4 dari 8 flagship.
- Target awal: ≥35% pengguna yang mencapai section berinteraksi dengan minimal satu selector.

---

## 5. Daftar Flagship Final

Urutan editorial default:

1. **DI Yogyakarta** — gerbang warisan, pendidikan, dan kreativitas.
2. **Bali** — tradisi hidup dan lanskap budaya global.
3. **Sumatera Barat** — identitas Minangkabau, arsitektur, dan rasa.
4. **Kalimantan Timur** — Mahakam, hutan, kebudayaan lokal, dan IKN.
5. **Sulawesi Selatan** — Bugis–Makassar–Toraja, Pinisi, dan Lontara.
6. **Maluku** — rempah, kepulauan, dan jaringan maritim dunia.
7. **Nusa Tenggara Timur** — tenun, Komodo, megalitik, dan pulau-pulau.
8. **Papua Barat Daya** — Raja Ampat, budaya pesisir, dan biodiversitas laut.

### 5.1 Aturan urutan

- Urutan default tidak perlu alfabetis; gunakan ritme editorial dari barat/tengah/timur dan variasi tema.
- Provinsi aktif dari peta boleh menggantikan default saat section pertama kali terlihat.
- Setelah pengguna memilih selector secara manual, jangan mengubah aktif flagship secara otomatis akibat hover atau timer.
- Urutan rail tetap stabil agar pengguna membangun memori spasial.

---

## 6. Copywriting Final Section

### Eyebrow

```
Provinsi Unggulan
```

### Heading

```
Delapan Gerbang Menuju Cerita Nusantara
```

### Subheading

```
Mulai perjalanan dari delapan provinsi dengan materi Atlas terdalam—mewakili budaya, rasa, alam, sejarah, maritim, dan masa depan Indonesia.
```

### Supporting microcopy

```
Pilih satu provinsi untuk menemukan alasan, ikon, dan jalur Atlas terbaiknya.
```

### Status accessible

```
Menampilkan DI Yogyakarta, provinsi unggulan 1 dari 8.
```

### Label metadata

- `Provinsi unggulan`
- `Pilar dominan`
- `Materi Atlas`
- `Tiga jejak utama`
- `Mengapa provinsi ini penting`

### CTA

- Primary: `Buka Atlas Provinsi`
- Secondary: `Lihat Ringkasan`
- Passport default: `Tambah ke Passport`
- Passport saved: `Tersimpan di Passport ✓`

---

## 7. Creative Direction

### 7.1 Konsep visual

```
Museum editorial × premium travel feature × modern Indonesian interface
```

Section harus terasa seperti halaman feature majalah premium yang dapat dioperasikan, bukan komponen katalog.

### 7.2 Prinsip komposisi

- Satu gambar besar menjadi focal point.
- Informasi disusun seperti editorial dossier, bukan dashboard.
- Rail terlihat sebagai daftar bab atau cover story.
- Gunakan ruang kosong besar agar visual bernapas.
- Warna wilayah memberi identitas tanpa mengalahkan brand.
- Gold hanya menandai flagship, focus, dan aksi terpenting.
- Setiap pergantian provinsi mempertahankan ukuran layout agar tidak terjadi layout shift.

### 7.3 Yang harus dihindari

- Grid `4 × 2` berisi delapan kartu identik.
- Masonry acak tanpa hierarki.
- Carousel penuh yang menyembunyikan konteks featured province.
- Seluruh gambar bergerak bersamaan.
- Parallax besar yang mengganggu keterbacaan.
- Gold pada semua border, icon, label, dan tombol.
- Copy panjang pada thumbnail kecil.
- Duplikasi seluruh fakta Summary Panel.
- Auto-rotate cepat.
- Penggunaan glassmorphism berlebihan.

---

## 8. Visual Design System

### 8.1 Warna utama

```
Ivory Background   #FFFDF8
Warm Canvas        #F8F4EA
Navy Ink           #0D1B2A
Flagship Gold      #C9A84C
Warm Border        #E8E0CE
Muted Text         #5E6570
```

### 8.2 Warna wilayah

```
Sumatera           #B85C38
Jawa               #2B4C8C
Kalimantan         #1A5C3A
Sulawesi           #D4691E
Bali–Nusa Tenggara #6B3FA0
Maluku             #1B7A7A
Papua              #1A4A7A
```

Gunakan regional color pada:

- Hairline accent.
- Small region chip.
- Progress/active marker.
- Image gradient kecil.
- Focused thumbnail detail.

Regional color maksimal sekitar 10–12% area visual section.

### 8.3 Tipografi

- Eyebrow: Inter Semibold, 11–12px, uppercase, tracking `0.12em`.
- Section heading: Playfair Display, 52–72px desktop; 38–48px tablet; 34–42px mobile.
- Province name: Playfair Display, 48–68px desktop; 36–48px tablet; 32–40px mobile.
- Tagline: Inter Medium, 16–19px.
- Body: Inter Regular, 14–16px, line-height 1.6–1.75.
- Rail index: Playfair Display atau Inter Semibold, 14–18px.
- Metadata: Inter Medium, 12–13px.

### 8.4 Surface

Featured stage:

```css
background: rgba(255, 253, 248, 0.96);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 30px 90px rgba(13, 27, 42, 0.10);
```

Rail item:

```css
background: transparent;
border-bottom: 1px solid rgba(232, 224, 206, 0.9);
```

Active rail item boleh memiliki ivory solid, gold indicator 2–3px, dan shadow tipis. Hindari menjadikan semua rail item card bershadow.

### 8.5 Ornamen

- Motif Nusantara maksimal opacity 2–3%.
- Tempatkan di tepi section atau area kosong, bukan tepat di belakang copy.
- Gunakan satu pattern global existing, bukan motif berbeda untuk tiap provinsi.
- Ornamen tidak ikut bergerak saat province berubah.

---

## 9. Arsitektur Konten Featured Province Stage

Urutan informasi wajib:

1. Hero image.
2. Index dan badge flagship.
3. Nama provinsi.
4. Region.
5. Tagline.
6. Editorial hook.
7. Alasan menjadi flagship.
8. Tiga signature highlights.
9. Dominant pillar.
10. Jumlah materi Atlas.
11. CTA Summary.
12. CTA Atlas.
13. Passport action.
14. Hint/rekomendasi provinsi berikutnya.

### 9.1 Batas copy

- Tagline: maksimal 8–12 kata.
- Editorial hook: maksimal 90–130 karakter.
- Why flagship: maksimal 220–320 karakter desktop; mobile dapat dipangkas ke 160–220 karakter.
- Signature: tepat 3 item, masing-masing maksimal 2–4 kata.
- Nama pilar: satu label utama.
- Jangan menampilkan daftar fakta administratif panjang.

### 9.2 Perbedaan dari Summary Panel

Featured Stage menekankan:

- Alasan kuratorial.
- Suasana dan identitas editorial.
- Pilar dominan.
- Perbandingan dengan flagship lain.

Summary Panel menekankan:

- Ibu kota dan identitas cepat.
- Fakta ringkas.
- Tiga Atlas preview.
- Context note.

Tidak boleh menyalin struktur Summary Panel ke Featured Stage.

---

## 10. Blueprint Layout Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ PROVINSI UNGGULAN                                                           │
│ Delapan Gerbang Menuju Cerita Nusantara                                     │
│ Subheading                                                                  │
├──────────────────────────────────────────────────────┬───────────────────────┤
│                                                      │ 01 DI YOGYAKARTA      │
│              FEATURED HERO IMAGE                     │ 02 Bali               │
│              16:10 / cinematic                       │ 03 Sumatera Barat     │
│                                                      │ 04 Kalimantan Timur   │
│ gradient + regional accent                           │ 05 Sulawesi Selatan   │
├──────────────────────────────┬───────────────────────┤ 06 Maluku             │
│ 01 · FLAGSHIP · JAWA         │ PILAR DOMINAN         │ 07 NTT                │
│ DI YOGYAKARTA                │ Tradisi & Narasi      │ 08 Papua Barat Daya   │
│ Warisan yang terus hidup     │ 65 materi*            │                       │
│ Editorial hook               │ [Passport]            │ active item gold      │
│ Why flagship                 │                       │                       │
│ [Keraton] [Batik] [Gudeg]    │                       │                       │
│ [Lihat Ringkasan] [Buka Atlas Provinsi]              │                       │
└──────────────────────────────────────────────────────┴───────────────────────┘
```

`materialCount` harus dibaca dari source data existing; angka pada wireframe hanya ilustrasi.

### 10.1 Rasio desktop

- Container maksimum: 1280–1440px.
- Main stage: 72–78% lebar.
- Rail: 22–28% lebar.
- Hero: 16:9 atau 16:10.
- Minimum stage height: 640–760px tergantung viewport.
- Rail memiliki tinggi sama dengan stage, tetapi tidak membuat nested scroll pada viewport normal.

### 10.2 Alignment

- Header section mengikuti grid halaman.
- Province copy sejajar dengan tepi kiri hero.
- Rail index membentuk ritme vertikal kuat.
- CTA tetap terlihat tanpa perlu scroll internal.
- Material count dan pillar tidak boleh lebih dominan daripada province name.

---

## 11. Blueprint Tablet

Untuk lebar 768–1023px:

```
Section header
Featured image
Province identity + copy
Metadata + actions
Horizontal editorial rail
```

Aturan:

- Rail berubah horizontal dan dapat di-scroll.
- Kartu rail memperlihatkan thumbnail, index, nama, dan region saja.
- Featured stage tetap satu kesatuan; jangan memisahkan hero dan copy menjadi dua card.
- Gunakan `scroll-snap-type: x mandatory` pada rail jika interaksi terasa natural.
- Tampilkan 2.2–3.2 rail cards untuk memberi affordance bahwa daftar dapat digeser.
- Navigation arrow opsional jika touch dan mouse sama-sama didukung.

---

## 12. Blueprint Mobile

```
Eyebrow
Heading
Subheading

Featured hero 4:3 / 5:4
Index · Flagship · Region
Province name
Tagline
Editorial hook
Why flagship
3 signature chips
Pillar + material count
Primary CTA
Secondary CTA + Passport

Snap carousel: 1.15–1.35 cards terlihat
```

### 12.1 Mobile rules

- Featured stage menjadi stacked card, bukan side-by-side.
- Hero menggunakan ratio 4:3 atau 5:4 dengan focal point metadata.
- Heading dan province name tidak boleh terpotong.
- Why flagship maksimal 4–6 baris; sediakan `Baca selengkapnya` hanya bila benar-benar dibutuhkan.
- CTA Atlas full-width.
- Summary dan Passport dapat berbagi row jika masing-masing tetap ≥44px.
- Carousel memiliki momentum native dan snap lembut.
- Tidak ada drag library berat jika CSS scroll snap cukup.
- Indicator `1 / 8` terlihat, tetapi tidak menggantikan label nama.
- Padding horizontal 20–24px.
- Tidak ada horizontal overflow dari parent section.

### 12.2 Mobile kecil ≤390px

- Perpendek editorial hook.
- Signature chip boleh wrap maksimal dua baris.
- Metadata menjadi dua item compact.
- Jangan paksa tiga tombol dalam satu row.
- Gunakan thumbnail card minimal 148–176px agar nama panjang terbaca.

---

## 13. Flagship Navigation System

### 13.1 Desktop rail item

Setiap item berisi:

- Nomor `01–08`.
- Thumbnail kecil 3:2 atau 1:1.
- Nama provinsi.
- Region.
- Short hook 1 baris opsional.
- Active gold indicator.
- Passport saved marker kecil opsional.

### 13.2 Active state

- `aria-current="true"` atau `aria-pressed="true"` sesuai elemen.
- Gold indicator jelas tetapi tidak memenuhi seluruh card.
- Thumbnail opacity 1; nonaktif 0.72–0.88.
- Nama aktif navy penuh; nonaktif muted navy.
- Indicator juga memiliki bentuk/garis, bukan warna saja.

### 13.3 Hover state

- Thumbnail sedikit naik brightness.
- Hook dapat muncul dengan opacity transition.
- Hover tidak mengganti featured province secara permanen.
- Selection hanya melalui click, tap, Enter, atau Space.

### 13.4 Keyboard

- Tab masuk ke rail group.
- Arrow Up/Down pada rail vertikal.
- Arrow Left/Right pada rail horizontal.
- Home menuju flagship pertama.
- End menuju flagship terakhir.
- Enter/Space memilih.
- Focus ring selalu terlihat.

### 13.5 Touch

- Seluruh card menjadi target sentuh.
- Minimum target 44×44px.
- Jangan meletakkan tombol kecil bertumpuk di dalam selector.
- Passport action tetap hanya di Featured Stage, bukan setiap rail item.

---

## 14. Editorial Direction per Flagship

### 14.1 DI Yogyakarta

- **Tagline:** Warisan yang terus belajar dan mencipta.
- **Editorial hook:** Warisan keraton, pendidikan, dan kreativitas.
- **Why flagship:** Mempertemukan tradisi Jawa, ruang pendidikan, seni pertunjukan, batik, kuliner, dan ekonomi kreatif dalam kota yang terus berkembang.
- **Signatures:** Keraton · Batik · Gudeg.
- **Dominant pillar:** Tradisi.
- **Visual anchor:** Keraton, sumbu filosofis, atau suasana budaya Yogyakarta yang terang.

### 14.2 Bali

- **Tagline:** Tradisi hidup dalam lanskap dunia.
- **Editorial hook:** Tradisi hidup, lanskap budaya, dan perjalanan global.
- **Why flagship:** Menunjukkan bagaimana ritual, arsitektur, seni, alam, dan pariwisata dapat membentuk identitas daerah yang dikenal dunia tanpa kehilangan akar lokal.
- **Signatures:** Pura · Subak · Tari Bali.
- **Dominant pillar:** Yatra atau Tradisi.
- **Visual anchor:** Lanskap subak atau pura dengan komposisi yang menghormati konteks budaya.

### 14.3 Sumatera Barat

- **Tagline:** Identitas matrilineal dalam arsitektur dan rasa.
- **Editorial hook:** Matrilineal Minangkabau, Rumah Gadang, dan rendang.
- **Why flagship:** Menghubungkan struktur sosial Minangkabau, arsitektur ikonik, tradisi merantau, sastra lisan, dan kuliner yang memiliki pengaruh global.
- **Signatures:** Rumah Gadang · Rendang · Minangkabau.
- **Dominant pillar:** Rasa atau Tradisi.
- **Visual anchor:** Rumah Gadang dengan lanskap Sumatera Barat.

### 14.4 Kalimantan Timur

- **Tagline:** Hutan, sungai, dan gerbang masa depan Indonesia.
- **Editorial hook:** Mahakam, kebudayaan Dayak–Paser, hutan, dan IKN.
- **Why flagship:** Menyatukan ekologi Kalimantan, jalur Sungai Mahakam, keberagaman budaya lokal, industri, konservasi, dan pembangunan pusat pemerintahan baru.
- **Signatures:** Mahakam · Budaya Dayak–Paser · IKN.
- **Dominant pillar:** Masa Depan.
- **Visual anchor:** Mahakam, hutan, atau komposisi yang menghubungkan alam dan pembangunan baru.

### 14.5 Sulawesi Selatan

- **Tagline:** Laut, aksara, dan peradaban pelaut.
- **Editorial hook:** Bugis–Makassar–Toraja, Pinisi, dan Lontara.
- **Why flagship:** Memperlihatkan pertemuan tradisi maritim, arsitektur dataran tinggi, aksara, perdagangan, dan jaringan perjalanan yang membentuk Indonesia timur.
- **Signatures:** Pinisi · Lontara · Toraja.
- **Dominant pillar:** Aksara atau Yatra.
- **Visual anchor:** Pinisi atau lanskap Toraja dengan crop yang tidak stereotip.

### 14.6 Maluku

- **Tagline:** Dari kepulauan rempah menuju dunia.
- **Editorial hook:** Kepulauan rempah dan jaringan maritim dunia.
- **Why flagship:** Menempatkan Maluku sebagai simpul penting sejarah global melalui pala, cengkeh, pelayaran, benteng, musik, dan kehidupan antarpulau.
- **Signatures:** Banda · Pala · Cengkeh.
- **Dominant pillar:** Sejarah atau Rasa.
- **Visual anchor:** Banda Neira, kepulauan, atau rempah dalam konteks lanskap.

### 14.7 Nusa Tenggara Timur

- **Tagline:** Pulau-pulau yang menenun alam dan ingatan.
- **Editorial hook:** Tenun, Komodo, megalitik, dan keragaman kepulauan.
- **Why flagship:** Menggabungkan ekologi unik, warisan megalitik, tradisi tenun, desa adat, dan perjalanan antarpulau yang kaya identitas lokal.
- **Signatures:** Tenun Ikat · Komodo · Megalitik.
- **Dominant pillar:** Alam atau Tradisi.
- **Visual anchor:** Tenun dalam konteks komunitas, lanskap kering, atau kepulauan Komodo.

### 14.8 Papua Barat Daya

- **Tagline:** Laut paling kaya, cerita pesisir yang hidup.
- **Editorial hook:** Raja Ampat, budaya pesisir, dan biodiversitas laut.
- **Why flagship:** Menampilkan hubungan antara masyarakat pesisir, pulau karst, konservasi, pengetahuan lokal, dan salah satu ekosistem laut terkaya di dunia.
- **Signatures:** Raja Ampat · Budaya Pesisir · Laut Papua.
- **Dominant pillar:** Alam.
- **Visual anchor:** Lanskap Raja Ampat yang kuat tetapi tidak menghapus konteks manusia dan budaya pesisir.

<aside>
⚠️

Copy editorial di atas adalah arahan presentasi. Fakta budaya, nama komunitas, jumlah materi, dan klaim sejarah tetap harus berasal dari source data terkurasi serta melewati review sensitivitas budaya.

</aside>

---

## 15. Data Model

```tsx
export type FlagshipProvince = {
  provinceId: string;
  slug: string;
  name: string;
  region: string;
  index: number;
  tagline: string;
  editorialHook: string;
  whyFlagship: string;
  signatures: [string, string, string];
  dominantPillar: string;
  materialCount: number;
  heroImage: string;
  thumbnail: string;
  heroAlt: string;
  thumbnailAlt: string;
  regionalColor: string;
  atlasHref: string;
  objectPosition?: string;
  isPassportSaved?: boolean;
};
```

### 15.1 Aturan source of truth

- `name`, `region`, `slug`, `heroImage`, `thumbnail`, `atlasHref`, `materialCount`, dan status flagship berasal dari province data/manifest existing.
- `editorialHook`, `whyFlagship`, `dominantPillar`, dan urutan editorial boleh berada di `flagshipProvinces.ts`.
- Jangan menduplikasi fakta administrasi yang sudah ada pada `provinceSummaryData`.
- Gunakan selector/helper untuk menggabungkan province source dengan editorial metadata.

### 15.2 Bentuk data yang direkomendasikan

```tsx
const flagshipEditorial = {
  "di-yogyakarta": {
    index: 1,
    editorialHook: "Warisan keraton, pendidikan, dan kreativitas.",
    dominantPillar: "tradisi",
    objectPosition: "50% 46%",
  },
};

export const flagshipProvinces = FLAGSHIP_IDS.map((id, index) =>
  composeFlagshipProvince(
    provinceById[id],
    provinceAssets[id],
    flagshipEditorial[id],
    index,
  ),
);
```

### 15.3 Validasi data

- Tepat 8 item.
- Semua `provinceId` unik.
- Semua item berstatus `isFlagship` pada source.
- `atlasHref` sama dengan route canonical.
- `signatures` tepat tiga.
- `materialCount` bukan angka hardcoded di komponen.
- Asset path valid.
- Alt text tidak kosong.
- Regional color valid.

---

## 16. State Contract

```tsx
type FlagshipSectionState = {
  activeFlagshipId: string;
  hasUserInteracted: boolean;
  interactionSource:
    | "initial"
    | "map-sync"
    | "rail"
    | "carousel"
    | "keyboard";
  announcedProvinceId: string | null;
};
```

Props yang direkomendasikan:

```tsx
type FlagshipProvincesSectionProps = {
  provinces: FlagshipProvince[];
  selectedProvinceId: string | null;
  passportProvinceIds: string[];
  onProvinceSelect: (
    provinceId: string,
    source: "card" | "keyboard",
  ) => void;
  onOpenSummary: (provinceId: string) => void;
  onOpenAtlas: (provinceId: string) => void;
  onTogglePassport: (provinceId: string) => void;
};
```

### 16.1 Default active province

Prioritas:

1. Jika `selectedProvinceId` termasuk flagship, gunakan provinsi tersebut.
2. Jika URL/query memiliki flagship valid, gunakan itu.
3. Jika Passport terakhir menyimpan flagship dan kebijakan produk mengizinkan personalisasi, dapat dipakai sebagai enhancement.
4. Fallback ke DI Yogyakarta.

### 16.2 Sinkronisasi dengan peta

- Sebelum user berinteraksi dengan section, perubahan pilihan peta boleh memperbarui `activeFlagshipId`.
- Setelah user memilih rail/carousel, jangan mengganti aktif item secara tiba-tiba hanya karena map state lama melakukan re-render.
- Memilih flagship di section boleh memperbarui `selectedProvinceId`, tetapi Summary Panel hanya dibuka ketika CTA **Lihat Ringkasan** ditekan.
- Jangan auto-scroll ke peta hanya karena active flagship berubah.

---

## 17. Integrasi dengan Section 4

### 17.1 Lihat Ringkasan

```
Klik Lihat Ringkasan
→ set selectedProvinceId
→ set interactionSource = "card"
→ scroll/focus ke Interactive Map
→ buka Province Summary Panel
→ pertahankan active layer dan mode
→ announce selection via aria-live
```

### 17.2 Fokus dan scroll

- Gunakan `scrollIntoView` dengan offset sticky header.
- Fokus menuju heading Summary Panel atau trigger terpilih sesuai pola Section 4.
- `prefers-reduced-motion` menggunakan scroll instan atau minimal.
- Jangan kehilangan posisi pengguna jika panel gagal dibuka; tampilkan fallback link.

### 17.3 Buka Atlas Provinsi

```
Klik Buka Atlas Provinsi
→ simpan map snapshot
→ navigate ke /provinsi/[slug]
→ gunakan intercepted route desktop jika stabil
→ direct page tetap bekerja
→ Browser Back mengembalikan /explore dan state sebelumnya
```

### 17.4 Passport

```
Klik Tambah ke Passport
→ panggil store existing
→ cek id sebelum insert
→ simpan ke localStorage
→ update label tanpa mengubah ukuran layout
→ announce hasil
```

Aturan:

- Operasi idempotent.
- Tidak ada array entry ganda.
- State sinkron dengan Summary Panel dan Atlas.
- Jika localStorage gagal, tampilkan feedback nonblocking.
- Jangan membuat store Passport baru khusus Section 5.

---

## 18. Asset Strategy

### 18.1 Aset wajib

Per flagship:

```
/assets/province/[slug]/hero.webp
/assets/province/[slug]/thumb.webp
```

Reuse:

- Hero untuk Featured Stage.
- Thumbnail untuk rail/carousel.
- Ikon pilar existing.
- Ornamen branding existing.
- Passport icon/store existing.

### 18.2 Tidak dimuat di Section 5

- Foto budaya per bab.
- Foto kuliner.
- Foto destinasi.
- Foto modern/future.
- Timeline image.
- Audio.
- 3D.
- Video loop per provinsi.
- Seluruh payload Deep Atlas.

### 18.3 Image specification

Hero:

- Rasio master 16:9.
- Minimum 1200×675; ideal original lebih besar untuk ekspor responsif.
- Target 150–250 KB WebP/AVIF.
- Focal point aman untuk crop desktop dan mobile.
- Width/height eksplisit.

Thumbnail:

- 600×400 atau setara.
- Rasio 3:2 atau 4:3 konsisten.
- Target 60–120 KB.
- Tetap terbaca pada lebar kecil.

### 18.4 Loading strategy

```
Initial viewport:
- active hero
- thumbnail yang terlihat

After idle / near viewport:
- thumbnail berikutnya

On hover/focus/intent:
- preload hero target

On selection:
- swap hero dengan crossfade

Never:
- preload 8 hero + seluruh Atlas sekaligus
```

### 18.5 Error handling

- Hero gagal: regional gradient + province name + subtle map silhouette.
- Thumbnail gagal: color block + initials/number.
- Jangan menampilkan broken image icon.
- Catat asset error di development.

### 18.6 Credits

Setiap gambar memiliki:

- Sumber.
- Lisensi.
- Creator/attribution bila diwajibkan.
- Tanggal akses optional.
- Catatan crop/edit.

---

## 19. Motion System

### 19.1 Entrance

1. Eyebrow dan heading fade-up.
2. Featured shell opacity `0 → 1` dan scale `0.99 → 1`.
3. Hero muncul tanpa zoom agresif.
4. Copy masuk stagger ringan 40–70ms.
5. Rail muncul sebagai satu kelompok; jangan animasikan delapan kartu berat.

### 19.2 Province change

- Hero crossfade 280–420ms.
- Gunakan dua layer image agar tinggi tidak berubah.
- Copy fade/translate `8–12px` selama 180–260ms.
- Active rail indicator berpindah 180–240ms.
- Metadata angka memakai crossfade, bukan count-up.
- Jangan menjalankan animasi keluar/masuk yang membuat CTA tidak dapat diklik.

### 19.3 Hover

- Image scale maksimal 1.015–1.025.
- Border/indicator transition 160–220ms.
- Button lift maksimal 1–2px.
- Tidak ada tilt 3D besar.

### 19.4 Autoplay

Rekomendasi final: **tanpa autoplay**.

Jika autoplay dipakai sebagai eksperimen:

- Interval minimal 8–10 detik.
- Berhenti permanen setelah interaksi user.
- Pause saat tab tidak aktif.
- Pause saat focus berada di section.
- Nonaktif untuk reduced motion.
- Harus tersedia kontrol pause yang jelas.

### 19.5 Reduced motion

Saat `prefers-reduced-motion: reduce`:

- Tidak ada scale hero.
- Tidak ada stagger.
- Crossfade maksimal 100–120ms atau instan.
- Scroll menuju map tidak smooth.
- Indicator berpindah tanpa spring.

---

## 20. Accessibility

### 20.1 Semantik

```html
<section id="flagship-provinces" aria-labelledby="flagship-heading">
```

- Satu H2 untuk section heading.
- Province name aktif menjadi H3.
- Rail memakai list atau tab-like selector yang semantiknya konsisten.
- CTA Atlas berupa link jika navigasi route.
- CTA Summary berupa button jika membuka state dalam halaman.
- Passport berupa toggle button dengan `aria-pressed`.

### 20.2 Screen reader

- Live region polite mengumumkan provinsi aktif.
- Jangan mengumumkan seluruh whyFlagship pada setiap arrow press.
- Image alt menjelaskan isi visual, bukan mengulang nama file.
- Decorative gradient/pattern memakai `aria-hidden`.
- Nomor `01–08` tidak boleh menjadi satu-satunya label.

### 20.3 Keyboard QA

- Semua selector reachable.
- Urutan focus logis: header → featured actions → rail atau sebaliknya sesuai DOM visual.
- Focus tidak hilang setelah content swap.
- Enter/Space bekerja.
- Arrow navigation tidak mencuri scroll halaman saat focus di luar rail.
- Escape tidak perlu menutup section; hanya dipakai bila ada temporary overlay.

### 20.4 Contrast

- Body text minimum 4.5:1.
- Large heading minimum 3:1.
- Gold tidak dipakai sebagai body text di atas ivory jika kontras tidak cukup.
- Focus ring memiliki kombinasi gold + navy shadow.
- Regional color harus diuji sebelum dipakai untuk teks.

### 20.5 Touch

- Semua target ≥44×44px.
- Jarak antar-action minimal 8px.
- Carousel tidak mengunci vertical scroll.
- Tombol arrow tidak menutupi konten.

---

## 21. Performance Budget

### 21.1 Target

- Interaksi selector terasa <100ms.
- Tidak ada layout shift ketika province berubah.
- Tidak ada long task >200ms akibat animation atau image decode.
- Section tidak meningkatkan LCP halaman karena berada di bawah fold.
- Hero target di-decode sebelum crossfade jika memungkinkan.

### 21.2 Teknik

- `next/image` atau image component existing dengan `sizes` akurat.
- Set `width` dan `height` atau aspect-ratio container.
- Lazy-load section jika jauh di bawah fold.
- Preload hanya active/next intent.
- Memoize composed data.
- Hindari mengimpor full Atlas JSON ke client bundle.
- Pisahkan server data composition dan client interaction bila arsitektur memungkinkan.
- Gunakan CSS transition sebelum menambah animation library baru.

### 21.3 Suggested sizes

```
Desktop featured image: (min-width: 1280px) 900px
Tablet:                 (min-width: 768px)  92vw
Mobile:                                      100vw
```

Sesuaikan dengan container aktual dan DPR melalui image optimization pipeline.

---

## 22. Component Architecture

```
src/
  components/
    explore/
      flagship-provinces/
        FlagshipProvincesSection.tsx
        FlagshipSectionHeader.tsx
        FlagshipFeaturedStage.tsx
        FlagshipFeaturedImage.tsx
        FlagshipIdentity.tsx
        FlagshipEditorialCopy.tsx
        FlagshipMetadata.tsx
        FlagshipSignatureList.tsx
        FlagshipActions.tsx
        FlagshipProvinceRail.tsx
        FlagshipProvinceCard.tsx
        FlagshipCarousel.tsx
        FlagshipProgress.tsx
        FlagshipImageFallback.tsx
        index.ts

  data/
    provinces/
      flagshipProvinces.ts
      flagshipEditorial.ts

  hooks/
    useFlagshipSelection.ts
    useFlagshipMapSync.ts
    useFlagshipKeyboardNavigation.ts
    useFlagshipAssetPreload.ts

  types/
    flagship.ts

  animations/
    flagshipMotion.ts
```

### 22.1 Tanggung jawab komponen

**`FlagshipProvincesSection.tsx`**

- Wrapper semantic.
- Compose header, featured stage, dan navigation.
- Menerima selected province dan Passport state.
- Tidak menyimpan duplikat province source data.

**`FlagshipFeaturedStage.tsx`**

- Render satu provinsi aktif.
- Menjaga shell dan ukuran tetap stabil.
- Mengatur content transition.

**`FlagshipProvinceRail.tsx`**

- Vertical desktop, horizontal tablet/mobile.
- Menangani roving focus atau list keyboard behavior.
- Tidak berisi logic Summary/Atlas.

**`FlagshipProvinceCard.tsx`**

- Selector semantic.
- Thumbnail, index, name, region, active state.
- Touch target aman.

**`FlagshipActions.tsx`**

- Summary.
- Atlas.
- Passport.
- Loading/disabled state jika diperlukan.

**`useFlagshipMapSync.ts`**

- Sinkronisasi satu arah yang terkendali dari map selection.
- Mencegah feedback loop antara map dan section.

---

## 23. Interaction Flows

### 23.1 Entry default

```
Section masuk viewport
→ DI Yogyakarta aktif
→ hero + editorial copy tampil
→ rail menandai item 01
→ tidak ada autoplay
```

### 23.2 Entry dengan map selection flagship

```
User sebelumnya memilih Maluku
→ section masuk viewport
→ Maluku menjadi active flagship
→ rail active pada item 06
→ tidak otomatis membuka panel atau Atlas
```

### 23.3 Entry dengan map selection non-flagship

```
User sebelumnya memilih Aceh
→ section tetap memakai default/last flagship
→ selected province map tidak dihapus
→ tidak memberi kesan Aceh berubah menjadi flagship
```

### 23.4 Selector

```
Klik Kalimantan Timur
→ activeFlagshipId diperbarui
→ preload/decode hero bila belum siap
→ hero crossfade
→ copy dan metadata berubah
→ focus tetap pada selector
→ live region mengumumkan selection
```

### 23.5 Summary CTA

```
Klik Lihat Ringkasan
→ select province in shared map state
→ scroll ke map
→ buka Summary Panel yang benar
→ focus ke panel heading
```

### 23.6 Atlas CTA

```
Klik Buka Atlas Provinsi
→ simpan explore/map snapshot
→ route ke Atlas slug
→ direct route valid
→ Back memulihkan section/map state
```

### 23.7 Passport

```
Klik Tambah ke Passport
→ save once
→ button state berubah tanpa layout shift
→ Summary dan Atlas membaca status yang sama
```

---

## 24. Loading, Empty, dan Error States

### 24.1 Loading data

- Skeleton menjaga aspect ratio final.
- Heading section tetap tampil.
- Featured stage skeleton tidak berkedip.
- Rail dapat menampilkan delapan placeholder tetap.

### 24.2 Image loading

- Tampilkan blur placeholder atau regional gradient.
- Copy tidak menunggu image selesai.
- Crossfade baru dijalankan setelah target image siap bila memungkinkan.

### 24.3 Partial data

- Jika material count tidak tersedia, sembunyikan metadata tersebut.
- Jika editorial hook kosong, gunakan tagline existing.
- Jika whyFlagship kosong, gunakan curated summary pendek—bukan lorem ipsum.
- Signature harus tetap tepat tiga; validasi pada build.

### 24.4 Route unavailable

- CTA Atlas tidak boleh menuju broken link.
- Pada development, validator harus gagal.
- Pada demo fallback, gunakan disabled state `Atlas segera tersedia` hanya bila benar-benar diperlukan.

### 24.5 Section failure

Jika data gagal total:

```
Delapan provinsi unggulan belum dapat dimuat.
[Jelajahi melalui peta]
```

Jangan meninggalkan section kosong.

---

## 25. Analytics Contract

```tsx
type FlagshipAnalyticsPayload = {
  provinceId: string;
  position: number;
  source: "rail" | "carousel" | "map-sync" | "featured-action";
  viewport: "desktop" | "tablet" | "mobile";
  selectedProvinceId?: string | null;
  isPassportSaved?: boolean;
};
```

Events:

```
flagship_section_viewed
flagship_selector_changed
flagship_summary_clicked
flagship_atlas_clicked
flagship_passport_toggled
flagship_carousel_scrolled
flagship_image_failed
```

Aturan:

- Jangan kirim event selector saat initial render.
- Debounce event carousel agar tidak spam.
- Jangan mengirim data sensitif.
- Posisi editorial tetap `1–8`.

---

## 26. SEO dan Content Semantics

- Section heading menjelaskan delapan provinsi unggulan secara natural.
- Semua nama provinsi berada di DOM, bukan hanya di background image.
- Atlas CTA menggunakan href canonical.
- Jangan membuat delapan H3 berat jika hanya satu featured aktif; rail dapat memakai text semantik biasa.
- Copy tidak keyword-stuffed.
- Alt text berfokus pada konten gambar.
- Deep Atlas menangani metadata SEO provinsi; Section 5 tidak perlu metadata route baru.

---

## 27. Responsive Breakpoint Matrix

| Viewport | Featured layout | Navigation | Hero ratio |
| --- | --- | --- | --- |
| ≥1280px | Stage besar + side rail | Vertical 8 items | 16:9 / 16:10 |
| 1024–1279px | Stage + compact side rail | Vertical compact | 16:9 |
| 768–1023px | Stacked stage | Horizontal rail | 16:9 |
| 430–767px | Stacked card | Snap carousel | 4:3 / 5:4 |
| ≤390px | Compact stacked | Snap compact | 4:3 |

Viewport QA minimum:

```
375×667
390×844
430×932
768×1024
1024×768
1280×800
1440×900
1920×1080
```

---

## 28. Testing Plan

### 28.1 Unit/data test

- Tepat delapan flagship.
- Urutan 1–8 stabil.
- Semua slug valid.
- Semua hero/thumbnail path tersedia.
- Signature tepat tiga.
- Material count berasal dari source.
- Atlas href benar.

### 28.2 Interaction test

- Klik seluruh selector.
- Keyboard seluruh selector.
- Rapid switching tidak menghasilkan stale image/copy.
- Summary membuka panel yang benar.
- Atlas membuka route yang benar.
- Passport toggle sinkron.
- Map-selected flagship menjadi aktif.
- Non-flagship map selection tidak merusak section.

### 28.3 Responsive test

- Tidak ada horizontal overflow.
- Rail tidak terpotong.
- Mobile snap nyaman.
- Nama `Nusa Tenggara Timur` dan `Papua Barat Daya` tidak overflow.
- CTA tetap ≥44px.
- Hero crop aman.

### 28.4 Accessibility test

- Keyboard-only.
- Screen reader basic flow.
- Focus visible.
- Live announcement tidak berlebihan.
- Zoom browser 200%.
- Contrast.
- Reduced motion.
- Touch target.

### 28.5 Performance test

- Network 4G throttling.
- CPU throttling.
- Pastikan tidak mengunduh semua deep Atlas assets.
- Image decode saat switching cepat.
- CLS saat copy panjang/pendek berubah.
- Memory setelah melihat seluruh 8 flagship.

### 28.6 Build validation

```
lint
 type-check
 unit/data validator
 production build
 broken-link check
 asset-manifest check
```

---

## 29. Acceptance Criteria

### Functional

- [ ]  Tepat delapan flagship ditampilkan.
- [ ]  Satu flagship menjadi featured province.
- [ ]  Semua selector bekerja.
- [ ]  Active flagship tersinkron dengan map selection yang relevan.
- [ ]  CTA Summary membuka panel provinsi yang benar.
- [ ]  CTA Atlas membuka route yang benar.
- [ ]  Browser Back memulihkan state explore.
- [ ]  Passport tidak membuat data duplikat.
- [ ]  Data menggunakan source existing.
- [ ]  Error/fallback state tersedia.

### Visual

- [ ]  Desktop tidak terlihat seperti grid template.
- [ ]  Featured image menjadi focal point.
- [ ]  Hierarki nama, hook, dan whyFlagship jelas.
- [ ]  Gold digunakan terkontrol.
- [ ]  Warna wilayah tidak mengalahkan brand.
- [ ]  Pergantian gambar/copy tidak menyebabkan layout shift besar.
- [ ]  Ornamen maksimal 2–3% opacity.
- [ ]  Tidak ada nested border berlebihan.

### Responsive

- [ ]  Tablet rail nyaman.
- [ ]  Mobile carousel menggunakan snap yang natural.
- [ ]  Tidak ada horizontal overflow.
- [ ]  Semua target sentuh minimal 44px.
- [ ]  Hero crop aman pada seluruh breakpoint.
- [ ]  CTA tetap mudah dijangkau.

### Accessibility

- [ ]  Keyboard navigation bekerja.
- [ ]  Focus ring terlihat.
- [ ]  Selector memiliki accessible name.
- [ ]  Live region berfungsi.
- [ ]  Informasi tidak bergantung pada warna.
- [ ]  Reduced motion didukung.
- [ ]  Alt text tersedia.

### Performance dan aset

- [ ]  Tidak memuat seluruh aset Atlas mendalam.
- [ ]  Initial render tidak memuat delapan hero sekaligus tanpa alasan.
- [ ]  Hero dan thumbnail memiliki ukuran eksplisit.
- [ ]  Tidak ada broken image.
- [ ]  Tidak ada broken link.
- [ ]  Lisensi aset terdokumentasi.
- [ ]  Production build berhasil.

---

## 30. Tahapan Implementasi

### Fase 1 — Audit dan kontrak data

1. Validasi quality gate Section 4.
2. Audit delapan hero dan thumbnail.
3. Cocokkan flagship ID dengan source province.
4. Buat `flagshipEditorial.ts`.
5. Buat composer/selector agar fakta tidak terduplikasi.
6. Tambahkan validator tepat delapan flagship.

### Fase 2 — Static desktop composition

1. Buat section wrapper dan header.
2. Buat Featured Stage statis.
3. Buat visual shell, hero ratio, copy hierarchy.
4. Buat vertical province rail.
5. Pastikan layout tidak menyerupai grid.

### Fase 3 — Selection dan data binding

1. Tambahkan active flagship state.
2. Hubungkan rail ke featured content.
3. Tambahkan image preload berdasarkan intent.
4. Stabilkan height/copy swap.
5. Tambahkan fallback image.

### Fase 4 — Integrasi produk

1. Hubungkan selectedProvinceId.
2. Hubungkan Summary Panel.
3. Hubungkan Atlas route.
4. Hubungkan Passport store.
5. Simpan dan restore map state.
6. Tambahkan analytics.

### Fase 5 — Tablet dan mobile

1. Ubah rail menjadi horizontal tablet.
2. Bangun mobile stacked stage.
3. Tambahkan CSS scroll snap.
4. Uji touch target.
5. Uji nama panjang dan copy wrap.

### Fase 6 — Motion premium

1. Featured image crossfade.
2. Copy fade-up ringan.
3. Active indicator transition.
4. Intent preload.
5. Reduced-motion branch.
6. Pastikan tidak ada autoplay.

### Fase 7 — Accessibility

1. Semantic section.
2. Keyboard rail/carousel.
3. Focus management.
4. Live region.
5. Contrast.
6. Screen reader QA.

### Fase 8 — QA dan polish

1. Audit visual seluruh provinsi.
2. Asset and broken-link validator.
3. Responsive QA.
4. Performance profiling.
5. Lint/type-check/build.
6. Demo rehearsal.

---

## 31. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit aset dan data | 2–4 jam |
| Desktop composition | 5–8 jam |
| State dan selector interaction | 3–5 jam |
| Summary, Atlas, Passport integration | 4–7 jam |
| Tablet dan mobile | 4–7 jam |
| Motion dan image transition | 3–5 jam |
| Accessibility | 3–5 jam |
| QA dan polish | 4–7 jam |

Total realistis:

```
28–48 jam kerja efektif
```

Versi demo prioritas:

```
Desktop + mobile + 8 data + Summary/Atlas/Passport integration
18–28 jam
```

---

## 32. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti carousel template | Visual kehilangan karakter | Featured stage dominan, rail editorial, whitespace besar |
| Hero tidak konsisten | Showcase tampak amatir | Audit crop, tone, focal point, dan lisensi |
| Data terduplikasi | Summary dan Atlas tidak sinkron | Compose dari source existing |
| Map sync feedback loop | Active province melompat | Gunakan interaction source dan hasUserInteracted |
| Semua hero dipreload | Halaman berat | Intent preload dan lazy loading |
| Copy berbeda panjang | Layout shift | Stable container, line clamp terkontrol, copy budget |
| Carousel mobile sulit digunakan | Pengguna melewatkan flagship | Native scroll snap, partial next card, progress jelas |
| Passport ganda | Data rusak | Idempotent set/store dan shared state |
| Autoplay mengganggu | Kontrol pengguna hilang | Tanpa autoplay sebagai default |
| Informasi budaya terlalu menyederhanakan | Kredibilitas turun | Editorial hook singkat, detail dan sumber berada di Atlas |

---

## 33. Strategi Demo Juri

Flow 45–70 detik:

```
1. Scroll dari Province Summary ke Flagship Provinces.
2. Tunjukkan DI Yogyakarta sebagai featured province.
3. Pilih Kalimantan Timur melalui rail.
4. Hero dan copy berganti tanpa layout shift.
5. Jelaskan dominant pillar Masa Depan dan kaitannya dengan IKN.
6. Klik Lihat Ringkasan untuk memperlihatkan integrasi map.
7. Kembali ke Section 5 atau gunakan state tersimpan.
8. Pilih Maluku dan klik Buka Atlas Provinsi.
9. Tambahkan satu flagship ke Passport.
10. Kembali ke peta dan tunjukkan state tetap tersimpan.
```

Nilai yang terlihat:

- Kurasi editorial.
- Visual premium.
- State bersama.
- Routing matang.
- Progressive loading.
- Passport yang nyata.
- Hubungan heritage dan future.

---

## 34. Handoff ke Section 6 — Explore by Layer

Section 5 harus menutup dengan transition prompt ringan:

```
Sudah menemukan gerbang pertamamu?
Lanjutkan eksplorasi berdasarkan cerita yang paling menarik bagimu.
```

Pilihan transisi visual:

- Divider tipis dengan tujuh titik warna pilar.
- Preview chips: Budaya · Rasa · Alam · Sejarah · Rempah · Masa Depan.
- CTA anchor opsional: `Jelajahi berdasarkan minat` menuju `#explore-by-layer`.

Jangan menampilkan seluruh UI Section 6 di dalam Section 5. Cukup beri petunjuk naratif.

---

## 35. Checklist Handoff Desain ke Development

### Desain

- [ ]  Desktop default dan seluruh active state.
- [ ]  Tablet horizontal rail.
- [ ]  Mobile snap carousel.
- [ ]  Long province name cases.
- [ ]  Hero loading/error fallback.
- [ ]  Passport saved state.
- [ ]  Focus and reduced-motion state.

### Konten

- [ ]  Tagline delapan provinsi.
- [ ]  Editorial hook delapan provinsi.
- [ ]  Why flagship delapan provinsi.
- [ ]  Tiga signature per provinsi.
- [ ]  Dominant pillar per provinsi.
- [ ]  Alt text dan credits.

### Engineering

- [ ]  Source data contract.
- [ ]  Selection ownership.
- [ ]  Map sync policy.
- [ ]  Summary callback.
- [ ]  Atlas routing.
- [ ]  Passport store.
- [ ]  Image preload strategy.
- [ ]  Analytics events.
- [ ]  Validator.

---

## 36. Definition of Done

Section 5 dinyatakan selesai jika:

1. Delapan flagship tampil dari source data yang benar.
2. Satu featured province selalu tersedia.
3. Desktop memiliki featured stage dan side rail yang editorial.
4. Tablet dan mobile memiliki rail/carousel yang nyaman.
5. Selector mouse, touch, dan keyboard bekerja.
6. Map-selected flagship dapat menyinkronkan active state.
7. CTA Summary membuka Province Summary Panel yang benar.
8. CTA Atlas membuka `/provinsi/[slug]` yang benar.
9. Passport tersimpan tanpa duplikasi.
10. Pergantian hero/copy tidak menyebabkan layout shift besar.
11. Reduced motion dan focus state berjalan.
12. Tidak ada broken image/link.
13. Tidak ada deep Atlas asset yang dimuat dari section.
14. Lisensi dan sumber visual tercatat.
15. Lint, type-check, validator, dan production build lulus.
16. Section terasa seperti editorial showcase premium, bukan grid template.
17. Transisi menuju Section 6 terasa natural.
18. Demo dapat dilakukan berulang tanpa state rusak.

---

## 37. Dokumen Terkait

- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Redesign — Province Summary Panel + Deep Province Atlas NUSANTARAYA](https://app.notion.com/p/Planning-Redesign-Province-Summary-Panel-Deep-Province-Atlas-NUSANTARAYA-4833d0e1ba3848d08945e053447efe92?pvs=21)
- [Panduan Aset & Struktur Folder NUSANTARAYA](https://app.notion.com/p/Panduan-Aset-Struktur-Folder-NUSANTARAYA-47e098210a3c82b78399014954613af2?pvs=21)
- [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21)

---

## 38. Keputusan Final

<aside>
🏆

**Arah final yang dipilih:** Section 5 memakai satu Featured Province Stage berukuran besar sebagai cover story aktif, didampingi rail delapan provinsi yang terkurasi. Data, Summary Panel, Atlas route, dan Passport tetap memakai sistem existing. Visual mengutamakan hero image, Playfair Display, ivory–navy–gold, regional accent terkontrol, motion halus, dan progressive loading.

</aside>

Prinsip penutup:

```
Jangan tampilkan delapan provinsi sebagai delapan kartu yang setara.
Pilih satu untuk diceritakan, tujuh untuk mengundang eksplorasi berikutnya.
```