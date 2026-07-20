# Planning Lengkap — Section 6 Route Map + Transport Summary NUSANTARAYA

<aside>
🗺️

**Tujuan dokumen:** menjadi source of truth produk, UX, visual, data, engineering, accessibility, analytics, QA, dan demo untuk membangun **Section 6 — Route Map + Transport Summary** pada halaman **Nusa Route** (`/routes`). Section ini menerjemahkan active route dan itinerary tervalidasi menjadi pemahaman geografis yang jelas, menyorot hari/stop/segmen yang dipilih, serta merangkum kebutuhan perpindahan tanpa mengarang jadwal, moda, harga, atau durasi perjalanan.

</aside>

---

## 1. Ringkasan Eksekutif

### 1.1 Nama Section

**Route Map + Transport Summary**

Nama tampilan yang direkomendasikan:

> **Peta Rute & Ringkasan Perpindahan**
> 

Alternatif:

- Jejak Perjalananmu di Peta
- Jalur Perjalanan dan Transportasi
- Route Map & Travel Connections

### 1.2 Route, Nomor, dan Posisi

- **Halaman:** Nusa Route.
- **Route:** `/routes`.
- **Nomor section:** 6.
- **Posisi:** setelah Day-by-Day Itinerary dan sebelum Budget, Culinary, Etiquette, and Checklist.
- **Anchor wajib:** `#route-map-transport-summary`.
- **Semantic wrapper:** `<section id="route-map-transport-summary" aria-labelledby="route-map-title">`.

Urutan halaman:

```
1. Route Hero / Page Header
2. Route Planner Form
3. Popular / Preset Routes
4. Route Recommendation Result
5. Day-by-Day Itinerary
6. Route Map + Transport Summary ← SECTION INI
7. Budget, Culinary, Etiquette, and Checklist
8. Save to Passport + Ask RANI
9. Related Journeys / Final CTA
```

### 1.3 Konsep Produk

```
Editorial Route Atlas
× Practical Transfer Intelligence
× Explainable Geographic Context
× Heritage Futuristic Light
```

Section ini bukan aplikasi navigasi real-time dan bukan widget peta generik. Section harus menjawab:

1. Di mana setiap stop berada dan bagaimana urutannya?
2. Hari atau segmen mana yang sedang dilihat?
3. Perpindahan mana yang utama, lokal, atau belum memiliki detail tervalidasi?
4. Moda apa yang dapat ditampilkan secara jujur?
5. Apa yang harus diperiksa sebelum perjalanan?
6. Bagaimana pengguna kembali ke hari terkait atau meminta penyesuaian?

### 1.4 North Star UX

> Dalam **15–25 detik**, pengguna harus memahami bentuk geografis rute, urutan stop, hari perpindahan, tingkat kompleksitas perjalanan, dan dapat memilih satu stop/segmen untuk kembali ke itinerary tanpa kehilangan konteks.
> 

### 1.5 Hubungan dengan Planning Existing

Planning ini melanjutkan [Planning Lengkap — Section 5 Day-by-Day Itinerary NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Day-by-Day-Itinerary-NUSANTARAYA-7d7b9f7e5a774e26b78fa99263dd8c35?pvs=21) dan mempertahankan contract dari [Planning Lengkap — Section 4 Route Recommendation Result NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-4-Route-Recommendation-Result-NUSANTARAYA-996c323741fc402baed6af95b1ba35b3?pvs=21). Strategi map mengikuti keputusan hybrid pada [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21): **SVG custom untuk eksplorasi nasional; Leaflet/Mapbox hanya untuk peta rute/destinasi bila benar-benar dibutuhkan**.

Keputusan yang wajib dipertahankan:

- Result, itinerary, map, transport summary, budget, Passport, dan RANI memakai **route ID/version yang sama**.
- Map membaca stop dan segment IDs canonical; tidak parsing title.
- Itinerary tetap usable jika map/library/tile gagal.
- Detail moda, waktu, biaya, jadwal, dan ketersediaan hanya tampil jika tervalidasi.
- Preset lokal harus memiliki static route representation.
- Section tidak boleh menjadi route navigation turn-by-turn.

---

## 2. Problem Statement dan Nilai Utama

### 2.1 Masalah Pengguna

Setelah membaca itinerary, pengguna masih sulit membayangkan:

- jarak relatif dan arah perpindahan,
- hubungan antarcluster,
- hari mana yang membutuhkan transfer,
- apakah rute terasa terlalu tersebar,
- moda transportasi apa yang relevan,
- dan informasi mana yang hanya estimasi awal.

### 2.2 Masalah Produk

Peta mudah menjadi source of truth kedua. Jika map membuat stop, urutan, label, atau transfer sendiri, hasilnya dapat berbeda dari Route Recommendation Result dan Day-by-Day Itinerary. Integrasi tile/provider juga berisiko memperberat bundle, gagal offline, atau memicu klaim presisi yang tidak didukung data.

### 2.3 Nilai Utama

1. **Spatial clarity:** urutan rute langsung terbaca.
2. **Practical:** pengguna mengenali transfer penting dan kebutuhan pengecekan.
3. **Explainable:** source, validation, dan confidence transport terlihat.
4. **Consistent:** map memvisualkan contract yang sama dengan itinerary.
5. **Resilient:** static map dan ordered route list tetap tersedia.
6. **Interactive:** day/stop/segment selection saling tersinkronisasi.
7. **Accessible:** informasi tidak bergantung pada geometri, warna, atau gesture.
8. **Performant:** map berat dimuat hanya ketika dibutuhkan.

---

## 3. Tujuan, Non-Goals, dan KPI

### 3.1 Tujuan Utama

- Memvisualkan seluruh stop active route dalam urutan yang benar.
- Menyorot active day, stop, dan transfer dari itinerary.
- Menampilkan ringkasan transport yang bersumber dan berconfidence jelas.
- Menjelaskan kompleksitas perpindahan tanpa angka palsu.
- Memberi fallback static map + route list saat provider gagal/offline.
- Menyediakan handoff dua arah Map ↔ Itinerary.
- Mendukung ID/EN dan Explore/Tourist/Learn Mode.
- Menjadi wow moment geografis yang tetap utility-first.

