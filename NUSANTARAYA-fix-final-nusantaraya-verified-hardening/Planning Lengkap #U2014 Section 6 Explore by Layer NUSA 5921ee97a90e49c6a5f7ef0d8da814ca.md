# Planning Lengkap — Section 6 Explore by Layer NUSANTARAYA

<aside>
🧭

**Dokumen source of truth untuk Section 6 — Explore by Layer pada halaman `/explore`.** Section ini mengubah eksplorasi dari “provinsi mana?” menjadi “cerita apa yang ingin saya temukan?” melalui enam lensa: Budaya, Kuliner, Alam, Sejarah, Jalur Rempah, dan Masa Depan.

</aside>

---

## 1. Ringkasan Eksekutif

**Explore by Layer** adalah section keenam halaman `/explore`, ditempatkan setelah Flagship Provinces. Section 5 memberi pilihan provinsi terkurasi; Section 6 memberi pilihan berdasarkan minat. Pengguna tidak lagi harus mengetahui nama provinsi terlebih dahulu—cukup memilih tema yang menarik, lalu sistem menunjukkan cerita, wilayah, dan provinsi yang relevan.

Konsep final:

```
Six Lenses to See Indonesia Differently
```

Versi Indonesia:

```
Enam Lensa untuk Melihat Nusantara
```

Pengalaman visual final:

```
Interactive Layer Observatory
```

Section bukan kumpulan enam feature card identik. Ia harus terasa seperti **ruang observasi tematik**: satu layer aktif menjadi narasi utama, sementara selector, visual mosaic, mini-map abstraction, contoh provinsi, statistik, dan CTA berubah dalam satu stage yang konsisten.

<aside>
🎯

**Formula UX final:** Pilih minat → pahami karakter layer → lihat contoh cerita dan provinsi → terapkan layer ke peta → lanjutkan ke perjalanan rekomendasi.

</aside>

### 1.1 Keputusan utama

1. Section menampilkan **enam layer editorial**: Budaya, Kuliner, Alam, Sejarah, Rempah, dan Masa Depan.
2. State `all` tetap tersedia sebagai reset, tetapi bukan kartu editorial ketujuh.
3. Hanya satu layer menjadi active layer pada satu waktu.
4. Gunakan `activeLayer` existing dari Explore Control Bar dan Interactive Map.
5. Jangan membuat filter engine, category union, atau state layer baru.
6. Desktop memakai **layer selector + active observatory stage + province recommendation strip**.
7. Tablet memakai selector horizontal dan stage stacked.
8. Mobile memakai compact layer chips/rail + active story card + horizontal recommendation list.
9. CTA utama menerapkan layer dan kembali ke Interactive Map.
10. Asset mengutamakan reuse; tidak perlu enam set aset baru per provinsi.
11. Tidak ada autoplay pergantian layer.
12. Section harus berbeda secara visual dari Flagship Provinces agar halaman memiliki ritme.

---

## 2. Posisi dalam Halaman `/explore`

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
5. Flagship Provinces
6. Explore by Layer ← SECTION INI
7. Recommended Journey
8. Regional Explorer
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Pertanyaan yang dijawab setiap section

- Section 3: **Di mana cerita itu berada?**
- Section 4: **Apa yang perlu saya ketahui tentang provinsi ini?**
- Section 5: **Provinsi unggulan mana yang sebaiknya saya jelajahi?**
- Section 6: **Tema apa yang paling menarik bagi saya?**
- Section 7: **Perjalanan apa yang sebaiknya saya lakukan berikutnya?**

### 2.2 Transisi dari Section 5

Copy transisi:

```
Sudah menemukan gerbang pertamamu?
Sekarang pilih lensa yang ingin kamu gunakan untuk melihat Indonesia.
```

Section 6 tidak boleh terasa seperti pengulangan rail Section 5. Gunakan bahasa visual yang lebih abstrak, tematik, dan informasional.

### 2.3 Handoff ke Section 7

Setelah pengguna menentukan minat, Section 7 dapat menyusun Recommended Journey berdasarkan:

```
activeLayer + selectedProvinceId + activeMode + Passport history
```

---

## 3. Quality Gate Sebelum Implementasi

- [ ]  Section 5 stabil pada desktop, tablet, dan mobile.
- [ ]  `activeLayer` dari Explore Control Bar bekerja.
- [ ]  Interactive Map merespons semua layer.
- [ ]  Result count/map dimming tidak rusak.
- [ ]  Search tidak terhapus saat layer berganti kecuali memang menjadi kontrak produk.
- [ ]  Summary Panel tetap membuka provinsi yang benar setelah layer diterapkan.
- [ ]  State `all` dapat mereset layer.
- [ ]  Icon/pin layer memiliki naming yang konsisten.
- [ ]  Lint, type-check, validator, dan build lulus.

Jika salah satu layer belum memiliki data mapping yang cukup, tampilkan layer dengan partial/fallback content—jangan mengarang coverage provinsi.

---

## 4. Tujuan Produk dan UX

### 4.1 Tujuan pengguna

Pengguna dapat:

1. Menjelajahi Indonesia berdasarkan minat.
2. Memahami perbedaan enam layer dalam beberapa detik.
3. Melihat contoh objek/cerita yang mewakili setiap layer.
4. Menemukan provinsi relevan tanpa search manual.
5. Menerapkan layer ke peta dengan satu tindakan.
6. Melanjutkan ke Summary Panel atau Atlas dari province recommendation.
7. Mendapat rekomendasi perjalanan yang sesuai tema.
8. Menggunakan section melalui mouse, touch, atau keyboard.

### 4.2 Tujuan emosional

```
Indonesia yang sama dapat dilihat melalui banyak cerita.
Setiap lensa membuka hubungan baru antara tempat, budaya, rasa, alam, sejarah, dan masa depan.
```

