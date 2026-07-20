# Planning Lengkap — Map Insights / Mini Stats Section NUSANTARAYA

<aside>
📊

**Dokumen source of truth untuk Map Insights / Mini Stats pada halaman `/explore` / Nusa Map Full Page NUSANTARAYA.** Section ini menerjemahkan skala, state, dan nilai peta menjadi insight singkat yang kredibel, kontekstual, dapat ditindaklanjuti, dan tetap ringan.

</aside>

<aside>
🎯

**Keputusan strategis:** jadikan section ini **compact contextual insight band**, bukan dashboard statistik besar. Posisikan setelah pengalaman Interactive Map + Province Summary dan sebelum Flagship Provinces. Gunakan label internal **Section 4B** agar section 5–10 existing tidak perlu dinomori ulang.

</aside>

<aside>
🏆

**Formula pengalaman:** pahami skala Nusantara → lihat konteks aktif → temukan sinyal menarik → kembali melakukan eksplorasi.

</aside>

---

## 1. Ringkasan Eksekutif

**Map Insights / Mini Stats** adalah lapisan ringkas setelah pengguna mencoba peta atau membuka ringkasan provinsi. Section ini menjawab:

> “Seberapa luas cakupan Nusa Map, apa yang sedang ditampilkan, dan apa langkah eksplorasi berikutnya?”
> 

Section tidak sekadar menampilkan angka besar. Ia menggabungkan:

- **canonical scale**: 38 provinsi, 7 wilayah, 8 flagship, 7 pilar;
- **live context**: mode, layer, hasil aktif, provinsi terpilih;
- **editorial insight**: satu fakta atau pola terkurasi yang relevan;
- **actionable handoff**: CTA kembali ke Map, Flagship, Layer, Atlas, atau Journey.

### 1.1 Konsep final

```
Nusantara at a Glance
```

Versi produk:

```
Ringkasan hidup yang menunjukkan skala peta dan apa yang dapat dijelajahi berikutnya.
```

### 1.2 Target kesan

- ringkas tetapi bernilai;
- premium dan editorial;
- berbasis data, bukan angka dekoratif;
- terhubung ke shared state;
- mudah dipahami dalam 3–5 detik;
- menjadi napas visual setelah map yang padat.

---

## 2. Posisi dalam Halaman

Urutan halaman yang direkomendasikan:

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
4B. Map Insights / Mini Stats ← SECTION INI
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey / Smart Suggestions
8. Regional Explorer
9. Nusa Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Alasan posisi

1. Setelah Map, angka memiliki konteks nyata.
2. Setelah Province Summary, section dapat membaca provinsi yang baru dipilih.
3. Sebelum Flagship, statistik `8 Flagship` menjadi handoff alami.
4. Section menjadi jeda visual sebelum rangkaian editorial panjang.
5. Penomoran existing Section 5–10 tetap stabil.

### 2.2 Mengapa tidak diletakkan sebelum Map

- Pengguna belum memiliki konteks terhadap angka.
- Hero sudah memiliki mini stats statis.
- Risiko duplikasi dengan Hero terlalu tinggi.
- Insight hidup lebih bermakna setelah interaksi.

### 2.3 Aturan visibilitas

- Section selalu tersedia, termasuk sebelum ada pilihan provinsi.
- Isi dinamis meningkat setelah user berinteraksi.
- Jangan menyembunyikan seluruh section saat state kosong.
- Gunakan default editorial insight yang tetap kredibel.

---

## 3. Peran dalam Narasi Produk

```
Hero menjelaskan janji.
Control Bar memberi kendali.
Interactive Map membuktikan pengalaman.
Province Summary memberi orientasi.
Map Insights merangkum makna.
Flagship Provinces memberi jalur terkurasi.
```

Section ini harus membuat pengguna memahami bahwa NUSANTARAYA:

- memiliki cakupan nasional;
- tidak berhenti pada visual peta;
- mempunyai struktur data dan kurasi;
- mampu membaca konteks eksplorasi;
- menyediakan jalan lanjutan yang jelas.

---

## 4. Tujuan Produk dan UX

### 4.1 Tujuan pengguna

Pengguna dapat:

1. Memahami skala Nusa Map dalam satu glance.
2. Mengetahui jumlah hasil yang sesuai filter aktif.
3. Melihat mode, layer, wilayah, atau provinsi aktif.
4. Mendapat satu insight editorial yang relevan.
5. Mengetahui apakah data merupakan angka tetap, hasil filter, atau progress personal.
6. Melanjutkan eksplorasi melalui CTA yang sesuai.

### 4.2 Tujuan emosional

```
Indonesia terasa luas tetapi tidak membingungkan.
Peta ini memiliki kedalaman dan struktur.
Pilihan saya menghasilkan respons yang nyata.
Saya selalu tahu apa yang dapat dibuka berikutnya.
```

### 4.3 Tujuan demo lomba