### 3.2 Non-Goals

Section ini tidak bertanggung jawab untuk:

- navigasi turn-by-turn,
- booking tiket, hotel, kendaraan, atau tur,
- jadwal penerbangan/kereta/kapal real-time,
- live traffic atau live vehicle tracking,
- menjamin waktu tempuh,
- menghitung tarif aktual,
- menggantikan aplikasi navigasi,
- menentukan moda dari jarak saja,
- menampilkan semua destinasi aktivitas sebagai pin,
- memberikan safety guarantee,
- mengklaim rute jalan presisi jika hanya garis antartitik.

### 3.3 KPI

| Metrik | Target MVP | Target Polish |
| --- | --- | --- |
| Map render success | 100% dengan fallback | 100% |
| Route comprehension | ≤25 detik | ≤15 detik |
| Stop/segment interaction rate | ≥25% | ≥40% |
| Return-to-itinerary rate | ≥15% | ≥25% |
| Transport disclosure viewed | terukur | ≥20% |
| Fallback recovery | 100% usable | 100% |
| Map interaction feedback | <100 ms setelah siap | <80 ms |
| Accessibility | Lighthouse ≥90 | ≥95 |

---

## 4. Persona dan Skenario Utama

### 4.1 Turis Lokal

> “Saya ingin tahu kapan berpindah kota dan apakah rute lima hari ini terlalu jauh.”
> 

Hasil ideal: tiga stop bernomor, dua transfer tervalidasi, hari terkait, dan summary “darat dominan · dua perpindahan utama”.

### 4.2 Turis Mancanegara

> “I need clear connections and honest uncertainty, not a fake schedule.”
> 

Hasil ideal: transport confidence, practical checks, English labels yang tidak overflow, dan no fabricated timetable.

### 4.3 Explorer

> “Saya ingin klik Hari 3 dan melihat segmen mana yang sedang dijalani.”
> 

Hasil ideal: map menyorot stop/segment Hari 3, summary panel berubah, dan CTA kembali ke card Hari 3.

### 4.4 Juri Lomba

```
Generate 5 Hari Budaya & Kuliner Jawa
→ buka Hari 3 pada itinerary
→ klik Lihat di Peta
→ map fokus pada Solo dan segmen Yogyakarta → Solo
→ transport summary menunjukkan transfer tervalidasi
→ matikan tile/provider
→ static route map + daftar stop tetap berfungsi
```

---

## 5. Input, Output, dan Dependency

### 5.1 Input Wajib

- active `RouteRecommendationResult`,
- validated `RouteItinerary`,
- `routeId`, `routeVersion`, `itineraryVersion`,
- canonical stops dan urutannya,
- map coordinates/geometry refs,
- transfer segments,
- optional validated transport options,
- selected `dayNumber`, `dayId`, `stopId`, `segmentIds`,
- locale dan traveler mode,
- match/source/fallback status.

### 5.2 Output Section

- route map atau static route atlas,
- ordered stop sequence,
- active stop/day/segment state,
- route legend,
- transport overview,
- transfer cards/rows,
- confidence dan source disclosure,
- practical check reminders,
- CTA kembali ke itinerary,
- optional CTA buka detail canonical/RANI.

### 5.3 Dependency Rules

- Tanpa active result: hidden atau teaser ringan.
- Result ada, itinerary belum valid: tampilkan map overview dari stop result saja; jangan tampilkan transfer detail sebagai sukses.
- Koordinat satu stop invalid: fallback ke ordered schematic route.
- Provider/tile gagal: static map tidak boleh ikut hilang.
- Transport detail parsial: summary tetap ada, item invalid disembunyikan atau ditandai belum tersedia.

---

## 6. Arsitektur Informasi

### 6.1 Struktur Section

```
RouteMapTransportSection
├── Section Header
│   ├── Eyebrow + heading
│   ├── Active route context
│   └── Trust disclosure
├── Map Workspace
│   ├── Route Map Canvas / Static Atlas
│   ├── Numbered Stop Markers
│   ├── Route Segment Layer
│   ├── Active Day/Segment Highlight
│   ├── Legend
│   ├── Map Controls
│   └── Map Status/Fallback
├── Transport Summary Panel
│   ├── Journey Overview
│   ├── Transfer Sequence
│   ├── Transport Mode/Confidence
│   ├── Practical Checks
│   └── Disclosure
├── Accessible Ordered Route List
└── Handoff to Section 7
```

### 6.2 Information Hierarchy

1. Bentuk dan urutan route.
2. Stop/day yang aktif.
3. Jumlah perpindahan dan travel-day summary.
4. Moda serta confidence.
5. Hal yang perlu dicek.
6. Detail sumber dan limitations.
7. Aksi itinerary/RANI/detail.

### 6.3 Progressive Disclosure

**Default:** map + 3–5 stops + overview transport + transfer utama.

**Expanded detail:** source, confidence, notes, accessibility, uncertainty, dan link canonical.

Jangan menampilkan seluruh activity pins. Maksimal:

- stop/base utama,
- transfer endpoints,
- optional active-day activity marker jika canonical dan diminta pengguna.

---

## 7. Layout Desktop, Tablet, dan Mobile

### 7.1 Desktop

```
┌────────────────────────────────────┬──────────────────────────┐
│ Route Map Canvas (7–8 kolom)       │ Transport Summary        │
│ 01 Yogyakarta                      │ 3 cluster · 2 transfer   │
│       ───── 02 Solo                │ Darat dominan            │
│                 ─── 03 Semarang    │ Transfer detail rows     │
│ legend + controls                  │ checks + disclosure      │
└────────────────────────────────────┴──────────────────────────┘
```

- Split 7/5 atau 8/4.
- Map viewport ideal 520–680 px.
- Summary dapat sticky di dalam workspace jika tinggi aman.
- Jangan membuat map full-bleed yang menghilangkan hubungan dengan summary.

### 7.2 Tablet

