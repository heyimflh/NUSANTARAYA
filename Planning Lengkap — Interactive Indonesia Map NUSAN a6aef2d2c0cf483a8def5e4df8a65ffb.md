# Planning Lengkap — Interactive Indonesia Map NUSANTARAYA

<aside>
🗺️

**Dokumen source of truth untuk Section 3 — Interactive Indonesia Map pada halaman Nusa Map NUSANTARAYA.** Section ini mengubah pilihan dari Explore Control Bar menjadi pengalaman peta Indonesia 38 provinsi yang interaktif, premium, responsif, dan terhubung ke Province Detail Panel serta halaman detail provinsi.

</aside>

---

## 1. Ringkasan Eksekutif

**Interactive Indonesia Map** adalah section ketiga halaman `/explore` dan menjadi pusat pengalaman Nusa Map. Section ini bukan peta geografis biasa, melainkan **interactive cultural discovery canvas** yang menghubungkan 38 provinsi, tujuh layer eksplorasi, tiga mode pengguna, 228 aset visual provinsi, panel ringkasan, Passport, dan halaman detail provinsi.

Jika Section 1 menjawab:

> “Apa itu Nusa Map?”
> 

Dan Section 2 menjawab:

> “Bagaimana saya ingin menjelajah?”
> 

Maka Section 3 menjawab:

> “Di mana cerita itu berada, dan provinsi mana yang ingin saya buka?”
> 

Peta utama menggunakan **SVG custom dengan path terpisah untuk 38 provinsi**. Leaflet tidak digunakan sebagai basis peta utama; Leaflet dipakai nanti untuk peta destinasi, itinerary, dan rute geografis pada halaman detail provinsi atau Route Planner.

### 1.1 Hasil pengalaman yang ditargetkan

Dalam 3–5 detik, user harus memahami bahwa:

- Semua 38 provinsi dapat dipilih.
- Warna, pin, dan highlight berubah mengikuti layer aktif.
- Klik provinsi membuka ringkasan visual.
- 8 provinsi flagship memiliki konten lebih dalam.
- Tombol **Jelajahi Provinsi** membuka mini portal provinsi.
- Peta menjadi penghubung budaya, kuliner, alam, sejarah, jalur rempah, dan masa depan Indonesia.

### 1.2 Konsep final

```
Living Cultural Atlas of Indonesia
```

Versi Indonesia:

```
Atlas budaya digital yang hidup untuk menjelajahi 38 provinsi Indonesia.
```

### 1.3 Karakter visual

- Aesthetic premium.
- Heritage Futuristic.
- Editorial tetapi app-like.
- Terang, hangat, dan profesional.
- Interaktif tanpa terasa seperti dashboard teknis yang kaku.
- Nasional tanpa menggunakan ornamen secara berlebihan.
- Kaya visual tetapi tetap ringan dan mudah dipahami.

---

## 2. Posisi dalam Struktur Halaman

Urutan halaman Nusa Map:

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Detail Panel / Bottom Sheet
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey
8. Regional Explorer
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

Section 3 harus terasa sebagai kelanjutan langsung dari Explore Control Bar. Tidak boleh ada perubahan visual yang terlalu mendadak. Control Bar mengatur state; Interactive Map menerjemahkan state tersebut menjadi respons visual.

### 2.1 Transisi dari Section 2

- Background tetap berada dalam keluarga ivory/warm white.
- Jarak visual dari control bar cukup dekat agar hubungan kontrol–hasil terasa jelas.
- Gunakan microcopy seperti `Peta diperbarui mengikuti pilihanmu`.
- Active summary dari Section 2 boleh tetap terlihat dalam bentuk status pill kecil di atas map.
- Hindari heading besar yang terasa seperti memulai halaman baru.

---

## 3. Tujuan Produk dan UX

### 3.1 Tujuan pengguna

User dapat:

1. Melihat Indonesia sebagai satu kesatuan.
2. Menemukan 38 provinsi dengan mudah.
3. Memilih provinsi melalui path, pin, search, atau daftar aksesibel.
4. Memahami identitas singkat provinsi tanpa meninggalkan peta.
5. Menjelajah berdasarkan layer minat.
6. Berpindah antara Explore, Tourist, dan Learn Mode.
7. Menandai provinsi ke Passport.
8. Masuk ke halaman detail provinsi.

### 3.2 Tujuan emosional

User harus merasa:

```
Indonesia terasa luas, hidup, dan saling terhubung.
Saya dapat menjelajah tanpa kebingungan.
Setiap provinsi punya identitas dan cerita.
Peta ini premium, bukan template peta biasa.
Saya ingin mengklik lebih dari satu provinsi.
```

### 3.3 Tujuan bisnis/demo

- Membuktikan tagline **Satu Peta, Ribuan Cerita**.
- Menjadi wow moment utama saat demo juri.
- Mendorong KPI minimal 3 provinsi dibuka per sesi.
- Menjadi entry point menuju detail provinsi, Passport, NusaRasa, Archive, Future, dan Route Planner.
- Menunjukkan cakupan nasional tanpa memaksakan kedalaman yang sama pada semua provinsi.

---

## 4. Scope Section

### 4.1 Termasuk dalam Section 3

- Peta SVG 38 provinsi.
- Hover, focus, click, selected, filtered, dan dimmed state.
- Pin atau marker kategori.
- Highlight 8 flagship.
- Tooltip ringkas.
- Status bar dan result count.
- Legend layer.
- Kontrol zoom visual sederhana jika diperlukan.
- Toggle tampilan label/pin opsional.
- Integrasi state dari Explore Control Bar.
- Trigger pembukaan Province Detail Panel.
- Empty state dan no-result state.
- Fallback jika SVG gagal dimuat.

### 4.2 Tidak termasuk dalam Section 3

- Detail panjang budaya, kuliner, atau sejarah.
- Peta jalan dan navigasi real-world.
- Rute antarkota berbasis jalan.
- Semua destinasi ditampilkan sekaligus.
- Leaflet tile map sebagai peta utama.
- Konten lengkap 12 section halaman detail provinsi.
- Audio autoplay.