### 4.3 Tujuan kompetisi/demo

- Menunjukkan bahwa map memiliki sistem eksplorasi, bukan sekadar provinsi clickable.
- Membuktikan kedalaman taxonomy dan data.
- Menghubungkan arsip budaya, NusaRasa, Jalur Rempah, destinasi, dan Nusa Future.
- Menjadi jembatan menuju recommendation engine.
- Menampilkan progressive disclosure tanpa memuat seluruh database.

### 4.4 KPI yang disarankan

- `layer_section_viewed`.
- `layer_selector_changed`.
- `layer_applied_to_map`.
- `layer_province_opened`.
- `layer_story_preview_opened`.
- `layer_reset_to_all`.
- Target awal: ≥40% pengguna yang mencapai section memilih minimal satu layer.

---

## 5. Layer Final dan Kontrak ID

```tsx
export type ExploreLayerId =
  | "all"
  | "budaya"
  | "kuliner"
  | "alam"
  | "sejarah"
  | "rempah"
  | "future";
```

### 5.1 Layer editorial

1. **Budaya** — tradisi, seni, ritual, rumah adat, kerajinan, dan ekspresi hidup.
2. **Kuliner** — rasa, bahan, teknik, hidangan, dan cerita meja makan.
3. **Alam** — gunung, hutan, laut, biodiversitas, desa wisata, dan konservasi.
4. **Sejarah** — kerajaan, pelabuhan, peristiwa, situs, tokoh, dan perubahan zaman.
5. **Jalur Rempah** — pala, cengkeh, perdagangan, pelayaran, dan hubungan dunia.
6. **Masa Depan** — IKN, kota pintar, ekonomi kreatif, UMKM digital, dan green tourism.

### 5.2 State `all`

`all` berfungsi untuk:

- Reset filter.
- Mengembalikan map ke seluruh provinsi.
- Menampilkan overview lintas tema.

Di Section 6, `all` tampil sebagai action kecil:

```
Lihat Semua Cerita
```

Bukan sebagai layer editorial ketujuh yang setara.

---

## 6. Copywriting Final Section

### Eyebrow

```
Jelajah Berdasarkan Minat
```

### Heading

```
Enam Lensa untuk Melihat Nusantara
```

### Subheading

```
Pilih budaya, rasa, alam, sejarah, jalur rempah, atau masa depan—lalu temukan provinsi dan cerita yang terhubung melalui peta NUSANTARAYA.
```

### Supporting microcopy

```
Satu peta, enam cara memulai perjalanan.
```

### CTA utama

```
Lihat Layer Ini di Peta
```

CTA dinamis:

```
Jelajahi Budaya di Peta
Jelajahi Kuliner di Peta
Jelajahi Alam di Peta
Jelajahi Sejarah di Peta
Ikuti Jalur Rempah
Lihat Masa Depan Indonesia
```

### CTA sekunder

```
Lihat Semua Cerita
```

---

## 7. Konsep Visual

### 7.1 Creative direction

```
Editorial Observatory × Cultural Data Lens × Premium Interactive Atlas
```

Section harus terasa seperti pengguna mengganti lensa pada satu alat observasi. Struktur dasar tetap, tetapi warna accent, visual, contoh cerita, province recommendation, statistic, dan microcopy berubah mengikuti layer.

### 7.2 Perbedaan dari Section 5

Section 5:

- Photo-led.
- Province-first.
- Majalah perjalanan/editorial cover.

Section 6:

- Theme-led.
- Data/story-first.
- Observatory/curated discovery interface.

### 7.3 Yang harus dihindari

- Enam card identik dalam grid `3 × 2`.
- Mengulang layout hero kiri + rail kanan Section 5 secara persis.
- Dashboard teknis penuh angka.
- Mini map yang mencoba menggantikan Interactive Map utama.
- Seluruh preview image bergerak bersamaan.
- Warna layer terlalu saturated.
- Icon besar tanpa narasi.
- Copy panjang pada selector kecil.
- Filter baru yang tidak sinkron dengan Map.

---

## 8. Visual Design System

### 8.1 Brand base

```
Ivory Background  #FFFDF8
Warm Canvas       #F8F4EA
Navy Ink          #0D1B2A
Flagship Gold     #C9A84C
Warm Border       #E8E0CE
Muted Text        #5E6570
```

### 8.2 Layer accent

```
Budaya   #B85C38  Terracotta heritage
Kuliner  #C58A2A  Warm saffron/gold
Alam     #2D5A27  Forest green
Sejarah  #2B4C8C  Archival blue
Rempah   #1B7A7A  Maritime teal
Future   #6B3FA0  Digital violet
```

### 8.3 Aturan warna

- Base section tetap ivory/navy.
- Accent layer maksimal 15% area visual.
- Gunakan accent pada active selector, hairline, icon, statistic, map abstraction, dan CTA detail kecil.
- Primary CTA dapat tetap navy/gold agar brand konsisten.
- Jangan mengubah seluruh background section menjadi warna layer penuh.
- Informasi tidak boleh bergantung pada warna saja.

### 8.4 Tipografi

- Section heading: Playfair Display 52–72px desktop.
- Active layer name: Playfair Display 44–64px desktop.
- Layer index/eyebrow: Inter Semibold 11–12px uppercase.
- Layer description: Inter 15–17px, line-height 1.65.
- Statistic: Playfair/Inter Semibold 24–34px.
- Selector: Inter Semibold 13–15px.
- Province recommendation: Inter Medium 13–14px.

### 8.5 Surface

Observatory shell:

```css
background: rgba(255, 253, 248, 0.96);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 28px 90px rgba(13, 27, 42, 0.09);
```

Gunakan satu outer shell utama. Inner area mengandalkan whitespace, divider, dan tonal background—bukan card di dalam card tanpa akhir.

---

