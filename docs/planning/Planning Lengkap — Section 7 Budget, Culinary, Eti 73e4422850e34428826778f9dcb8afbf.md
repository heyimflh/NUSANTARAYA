# Planning Lengkap — Section 7 Budget, Culinary, Etiquette, and Checklist NUSANTARAYA

<aside>
🧳

**Tujuan dokumen:** menjadi source of truth produk, UX, visual, data, engineering, accessibility, analytics, content integrity, QA, dan demo untuk membangun **Section 7 — Budget, Culinary, Etiquette, and Checklist** pada halaman **Nusa Route** (`/routes`). Section ini menerjemahkan active route, itinerary, peta, dan transport tervalidasi menjadi paket kesiapan perjalanan yang praktis—tanpa mengarang harga, kebutuhan budaya, informasi diet, atau persyaratan operasional.

</aside>

---

## 1. Ringkasan Eksekutif

### 1.1 Nama Section

**Budget, Culinary, Etiquette, and Checklist**

Nama tampilan yang direkomendasikan:

> **Bekal Perjalananmu**
> 

Subjudul sistem:

> **Anggaran · Rasa · Etika · Checklist**
> 

Alternatif:

- Persiapan Praktis Perjalanan
- Travel Readiness Companion
- Siapkan Perjalananmu
- Budget, Rasa, dan Bekal Perjalanan

### 1.2 Route, Nomor, dan Posisi

- **Halaman:** Nusa Route.
- **Route:** `/routes`.
- **Nomor section:** 7.
- **Posisi:** setelah Route Map + Transport Summary dan sebelum Save to Passport + Ask RANI.
- **Anchor wajib:** `#route-readiness`.
- **Semantic wrapper:** `<section id="route-readiness" aria-labelledby="route-readiness-title">`.

Urutan halaman:

```
1. Route Hero / Page Header
2. Route Planner Form
3. Popular / Preset Routes
4. Route Recommendation Result
5. Day-by-Day Itinerary
6. Route Map + Transport Summary
7. Budget, Culinary, Etiquette, and Checklist ← SECTION INI
8. Save to Passport + Ask RANI
9. Related Journeys / Final CTA
```

### 1.3 Konsep Produk

```
Travel Readiness Dossier
× Honest Budget Intelligence
× Contextual Culinary Discovery
× Respectful Cultural Guidance
× Actionable Pre-trip Checklist
```

Section ini bukan empat widget yang ditempel berdampingan. Ia adalah **satu dossier kesiapan perjalanan** yang menjawab:

1. Berapa kisaran biaya awal perjalanan ini, apa yang termasuk, dan apa yang belum termasuk?
2. Kuliner apa yang relevan dengan rute dan kapan paling masuk akal untuk dicoba?
3. Etika apa yang perlu dipahami tanpa menggeneralisasi komunitas lokal?
4. Apa yang perlu disiapkan, diperiksa, atau dikonfirmasi sebelum berangkat?
5. Bagian mana yang belum memiliki data cukup atau perlu diverifikasi ulang?
6. Bagaimana pengguna menyesuaikan budget, preferensi makan, atau kebutuhan perjalanan tanpa merusak route context?

### 1.4 North Star UX

> Dalam **45–75 detik**, pengguna harus memahami kisaran biaya dan komposisinya, menemukan 3–6 rekomendasi rasa yang relevan, membaca 2–4 panduan etika paling penting, serta memperoleh checklist otomatis yang dapat ditandai dan tetap tersimpan.
> 

### 1.5 Hubungan dengan Planning Existing

Planning ini melanjutkan [Planning Lengkap — Section 6 Route Map + Transport Summary NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-6-Route-Map-Transport-Summary-NUSANTARAYA-58b7df3c758a4dfd8ff91c0e20b42961?pvs=21), mempertahankan contract dari [Planning Lengkap — Section 5 Day-by-Day Itinerary NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Day-by-Day-Itinerary-NUSANTARAYA-7d7b9f7e5a774e26b78fa99263dd8c35?pvs=21) dan [Planning Lengkap — Section 4 Route Recommendation Result NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-4-Route-Recommendation-Result-NUSANTARAYA-996c323741fc402baed6af95b1ba35b3?pvs=21), serta mengikuti input pada [Planning Lengkap — Section 2 Route Planner Form NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-2-Route-Planner-Form-NUSANTARAYA-eb2b2fe430854788b534a4c8aebc1344?pvs=21) dan prinsip produk dalam [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21).

Keputusan yang wajib dipertahankan:

- Result, itinerary, map, transport, readiness dossier, Passport, dan RANI memakai **route ID/version yang sama**.
- Section 7 mengagregasi canonical refs; tidak membaca angka atau fakta dari teks rendered/DOM.
- Budget adalah **kisaran estimasi**, bukan quote, tarif live, atau jaminan.
- Culinary recommendation berasal dari entity canonical dan route stop/province yang valid.
- Etiquette bersumber, spesifik konteks, tidak stereotip, dan tidak dianggap berlaku universal.
- Checklist dapat ditandai pengguna, tetapi completion tidak mengubah route truth atau memberi Passport stamp otomatis.
- Preset lokal harus menghasilkan dossier dasar saat API/network gagal.

---

## 2. Problem Statement dan Nilai Utama

### 2.1 Masalah Pengguna

Setelah memahami itinerary dan peta, pengguna masih belum siap mengambil keputusan karena:

- estimasi biaya terlalu abstrak atau tidak jelas cakupannya,
- rekomendasi kuliner tercecer di day cards,
- informasi diet/alergen sering diasumsikan,
- etika budaya biasanya generik dan rawan stereotip,
- checklist perjalanan tidak menyesuaikan rute, moda, cuaca, atau aktivitas,
- pengguna tidak tahu data mana yang pasti, estimasi, stale, atau belum tersedia.

### 2.2 Masalah Produk

Empat domain ini rentan menjadi source of truth baru. Budget dapat berbeda dari result, kuliner dapat tidak cocok dengan stop, etiquette dapat tidak bersumber, dan checklist dapat menjadi daftar universal yang tidak berguna. Jika digabung tanpa hierarchy, section juga akan terasa seperti dashboard padat dan melelahkan setelah itinerary serta map.

### 2.3 Nilai Utama

1. **Ready:** mengubah rencana menjadi persiapan konkret.
2. **Honest:** membedakan confirmed, estimated, unknown, dan excluded.
3. **Contextual:** isi mengikuti route, stop, activity, transport, locale, dan traveler mode.
4. **Respectful:** panduan budaya tidak mengobjektifikasi atau menggeneralisasi.
5. **Safe:** kebutuhan diet, alergen, kesehatan, cuaca, dan aksesibilitas diperlakukan sebagai hal yang perlu diverifikasi—bukan dijamin.
6. **Scannable:** empat domain terbaca sebagai satu alur, bukan empat halaman mini.
7. **Actionable:** checklist dapat ditandai, disimpan, di-reset, dan disesuaikan.
8. **Resilient:** preset/fallback tetap berguna secara offline.

---

## 3. Tujuan, Non-Goals, dan KPI

### 3.1 Tujuan Utama