### 4.3 Batas tanggung jawab

Section 3 memilih dan memvisualkan provinsi. Section 4 menampilkan ringkasan detail. Halaman `/provinsi/[slug]` menampilkan konten lengkap.

---

## 5. Kontrak State

### 5.1 State dari Explore Control Bar

```tsx
export type ExploreLayerId =
  | "all"
  | "budaya"
  | "kuliner"
  | "alam"
  | "sejarah"
  | "rempah"
  | "future";

export type ExploreModeId = "explore" | "tourist" | "learn";

type ExploreMapState = {
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  hoveredProvinceId: string | null;
  focusedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
};
```

### 5.2 State lokal map

```tsx
type InteractiveMapLocalState = {
  mapScale: number;
  mapOffset: { x: number; y: number };
  isLegendOpen: boolean;
  showLabels: boolean;
  tooltipProvinceId: string | null;
  isPanelOpen: boolean;
  interactionSource: "map" | "search" | "keyboard" | "card" | null;
};
```

### 5.3 Aturan prioritas state

1. `selectedProvinceId` adalah state terkuat dan tetap aktif sampai user memilih provinsi lain atau reset.
2. `hoveredProvinceId` hanya memberi preview sementara dan tidak menghapus selection.
3. `focusedProvinceId` dipakai untuk keyboard focus dan harus terlihat jelas.
4. `showFlagshipOnly` meredupkan provinsi non-flagship, bukan menghilangkan bentuk Indonesia.
5. Search tidak boleh menghapus layer aktif.
6. Klik flagship saat layer aktif mengubah layer ke `all`, mengikuti kontrak Section 2.
7. Reset mengembalikan semua state ke default.

### 5.4 Output ke Province Detail Panel

```tsx
type ProvinceSelectionPayload = {
  provinceId: string;
  source: "map" | "search" | "keyboard" | "card";
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
};
```

---

## 6. Arsitektur Visual Utama

### 6.1 Layout desktop final

```
┌─────────────────────────────────────────────────────────────────┐
│ Peta Interaktif Nusantara                  [38 Provinsi] [Live]  │
│ Klik provinsi untuk menemukan cerita, rasa, alam, dan masa depan │
├─────────────────────────────────────────────────────────────────┤
│ Status: Mode Explore · Layer Semua · 38 hasil                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Legend compact]          PETA INDONESIA          [Toolbar]     │
│                        SVG 38 PROVINSI                            │
│                    pin, glow, hover, tooltip                      │
│                                                                 │
│                     [Floating tooltip]                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ ● Budaya ● Kuliner ● Alam ● Sejarah ● Rempah ● Future           │
│ Petunjuk: hover untuk preview · klik untuk membuka detail        │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Layout dengan panel desktop terbuka

```
┌─────────────────────────────────────────┬───────────────────────┐
│                                         │ Province Detail Panel │
│       Interactive Indonesia Map         │ Hero image            │
│       map bergeser sedikit ke kiri      │ Identitas             │
│                                         │ Culture/Food/Dest.     │
│                                         │ CTA                    │
└─────────────────────────────────────────┴───────────────────────┘
```

Rekomendasi rasio saat panel terbuka:

```
Map: 65–70%
Panel: 30–35%
```

### 6.3 Tablet

- Header dan status full width.
- Map memenuhi lebar card.
- Legend menjadi row horizontal.
- Panel muncul sebagai overlay dari kanan dengan lebar 42–48% atau bottom sheet landscape.
- Toolbar disederhanakan.

### 6.4 Mobile

```
Header ringkas
Status horizontal scroll
Map viewport 330–420px
Toolbar floating compact
Tooltip kecil
Bottom sheet provinsi
Legend collapsible
```

Aturan mobile:

- Peta boleh pan/zoom secara terbatas.
- Jangan menampilkan semua label nama provinsi bersamaan.
- Tampilkan maksimal pin penting sesuai state.
- Touch target minimal 44×44px, meskipun bentuk visual pin lebih kecil.
- Bottom sheet memiliki snap point 35%, 65%, dan 92% jika implementasi memungkinkan.

---

## 7. Hierarki Informasi

Urutan visual harus selalu:

1. Bentuk Indonesia.
2. Provinsi aktif/hasil filter.
3. Pin flagship atau kategori aktif.
4. Tooltip/preview.
5. Legend dan status.
6. Toolbar sekunder.

Peta tidak boleh kalah dominan oleh kontrol. Search dan mode sudah berada di Section 2; Section 3 berfokus pada hasil visual.

---

## 8. Sistem Peta SVG

### 8.1 Persyaratan SVG

File:

```
public/assets/map/indonesia-38.svg
```

Setiap provinsi harus memiliki:

- Satu group/path utama yang dapat dipilih.
- `id` kebab-case konsisten dengan data.
- `data-province-id` bila SVG di-inline.
- ViewBox yang bersih.
- Tidak memiliki style inline yang menghambat CSS state.
- Path telah disederhanakan tanpa merusak bentuk penting.
- Tidak ada metadata editor yang tidak perlu.

### 8.2 Daftar ID wajib

```
aceh
sumatera-utara
sumatera-barat
riau
kepulauan-riau
jambi
sumatera-selatan
bengkulu
lampung
kepulauan-bangka-belitung
banten
dki-jakarta
jawa-barat
jawa-tengah
di-yogyakarta
jawa-timur
bali
nusa-tenggara-barat
nusa-tenggara-timur
kalimantan-barat
kalimantan-tengah
kalimantan-selatan
kalimantan-timur
kalimantan-utara
sulawesi-utara
gorontalo
sulawesi-tengah
sulawesi-barat
sulawesi-selatan
sulawesi-tenggara
maluku
maluku-utara
papua
papua-barat
papua-barat-daya
papua-tengah
papua-pegunungan
papua-selatan
```

### 8.3 Strategi rendering

Pilihan utama:

```
Import SVG sebagai React component atau inline markup terkontrol.
```

Jangan memakai `<img>` jika setiap path perlu event handler dan style dinamis. Jika pipeline proyek tidak mendukung SVG component, ekstrak path menjadi komponen React atau render SVG inline dari source yang telah diverifikasi.

### 8.4 State visual path

| State | Visual |
| --- | --- |
| Default | Ivory/blue-gray lembut, stroke putih hangat |
| Hover | Naik brightness, stroke gold, sedikit lift/glow |
| Focused | Outline gold tebal + ring yang tidak bergantung pada warna |
| Selected | Navy atau warna layer, gold inner glow |
| Matching filter | Opacity 1, warna layer lembut |
| Dimmed | Opacity 0.20–0.35, tetap terlihat |
| Flagship | Gold accent/pin, tidak harus seluruh path gold |
| No result | Semua path netral, empty message muncul |

### 8.5 Masalah provinsi kecil

DKI Jakarta, DI Yogyakarta, Kepulauan Riau, Bangka Belitung, dan beberapa provinsi kepulauan membutuhkan hit area tambahan.

Solusi:

- Gunakan transparent hit path yang lebih besar.
- Tambahkan marker/pin dengan button 44px.
- Jangan mengubah bentuk geografis hanya demi touch target.
- Tooltip harus mengonfirmasi nama sebelum selection.

---

## 9. Sistem 228 Aset Provinsi

### 9.1 Struktur per provinsi

Setiap provinsi memiliki enam gambar:

```
thumb.webp
hero.webp
culture.webp
food.webp
destination.webp
modern.webp
```

Total:

```
38 provinsi × 6 gambar = 228 aset
```

### 9.2 Fungsi setiap aset

| File | Fungsi utama | Lokasi penggunaan |
| --- | --- | --- |
| `thumb.webp` | Preview cepat | Tooltip kaya, search, mini card |
| `hero.webp` | Visual identitas utama | Panel provinsi |
| `culture.webp` | Budaya/tradisi | Tab/card Budaya |
| `food.webp` | Kuliner khas | Tab/card Rasa |
| `destination.webp` | Destinasi/alam | Tab/card Destinasi |
| `modern.webp` | Potensi modern | Tab/card Masa Depan |

### 9.3 Penggunaan di Section 3 dan 4

- Section 3 hanya memuat `thumb.webp` secara kondisional untuk tooltip kaya.
- Saat provinsi dipilih, preload `hero.webp` untuk panel.
- `culture`, `food`, `destination`, dan `modern` baru dimuat ketika panel terbuka atau tab terkait dipilih.
- Jangan preload 228 gambar sekaligus.

### 9.4 Aturan kualitas gambar

- `thumb.webp`: 600×400, 3:2 atau 4:3, 60–120 KB.
- `hero.webp`: 1200×675, 16:9, 150–250 KB.
- Empat supporting image: 800×600, 4:3, 80–160 KB.
- Focal point harus aman pada crop tengah.
- Gunakan tone warna konsisten; hindari campuran foto oversaturated dan flat.
- Pastikan lisensi/sumber setiap gambar terdokumentasi.

### 9.5 Image manifest

Buat manifest agar tidak hardcode path di banyak komponen:

```tsx
export type ProvinceAssets = {
  thumb: string;
  hero: string;
  culture: string;
  food: string;
  destination: string;
  modern: string;
};