- Map full width di atas.
- Summary menjadi grid 2 kolom atau accordion di bawah.
- Controls horizontal compact.
- Tinggi map 420–520 px.

### 7.3 Mobile

```
Header
↓
Active day/status
↓
Map viewport 300–380px
↓
Scrollable stop shortcuts
↓
Transport overview
↓
Transfer rows
↓
Checks + disclosure
```

- Tinggi map 300–380 px; tidak menguasai seluruh halaman.
- Native page scroll tetap utama.
- Gesture pan/zoom tidak boleh memerangkap scroll.
- Semua fungsi map memiliki button/list alternative.
- Touch target minimal 44×44 px.
- CTA aman dari bottom navigation dan safe area.

---

## 8. Copywriting Final

### 8.1 Header

**Eyebrow**

```
Peta Rute Perjalanan
```

**Heading**

```
Lihat jalur perjalananmu dalam satu pandangan.
```

**Supporting copy**

```
Ikuti urutan setiap stop, kenali hari perpindahan, dan tinjau pilihan transportasi yang telah tervalidasi sebelum melanjutkan perjalanan.
```

**Trust microcopy**

```
Gambaran rute · Bukan navigasi real-time · Jadwal, tarif, dan kondisi dapat berubah
```

### 8.2 Transport Overview Labels

- `Ringkasan perpindahan`
- `Stop utama`
- `Perpindahan utama`
- `Hari perjalanan`
- `Moda dominan`
- `Detail tervalidasi`
- `Estimasi awal`
- `Perlu diperiksa`
- `Belum tersedia`

### 8.3 Actions

- `Kembali ke Hari Ini`
- `Lihat Hari di Itinerary`
- `Fokuskan Seluruh Rute`
- `Buka Detail Stop`
- `Sesuaikan Rute bersama RANI`
- `Coba Muat Peta Lagi`
- `Gunakan Tampilan Rute Sederhana`

### 8.4 Fallback Copy

```
Peta interaktif belum dapat dimuat. Urutan rute dan ringkasan perpindahan tetap tersedia dalam tampilan sederhana.
```

### 8.5 Transport Disclaimer

```
Informasi transportasi adalah rencana awal berdasarkan data yang tersedia. Periksa operator, jadwal, kondisi cuaca, akses lokal, dan kebutuhan reservasi terbaru sebelum berangkat.
```

---

## 9. Anatomi Map Workspace

### 9.1 Route Canvas

- Basemap netral, terang, dan tidak lebih dominan daripada route.
- Route line navy/gold dengan contrast AA terhadap basemap.
- Marker bernomor 1..n sesuai stop order.
- Active stop memiliki ring + label teks; tidak mengandalkan warna.
- Transfer segment memiliki direction cue yang tidak menyiratkan turn-by-turn.
- Province/region boundaries hanya jika membantu konteks.

### 9.2 Stop Marker

Setiap marker memuat:

- order,
- short label,
- province/cluster,
- day range,
- active/visited/planned state bila contract tersedia,
- accessible name lengkap.

Contoh accessible name:

```
Stop 2 dari 3, Solo, hari 3 sampai 4.
```

### 9.3 Segment Styling

- **Primary transfer:** solid line + label.
- **Local movement:** dotted/subtle line jika canonical.
- **Unvalidated connection:** jangan digambar sebagai jalur pasti; gunakan schematic connector + disclosure.
- **Selected segment:** stroke lebih tebal + halo/pattern.
- **Fallback schematic:** route line abstrak yang jelas bukan skala geografis.

### 9.4 Map Controls

Minimum:

- zoom in,
- zoom out,
- fit route/reset,
- optional locate active day,
- legend toggle.

Tidak wajib:

- fullscreen,
- satellite layer,
- geolocation pengguna,
- 3D terrain.

### 9.5 Legend

Legend harus menjelaskan:

- stop utama,
- active stop/day,
- transfer tervalidasi,
- connection schematic/unverified,
- optional province boundary.

---

## 10. Transport Summary Architecture

### 10.1 Journey Overview

Tampilkan maksimal 4–6 metadata:

- jumlah stop,
- jumlah transfer utama,
- jumlah travel day,
- validated dominant mode,
- complexity level,
- status data.

### 10.2 Complexity Labels

Gunakan rules deterministic:

- **Sederhana:** 1–2 stop, maksimal 1 transfer utama.
- **Moderat:** 2–3 stop, 1–2 transfer utama.
- **Berpindah aktif:** 3–4 stop atau ≥3 transfer; tampilkan warning realisme.
- **Belum dapat dinilai:** data transfer tidak cukup.

Label bukan safety rating dan tidak boleh dijadikan jaminan kemudahan.

### 10.3 Transfer Row

Setiap transfer menampilkan:

- from/to stop,
- day/daypart,
- mode label jika validated,
- duration label jika bersumber,
- confidence,
- note,
- reservation/check requirement jika canonical,
- source/update timestamp bila relevan.

### 10.4 Practical Checks

Checklist ringkas, bukan Section 7 checklist penuh:

- periksa jadwal/operator terbaru,
- periksa cuaca/kondisi penyeberangan,
- sediakan buffer transfer,
- cek aksesibilitas dan bagasi,
- pastikan entry point/last-mile.

Hanya tampilkan checks relevan berdasarkan refs/transport type.

---

## 11. Data Contract

### 11.1 Route Map Model

```tsx
export type MapGeometryConfidence =
  | "canonical"
  | "approximate"
  | "schematic";

export interface RouteMapModel {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion: string;
  source: "canonical" | "derived" | "fallback";
  geometryConfidence: MapGeometryConfidence;
  bounds?: [number, number, number, number];
  stops: RouteMapStop[];
  segments: RouteMapSegment[];
  attribution?: string[];
  updatedAt: string;
}
```

### 11.2 Stop

```tsx
export interface RouteMapStop {
  id: string;
  order: number;
  provinceId: string;
  cityOrCluster: string;
  shortLabel: string;
  coordinates?: [number, number];
  dayStart: number;
  dayEnd: number;
  itineraryDayIds: string[];
  destinationIds?: string[];
}
```