## 9. Arsitektur Konten Active Layer

Setiap active layer menampilkan:

1. Layer index.
2. Icon.
3. Layer name.
4. One-line promise.
5. Editorial explanation.
6. Tiga content signals.
7. Dynamic result count.
8. Empat province recommendations.
9. Tiga story/object previews opsional.
10. Active mode note.
11. CTA ke Map.
12. Reset to all.

### 9.1 Content budget

- Promise: 6–10 kata.
- Description: 180–280 karakter.
- Signal: maksimal 2–3 kata.
- Province recommendation: nama + satu alasan pendek.
- Preview title: maksimal 2 baris.
- Jangan memuat artikel penuh.

### 9.2 Dynamic data

Result count, province recommendations, dan story previews harus berasal dari mapping/data existing. Jangan mengarang angka.

Jika source belum memiliki count akurat:

```
Banyak provinsi terhubung
```

lebih baik daripada angka palsu.

---

## 10. Blueprint Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ JELAJAH BERDASARKAN MINAT                                                   │
│ Enam Lensa untuk Melihat Nusantara                                          │
│ Subheading                                                                  │
├───────────────────┬───────────────────────────────────────┬──────────────────┤
│ 01 Budaya         │ ACTIVE LAYER OBSERVATORY              │ LAYER SIGNALS    │
│ 02 Kuliner        │                                       │ 28 provinsi*     │
│ 03 Alam           │ [abstract map / visual mosaic]        │ 120 cerita*      │
│ 04 Sejarah        │                                       │                  │
│ 05 Jalur Rempah   │ BUDAYA                                │ TIGA JEJAK       │
│ 06 Masa Depan     │ Tradisi yang terus hidup              │ Rumah Adat       │
│                   │ Editorial description                 │ Festival         │
│ [Lihat Semua]     │                                       │ Kerajinan        │
│                   │ [Jelajahi Budaya di Peta →]           │                  │
├───────────────────┴───────────────────────────────────────┴──────────────────┤
│ PROVINSI UNTUK DIMULAI                                                       │
│ [Provinsi 1] [Provinsi 2] [Provinsi 3] [Provinsi 4]                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

`*` Angka hanya ilustrasi; harus dihitung dari data.

### 10.1 Rasio area

- Selector: 20–23%.
- Active stage: 52–58%.
- Signals: 20–25%.
- Recommendation strip: full width.
- Minimum stage height: 560–680px.

### 10.2 Mini-map abstraction

Boleh menggunakan:

- Siluet Indonesia non-interaktif dengan node provinsi matching.
- Cluster titik/garis tematik.
- Visual mosaic dari 2–3 gambar existing.
- Map contour/pattern ringan.

Tidak boleh:

- Menyalin seluruh Interactive Map.
- Membuat SVG path kedua dengan seluruh logic hover/click.
- Menampilkan 38 label sekaligus.

Tujuannya preview, bukan map replacement.

---

## 11. Blueprint Tablet

```
Section header
Horizontal layer selector
Active layer visual
Editorial copy + signals
CTA
Horizontal province recommendation rail
```

Aturan:

- Selector horizontal dapat di-scroll.
- Active layer tetap terlihat penuh tanpa nested scroll.
- Signals menjadi 3-column compact row atau 2×2 grid ringan.
- Province recommendation menampilkan 2.2–3 card.
- CTA tidak terdorong terlalu jauh ke bawah.
- Mini-map abstraction disederhanakan.

---

## 12. Blueprint Mobile

```
Eyebrow
Heading
Subheading

Horizontal layer chips/selector
01 / 06
Active layer icon + name
Visual mosaic / map abstraction
Promise
Description
Three signals
Result summary
CTA full-width
Reset link

Province recommendations snap rail
```

### 12.1 Mobile rules

- Selector minimal 44px tinggi.
- Tampilkan partial next chip/card.
- Active layer name tidak lebih dari dua baris.
- Visual ratio 4:3 atau 1:1 tergantung komposisi.
- CTA ke Map full-width.
- Signals dapat wrap.
- Recommendation card minimal 160–200px.
- Native horizontal scroll + CSS snap.
- Tidak ada horizontal page overflow.
- Tidak ada hover-dependent content.

### 12.2 Mobile kecil ≤390px

- Description maksimal 4–6 baris sebelum optional expand.
- Result count dan signals tidak dipaksa satu row.
- CTA reset berada di bawah CTA utama.
- Visual abstraction mengurangi node/dekorasi.

---

## 13. Editorial Direction per Layer

### 13.1 Budaya

- **Promise:** Tradisi yang terus hidup.
- **Description:** Temukan rumah adat, tari, ritual, kerajinan, festival, pakaian, musik, dan praktik budaya yang membentuk identitas komunitas di berbagai wilayah Indonesia.
- **Signals:** Rumah Adat · Festival · Kerajinan.
- **Visual direction:** Tekstur kain, detail arsitektur, gestur seni pertunjukan, atau mosaic budaya yang tidak menyederhanakan satu provinsi menjadi satu simbol.
- **Suggested source:** Archive + `culture.webp`.
- **CTA:** `Jelajahi Budaya di Peta`.

### 13.2 Kuliner

- **Promise:** Indonesia diceritakan melalui rasa.
- **Description:** Ikuti hidangan, bahan, teknik memasak, tradisi meja makan, dan rempah yang menghubungkan rumah, pasar, pelabuhan, dan perjalanan antardaerah.
- **Signals:** Hidangan · Bahan · Cerita Rasa.
- **Visual direction:** Food photography terang, ingredient detail, atau table composition; hindari collage terlalu ramai.
- **Suggested source:** NusaRasa + `food.webp`.
- **CTA:** `Jelajahi Kuliner di Peta`.

### 13.3 Alam