- Menunjukkan skala 38 provinsi secara jelas.
- Membuktikan shared state Map–Layer–Mode–Province.
- Memperlihatkan data storytelling tanpa dashboard kompleks.
- Memberi wow moment kecil setelah map utama.
- Mengarahkan demo ke Flagship/Layer secara natural.

### 4.4 KPI awal

- ≥60% pengguna yang mencapai section memahami jumlah hasil aktif.
- ≥20% melakukan CTA dari section.
- ≥15% membuka Flagship, Layer, Map, atau Atlas dari insight.
- 100% perubahan state utama menghasilkan copy yang benar.
- Tidak ada angka tanpa definisi dan source label internal.

---

## 5. Scope dan Batas Tanggung Jawab

### 5.1 Termasuk

- Empat canonical mini stats.
- Satu live result stat.
- Context summary aktif.
- Satu editorial insight terkurasi.
- CTA kontekstual.
- Loading, empty, filtered, selected, no-result, dan error state.
- ID/EN copy.
- Responsive, accessibility, analytics, performance, dan tests.

### 5.2 Tidak termasuk

- Dashboard analytics penuh.
- Grafik batang/pie kompleks.
- Peringkat budaya atau provinsi “terbaik”.
- Statistik nasional real-time tanpa sumber.
- Progress Passport lengkap.
- Detail 38 provinsi.
- Map engine kedua.
- API wajib.
- Counter palsu atau angka acak.

### 5.3 Guardrail utama

> Jika angka tidak dapat dijelaskan definisi, asal, dan waktu pembaruannya, jangan tampilkan.
> 

---

## 6. Arsitektur Informasi Final

Section memiliki lima lapisan:

```
1. Editorial header compact
2. Canonical stats rail
3. Live context card
4. Editorial insight + evidence
5. Contextual CTA handoff
```

Prioritas visual:

1. Angka atau insight aktif.
2. Heading section.
3. Live context.
4. CTA.
5. Decorative motif.

---

## 7. Paket Statistik Final

### 7.1 Canonical stats

| Nilai | Label | Definisi | Action |
| --- | --- | --- | --- |
| `38` | Provinsi | Seluruh provinsi Indonesia yang tersedia pada peta. | Kembali ke Map. |
| `7` | Wilayah Jelajah | Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, Papua. | Buka Regional Explorer. |
| `8` | Flagship | Provinsi dengan materi Atlas terdalam untuk demo dan eksplorasi. | Buka Flagship Provinces. |
| `7` | Pilar Eksplorasi | Fondasi konseptual NUSANTARAYA; bukan jumlah filter UI. | Buka penjelasan pilar bila route tersedia. |

### 7.2 Live stat

```
{resultCount}
Provinsi sesuai pilihanmu
```

Contoh:

```
12 provinsi sesuai Layer Alam
8 provinsi flagship ditampilkan
1 provinsi cocok untuk pencarian “gudeg”
38 provinsi siap dijelajahi
```

### 7.3 Jangan mencampur istilah

- `7 Pilar` = konsep produk.
- `6 Layer Tematik` = Budaya, Kuliner, Alam, Sejarah, Rempah, Future.
- `Semua` adalah filter netral, bukan layer tematik ketujuh.
- `7 Wilayah` = pengelompokan geografis editorial.

### 7.4 Angka opsional untuk engineering, bukan UI utama

```
228 aset visual = 38 × 6 aset provinsi
```

Boleh muncul pada detail developer/demo teknis, tetapi tidak direkomendasikan sebagai stat utama pengguna karena terasa internal.

---

## 8. Sistem Insight Editorial

### 8.1 Definisi

Insight adalah satu kalimat bermakna yang menghubungkan angka dengan konteks. Bukan fakta acak dan bukan klaim real-time.

### 8.2 Prioritas pemilihan insight

```
1. Selected province
2. Active search result
3. Active thematic layer
4. Flagship-only state
5. Active mode
6. Default editorial insight
```

### 8.3 Contoh default

```
Dari 38 provinsi, delapan flagship menjadi pintu masuk tercepat untuk melihat kedalaman penuh Atlas NUSANTARAYA.
```

### 8.4 Contoh per layer

- **Budaya:** `Tradisi, rumah adat, festival, dan ekspresi lokal tersebar lintas tujuh wilayah—tidak berhenti pada satu pusat budaya.`
- **Kuliner:** `Layer Kuliner menghubungkan rasa, rempah, teknik memasak, dan cerita daerah dalam satu peta.`
- **Alam:** `Layer Alam menyorot bentang gunung, laut, hutan, desa wisata, dan biodiversitas secara selektif.`
- **Sejarah:** `Layer Sejarah membantu melihat hubungan kerajaan, pelabuhan, situs warisan, dan perubahan wilayah.`
- **Rempah:** `Jalur Rempah berpusat kuat di Maluku, lalu terhubung dengan pelabuhan dan jaringan maritim Nusantara.`
- **Future:** `Kota Masa Depan menghubungkan IKN, smart city, ekonomi kreatif, dan transformasi digital daerah.`