- Menampilkan estimasi biaya total dan per kategori secara transparan.
- Menjelaskan asumsi, basis perhitungan, confidence, updated date, dan exclusions.
- Menghubungkan rekomendasi kuliner ke itinerary day/stop canonical.
- Menampilkan informasi diet/alergen hanya jika tersedia dan dengan disclaimer yang tepat.
- Memprioritaskan etiquette berdasarkan konteks aktual perjalanan.
- Menghasilkan checklist dinamis dari itinerary, transport, activities, climate refs, dan traveler needs.
- Menyimpan progres checklist lokal tanpa mencampurnya dengan canonical route.
- Mendukung ID/EN dan Explore/Tourist/Learn Mode.
- Menjadi jembatan jelas ke Save to Passport dan Ask RANI.

### 3.2 Non-Goals

Section ini tidak bertanggung jawab untuk:

- booking, pembayaran, atau checkout,
- harga real-time dan currency conversion live,
- menjamin total biaya aktual,
- memberi nasihat medis, hukum, visa, atau keselamatan profesional,
- menjamin makanan bebas alergen/halal/vegan,
- menentukan etika seluruh suku/daerah dari satu aturan,
- menggantikan informasi resmi operator, pemerintah, venue, atau komunitas,
- membuat packing list tanpa konteks,
- memberi stempel Passport hanya karena checklist selesai,
- menyimpan data kesehatan sensitif,
- menampilkan restoran sebagai pasti buka atau tersedia.

### 3.3 KPI

| Metrik | Target MVP | Target Polish |
| --- | --- | --- |
| Dossier render success | 100% dengan fallback | 100% |
| Readiness comprehension | ≤75 detik | ≤45 detik |
| Budget detail open rate | ≥30% | ≥45% |
| Culinary item interaction | ≥20% | ≥35% |
| Etiquette viewed | ≥25% | ≥40% |
| Checklist first action | ≥30% | ≥50% |
| Checklist persistence success | 100% | 100% |
| Fallback usability | 100% | 100% |
| Interaction feedback | <100 ms | <80 ms |
| Accessibility | Lighthouse ≥90 | ≥95 |

---

## 4. Persona dan Skenario Utama

### 4.1 Turis Lokal

> “Saya ingin tahu apakah budget menengah cukup, apa yang wajib dicoba, dan apa yang harus disiapkan.”
> 

Hasil ideal: estimasi per orang, transport lokal/aktivitas/konsumsi/akomodasi dipisahkan, 4 kuliner sesuai stop, etiquette inti, dan checklist 8–12 item relevan.

### 4.2 Turis Mancanegara

> “I need transparent exclusions, dietary cautions, respectful etiquette, and a checklist I can trust.”
> 

Hasil ideal: English labels tidak overflow, currency basis jelas, dietary information tidak memberi jaminan, cultural guidance bersumber, dan official-check links tersedia bila canonical.

### 4.3 Traveler dengan Kebutuhan Khusus

> “Saya perlu tahu apa yang harus diverifikasi terkait aksesibilitas, bagasi, makanan, dan ritme perjalanan.”
> 

Hasil ideal: checklist dan disclosure memprioritaskan verifikasi akses, bukan mengklaim aksesibilitas tanpa data.

### 4.4 Juri Lomba

```
5 Hari Budaya & Kuliner Jawa
→ buka budget breakdown
→ ubah tampilan per orang / total party
→ buka culinary route Hari 2–4
→ tampilkan etiquette kontekstual
→ tandai 3 checklist
→ refresh halaman
→ progres tetap tersimpan
→ matikan API
→ preset dossier tetap usable
```

---

## 5. Input, Output, dan Dependency

### 5.1 Input Wajib

- active `RouteRecommendationResult`,
- validated `RouteItinerary`,
- optional validated `RouteMapModel` dan transport options,
- `routeId`, `routeVersion`, `itineraryVersion`, optional `mapVersion`,
- duration, stop/day/activity/culinary/transport refs,
- budget level dan travel pace,
- party size bila tersedia; default aman **1 traveler**,
- locale, traveler mode, dan currency display preference,
- source/fallback/match status,
- optional checklist persistence snapshot.

### 5.2 Output Section

- readiness summary,
- budget estimate dan breakdown,
- assumptions, exclusions, confidence, source/update disclosure,
- culinary route list/cards,
- diet/allergen verification notes,
- contextual etiquette guidance,
- dynamic checklist + completion progress,
- partial/error/fallback states per module,
- CTA edit preference, itinerary/map focus, NusaRasa, RANI, dan Save to Passport.

### 5.3 Dependency Rules

- Tanpa active result: hidden atau teaser ringan.
- Result ada, itinerary invalid: hanya tampilkan budget range/result summary dan generic verified checklist; jangan tampilkan day-linked culinary sebagai sukses.
- Budget data hilang: Culinary/Etiquette/Checklist tetap tampil.
- Culinary data hilang: budget dan checklist tidak ikut gagal.
- Etiquette tidak bersumber: gunakan general respectful guidance berlabel umum; jangan mengarang local custom.
- Persistence gagal: checklist masih dapat dipakai di sesi aktif dengan disclosure.
- Currency conversion tidak tersedia: pertahankan IDR sebagai canonical display.

---

## 6. Arsitektur Informasi

### 6.1 Struktur Section

```
RouteReadinessSection
├── Section Header
│   ├── Eyebrow + heading
│   ├── Active route context
│   ├── Readiness summary
│   └── Trust disclosure
├── Readiness Navigation
│   ├── Anggaran
│   ├── Rasa
│   ├── Etika
│   └── Checklist
├── Budget Module
│   ├── Total estimate
│   ├── Per-person / party toggle
│   ├── Category breakdown
│   ├── Assumptions + exclusions
│   └── Confidence/source
├── Culinary Module
│   ├── Route taste summary
│   ├── Day/stop-linked recommendations
│   ├── Dietary/allergen notes
│   └── NusaRasa handoff
├── Etiquette Module
│   ├── Priority guidance
│   ├── Context tags
│   ├── Why it matters
│   └── Source/variation disclosure
├── Checklist Module
│   ├── Progress summary
│   ├── Before booking
│   ├── Before departure
│   ├── During journey
│   ├── Route-specific checks
│   └── Reset/export optional
└── Handoff to Passport + RANI
```

### 6.2 Hierarchy

1. Readiness status dan total estimate.
2. Budget scope/confidence.
3. Rekomendasi rasa sesuai urutan route.
4. Etiquette prioritas tinggi.
5. Checklist yang dapat ditindaklanjuti.
6. Disclosure, sources, dan exclusions.
7. Save/adjust/ask actions.

### 6.3 Progressive Disclosure

**Default visible:** total range, 4 kategori budget, 3 culinary highlights, 2 etiquette essentials, 6 checklist priority items.

**Expanded:** rincian asumsi, semua item per day/stop, source refs, stale status, diet/accessibility checks, dan kategori checklist lanjutan.

Jangan memakai nested tab yang menyembunyikan semua konten. Pada mobile, gunakan jump links atau segmented shortcuts yang men-scroll ke subheading; semua module tetap berada dalam document flow.

---

## 7. Layout Desktop, Tablet, dan Mobile