- **Promise:** Dari hutan hingga laut terdalam.
- **Description:** Jelajahi gunung, hutan, laut, kepulauan, biodiversitas, desa wisata, hidden gems, konservasi, dan hubungan manusia dengan lanskap Nusantara.
- **Signals:** Biodiversitas · Hidden Gems · Green Tourism.
- **Visual direction:** Landscape kuat dengan focal point dan layer depth.
- **Suggested source:** `destination.webp` + destination data.
- **CTA:** `Jelajahi Alam di Peta`.

### 13.4 Sejarah

- **Promise:** Jejak masa lalu yang membentuk hari ini.
- **Description:** Telusuri kerajaan, kota pelabuhan, situs, tokoh, jalur perdagangan, konflik, pendidikan, dan perubahan sosial yang membentuk Indonesia dari masa ke masa.
- **Signals:** Kerajaan · Situs · Perubahan Zaman.
- **Visual direction:** Situs sejarah, arsip, peta tua, relief, atau arsitektur; hindari sepia berlebihan.
- **Suggested source:** History/archive data.
- **CTA:** `Telusuri Sejarah di Peta`.

### 13.5 Jalur Rempah

- **Promise:** Dari kepulauan rempah menuju dunia.
- **Description:** Ikuti pala, cengkeh, lada, pelabuhan, kapal, dan jaringan perdagangan yang menghubungkan Nusantara dengan berbagai peradaban dunia.
- **Signals:** Pala · Cengkeh · Jalur Maritim.
- **Visual direction:** Banda, rempah, sea route line, pelabuhan, dan cartographic overlay.
- **Suggested source:** Maluku assets + rempah illustration + `mode-spice-route.svg`.
- **CTA:** `Ikuti Jalur Rempah`.

### 13.6 Masa Depan

- **Promise:** Masa depan Indonesia dibangun dari daerah.
- **Description:** Temukan IKN, kota pintar, ekonomi kreatif, UMKM digital, pendidikan, teknologi, green tourism, dan inovasi lokal yang menghubungkan warisan dengan perubahan.
- **Signals:** IKN · Kota Pintar · Ekonomi Kreatif.
- **Visual direction:** IKN/urban landscape, digital network motif, UMKM, dan sustainable city—hindari sci-fi generik.
- **Suggested source:** `modern.webp`, `ikn-nusantara.webp`, future data.
- **CTA:** `Lihat Masa Depan Indonesia`.

<aside>
⚠️

Editorial copy adalah arahan presentasi. Coverage, jumlah provinsi, preview item, dan rekomendasi harus dihasilkan dari data terkurasi. Jangan menampilkan klaim sejarah atau budaya tanpa sumber.

</aside>

---

## 14. Province Recommendation System

Setiap layer menampilkan 4 provinsi untuk memulai. Rekomendasi harus:

- Berasal dari kategori/data matching.
- Tidak hanya berisi delapan flagship.
- Memiliki variasi wilayah.
- Menampilkan alasan satu baris.
- Memiliki thumbnail existing.
- Dapat membuka Summary Panel atau Atlas sesuai contract.

### 14.1 Ranking yang disarankan

```
content completeness
+ layer relevance
+ regional diversity
+ flagship/deep content boost
+ Passport novelty optional
```

### 14.2 Fallback

Jika hanya sedikit data matching:

- Tampilkan item yang tersedia.
- Jangan mengisi card kosong.
- Jangan menduplikasi provinsi.
- Jangan memaksakan tepat empat.

### 14.3 Interaction

Klik recommendation:

```
set selectedProvinceId
→ simpan activeLayer
→ scroll ke Interactive Map
→ buka Summary Panel
```

Alternative secondary link:

```
Buka Atlas
```

Jangan menaruh terlalu banyak action pada card mobile.

---

## 15. Data Model

```tsx
export type ExploreLayerDefinition = {
  id: Exclude<ExploreLayerId, "all">;
  index: number;
  label: string;
  shortLabel: string;
  promise: string;
  description: string;
  signals: [string, string, string];
  icon: string;
  accentColor: string;
  visualAsset?: string;
  mapOverlay?: string;
  ctaLabel: string;
  keywords: string[];
};

export type ExploreLayerSummary = {
  layerId: Exclude<ExploreLayerId, "all">;
  provinceCount?: number;
  storyCount?: number;
  provinceIds: string[];
  featuredItemIds?: string[];
};

export type LayerProvinceRecommendation = {
  provinceId: string;
  reason: string;
  thumbnail: string;
  href: string;
};
```

### 15.1 Source of truth

- Layer IDs berasal dari Map/Control Bar contract.
- Province/category mapping berasal dari province data.
- Count dihitung dari data, bukan hardcoded.
- Thumbnail berasal dari province asset manifest.
- Story/object preview berasal dari Archive, NusaRasa, destinations, history, spice, atau future data.
- Section hanya menyimpan editorial metadata yang memang khusus presentasi.

### 15.2 Validator

- Tepat enam editorial layer.
- Semua ID valid dan unik.
- Semua icon path valid.
- Accent color valid.
- Signals tepat tiga.
- CTA label tersedia.
- Recommendation province ID valid.
- Tidak ada duplicate recommendation dalam satu layer.
- Tidak ada broken href.

---

## 16. State Contract

```tsx
type ExploreByLayerState = {
  activeLayer: ExploreLayerId;
  previewLayer: Exclude<ExploreLayerId, "all">;
  interactionSource:
    | "control-bar"
    | "map"
    | "layer-section"
    | "reset";
  hasUserInteracted: boolean;
};
```

### 16.1 Active vs preview

Rekomendasi sederhana:

- Section membaca dan menulis `activeLayer` shared state.
- Jika `activeLayer === "all"`, `previewLayer` default ke `budaya` tanpa mengubah Map sampai user memilih/CTA.
- Memilih selector dapat langsung memperbarui `activeLayer` bila sinkronisasi real-time diinginkan.
- Alternatif aman: selector hanya mengubah preview, CTA menerapkan layer.