### 11.3 Segment

```tsx
export interface RouteMapSegment {
  id: string;
  itinerarySegmentId: string;
  fromStopId: string;
  toStopId: string;
  dayNumber: number;
  geometryRef?: string;
  geometryConfidence: MapGeometryConfidence;
  transportOptionIds: string[];
  isRequired: boolean;
}
```

### 11.4 Transport Option

```tsx
export type TransportConfidence =
  | "verified"
  | "estimated"
  | "unverified";

export interface RouteTransportOption {
  id: string;
  segmentId: string;
  mode:
    | "walk"
    | "local-transit"
    | "rail"
    | "road"
    | "ferry"
    | "flight"
    | "mixed"
    | "unspecified";
  label: string;
  confidence: TransportConfidence;
  durationLabel?: string;
  durationMinutes?: number;
  operatorId?: string;
  reservationNoteId?: string;
  accessibilityNoteId?: string;
  sourceRefs?: string[];
  verifiedAt?: string;
}
```

### 11.5 Selection Context

```tsx
export interface RouteMapSelection {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  dayNumber?: number;
  dayId?: string;
  stopId?: string;
  segmentIds: string[];
  source: "itinerary" | "map" | "result" | "restored";
}
```

---

## 12. Validation Rules

- Route/map/itinerary IDs dan versions harus cocok.
- Stop IDs unik dan harus ada pada active result.
- Stop order unik, berurutan, mulai dari 1.
- Day range berada di dalam duration 3/5/7.
- Coordinates harus valid jika disediakan.
- Segment harus menghubungkan stop canonical.
- Segment order harus konsisten dengan itinerary transfer.
- Transport option harus menunjuk segment valid.
- `verified` memerlukan source ref dan `verifiedAt` bila contract memungkinkan.
- `estimated` harus tampil sebagai estimasi.
- `unverified` tidak boleh menampilkan duration/route sebagai fakta.
- Flight/ferry/rail labels tidak boleh diinfer dari geometri saja.
- Invalid geometry tidak boleh merusak ordered route list.
- Attribution provider wajib tampil sesuai ketentuan provider.
- External URL harus allowlisted/sanitized.

---

## 13. Source of Truth dan Data Flow

```
Active Route Result
→ validated Route Itinerary
→ canonical mapRef / coordinates / segment refs
→ validate RouteMapModel + Transport Options
→ derive map view model
→ Map Canvas + Transport Summary
→ Budget / Passport / RANI
```

Anti-duplication rules:

- Map tidak membuat stop dari title.
- Transport summary tidak membuat transfer baru.
- Marker order berasal dari active result.
- Day highlight berasal dari itinerary selection.
- Budget tidak membaca angka dari rendered map.
- Passport tidak menyimpan map viewport sebagai route identity.
- RANI menerima IDs, bukan screenshot/DOM text.
- Basemap provider tidak menjadi source of truth route domain.

---

## 14. Map Rendering Strategy

### 14.1 Recommended Hybrid

1. **Primary enhanced view:** Leaflet/Mapbox existing jika repository sudah menggunakannya dan provider tersedia.
2. **Canonical route layer:** coordinates/geometry internal tervalidasi.
3. **Static fallback:** SVG/image atlas + ordered route list.
4. **Schematic fallback:** numbered nodes bila coordinates tidak lengkap.

### 14.2 Provider Decision

Audit sebelum implementasi:

- library map existing,
- license dan attribution,
- token/API key handling,
- SSR/client boundary,
- bundle size,
- offline behavior,
- CSP/network restrictions,
- current province/destination coordinate data.

Jangan menambah provider baru jika existing map adapter layak.

### 14.3 Geometry Honesty

- **Canonical:** garis mengikuti geometry tervalidasi.
- **Approximate:** garis visual penghubung, label “gambaran jalur”.
- **Schematic:** tidak memakai peta geografis sebagai klaim presisi.

Jangan menggunakan garis lurus lintas laut/daratan lalu menyebutnya jalur transport aktual.

---

## 15. State Matrix

| State | Kondisi | Tampilan | Aksi |
| --- | --- | --- | --- |
| Hidden | belum ada active result | tidak render/teaser | buat rute |
| Loading | library/geometry dimuat | skeleton stabil | tunggu |
| Ready | map + transport valid | interactive map + summary | select/focus |
| Route overview | tanpa day selection | fit seluruh rute | pilih stop |
| Day focused | context dari itinerary | active day/segment | kembali itinerary |
| Stop focused | marker dipilih | stop summary | buka day/detail |
| Partial | transport/coordinate sebagian | map + available rows | review disclosure |
| Static fallback | provider gagal/offline | static atlas + list | retry/continue |
| Schematic | coordinates tidak cukup | ordered node diagram | itinerary |
| Stale | version berubah | snapshot lama + update note | refresh aman |
| Error recoverable | map adapter gagal | transport summary tetap ada | retry/fallback |

---

## 16. Interaction dan Synchronization

### 16.1 Itinerary → Map

Action **Lihat di Peta** mengirim structured context dan:

- scroll ke heading map,
- focus heading hanya setelah aksi eksplisit,
- pilih day/stop/segment,
- fit bounds ke selection tanpa zoom agresif,
- announce selection dengan live region.

### 16.2 Map → Itinerary

Klik marker/segment:

- update map selection,
- update URL/state bila contract mendukung,
- tampilkan summary,
- CTA **Lihat Hari di Itinerary** scroll ke day card,
- focus dipindahkan hanya setelah CTA eksplisit.

### 16.3 Selection Priority

1. explicit valid URL selection,
2. explicit itinerary/map action,
3. current in-memory selection,
4. restored valid state,
5. whole-route overview.

### 16.4 URL Strategy

Rekomendasi jika belum ada contract:

```
/routes?route=jawa-budaya-kuliner-5&day=3&map=segment
```

- Allowlist day 1..duration.
- Gunakan `replace` untuk marker/day selection ringan.
- Jangan simpan lat/lng/zoom sebagai canonical route identity.
- Back/Forward harus memulihkan selection yang bermakna.