export const provinceAssets: Record<string, ProvinceAssets> = {
  "di-yogyakarta": {
    thumb: "/assets/province/di-yogyakarta/thumb.webp",
    hero: "/assets/province/di-yogyakarta/hero.webp",
    culture: "/assets/province/di-yogyakarta/culture.webp",
    food: "/assets/province/di-yogyakarta/food.webp",
    destination: "/assets/province/di-yogyakarta/destination.webp",
    modern: "/assets/province/di-yogyakarta/modern.webp",
  },
};
```

### 9.6 Validasi aset otomatis

Buat script untuk memastikan:

- Tepat 38 folder provinsi.
- Setiap folder memiliki 6 file.
- Tidak ada file 0 byte.
- Dimensi memenuhi minimum.
- Nama slug cocok dengan data provinsi.
- Total aset tepat 228.
- Ukuran file tidak melewati budget tanpa alasan.

---

## 10. Tooltip dan Preview Cepat

### 10.1 Tooltip sederhana

Muncul saat hover/focus:

```
DI Yogyakarta
Jawa · Flagship
Keraton · Batik · Gudeg
Klik untuk membuka
```

### 10.2 Tooltip kaya desktop

Boleh memuat:

- `thumb.webp` 72–96px.
- Nama provinsi.
- Region.
- 3 highlight.
- Badge Flagship bila relevan.
- Icon layer utama.

### 10.3 Aturan tooltip

- Delay open 100–160ms untuk menghindari flicker.
- Delay close 80–120ms.
- Tidak mengikuti cursor terlalu agresif.
- Tidak keluar viewport.
- Tidak menutup provinsi yang sedang di-hover.
- Pada mobile, tap pertama memilih; tidak perlu hover tooltip kompleks.

---

## 11. Integrasi Province Detail Panel

### 11.1 Trigger

Panel terbuka saat:

- User klik/tap path provinsi.
- User menekan Enter/Space pada provinsi focused.
- User memilih hasil search.
- User memilih provinsi dari card terkait.

### 11.2 Informasi panel ringkas

- Hero image.
- Nama dan ibu kota.
- Region/pulau.
- Tagline.
- Tier/Flagship badge.
- 3 kata kunci budaya.
- 3 kuliner khas.
- 3 destinasi unggulan.
- 1–3 potensi modern.
- Bahasa/aksara bila relevan.
- CTA **Jelajahi Provinsi**.
- CTA **Tambah ke Passport**.
- Optional **Tanya RANI**.

### 11.3 Preview visual enam aset

Gunakan `hero.webp` sebagai cover. Empat aset supporting ditampilkan sebagai mini tab/card:

```
Budaya | Rasa | Destinasi | Masa Depan
```

`thumb.webp` tetap dipakai pada tooltip/search, bukan diulang jika hero sudah tampil.

### 11.4 Perilaku panel

- Hover tidak otomatis membuka panel.
- Click menetapkan selection dan membuka panel.
- Menutup panel tidak harus menghapus selection; path aktif tetap terlihat.
- Klik provinsi lain mengganti isi panel dengan transisi crossfade.
- Di mobile, panel menjadi bottom sheet.

---

## 12. Filter Layer Visual

### 12.1 Semua

- Semua provinsi terlihat.
- Pin flagship terlihat lembut.
- Warna wilayah dapat dipakai sangat halus.

### 12.2 Budaya

- Provinsi dengan data budaya diperkuat.
- Pin budaya digunakan pada titik terpilih.
- Supporting preview menggunakan `culture.webp`.

### 12.3 Kuliner

- Warna gold/amber hangat.
- Preview menggunakan `food.webp`.
- Search keyword seperti rendang/gudeg dapat memilih provinsi.

### 12.4 Alam

- Warna hijau hutan/teal.
- Preview menggunakan `destination.webp` bila berfokus alam.

### 12.5 Sejarah

- Warna blue heritage.
- Provinsi dengan timeline/situs sejarah ditonjolkan.

### 12.6 Jalur Rempah

- Warna teal spice.
- Maluku dan Maluku Utara dominan, lalu node terkait seperti Sulawesi Selatan.
- Route line historis boleh muncul pada fase premium.

### 12.7 Kota Masa Depan

- Warna blue-violet digital.
- Kalimantan Timur/IKN menjadi anchor.
- Preview menggunakan `modern.webp`.

### 12.8 Aturan dimming

- Matching: opacity 1.
- Related: opacity 0.55–0.70.
- Nonmatching: opacity 0.20–0.35.
- Jangan menghilangkan provinsi sepenuhnya karena bentuk Indonesia harus tetap terbaca.

---

## 13. Mode Pengguna

### 13.1 Explore Mode

Fokus:

- Discovery seimbang.
- Semua kategori tersedia.
- Tooltip menampilkan tiga highlight campuran.

### 13.2 Tourist Mode

Fokus:

- Destinasi.
- Kuliner.
- Best time/etika wisata di panel.
- CTA Route Planner lebih menonjol.
- Copy lebih ringkas dan praktis.

### 13.3 Learn Mode

Fokus:

- Sejarah.
- Budaya.
- Bahasa/aksara.
- Sumber/referensi.
- CTA Archive lebih menonjol.

### 13.4 Perubahan visual mode

Mode tidak perlu mengubah desain dasar peta secara ekstrem. Perubahan cukup pada:

- Prioritas pin.
- Isi tooltip.
- Urutan informasi panel.
- CTA utama.
- Microcopy status.

---

## 14. Sistem Flagship

8 flagship:

```
Sumatera Barat
DI Yogyakarta
Bali
Kalimantan Timur
Sulawesi Selatan
Maluku
Nusa Tenggara Timur
Papua Barat Daya
```

### 14.1 Visual flagship

- Pin gold kecil dengan star/compass motif.
- Badge `Flagship` pada tooltip dan panel.
- Pulse hanya saat mode flagship pertama kali aktif; jangan terus-menerus.
- Non-flagship diredupkan, tidak dihapus.

### 14.2 Default flagship

Jangan membuat semua 8 pin bergerak bersamaan. Gunakan stagger entrance satu kali atau static glow halus.

---

## 15. Toolbar Peta

### 15.1 Kontrol recommended

- Zoom in.
- Zoom out.
- Reset view.
- Toggle labels.
- Toggle legend.
- Optional fullscreen desktop.

### 15.2 Batas zoom

- Default `1.0`.
- Minimum `1.0` agar peta selalu kembali utuh.
- Maksimum desktop `1.8–2.0`.
- Maksimum mobile `2.2–2.5` untuk provinsi kecil.

### 15.3 Visual toolbar

- Floating vertical pill di desktop.
- Horizontal compact pill di mobile.
- Background white/80 dengan blur.
- Border warm gray.
- Icon navy.
- Active/focus gold.
- Tooltip teks untuk icon-only buttons.

---

## 16. Visual Design System

### 16.1 Warna utama

| Token | Value | Penggunaan |
| --- | --- | --- |
| `nusaNavy` | `#0D1B2A` | Teks, selected province |
| `nusaGold` | `#C9A84C` | Focus, flagship, accent |
| `nusaIvory` | `#FFFDF8` | Background section |
| `nusaWarm` | `#F8F4EA` | Map surface |
| `nusaBorder` | `#E8E0CE` | Border card |
| `nusaBlue` | `#2D6BE4` | Digital/history accent |
| `forest` | `#2D5A27` | Alam |
| `spice` | `#1B7A7A` | Rempah |
| `future` | `#6B3FA0` | Masa depan |

