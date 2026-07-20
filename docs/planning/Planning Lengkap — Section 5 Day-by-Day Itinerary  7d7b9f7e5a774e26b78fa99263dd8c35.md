# Planning Lengkap — Section 5 Day-by-Day Itinerary NUSANTARAYA

<aside>
🗓️

**Tujuan dokumen:** menjadi source of truth produk, UX, visual, data, engineering, accessibility, analytics, QA, dan demo untuk membangun **Section 5 — Day-by-Day Itinerary** pada halaman **Nusa Route** (`/routes`). Section ini menerjemahkan satu Route Recommendation Result yang valid menjadi rencana harian yang realistis, mudah dipindai, dapat dijelaskan, tetap berguna saat data parsial/offline, dan siap diteruskan ke peta, transportasi, budget, Passport, serta RANI.

</aside>

---

## 1. Ringkasan Eksekutif

### 1.1 Nama Section

**Day-by-Day Itinerary**

Nama tampilan yang direkomendasikan:

> **Rencana Perjalanan Hari demi Hari**
> 

Alternatif:

- Itinerary Perjalananmu
- Jelajahi Rute, Satu Hari Sekaligus
- Rencana Harian Nusantaramu
- Your Day-by-Day Journey

### 1.2 Route, Nomor, dan Posisi

- **Halaman:** Nusa Route.
- **Route:** `/routes`.
- **Nomor section:** 5.
- **Posisi:** setelah Route Recommendation Result dan sebelum Route Map + Transport Summary.
- **Anchor:** `#day-by-day-itinerary`.
- **Peran:** menjabarkan keputusan rute menjadi urutan hari, aktivitas, perpindahan, jeda, konteks budaya, dan aksi lanjutan yang konsisten.

Urutan halaman:

```
1. Route Hero / Page Header
2. Route Planner Form
3. Popular / Preset Routes
4. Route Recommendation Result
5. Day-by-Day Itinerary ← SECTION INI
6. Route Map + Transport Summary
7. Budget, Culinary, Etiquette, and Checklist
8. Save to Passport + Ask RANI
9. Related Journeys / Final CTA
```

### 1.3 Konsep Produk

```
Editorial Journey Timeline
× Practical Daily Travel Plan
× Explainable Route Intelligence
× Heritage Futuristic Light
```

Section ini bukan daftar aktivitas acak dan bukan jadwal pemesanan. Ia harus menjawab:

1. Apa fokus setiap hari?
2. Di kota/cluster mana pengguna berada?
3. Aktivitas utama apa yang realistis?
4. Kapan ada perpindahan atau waktu jeda?
5. Konteks budaya, kuliner, dan praktis apa yang perlu diketahui?
6. Apa yang dapat diubah, disimpan, atau ditanyakan ke RANI?

### 1.4 North Star UX

> Dalam **30–45 detik**, pengguna harus memahami ritme seluruh perjalanan, dapat membuka satu hari untuk melihat detail, mengenali hari perpindahan dan hari yang padat, lalu melanjutkan ke peta atau menyesuaikan itinerary tanpa kehilangan route context.
> 

### 1.5 Hubungan dengan Planning Existing