---

## 17. Loading, Partial, Error, dan Offline

### 17.1 Loading

- Skeleton menjaga aspect ratio map dan tinggi summary.
- Copy: `Menyiapkan peta rute dan ringkasan perpindahan…`.
- Itinerary di atas tetap usable.
- Jangan full-screen spinner.

### 17.2 Partial

- Pertahankan stop order dan overview.
- Sembunyikan detail duration/operator yang invalid.
- Tampilkan `Sebagian detail transportasi belum tersedia`.
- Retry hanya untuk bagian yang gagal.

### 17.3 Error

- Map error tidak menghapus transport summary.
- Transport error tidak menghapus route map.
- Jika keduanya gagal, ordered route list tetap ada.

### 17.4 Offline

- Preset route memakai static asset/schematic.
- Stop/day selection tetap bekerja lokal.
- External provider tidak boleh memblokir section.
- Jangan klaim live/offline data sebagai terbaru.

---

## 18. Visual Direction

### 18.1 Creative Direction

```
Premium editorial atlas
× quiet route intelligence
× practical travel workspace
```

### 18.2 Palet Baseline

- Background: `#F8F4EA` / `#FFFDF8`.
- Surface: warm white.
- Text: `#0D1B2A`.
- Muted: `#5C6470`.
- Route primary: `#0D1B2A`.
- Active/focus: `#C9A84C` dan `#2D6BE4`.
- Validated: `#2D5A27`.
- Estimated: amber/brown AA.
- Error: `#8B2020`.
- Border: `#E8E0CE`.

### 18.3 Surface

- Workspace radius 24–34 px desktop, 20–26 px mobile.
- Border tipis + shadow lembut.
- Basemap desaturated.
- Motif heritage 2–4% opacity hanya pada frame/empty space.
- Hindari glassmorphism berat di atas label peta.

### 18.4 Route Visual

- Gold sebagai focus, bukan seluruh route.
- Region colors hanya aksen marker kecil.
- Marker nomor harus terbaca pada zoom rendah.
- Selected state memakai outline, ukuran, dan label—bukan warna saja.
- Jangan memakai animasi garis berulang.

---

## 19. Motion dan Micro-interaction

- Section reveal: opacity + translateY 12–16 px.
- Marker entrance per route order: 40–70 ms, satu kali.
- Segment highlight: 180–260 ms.
- Panel/content crossfade: 180–240 ms.
- Fit route animation maksimal 350–500 ms.
- Tidak ada kendaraan bergerak palsu.
- Tidak ada continuous pulse.
- Tidak ada parallax/tilt pada peta.
- `prefers-reduced-motion`: perubahan instan/opacity ringan, tanpa animated pan.

---

## 20. Accessibility Plan

### 20.1 Semantik

- `<section aria-labelledby>`.
- Map canvas memiliki accessible label dan description.
- Ordered stop list menggunakan `<ol>`.
- Transfer sequence memakai list/table semantic sesuai layout.
- Controls memakai `<button>` dengan visible/accessible names.
- Link hanya untuk navigasi canonical.

### 20.2 Keyboard

- Tab ke controls, route list, transfer rows, actions.
- Marker tidak perlu 10 target terpisah jika ordered list memberi pengalaman lebih baik.
- Enter/Space memilih stop.
- Escape menutup popup/tooltip.
- Fit/reset dapat diakses keyboard.
- Tidak ada keyboard trap pada canvas.

### 20.3 Screen Reader

Sediakan text equivalent:

```
Rute memiliki 3 stop: Yogyakarta, Solo, dan Semarang. Dua perpindahan utama direncanakan pada Hari 3 dan Hari 4.
```

- Announce active day/stop.
- Geometry dekoratif `aria-hidden` bila text equivalent tersedia.
- Provider attribution tetap tersedia.
- Loading/error/fallback memakai live region proporsional.

### 20.4 Visual/Motor

- WCAG AA.
- Focus ring 2–3 px.
- Touch target minimal 44×44 px.
- Zoom browser 200% tidak memotong summary/actions.
- Forced-colors mempertahankan border, selected, dan focus.
- Gesture bukan satu-satunya cara zoom/reset/select.

---

## 21. Responsive Guardrails

| Breakpoint | Map | Summary | Controls |
| --- | --- | --- | --- |
| ≥1280 px | 7–8 kolom, 560–680 px | side panel 4–5 kolom | floating vertical |
| 1024–1279 px | split proporsional | compact side panel | vertical/compact |
| 768–1023 px | full width 420–520 px | grid bawah | horizontal |
| <768 px | 300–380 px | stacked | compact accessible |

Mobile guardrails:

- Padding 16–20 px.
- Tidak ada horizontal page overflow.
- Popup tidak keluar viewport.
- Stop shortcuts boleh horizontal scroll, tetapi route list tetap tersedia.
- Map gesture harus koeksis dengan page scroll.
- Bottom action tidak tertutup navigation.
- English labels dapat wrap.

---

## 22. Performance Plan

### 22.1 Target

- Section shell dan static fallback terlihat cepat.
- Interactive map lazy-loaded saat mendekati viewport atau setelah explicit action.
- Map interaction <100 ms setelah siap.
- Tidak ada CLS besar.
- Tidak ada long task >200 ms saat selection.
- Initial `/routes` tidak memuat provider sebelum diperlukan.

### 22.2 Optimasi

- Dynamic import client-only map adapter.
- Pisahkan route domain dari provider adapter.
- Lazy-load tiles/provider.
- Simplify GeoJSON/polyline.
- Memoize derived layers secara proporsional.
- Batasi marker/popup.
- Reuse map instance saat selection berubah.
- Static asset AVIF/WebP/SVG teroptimasi.
- Abort/request token untuk route switch cepat.

### 22.3 Asset Budget

- Static fallback SVG ideal ≤80 KB.
- Static preview WebP ≤120–180 KB.
- Route GeoJSON per route ideal ≤30–60 KB.
- Icon SVG ≤10 KB.
- Jangan bundel seluruh geometry semua preset jika tidak diperlukan.

---