### 16.2 Warna wilayah

```
Sumatera #B85C38
Jawa #2B4C8C
Kalimantan #1A5C3A
Sulawesi #D4691E
Bali–Nusa Tenggara #6B3FA0
Maluku #1B7A7A
Papua #1A4A7A
```

Gunakan warna wilayah sebagai secondary information, bukan membuat peta seperti pelangi saat layer tematik aktif.

### 16.3 Map card

```css
background: rgba(255,255,255,0.78);
backdrop-filter: blur(24px);
border: 1px solid rgba(232,224,206,0.92);
border-radius: 32px;
box-shadow:
  0 28px 90px rgba(13,27,42,0.10),
  inset 0 1px 0 rgba(255,255,255,0.90);
```

### 16.4 Map canvas

```css
background:
  radial-gradient(circle at 18% 20%, rgba(201,168,76,0.13), transparent 32%),
  radial-gradient(circle at 82% 68%, rgba(45,107,228,0.08), transparent 34%),
  linear-gradient(180deg, #FFFDF8 0%, #F8F4EA 100%);
```

### 16.5 Tipografi

- Eyebrow: Inter, uppercase, tracking lebar, gold.
- Heading: Playfair Display/Cormorant Garamond, navy.
- UI/status: Inter Medium.
- Tooltip/panel body: Inter Regular.
- Angka stats: serif atau Inter Semibold, jangan dekoratif berlebihan.