### 7.1 Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ Header + readiness summary + trust disclosure               │
├───────────────────────────────┬──────────────────────────────┤
│ Budget overview + breakdown   │ Checklist progress + priority│
├───────────────────────────────┼──────────────────────────────┤
│ Culinary route               │ Etiquette essentials          │
└───────────────────────────────┴──────────────────────────────┘
```

- Grid 12 kolom; Budget 7 dan Checklist 5 pada baris utama.
- Culinary dan Etiquette boleh 7/5 atau 6/6 sesuai konten.
- Satu outer dossier dengan section bands; hindari empat card besar identik.
- Checklist panel boleh sticky hanya dalam band dan jika tidak menyebabkan scroll trap.

### 7.2 Tablet

- Header full width.
- Budget full width.
- Culinary dan Etiquette 2 kolom jika ruang cukup.
- Checklist full width di akhir atau setelah budget.
- Jump navigation horizontal wrap, bukan carousel wajib.

### 7.3 Mobile

```
Header + readiness status
↓
Jump links
↓
Budget total + breakdown
↓
Culinary route
↓
Etiquette essentials
↓
Checklist progress + groups
↓
Passport / RANI handoff
```

- Satu kolom; padding 16–20 px.
- Touch target minimal 44×44 px.
- Breakdown chart selalu memiliki text/table equivalent.
- Sticky actions tidak menutupi bottom navigation.
- Tidak ada nested horizontal scrolling untuk tabel penting.

---

## 8. Copywriting Final

### 8.1 Header

**Eyebrow**

```
Bekal Perjalanan
```

**Heading**

```
Siapkan biaya, rasa, etika, dan kebutuhan perjalananmu.
```

**Supporting copy**

```
Tinjau estimasi awal, temukan kuliner yang terhubung dengan rute, pahami panduan budaya yang relevan, dan selesaikan checklist sebelum perjalanan dimulai.
```

**Trust microcopy**

```
Estimasi awal · Informasi dapat berubah · Verifikasi harga, akses, diet, dan ketentuan terbaru
```

### 8.2 Module Labels

- `Estimasi anggaran`
- `Komposisi biaya`
- `Asumsi perhitungan`
- `Belum termasuk`
- `Jejak rasa di sepanjang rute`
- `Wajib dicoba`
- `Perlu diverifikasi untuk kebutuhan diet`
- `Etika yang perlu diketahui`
- `Konteks dan variasi lokal`
- `Checklist perjalanan`
- `Prioritas sebelum berangkat`
- `Sudah siap`
- `Masih perlu diperiksa`

### 8.3 Actions

- `Lihat Rincian Anggaran`
- `Tampilkan per Orang`
- `Tampilkan Total Rombongan`
- `Buka Hari Terkait`
- `Jelajahi di NusaRasa`
- `Lihat Sumber dan Konteks`
- `Tandai Selesai`
- `Tandai Belum Selesai`
- `Reset Checklist`
- `Sesuaikan bersama RANI`
- `Ubah Anggaran di Planner`
- `Simpan Rute ke Passport`

### 8.4 Disclaimer Budget

```
Estimasi ini adalah kisaran perencanaan berdasarkan kategori dan data yang tersedia—bukan harga pemesanan. Biaya aktual dapat berubah menurut musim, titik keberangkatan, jumlah traveler, akomodasi, kurs, dan pilihan aktivitas.
```

### 8.5 Disclaimer Culinary

```
Komposisi, cara penyajian, status halal, dan risiko alergen dapat berbeda di setiap tempat. Konfirmasikan langsung kepada penjual atau penyedia makanan sesuai kebutuhanmu.
```

### 8.6 Disclaimer Etiquette

```
Panduan ini bersifat kontekstual dan tidak mewakili seluruh komunitas. Ikuti arahan tuan rumah, pengelola tempat, atau sumber resmi setempat.
```

---

## 9. Readiness Summary

### 9.1 Tujuan

Memberi gambaran cepat tanpa menciptakan skor keselamatan palsu.

### 9.2 Isi

- budget status: lengkap/parsial/belum tersedia,
- culinary coverage: jumlah day/stop yang memiliki rekomendasi,
- etiquette coverage: jumlah konteks utama,
- checklist progress: selesai/total,
- data status: canonical/estimated/fallback/stale.

### 9.3 Readiness Labels

- **Siap ditinjau:** seluruh module memiliki data minimum.
- **Sebagian siap:** satu atau lebih module memakai fallback/partial.
- **Perlu dilengkapi:** input/refs penting belum tersedia.

Label ini adalah status kelengkapan informasi, **bukan safety score** dan bukan jaminan kesiapan pengguna.

---

## 10. Budget Module

### 10.1 Informasi Utama

- total estimate range,
- basis: per person atau total party,
- currency canonical,
- duration,
- party size,
- budget level,
- included categories,
- excluded categories,
- confidence/source/updated date.

### 10.2 Kategori Baseline

1. **Akomodasi** — hanya jika route model memasukkannya.
2. **Transportasi antarkota/antarklaster**.
3. **Transportasi lokal**.
4. **Konsumsi**.
5. **Aktivitas/tiket**.
6. **Buffer perjalanan**.

Opsional canonical:

- guide/local experience,
- bagasi/reservasi,
- accessibility support,
- insurance/permit—hanya sebagai exclusion/check, bukan angka default.

### 10.3 Aturan Perhitungan

- Gunakan range `min–max`, bukan satu angka presisi.
- Semua komponen harus memiliki `basis`, `confidence`, dan source refs bila spesifik.
- Jangan menghitung angka dari label `Hemat/Menengah/Premium` saja tanpa table/rules canonical.
- Transport cost harus merujuk segment canonical.
- Culinary cost merujuk meal allowance/range, bukan harga restoran yang tidak tervalidasi.
- Buffer adalah kategori perencanaan yang dijelaskan; jangan menyamarkannya sebagai biaya pasti.
- Origin-to-entry-point dapat menjadi exclusion jika origin tidak tersedia/tervalidasi.
- Total party hanya mengalikan item per-person; biaya shared memakai multiplier rules terpisah.

### 10.4 Confidence

- **Verified:** source dan update date valid.
- **Estimated:** rule/range canonical tetapi bukan tarif live.
- **Partial:** sebagian kategori tidak tersedia.
- **Unknown:** tidak cukup data; jangan tampilkan angka nol.

### 10.5 Breakdown Visual

- Gunakan horizontal bars/donut hanya sebagai pelengkap.
- Selalu tampilkan nominal/range dan persentase tekstual.
- Unknown tidak dihitung sebagai zero.
- Warna kategori konsisten tetapi bukan satu-satunya pembeda.

### 10.6 Exclusions Wajib Dipertimbangkan

- perjalanan dari origin menuju entry point,
- perjalanan pulang setelah final stop,
- visa/dokumen perjalanan,
- asuransi,
- belanja pribadi,
- biaya medis,
- perubahan musiman,
- biaya event khusus,
- biaya akses/pendamping khusus jika tidak canonical.

### 10.7 Budget Adjustment

CTA **Ubah Anggaran** kembali ke Planner dengan preference tetap. Result lama tidak diganti sampai route baru tervalidasi. RANI menerima structured request seperti `reduce_budget`, `increase_buffer`, atau `prefer_local_transit`; bukan instruksi bebas yang langsung mengubah angka.

---

## 11. Culinary Module

### 11.1 Tujuan

Mengubah culinary moments dari itinerary menjadi **route taste trail** yang relevan, terkurasi, dan tidak terasa seperti daftar restoran.

### 11.2 Selection Rules

Prioritas:

1. culinary IDs yang direferensikan itinerary,
2. signature dish dari active stop/province,
3. variasi kategori/rasa,
4. diet compatibility hanya jika data tersedia,
5. maksimal 1–2 highlight per day dan 3–6 highlight section default.

### 11.3 Culinary Card/Row

Setiap item dapat memuat:

- nama canonical,
- province/stop,
- day link,
- category: main dish/snack/drink/market,
- taste profile,
- one-line context,
- serving context,
- ingredient/allergen flags bila canonical,
- verification note,
- NusaRasa/detail URL bila valid.

### 11.4 Dietary Integrity

- `contains` hanya untuk bahan yang terdokumentasi.
- `mayContain` tidak boleh dipakai sebagai diagnosis atau jaminan.
- Halal/vegetarian/vegan/gluten-free hanya tampil jika ada basis data yang memadai.
- Jika tidak diketahui, tampilkan `Konfirmasikan langsung kepada penjual`.
- Jangan menyimpan preferensi medis sensitif di analytics/localStorage.

### 11.5 Cultural Context

Copy fokus pada asal, penggunaan, rasa, dan konteks makan secara hormat. Hindari istilah “aneh”, “eksotis”, “primitif”, atau klaim “paling autentik”. Jangan menjadikan orang/komunitas sebagai dekorasi visual.

### 11.6 NusaRasa Handoff

- Buka entity canonical atau filtered NusaRasa view.
- Sertakan `culinaryId`, `provinceId`, `routeId`, dan return context.
- Back memulihkan scroll dan expanded item.
- Jangan membuka modal bersarang di mobile.

---

## 12. Etiquette Module

### 12.1 Tujuan

Menyediakan panduan kontekstual untuk membantu pengguna bersikap hormat, bukan daftar larangan yang menakutkan.

### 12.2 Kategori

- tempat ibadah/sakral,
- komunitas atau desa adat,
- fotografi/rekaman,
- pakaian,
- sapaan/interaksi,
- upacara/event,
- ruang privat,
- lingkungan/konservasi,
- transaksi/pasar,
- culinary sharing/service context.

### 12.3 Priority Logic

Skor baseline:

```
relevance to active activity/stop × 40
sensitivity level × 25
traveler mode × 15
source confidence × 10
recency × 10
```

Tampilkan maksimal 2–4 essential notes default. Jangan memprioritaskan berdasarkan sensasionalisme.

### 12.4 Etiquette Item

Setiap item memuat:

- concise guidance,
- context/location/activity,
- why it matters,
- what to do,
- optional what to avoid,
- variation/disclosure,
- source refs dan updated date,
- sensitivity level internal.

### 12.5 Content Rules

- Hindari “orang X selalu…”.
- Gunakan “Pada konteks/tempat ini…” atau “Ikuti arahan setempat…”.
- Jangan menjanjikan akses ke ritual/tempat sakral.
- Minta izin sebelum foto bila canonical guidance mengharuskannya.
- Bila sumber bertentangan/stale, tampilkan general respectful fallback dan tandai perlu verifikasi.
- Learn Mode dapat menampilkan konteks lebih panjang; Tourist Mode menonjolkan tindakan praktis.

---

## 13. Checklist Module

### 13.1 Prinsip

Checklist dibangun dari **template canonical + dynamic rules**, bukan generated prose bebas.

### 13.2 Groups

1. **Sebelum memesan** — scope, transport, accommodation, entry point.
2. **Sebelum berangkat** — dokumen, cuaca, pakaian, obat pribadi, charging/offline access.
3. **Transport & perpindahan** — operator, jadwal, buffer, bagasi, last-mile.
4. **Aktivitas & lokasi** — reservation, access, clothing, equipment.
5. **Kuliner & kebutuhan diet** — preference card, allergen confirmation, hydration.
6. **Etika & lingkungan** — permission, local guidance, waste/leave-no-trace.
7. **Aksesibilitas** — confirmation checklist bila user memilih kebutuhan terkait; jangan membuat klaim.
8. **Saat perjalanan** — emergency contacts official, offline route, document backup.

### 13.3 Generation Rules

- Base items berlaku untuk semua route.
- Transport items berasal dari segment mode/confidence.
- Ferry/flight/rail menambahkan operator/schedule/reservation check.
- Outdoor activity menambahkan weather/equipment check bila canonical.
- Sacred/customary activity menambahkan etiquette confirmation.
- Culinary refs menambahkan diet/allergen check tanpa menyimpulkan keamanan.
- Remote/low-connectivity stop menambahkan offline access check bila data mendukung.
- Unknown data menghasilkan **check to verify**, bukan asumsi.

### 13.4 Item Anatomy

- stable ID,
- action label,
- reason/context,
- group,
- priority,
- sourceRef/derivedFrom,
- route/day/segment/activity link,
- completion state,
- optional due phase (`before-booking`, `before-departure`, `during-trip`).

### 13.5 Completion dan Persistence

- Checkbox explicit; click card bukan satu-satunya cara.
- Progress disimpan versioned berdasarkan route + itinerary version.
- Route version baru memicu migration/review, bukan menandai semua selesai.
- User dapat reset dengan konfirmasi atau Undo.
- Completion adalah personal UI state, bukan canonical data.
- Jangan memberi Passport stamp otomatis.

### 13.6 Progress

Tampilkan `3 dari 10 selesai` dan remaining priority. Hindari skor “100% aman”. Copy completion:

```
Checklist dasar selesai. Tetap periksa informasi operasional terbaru sebelum berangkat.
```

---

## 14. Data Contract

### 14.1 Readiness Dossier

```tsx
export interface RouteReadinessDossier {
  id: string;
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion?: string;
  version: string;
  locale: "id" | "en";
  source: "canonical" | "derived" | "preset" | "fallback";
  status: "ready" | "partial" | "stale";
  budget?: RouteBudgetEstimate;
  culinaryItems: RouteCulinaryItem[];
  etiquetteItems: RouteEtiquetteItem[];
  checklistTemplate: RouteChecklistTemplate;
  sourceRefs?: string[];
  updatedAt: string;
}
```

### 14.2 Budget

```tsx
export type DataConfidence =
  | "verified"
  | "estimated"
  | "partial"
  | "unknown";