### 8.5 Contoh per mode

- **Explore:** `Temukan hubungan tak terduga antara provinsi, tema, dan perjalanan.`
- **Tourist:** `Fokuskan peta pada destinasi, rasa, etika wisata, dan handoff ke Route Planner.`
- **Learn:** `Baca konteks sejarah, budaya, bahasa, dan sumber melalui Atlas dan Archive.`

### 8.6 Contoh selected province

```
DI Yogyakarta dipilih · Jawa · Flagship · kuat pada Budaya, Sejarah, dan Kuliner.
```

Aturan:

- hanya gunakan tag yang tersedia pada data canonical;
- jangan membuat superlatif;
- maksimal 140 karakter pada desktop dan 110 karakter pada mobile sebelum wrapping panjang.

---

## 9. Copywriting Final

### 9.1 Eyebrow

```
Map Insights
```

### 9.2 Heading

Rekomendasi final:

```
Nusantara dalam Sekilas
```

Alternatif:

- `Baca Skala, Temukan Arah`
- `Satu Peta, Banyak Pola`
- `Apa yang Terlihat dari Peta Ini?`

### 9.3 Subheading

```
Lihat skala Nusa Map, pahami pilihan aktifmu, lalu lanjutkan ke cerita yang paling relevan.
```

### 9.4 Labels

```
Provinsi
Wilayah Jelajah
Flagship
Pilar Eksplorasi
Hasil Aktif
Insight Pilihanmu
```

### 9.5 CTA dinamis

- `Kembali ke Peta`
- `Lihat 8 Flagship`
- `Jelajahi Layer Ini`
- `Buka Ringkasan Provinsi`
- `Buka Atlas Provinsi`
- `Bandingkan 7 Wilayah`
- `Reset Pilihan`

### 9.6 Microcopy data

```
Diperbarui mengikuti filter peta.
Angka cakupan berasal dari dataset lokal NUSANTARAYA.
```

Jangan menulis `real-time` kecuali benar-benar ada sumber real-time.

---

## 10. Bilingual Copy Contract

| ID | EN |
| --- | --- |
| Map Insights | Map Insights |
| Nusantara dalam Sekilas | Nusantara at a Glance |
| Provinsi | Provinces |
| Wilayah Jelajah | Exploration Regions |
| Pilar Eksplorasi | Exploration Pillars |
| Hasil Aktif | Active Results |
| sesuai pilihanmu | matching your selection |
| Kembali ke Peta | Back to Map |
| Lihat 8 Flagship | View 8 Flagships |

Nama budaya dan tempat dipertahankan; jangan diterjemahkan secara literal.

---

## 11. Layout Desktop

### 11.1 Blueprint final

```
┌──────────────────────────────────────────────────────────────────────────┐
│  4B · MAP INSIGHTS                         [mengikuti pilihan peta]      │
│  Nusantara dalam Sekilas                                               │
│  Subheading compact                                                    │
├──────────────────────────────────────────────────────────────────────────┤
│  38 Provinsi  │  7 Wilayah  │  8 Flagship  │  7 Pilar                  │
├──────────────────────────────────────┬───────────────────────────────────┤
│ LIVE CONTEXT                         │ EDITORIAL INSIGHT                 │
│ 12 hasil · Layer Alam · Explore      │ Kalimat insight + evidence tag   │
│ [Kembali ke Peta]                    │ [Jelajahi Layer Ini →]            │
└──────────────────────────────────────┴───────────────────────────────────┘
```

### 11.2 Ukuran

- Max width: `1280–1440px`.
- Padding section: `88–112px` vertikal.
- Header max width: `760px`.
- Stats: 4 kolom seimbang.
- Context/insight: rasio `42:58`.
- Main radius: `28–32px`.

### 11.3 Kepadatan

- Tinggi ideal: `480–620px`, bukan full viewport.
- Angka besar tetapi tidak melebihi heading Map sebelumnya.
- Hindari empat card terpisah dengan shadow berat.
- Gunakan satu rail atau grid dengan divider.

---

## 12. Layout Tablet

```
Header
Stats 2×2
Live context full width
Insight full width
CTA row
```

Aturan:

- Padding `64–80px`.
- Grid 2 kolom.
- Context dan insight stacked.
- Divider horizontal.
- CTA tidak boleh bertabrakan dengan copy.

---

## 13. Layout Mobile

```
Map Insights
Nusantara dalam Sekilas
Subheading

[38 Provinsi] [7 Wilayah]
[8 Flagship] [7 Pilar]

[Live result card]
[Insight card]
[Primary CTA full width]
```

Aturan:

- Padding horizontal `20–24px`.
- Padding vertikal `56–72px`.
- Stats 2×2, tidak horizontal scroll.
- Angka `32–42px`.
- Touch target ≥44px.
- CTA full width.
- Sembunyikan penjelasan panjang di balik disclosure `Apa arti angka ini?` bila diperlukan.

### 13.1 Mobile kecil ≤390px