### 16.6 Ornamen

- Batik/tenun maksimal opacity 2–4%.
- Gunakan di tepi card, bukan di belakang path peta.
- Hindari motif yang membuat garis pulau sulit terbaca.

---

## 17. Copywriting Final

### 17.1 Eyebrow

```
Peta Interaktif Nusantara
```

### 17.2 Heading

```
Jelajahi 38 Provinsi dalam Satu Peta
```

Alternatif lebih emosional:

```
Setiap Provinsi Menyimpan Cerita
```

### 17.3 Subheading

```
Pilih provinsi untuk menemukan budaya, rasa, destinasi, sejarah, dan potensi masa depan Indonesia.
```

### 17.4 Instruction

```
Hover untuk melihat ringkasan. Klik provinsi untuk membuka detail.
```

### 17.5 Status default

```
Mode Explore · Layer Semua · Menampilkan 38 provinsi
```

### 17.6 No selection

```
Pilih salah satu provinsi untuk memulai jelajah.
```

### 17.7 No result

```
Belum ada provinsi yang cocok. Ubah kata kunci atau reset filter untuk melihat seluruh Indonesia.
```

### 17.8 Flagship

```
Menyorot 8 provinsi flagship dengan cerita terdalam.
```

### 17.9 Loading

```
Menyiapkan peta Nusantara…
```

---

## 18. Motion dan Microinteraction

### 18.1 Entrance

1. Header fade-up.
2. Status pill fade-in.
3. Map card scale `0.985 → 1` dan opacity `0 → 1`.
4. Pulau/provinsi muncul per region, bukan 38 animasi berat sekaligus.
5. Flagship pin stagger 40–60ms.
6. Legend fade-in terakhir.

### 18.2 Hover

- Path brightness naik.
- Stroke gold muncul 180ms.
- Tooltip fade/scale 140–180ms.
- Tidak menggunakan translasi besar yang menggeser geografi.

### 18.3 Selection

- Selected path transition 220–320ms.
- Pulse ring satu kali.
- Map bergeser/scale ringan hanya jika panel perlu ruang.
- Panel slide/crossfade 280–420ms.

### 18.4 Filter change

- Dimming transition 240ms.
- Pin masuk/keluar dengan opacity/scale.
- Hindari re-render yang menyebabkan seluruh SVG berkedip.

### 18.5 Reduced motion

Jika `prefers-reduced-motion` aktif:

- Matikan pulse berulang.
- Matikan stagger.
- Matikan map auto-pan animated.
- Gunakan opacity transition maksimal 120ms atau perubahan instan.

---

## 19. Responsive Specification

### 19.1 Desktop ≥ 1280px

- Max content width 1280–1440px.
- Map viewport 620–720px.
- Map card padding 28–36px.
- Panel 380–440px.
- Tooltip kaya aktif.

### 19.2 Laptop 1024–1279px

- Map viewport 540–620px.
- Panel 340–390px.
- Header tetap satu row bila cukup.
- Legend dapat wrap.

### 19.3 Tablet 768–1023px

- Map viewport 460–560px.
- Panel overlay/bottom sheet.
- Toolbar horizontal.
- Tooltip lebih compact.

### 19.4 Mobile ≤ 767px

- Section padding 40–56px vertikal.
- Map card radius 24px.
- Map viewport 330–420px.
- Map dapat dipan saat zoom.
- Legend collapsible.
- Bottom sheet menjadi pengalaman utama detail.
- Hero panel ratio 16:9.

### 19.5 Mobile kecil ≤ 390px

- Gunakan short copy.
- Sembunyikan label nonaktif.
- Maksimal 2 status chip terlihat; sisanya horizontal scroll.
- Hindari floating tooltip besar.

---

## 20. Accessibility

### 20.1 Semantik

- Section memakai `aria-labelledby`.
- Setiap provinsi menjadi target interaktif dengan nama yang terbaca screen reader.
- Jika SVG path tidak dapat difokuskan secara konsisten, sediakan daftar tombol provinsi aksesibel yang tersinkronisasi.

### 20.2 Keyboard

- Tab masuk ke toolbar dan peta.
- Arrow keys berpindah secara logis antarprovinsi/region jika custom roving focus diterapkan.
- Enter/Space memilih provinsi.
- Escape menutup tooltip/panel.
- Home mengembalikan focus ke provinsi pertama atau default.

### 20.3 Focus state

```
2px solid #C9A84C
outline-offset: 3px
shadow tambahan untuk kontras
```

### 20.4 Jangan bergantung pada warna

Matching layer harus dibedakan dengan:

- Pin/icon.
- Opacity.
- Stroke/pattern ringan.
- Label/tooltip.

### 20.5 Live region

Status perubahan filter dan selection menggunakan `aria-live="polite"`.

Contoh:

```
DI Yogyakarta dipilih. Panel detail dibuka.
```

### 20.6 Touch

- Target minimum 44×44px.
- Gesture zoom tidak boleh mengunci scroll halaman tanpa disengaja.
- Sediakan tombol zoom sebagai alternatif gesture.

---

## 21. Performance Strategy

### 21.1 Prinsip

- SVG utama dimuat lebih dulu.
- 228 gambar tidak pernah dimuat bersamaan.
- Render path stabil; state berubah lewat class/data attribute.
- Event handler tidak dibuat ulang tanpa perlu.

### 21.2 Loading aset

```
Initial: SVG + icon UI + data provinsi ringan
Hover desktop: thumb provinsi sesuai kebutuhan
Selection: preload hero provinsi
Panel open: load hero
Tab panel: lazy-load culture/food/destination/modern
```

### 21.3 Image optimization