## 23. Integration Plan

### 23.1 Route Recommendation Result

- Map membaca stop order dan `mapRef` yang sama.
- Result CTA **Lihat Jalur di Peta** membuka whole-route overview.
- Match/fallback/adjustment tercermin pada disclosure map.

### 23.2 Day-by-Day Itinerary

- Day action mengirim day/stop/segment IDs.
- Map selection dapat kembali ke card yang tepat.
- Transfer rows berasal dari itinerary transfer segments.
- Rest/flex tidak digambar sebagai transport.

### 23.3 Section 7 Budget, Culinary, Etiquette, Checklist

- Transport cost hanya diteruskan jika canonical dan bersumber.
- Section 7 mengagregasi checks; Section 6 hanya preview transport-specific.
- Culinary/etiquette tidak menjadi pin default.

### 23.4 Passport

- Interaksi map tidak memberi stempel.
- Save menyimpan routeId, routeVersion, itineraryVersion, mapVersion opsional, province IDs, dan planned status.
- Jangan menyimpan provider/session object.

### 23.5 RANI

Payload minimum:

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  mapVersion,
  selectedDayNumber,
  selectedStopId,
  selectedSegmentIds,
  requestedAdjustment,
  locale,
  travelerMode
}
```

RANI boleh menyarankan draft berdasarkan canonical alternatives; tidak boleh mengarang operator/jadwal/harga.

### 23.6 Province Atlas / Nusa Map

- Stop marker dapat membuka entity canonical jika route tersedia.
- Back memulihkan active route/day/map selection.
- Jangan mencampur state `/explore` dengan route planner tanpa adapter.

---

## 24. Bilingual dan Traveler Modes

### 24.1 ID/EN

- IDs, coordinates, dan geometry tidak diterjemahkan.
- Labels berasal dari locale system existing.
- Switch bahasa tidak mengubah route, viewport, atau selection.
- Nama tempat resmi mempertahankan bentuk canonical.

### 24.2 Modes

- **Explore:** peta dan storytelling seimbang.
- **Tourist:** transfer, checks, accessibility, dan uncertainty lebih dominan.
- **Learn:** province context, source refs, dan geographic explanation lebih dominan.

Jangan membuat tiga map datasets. Gunakan satu contract + view model.

---

## 25. Analytics

### 25.1 Events

```
route_map_section_viewed
route_map_loading_viewed
route_map_loaded
route_map_static_fallback_loaded
route_map_schematic_loaded
route_map_day_focused
route_map_stop_selected
route_map_segment_selected
route_map_fit_route_clicked
route_map_zoom_used
route_map_itinerary_clicked
route_map_stop_detail_clicked
route_map_rani_clicked
transport_summary_viewed
transport_detail_expanded
transport_source_opened
route_map_retry_clicked
route_map_error
```

### 25.2 Payload Aman

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  mapVersion,
  mapSource,
  geometryConfidence,
  stopCount,
  segmentCount,
  validatedTransportCount,
  dayNumber,
  selectionType,
  travelerMode,
  locale
}
```

Jangan kirim:

- koordinat pengguna,
- free-text RANI,
- precise origin sebagai domisili,
- API key,
- provider token,
- full itinerary.

---

## 26. Security, Privacy, dan Provider Compliance

- API key/token map hanya melalui mekanisme aman sesuai provider.
- Jangan log token, raw provider response, atau data sensitif.
- Allowlist route/day/stop/segment query params.
- Sanitize attribution/external links.
- Gunakan HTTPS provider.
- Batasi external navigation dan gunakan rel aman.
- Jangan meminta geolocation karena tidak dibutuhkan MVP.
- Hormati attribution dan license tiles/geometry.
- Cache sesuai terms provider.
- Validasi data dynamic sebelum render layer.
- Jangan render HTML popup mentah.

---

## 27. Content Safety dan Operational Integrity

- Bedakan gambaran rute dari navigasi aktual.
- Jangan menjanjikan akses transport.
- Jangan mengarang jadwal, tarif, durasi, operator, terminal, atau kondisi jalan.
- Ferry/flight/weather-dependent transport membutuhkan disclosure lebih kuat.
- Akses wilayah sensitif tidak boleh dipromosikan tanpa data/izin canonical.
- Jangan menampilkan komunitas lokal sebagai titik “atraksi”.
- Route line historis dan modern harus dibedakan.
- `verifiedAt` yang lama harus diberi stale state.
- Tampilkan source/update date untuk detail operasional.

---

## 28. Error Handling dan Recovery Matrix

| Masalah | Recovery |
| --- | --- |
| provider/tile gagal | static map + route list |
| library gagal load | schematic route |
| coordinate stop invalid | hapus marker invalid + ordered list |
| geometry invalid | schematic connector + disclosure |
| transport option invalid | summary umum tanpa detail palsu |
| route version mismatch | tahan snapshot lama + update aman |
| selection ID invalid | fit whole route |
| offline | static preset + local interactions |
| rapid route switch | abort/token guard + atomic replace |
| attribution unavailable | jangan render provider layer yang melanggar |

---

## 29. Component Architecture

Gunakan pola repository existing. Struktur referensi:

```
src/components/routes/route-map-transport/
├── RouteMapTransportSection.tsx
├── RouteMapHeader.tsx
├── RouteMapWorkspace.tsx
├── RouteMapCanvas.tsx
├── RouteMapLayer.tsx
├── RouteStopMarker.tsx
├── RouteSegmentLayer.tsx
├── RouteMapControls.tsx
├── RouteMapLegend.tsx
├── RouteMapPopup.tsx
├── AccessibleRouteList.tsx
├── TransportSummaryPanel.tsx
├── TransportOverview.tsx
├── TransferSequence.tsx
├── TransferRow.tsx
├── TransportConfidenceBadge.tsx
├── TransportPracticalChecks.tsx
├── RouteMapDisclosure.tsx
├── RouteMapSkeleton.tsx
├── RouteMapStaticFallback.tsx
├── RouteMapSchematicFallback.tsx
├── RouteMapErrorState.tsx
└── index.ts

src/lib/routes/map/
├── routeMapSchema.ts
├── validateRouteMap.ts
├── resolveRouteMap.ts
├── mapRouteToGeometry.ts
├── mapTransportToViewModel.ts
├── validateTransportOptions.ts
├── buildStaticRouteFallback.ts
├── parseRouteMapParams.ts
└── routeMapPersistence.ts
```