Planning ini melanjutkan [Planning Lengkap — Section 4 Route Recommendation Result NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-4-Route-Recommendation-Result-NUSANTARAYA-996c323741fc402baed6af95b1ba35b3?pvs=21), serta mempertahankan keputusan dari [Planning Lengkap — Section 2 Route Planner Form NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-2-Route-Planner-Form-NUSANTARAYA-eb2b2fe430854788b534a4c8aebc1344?pvs=21), [Planning Lengkap — Section 3 Popular / Preset Routes NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-3-Popular-Preset-Routes-NUSANTARAYA-d2be071c079546ada697409725682ae6?pvs=21), [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21), dan [Roadmap & Workflow Pengembangan NUSANTARAYA](https://app.notion.com/p/Roadmap-Workflow-Pengembangan-NUSANTARAYA-02a098210a3c83dfb7688147846399f4?pvs=21).

Keputusan yang wajib dipertahankan:

- Durasi MVP adalah **3, 5, atau 7 hari**.
- Itinerary membaca **route ID, route version, stop ID, dan itineraryRef** yang sama dengan result.
- Preset lokal harus dapat menyediakan itinerary penuh tanpa AI/API.
- Dynamic itinerary hanya boleh memilih dan merangkai item canonical yang tervalidasi.
- Tidak boleh mengarang jam buka, harga, jadwal, durasi transport, atau ketersediaan.
- Itinerary perlu realistis: aktivitas dibatasi oleh pace, perpindahan, dan rest window.
- Visual mengikuti **Heritage Futuristic Light** serta responsif desktop, tablet, dan mobile.
- Section 5 berfokus pada urutan harian; peta geografis penuh, budget detail, dan checklist berada di section berikutnya.

---

## 2. Problem Statement dan Nilai Utama

### 2.1 Masalah Pengguna

Route Recommendation Result memberi gambaran besar, tetapi pengguna masih perlu mengetahui:

- bagaimana rute terbagi per hari,
- aktivitas mana yang utama dan opsional,
- kapan harus berpindah kota/cluster,
- apakah ritmenya terlalu padat,
- kapan ada waktu istirahat,
- apa konteks budaya yang perlu dihormati,
- dan bagaimana menyesuaikan satu hari tanpa merusak keseluruhan rute.

Tanpa struktur harian yang kuat, rekomendasi terasa inspiratif tetapi belum cukup actionable.

### 2.2 Masalah Produk

Itinerary mudah menjadi sumber duplikasi. Judul stop, urutan kota, highlight, atau transport dapat berbeda dari result dan map jika tiap komponen menyimpan data sendiri. Itinerary yang dihasilkan bebas oleh AI juga berisiko menciptakan fakta, jadwal, harga, atau lokasi yang tidak ada dalam dataset.

### 2.3 Nilai Utama

1. **Actionable:** rekomendasi berubah menjadi rencana yang bisa diikuti.
2. **Realistic:** jumlah aktivitas dan perpindahan sesuai durasi serta pace.
3. **Scannable:** seluruh hari dapat dipahami sebelum membuka detail.
4. **Explainable:** setiap hari memiliki tema dan alasan urutan.
5. **Trustworthy:** asumsi, estimasi, dan data yang belum tervalidasi dijelaskan.
6. **Editable:** penyesuaian tidak menghilangkan source of truth.
7. **Consistent:** itinerary, result, map, budget, Passport, dan RANI membaca route version yang sama.
8. **Reliable:** preset lokal dan summary fallback mencegah dead end.

---

## 3. Tujuan, Non-Goals, dan KPI

### 3.1 Tujuan Utama

- Menampilkan tepat 3/5/7 hari sesuai active route.
- Menjelaskan fokus, cluster, aktivitas, perpindahan, jeda, dan practical notes setiap hari.
- Menjaga jumlah kegiatan sesuai travel pace.
- Memisahkan aktivitas utama, opsional, dan informasi tambahan.
- Memberi overview cepat sekaligus detail melalui progressive disclosure.
- Menyediakan aksi buka peta, sesuaikan lewat RANI, dan kembali ke preferensi.
- Tetap usable saat detail parsial, asset gagal, atau offline.
- Menjadi wow moment utility dalam demo lomba.

### 3.2 Non-Goals

Section ini tidak bertanggung jawab untuk:

- booking tiket, hotel, tur, atau restoran,
- menampilkan harga dan ketersediaan real-time,
- membuat jadwal per menit,
- menjamin waktu tempuh aktual,
- menggambar peta interaktif penuh,
- menghitung total budget detail,
- memberi stempel Passport hanya karena hari dibuka,
- menjadi kalender perjalanan dengan tanggal nyata pada MVP,
- membuat itinerary lintas pulau yang tidak realistis,
- menampilkan seluruh detail destinasi seperti Province Atlas,
- mengklaim rekomendasi AI jika hanya memakai preset.

### 3.3 KPI

| Metrik | Target MVP | Target Polish |
| --- | --- | --- |
| Itinerary render success | 100% dengan fallback | 100% |
| Itinerary comprehension | ≤45 detik | ≤30 detik |
| Day detail open rate | ≥40% | ≥55% |
| Map handoff rate | ≥20% | ≥35% |
| RANI adjustment rate | ≥8% | ≥15% |
| Save route rate setelah itinerary | ≥25% | ≥35% |
| Itinerary validation success | 100% published route | 100% |
| Keyboard completion | 100% flow utama | 100% |
| Accessibility | Lighthouse ≥90 | ≥95 |

---

## 4. Persona dan Skenario Utama

### 4.1 Turis Lokal

> “Saya ingin tahu lima hari ini dibagi seperti apa dan apakah ada waktu untuk menikmati kuliner tanpa terburu-buru.”
> 

Result ideal: lima day cards, ritme seimbang, 2–3 kegiatan utama per hari, culinary window, dan perpindahan yang jelas.

### 4.2 Turis Mancanegara

> “I need practical context, cultural etiquette, and clear travel-day warnings—not an overly precise schedule.”
> 

Result ideal: copy ringkas, etiquette yang bersumber, local-context note, serta label estimasi.

### 4.3 Explorer

> “Saya ingin melihat alternatif aktivitas dan menyesuaikan hari ketiga tanpa mengulang semuanya.”
> 

Result ideal: aktivitas opsional dan CTA **Sesuaikan hari ini bersama RANI** dengan route/day context terstruktur.

### 4.4 Juri Lomba

> “Apakah itinerary benar-benar mengikuti input dan tetap bekerja saat API mati?”
> 

Demo ideal:

```
5 hari · Jawa · Budaya + Kuliner · Menengah · Seimbang
→ result Budaya & Kuliner Jawa
→ itinerary 5 hari tampil
→ buka Hari 2
→ tunjukkan aktivitas, culinary note, etiquette, rest window
→ buka peta
→ nonaktifkan API
→ preset itinerary tetap dapat dibuka
```

---

## 5. Input, Output, dan Dependency

### 5.1 Input Wajib

Section menerima:

- active `RouteRecommendationResult`,
- `routeId`, `routeVersion`, dan `itineraryRef`,
- durasi 3/5/7,
- stop/cluster canonical,
- travel pace,
- interests dan traveler mode,
- locale,
- source dan match type,
- optional day selection dari URL/state.

### 5.2 Output

- itinerary overview,
- daftar day cards,
- tema dan ringkasan setiap hari,
- aktivitas utama dan opsional,
- meal/culinary moments,
- transfer/travel window,
- rest/flex window,
- cultural etiquette/practical notes,
- source/disclosure,
- CTA ke map, adjustment, detail terkait, Passport, dan RANI.

### 5.3 Dependency Rules

- Tanpa active result, section **hidden** atau menampilkan teaser ringan.
- Result valid tetapi itinerary detail gagal: tampilkan day summary fallback.
- Itinerary tidak boleh memakai route version berbeda dari result.
- Perubahan active route harus mengganti seluruh itinerary secara atomik.
- Section tidak boleh menebak destination detail dari title string; gunakan ID canonical.

---

## 6. Arsitektur Informasi

### 6.1 Struktur Section

```
DayByDayItinerarySection
├── Section Header
│   ├── Eyebrow + heading
│   ├── Route context
│   ├── Pace / duration summary
│   └── Trust disclosure
├── Itinerary Overview Rail
│   ├── Day navigation
│   ├── Cluster labels
│   └── Density / travel-day indicators
├── Day Timeline
│   └── ItineraryDayCard × 3/5/7
│       ├── Day index + theme
│       ├── Location / cluster
│       ├── Day summary
│       ├── Time-of-day segments
│       ├── Transfer / rest window
│       ├── Culinary / culture note
│       ├── Practical + etiquette note
│       ├── Optional experiences
│       └── Day actions
├── Itinerary Disclosure
└── Handoff to Route Map + Transport Summary
```

### 6.2 Information Hierarchy

1. Hari, tema, dan lokasi.
2. Ringkasan tujuan hari.
3. Aktivitas utama menurut pagi/siang/sore-malam.
4. Perpindahan dan rest window.
5. Kuliner/konteks budaya.
6. Practical/etiquette note.
7. Aktivitas opsional.
8. Aksi detail/map/RANI.

### 6.3 Progressive Disclosure

**Collapsed day card** menampilkan:

- Hari ke-n,
- tema,
- kota/cluster,
- 2–3 highlight,
- travel-day indicator,
- density label.

**Expanded day card** menampilkan detail segmen, notes, opsi, sumber, dan actions.

Default:

- Hari 1 terbuka setelah itinerary muncul.
- Hari lain collapsed.
- Jika user datang dengan `day=3`, buka Hari 3.
- Browser Back/refresh dapat memulihkan open day tanpa menjadikan UI state sebagai source of truth route.

---

## 7. Layout Desktop, Tablet, dan Mobile

### 7.1 Desktop

```
┌──────────────────────────────┬────────────────────────────────────┐
│ Sticky day overview rail     │ Day 01 — Tiba & Mengenal Kota      │
│ 01 Yogyakarta                │ Morning / Afternoon / Evening      │
│ 02 Yogyakarta                │ Transfer + notes + optional        │
│ 03 Solo                      ├────────────────────────────────────┤
│ 04 Solo → Semarang           │ Day 02 — Warisan & Rasa            │
│ 05 Semarang                  │ ...                                │
└──────────────────────────────┴────────────────────────────────────┘
```

- Rail 3–4 kolom, content 8–9 kolom.
- Rail sticky hanya dalam section.
- Timeline connector dekoratif tidak boleh mengganggu baca.
- Expanded day tidak wajib muat satu viewport.

### 7.2 Tablet

- Overview rail menjadi horizontal day tabs atau compact grid.
- Timeline satu kolom.
- Metadata 2 kolom.
- Jangan memaksakan sticky side rail sempit.

### 7.3 Mobile

```
Header + summary
↓
Scrollable day chips / compact grid
↓
Day 01 card
Day 02 card
Day 03 card
...
↓
Lihat Peta Rute
```

- Satu kolom.
- Day navigation memakai native horizontal scroll + snap hanya sebagai shortcut; semua day cards tetap ada di dokumen.
- Header card tidak bergantung hover.
- Touch target minimal 44×44 px.
- Expanded content tidak memakai nested horizontal scroll.
- CTA aman dari bottom navigation dan safe area.

---

## 8. Copywriting Final

### 8.1 Header

**Eyebrow**

```
Itinerary Perjalananmu
```

**Heading**

```
Jelajahi rute ini, satu hari demi satu hari.
```

**Supporting copy**

```
Setiap hari disusun dengan fokus yang jelas, perpindahan yang realistis, dan ruang untuk menikmati budaya, rasa, serta cerita di sepanjang perjalanan.
```

**Trust microcopy**

```
Rencana awal · Urutan dapat disesuaikan · Periksa jam buka dan kondisi perjalanan terbaru
```

### 8.2 Day Card Example

```
Hari 2 · Yogyakarta
Warisan, pasar, dan rasa kota

Mulai dari ruang budaya utama, lanjutkan dengan eksplorasi kawasan bersejarah, lalu sisakan sore untuk kuliner dan jalan santai.
```

### 8.3 Labels

- `Fokus hari ini`
- `Pagi`
- `Siang`
- `Sore / Malam`
- `Waktu perpindahan`
- `Ruang istirahat`
- `Wajib dicoba`
- `Catatan budaya`
- `Tips praktis`
- `Jika masih ada energi`
- `Lihat di peta`
- `Sesuaikan hari ini bersama RANI`

### 8.4 Density Labels

- **Ringan:** 1–2 aktivitas utama.
- **Seimbang:** 2–3 aktivitas utama.
- **Aktif:** 3–4 aktivitas terkurasi.
- **Hari perpindahan:** fokus pada transfer dan satu aktivitas ringan.

Jangan memakai kata “santai” untuk hari yang sebenarnya memiliki perpindahan berat.

---

## 9. Anatomi Day Card

### 9.1 Header

- nomor hari,
- theme/title,
- location/cluster,
- day type,
- density,
- optional province accent.

### 9.2 Day Summary

Satu paragraf maksimal 2–3 kalimat yang menjelaskan tujuan dan ritme hari. Jangan hanya mengulang nama aktivitas.

### 9.3 Time-of-Day Segments

Gunakan **daypart**, bukan jam presisi, sebagai default:

- pagi,
- siang,
- sore/malam.

Jam spesifik hanya boleh muncul jika:

- berasal dari data tervalidasi,
- dibutuhkan secara operasional,
- memiliki `timeConfidence: "verified"`,
- dan tetap disertai peringatan untuk mengecek informasi terbaru.

### 9.4 Activity Item

Setiap aktivitas dapat memuat:

- nama canonical,
- jenis aktivitas,
- satu kalimat nilai pengalaman,
- lokasi/cluster,
- durasi kategori (`short`, `half-day`, `flexible`)—bukan angka buatan,
- indoor/outdoor atau accessibility note jika tersedia,
- source refs,
- CTA detail hanya jika route valid.

### 9.5 Transfer Window

Transfer harus menjadi item eksplisit, bukan disisipkan samar di antara aktivitas:

```
Waktu perpindahan · Yogyakarta → Solo
Sisakan blok perjalanan dan check-in sebelum agenda berikutnya. Detail moda tersedia pada ringkasan transportasi.
```

### 9.6 Rest/Flex Window

Minimal satu flex/rest window untuk:

- pace santai setiap hari,
- pace seimbang pada hari padat/perpindahan,
- pace eksploratif minimal saat perpindahan signifikan.

### 9.7 Culinary Moment

- maksimal 1–2 spotlight per hari,
- nama hidangan/area berasal dari canonical culinary data,
- jangan menjanjikan restoran tertentu tanpa data valid,
- bedakan `must-try dish` dari `meal booking`.

### 9.8 Cultural Etiquette

Maksimal satu note yang paling relevan per hari. Note harus:

- spesifik,
- hormat,
- tidak stereotip,
- bersumber,
- tidak mengklaim seluruh komunitas memiliki praktik yang sama.

### 9.9 Optional Experiences

Maksimal dua. Harus jelas sebagai opsional dan tidak diperlukan agar itinerary dianggap selesai.

---

## 10. Model Ritme dan Kepadatan

### 10.1 Activity Budget per Pace

| Pace | Aktivitas utama | Flex/rest | Perpindahan |
| --- | --- | --- | --- |
| Santai | 1–2/hari | wajib setiap hari | minimal |
| Seimbang | 2–3/hari | wajib pada hari padat | maks. satu transfer utama/hari |
| Eksploratif | 3–4/hari | tetap tersedia | tidak menambah lintas pulau secara artifisial |

### 10.2 Day Types

```tsx
export type ItineraryDayType =
  | "arrival"
  | "exploration"
  | "transfer"
  | "slow-day"
  | "departure";
```

### 10.3 Guardrail Realisme

- 3 hari: 1 cluster utama, maksimal 1 perpindahan bermakna.
- 5 hari: 2–3 base/cluster yang terhubung.
- 7 hari: 3–4 base hanya jika konektivitas valid.
- Hari kedatangan/keberangkatan tidak boleh dipadatkan seperti full exploration day.
- Transfer signifikan mengurangi activity budget.
- Aktivitas outdoor memiliki fallback kategori bila cuaca mengganggu, jika datanya tersedia.
- Jangan menjadikan “hidden gem” sebagai alasan memaksa lokasi sensitif atau sulit diakses.

---

## 11. Itinerary Overview Rail

### 11.1 Tujuan

Memberi peta mental seluruh perjalanan tanpa menggantikan peta geografis.

### 11.2 Isi

- nomor hari,
- short theme,
- cluster,
- day type icon,
- density,
- indicator transfer,
- active/expanded state.

### 11.3 Interaksi

- Klik hari → scroll ke card terkait.
- Update active day berdasarkan interaksi eksplisit atau IntersectionObserver yang tidak agresif.
- Jangan memindahkan focus hanya karena scroll.
- Keyboard dapat berpindah secara logis.
- Screen reader tetap mendapat ordered list seluruh hari.

### 11.4 URL State

Opsional:

```
/routes?route=jawa-budaya-kuliner-5&day=2
```

Gunakan `replace` untuk sekadar membuka day card; gunakan `push` hanya jika membuka halaman detail canonical.

---

## 12. State Matrix

| State | Kondisi | Tampilan | Aksi |
| --- | --- | --- | --- |
| Hidden | belum ada active result | tidak merender/teaser | buat/pilih rute |
| Loading | detail itinerary dimuat | skeleton 3/5/7 hari stabil | tunggu |
| Ready | itinerary valid | overview + day cards | expand/map/save |
| Preset | itinerary terkurasi | label rute terkurasi | review/edit |
| Dynamic | hasil dinamis tervalidasi | label disusun dari preferensi | review |
| Adjusted | scope/urutan diubah | adjustment note | review/RANI |
| Partial | detail beberapa activity gagal | summary hari tetap ada | retry/detail lain |
| Restored | refresh/Back | open day dipulihkan | continue |
| Stale | route version berubah | update available | refresh aman |
| Error recoverable | itinerary detail invalid | day summary fallback | retry/pilih preset |
| Offline | tanpa network | preset + static assets | continue/save lokal |

---

## 13. Loading, Transition, dan Focus

### 13.1 Skeleton

- Jumlah skeleton mengikuti durationDays.
- Header, overview rail, dan day cards memiliki tinggi stabil.
- Jangan memakai spinner full-screen.
- Route Recommendation Result tetap terlihat.

### 13.2 Loading Copy

```
Menyiapkan rencana perjalanan hari demi hari…
```

Preset:

```
Membuka itinerary rute terkurasi…
```

### 13.3 Focus

- CTA dari Result memindahkan focus ke heading itinerary setelah scroll.
- Expand day tidak harus memindahkan focus; button mengubah `aria-expanded`.
- Route restore otomatis tidak mencuri focus.
- Error diumumkan melalui `role="status"` atau `aria-live="polite"`.

---

## 14. Data Contract

### 14.1 Itinerary

```tsx
export type DayPart = "morning" | "midday" | "afternoon" | "evening";
export type ActivityDurationCategory = "short" | "half-day" | "flexible";
export type TimeConfidence = "none" | "estimated" | "verified";

export interface RouteItinerary {
  id: string;
  routeId: string;
  routeVersion: string;
  version: string;
  locale: "id" | "en";
  durationDays: 3 | 5 | 7;
  status: "published" | "adjusted" | "stale";
  source: "preset" | "dynamic" | "fallback";
  travelPace: TravelPace;
  days: ItineraryDay[];
  disclosureIds: string[];
  sourceRefs?: string[];
  updatedAt: string;
}
```

### 14.2 Day

```tsx
export interface ItineraryDay {
  id: string;
  dayNumber: number;
  type: ItineraryDayType;
  title: string;
  theme: string;
  summary: string;
  provinceIds: string[];
  stopId: string;
  cityOrCluster: string;
  density: "light" | "balanced" | "active" | "transfer";
  segments: ItinerarySegment[];
  culinaryMoments?: ItineraryCulinaryMoment[];
  etiquetteNoteIds?: string[];
  practicalNoteIds?: string[];
  optionalActivityIds?: string[];
  sourceRefs?: string[];
}
```

### 14.3 Segment dan Activity

```tsx
export type ItinerarySegment =
  | {
      id: string;
      type: "activity";
      dayPart: DayPart;
      activityId: string;
      destinationId?: string;
      title: string;
      summary: string;
      durationCategory: ActivityDurationCategory;
      timeLabel?: string;
      timeConfidence: TimeConfidence;
      isPrimary: boolean;
      sourceRefs?: string[];
    }
  | {
      id: string;
      type: "transfer";
      dayPart: DayPart;
      fromStopId: string;
      toStopId: string;
      modeLabel?: string;
      isValidated: boolean;
      note: string;
    }
  | {
      id: string;
      type: "rest" | "flex";
      dayPart: DayPart;
      label: string;
      note?: string;
    };
```

### 14.4 Culinary Moment

```tsx
export interface ItineraryCulinaryMoment {
  culinaryId: string;
  label: string;
  context: "breakfast" | "lunch" | "dinner" | "snack" | "market";
  note: string;
  sourceRefs?: string[];
}
```

### 14.5 Day View Model

```tsx
export interface ItineraryDayViewModel {
  id: string;
  dayLabel: string;
  title: string;
  locationLabel: string;
  summary: string;
  typeLabel: string;
  densityLabel: string;
  segments: Array<{
    id: string;
    dayPartLabel: string;
    title: string;
    description: string;
    kind: "activity" | "transfer" | "rest" | "flex";
  }>;
  culinaryLabels: string[];
  etiquetteNotes: string[];
  practicalNotes: string[];
  optionalActivities: string[];
}
```

---

## 15. Validation Rules

- `routeId` dan `routeVersion` harus sama dengan active result.
- `days.length` harus sama dengan `durationDays`.
- `dayNumber` unik, berurutan, mulai dari 1.
- Setiap day memiliki stop ID canonical yang ada pada route result.
- Segment ID unik dalam itinerary.
- Activity/destination/culinary IDs harus canonical.
- Transfer harus menunjuk stop yang valid dan urutannya masuk akal.
- `timeLabel` tidak boleh tampil jika `timeConfidence: "none"`.
- Jam presisi dengan `estimated` harus dilabeli estimasi; `verified` tetap memerlukan update date/source.
- Activity budget tidak boleh melampaui guardrail pace.
- Hari transfer harus mengurangi aktivitas utama.
- Day summary wajib tersedia meski segment detail opsional gagal.
- Locale ID wajib; EN harus selesai sebelum production bilingual.
- Invalid itinerary tidak dirender sebagai success; gunakan preset/fallback.

---

## 16. Source of Truth dan Data Flow

### 16.1 Prinsip

```
Active Route Result
→ itineraryRef
→ validate RouteItinerary
→ map to view model
→ Day Timeline
→ Map / Budget / Passport / RANI
```

### 16.2 Anti-Duplication Rules

- Day card tidak menyimpan urutan stop sendiri.
- Map membaca stop/segment IDs yang sama.
- Budget membaca culinary/activity/transfer references yang sama.
- Passport menyimpan route ID/version + itinerary version, bukan seluruh DOM.
- RANI menerima structured day context, bukan scraping teks.
- Locale mapper tidak mengubah ID.
- Komponen visual tidak menjalankan matching/generation logic.

### 16.3 Struktur Folder Rekomendasi

```
src/components/routes/day-by-day-itinerary/
├── DayByDayItinerarySection.tsx
├── ItinerarySectionHeader.tsx
├── ItineraryOverviewRail.tsx
├── ItineraryTimeline.tsx
├── ItineraryDayCard.tsx
├── ItineraryDayHeader.tsx
├── ItinerarySegmentList.tsx
├── ItineraryActivityItem.tsx
├── ItineraryTransferItem.tsx
├── ItineraryRestWindow.tsx
├── ItineraryCulinaryNote.tsx
├── ItineraryEtiquetteNote.tsx
├── ItineraryDayActions.tsx
├── ItineraryDisclosure.tsx
├── ItinerarySkeleton.tsx
├── ItineraryPartialState.tsx
├── ItineraryErrorState.tsx
└── index.ts

src/lib/routes/itinerary/
├── routeItinerarySchema.ts
├── validateRouteItinerary.ts
├── mapItineraryToViewModel.ts
├── resolveRouteItinerary.ts
├── validateItineraryPace.ts
├── buildItineraryFallback.ts
├── parseItineraryParams.ts
└── itineraryPersistence.ts
```

---

## 17. Preset, Dynamic, dan Fallback Strategy

### 17.1 Resolution Priority

1. Valid itinerary ID/version dari active canonical route.
2. Valid dynamic itinerary assembled dari canonical activity IDs.
3. Published preset itinerary untuk route yang sama.
4. Nearest compatible canonical preset.
5. Safe default: **5 Hari Budaya & Kuliner Jawa**.

### 17.2 Dynamic Enhancement

Dynamic engine boleh:

- memilih aktivitas canonical sesuai interests,
- mengatur emphasis berdasarkan mode/locale,
- memilih optional activity dari allowlist,
- menyusun narasi ringkas dari structured data,
- menambahkan rest window berdasarkan rules.

Dynamic engine tidak boleh:

- menciptakan destinasi, kuliner, ritual, jadwal, atau fakta baru,
- menghapus transfer yang diperlukan,
- mengubah route stop order tanpa validasi,
- memaksakan semua minat pada setiap hari,
- menjadi satu-satunya jalur success.

### 17.3 Fallback Copy

```
Detail dinamis belum dapat dimuat. Itinerary terkurasi untuk rute yang sama tetap tersedia agar perjalananmu dapat dilanjutkan.
```

### 17.4 Partial Fallback

Jika satu activity detail gagal:

- pertahankan theme dan day summary,
- tampilkan label cluster,
- sembunyikan CTA detail yang rusak,
- jangan menghapus seluruh day,
- sediakan retry ringan.

---

## 18. Interaksi dan Actions

### 18.1 Expand/Collapse

- Button dengan `aria-expanded` dan `aria-controls`.
- Satu atau beberapa day boleh terbuka; rekomendasi mobile: satu aktif untuk mengurangi panjang.
- Jangan menyembunyikan heading hari dari heading structure.

### 18.2 Lihat di Peta

- Scroll ke `#route-map-transport-summary`, atau buka map detail canonical jika arsitektur existing mengharuskan.
- Kirim `routeId`, `routeVersion`, `dayNumber`, `stopId`, dan segment IDs.
- Map tidak boleh menafsir ulang judul teks.

### 18.3 Sesuaikan bersama RANI

Payload:

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  dayNumber,
  dayId,
  requestedAdjustment,
  preferenceSnapshot,
  locale,
  travelerMode
}
```

RANI menghasilkan draft adjustment yang harus divalidasi sebelum mengganti itinerary aktif.

### 18.4 Ubah Preferensi

Kembali ke Section 2 dengan values tetap ada. Result/itinerary lama bertahan sampai hasil baru tervalidasi.

### 18.5 Save

Save utama sebaiknya berada di Section 8, tetapi day section dapat menampilkan secondary link/shortcut jika architecture existing mendukung. Save menyimpan route secara eksplisit; membuka atau expand hari tidak memberi stempel.

---

## 19. Integrasi Ekosistem

### 19.1 Route Recommendation Result

- Primary CTA Result scroll/focus ke heading itinerary.
- Title, duration, stop order, pace, dan version harus konsisten.
- Adjustment disclosure di result harus tercermin pada itinerary.

### 19.2 Route Map + Transport Summary

- Membaca transfer dan stop IDs yang sama.
- Day click dapat menyorot route segment.
- Map failure tidak menghapus itinerary.
- Durasi/moda transport hanya tampil jika tervalidasi.

### 19.3 Budget, Culinary, Etiquette, Checklist

- Section 7 mengagregasi refs dari itinerary.
- Day card hanya menampilkan preview yang paling relevan.
- Jangan menyimpan budget terpisah pada activity card.

### 19.4 Province Atlas / NusaRasa / Archive

- Detail link hanya muncul jika entity route canonical tersedia.
- Back mengembalikan active day dan scroll.
- Deep content tidak dibuka sebagai nested modal berlapis di mobile.

### 19.5 Nusa Passport

- Save menyimpan route ID/version dan itinerary version.
- Planned status berbeda dari completed/stamp.
- Expand hari tidak menambah progress.

### 19.6 RANI

- Menerima structured context.
- Adjustment divalidasi dengan schema, route guardrail, dan canonical IDs.
- Jika RANI unavailable, tampilkan CTA edit preference atau optional local alternatives.

### 19.7 Bilingual dan Modes

- **Explore:** cerita dan utility seimbang.
- **Tourist:** transport, etiquette, safety, budget, dan practical notes lebih dominan.
- **Learn:** konteks sejarah dan source refs lebih dominan.
- ID/EN mengganti copy tanpa mengganti route/day IDs atau open state.

---

## 20. Visual Direction

### 20.1 Creative Direction

```
Premium editorial travel journal
× vertical route timeline
× practical itinerary workspace
```

Section harus lebih detail daripada recommendation dossier, tetapi tidak terasa seperti spreadsheet atau daftar booking.

### 20.2 Palet

- Background: `#F8F4EA` / `#FFFDF8`.
- Surface: putih hangat.
- Text: `#0D1B2A`.
- Muted: `#5C6470`.
- Gold accent: `#C9A84C`.
- Success: `#2D5A27`.
- Adjustment/transfer: amber/brown AA.
- Error: `#8B2020`.
- Focus: `#2D6BE4`.
- Region colors hanya untuk node/eyebrow kecil.