Keputusan final yang direkomendasikan:

```
Selector mengubah activeLayer shared state secara langsung,
tetapi Map hanya di-scroll saat CTA ditekan.
```

Ini menjaga seluruh UI sinkron tanpa memindahkan viewport secara tiba-tiba.

### 16.2 Reset

Klik `Lihat Semua Cerita`:

```
activeLayer = "all"
→ Map kembali menampilkan seluruh provinsi
→ Section tetap menampilkan last preview secara visual
→ status menjelaskan bahwa semua layer aktif
```

### 16.3 Search dan mode

- Perubahan layer tidak menghapus `searchQuery` tanpa alasan.
- `activeMode` tetap dipertahankan.
- Layer content dapat menyesuaikan microcopy untuk Explore/Tourist/Learn, tetapi tidak mengubah struktur dasar.

---

## 17. Integrasi dengan Control Bar dan Map

### 17.1 Selector layer

```
Klik Alam
→ set activeLayer = "alam"
→ update Control Bar chip
→ update map matching/dimming
→ update Section 6 visual/content
→ tidak auto-scroll
```

### 17.2 CTA ke Map

```
Klik Jelajahi Alam di Peta
→ pastikan activeLayer = "alam"
→ scroll smooth ke #interactive-map
→ focus ke map status/heading
→ announce result count
→ pertahankan mode dan search
```

### 17.3 Province recommendation

```
Klik Papua Barat Daya
→ activeLayer tetap alam
→ selectedProvinceId diperbarui
→ scroll ke map
→ buka Summary Panel
```

### 17.4 Browser history

Layer tidak perlu menambah history entry untuk setiap selection. Optional URL sync:

```
/explore?layer=alam#interactive-map
```

Jika URL sync sudah tersedia, gunakan `replace` untuk preview/filter changes dan `push` hanya untuk navigasi bermakna.

---

## 18. Asset Strategy

### 18.1 Wajib diaudit

```
/assets/map/pins/pin-budaya*.svg
/assets/map/pins/pin-kuliner*.svg
/assets/map/pins/pin-alam*.svg
/assets/map/pins/pin-sejarah*.svg
/assets/map/pins/pin-rempah*.svg
/assets/map/pins/pin-kota*.svg
```

Normalisasi naming. Jangan menyimpan dua set icon identik tanpa alasan.

### 18.2 Overlay optional

```
/assets/map/modes/mode-spice-route.svg
/assets/map/modes/mode-future-city.svg
/assets/map/modes/mode-heatmap.webp
```

Prioritas:

1. Spice route overlay.
2. Future city overlay.
3. Heatmap optional.

### 18.3 Visual layer

Gunakan reuse terlebih dahulu:

```
Budaya   → culture.webp / Archive
Kuliner  → food.webp / NusaRasa
Alam     → destination.webp
Sejarah  → history/archive visual
Rempah   → Maluku + rempah illustrations
Future   → modern.webp / IKN asset
```

Jika perlu dedicated cover:

```
/assets/explore/layers/budaya.webp
/assets/explore/layers/kuliner.webp
/assets/explore/layers/alam.webp
/assets/explore/layers/sejarah.webp
/assets/explore/layers/rempah.webp
/assets/explore/layers/future.webp
```

Dedicated cover bukan syarat jika reuse terlihat konsisten.

### 18.4 Tidak dimuat

- Seluruh 228 province assets.
- Deep Atlas payload.
- Audio.
- 3D.
- Video loop.
- Seluruh Archive/NusaRasa dataset ke client jika hanya butuh preview.

### 18.5 Credits

Semua visual memiliki sumber, lisensi, alt text, dan catatan crop.

---

## 19. Motion System

### 19.1 Entrance

- Header fade-up.
- Selector group masuk sebagai satu unit.
- Observatory shell opacity/scale ringan.
- Active visualization reveal terakhir.

### 19.2 Layer change

- Accent color crossfade 220–320ms.
- Icon rotate/scale sangat kecil.
- Active layer title fade-up 8–10px.
- Visual mosaic crossfade 300–450ms.
- Signals stagger 30–50ms.
- Province recommendation memakai opacity/transform ringan.

### 19.3 Active indicator

Gunakan shared layout indicator bila motion library mendukung. Indicator berpindah, bukan membuat enam glow berjalan.

### 19.4 Mini-map nodes

- Matching nodes boleh fade/scale satu kali.
- Jangan pulse terus-menerus.
- Maksimal 6–10 node visual pada preview.

### 19.5 Hover/focus

- Selector lift maksimal 1–2px.
- Icon scale maksimal 1.04.
- Recommendation thumbnail scale maksimal 1.02.
- CTA arrow shift 3–4px.

### 19.6 Reduced motion

- Crossfade maksimal 100–120ms.
- Matikan stagger, scale, node animation, parallax, dan smooth scroll panjang.
- Functionality tetap penuh.

---

## 20. Smooth Scroll Contract

CTA ke Map menggunakan smooth scroll yang dapat dibatalkan.

- Offset sticky navbar harus benar.
- Durasi 650–850ms dengan premium easing jika custom utility existing.
- User wheel/touch/keyboard membatalkan animation.
- Focus dipindahkan setelah target tercapai, bukan di tengah scroll.
- Jangan auto-scroll hanya karena selector berubah.
- Reduced motion menggunakan scroll instan.

---

## 21. Accessibility

### 21.1 Semantik

```html
<section id="explore-by-layer" aria-labelledby="explore-by-layer-heading">
```