- Label maksimum dua baris.
- Jangan gunakan font angka >40px.
- Context chips maksimal dua terlihat; sisanya wrap.
- Hindari ornament di belakang angka.

---

## 14. Visual Direction

### 14.1 Konsep

```
Editorial Data Plaque × Heritage Cartography × Live Product Feedback
```

### 14.2 Rasa visual

- ivory dan warm white dominan;
- navy untuk struktur dan angka;
- gold untuk divider/focus;
- layer color hanya sebagai context accent;
- motif kontur/peta sangat halus;
- bukan dashboard SaaS biru;
- bukan card glass berulang tanpa hierarki.

### 14.3 Arah komposisi recommended

Gunakan **single framed canvas** dengan:

- angka di rail atas;
- satu bidang context gelap/ink ringan;
- satu bidang editorial terang;
- divider tipis seperti garis peta;
- watermark outline Indonesia maksimal opacity 3–5%.

### 14.4 Anti-pattern

- Empat kartu identik seperti template.
- Counter animasi dari nol setiap scroll.
- Semua card dapat diklik tanpa affordance jelas.
- Grafik tanpa data yang cukup.
- Angka `120+` yang belum tervalidasi.
- Neon/cyberpunk.
- Ornamen batik terlalu padat.

---

## 15. Design Tokens

```
--mi-bg: #FFFDF8
--mi-bg-warm: #F8F4EA
--mi-surface: rgba(255,255,255,.82)
--mi-ink: #0D1B2A
--mi-muted: #5E6570
--mi-gold: #C9A84C
--mi-border: #E8E0CE
--mi-blue: #2D6BE4
--mi-forest: #2D5A27
--mi-spice: #1B7A7A
--mi-future: #6B3FA0
```

### 15.1 Typography

- Eyebrow: Inter Semibold, 11–12px, tracking `0.18em`.
- Heading: Playfair Display, 48–64px desktop, 36–44px mobile.
- Stat value: Playfair/Inter Semibold, 48–72px desktop.
- Stat label: Inter Medium, 12–14px.
- Insight: Inter 16–18px, line-height 1.6.

### 15.2 Surface

```css
background: rgba(255, 253, 248, 0.94);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 24px 72px rgba(13, 27, 42, 0.08);
```

Gunakan shadow satu tingkat, bukan shadow berbeda pada tiap mini stat.

---

## 16. Interaction Model

### 16.1 Stat interaction

- `38 Provinsi` → scroll ke `#interactive-map`, reset hanya jika user memilih aksi reset eksplisit.
- `7 Wilayah` → scroll ke `#regional-explorer`.
- `8 Flagship` → scroll ke `#flagship-provinces`.
- `7 Pilar` → buka target yang valid; jika route belum ada, stat bersifat informatif.

### 16.2 Context CTA

```
selected province → Buka Ringkasan/Buka Atlas
active layer → Jelajahi Layer Ini
flagship only → Lihat 8 Flagship
no result → Reset Pilihan
state default → Mulai dari Flagship
```

### 16.3 Aturan navigasi

- Scroll action memakai anchor valid.
- Setelah scroll, pindahkan fokus hanya jika aksi memang mengubah konteks penting.
- Browser Back harus mempertahankan shared state bila membuka Atlas.
- Section tidak mengubah state saat hanya masuk viewport.
- Hover tidak mengubah active layer atau selection.

---

## 17. Shared State Contract

```tsx
export type MapInsightsContext = {
  locale: "id" | "en";
  activeMode: "explore" | "tourist" | "learn";
  activeLayer:
    | "all"
    | "budaya"
    | "kuliner"
    | "alam"
    | "sejarah"
    | "rempah"
    | "future";
  searchQuery: string;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  activeRegionId?: string | null;
};
```

### 17.1 Ownership

- Section hanya membaca state existing.
- Tidak membuat store baru.
- Tidak menghitung Passport progress.
- Tidak menandai provinsi sebagai selesai.
- Tidak mengubah layer saat render.
- CTA memakai adapters/action existing.

### 17.2 Derived view model

```tsx
export type MapInsightViewModel = {
  canonicalStats: MapInsightStat[];
  liveValue: number;
  liveLabel: string;
  contextLabel: string;
  insightId: string;
  insightText: string;
  primaryAction: MapInsightAction;
  secondaryAction?: MapInsightAction;
  tone: "default" | "layer" | "province" | "empty";
};
```

---

## 18. Data Model

```tsx
export type MapInsightStatId =
  | "provinces"
  | "regions"
  | "flagships"
  | "pillars";

export type MapInsightStat = {
  id: MapInsightStatId;
  value: number;
  label: string;
  description: string;
  sourceKey: string;
  action?: MapInsightAction;
};

export type MapInsightAction = {
  id: string;
  label: string;
  type: "scroll" | "route" | "map-action";
  target: string;
  analyticsSource: "map-insights";
};

export type EditorialInsight = {
  id: string;
  locale: "id" | "en";
  layerId?: string;
  modeId?: string;
  provinceId?: string;
  text: string;
  evidenceKeys: string[];
  primaryActionId: string;
};
```