export interface MoneyRange {
  currency: "IDR";
  min: number;
  max: number;
}

export interface RouteBudgetEstimate {
  basis: "per-person" | "party";
  partySize: number;
  durationDays: 3 | 5 | 7;
  total: MoneyRange;
  confidence: DataConfidence;
  categories: RouteBudgetCategory[];
  assumptionIds: string[];
  exclusionIds: string[];
  sourceRefs?: string[];
  updatedAt: string;
}

export interface RouteBudgetCategory {
  id: string;
  type:
    | "accommodation"
    | "intercity-transport"
    | "local-transport"
    | "meals"
    | "activities"
    | "buffer"
    | "other";
  label: string;
  amount?: MoneyRange;
  confidence: DataConfidence;
  segmentIds?: string[];
  activityIds?: string[];
  sourceRefs?: string[];
}
```

### 14.3 Culinary

```tsx
export interface RouteCulinaryItem {
  id: string;
  culinaryId: string;
  provinceId: string;
  stopId: string;
  dayNumbers: number[];
  category: "main" | "snack" | "drink" | "market";
  tasteProfileIds: string[];
  contextNoteId: string;
  dietaryTags?: string[];
  allergenRefs?: string[];
  confidence: DataConfidence;
  sourceRefs?: string[];
}
```

### 14.4 Etiquette

```tsx
export interface RouteEtiquetteItem {
  id: string;
  contextType:
    | "sacred-place"
    | "customary-community"
    | "photography"
    | "clothing"
    | "interaction"
    | "event"
    | "environment"
    | "market"
    | "dining";
  provinceIds: string[];
  activityIds?: string[];
  guidanceId: string;
  whyItMattersId?: string;
  priority: "essential" | "recommended" | "contextual";
  confidence: DataConfidence;
  sourceRefs: string[];
  updatedAt: string;
}
```

### 14.5 Checklist

```tsx
export interface RouteChecklistTemplate {
  id: string;
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  version: string;
  items: RouteChecklistItem[];
}