### 20.3 Typography

- Section/day title: Playfair Display/Cormorant Garamond.
- Body/UI/metadata: Inter.
- Day number dapat oversized secara editorial tetapi `aria-hidden` jika duplikatif.
- Body minimum ideal 16 px.

### 20.4 Surface dan Timeline

- Radius card: 22–30 px desktop, 18–24 px mobile.
- Border `#E8E0CE` dan shadow halus.
- Connector line tipis; node jelas.
- Motif tenun/batik 3–5% opacity.
- Hindari nested card untuk setiap kalimat.
- Transfer, rest, dan etiquette memakai block treatment berbeda tetapi tetap satu sistem.

### 20.5 Image Direction

- Image opsional, bukan wajib di setiap aktivitas.
- Maksimal satu editorial image per day card atau hanya pada featured day.
- Gunakan canonical assets dan alt bermakna.
- Hindari kolase ramai, teks baked-in, atau visual masyarakat lokal sebagai dekorasi eksotis.

---

## 21. Motion dan Micro-interaction

- Timeline reveal: opacity + translateY 12–16 px.
- Expand/collapse: 180–240 ms.
- Active day node: scale/glow ringan.
- Day navigation scroll: smooth hanya jika reduced motion tidak aktif.
- Map handoff: highlight transition ringan.
- Jangan memakai route line drawing panjang untuk seluruh 7 hari.
- Jangan auto-expand bergantian.
- `prefers-reduced-motion` menonaktifkan reveal dan smooth scroll non-esensial.