### 18.1 Canonical constants

```tsx
export const NUSANTARAYA_COUNTS = {
  provinces: 38,
  regions: 7,
  flagships: 8,
  pillars: 7,
  thematicLayers: 6,
} as const;
```

Satu file canonical harus dipakai lintas Hero, Map Insights, Regional Explorer, dan docs agar angka tidak drift.

---

## 19. Source of Truth dan Integritas Data

### 19.1 Sumber internal

- Province registry: tepat 38 ID.
- Region registry: tepat 7 ID.
- Flagship registry: tepat 8 ID.
- Pillar registry: tepat 7 ID.
- Layer registry: `all` + 6 layer tematik.

### 19.2 Validator wajib

```
provinceCount === 38
regionCount === 7
flagshipCount === 8
pillarCount === 7
thematicLayerCount === 6
all flagship IDs exist in province registry
all province region IDs exist
all insight evidence keys exist
all action targets are registered
```

### 19.3 Larangan

- Jangan hardcode angka di banyak komponen.
- Jangan mengklaim `120+ arsip` sebelum registry konten memvalidasi jumlah.
- Jangan mengambil angka dari panjang array yang sudah difilter jika labelnya “total”.

---

## 20. Insight Resolver

### 20.1 Algoritma

```
Read shared state
→ validate resultCount
→ selected province insight jika tersedia
→ search insight jika query valid
→ active layer insight
→ flagship insight
→ mode insight
→ default insight
→ resolve valid action
→ render view model
```

### 20.2 Deterministik

- Insight tidak berubah acak saat rerender.
- Satu state menghasilkan satu `insightId` stabil.
- Tie-break memakai prioritas canonical.
- Jangan memakai random fact carousel otomatis.

### 20.3 Pseudocode

```tsx
function resolveMapInsight(context: MapInsightsContext): MapInsightViewModel {
  if (context.resultCount === 0) return buildNoResultInsight(context);
  if (context.selectedProvinceId) return buildProvinceInsight(context);
  if (context.searchQuery.trim()) return buildSearchInsight(context);
  if (context.activeLayer !== "all") return buildLayerInsight(context);
  if (context.showFlagshipOnly) return buildFlagshipInsight(context);
  if (context.activeMode !== "explore") return buildModeInsight(context);
  return buildDefaultInsight(context);
}
```

---

## 21. UI States

### 21.1 Default

```
38 hasil · Mode Explore · Layer Semua
Insight: delapan flagship menjadi jalur masuk ke Atlas terdalam.
CTA: Lihat 8 Flagship
```

### 21.2 Layer aktif

```
12 hasil · Layer Alam · Mode Explore
CTA: Kembali ke Peta / Jelajahi Layer Ini
```

### 21.3 Search aktif

```
1 hasil untuk “gudeg”
DI Yogyakarta cocok dengan pencarian ini.
```

### 21.4 Provinsi dipilih

```
DI Yogyakarta · Jawa · Flagship
Budaya · Sejarah · Kuliner
CTA: Buka Ringkasan Provinsi
```

### 21.5 Flagship only

```
8 provinsi flagship ditampilkan
CTA: Lihat Koleksi Flagship
```

### 21.6 No result

```
0 hasil sesuai pilihanmu
Belum ada provinsi yang cocok. Ubah kata kunci atau reset filter.
CTA: Reset Pilihan
```

Map tidak boleh hilang total; section hanya memberi jalan pulih.

### 21.7 Loading/hydration

```
Membaca konteks peta…
```

Gunakan skeleton stat value dengan dimensi tetap.

### 21.8 Error

```
Ringkasan belum dapat diperbarui. Peta dan data utama tetap dapat digunakan.
```

Fallback ke canonical stats + default insight.

---

## 22. Motion dan Microinteraction

### 22.1 Entrance

1. Header fade-up.
2. Stats rail reveal.
3. Live context fade.
4. Insight crossfade.
5. CTA muncul terakhir.

### 22.2 Perubahan state

- Nilai berubah dengan crossfade/slide 120–220ms.
- Jangan menghitung dari 0 ke nilai setiap kali.
- Context chip berubah dengan highlight ring sekali.
- Insight text crossfade; tinggi container dijaga agar tidak CLS.

### 22.3 Reduced motion

- Semua perubahan instan atau opacity ≤100ms.
- Tidak ada counter animation.
- Tidak ada parallax.
- Tidak ada pulse berulang.

---

## 23. Accessibility

### 23.1 Semantik

```html
<section id="map-insights" aria-labelledby="map-insights-heading">
```

- H2 untuk heading section.
- Stats memakai list semantik.
- Action berupa link untuk anchor/route dan button untuk state action.
- Update live context memakai `aria-live="polite"`.

### 23.2 Accessible stats

Contoh label:

```
38 provinsi tersedia di Nusa Map.
7 wilayah eksplorasi editorial.
8 provinsi flagship.
7 pilar eksplorasi NUSANTARAYA.
```