- WebP/AVIF.
- Responsive `sizes`.
- Lazy loading.
- Blur placeholder opsional untuk hero.
- Width/height eksplisit untuk mencegah layout shift.

### 21.4 Data

- Data 38 provinsi dapat statis dan tree-shake friendly.
- Pisahkan summary map dari data detail panjang.
- Jangan mengirim timeline/konten lengkap ke bundle map.

### 21.5 Target

- Map interactive-ready < 2.5 detik pada 4G wajar.
- Initial JS section tetap kecil.
- Tidak ada long task > 200ms saat filter.
- Interaction map terasa responsif < 100ms.
- Tidak ada layout shift besar saat panel dibuka.

### 21.6 Fallback

Jika SVG gagal:

- Tampilkan fallback image peta.
- Tampilkan grid/list 38 provinsi yang tetap dapat dipilih.
- Jangan membiarkan section kosong.

---

## 22. Data Model

### 22.1 Province map summary

```tsx
export type ProvinceMapItem = {
  id: string;
  name: string;
  officialName?: string;
  capital: string;
  region: string;
  tier: "deep" | "standard" | "basic";
  isFlagship: boolean;
  tagline: string;
  summary: string;
  categories: ExploreLayerId[];
  highlights: string[];
  keywords: string[];
  mapPosition: { x: number; y: number };
  coordinates: [number, number];
  assets: ProvinceAssets;
  href: string;
};
```

### 22.2 Panel summary

```tsx
export type ProvincePanelSummary = {
  provinceId: string;
  cultureHighlights: string[];
  culinaryHighlights: string[];
  destinationHighlights: string[];
  modernHighlights: string[];
  languages?: string[];
  scripts?: string[];
  touristTip?: string;
  learnSourceCount?: number;
};
```

### 22.3 Data integrity

- `id` harus unik.
- `href` harus tersedia atau memakai fallback aman.
- Semua asset path harus valid.
- Semua kategori harus termasuk union type.
- Flagship tepat 8.
- Provinsi tepat 38.

---

## 23. Struktur Komponen

```
src/
  components/
    explore/
      interactive-map/
        InteractiveIndonesiaMap.tsx
        IndonesiaSvgMap.tsx
        ProvincePath.tsx
        ProvincePinLayer.tsx
        ProvincePin.tsx
        MapStatusBar.tsx
        MapToolbar.tsx
        MapLegend.tsx
        ProvinceTooltip.tsx
        MapEmptyState.tsx
        MapFallback.tsx
        AccessibleProvinceList.tsx
        index.ts

      province-panel/
        ProvinceDetailPanel.tsx
        ProvincePanelHero.tsx
        ProvincePanelIdentity.tsx
        ProvincePanelHighlights.tsx
        ProvincePanelTabs.tsx
        ProvincePanelActions.tsx
        ProvinceBottomSheet.tsx
        index.ts

  data/
    provinces/
      provinces.ts
      provinceMapData.ts
      provincePanelData.ts
      provinceAssets.ts
      featuredProvinces.ts
    map/
      mapLayers.ts
      mapLegend.ts
      mapStats.ts
      provincePinPositions.ts
      provinceAdjacency.ts

  hooks/
    useInteractiveMap.ts
    useMapKeyboardNavigation.ts
    useProvinceSelection.ts
    useProvinceAssetPreload.ts

  types/
    map.ts
    province.ts

  animations/
    mapMotion.ts
```

---

## 24. Tanggung Jawab Komponen

### 24.1 `InteractiveIndonesiaMap.tsx`

- Wrapper section.
- Menerima state Section 2.
- Menyusun header, status, canvas, legend, toolbar, tooltip.
- Mengirim selection ke parent.

### 24.2 `IndonesiaSvgMap.tsx`

- Render SVG.
- Mapping 38 path.
- Tidak memuat logic panel.
- Menjaga viewBox dan transform map.

### 24.3 `ProvincePath.tsx`

Props:

```tsx
type ProvincePathProps = {
  province: ProvinceMapItem;
  state: "default" | "hovered" | "focused" | "selected" | "dimmed";
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  onFocus: (id: string | null) => void;
};
```

### 24.4 `ProvincePinLayer.tsx`

- Render pin sesuai layer/flagship.
- Menghindari pin berlebihan.
- Menyinkronkan hover dengan path.

### 24.5 `ProvinceTooltip.tsx`

- Posisi aman dalam viewport.
- Menampilkan preview ringkas.
- Tidak menjadi source of truth selection.

### 24.6 `MapStatusBar.tsx`

- Mode.
- Layer.
- Result count.
- Search state.
- `aria-live`.

### 24.7 `MapToolbar.tsx`

- Zoom/reset/label/legend.
- Tooltip icon.
- Keyboard accessible.

### 24.8 `AccessibleProvinceList.tsx`

- Fallback dan alternatif navigasi.
- Dapat dibuat visually hidden pada desktop, lalu digunakan pada screen reader atau no-SVG mode.

---

## 25. Props Contract

```tsx
type InteractiveIndonesiaMapProps = {
  provinces: ProvinceMapItem[];
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  onProvinceSelect: (provinceId: string) => void;
  onProvinceClear: () => void;
  onReset: () => void;
};
```

Optional:

```tsx
onAddToPassport?: (provinceId: string) => void;
onOpenProvince?: (provinceId: string) => void;
onAskRani?: (provinceId: string) => void;
```

---

## 26. Interaction Flows

### 26.1 Default

```
User masuk section
→ peta muncul
→ semua 38 provinsi terlihat
→ 8 flagship memiliki tanda lembut
→ status menunjukkan Mode Explore · Layer Semua
```

### 26.2 Hover

```
Hover DI Yogyakarta
→ path mendapat gold outline
→ tooltip muncul
→ thumb dan highlights terlihat
→ selection lama tetap tersimpan
```

### 26.3 Click