export interface RouteChecklistItem {
  id: string;
  groupId: string;
  labelId: string;
  descriptionId?: string;
  priority: "required-check" | "recommended" | "optional";
  phase: "before-booking" | "before-departure" | "during-trip";
  derivedFrom: Array<{
    type: "route" | "day" | "segment" | "activity" | "culinary" | "etiquette";
    id: string;
  }>;
  sourceRefs?: string[];
}

export interface RouteChecklistProgress {
  templateId: string;
  templateVersion: string;
  routeId: string;
  routeVersion: string;
  completedItemIds: string[];
  updatedAt: string;
}
```

---

## 15. Validation Rules

- Route/itinerary/map/dossier IDs dan versions harus kompatibel.
- Money range non-negative, finite, `min ≤ max`, dan currency canonical.
- Unknown category tidak boleh dihitung sebagai nol.
- Total harus konsisten dengan category roll-up menurut documented rounding rules.
- Party size harus integer aman; default 1 jika tidak tersedia.
- Per-person/shared multiplier harus eksplisit.
- Verified budget memerlukan source/update date.
- Culinary ID harus canonical dan terkait active stop/province.
- Dietary/allergen tags harus berasal dari data, bukan inferensi nama makanan.
- Etiquette essential memerlukan source refs.
- Checklist item IDs unik dan derived refs valid.
- Completed IDs yang tidak ada di template aktif diabaikan/migrated secara aman.
- Locale mapper tidak mengubah IDs.
- Invalid module tidak merusak module lain.

---

## 16. Source of Truth dan Data Flow

```
Active Route Result
→ validated Itinerary
→ validated Map/Transport refs
→ resolve canonical budget/culinary/etiquette data
→ build + validate Readiness Dossier
→ map to presentation view model
→ Budget / Culinary / Etiquette / Checklist UI
→ Passport + RANI handoff
```

Anti-duplication rules:

- Budget tidak parsing rendered transport rows.
- Culinary tidak mengambil title string dari day card.
- Etiquette tidak dipilih dari province name saja jika context activity tersedia.
- Checklist tidak mengubah itinerary.
- Passport menyimpan dossier/version refs, bukan entire UI text.
- RANI menerima typed IDs dan adjustment intent.
- Analytics tidak mengirim completed item labels atau data sensitif.

---

## 17. State Matrix

| State | Kondisi | Tampilan | Aksi |
| --- | --- | --- | --- |
| Hidden | belum ada active result | tidak render/teaser | buat rute |
| Loading | dossier disusun | skeleton stabil per module | tunggu |
| Ready | semua minimum valid | full dossier | review/check |
| Partial | satu module kurang | module lain tetap aktif | review/retry |
| Estimated | budget berbasis ranges | estimate disclosure | lihat asumsi |
| Fallback | preset/local template | curated baseline | continue |
| Stale | source/version lama | review/update note | refresh aman |
| Restored | refresh/Back | progress pulih | continue |
| Persistence failed | storage unavailable | session-only checklist | continue |
| Error recoverable | resolver/module gagal | isolated error + fallback | retry |
| Offline | tanpa network | preset dossier + local checks | continue |

---

## 18. Loading, Partial, Error, dan Offline

### 18.1 Loading

- Skeleton menjaga tinggi total/ringkasan dan 4 module.
- Copy: `Menyiapkan bekal perjalananmu…`.
- Section sebelumnya tetap usable.
- Jangan full-screen spinner.

### 18.2 Partial

- Tampilkan module yang valid.
- Ringkasan menyebut `Sebagian informasi masih perlu diverifikasi`.
- Jangan mengubah unknown menjadi nol, kosong, atau sukses.

### 18.3 Error Isolation

- Budget error → culinary/etiquette/checklist tetap aktif.
- Culinary error → gunakan link NusaRasa region jika valid.
- Etiquette error → general respectful fallback.
- Checklist generation error → base checklist canonical.

### 18.4 Offline

- Preset route memuat budget bands, culinary IDs, general/contextual etiquette, dan checklist template lokal.
- Checklist persistence tetap local-first.
- Source links yang membutuhkan network ditandai tanpa memblokir flow.

---

## 19. Visual Direction

### 19.1 Creative Direction

```
Premium travel readiness dossier
× editorial field notes
× quiet practical intelligence
```

### 19.2 Palet

- Background: `#F8F4EA` / `#FFFDF8`.
- Surface: warm white.
- Text: `#0D1B2A`.
- Muted: `#5C6470`.
- Gold: `#C9A84C` untuk focus/highlight.
- Budget: navy/blue accents.
- Culinary: terracotta/amber terbatas.
- Etiquette: forest green/brown terbatas.
- Checklist success: `#2D5A27`.
- Error: `#8B2020`.
- Focus: `#2D6BE4`.
- Border: `#E8E0CE`.

### 19.3 Surface dan Hierarchy

- Outer dossier radius 26–34 px desktop, 20–26 px mobile.
- Section bands dipisah border/divider, bukan card-in-card berulang.
- Motif tenun/batik 2–4% opacity di whitespace.
- Budget amount besar tetapi disclaimer tetap dekat.
- Culinary image opsional; maksimal 3 featured thumbnails.
- Checklist memakai native-feeling rows, bukan gamified neon tasks.
- Accent maksimal sekitar 12–15% area.

---

## 20. Motion dan Micro-interaction

- Section reveal: opacity + translateY 12–16 px.
- Breakdown expansion: 180–240 ms.
- Module jump highlight: 300–500 ms sekali.
- Checkbox response: immediate + subtle check draw 120–180 ms.
- Progress update: width/number transition 180–260 ms.
- Tidak ada confetti untuk checklist biasa.
- Tidak ada count-up yang menyamarkan estimasi.
- `prefers-reduced-motion`: instant state/opacity ringan, tanpa smooth scroll wajib.

---

## 21. Accessibility Plan

### 21.1 Semantik

- Section dengan `aria-labelledby`.
- Module memakai heading hierarchy, bukan tabs semantik jika hanya jump links.
- Budget breakdown memakai list/table text equivalent.
- Culinary/etiquette memakai semantic lists/articles.
- Checklist memakai `<fieldset>`/group dan native checkbox bila memungkinkan.
- Progress memiliki text equivalent; bukan progress bar visual saja.

### 21.2 Keyboard

- Jump links → module headings → actions → checklist items.
- Semua expand/collapse memakai button dengan `aria-expanded`.
- Space menandai checkbox.
- Reset tidak berada dekat action utama tanpa protection.
- Tidak ada focus trap.

### 21.3 Screen Reader

- Budget range dibaca utuh dan menyebut basis.
- Chart dekoratif `aria-hidden` jika tabel tersedia.
- Culinary diet warnings terhubung ke item.
- Etiquette source/variation dapat dibaca.
- Checklist progress diumumkan `polite`, bukan setiap perubahan secara berlebihan.
- Loading/partial/error/status menggunakan live region proporsional.

### 21.4 Visual/Motor

- WCAG AA.
- Focus ring 2–3 px.
- Touch target minimal 44×44 px.
- Status tidak bergantung warna.
- Zoom 200% tidak memotong nominal/actions.
- Forced colors mempertahankan checkbox, border, focus, dan status.

---

## 22. Responsive Guardrails