Jangan hanya membacakan angka tanpa konteks.

### 23.3 Keyboard dan focus

- Stat hanya focusable jika benar-benar actionable.
- Enter/Space mengikuti elemen native.
- Focus ring kontras.
- Setelah `Reset Pilihan`, umumkan jumlah hasil baru.
- Jangan auto-focus saat section masuk viewport.

### 23.4 Kontras dan zoom

- Body ≥4.5:1.
- Large numbers ≥3:1.
- Focus indicator ≥3:1.
- Zoom 200% tidak memotong nilai/label.
- Informasi layer tidak bergantung warna.

### 23.5 Screen reader noise

- Watermark map, motif, divider dekoratif: `aria-hidden="true"`.
- Jangan umumkan semua perubahan state dua kali dari Map dan Insights.
- Deduplicate live announcement.

---

## 24. Performance Budget

### 24.1 Prinsip

- Seluruh angka canonical berasal dari data lokal.
- Tidak ada fetch untuk render awal.
- Tidak ada library chart.
- Tidak ada image besar.
- Derived view model di-memoize bila perlu.

### 24.2 Target

- JS tambahan section idealnya `<15KB gzip` di luar shared components.
- Context resolve `<10ms`.
- Interaction feedback `<100ms`.
- Tidak ada CLS saat angka atau insight berubah.
- Tidak ada long task.

### 24.3 Asset

Gunakan maksimal:

- outline map SVG ringan;
- motif SVG existing;
- icon kecil dari lucide-react/existing system.

Jangan memuat foto provinsi hanya untuk mini stats.

---

## 25. Analytics Plan

Events:

```
map_insights_viewed
map_insight_state_changed
map_insight_stat_clicked
map_insight_primary_action_clicked
map_insight_secondary_action_clicked
map_insight_reset_clicked
map_insight_no_result_seen
```

Payload aman:

```tsx
{
  locale,
  activeMode,
  activeLayer,
  hasSearchQuery: Boolean(searchQuery),
  hasSelectedProvince: Boolean(selectedProvinceId),
  resultCount,
  insightId,
  actionId,
}
```

Jangan menyimpan raw search query bila tidak diperlukan.

---

## 26. Komponen yang Direkomendasikan

```
src/components/explore/map-insights/
  MapInsightsSection.tsx
  MapInsightsHeader.tsx
  MapStatsRail.tsx
  MapStatItem.tsx
  MapLiveContext.tsx
  MapEditorialInsight.tsx
  MapInsightActions.tsx
  MapInsightsSkeleton.tsx
  index.ts
```

Data dan logic:

```
src/data/map/mapInsightStats.ts
src/data/map/mapEditorialInsights.ts
src/lib/map-insights/resolveMapInsight.ts
src/lib/map-insights/mapInsightActions.ts
src/types/mapInsights.ts
```

### 26.1 Tanggung jawab

- `MapInsightsSection`: orchestration dan semantics.
- `MapStatsRail`: canonical stats, tidak membaca state map.
- `MapLiveContext`: result count dan active state.
- `MapEditorialInsight`: insight terpilih dan evidence label.
- `MapInsightActions`: valid action resolution.
- `resolveMapInsight`: logic deterministik, tanpa JSX.

---

## 27. Props Contract

```tsx
export type MapInsightsSectionProps = {
  context: MapInsightsContext;
  onResetMap: () => void;
  onOpenProvinceSummary: (provinceId: string) => void;
  onApplyMapContext?: (payload: Record<string, unknown>) => void;
  className?: string;
};
```

Aturan:

- Callback optional harus memiliki fallback.
- Anchor target diverifikasi sebelum release.
- Section tidak menerima seluruh data detail provinsi.
- Gunakan summary registry yang ringan.

---

## 28. Integrasi Lintas Section

### 28.1 Dengan Interactive Map

- Membaca result count, selection, mode, layer, search.
- CTA `Kembali ke Peta` mempertahankan state.
- `Reset` memakai handler tunggal dari parent.

### 28.2 Dengan Province Summary

- Selected province menghasilkan province insight.
- CTA membuka summary tanpa membuat selection baru.

### 28.3 Dengan Flagship Provinces

- Stat `8 Flagship` dan CTA default menuju `#flagship-provinces`.
- Tidak otomatis mengaktifkan flagship-only saat scroll.

### 28.4 Dengan Explore by Layer

- Active layer insight dapat mengarahkan ke `#explore-by-layer`.
- Section 6 tetap menjadi ruang penjelasan layer yang mendalam.

### 28.5 Dengan Regional Explorer

- Stat `7 Wilayah` menuju `#regional-explorer`.
- Jangan membuat region selector kedua.

### 28.6 Dengan Passport

- Jangan tampilkan progress Passport di sini; Section 9 adalah owner.
- Boleh menampilkan CTA Passport hanya jika action architecture sudah canonical.

---

## 29. Edge Cases