```
Klik DI Yogyakarta
→ selectedProvinceId diperbarui
→ path aktif
→ panel terbuka
→ hero dipreload/ditampilkan
→ focus dipindah secara aman ke heading panel bila diperlukan
```

### 26.4 Search

```
User mencari "gudeg"
→ hasil mengarah ke DI Yogyakarta
→ peta menyorot DIY
→ map boleh auto-center ringan
→ panel hanya terbuka setelah user memilih hasil atau kebijakan produk menetapkan auto-open
```

Rekomendasi: memilih hasil search membuka panel; mengetik saja hanya mengubah hasil/dimming.

### 26.5 Layer

```
Klik Kuliner di Section 2
→ activeLayer kuliner
→ provinsi matching menjadi kuat
→ nonmatching meredup
→ pin kuliner muncul selektif
→ status/result count diperbarui
```

### 26.6 Flagship

```
Klik Tampilkan Flagship
→ activeLayer menjadi all
→ 8 flagship glow/pin
→ provinsi lain meredup
→ status flagship muncul
```

### 26.7 Reset

```
Reset
→ zoom kembali 1
→ offset kembali 0
→ selection kosong
→ layer all
→ mode explore
→ flagship false
→ panel ditutup
```

---

## 27. Edge Cases

| Kasus | Perilaku |
| --- | --- |
| SVG belum load | Tampilkan skeleton dan copy loading |
| SVG gagal | Fallback image + daftar provinsi |
| Gambar provinsi gagal | Gradient placeholder + nama provinsi |
| Search kosong | Semua hasil mengikuti layer/flagship |
| Search tanpa hasil | Map netral + empty state + reset |
| Provinsi kecil sulit diklik | Hit area/pin tambahan |
| Panel ditutup | Selection tetap, panel hidden |
| Route detail belum tersedia | CTA disabled/Soon, jangan broken link |
| Asset mendukung konten sensitif | Gunakan caption/sumber dan hindari stereotip |
| Mobile landscape | Panel overlay tidak menutupi semua peta |
| Reduced motion | Transisi sederhana |

---

## 28. Quality Assurance

### 28.1 Functional QA

- Klik semua 38 provinsi.
- Hover/focus semua provinsi.
- Search keyword populer.
- Uji setiap layer.
- Uji ketiga mode.
- Uji flagship.
- Uji reset.
- Uji open/close panel.
- Uji CTA detail dan Passport.

### 28.2 Asset QA

- 38 folder.
- 6 file per folder.
- Total 228.
- Tidak ada gambar rusak.
- Tidak ada slug mismatch.
- Focal point aman.
- Lisensi tercatat.

### 28.3 Responsive QA

Viewport minimum:

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

### 28.4 Accessibility QA

- Keyboard-only.
- Screen reader basic flow.
- Focus visible.
- Contrast.
- Reduced motion.
- Zoom browser 200%.
- Touch target.

### 28.5 Performance QA

- Network 4G throttling.
- CPU throttling.
- Pastikan initial request tidak mengambil 228 gambar.
- Uji panel switching cepat.
- Uji memory setelah membuka banyak provinsi.

---

## 29. Acceptance Criteria

### 29.1 Functional

- [ ]  SVG 38 provinsi tampil dengan benar.
- [ ]  Semua provinsi dapat dipilih.
- [ ]  Hover, focus, selected, dan dimmed state jelas.
- [ ]  Layer dari Section 2 mengubah peta.
- [ ]  Mode memengaruhi prioritas konten.
- [ ]  Flagship menyorot tepat 8 provinsi.
- [ ]  Search dapat mengarahkan ke provinsi.
- [ ]  Tooltip tampil aman.
- [ ]  Panel terbuka dengan data yang benar.
- [ ]  Reset mengembalikan state default.

### 29.2 Visual

- [ ]  Peta menjadi focal point.
- [ ]  Tampilan aesthetic, premium, dan profesional.
- [ ]  Tidak terasa seperti default Leaflet/OSM.
- [ ]  Gold digunakan sebagai accent, bukan warna dominan.
- [ ]  Ornamen tidak mengganggu keterbacaan.
- [ ]  Foto 38 provinsi memiliki treatment konsisten.
- [ ]  Panel dan map terasa satu sistem.

### 29.3 Asset

- [ ]  228 aset terdeteksi.
- [ ]  Semua path gambar valid.
- [ ]  Dimensi dan ukuran file sesuai budget.
- [ ]  Lisensi/sumber terdokumentasi.
- [ ]  Placeholder tersedia.

### 29.4 Responsive

- [ ]  Desktop map luas dan nyaman.
- [ ]  Tablet tidak overflow.
- [ ]  Mobile mendukung provinsi kecil.
- [ ]  Bottom sheet nyaman.
- [ ]  Touch target minimal 44px.

### 29.5 Accessibility

- [ ]  Provinsi dapat diakses keyboard.
- [ ]  Focus ring terlihat.
- [ ]  Status memakai live region.
- [ ]  Informasi tidak bergantung warna.
- [ ]  Reduced motion didukung.

### 29.6 Performance

- [ ]  Tidak memuat 228 gambar di awal.
- [ ]  SVG dioptimasi.
- [ ]  Filter tidak lag.
- [ ]  Panel tidak menyebabkan layout shift besar.
- [ ]  Fallback berjalan.

---

## 30. Tahapan Implementasi

### Fase 1 — Audit aset dan data

1. Validasi 38 folder dan 228 gambar.
2. Cocokkan slug dengan daftar provinsi.
3. Optimasi SVG dan WebP.
4. Buat `provinceAssets.ts`.
5. Buat data summary 38 provinsi.

### Fase 2 — Peta statis

1. Inline SVG.
2. Render 38 path.
3. Terapkan warna default.
4. Buat layout card desktop/mobile.
5. Tambahkan fallback.

### Fase 3 — Interaksi dasar

1. Hover/focus.
2. Click selection.
3. Tooltip.
4. Keyboard.
5. Selected state.

### Fase 4 — Integrasi Section 2

1. Search.
2. Layer.
3. Mode.
4. Flagship.
5. Result count.
6. Reset.