Separation of concerns:

- Section mengatur orchestration.
- Resolver/validator mengatur domain.
- Provider adapter hanya rendering/geospatial API.
- View model mengatur labels/presentation.
- Marker/row tidak membaca global store bila props cukup.

---

## 30. Test Plan

### 30.1 Unit

- menerima map model dengan stop 3/5/7-day valid,
- menolak route/version mismatch,
- menolak duplicate/out-of-order stop,
- menolak invalid coordinates,
- menolak segment dengan stop tidak dikenal,
- menolak transport option tanpa segment,
- confidence mapper deterministic,
- estimated/verified disclosure benar,
- complexity label benar,
- fallback resolver memilih static/schematic yang tepat,
- URL parser allowlist aman.

### 30.2 Component

- hidden state tidak menampilkan workspace kosong,
- skeleton stabil,
- ordered route list sesuai marker order,
- active day/stop terlihat dan terbaca,
- controls memiliki accessible names,
- transfer rows menampilkan confidence,
- partial state mempertahankan overview,
- map error mempertahankan transport summary,
- transport error mempertahankan map,
- static fallback menyediakan semua action inti.

### 30.3 Integration/E2E

1. Result → whole-route map.
2. Itinerary Hari 3 → focused map segment.
3. Marker Solo → Hari 3 itinerary → Back → selection restored.
4. Dynamic invalid geometry → canonical static fallback.
5. Provider gagal → route list dan summary tetap usable.
6. Partial transport → no fabricated detail.
7. Route switch cepat → tidak ada mixed markers.
8. ID/EN switch → route/selection tetap.
9. Refresh → valid selection restored.
10. Offline → static preset map.
11. RANI adjustment valid → atomic map/itinerary replacement.
12. Reduced motion → no animated pan.

### 30.4 Device QA

- 360×800.
- 390×844.
- 768×1024.
- 1024×768.
- 1366×768.
- 1440×900.
- Zoom 200%.
- Keyboard only.
- Screen reader spot check.
- Reduced motion.
- Slow 4G.
- Offline.

---

## 31. Demo Path

### 31.1 Main Demo

```
Buka /routes
→ generate 5 Hari Budaya & Kuliner Jawa
→ buka itinerary Hari 3
→ klik Lihat di Peta
→ map menyorot Yogyakarta → Solo
→ buka transfer summary
→ tampilkan confidence dan practical checks
→ pilih Semarang
→ kembali ke hari terkait
```

### 31.2 Failure Demo

```
Nonaktifkan map provider
→ buka route demo
→ static route atlas muncul
→ ordered stop list dan transport summary tetap ada
→ marker/list selection tetap sinkron dengan itinerary
→ Passport save tetap tersedia
```

---

## 32. Implementation Phases

### Fase A — Audit dan Contract

- [ ]  Audit implementasi Section 4 dan Section 5 terbaru.
- [ ]  Audit active route/itinerary store.
- [ ]  Audit stop/segment/coordinate/geometry data.
- [ ]  Audit map library/provider existing.
- [ ]  Audit static fallback assets.
- [ ]  Audit transport data/source/confidence.
- [ ]  Kunci `RouteMapModel` dan `RouteTransportOption`.

### Fase B — Domain dan Resolver

- [ ]  Schema/validator map.
- [ ]  Validator transport.
- [ ]  Route-to-map mapper.
- [ ]  Selection/view model.
- [ ]  Static/schematic fallback resolver.
- [ ]  Version/race guard.

### Fase C — Static UI

- [ ]  Header.
- [ ]  Map frame.
- [ ]  Stop markers/segments.
- [ ]  Legend/controls.
- [ ]  Transport overview.
- [ ]  Transfer sequence.
- [ ]  Practical checks/disclosure.
- [ ]  Accessible route list.

### Fase D — Interaction

- [ ]  Itinerary → map focus.
- [ ]  Map → itinerary handoff.
- [ ]  Marker/segment selection.
- [ ]  Fit/reset/zoom.
- [ ]  URL/history/restore.
- [ ]  Focus/live-region behavior.

### Fase E — Reliability

- [ ]  Lazy provider load.
- [ ]  Static fallback.
- [ ]  Schematic fallback.
- [ ]  Partial transport.
- [ ]  Offline.
- [ ]  Stale/version recovery.

### Fase F — Integrations

- [ ]  Result CTA.
- [ ]  Section 7 refs.
- [ ]  Passport.
- [ ]  RANI.
- [ ]  Atlas/Nusa Map detail links.
- [ ]  ID/EN dan modes.
- [ ]  Analytics.

### Fase G — Polish dan QA

- [ ]  Responsive.
- [ ]  Accessibility.
- [ ]  Reduced motion.
- [ ]  Performance.
- [ ]  Provider/license audit.
- [ ]  Tests/build.
- [ ]  Main/failure demo rehearsal.

---

## 33. Estimasi Pengerjaan

| Tahap | Estimasi |
| --- | --- |
| Audit map/transport contract | 1–3 jam |
| Schema, validator, resolver | 2–4 jam |
| Static responsive workspace | 3–5 jam |
| Interactive provider adapter | 3–6 jam |
| Itinerary synchronization | 2–4 jam |
| Transport summary + confidence | 2–4 jam |
| Fallback/offline/recovery | 2–4 jam |
| A11y, i18n, analytics, performance | 2–4 jam |
| QA dan visual polish | 3–5 jam |

**MVP kuat:** 13–20 jam jika coordinates dan map adapter tersedia.  

**Premium terintegrasi:** 22–39 jam tergantung kesiapan geometry, provider, transport data, offline asset, dan integrasi RANI.

---