| Kasus | Perilaku |
| --- | --- |
| `resultCount` undefined | Turunkan dari selector canonical atau tampilkan default 38. |
| `resultCount` negatif/>38 | Clamp untuk UI, log validation error. |
| Province ID tidak dikenal | Abaikan province insight, fallback ke layer/default. |
| Layer tidak dikenal | Fallback `all`, jangan crash. |
| Search panjang | Tampilkan label generik, jangan overflow. |
| Target anchor belum ada | Stat informatif atau fallback ke Map. |
| Hydration mismatch | Gunakan initial state yang sama dengan parent. |
| Locale copy hilang | Fallback ID yang jujur. |
| Data registry gagal | Canonical fallback + error note nonblocking. |

---

## 30. Testing Strategy

### 30.1 Unit tests

- Canonical count validator.
- Insight priority.
- No-result resolver.
- Province ID fallback.
- Layer/mode copy.
- Action fallback.
- Locale fallback.

### 30.2 Integration tests

- Layer berubah → result + insight berubah.
- Search select → province insight.
- Reset → 38 hasil/default insight.
- Flagship → 8 hasil/flagship insight.
- CTA Map mempertahankan state.
- CTA Atlas menerima slug valid.

### 30.3 Accessibility tests

- Heading hierarchy.
- Stats list.
- Keyboard actions.
- Live region tidak duplikatif.
- Focus visible.
- 200% zoom.
- Reduced motion.

### 30.4 Responsive viewport

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

### 30.5 Build validation

```
lint
type-check
canonical count validator
insight evidence validator
action target validator
unit tests
accessibility tests
production build
```

---

## 31. Acceptance Criteria

### Functional

- [ ]  Section tampil sebagai Section 4B tanpa merusak penomoran existing.
- [ ]  Empat canonical stats benar: 38, 7, 8, 7.
- [ ]  Live result mengikuti state Map.
- [ ]  Selected province menghasilkan insight relevan.
- [ ]  Layer, mode, search, dan flagship menghasilkan copy benar.
- [ ]  No-result memiliki recovery action.
- [ ]  Semua CTA menuju target valid/fallback.
- [ ]  Tidak ada duplicate state.

### Visual

- [ ]  Terasa premium dan editorial.
- [ ]  Tidak terlihat seperti dashboard generik.
- [ ]  Angka mudah dipindai.
- [ ]  Live context jelas berbeda dari angka total.
- [ ]  Motif tidak mengganggu keterbacaan.
- [ ]  Section menjadi jeda visual yang kuat setelah Map.

### Responsive

- [ ]  Desktop rail 4 kolom rapi.
- [ ]  Tablet 2×2 rapi.
- [ ]  Mobile tidak overflow.
- [ ]  Copy panjang aman.
- [ ]  CTA mudah ditekan.
- [ ]  Tidak ada horizontal page scroll.

### Accessibility

- [ ]  Semantik section/list/action benar.
- [ ]  Angka memiliki label lengkap.
- [ ]  Live update diumumkan secukupnya.
- [ ]  Keyboard complete.
- [ ]  Kontras WCAG AA.
- [ ]  Reduced motion dan zoom 200% aman.

### Data integrity

- [ ]  Counts berasal dari registry canonical.
- [ ]  Insight memiliki evidence key.
- [ ]  Tidak ada angka spekulatif.
- [ ]  Tidak ada ranking budaya.
- [ ]  Semua action target tervalidasi.

### Performance

- [ ]  Tidak ada fetch wajib.
- [ ]  Tidak ada chart library.
- [ ]  Tidak ada image besar.
- [ ]  State update responsif.
- [ ]  Tidak ada CLS/long task signifikan.

---

## 32. Tahapan Implementasi

### Fase 1 — Audit

1. Audit shared map state.
2. Audit counts di Hero, Map, Regional, dan Flagship.
3. Buat registry canonical.
4. Audit anchor/route target.
5. Catat baseline build.

### Fase 2 — Data dan logic

1. Finalisasi types.
2. Buat stats config.
3. Buat editorial insight registry.
4. Buat evidence keys.
5. Buat action registry.
6. Buat validators.
7. Buat resolver + unit tests.

### Fase 3 — Static UI

1. Section shell.
2. Header.
3. Stats rail.
4. Context panel.
5. Insight panel.
6. CTA.

### Fase 4 — State integration

1. Mode.
2. Layer.
3. Search.
4. Selection.
5. Flagship.
6. Result count.
7. Reset.

### Fase 5 — Responsive dan accessibility

1. Tablet 2×2.
2. Mobile stacked.
3. Keyboard/focus.
4. Live region.
5. Reduced motion.
6. 200% zoom.

### Fase 6 — Analytics dan QA

1. Events.
2. Target validation.
3. Responsive QA.
4. Performance QA.
5. Production build.
6. Demo rehearsal.

---