| Breakpoint | Layout | Navigation | Checklist |
| --- | --- | --- | --- |
| ≥1280 px | asymmetric dossier grid | inline jump links | side/paired panel |
| 1024–1279 px | balanced 2-column | wrap | full/side |
| 768–1023 px | stack + selective 2-column | wrap/grid | full width |
| <768 px | single column | compact jump links | grouped rows |

Mobile guardrails:

- Nominal dapat wrap tanpa terpotong.
- Party toggle tidak memakai dropdown sempit.
- Culinary images 16:9/4:3 dan lazy-loaded.
- Etiquette text tidak tersembunyi di tooltip.
- Checkbox label tetap dapat tap luas tanpa nested link conflict.
- Safe area/bottom nav aman.

---

## 23. Performance Plan

### 23.1 Target

- Static dossier shell cepat setelah map section.
- Checklist interaction <100 ms.
- Tidak ada CLS besar saat amount/progress berubah.
- Tidak ada API yang dibutuhkan untuk basic preset success.
- 3–7 day route tidak membuat DOM berlebihan.

### 23.2 Optimasi

- Resolve dossier dari normalized route data.
- Memoize calculations by IDs/versions.
- Lazy-load expanded source details dan culinary images.
- Persist checklist dengan debounce 200–400 ms.
- Gunakan CSS untuk chart sederhana.
- Abort/token guard saat active route berubah cepat.
- Currency formatter via `Intl.NumberFormat`; jangan library besar tanpa kebutuhan.

### 23.3 Asset Budget

- Featured culinary image ideal 100–160 KB.
- Thumbnail 50–90 KB.
- Pattern ≤30 KB.
- Icon SVG ≤10 KB.
- Jangan memuat seluruh NusaRasa dataset ke initial section bundle.

---

## 24. Integration Plan

### 24.1 Route Recommendation Result

- Budget level dan estimated label konsisten.
- Adjustment/fallback disclosure diteruskan.
- Party size hanya dipakai jika contract tersedia.

### 24.2 Day-by-Day Itinerary

- Culinary day links memakai day/stop IDs.
- Etiquette berasal dari activity/context refs.
- Checklist berasal dari transfer/activity/rest structure.
- Day card tetap preview; Section 7 menjadi agregator detail.

### 24.3 Route Map + Transport Summary

- Transport cost memakai segment IDs yang sama.
- Transport practical checks dideduplikasi, bukan ditampilkan dua kali tanpa konteks.
- Active day/segment dapat difokuskan dari item readiness.
- Unknown transport tidak menghasilkan biaya atau moda palsu.

### 24.4 NusaRasa

- Culinary item membuka entity/filter canonical.
- Return context memulihkan route/scroll.
- Jangan menggandakan seluruh NusaRasa content.

### 24.5 Nusa Passport

Save payload minimum:

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  readinessVersion,
  provinceIds,
  status: "planned"
}
```

- Checklist progress dapat disimpan lokal terpisah.
- Completion bukan stamp.
- Tidak menyimpan assumptions/source text penuh jika refs cukup.

### 24.6 RANI

Payload minimum:

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  readinessVersion,
  budgetLevel,
  budgetAdjustmentIntent,
  selectedDayNumber,
  selectedCulinaryId,
  selectedEtiquetteId,
  incompleteChecklistItemIds,
  locale,
  travelerMode
}
```

RANI boleh menyusun draft dari alternatives canonical. RANI tidak boleh menjanjikan harga, status diet, akses, atau aturan budaya tanpa data.

---

## 25. Bilingual dan Traveler Modes

### 25.1 ID/EN

- IDs, nominal canonical, refs, dan completion tidak diterjemahkan.
- Gunakan locale formatter untuk IDR.
- Switch bahasa tidak mereset checklist atau expanded state.
- English copy boleh lebih panjang dan harus wrap.

### 25.2 Modes

- **Explore:** cerita rasa dan practical utility seimbang.
- **Tourist:** budget, transport, diet, etiquette, checklist, dan verification lebih dominan.
- **Learn:** konteks kuliner/budaya, source refs, dan variasi lokal lebih dominan.

Gunakan satu dossier + view model; jangan membuat tiga datasets.

---

## 26. Analytics

### 26.1 Events

```
route_readiness_section_viewed
route_readiness_loaded
route_readiness_partial_loaded
route_readiness_fallback_loaded
budget_summary_viewed
budget_breakdown_expanded
budget_basis_changed
budget_assumptions_opened
budget_edit_clicked
culinary_item_viewed
culinary_day_clicked
culinary_nusarasa_clicked
culinary_diet_disclosure_opened
etiquette_item_viewed
etiquette_source_opened
checklist_item_completed
checklist_item_uncompleted
checklist_group_expanded
checklist_reset
checklist_restore_succeeded
checklist_persistence_failed
route_readiness_rani_clicked
route_readiness_passport_clicked
route_readiness_retry_clicked
route_readiness_error
```

### 26.2 Payload Aman

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  readinessVersion,
  source,
  status,
  budgetConfidence,
  budgetCategoryCount,
  culinaryCount,
  etiquetteCount,
  checklistItemCount,
  checklistCompletedCount,
  travelerMode,
  locale
}
```

Jangan kirim:

- nominal custom/free-text,
- medical/dietary sensitive details,
- exact checklist labels,
- free-text RANI,
- data pribadi,
- full itinerary.

---

## 27. Security, Privacy, dan Integrity

- Allowlist route/version/query params.
- Validasi API/localStorage data sebelum render.
- localStorage versioned dan hanya menyimpan item IDs/status.
- Jangan menyimpan data kesehatan sensitif.
- Jangan render HTML/model output mentah.
- Source/external links disanitasi dan memakai rel aman.
- Currency converter eksternal tidak menjadi dependency MVP.
- Error logs tidak menyimpan free-text diet/accessibility request.
- Treat RANI output sebagai draft sampai tervalidasi.
- Data stale menampilkan update disclosure.

---

## 28. Content Safety dan Cultural Integrity

- Budget tidak boleh membuat pengguna merasa dijamin mampu melakukan perjalanan.
- Culinary content tidak menjamin keamanan alergen, halal, vegan, atau komposisi.
- Etiquette harus bersumber dan tidak menggeneralisasi identitas.
- Jangan mengubah komunitas, ritual, atau tempat sakral menjadi “checklist attraction”.
- Jangan mendorong foto tanpa izin.
- Jangan mempromosikan akses ke lokasi sensitif tanpa data/izin.
- Sustainability checks harus konkret, bukan greenwashing.
- Emergency/health guidance harus mengarah ke sumber resmi jika tersedia.
- Official requirements yang dinamis harus diberi date/source dan verification CTA.

---

## 29. Error Handling dan Recovery Matrix

| Masalah | Recovery |
| --- | --- |
| budget model invalid | generic range label atau “belum tersedia”; module lain tetap |
| category total mismatch | blok breakdown, tampilkan safe summary + disclosure |
| party size invalid | fallback 1 traveler + notice |
| culinary ref invalid | hapus item invalid; tampilkan item canonical lain |
| diet/allergen data unknown | verification prompt; no guarantee |
| etiquette source missing | general respectful fallback |
| checklist derivation gagal | base checklist canonical |
| storage gagal | session-only progress |
| route version berubah | review/migrate progress; jangan auto-complete |
| rapid route switch | atomic dossier replace + request token |
| offline | preset dossier + local checklist |

---

## 30. Component Architecture

Gunakan pola repository existing. Struktur referensi:

```
src/components/routes/route-readiness/
├── RouteReadinessSection.tsx
├── RouteReadinessHeader.tsx
├── RouteReadinessSummary.tsx
├── RouteReadinessNavigation.tsx
├── BudgetModule.tsx
├── BudgetEstimateHero.tsx
├── BudgetBasisToggle.tsx
├── BudgetBreakdown.tsx
├── BudgetCategoryRow.tsx
├── BudgetAssumptions.tsx
├── BudgetDisclosure.tsx
├── CulinaryModule.tsx
├── CulinaryRouteList.tsx
├── CulinaryItemCard.tsx
├── CulinaryDietDisclosure.tsx
├── EtiquetteModule.tsx
├── EtiquetteItem.tsx
├── EtiquetteDisclosure.tsx
├── ChecklistModule.tsx
├── ChecklistProgress.tsx
├── ChecklistGroup.tsx
├── ChecklistItem.tsx
├── RouteReadinessSkeleton.tsx
├── RouteReadinessPartialState.tsx
├── RouteReadinessErrorState.tsx
└── index.ts