- Satu H2 untuk section.
- Active layer name menjadi H3.
- Selector memakai buttons/list atau tabs sesuai interaction model.
- Jika memakai tabs, implementasikan tab semantics lengkap; jangan setengah-setengah.
- CTA Map berupa button karena mengubah state dan scroll dalam halaman.
- Province href dapat berupa link jika membuka Atlas.

### 21.2 Keyboard

- Tab menuju selector group.
- Arrow Left/Right pada horizontal selector.
- Arrow Up/Down pada vertical selector.
- Home/End.
- Enter/Space memilih.
- Focus tetap pada selector setelah content berubah.
- CTA dan recommendation reachable.

### 21.3 Screen reader

- Announce active layer secara singkat.
- Result summary memakai `aria-live="polite"`.
- Jangan mengumumkan seluruh description setiap kali arrow ditekan.
- Decorative mini-map `aria-hidden`.
- Icon dekoratif tidak diduplikasi pembacaannya.

### 21.4 Contrast dan touch

- Body 4.5:1.
- Large text 3:1.
- Layer accent tidak langsung dipakai untuk small text jika gagal contrast.
- Touch target minimal 44×44px.
- Active state memiliki shape/border/icon, bukan warna saja.

---

## 22. Performance Budget

### 22.1 Target

- Layer selection feedback <100ms.
- Tidak ada layout shift besar.
- Section tidak memuat full database.
- Tidak ada long task >200ms.
- Visual switch tetap responsif pada mobile mid-range.

### 22.2 Teknik

- Gunakan summary data/chunk ringan.
- Memoize result mapping.
- Precompute counts bila memungkinkan.
- Lazy-load visual section di bawah fold.
- Image width/height dan `sizes` eksplisit.
- Preload hanya visual active/next intent.
- Gunakan CSS transform/opacity.
- Hindari filter blur besar dan SVG nodes berlebihan.
- Jangan membuat map engine kedua.

### 22.3 Payload principle

```
Load summary, not archive.
Load preview, not chapter.
Load one active visual, not six deep collections.
```

---

## 23. Component Architecture

```
src/components/explore/explore-by-layer/
  ExploreByLayerSection.tsx
  LayerSectionHeader.tsx
  LayerSelector.tsx
  LayerSelectorItem.tsx
  LayerObservatory.tsx
  LayerVisualStage.tsx
  LayerMiniMap.tsx
  LayerEditorialContent.tsx
  LayerSignals.tsx
  LayerResultSummary.tsx
  LayerProvinceRail.tsx
  LayerProvinceCard.tsx
  LayerActions.tsx
  LayerVisualFallback.tsx
  index.ts

src/data/layers/
  exploreLayers.ts
  layerEditorial.ts
  layerRecommendations.ts

src/hooks/
  useExploreLayer.ts
  useLayerRecommendations.ts
  useLayerKeyboardNavigation.ts
  useLayerAssetPreload.ts

src/types/
  explore-layer.ts

src/animations/
  layerMotion.ts
```

### 23.1 Tanggung jawab

**`ExploreByLayerSection.tsx`**

- Compose section.
- Membaca/menulis activeLayer shared state.
- Tidak mengandung logic Map rendering.

**`LayerSelector.tsx`**

- Enam selector + reset.
- Keyboard/touch.
- Active indicator.

**`LayerObservatory.tsx`**

- Active visual, editorial copy, signals, result summary, CTA.
- Menjaga shell stabil.

**`LayerMiniMap.tsx`**

- Abstraksi preview saja.
- Tidak menjadi Interactive Map kedua.

**`LayerProvinceRail.tsx`**

- Recommendation hasil data.
- Responsive rail/snap.

**`LayerActions.tsx`**

- Apply/open Map.
- Reset all.

---

## 24. Interaction Flows

### 24.1 Entry default

```
activeLayer = all
→ Section menampilkan Budaya sebagai preview default
→ status menjelaskan semua cerita masih terlihat
→ Map tidak berubah
```

### 24.2 Entry dari Control Bar

```
activeLayer = kuliner
→ Section 6 membuka Kuliner
→ selector Kuliner aktif
→ visual, signals, count, recommendations sinkron
```

### 24.3 Select layer

```
Klik Rempah
→ activeLayer = rempah
→ Control Bar dan Map sinkron
→ Section content crossfade
→ tidak auto-scroll
```

### 24.4 CTA Map

```
Klik Ikuti Jalur Rempah
→ scroll ke Map
→ focus Map status
→ overlay/pin rempah aktif
```

### 24.5 Recommendation

```
Klik Maluku
→ selectedProvinceId = maluku
→ activeLayer tetap rempah
→ scroll Map
→ Summary Panel terbuka
```

### 24.6 Reset

```
Klik Lihat Semua Cerita
→ activeLayer = all
→ Map reset layer
→ search/mode tetap
→ Section mempertahankan last preview atau kembali ke Budaya
```

---

## 25. Loading, Partial, Empty, dan Error States

### Loading

- Skeleton active visual.
- Selector tetap usable bila metadata lokal sudah tersedia.
- Count skeleton tidak mengubah layout.

### Partial

- Sembunyikan statistic yang tidak tersedia.
- Gunakan recommendations yang ada.
- Jangan menampilkan placeholder card kosong.

### Empty

```
Belum ada cerita yang cocok untuk layer ini.
[Lihat Semua Cerita]
```

### Asset error

- Accent gradient + icon + layer name.
- Tidak ada broken image.

### Data error

```
Layer belum dapat dimuat.
[Coba Lagi] [Kembali ke Semua]
```

Map filter tidak boleh rusak hanya karena preview Section 6 gagal.

---

## 26. Analytics Contract

```tsx
type LayerAnalyticsPayload = {
  layerId: ExploreLayerId;
  previousLayerId?: ExploreLayerId;
  source: "selector" | "control-bar" | "map" | "reset";
  activeMode: ExploreModeId;
  resultCount?: number;
  viewport: "desktop" | "tablet" | "mobile";
};
```