### Fase 5 — Province Panel

1. Panel desktop.
2. Bottom sheet mobile.
3. Hero image.
4. Empat kategori visual.
5. CTA.
6. Lazy loading aset.

### Fase 6 — Polish premium

1. Motion.
2. Toolbar.
3. Legend.
4. Status bar.
5. Microcopy.
6. Ornament/glow.

### Fase 7 — QA

1. Functional.
2. Asset.
3. Responsive.
4. Accessibility.
5. Performance.
6. Demo rehearsal.

---

## 31. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit aset dan data | 3–5 jam |
| SVG map statis | 3–5 jam |
| Interaksi dasar | 4–7 jam |
| Integrasi control bar | 3–5 jam |
| Province panel | 6–10 jam |
| Responsive + accessibility | 5–8 jam |
| Motion + premium polish | 4–7 jam |
| QA dan perbaikan | 4–8 jam |

Total realistis:

```
32–55 jam kerja efektif
```

Versi demo recommended tanpa seluruh polish premium:

```
20–32 jam
```

---

## 32. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| SVG path tidak konsisten | Selection salah | Normalisasi ID dan script audit |
| 228 gambar dimuat awal | Loading berat | Manifest + lazy loading bertahap |
| Provinsi kecil sulit dipilih | UX buruk | Hit area dan pin tambahan |
| Peta terlalu penuh | Visual tidak premium | Progressive disclosure dan pin selektif |
| Warna layer terlalu ramai | Brand lemah | Netral dominan, accent terbatas |
| Panel menutupi peta mobile | Konteks hilang | Snap points dan peek state |
| Foto tidak konsisten | Terlihat amatir | Crop, tone, overlay, rasio seragam |
| Animasi berlebihan | Lag/distraksi | Motion budget dan reduced motion |
| Link detail belum siap | Broken flow | Disabled/Soon atau fallback route |
| Informasi budaya keliru | Kredibilitas turun | Sumber tepercaya dan review konten |

---

## 33. Strategi Demo Juri

Flow 60–90 detik:

```
1. Scroll dari Control Bar ke map.
2. Aktifkan layer Kuliner.
3. Cari "gudeg".
4. Pilih DI Yogyakarta.
5. Tampilkan panel dengan hero, budaya, kuliner, destinasi, modern.
6. Tutup panel.
7. Aktifkan Flagship.
8. Pilih Kalimantan Timur untuk menunjukkan narasi IKN/Future.
9. Klik Jelajahi Provinsi atau Tambah ke Passport.
```

Tujuan demo:

- Menunjukkan search nyata.
- Menunjukkan map merespons state.
- Menunjukkan kedalaman data.
- Menghubungkan warisan dan masa depan.
- Menghindari perpindahan fitur yang terlalu banyak.

---

## 34. Checklist Handoff Desain ke Development

### Desain

- [ ]  Desktop map closed/open panel.
- [ ]  Tablet.
- [ ]  Mobile bottom sheet.
- [ ]  Semua path states.
- [ ]  Tooltip.
- [ ]  Empty/loading/error.
- [ ]  Toolbar dan legend.
- [ ]  Image crop guideline.

### Data

- [ ]  38 province summaries.
- [ ]  8 flagship.
- [ ]  Layer mapping.
- [ ]  Keyword mapping.
- [ ]  Asset manifest.
- [ ]  Route mapping.

### Engineering

- [ ]  SVG strategy disepakati.
- [ ]  State ownership jelas.
- [ ]  Lazy loading strategy.
- [ ]  Accessibility strategy.
- [ ]  Fallback strategy.
- [ ]  Performance budget.

---

## 35. Definition of Done

Section dinyatakan selesai jika:

1. Semua 38 provinsi tampil dan dapat dipilih.
2. SVG memiliki ID yang konsisten dengan data.
3. Explore Control Bar mengontrol map tanpa reload.
4. Search, layer, mode, flagship, dan reset berjalan.
5. Tooltip dan status memberikan feedback yang jelas.
6. Province Detail Panel menerima selection dengan benar.
7. 228 aset tervalidasi dan dimuat secara bertahap.
8. Desktop, tablet, dan mobile rapi.
9. Keyboard dan screen reader basic flow berfungsi.
10. Tidak ada broken image/link utama.
11. Map tetap dapat digunakan jika SVG/gambar gagal.
12. Visual memenuhi standar Heritage Futuristic premium.
13. Interaksi stabil saat demo.
14. Tidak ada loading seluruh aset 38 provinsi di initial render.
15. Section siap terhubung ke halaman detail provinsi, Passport, RANI, dan Route Planner.

---

## 36. Keputusan Final

<aside>
🎯

**Gunakan SVG custom 38 provinsi sebagai peta utama, dengan arsitektur hybrid:** SVG untuk eksplorasi nasional dan storytelling; Leaflet hanya untuk peta destinasi, peta kecil provinsi, serta Route Planner.

</aside>

Keputusan visual final:

- Peta berada dalam premium glass map canvas.
- Neutral/ivory menjadi warna dominan.
- Navy untuk selection dan struktur.
- Gold untuk focus dan flagship.
- Warna layer digunakan terkontrol.
- 228 aset dipakai melalui progressive loading, bukan dimuat sekaligus.
- Panel detail adalah kelanjutan interaksi map, bukan card terpisah yang terasa tidak terhubung.

---

## 37. Kesimpulan

Interactive Indonesia Map adalah **jantung NUSANTARAYA**. Kualitas section ini menentukan apakah produk terasa sebagai website informatif biasa atau sebagai platform eksplorasi digital nasional yang matang.

Prinsip terpenting:

```
Peta harus indah saat diam, jelas saat digunakan, hidup saat berinteraksi, dan tetap cepat saat memuat data 38 provinsi.
```

Target akhirnya adalah membuat user dan juri berpikir:

> “Ini bukan hanya peta Indonesia. Ini adalah pintu masuk menuju seluruh cerita Nusantara.”
>