src/lib/routes/readiness/
├── routeReadinessSchema.ts
├── validateRouteReadiness.ts
├── resolveRouteReadiness.ts
├── resolveRouteBudget.ts
├── calculateBudgetRange.ts
├── resolveRouteCulinary.ts
├── resolveRouteEtiquette.ts
├── buildRouteChecklist.ts
├── mapReadinessToViewModel.ts
├── checklistPersistence.ts
├── migrateChecklistProgress.ts
└── readinessVersionGuard.ts
```

Separation of concerns:

- Section mengatur orchestration.
- Resolver/validator mengatur domain.
- Calculator hanya menerima normalized data.
- View model mengatur labels/format.
- Checklist persistence terpisah dari canonical dossier.
- Visual components tidak membaca global store jika props cukup.

---

## 31. Test Plan

### 31.1 Unit

- menerima dossier valid untuk 3/5/7 hari,
- menolak route/version mismatch,
- money range validator,
- total/category reconciliation,
- per-person vs shared multiplier,
- unknown bukan zero,
- confidence mapper deterministic,
- culinary refs harus canonical,
- diet tags tidak diinfer,
- etiquette prioritization deterministic,
- checklist derivation dari ferry/flight/outdoor/sacred contexts,
- checklist progress migration,
- invalid completed IDs diabaikan,
- fallback resolver benar.

### 31.2 Component

- hidden state tidak render dossier kosong,
- skeleton stabil,
- budget range dan basis terbaca,
- chart memiliki text equivalent,
- partial module tidak menghapus module lain,
- culinary item membuka day/entity benar,
- etiquette disclosure accessible,
- checkbox keyboard bekerja,
- progress berubah dan diumumkan,
- reset/Undo bekerja,
- persistence failure tetap usable.

### 31.3 Integration/E2E

1. Result → itinerary → map → readiness dossier.
2. 5 Hari Budaya & Kuliner Jawa menghasilkan breakdown dan culinary route.
3. Per-person → party total tidak menggandakan shared cost secara salah.
4. Culinary item Hari 2 → itinerary → Back → state pulih.
5. Transport partial → budget partial + checklist verify.
6. Budget missing → culinary/etiquette/checklist tetap tampil.
7. Checklist 3 item → refresh → progress pulih.
8. Route version baru → progress review/migration.
9. Switch ID/EN → IDs/progress tetap.
10. Offline → preset dossier.
11. RANI adjustment valid → atomic route/dossier replacement.
12. Invalid RANI budget → ditolak/fallback.
13. Reduced motion → no nonessential transitions.

### 31.4 Device QA

- 360×800.
- 390×844.
- 768×1024.
- 1024×768.
- 1366×768.
- 1440×900.
- Zoom 200%.
- Keyboard only.
- Screen reader spot check.
- Forced colors.
- Reduced motion.
- Slow 4G.
- Offline/private storage restriction.

---

## 32. Demo Path

### 32.1 Main Demo

```
Buka /routes
→ generate 5 Hari Budaya & Kuliner Jawa
→ review itinerary dan map
→ scroll ke Bekal Perjalanan
→ buka estimasi budget per orang
→ tunjukkan included/excluded dan confidence
→ buka Gudeg/culinary item Hari 2
→ tampilkan etiquette kontekstual
→ tandai operator, cuaca, dan kebutuhan diet
→ simpan route ke Passport / sesuaikan melalui RANI
```

### 32.2 Failure Demo

```
Nonaktifkan dynamic API/network
→ buka preset route demo
→ budget bands lokal tampil
→ culinary IDs canonical tetap muncul
→ general/contextual etiquette fallback tersedia
→ checklist dapat ditandai
→ refresh mempertahankan progress
```

---

## 33. Implementation Phases

### Fase A — Audit dan Contract

- [ ]  Audit hasil implementasi Section 4–6 terbaru.
- [ ]  Audit route/itinerary/map/transport IDs dan versions.
- [ ]  Audit budget bands, cost refs, currency, dan party-size contract.
- [ ]  Audit culinary entities/NusaRasa links.
- [ ]  Audit etiquette source model.
- [ ]  Audit checklist/persistence utilities existing.
- [ ]  Kunci `RouteReadinessDossier` dan version strategy.

### Fase B — Dataset dan Validation

- [ ]  Lengkapi satu route demo canonical.
- [ ]  Definisikan budget categories/ranges/assumptions/exclusions.
- [ ]  Map culinary IDs ke day/stop.
- [ ]  Tambahkan etiquette items + source refs.
- [ ]  Buat checklist rule templates.
- [ ]  Tambahkan ID/EN labels.
- [ ]  Implement schema dan validation.

### Fase C — Static UI

- [ ]  Header dan readiness summary.
- [ ]  Jump navigation.
- [ ]  Budget hero/breakdown/disclosure.
- [ ]  Culinary route list/cards.
- [ ]  Etiquette essentials.
- [ ]  Checklist groups/progress.
- [ ]  Passport/RANI handoff.

### Fase D — Logic dan State

- [ ]  Budget calculator + confidence.
- [ ]  Per-person/party basis.
- [ ]  Culinary selector/deduplication.
- [ ]  Etiquette priority resolver.
- [ ]  Checklist dynamic builder.
- [ ]  Checklist persistence/migration/reset.
- [ ]  Route change atomic guard.

### Fase E — Reliability

- [ ]  Loading/partial/error isolation.
- [ ]  Preset fallback.
- [ ]  Offline behavior.
- [ ]  Stale/version recovery.
- [ ]  Storage failure mode.
- [ ]  Unknown-data disclosures.

### Fase F — Ecosystem Integration

- [ ]  Result.
- [ ]  Itinerary day links.
- [ ]  Map/transport segment refs.
- [ ]  NusaRasa.
- [ ]  Passport.
- [ ]  RANI.
- [ ]  ID/EN dan modes.
- [ ]  Analytics.

### Fase G — Polish dan QA

- [ ]  Responsive.
- [ ]  Accessibility.
- [ ]  Reduced motion/forced colors.
- [ ]  Performance.
- [ ]  Cultural/content review.
- [ ]  Privacy/security review.
- [ ]  Unit/component/E2E tests.
- [ ]  Production build.
- [ ]  Main/failure demo rehearsal.

---

## 34. Estimasi Pengerjaan

| Tahap | Estimasi |
| --- | --- |
| Audit contract dan data | 2–4 jam |
| Schema, validator, resolver | 3–5 jam |
| Budget calculation + UI | 3–5 jam |
| Culinary module + NusaRasa link | 2–4 jam |
| Etiquette module + content review | 2–4 jam |
| Checklist rules + persistence | 3–5 jam |
| Integration Result/Itinerary/Map | 2–4 jam |
| Passport/RANI/i18n/analytics | 2–4 jam |
| A11y, performance, QA, polish | 3–6 jam |

**MVP kuat:** 15–23 jam jika data budget/kuliner/etiquette tersedia.  

**Premium terintegrasi:** 24–41 jam tergantung kesiapan cost rules, source refs, NusaRasa routing, RANI, persistence migration, dan cultural review.

---

## 35. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| budget terlihat pasti | trust/keputusan salah | range + assumptions + exclusions |
| unknown dihitung nol | total terlalu rendah | unknown state eksplisit |
| party multiplier salah | angka menyesatkan | per-person/shared cost rules |
| harga stale | estimasi tidak relevan | updatedAt + confidence |
| kuliner tidak terkait route | rekomendasi generik | day/stop canonical refs |
| klaim diet/alergen | risiko kesehatan | no guarantee + verify directly |
| etiquette stereotip | cultural harm | context + sources + review |
| checklist universal | utility rendah | dynamic rule derivation |
| completion dianggap aman | false confidence | no safety score/disclaimer |
| route switch mencampur data | incorrect dossier | version guard + atomic replace |
| storage blocked | progress hilang | session fallback + disclosure |
| section terlalu padat | fatigue | hierarchy + progressive disclosure |
| mobile terlalu panjang | drop-off | jump links + priority-first |
| API gagal saat demo | dead end | complete local preset dossier |

---

## 36. Acceptance Criteria

### 36.1 Functional

- [ ]  Section menjadi Section 7 `/routes`.
- [ ]  Anchor `#route-readiness` tersedia.
- [ ]  Hidden/teaser tanpa active result.
- [ ]  Dossier memakai route/itinerary versions yang sama.
- [ ]  Budget menampilkan range, basis, categories, assumptions, exclusions, dan confidence.
- [ ]  Unknown tidak tampil sebagai nol.
- [ ]  Culinary items terkait canonical day/stop.
- [ ]  Diet/allergen info tidak memberi jaminan.
- [ ]  Etiquette contextual dan bersumber.
- [ ]  Checklist dibangun dari rules canonical.
- [ ]  Progress dapat ditandai, di-reset, dan dipulihkan.
- [ ]  Route version change tidak mempertahankan completion secara membabi buta.
- [ ]  Partial module tidak merusak module lain.
- [ ]  Offline/preset fallback usable.