---

## 22. Accessibility Plan

### 22.1 Semantik

- `<section id="day-by-day-itinerary" aria-labelledby="itinerary-title">`.
- Gunakan `<ol>` untuk urutan hari.
- Setiap hari memakai `<article>` dan heading konsisten.
- Expand memakai button, bukan card click generik.
- Activity list tetap list semantic.
- Link untuk navigasi; button untuk state/scroll.

### 22.2 Keyboard

- Day overview → expand buttons → day actions.
- Semua fungsi tersedia tanpa hover.
- Focus terlihat 2–3 px.
- Escape menutup menu action jika ada.
- Tidak ada nested interactive control yang invalid.

### 22.3 Screen Reader

- Status source, day type, density, dan transfer dibacakan.
- Timeline dekoratif `aria-hidden`.
- Day overview mempunyai ordered text equivalent.
- Expand/collapse diumumkan.
- Loading, partial, error, dan adjustment diumumkan.
- Map highlight tidak menjadi satu-satunya feedback.

### 22.4 Visual

- WCAG AA.
- Tidak bergantung warna untuk transfer/density.
- Zoom 200% tetap usable.
- Forced-colors mempertahankan border/focus.
- Touch target minimal 44×44 px.

---

## 23. Responsive Specifications

| Breakpoint | Overview | Timeline | Actions |
| --- | --- | --- | --- |
| ≥1280 px | sticky side rail | wide single column | inline + menu |
| 1024–1279 px | side rail/compact | single column | wrap |
| 768–1023 px | top grid/tabs | single column | full/large |
| <768 px | scrollable shortcuts | stacked cards | primary visible + menu |