Events:

```
layer_section_viewed
layer_selector_changed
layer_applied_to_map
layer_reset_to_all
layer_province_clicked
layer_preview_clicked
layer_asset_failed
```

Jangan mengirim event selection saat initial hydration.

---

## 27. Responsive Matrix

| Viewport | Selector | Observatory | Recommendations |
| --- | --- | --- | --- |
| ≥1280px | Vertical left | Center + signals right | 4 cards full row |
| 1024–1279px | Vertical compact | Center + compact signals | 4 compact cards |
| 768–1023px | Horizontal | Stacked | Horizontal rail |
| 430–767px | Horizontal chips | Single column | Snap carousel |
| ≤390px | Compact scroll | Single compact | Compact snap |

Viewport QA:

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

### Data

- Enam layer unik.
- IDs sesuai union.
- Count benar.
- Recommendation valid dan tidak duplikat.
- Icon/asset/href valid.

### Functional

- Semua selector.
- Sync Control Bar.
- Sync Map.
- Reset all.
- CTA scroll.
- Recommendation membuka provinsi benar.
- Search dan mode tetap.
- Rapid switching stabil.

### Responsive

- Selector tidak terpotong.
- Long label `Jalur Rempah` dan `Masa Depan` aman.
- Recommendation rail nyaman.
- Tidak ada horizontal page overflow.
- Touch target aman.

### Accessibility

- Keyboard-only.
- Screen reader flow.
- Focus visible.
- Live region.
- Contrast.
- Reduced motion.
- Zoom 200%.

### Performance

- 4G/CPU throttling.
- Asset loading per layer.
- Tidak memuat full datasets.
- Switch cepat tanpa stale content.
- CLS dan memory.

### Build

```
lint
type-check
layer data validator
asset manifest check
broken-link check
production build
```

---

## 29. Acceptance Criteria

### Functional

- [ ]  Tepat enam editorial layer.
- [ ]  `all` berfungsi sebagai reset.
- [ ]  Selector menyinkronkan Control Bar dan Map.
- [ ]  CTA ke Map bekerja dengan offset benar.
- [ ]  Recommendation membuka provinsi yang benar.
- [ ]  Search dan mode tidak terhapus tanpa alasan.
- [ ]  Tidak ada state/engine layer duplikat.
- [ ]  Partial/error fallback tersedia.

### Visual

- [ ]  Tidak terlihat seperti grid enam feature cards.
- [ ]  Active layer menjadi focal point.
- [ ]  Section berbeda dari Flagship Provinces tetapi satu brand.
- [ ]  Accent color terkontrol.
- [ ]  Mini-map tidak menyaingi map utama.
- [ ]  Content swap tidak menyebabkan layout shift besar.
- [ ]  Whitespace lebih dominan daripada nested card.

### Responsive

- [ ]  Desktop observatory seimbang.
- [ ]  Tablet selector horizontal nyaman.
- [ ]  Mobile chips dan recommendation snap nyaman.
- [ ]  Touch target minimal 44px.
- [ ]  Tidak ada horizontal overflow.

### Accessibility

- [ ]  Keyboard navigation bekerja.
- [ ]  Focus tidak hilang saat layer berubah.
- [ ]  Live region ringkas.
- [ ]  Active state tidak hanya warna.
- [ ]  Reduced motion didukung.
- [ ]  Contrast aman.

### Performance/assets

- [ ]  Tidak memuat full Archive/Atlas/NusaRasa.
- [ ]  Icon dan visual tidak rusak.
- [ ]  Naming aset konsisten.
- [ ]  Source/lisensi terdokumentasi.
- [ ]  Interaction <100ms secara wajar.
- [ ]  Production build lulus.

---

## 30. Tahapan Implementasi

### Fase 1 — Audit contract

1. Audit activeLayer dan Control Bar.
2. Audit Map layer behavior.
3. Audit category mapping.
4. Audit icons/overlays/assets.
5. Normalisasi naming.
6. Buat validator.

### Fase 2 — Data composition

1. Buat editorial metadata enam layer.
2. Compose count.
3. Compose recommendations.
4. Compose preview items.
5. Pastikan tidak mengimpor full data ke client.

### Fase 3 — Desktop static

1. Header.
2. Vertical selector.
3. Observatory shell.
4. Active visual.
5. Signals/result summary.
6. Recommendation strip.

### Fase 4 — Shared state integration

1. Sync activeLayer.
2. Reset all.
3. CTA scroll to Map.
4. Recommendation → Summary.
5. Preserve search/mode.
6. Optional URL sync.

### Fase 5 — Tablet/mobile

1. Horizontal selector.
2. Stacked observatory.
3. Snap recommendation rail.
4. Touch target.
5. Copy/visual adaptation.

### Fase 6 — Motion/accessibility

1. Layer crossfade.
2. Active indicator.
3. Reduced motion.
4. Keyboard.
5. Live region.
6. Focus/contrast.

### Fase 7 — QA

1. Functional.
2. Data/asset.
3. Responsive.
4. Accessibility.
5. Performance.
6. Lint/type-check/build.

---

## 31. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit state, data, dan aset | 3–5 jam |
| Data composition dan validator | 3–6 jam |
| Desktop observatory | 6–10 jam |
| Map/Control Bar integration | 4–7 jam |
| Tablet dan mobile | 4–7 jam |
| Motion dan accessibility | 4–7 jam |
| QA dan polish | 4–7 jam |

Total realistis:

```
28–49 jam kerja efektif
```

Versi demo:

```
6 layer + shared state + CTA Map + mobile core
18–28 jam
```

---