### 36.2 Visual

- [ ]  Terasa seperti satu premium readiness dossier.
- [ ]  Bukan empat card generik identik.
- [ ]  Total estimate jelas tetapi disclaimer dekat.
- [ ]  Budget chart tidak dominan atau misleading.
- [ ]  Culinary visual terkurasi dan tidak ramai.
- [ ]  Etiquette terasa hangat, bukan daftar larangan.
- [ ]  Checklist bersih dan actionable.
- [ ]  Heritage Futuristic Light konsisten.

### 36.3 Responsive

- [ ]  Desktop asymmetric dossier grid.
- [ ]  Tablet hierarchy tetap kuat.
- [ ]  Mobile satu kolom tanpa overflow.
- [ ]  Nominal dan English labels dapat wrap.
- [ ]  Touch target ≥44 px.
- [ ]  Sticky action aman dari bottom navigation.

### 36.4 Accessibility

- [ ]  Heading/module semantics benar.
- [ ]  Budget chart memiliki text equivalent.
- [ ]  Semua action keyboard-friendly.
- [ ]  Native checkbox/semantics benar.
- [ ]  Progress dan status diumumkan proporsional.
- [ ]  Status tidak bergantung warna.
- [ ]  Zoom 200%, forced colors, dan reduced motion usable.
- [ ]  WCAG AA.

### 36.5 Integrity dan Reliability

- [ ]  Tidak ada harga/tarif live palsu.
- [ ]  Tidak ada dietary/allergen guarantee.
- [ ]  Tidak ada etiquette stereotip.
- [ ]  Source/update disclosure tersedia.
- [ ]  RANI output divalidasi.
- [ ]  localStorage versioned dan aman.
- [ ]  No sensitive data analytics.
- [ ]  Race condition dicegah.

### 36.6 Performance

- [ ]  Static shell cepat.
- [ ]  Checklist response <100 ms.
- [ ]  Tidak ada CLS besar.
- [ ]  Culinary images lazy-loaded.
- [ ]  Initial bundle tidak memuat full NusaRasa dataset.
- [ ]  Production build berhasil.

---

## 37. Definition of Done

Section dianggap selesai jika:

1. Active route selalu menghasilkan readiness dossier valid atau fallback usable.
2. Route, itinerary, map, transport, dan dossier memakai IDs/versions konsisten.
3. Budget menampilkan range yang transparan, bukan angka palsu.
4. Semua assumptions, exclusions, confidence, dan unknown state dapat dipahami.
5. Culinary recommendations terkait route/day/stop canonical.
6. Informasi diet/alergen tidak memberi jaminan yang berbahaya.
7. Etiquette items spesifik konteks, bersumber, dan lolos cultural review.
8. Checklist dibangun secara deterministic dari route context.
9. Progres checklist tersimpan, dapat dimigrasikan, dan tidak menjadi safety score.
10. Setiap module gagal secara terisolasi dan memiliki fallback.
11. Preset demo berfungsi tanpa network/API.
12. Passport, RANI, NusaRasa, Itinerary, dan Map handoff memakai structured context.
13. ID/EN dan traveler modes tidak merusak data/progress.
14. Desktop, tablet, mobile, keyboard, screen reader, 200% zoom, forced colors, dan reduced motion telah diuji.
15. Analytics, security, privacy, performance, tests, lint, typecheck, dan production build selesai.

---

## 38. Rekomendasi Final

<aside>
🏆

Bangun Section 7 sebagai **Travel Readiness Dossier**, bukan kumpulan empat widget. Prioritaskan **range budget yang jujur, culinary trail yang canonical, etiquette yang kontekstual dan bersumber, checklist deterministic yang persisten, serta error isolation**. Nilai “premium” harus datang dari hierarchy dan kepercayaan—bukan angka presisi palsu, visual ramai, atau gamifikasi berlebihan.

</aside>

### Urutan Implementasi Paling Aman

1. Audit output Section 4–6 dan semua IDs/versions.
2. Kunci readiness schema, confidence model, dan unknown behavior.
3. Lengkapi satu preset demo: **5 Hari Budaya & Kuliner Jawa**.
4. Bangun budget ranges + assumptions + exclusions lebih dahulu.
5. Map culinary IDs ke day/stop dan NusaRasa.
6. Tambahkan etiquette items dengan source refs dan cultural review.
7. Bangun checklist rule engine + persistence versioning.
8. Susun static dossier responsive dan accessible.
9. Integrasikan Itinerary/Map/Passport/RANI serta failure isolation.
10. Lengkapi ID/EN, analytics, performance, tests, dan demo rehearsal.

### Prinsip Terakhir

> **Bekal perjalanan terbaik bukan yang menjanjikan semuanya pasti, tetapi yang menjelaskan apa yang diketahui, apa yang masih berupa estimasi, apa yang perlu dihormati, dan apa yang harus diverifikasi sebelum pengguna benar-benar berangkat.**
>