### 23.1 Mobile Guardrails

- Padding 16–20 px.
- Tidak ada horizontal page overflow.
- Day title dapat 2–3 baris.
- Time-of-day segments stack vertikal.
- Optional content berada di toggle.
- Action tidak tertutup bottom nav.
- Copy English tidak dipaksa satu baris.

---

## 24. Performance Plan

### 24.1 Target

- Itinerary preset terasa instan setelah result.
- Tidak mengimpor map library ke itinerary initial bundle.
- Expand response <100 ms.
- Tidak ada CLS besar saat skeleton berubah.
- 7 day cards tidak menyebabkan long task.

### 24.2 Optimasi

- Data itinerary lokal/server-renderable.
- Detail berat di-lazy-load setelah expand bila perlu.
- Image hanya untuk day yang terlihat dekat viewport.
- Memoize view model, bukan seluruh component tree tanpa alasan.
- Gunakan CSS untuk timeline/motion dasar.
- Dynamic import peta dan deep detail.

### 24.3 Asset Budget

- Featured day image ideal ≤160–220 KB.
- Optional thumbnail ≤60–100 KB.
- Icon SVG ≤10 KB.
- Pattern ≤30 KB.

---

## 25. Analytics

### 25.1 Events

```
itinerary_section_viewed
itinerary_loaded
itinerary_preset_loaded
itinerary_dynamic_loaded
itinerary_fallback_loaded
itinerary_partial_loaded
itinerary_day_viewed
itinerary_day_expanded
itinerary_day_collapsed
itinerary_activity_opened
itinerary_map_clicked
itinerary_rani_adjust_clicked
itinerary_edit_preferences_clicked
itinerary_retry_clicked
itinerary_error
```