## 32. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti feature grid | Section generik | Satu observatory stage aktif |
| Membuat map kedua | Duplikasi dan berat | Mini-map hanya abstraction |
| State layer ganda | Control Bar/Map tidak sinkron | Gunakan shared activeLayer |
| Count palsu/tidak sinkron | Kredibilitas turun | Hitung dari source atau sembunyikan |
| Data terlalu besar | Bundle berat | Summary/chunk ringan |
| Warna terlalu ramai | Brand melemah | Ivory/navy dominan, accent maksimal 15% |
| Rekomendasi hanya flagship | Cakupan terasa sempit | Ranking + regional diversity |
| Scroll otomatis mengganggu | Kontrol user hilang | Scroll hanya saat CTA |
| Aset Rempah/Future tidak ada | Visual timpang | Fallback gradient + icon, cari aset prioritas |
| Klaim budaya/sejarah lemah | Kredibilitas turun | Data terkurasi dan source review |

---

## 33. Strategi Demo Juri

Flow 50–80 detik:

```
1. Scroll dari Flagship Provinces ke Explore by Layer.
2. Pilih Kuliner.
3. Tunjukkan visual, signals, count, dan province recommendations.
4. Klik Jelajahi Kuliner di Peta.
5. Map memfilter provinsi tanpa kehilangan mode.
6. Kembali ke Section 6.
7. Pilih Jalur Rempah.
8. Tunjukkan Maluku dan route overlay.
9. Pilih Masa Depan.
10. Tunjukkan Kalimantan Timur/IKN.
11. Lanjut ke Recommended Journey.
```

Nilai yang terlihat:

- Shared state nyata.
- Taxonomy terstruktur.
- Discovery berdasarkan minat.
- Progressive loading.
- Heritage–nature–future dalam satu sistem.

---

## 34. Handoff ke Section 7 — Recommended Journey

Section 6 menutup dengan microcopy:

```
Lensa pilihanmu sudah siap.
Sekarang biarkan NUSANTARAYA menyusun perjalanan berikutnya.
```

Data handoff:

```tsx
{
  activeLayer,
  activeMode,
  selectedProvinceId,
  passportProvinceIds,
}
```

Section 7 dapat menggunakan data tersebut untuk:

- Rute budaya.
- Jelajah rasa.
- Ekspedisi alam.
- Jejak sejarah.
- Jalur rempah.
- Perjalanan masa depan.

Jangan membangun recommendation engine Section 7 di dalam Section 6.

---

## 35. Checklist Handoff

### Desain

- [ ]  Desktop observatory.
- [ ]  Enam active layer state.
- [ ]  Reset all.
- [ ]  Tablet/mobile.
- [ ]  Loading/partial/error.
- [ ]  Reduced motion/focus.

### Konten

- [ ]  Promise dan description enam layer.
- [ ]  Tiga signals per layer.
- [ ]  CTA labels.
- [ ]  Preview item terkurasi.
- [ ]  Province reason.
- [ ]  Sources dan credits.

### Data

- [ ]  Category mapping.
- [ ]  Count.
- [ ]  Recommendations.
- [ ]  Story preview IDs.
- [ ]  Asset manifest.

### Engineering

- [ ]  activeLayer ownership.
- [ ]  Control Bar sync.
- [ ]  Map sync.
- [ ]  Smooth scroll/focus.
- [ ]  Reset behavior.
- [ ]  URL policy.
- [ ]  Analytics.
- [ ]  Validator.

---

## 36. Definition of Done

Section 6 selesai jika:

1. Enam editorial layer tersedia.
2. `all` berfungsi sebagai reset.
3. Satu active observatory stage menjadi focal point.
4. Control Bar, Map, dan Section 6 memakai state yang sama.
5. CTA menerapkan layer dan kembali ke Map.
6. Recommendation membuka provinsi yang benar.
7. Search dan active mode tetap stabil.
8. Desktop, tablet, dan mobile nyaman.
9. Keyboard, focus, live region, dan reduced motion bekerja.
10. Tidak ada map engine kedua.
11. Tidak memuat full datasets/deep assets.
12. Count dan recommendation berasal dari data.
13. Tidak ada broken icon/image/link.
14. Aset Rempah/Future memiliki fallback.
15. Lint, type-check, validator, dan production build lulus.
16. Section terasa premium dan berbeda dari Section 5.
17. Handoff ke Recommended Journey jelas.
18. Demo dapat diulang tanpa state rusak.

---

## 37. Dokumen Terkait

- [Planning Lengkap — Explore Control Bar NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Explore-Control-Bar-NUSANTARAYA-cb9fbb2a52f64bbda42c7a41793fa05b?pvs=21)
- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Redesign — Province Summary Panel + Deep Province Atlas NUSANTARAYA](https://app.notion.com/p/Planning-Redesign-Province-Summary-Panel-Deep-Province-Atlas-NUSANTARAYA-4833d0e1ba3848d08945e053447efe92?pvs=21)
- [Planning Lengkap — Section 5 Flagship Provinces NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Flagship-Provinces-NUSANTARAYA-1b71c64507ee424fbb85c2b21b1b91f0?pvs=21)
- [Panduan Aset & Struktur Folder NUSANTARAYA](https://app.notion.com/p/Panduan-Aset-Struktur-Folder-NUSANTARAYA-47e098210a3c82b78399014954613af2?pvs=21)

---

## 38. Keputusan Final

<aside>
🏆

**Arah final yang dipilih:** Section 6 menjadi Interactive Layer Observatory dengan enam selector, satu active thematic stage, preview visual ringan, signals, result summary, province recommendations, dan CTA yang menerapkan shared `activeLayer` ke Interactive Map. Ivory–navy tetap dominan; warna layer menjadi accent terkontrol.

</aside>

Prinsip penutup:

```
Jangan tampilkan enam tema sebagai enam kartu yang selesai dibaca.
Biarkan pengguna mengganti lensa, melihat hubungan baru, lalu kembali ke peta dengan tujuan yang lebih jelas.
```