## 34. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Map menjadi source of truth kedua | stop/urutan berbeda | ID/version tunggal + mapper |
| Garis tampak presisi padahal tidak | misleading | geometry confidence + schematic label |
| Transport dikarang | trust turun | canonical refs + confidence validator |
| Provider gagal saat demo | section kosong | static/schematic fallback |
| Map memperberat `/routes` | LCP/INP turun | dynamic import + lazy provider |
| Gesture mengunci mobile scroll | UX buruk | cooperative gestures + controls |
| Marker terlalu banyak | visual ramai | stop utama saja + active detail |
| Route switch race | mixed markers | abort/token + atomic replace |
| Selection hilang saat Back | frustrasi | typed URL/state restore |
| Attribution/license terlewat | compliance risk | provider adapter + QA checklist |
| Accessibility bergantung peta | flow tidak inklusif | ordered list + text summary |
| Data operasional stale | keputusan salah | verifiedAt + stale disclosure |

---

## 35. Acceptance Criteria

### 35.1 Functional

- [ ]  Section menjadi Section 6 `/routes`.
- [ ]  Anchor `#route-map-transport-summary` tersedia.
- [ ]  Hidden/teaser tanpa active result.
- [ ]  Stop order sama dengan Result dan Itinerary.
- [ ]  Active day/stop/segment dapat disorot.
- [ ]  Itinerary → Map dan Map → Itinerary bekerja.
- [ ]  Transport summary berasal dari transfer canonical.
- [ ]  Confidence/estimasi ditampilkan jujur.
- [ ]  Provider failure pulih ke static/schematic.
- [ ]  Partial transport tidak menghapus map.
- [ ]  Refresh/Back tidak crash.

### 35.2 Visual

- [ ]  Terasa seperti premium editorial route atlas.
- [ ]  Map dan summary memiliki hierarchy seimbang.
- [ ]  Marker/segment/selection mudah dibedakan.
- [ ]  Basemap tidak mengalahkan route.
- [ ]  Tidak ada marker/popup berlebihan.
- [ ]  Heritage Futuristic Light konsisten.

### 35.3 Responsive

- [ ]  Desktop split map/summary.
- [ ]  Tablet map di atas dan summary di bawah.
- [ ]  Mobile tidak terjebak gesture/overflow.
- [ ]  Touch target ≥44 px.
- [ ]  Safe area/bottom nav aman.
- [ ]  ID/EN tidak terpotong.

### 35.4 Accessibility

- [ ]  Ordered route list tersedia.
- [ ]  Map memiliki text equivalent.
- [ ]  Controls keyboard accessible.
- [ ]  Selection diumumkan.
- [ ]  Status tidak bergantung warna.
- [ ]  Zoom 200% usable.
- [ ]  WCAG AA dan reduced motion.

### 35.5 Reliability dan Integrity

- [ ]  IDs/versions konsisten.
- [ ]  Invalid geometry tidak dirender sebagai presisi.
- [ ]  Tidak ada jadwal/tarif/durasi palsu.
- [ ]  Transport stale diberi disclosure.
- [ ]  Offline preset usable.
- [ ]  Race condition dicegah.
- [ ]  Attribution/provider terms dipenuhi.

### 35.6 Performance

- [ ]  Provider tidak masuk initial bundle tanpa kebutuhan.
- [ ]  Static fallback cepat.
- [ ]  Selection feedback <100 ms.
- [ ]  Tidak ada CLS besar.
- [ ]  Geometry/asset sesuai budget.
- [ ]  Build production berhasil.

---

## 36. Definition of Done

Section dianggap selesai jika:

1. Active result dan itinerary selalu menghasilkan map model valid atau fallback usable.
2. Stop order, day range, dan transfer konsisten di seluruh section.
3. Pengguna memahami bentuk rute dan hari perpindahan dalam 15–25 detik.
4. Active day/segment dapat difokuskan dari itinerary.
5. Map dapat mengembalikan pengguna ke hari yang tepat.
6. Transport detail memiliki source dan confidence yang jujur.
7. Tidak ada jadwal, tarif, moda, geometry, atau durasi yang dikarang.
8. Provider failure/offline tidak membuat dead end.
9. Ordered route list dan text summary menyediakan pengalaman nonvisual lengkap.
10. Desktop, tablet, mobile, keyboard, 200% zoom, dan reduced motion telah diuji.
11. URL/Back/refresh memulihkan selection valid.
12. Route switch atomik dan bebas mixed markers.
13. Passport/RANI/Section 7 menerima IDs/versions yang sama.
14. Analytics aman dan tidak mengirim data sensitif.
15. Lint, typecheck, tests relevan, dan production build berhasil.

---

## 37. Rekomendasi Final

<aside>
🏆

Bangun Route Map + Transport Summary sebagai **Editorial Route Atlas yang jujur**: peta harus memperjelas urutan dan perpindahan, bukan berpura-pura menjadi navigasi real-time. Prioritaskan **source of truth tunggal, geometry confidence, transport validation, sinkronisasi dengan itinerary, static fallback, dan accessible route list** di atas visual map yang berat atau klaim presisi yang tidak dapat dibuktikan.

</aside>

### Urutan Implementasi Paling Aman

1. Audit hasil implementasi Section 4 dan Section 5 serta map adapter existing.
2. Kunci map/transport schema, confidence, dan source refs.
3. Lengkapi satu route demo: **5 Hari Budaya & Kuliner Jawa**.
4. Bangun static route atlas + accessible ordered list terlebih dahulu.
5. Tambahkan transport overview dan transfer sequence tervalidasi.
6. Integrasikan Itinerary → Map → Itinerary.
7. Tambahkan interactive provider secara lazy melalui adapter.
8. Implement static/schematic/offline fallback.
9. Integrasikan Section 7, Passport, RANI, ID/EN, modes, dan analytics.
10. Selesaikan accessibility, performance, provider compliance, QA, dan failure demo.

### Prinsip Terakhir

> **Peta terbaik bukan yang paling detail, tetapi yang membuat pengguna memahami perjalanan dengan cepat, mengetahui apa yang pasti dan belum pasti, serta tetap berguna ketika layanan peta gagal.**
>