### 25.2 Payload Aman

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  source,
  matchType,
  durationDays,
  dayNumber,
  dayType,
  segmentCount,
  transferCount,
  travelerMode,
  locale
}
```

Jangan mengirim query bebas ke RANI, data pribadi, atau detail origin sebagai domisili.

### 25.3 Funnel

```
Result viewed
→ Itinerary loaded
→ Day expanded
→ Map/RANI/detail opened
→ Route saved
```

---

## 26. Error Handling dan Recovery

| Masalah | Recovery |
| --- | --- |
| itineraryRef invalid | resolve preset route yang sama |
| route version mismatch | tahan snapshot lama + tawarkan refresh |
| day count invalid | blok result invalid + fallback canonical |
| activity detail hilang | day summary tetap tampil |
| image gagal | pattern/static art |
| map gagal | itinerary tetap usable |
| RANI unavailable | edit preference/local alternatives |
| offline | preset itinerary + local save |

Error copy:

```
Detail itinerary belum dapat dimuat sepenuhnya. Ringkasan setiap hari tetap tersedia, dan kamu dapat mencoba lagi atau menggunakan itinerary terkurasi untuk rute ini.
```

Setiap error minimal memiliki:

- **Coba Lagi**, dan
- **Gunakan Itinerary Terkurasi** atau **Kembali ke Rekomendasi**.

---

## 27. Content Safety dan Cultural Integrity

- Aktivitas budaya harus berasal dari data/sumber canonical.
- Jangan menjanjikan akses ke ritual, komunitas, atau tempat sakral.
- Jangan menampilkan event sebagai selalu tersedia.
- Jangan mendorong perilaku tidak sopan demi foto/konten.
- Etiquette harus spesifik dan tidak menggeneralisasi komunitas.
- Culinary note harus menghormati konteks lokal dan kebutuhan diet bila datanya tersedia.
- Jangan memakai “autentik”, “primitif”, “tersembunyi”, atau “belum tersentuh” secara sembarangan.
- Bedakan inspirasi perjalanan dari informasi operasional real-time.
- Tampilkan source/update disclosure pada detail faktual.

---

## 28. Security dan Privacy

- Allowlist semua route/day/query params.
- Validasi itinerary dari API sebelum masuk store.
- Jangan render HTML/model output mentah.
- API key server-side.
- RANI hanya menerima context minimum.
- localStorage versioned dan tidak menyimpan data sensitif.
- Error logs tidak menyimpan free-text adjustment.
- Share URL tidak memuat data pribadi.
- Jangan menganggap origin province sebagai domisili.

---

## 29. Test Plan

### 29.1 Unit Tests

- schema menerima itinerary 3/5/7 hari valid,
- menolak jumlah hari mismatch,
- menolak dayNumber duplikat,
- menolak route version mismatch,
- menolak activity/stop ID invalid,
- pace validator membatasi activity budget,
- transfer mengurangi activity budget,
- mapper ID/EN deterministic,
- fallback memilih itinerary route yang benar.

### 29.2 Component Tests

- hidden state tidak merender timeline kosong,
- skeleton mengikuti duration,
- Hari 1 terbuka default,
- expand/collapse keyboard bekerja,
- day overview scroll bekerja,
- transfer/rest/optional memiliki visual dan label tepat,
- map action mengirim day context,
- partial state mempertahankan summary,
- error recovery tersedia.

### 29.3 Integration Tests

1. Form → result → itinerary 5 hari.
2. Preset → result → itinerary preset yang sama.
3. Dynamic invalid → preset fallback.
4. Result adjusted → itinerary adjustment konsisten.
5. Day 3 → map → Back → Day 3 pulih.
6. Day 2 → RANI adjustment → draft tervalidasi → itinerary version baru.
7. Switch ID/EN → IDs dan open day tetap.
8. Refresh → route/day state pulih.
9. Offline → preset itinerary tetap tampil.
10. Map error → itinerary tidak hilang.

### 29.4 E2E Demo Path

```
Buka /routes
→ generate 5 Hari Budaya & Kuliner Jawa
→ result tampil
→ klik Lihat Itinerary Hari demi Hari
→ itinerary 5 hari tampil
→ buka Hari 2
→ tunjukkan Pagi / Siang / Sore, kuliner, etiquette, rest window
→ klik Lihat di Peta
→ kembali
→ simpan route ke Passport
```

### 29.5 Failure Demo

```
Nonaktifkan dynamic API
→ buka route demo
→ itinerary preset tampil
→ disclosure jujur
→ expand day, map statis, dan local save tetap bekerja
```

### 29.6 Device QA

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

## 30. Implementation Phases

### Fase A — Audit dan Contract

- [ ]  Audit active route result dan `itineraryRef`.
- [ ]  Audit route/preset/day/activity datasets.
- [ ]  Audit stop, destination, culinary, etiquette IDs.
- [ ]  Audit map, budget, Passport, dan RANI adapters.
- [ ]  Kunci `RouteItinerary` schema dan validation rules.
- [ ]  Kunci URL/open-day strategy.

### Fase B — Dataset dan Validation

- [ ]  Lengkapi itinerary 10 preset canonical.
- [ ]  Validasi day count 3/5/7.
- [ ]  Validasi pace/activity budget.
- [ ]  Tambahkan transfer/rest windows.
- [ ]  Tambahkan locale ID/EN.
- [ ]  Tambahkan source refs dan update date.

### Fase C — Static UI

- [ ]  Header section.
- [ ]  Overview rail.
- [ ]  Timeline.
- [ ]  Day cards.
- [ ]  Segments/activity/transfer/rest.
- [ ]  Culinary/etiquette/optional notes.
- [ ]  Disclosure dan handoff.

### Fase D — State dan Behavior

- [ ]  Loading/ready/partial/error.
- [ ]  Expand/collapse.
- [ ]  Active day observer.
- [ ]  Scroll/focus.
- [ ]  URL/open-day restore.
- [ ]  Route change atomik.

### Fase E — Resolver dan Fallback

- [ ]  Resolve itinerary canonical.
- [ ]  Dynamic adapter.
- [ ]  Preset fallback.
- [ ]  Partial fallback.
- [ ]  Stale/version recovery.

### Fase F — Ecosystem Integration

- [ ]  Result CTA.
- [ ]  Route Map + transport.
- [ ]  Budget/culinary/etiquette/checklist.
- [ ]  Province Atlas/NusaRasa/Archive.
- [ ]  Passport.
- [ ]  RANI.

### Fase G — Polish

- [ ]  Responsive.
- [ ]  Motion/reduced motion.
- [ ]  Accessibility.
- [ ]  ID/EN dan modes.
- [ ]  Analytics.
- [ ]  Performance.
- [ ]  Cultural review.

### Fase H — QA dan Demo

- [ ]  Unit/component/integration tests.
- [ ]  Cross-device QA.
- [ ]  Offline/API failure test.
- [ ]  Browser Back/refresh.
- [ ]  Lighthouse.
- [ ]  Demo rehearsal.

---

## 31. Estimasi Pengerjaan

| Tahap | Estimasi |
| --- | --- |
| Audit dan itinerary contract | 1–2 jam |
| Dataset + validation satu route demo | 2–4 jam |
| Static responsive timeline UI | 3–5 jam |
| Expand, active day, focus, URL state | 2–4 jam |
| Resolver + preset/partial fallback | 2–4 jam |
| Map/budget/Passport/RANI integration | 3–5 jam |
| A11y, i18n, analytics, performance | 2–3 jam |
| QA dan polish | 3–4 jam |

**MVP kuat:** 12–17 jam jika itinerary preset tersedia.  

**Premium terintegrasi:** 20–31 jam tergantung kesiapan dataset, map, RANI, dan detail entity.

---

## 32. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Itinerary terlalu padat | tidak realistis | activity budget + transfer penalty |
| Jadwal tampak presisi tetapi palsu | trust turun | daypart default + time confidence |
| Data berbeda dari result/map | kebingungan | route ID/version dan stop IDs tunggal |
| AI mengarang aktivitas | kredibilitas turun | canonical allowlist + validator |
| Timeline terlalu panjang di mobile | fatigue | collapsed cards + shortcuts |
| Terlalu banyak card bersarang | visual ramai | section bands + hierarchy sederhana |
| Transfer tersamarkan | rute misleading | transfer item eksplisit |
| Map gagal | flow terputus | itinerary independen + static fallback |
| RANI adjustment merusak route | state tidak konsisten | draft + validation + atomic replace |
| Culture note stereotip | risiko integritas | source refs + cultural review |
| Refresh menghilangkan hari aktif | frustrasi | safe URL/session restore |
| 7 hari memperberat DOM | performance turun | light markup + lazy detail |

---

## 33. Acceptance Criteria

### 33.1 Functional

- [ ]  Section menjadi section kelima `/routes`.
- [ ]  Anchor `#day-by-day-itinerary` tersedia.
- [ ]  Hidden/teaser sebelum active result.
- [ ]  Tepat 3/5/7 hari tampil sesuai duration.
- [ ]  Day order dan stop konsisten dengan result.
- [ ]  Setiap hari memiliki theme, summary, location, dan segments.
- [ ]  Transfer/rest window tampil eksplisit.
- [ ]  Pace guardrail diterapkan.
- [ ]  Day dapat expand/collapse.
- [ ]  Result CTA scroll/focus dengan benar.
- [ ]  Map action mengirim context yang benar.
- [ ]  Dynamic/preset/fallback/partial dibedakan jujur.
- [ ]  Refresh/Back tidak crash.