## 33. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit state/count/anchor | 2–4 jam |
| Types, registry, resolver, validator | 3–5 jam |
| Desktop static UI | 3–5 jam |
| Shared-state integration | 3–5 jam |
| Tablet/mobile | 2–4 jam |
| Accessibility, analytics, QA | 3–5 jam |

Total recommended:

```
16–28 jam kerja efektif
```

MVP:

```
Canonical stats + live count + one insight + one CTA
7–11 jam
```

---

## 34. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Duplikasi stats Hero | Terasa repetitif | Hero statis; Map Insights kontekstual dan actionable. |
| Angka tidak konsisten | Kredibilitas turun | Registry canonical + validator. |
| Section seperti dashboard SaaS | Brand melemah | Single editorial canvas, divider, motif halus. |
| Terlalu banyak angka | Kognitif berat | Empat total + satu live stat saja. |
| Insight terasa acak | User tidak percaya | Resolver deterministik + evidence. |
| CTA dead-end | Flow putus | Action registry + fallback Map. |
| Live region berisik | Screen reader terganggu | Debounce dan deduplicate announcement. |
| Mobile penuh | Stats sulit dibaca | 2×2, short labels, stacked context. |
| Counter animation repetitif | Distraksi | Crossfade nilai, tanpa count-up. |
| Klaim data tak tervalidasi | Kepercayaan turun | Jangan render tanpa definisi/source key. |

---

## 35. Strategi Demo Juri

Flow 30–45 detik:

```
1. Pilih Layer Kuliner di Control Bar.
2. Map memperbarui hasil.
3. Scroll ke Map Insights.
4. Tunjukkan live result dan insight Kuliner.
5. Klik Kembali ke Peta atau pilih DI Yogyakarta.
6. Map Insights berubah ke province insight.
7. Klik Lihat 8 Flagship untuk handoff ke Section 5.
```

Nilai yang terlihat:

- state tersinkronisasi;
- angka bukan dekorasi;
- data storytelling;
- navigasi lintas section;
- pengalaman tetap cepat dan offline-ready.

---

## 36. Checklist Handoff

### Product/content

- [ ]  Definisi setiap angka.
- [ ]  Copy ID/EN.
- [ ]  Layer insights.
- [ ]  Mode insights.
- [ ]  Default/no-result/error copy.
- [ ]  Evidence keys.

### Design

- [ ]  Desktop rail.
- [ ]  Tablet 2×2.
- [ ]  Mobile stacked.
- [ ]  Default/layer/province/no-result states.
- [ ]  Focus/reduced-motion states.

### Engineering

- [ ]  Canonical registry.
- [ ]  Shared-state adapter.
- [ ]  Insight resolver.
- [ ]  Action registry.
- [ ]  Validators.
- [ ]  Analytics.
- [ ]  Unit/integration/a11y tests.

---

## 37. Definition of Done

Section selesai jika:

1. Tampil setelah Map + Province Summary dan sebelum Flagship.
2. Penomoran existing tidak berubah; label internal 4B.
3. Counts 38/7/8/7 berasal dari registry canonical.
4. Live result mengikuti Map secara akurat.
5. Insight resolver deterministik.
6. Selection, search, layer, mode, flagship, dan reset tertangani.
7. Tidak ada klaim atau angka spekulatif.
8. CTA valid dan memiliki fallback.
9. Default, loading, no-result, error tersedia.
10. Desktop, tablet, mobile rapi.
11. Keyboard, screen reader, contrast, zoom, dan reduced motion aman.
12. Tidak ada library chart, fetch, atau asset berat yang tidak perlu.
13. Analytics tidak menyimpan raw query.
14. Validator dan production build lulus.
15. Section terasa sebagai insight band premium, bukan dashboard generik.

---

## 38. Dokumen Terkait

- [Planning Section Map Hero / Page Header — NUSANTARAYA](https://app.notion.com/p/Planning-Section-Map-Hero-Page-Header-NUSANTARAYA-78894e3c3fd349efb2f5d6b22c264fd4?pvs=21)
- [Planning Lengkap — Explore Control Bar NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Explore-Control-Bar-NUSANTARAYA-cb9fbb2a52f64bbda42c7a41793fa05b?pvs=21)
- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Lengkap — Section 10 RANI Map Assistant NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-10-RANI-Map-Assistant-NUSANTARAYA-ffd0c5eaa5934ceb9c71188341359677?pvs=21)
- [Lomba & Kompetisi](https://app.notion.com/p/Lomba-Kompetisi-a84098210a3c8388868c0184a5ee0da8?pvs=21)

---

## 39. Keputusan Final

<aside>
✅

Bangun **Map Insights / Mini Stats** sebagai **Section 4B** yang compact, kontekstual, dan actionable. Gunakan empat canonical stats (`38 Provinsi`, `7 Wilayah`, `8 Flagship`, `7 Pilar`), satu live result, satu insight terkurasi, dan satu CTA dinamis. Section harus membaca shared state existing, tetap bekerja offline, tidak memakai dashboard kompleks, serta menjadi jembatan elegan dari Map menuju Flagship Provinces.

</aside>