### 33.2 Visual

- [ ]  Terasa seperti editorial travel journal premium.
- [ ]  Lebih detail dari result tetapi tidak seperti spreadsheet.
- [ ]  Timeline dan day hierarchy jelas.
- [ ]  Transfer, rest, culinary, dan etiquette mudah dibedakan.
- [ ]  Heritage Futuristic Light konsisten.
- [ ]  Tidak ada nested card berlebihan.

### 33.3 Responsive

- [ ]  Desktop memakai overview rail + timeline.
- [ ]  Tablet memiliki top overview yang nyaman.
- [ ]  Mobile satu kolom tanpa overflow.
- [ ]  Day shortcuts tidak menyembunyikan konten.
- [ ]  Actions aman dari bottom nav.
- [ ]  ID/EN tidak terpotong.

### 33.4 Accessibility

- [ ]  Section dan ordered day list semantic.
- [ ]  Expand memakai `aria-expanded`.
- [ ]  Seluruh action keyboard-friendly.
- [ ]  Focus result → itinerary benar.
- [ ]  Timeline dekoratif tidak dibaca.
- [ ]  Status/fallback diumumkan.
- [ ]  WCAG AA dan reduced motion.

### 33.5 Reliability

- [ ]  Schema tervalidasi.
- [ ]  Route/itinerary version konsisten.
- [ ]  Invalid dynamic result jatuh ke preset.
- [ ]  Partial detail tidak menghapus day summary.
- [ ]  Offline preset berfungsi.
- [ ]  Tidak ada harga/jadwal/jam buka palsu.
- [ ]  RANI adjustment tidak diterapkan sebelum valid.

### 33.6 Performance

- [ ]  Tidak mengimpor map berat.
- [ ]  Skeleton mencegah CLS besar.
- [ ]  Expand terasa instan.
- [ ]  7 hari tetap ringan.
- [ ]  Image lazy-loaded dan teroptimasi.
- [ ]  Lighthouse Accessibility ≥90.

---

## 34. Definition of Done

Section dianggap selesai jika:

1. Active result valid selalu menghasilkan itinerary atau fallback yang valid.
2. Jumlah hari tepat 3/5/7.
3. Pengguna memahami ritme perjalanan dalam 30–45 detik.
4. Setiap hari memiliki tema, lokasi, ringkasan, dan aktivitas yang realistis.
5. Transfer dan rest window terlihat jelas.
6. Itinerary tidak mengarang waktu, harga, transport, atau fakta budaya.
7. Route result, itinerary, map, budget, Passport, dan RANI memakai ID/version yang sama.
8. Day cards dapat digunakan dengan keyboard dan screen reader.
9. Mobile tidak overflow atau menjadi terlalu padat.
10. Dynamic failure otomatis pulih ke preset itinerary.
11. Partial data tetap menghasilkan ringkasan yang berguna.
12. Map/RANI/Passport handoff memakai structured context.
13. ID/EN dan traveler modes tidak merusak state.
14. Demo utama dan failure demo berjalan tanpa error mayor.
15. Cultural review, performance, analytics, dan QA selesai.

---

## 35. Rekomendasi Final

<aside>
🏆

Bangun Day-by-Day Itinerary sebagai **Editorial Journey Timeline**: tepat 3/5/7 hari, tema harian yang kuat, daypart yang fleksibel, transfer dan rest window yang jujur, cultural context yang bersumber, serta progressive disclosure yang menjaga halaman tetap ringan. Prioritaskan **realisme, konsistensi data, kejelasan ritme, dan fallback lokal** di atas jadwal palsu atau animasi kompleks.

</aside>

### Urutan Implementasi Paling Aman

1. Audit active result, itineraryRef, route store, dan dataset existing.
2. Kunci schema itinerary, day, segment, serta validation rules.
3. Lengkapi satu preset demo: **5 Hari Budaya & Kuliner Jawa**.
4. Bangun timeline dan day card statis responsif.
5. Tambahkan expand/collapse, overview rail, scroll, dan focus.
6. Implement resolver, preset fallback, partial fallback, dan version recovery.
7. Hubungkan Result → Itinerary → Map dari source of truth yang sama.
8. Integrasikan budget, culinary, etiquette, Passport, dan RANI.
9. Lengkapi 10 preset canonical serta ID/EN.
10. Selesaikan accessibility, analytics, performance, cultural review, dan QA.

### Prinsip Terakhir

> **Itinerary terbaik bukan yang terlihat paling penuh, tetapi yang paling jelas, realistis, dapat dipercaya, dan memberi ruang bagi pengguna untuk benar-benar mengalami perjalanan.**
>