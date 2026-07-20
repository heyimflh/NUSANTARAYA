# Planning Lengkap — Section 8 Save to Passport + Ask RANI NUSANTARAYA

<aside>
🛂

**Tujuan dokumen:** menjadi source of truth produk, UX, visual, data, engineering, accessibility, analytics, keamanan, QA, dan demo untuk membangun **Section 8 — Save to Passport + Ask RANI** pada halaman **Nusa Route** (`/routes`). Section ini mengubah rute yang sudah tervalidasi menjadi keputusan eksplisit: **simpan sebagai rencana perjalanan** atau **minta RANI membantu menyesuaikannya**—tanpa memberi stempel palsu, mengubah rute diam-diam, atau bergantung penuh pada API.

</aside>

---

## 1. Ringkasan Eksekutif

### 1.1 Nama Section

**Save to Passport + Ask RANI**

Nama tampilan yang direkomendasikan:

> **Simpan Perjalananmu, Lanjutkan bersama RANI**
> 

Alternatif:

- Rute Siap Disimpan dan Disesuaikan
- Jadikan Rute Ini Milikmu
- Save Your Route · Refine It with RANI
- Langkah Terakhir Sebelum Berangkat

### 1.2 Route, Nomor, dan Posisi

- **Halaman:** Nusa Route.
- **Route:** `/routes`.
- **Nomor section:** 8.
- **Posisi:** setelah Budget, Culinary, Etiquette, and Checklist dan sebelum Related Journeys / Final CTA.
- **Anchor wajib:** `#route-save-rani`.
- **Semantic wrapper:** `<section id="route-save-rani" aria-labelledby="route-save-rani-title">`.

Urutan halaman:

```
1. Route Hero / Page Header
2. Route Planner Form
3. Popular / Preset Routes
4. Route Recommendation Result
5. Day-by-Day Itinerary
6. Route Map + Transport Summary
7. Budget, Culinary, Etiquette, and Checklist
8. Save to Passport + Ask RANI ← SECTION INI
9. Related Journeys / Final CTA
```

### 1.3 Konsep Produk

```
Journey Commitment Hub
× Explicit Passport Save
× Contextual RANI Adjustment
× Trustworthy Final Handoff
```

Section ini bukan dua CTA besar yang ditempel berdampingan. Ia adalah **decision and handoff hub** yang menjawab:

1. Apa tepatnya yang akan disimpan?
2. Apakah menyimpan rute berarti mendapatkan stempel? **Tidak.**
3. Bagaimana status planned dibedakan dari started dan completed?
4. Konteks apa yang diterima RANI?
5. Penyesuaian apa yang dapat diminta tanpa mengarang fakta?
6. Kapan perubahan RANI menjadi draft, tervalidasi, dan akhirnya diterapkan?
7. Apa yang terjadi ketika storage, API, atau koneksi gagal?
8. Bagaimana pengguna melanjutkan ke Passport lengkap, Planner, atau Related Journeys?

### 1.4 North Star UX

> Dalam **15–30 detik**, pengguna harus memahami snapshot rute yang akan disimpan, dapat menyimpannya secara eksplisit sebagai **planned route**, melihat konfirmasi yang kredibel, atau meminta satu penyesuaian terarah kepada RANI dan meninjau draft sebelum menerapkannya.
> 

### 1.5 Hubungan dengan Planning Existing

Planning ini melanjutkan [Planning Lengkap — Section 7 Budget, Culinary, Etiquette, and Checklist NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-7-Budget-Culinary-Etiquette-and-Checklist-NUSANTARAYA-73e4422850e34428826778f9dcb8afbf?pvs=21), mempertahankan contract dari [Planning Lengkap — Section 6 Route Map + Transport Summary NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-6-Route-Map-Transport-Summary-NUSANTARAYA-58b7df3c758a4dfd8ff91c0e20b42961?pvs=21), [Planning Lengkap — Section 5 Day-by-Day Itinerary NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Day-by-Day-Itinerary-NUSANTARAYA-7d7b9f7e5a774e26b78fa99263dd8c35?pvs=21), dan [Planning Lengkap — Section 4 Route Recommendation Result NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-4-Route-Recommendation-Result-NUSANTARAYA-996c323741fc402baed6af95b1ba35b3?pvs=21).

Aturan Passport dan RANI harus selaras dengan [Planning Lengkap — Section 9 Nusa Passport Progress NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-9-Nusa-Passport-Progress-NUSANTARAYA-b75c374d3e40411da8345aa3d894a0bb?pvs=21), [Planning Lengkap — Section 10 RANI Map Assistant NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-10-RANI-Map-Assistant-NUSANTARAYA-ffd0c5eaa5934ceb9c71188341359677?pvs=21), serta prinsip produk dalam [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21).

Keputusan yang wajib dipertahankan:

- Result, itinerary, map, readiness dossier, Passport, dan RANI memakai **route ID/version yang sama**.
- Save hanya terjadi melalui aksi eksplisit pengguna.
- Save route menghasilkan status `planned`, bukan `completed` dan bukan stempel.
- Province IDs di dalam saved route juga menjadi `planned`; tidak boleh otomatis `started/completed`.
- Operasi save bersifat idempotent: klik berulang tidak membuat duplikasi.
- RANI menerima structured context, bukan scraping teks/DOM.
- RANI menghasilkan draft; perubahan tidak diterapkan sebelum validasi dan konfirmasi.
- API/LLM adalah enhancement opsional; local-first fallback wajib tersedia.
- Checklist completion tidak menjadi syarat mutlak save dan tidak menghasilkan Passport reward.
- Informasi harga, transport, diet, akses, budaya, dan operasional tetap memakai confidence/disclaimer yang telah ditetapkan.

---

## 2. Problem Statement dan Nilai Utama

### 2.1 Masalah Pengguna

Setelah meninjau result, itinerary, peta, budget, kuliner, etika, dan checklist, pengguna berada pada titik keputusan tetapi masih dapat bingung:

- apakah rute sudah cukup siap disimpan,
- apa yang disimpan dan di perangkat mana,
- apakah save sama dengan stempel,
- apakah checklist ikut tersimpan,
- bagaimana cara mengubah budget atau satu hari tanpa mengulang dari awal,
- apakah RANI akan mengganti rute secara otomatis,
- dan apakah hasil tetap tersedia setelah refresh atau offline.

### 2.2 Masalah Produk

Tanpa section khusus, aksi Save dan RANI tersebar di banyak section, berisiko menimbulkan:

- duplicate saved route,
- status planned/completed tercampur,
- data versi berbeda,
- konfirmasi palsu ketika storage gagal,
- route adjustment yang mengganti state sebelum valid,
- RANI generik tanpa konteks,
- terlalu banyak CTA yang bersaing,
- dan alur final yang terasa tidak selesai.

### 2.3 Nilai Utama

1. **Explicit:** tindakan save dan apply selalu jelas.
2. **Trustworthy:** status planned, storage, version, dan limitations transparan.
3. **Contextual:** RANI memahami route, day, budget, map, readiness, serta preferensi.
4. **Reversible:** save dapat dibatalkan dan draft dapat ditolak tanpa merusak active route.
5. **Idempotent:** tidak ada duplikasi route/province entry.
6. **Validated:** perubahan RANI melewati schema dan domain guardrail.
7. **Resilient:** save lokal dan RANI preset tetap bekerja tanpa API.
8. **Actionable:** selalu ada langkah berikutnya yang valid.
9. **Accessible:** seluruh flow dapat digunakan tanpa drag, hover, atau visual saja.
10. **Consistent:** satu source of truth untuk seluruh journey.

---

## 3. Tujuan, Non-Goals, dan KPI

### 3.1 Tujuan Utama

- Menampilkan final route snapshot sebelum save.
- Menyimpan route, itinerary version, readiness version, province IDs, dan status `planned` secara idempotent.
- Memberi feedback save yang jujur dan persisten.
- Menyediakan Undo/Remove yang aman.
- Mengubah CTA sesuai state: unsaved, saving, saved, updated, stale, error.
- Menyediakan RANI quick adjustments yang relevan dengan route context.
- Menampilkan draft perubahan, diff, dampak, dan validation status sebelum apply.
- Mempertahankan route lama hingga draft baru valid dan dikonfirmasi.
- Mendukung ID/EN dan Explore/Tourist/Learn Mode.
- Tetap usable offline dan tanpa AI API.

### 3.2 Non-Goals

Section ini tidak bertanggung jawab untuk:

- login, cloud sync, atau akun kompleks,
- booking, checkout, pembayaran, atau reservasi,
- memberi stempel hanya karena rute disimpan,
- menandai perjalanan fisik telah dilakukan,
- menyimpan seluruh chat RANI,
- menjadi halaman Passport penuh,
- menjadi chat assistant bebas tanpa batas,
- menjamin harga, jadwal, akses, cuaca, diet, visa, atau keselamatan,
- menerapkan perubahan AI tanpa review,
- mengedit source canonical secara langsung,
- membagikan itinerary jika canonical share URL belum tersedia,
- menyimpan data kesehatan atau kebutuhan sensitif.

### 3.3 KPI

| Metrik | Target MVP | Target Polish |
| --- | --- | --- |
| Section render success | 100% dengan fallback | 100% |
| Save success lokal | 100% untuk storage tersedia | 100% |
| Duplicate save | 0 | 0 |
| Save conversion | ≥25% | ≥40% |
| Open Passport setelah save | ≥15% | ≥25% |
| RANI first interaction | ≥10% | ≥20% |
| Draft review completion | ≥50% | ≥70% |
| Invalid draft applied | 0 | 0 |
| Offline core success | 100% | 100% |
| Interaction feedback | <100 ms | <80 ms |
| Accessibility | Lighthouse ≥90 | ≥95 |

---

## 4. Persona dan Skenario Utama

### 4.1 Turis Lokal

> “Rutenya sudah cocok. Saya ingin menyimpannya dan melanjutkan nanti.”
> 

Hasil ideal: route snapshot ringkas, CTA Save dominan, penjelasan planned, save lokal instan, lalu tombol Buka Passport.

### 4.2 Turis Mancanegara

> “I want to save this itinerary, but I also need to reduce transfers and understand what changed.”
> 

Hasil ideal: English copy tidak overflow, RANI quick prompt `Reduce transfers`, diff jelas, limitations tersedia, dan user mengonfirmasi sebelum apply.

### 4.3 Traveler dengan Kebutuhan Khusus

> “Saya ingin RANI membantu mengurangi kepadatan dan menambahkan hal yang perlu diverifikasi terkait akses.”
> 

Hasil ideal: RANI membuat draft berbasis canonical alternatives dan verification checklist; tidak mengklaim aksesibilitas.

### 4.4 Explorer / Pelajar

> “Saya ingin menyimpan journey digital ini dan meminta lebih banyak konteks sejarah.”
> 

Hasil ideal: Save tetap `planned`; Learn Mode RANI menyarankan konten/source tanpa mengubah route jika tidak perlu.

### 4.5 Juri Lomba

```
5 Hari Budaya & Kuliner Jawa
→ review Section 4–7
→ Save ke Passport
→ status berubah menjadi Tersimpan sebagai rencana
→ refresh halaman
→ status tetap tersimpan
→ buka Passport, province tetap planned
→ kembali ke /routes
→ pilih Kurangi Budget bersama RANI
→ draft + diff muncul
→ reject satu draft, route lama tetap
→ apply draft valid
→ matikan API
→ quick adjustment lokal tetap bekerja
```

---

## 5. Input, Output, dan Dependency

### 5.1 Input Wajib

- active `RouteRecommendationResult`,
- validated `RouteItinerary`,
- optional validated `RouteMapModel`,
- optional validated `RouteReadinessDossier`,
- `routeId`, `routeVersion`, `itineraryVersion`, optional `mapVersion`, optional `readinessVersion`,
- province/region/stop/day/activity/segment IDs,
- duration, pace, budget level, interests, party size bila ada,
- locale dan traveler mode,
- source/match/fallback/stale status,
- Passport saved-route state,
- optional checklist progress summary,
- optional RANI entry context.

### 5.2 Output Section

- final route snapshot,
- save status dan storage disclosure,
- explicit Save / Remove / Update Saved Route actions,
- Passport planned-state summary,
- RANI context chips,
- mode-aware quick adjustment prompts,
- optional free-text constrained input,
- local/hybrid RANI response,
- draft adjustment + diff,
- validation status dan limitations,
- Apply / Keep Current Route / Edit Preferences actions,
- CTA buka Passport lengkap, Planner, atau related journeys.

### 5.3 Dependency Rules

- Tanpa active result: hidden atau teaser ringan.
- Result ada tetapi itinerary invalid: save hanya jika product policy mengizinkan route overview; tandai partial dan jangan mengklaim itinerary lengkap.
- Passport store belum hydrated: tampilkan shell stabil; jangan menampilkan unsaved palsu.
- Storage gagal: jangan menampilkan status sukses; sediakan session-only atau retry.
- RANI unavailable: save tetap aktif dan local quick adjustments tetap tersedia.
- Readiness partial: save tetap boleh, tetapi tampilkan `Sebagian detail perlu diverifikasi`.
- Route stale: pengguna dapat menyimpan snapshot lama dengan label versi atau memperbarui lebih dahulu.

---

## 6. Arsitektur Informasi

### 6.1 Struktur Section

```
RouteSaveRaniSection
├── Section Header
│   ├── Eyebrow + heading
│   ├── Active route context
│   └── Trust disclosure
├── Final Route Snapshot
│   ├── Title / duration / route sequence
│   ├── Budget / pace / readiness status
│   ├── Version/source status
│   └── Included-in-save disclosure
├── Passport Save Lane
│   ├── Save primary action
│   ├── Planned-state explanation
│   ├── Saving/saved/error feedback
│   ├── Province plan summary
│   └── Open Passport / Undo / Remove
├── RANI Adjustment Lane
│   ├── Context ribbon
│   ├── Quick adjustment prompts
│   ├── Optional constrained composer
│   ├── Response / recommendation
│   ├── Draft change diff
│   ├── Validation + limitations
│   └── Apply / keep current route
└── Final Handoff
    ├── Passport
    ├── Planner
    ├── Related Journeys
    └── Final CTA
```

### 6.2 Hierarchy

1. Status route siap/parsial/stale.
2. Snapshot yang akan disimpan.
3. Primary CTA Save to Passport.
4. Planned-state disclosure.
5. Ask RANI sebagai secondary enhancement.
6. Draft/diff hanya setelah interaksi.
7. Open Passport / continue actions.

### 6.3 Prinsip Dua Lane

- **Passport lane** menjawab: `Saya setuju dengan rute ini dan ingin menyimpannya.`
- **RANI lane** menjawab: `Saya belum sepenuhnya setuju dan ingin menyesuaikannya.`
- Kedua lane memakai context sama, tetapi tidak saling memicu otomatis.
- Save tidak mengirim pertanyaan RANI.
- Membuka RANI tidak menyimpan route.
- Applying draft tidak otomatis menyimpan versi baru kecuali user memilih `Terapkan dan Perbarui di Passport`.

---

## 7. Layout Desktop, Tablet, dan Mobile

### 7.1 Desktop

```
┌────────────────────────────────────────────────────────────────────┐
│ Header + final route snapshot + trust note                         │
├───────────────────────────────┬────────────────────────────────────┤
│ PASSPORT SAVE LANE            │ ASK RANI LANE                      │
│ Route plan summary            │ Context chips                      │
│ Planned disclosure            │ Quick adjustments                  │
│ [Simpan ke Passport]          │ [Kurangi budget] [Ubah ritme]      │
│ Save feedback / Passport CTA  │ Response / draft preview           │
└───────────────────────────────┴────────────────────────────────────┘
```

- Grid 12 kolom, Passport 5–6 dan RANI 6–7.
- Save lane lebih tenang dan tegas; RANI lane lebih interaktif.
- Bila draft terbuka, RANI lane dapat melebar full width di bawah kedua kolom.
- Hindari dua tombol primer dengan bobot visual identik.

### 7.2 Tablet

- Snapshot full width.
- Save lane di atas, RANI lane di bawah.
- Quick prompts menjadi grid 2 kolom.
- Diff selalu full width.

### 7.3 Mobile

```
Header
↓
Final route snapshot
↓
Save to Passport
↓
Saved/error feedback
↓
Ask RANI context
↓
Quick adjustments
↓
Response / diff / validation
↓
Apply or keep current route
↓
Passport / final handoff
```

- Satu kolom; padding 16–20px.
- Primary Save full width.
- Quick prompts wrap atau menjadi list; jangan carousel wajib.
- Input tidak fixed sehingga tidak tertutup keyboard/bottom nav.
- Diff tidak memakai tabel lebar; gunakan stacked before/after rows.
- Touch target minimal 44×44px.

---

## 8. Copywriting Final

### 8.1 Header

**Eyebrow**

```
Langkah Berikutnya
```

**Heading**

```
Simpan perjalananmu atau sesuaikan bersama RANI.
```

**Supporting copy**

```
Rute ini siap disimpan sebagai rencana di Nusa Passport. Jika masih ada yang ingin diubah, RANI dapat membantu menyusun draft penyesuaian berdasarkan data rute yang tersedia.
```

**Trust microcopy**

```
Simpan sebagai rencana · Tidak memberi stempel otomatis · Perubahan RANI selalu ditinjau sebelum diterapkan
```

### 8.2 Passport Labels

- `Rute yang akan disimpan`
- `Disimpan sebagai rencana`
- `Provinsi dalam rute`
- `Versi rute`
- `Tersimpan di perangkat ini`
- `Tidak termasuk progres checklist pribadi`
- `Belum dianggap perjalanan selesai`

### 8.3 Passport Actions

- `Simpan ke Nusa Passport`
- `Menyimpan…`
- `Tersimpan di Passport`
- `Buka Passport Lengkap`
- `Perbarui Rute Tersimpan`
- `Batalkan Penyimpanan`
- `Hapus dari Rencana`
- `Coba Simpan Lagi`

### 8.4 RANI Labels

- `Sesuaikan bersama RANI`
- `Konteks yang dibaca RANI`
- `Penyesuaian cepat`
- `Apa yang ingin diubah?`
- `Draft perubahan`
- `Dampak pada rute`
- `Data yang masih perlu diverifikasi`
- `Terapkan Draft Ini`
- `Terapkan dan Perbarui di Passport`
- `Pertahankan Rute Saat Ini`
- `Ubah Langsung di Planner`

### 8.5 Success Copy

```
Rute ini tersimpan sebagai rencana di Nusa Passport. Provinsi di dalamnya ditandai planned—bukan completed dan belum menghasilkan stempel.
```

### 8.6 Storage Failure Copy

```
Rute belum dapat disimpan di perangkat ini. Rencana tetap terbuka pada sesi saat ini; coba lagi sebelum meninggalkan halaman.
```

### 8.7 RANI Limitation Copy

```
RANI menyusun draft dari rute dan alternatif canonical yang tersedia. Harga, jadwal, akses, kondisi, serta ketentuan terbaru tetap perlu diverifikasi melalui sumber resmi.
```

---

## 9. Final Route Snapshot

### 9.1 Tujuan

Menghindari save buta. Pengguna harus mengetahui objek dan versi yang disimpan.

### 9.2 Isi Minimum

- title,
- duration,
- ordered stop summary,
- region/province count,
- pace,
- budget level/range label,
- readiness status,
- source: dynamic/preset/fallback/restored,
- route/itinerary/readiness version,
- last updated,
- partial/stale disclosures.

### 9.3 Included in Save

Disimpan:

- route ID dan version,
- itinerary version,
- readiness version bila ada,
- province IDs,
- selected preference snapshot minimum,
- status `planned`,
- savedAt/updatedAt,
- source dan locale.

Tidak disimpan secara default:

- seluruh rendered UI text,
- raw RANI conversation,
- detail sensitif,
- free-text dietary/accessibility request,
- map provider viewport,
- full source text,
- analytics payload,
- checklist labels.

### 9.4 Status Readiness

- **Siap disimpan:** route + itinerary valid.
- **Dapat disimpan dengan catatan:** readiness/transport/budget partial.
- **Perlu diperbarui:** route stale atau version mismatch.
- **Belum dapat disimpan:** identity/version invalid.

Status ini bukan safety score.

---

## 10. Passport Save Model

### 10.1 Semantik Status

```tsx
type SavedRouteStatus = "planned" | "started" | "completed";
```

Section 8 hanya membuat/memperbarui `planned`. State lain berasal dari aturan Passport canonical.

### 10.2 Save Behavior

```
Klik Save
→ validate active route snapshot
→ hydrate/read Passport store
→ upsert route by routeId
→ merge province entries as planned
→ preserve started/completed states
→ persist atomically
→ verify persisted result
→ render success + announce
```

### 10.3 Idempotency

- Unique key minimum: `routeId`.
- Version baru memperbarui entry yang sama atau menyimpan revision sesuai policy; jangan duplicate card.
- Klik berulang setelah success adalah no-op.
- Province status tidak boleh turun: `completed > started > planned > not_started`.
- Existing completed province tidak diubah menjadi planned.

### 10.4 Update Saved Route

Jika route version berubah:

- tampilkan `Versi rute tersimpan berbeda`;
- jelaskan ringkasan perubahan;
- user memilih `Perbarui Rute Tersimpan`;
- old revision tetap aman hingga write baru sukses;
- progress Passport yang valid tidak dihapus.

### 10.5 Remove / Undo

- Undo tersedia singkat setelah save dalam toast/status area.
- Remove permanen memerlukan konfirmasi jika sudah ada personal progress terkait.
- Menghapus saved route tidak otomatis menghapus completed stamp.
- Menghapus route dapat melepaskan planned-only province refs jika tidak direferensikan route/journey lain.

---

## 11. Passport Data Contract

```tsx
export interface PassportSavedRoute {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion?: string;
  readinessVersion?: string;
  titleSnapshot: string;
  provinceIds: string[];
  regionIds: string[];
  durationDays: 3 | 5 | 7;
  status: "planned";
  source:
    | "route-planner"
    | "preset-routes"
    | "map"
    | "province-atlas"
    | "recommended-journey"
    | "regional-explorer"
    | "passport"
    | "rani"
    | "restored";
  locale: "id" | "en";
  travelerMode: "explore" | "tourist" | "learn";
  savedAt: string;
  updatedAt: string;
}
```

```tsx
export interface PassportRouteSaveResult {
  status: "created" | "updated" | "unchanged" | "failed";
  savedRoute: PassportSavedRoute | null;
  plannedProvinceIdsAdded: string[];
  preservedHigherStatusProvinceIds: string[];
  errorCode?:
    | "INVALID_ROUTE"
    | "VERSION_MISMATCH"
    | "STORAGE_UNAVAILABLE"
    | "WRITE_FAILED"
    | "VALIDATION_FAILED";
}
```

### 11.1 Validation

- IDs canonical.
- Duration hanya 3/5/7.
- Route/itinerary versions kompatibel.
- Province IDs unique dan valid.
- Timestamps ISO.
- Status dari Section 8 selalu `planned`.
- Unknown field diabaikan dengan aman.
- Save success hanya ditampilkan setelah persist/verification berhasil.

---

## 12. Persistence, Hydration, dan Cross-Tab

### 12.1 Storage

Reuse Passport store/key existing. Jika belum ada, rekomendasi policy mengikuti store versioned, misalnya:

```
nusantaraya-passport-v1
```

Jangan membuat store kedua khusus `/routes`.

### 12.2 Hydration

```
SSR shell
→ client hydration
→ load + parse + migrate Passport store
→ derive saved state
→ enable save action
```

- Hindari merender `Belum tersimpan` sebelum hydration selesai.
- Skeleton tinggi stabil.
- Save button disabled dengan label `Memeriksa Passport…` saat hydration.

### 12.3 Atomic Write

- Build next state di memory.
- Validate.
- Write sekali.
- Read-back/verify bila utility existing mendukung.
- Update UI setelah write sukses.
- Jangan menulis route dan province entries dalam dua transaksi terpisah bila dapat menyebabkan partial state.

### 12.4 Cross-Tab Sync

- Dengarkan `storage` event bila localStorage dipakai.
- Tab lain yang menghapus/update route harus memperbarui UI.
- Jangan menampilkan celebration berulang karena cross-tab sync.

### 12.5 Corrupted Data

- Pertahankan entries valid.
- Abaikan unknown IDs.
- Gunakan migration/backup existing.
- Jangan reset seluruh Passport diam-diam.

---

## 13. Ask RANI — Peran dan Scope

### 13.1 Tujuan

Membantu pengguna memperbaiki **satu atau beberapa parameter terarah** tanpa mengubah route diam-diam.

### 13.2 RANI Boleh

- mengurangi/meningkatkan budget band melalui alternatif canonical,
- mengurangi perpindahan,
- mengubah pace/density,
- menambah rest/flex window,
- memprioritaskan budaya/kuliner/alam/sejarah,
- mengganti aktivitas dengan alternatif canonical,
- menyusun ulang hari bila route rules mengizinkan,
- menambahkan verification checks,
- menjelaskan itinerary/budget/etiquette,
- mengarahkan ke Planner untuk perubahan besar.

### 13.3 RANI Tidak Boleh

- membuat destinasi, operator, jadwal, harga, akses, atau ritual baru,
- menjamin makanan aman/halal/vegan/bebas alergen,
- menjamin aksesibilitas,
- membuat diagnosis atau nasihat hukum/medis,
- mengubah route ID/version tanpa resolver,
- menerapkan perubahan tanpa konfirmasi,
- menyimpan ke Passport tanpa aksi eksplisit,
- menghapus completed progress,
- mengklaim pengguna telah berkunjung secara fisik.

---

## 14. RANI Context Contract

```tsx
export interface RouteRaniContext {
  entrySource: "route-save-section";
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion?: string;
  readinessVersion?: string;
  durationDays: 3 | 5 | 7;
  provinceIds: string[];
  stopIds: string[];
  selectedDayNumber?: number;
  selectedStopId?: string;
  selectedSegmentIds?: string[];
  interests: string[];
  budgetLevel: string;
  travelPace: string;
  partySize?: number;
  readinessStatus?: "ready" | "partial" | "stale";
  budgetConfidence?: "verified" | "estimated" | "partial" | "unknown";
  incompleteChecklistItemIds?: string[];
  passportSaveStatus: "unsaved" | "saved" | "outdated";
  locale: "id" | "en";
  travelerMode: "explore" | "tourist" | "learn";
}
```

### 14.1 Privacy Minimization

Kirim:

- IDs,
- enum/status,
- count,
- reason codes,
- preference categories.

Jangan kirim:

- raw medical/dietary note,
- exact checklist labels,
- full chat history,
- personal identity,
- free-text sensitif,
- full DOM atau entire itinerary prose.

---

## 15. Adjustment Intents

```tsx
export type RouteAdjustmentIntent =
  | "REDUCE_BUDGET"
  | "INCREASE_COMFORT"
  | "REDUCE_TRANSFERS"
  | "SLOWER_PACE"
  | "MORE_ACTIVE_PACE"
  | "ADD_REST_WINDOW"
  | "PRIORITIZE_CULTURE"
  | "PRIORITIZE_CULINARY"
  | "PRIORITIZE_NATURE"
  | "PRIORITIZE_HISTORY"
  | "REPLACE_ACTIVITY"
  | "ADJUST_DAY"
  | "ADD_ACCESS_VERIFICATION"
  | "ADD_DIET_VERIFICATION"
  | "EXPLAIN_BUDGET"
  | "EXPLAIN_ETIQUETTE"
  | "OPEN_PLANNER"
  | "UNKNOWN";
```

### 15.1 Quick Prompts Default

- `Kurangi budget tanpa mengubah tema utama`
- `Kurangi perpindahan antarkota`
- `Buat ritme lebih santai`
- `Tambahkan waktu istirahat`
- `Perbanyak pengalaman kuliner`
- `Prioritaskan konteks budaya`
- `Tambahkan hal yang perlu diverifikasi`

### 15.2 Mode-Aware

**Explore:** discovery, balance, hidden editorial alternatives.

**Tourist:** transfer, budget, practicality, etiquette, access/diet verification.

**Learn:** cultural context, sources, archive links, slower educational pace.

### 15.3 Prompt Selection Rules

- Maksimal 4 prompt utama dan 2–4 tambahan.
- Jangan tampilkan intent yang tidak didukung dataset.
- Urutan stabil selama context sama.
- Prompt harus dapat dipakai tanpa mengetik.
- Free text tetap dipetakan ke intent allowlist.

---

## 16. Local-First Hybrid RANI Architecture

```
Context Builder
→ Intent Router
→ Canonical Alternative Resolver
→ Local Draft Composer
→ Optional AI Enhancement
→ Output Validator
→ Diff Builder
→ User Review
→ Atomic Apply
```

### 16.1 Fondasi Lokal

- intent patterns dan synonyms,
- adjustment templates,
- route rules,
- alternative activity/stop registry,
- budget/pace rules,
- response templates,
- limitations map,
- action registry.

### 16.2 Optional AI Enhancement

AI hanya boleh:

- memperhalus penjelasan,
- merangkum alasan,
- menyusun bahasa ID/EN,
- memilih emphasis dari kandidat canonical.

AI tidak boleh menciptakan entity atau action target.

### 16.3 Circuit Breaker

- Timeout 4–6 detik.
- Maksimal satu retry untuk network transient.
- Setelah dua kegagalan sesi, gunakan local-only.
- Jangan melakukan API call otomatis saat section terlihat.
- Preset demo dapat memaksa local-only.

### 16.4 Provenance UI

- `Panduan lokal NUSANTARAYA`
- `Ditingkatkan dengan AI`
- `Draft preset terkurasi`

---

## 17. Draft Adjustment Contract

```tsx
export interface RouteAdjustmentDraft {
  id: string;
  baseRouteId: string;
  baseRouteVersion: string;
  baseItineraryVersion: string;
  intent: RouteAdjustmentIntent;
  status: "draft" | "valid" | "invalid" | "stale";
  summary: string;
  reasonCodes: string[];
  changes: RouteAdjustmentChange[];
  unchangedGuarantees: string[];
  limitations: string[];
  validationErrors: string[];
  proposedRoute: RouteRecommendationResult;
  proposedItinerary: RouteItinerary;
  generatedBy: "local-template" | "local-rules" | "hybrid-ai" | "editorial-preset";
  createdAt: string;
}
```

```tsx
export type RouteAdjustmentChange =
  | {
      type: "budget-level" | "pace" | "duration";
      before: string;
      after: string;
      reason: string;
    }
  | {
      type: "activity-replaced";
      dayNumber: number;
      removedActivityId: string;
      addedActivityId: string;
      reason: string;
    }
  | {
      type: "day-reordered" | "rest-added" | "transfer-changed";
      dayNumber: number;
      affectedIds: string[];
      reason: string;
    }
  | {
      type: "verification-check-added";
      checklistItemId: string;
      reason: string;
    };
```

---

## 18. Draft Validation dan Diff Review

### 18.1 Validation Pipeline

- base route version masih aktif,
- IDs canonical,
- duration 3/5/7,
- day count sesuai duration,
- stop order valid,
- transfers valid,
- pace/activity budget valid,
- budget range valid,
- etiquette/source refs valid,
- no dietary/accessibility guarantee,
- Passport state tidak diubah oleh draft,
- no action target broken.

### 18.2 Diff UI

Tampilkan:

- ringkasan satu kalimat,
- 2–6 perubahan utama,
- hal yang tidak berubah,
- dampak budget/pace/transfer,
- limitations,
- validation result.

Contoh:

```
Sebelum: 3 cluster · ritme seimbang · 2 transfer utama
Sesudah: 2 cluster · ritme santai · 1 transfer utama
Tetap: durasi 5 hari · fokus budaya dan kuliner · provinsi utama
```

### 18.3 Apply Rules

- Tombol apply hanya aktif jika draft `valid`.
- Sebelum apply, pastikan base version belum berubah.
- Apply mengganti active result + itinerary + map/readiness secara atomik.
- Jika downstream model belum selesai, jangan tampilkan success parsial.
- User dapat memilih `Terapkan` atau `Terapkan dan Perbarui di Passport`.
- Route lama bertahan sampai seluruh replacement valid.

### 18.4 Reject / Keep Current

Menolak draft:

- tidak mengubah active route,
- tidak menghapus save,
- conversation preview boleh tetap terlihat selama sesi,
- analytics hanya merekam intent/status, bukan raw text.

---

## 19. Interaction Flows

### 19.1 Save Baru

```
Route valid + unsaved
→ klik Save
→ saving
→ atomic upsert
→ saved success
→ province refs planned
→ CTA Buka Passport
```

### 19.2 Sudah Tersimpan

```
Store memiliki routeId + version sama
→ label Tersimpan di Passport
→ Save disabled/no-op
→ actions Buka Passport / Hapus dari Rencana
```

### 19.3 Versi Berbeda

```
routeId sama, version berbeda
→ label Rute tersimpan perlu diperbarui
→ tampilkan summary diff
→ user konfirmasi update
→ atomic replace
```

### 19.4 RANI Quick Adjustment

```
Klik Kurangi Perpindahan
→ build context
→ local intent high confidence
→ resolve canonical alternatives
→ compose + validate draft
→ show diff
→ user apply/reject
```

### 19.5 Free-Text Ambigu

```
Input: “buat lebih nyaman”
→ confidence low
→ tampilkan clarification chips:
   Kurangi perpindahan / Tambah istirahat / Tingkatkan budget
→ user memilih
→ draft dibuat
```

### 19.6 Apply dan Update Passport

```
Draft valid + current route saved
→ Apply and update Passport
→ validate base version
→ replace active route atomically
→ update saved route atomically
→ preserve completed/started province states
→ announce success
```

### 19.7 Offline

```
Network/API unavailable
→ Save lokal tetap aktif
→ RANI memakai local templates/rules
→ source label Panduan lokal NUSANTARAYA
→ draft canonical tetap dapat diterapkan
```

---

## 20. State Matrix

| State | Kondisi | Tampilan | Aksi |
| --- | --- | --- | --- |
| Hidden | belum ada active route | tidak render/teaser | buat rute |
| Hydrating | Passport store dimuat | shell stabil | tunggu |
| Ready unsaved | route valid | Save aktif + RANI | save/adjust |
| Saving | write berjalan | button busy | tunggu |
| Saved | persist verified | success + Passport CTA | open/remove |
| Saved outdated | version berbeda | update notice | review/update |
| Partial route | readiness parsial | save with note | save/RANI |
| Stale route | canonical update tersedia | version warning | refresh/save snapshot |
| Storage failed | write gagal | honest error | retry/session |
| RANI idle | belum ada prompt | quick prompts | choose/type |
| RANI resolving | draft disusun | inline progress | wait/cancel |
| Draft valid | validator lulus | diff + apply | apply/reject |
| Draft invalid | validator gagal | explain + alternatives | retry/planner |
| Draft stale | base route berubah | cannot apply | regenerate |
| RANI fallback | API gagal/offline | local response | continue |
| Out of scope | permintaan di luar domain | safe boundary | supported prompts |

---

## 21. Loading, Error, Recovery, dan Offline

### 21.1 Loading

- Tidak ada full-screen spinner.
- Save dan RANI memiliki loading independen.
- Copy Save: `Menyimpan rute ke Passport…`.
- Copy RANI: `RANI sedang menyusun draft dari rute yang tersedia…`.

### 21.2 Save Error Isolation

- Save failure tidak menutup RANI.
- RANI failure tidak menghapus save status.
- Passport CTA hanya muncul jika route benar-benar tersimpan atau route Passport root valid.

### 21.3 RANI Timeout

```
Penyesuaian otomatis memerlukan waktu lebih lama. RANI beralih ke panduan lokal agar kamu tetap dapat melanjutkan.
```

### 21.4 Invalid Draft

- Jangan mencoba apply sebagian.
- Tampilkan alasan manusiawi.
- Sediakan quick alternative atau Planner.
- Log error code, bukan raw user text.

### 21.5 Offline

- Save ke localStorage tetap bekerja.
- Preset route dan local alternative registry tersedia.
- Tidak ada klaim bahwa data time-sensitive terbaru.
- External source links dapat ditandai membutuhkan koneksi.

---

## 22. Visual Direction

### 22.1 Creative Direction

```
Premium journey seal
× digital passport desk
× calm contextual intelligence
```

### 22.2 Palet

- Background: `#F8F4EA` / `#FFFDF8`.
- Surface: warm white.
- Text: `#0D1B2A`.
- Passport navy: `#10233A`.
- Gold foil/accent: `#C9A84C` / `#D6B85B`.
- RANI blue: `#2D6BE4` / `#173B70`.
- Success: `#2D5A27`.
- Warning/adjustment: amber/brown AA.
- Error: `#8B2020`.
- Border: `#E8E0CE`.

### 22.3 Surface dan Hierarchy

- Outer stage radius 28–36px desktop, 20–26px mobile.
- Passport lane dapat memakai navy inset/cover treatment ringan.
- RANI lane memakai ivory/blue intelligence accents.
- Jangan membuat visual seperti dokumen perjalanan resmi pemerintah.
- Motif heritage 2–4% opacity.
- Save button gold/navy; RANI prompts outlined/blue.
- Draft diff memakai section bands, bukan card bertumpuk berlebihan.

### 22.4 Iconography

- Passport/bookmark/seal untuk save.
- Spark/compass/avatar untuk RANI.
- Check untuk success; jangan gunakan stamp artwork sebagai reward.
- Planned state memakai outline/dotted mark, bukan completion seal.

---

## 23. Motion dan Micro-interaction

- Section reveal: opacity + translateY 12–16px.
- Save button feedback: 120–180ms.
- Saved check/seal: satu kali, 180–260ms; tanpa confetti.
- Quick prompt response: 120–200ms.
- Diff reveal: 180–260ms.
- Apply transition: 200–320ms setelah atomic success.
- Tidak ada fake typing delay panjang.
- Tidak ada continuous pulse.
- `prefers-reduced-motion`: perubahan instan/opacity ringan.

---

## 24. Accessibility Plan

### 24.1 Semantik

- Section + heading hierarchy.
- Snapshot memakai definition list atau grouped metadata.
- Save lane dan RANI lane memakai headings berbeda.
- Prompt chips adalah buttons.
- Composer memakai label terlihat/accessible.
- Diff memakai list atau before/after groups; bukan warna saja.
- Validation status memakai `role="status"` proporsional.

### 24.2 Keyboard

- Tab order: snapshot → Save → Passport secondary → RANI prompts → input → draft → apply/reject.
- Enter/Space mengaktifkan prompt.
- Escape menutup confirmation/popover, bukan menghapus draft.
- Tidak ada focus trap.
- Setelah save success, focus tetap di trigger; status diumumkan.
- Setelah draft dibuat dari aksi eksplisit, focus dapat menuju heading draft.

### 24.3 Screen Reader

- Save state dibaca lengkap: `Rute tersimpan sebagai planned, bukan completed.`
- Busy state memakai `aria-busy`.
- Draft summary menjelaskan jumlah perubahan.
- Before/after dibaca dengan label eksplisit.
- Toast bukan satu-satunya feedback.

### 24.4 Visual/Motor

- WCAG AA.
- Focus ring 2–3px.
- Touch target minimal 44×44px.
- Zoom 200% tidak memotong CTA/diff.
- Forced colors mempertahankan border, focus, status, dan disabled state.
- Status tidak bergantung warna/ikon.

---

## 25. Responsive Guardrails

| Breakpoint | Snapshot | Passport/RANI | Draft |
| --- | --- | --- | --- |
| ≥1280px | full-width compact | 5/7 split | full-width diff |
| 1024–1279px | full-width | balanced split | full-width |
| 768–1023px | stacked metadata | vertical lanes | stacked |
| <768px | single column | Save then RANI | before/after rows |

Mobile guardrails:

- Heading dan route title wrap.
- Tidak ada horizontal overflow.
- Prompt tidak lebih kecil dari 44px.
- Confirmation sheet aman dari bottom nav.
- Keyboard tidak menutup input/action.
- Saved status tetap terlihat setelah toast hilang.

---

## 26. Performance Plan

### 26.1 Target

- Section shell cepat.
- Passport saved-state derive <100ms setelah hydration.
- Save interaction <100ms feedback awal.
- Local RANI response ideal <300ms.
- Tidak ada CLS besar ketika status/draft muncul.
- API enhancement tidak memblokir local draft.

### 26.2 Optimasi

- Reuse selectors/store existing.
- Memoize snapshot by IDs/versions.
- Lazy-load RANI composer/diff setelah interaksi jika berat.
- Debounce free-text classification 150–250ms bila diperlukan.
- Abort resolver ketika route/prompt berubah.
- Jangan bundel semua route alternatives pada initial chunk.
- Persist sekali per confirmed action.

### 26.3 Asset Budget

- RANI avatar WebP/AVIF ≤80–140KB.
- Passport emblem SVG ≤20KB.
- Pattern ≤30KB.
- Tidak ada Lottie berat sebagai dependency inti.

---

## 27. Integrasi Ekosistem

### 27.1 Route Recommendation Result

- Save shortcut di Result dapat scroll ke Section 8.
- Section 8 memakai active result yang sama.
- Jika shortcut save langsung dipertahankan, utility save harus sama dan hasilnya tercermin di Section 8.

### 27.2 Day-by-Day Itinerary

- RANI dapat menerima selected day context.
- Draft day adjustment tidak mengubah hari lain tanpa diff.
- Save menyimpan itinerary version, bukan expanded/collapsed UI state.

### 27.3 Route Map + Transport

- RANI menerima selected segment IDs bila adjustment berasal dari transfer.
- Tidak mengarang moda/operator.
- Apply draft harus membangun ulang map model atau fallback secara atomik.

### 27.4 Budget, Culinary, Etiquette, Checklist

- Intent budget memakai canonical rules/ranges.
- Culinary alternatives memakai canonical culinary IDs.
- Etiquette explanation memakai source refs.
- Checklist progress tetap personal/local dan tidak menentukan stamp.
- Incomplete checklist IDs dapat menjadi context tanpa mengirim label sensitif.

### 27.5 Nusa Passport

- Route save → `planned`.
- Province entries → planned kecuali status lebih tinggi.
- Buka Passport memakai return snapshot `/routes#route-save-rani`.
- Back memulihkan active route dan section scroll.
- Tidak ada duplicate reward.

### 27.6 Halaman RANI Lengkap

- Section preview maksimal 1–2 exchange/draft.
- Pertanyaan kompleks dapat dibawa ke `/rani` dengan structured context.
- Jangan menaruh raw sensitive prompt di URL.

### 27.7 Related Journeys / Final CTA

- Saved route dapat memengaruhi rekomendasi next journey secara ringan.
- Related section tidak boleh menganggap planned sebagai completed.
- Handoff copy menutup perjalanan tanpa memaksa save.

---

## 28. URL, History, dan Restore

### 28.1 URL

Contoh state ringan:

```
/routes?route=jawa-budaya-kuliner-5&action=save
/routes?route=jawa-budaya-kuliner-5&rani=reduce-transfers
```

Gunakan hanya bila URL contract existing mendukung.

### 28.2 Rules

- Allowlist route/action/intent params.
- Jangan menyimpan free-text prompt dalam URL.
- `replace` untuk UI state ringan.
- `push` untuk navigasi ke Passport/RANI full.
- Browser Back memulihkan route snapshot dan scroll.

### 28.3 Restore Priority

1. explicit valid URL,
2. current active route store,
3. valid restored active result,
4. saved route resume action,
5. hidden section.

---

## 29. Bilingual dan Traveler Modes

### 29.1 ID/EN

- IDs/version/status tidak diterjemahkan.
- Labels dan limitations berasal dari locale mapper.
- Switch bahasa tidak mengubah save/draft state.
- English copy diuji untuk button wrap dan diff length.

### 29.2 Modes

- **Explore:** save journey + discovery-oriented adjustments.
- **Tourist:** practical checks, transfer, budget, etiquette, verification.
- **Learn:** sources, context, archive links, educational pacing.

Gunakan satu contract; jangan membuat tiga Passport/RANI stores.

---

## 30. Analytics

### 30.1 Events

```
route_save_rani_section_viewed
route_save_snapshot_viewed
route_passport_save_clicked
route_passport_save_succeeded
route_passport_save_failed
route_passport_save_unchanged
route_passport_update_clicked
route_passport_update_succeeded
route_passport_remove_clicked
route_passport_opened
route_rani_context_viewed
route_rani_prompt_selected
route_rani_question_submitted
route_rani_fallback_used
route_rani_draft_created
route_rani_draft_validated
route_rani_draft_failed
route_rani_diff_viewed
route_rani_draft_applied
route_rani_draft_rejected
route_rani_planner_opened
route_save_rani_error
```

### 30.2 Safe Payload

```tsx
{
  routeId,
  routeVersion,
  itineraryVersion,
  readinessVersion,
  source,
  saveStatus,
  provinceCount,
  durationDays,
  readinessStatus,
  raniIntent,
  draftStatus,
  changeCount,
  generatedBy,
  locale,
  travelerMode,
}
```

Jangan kirim:

- raw prompt/answer,
- exact checklist labels,
- health/diet/accessibility details,
- personal identity,
- full itinerary,
- full Passport history,
- localStorage contents.

---

## 31. Security, Privacy, dan Integrity

- Validate dan allowlist semua IDs, versions, intents, dan action targets.
- Treat RANI/model output sebagai untrusted draft.
- Jangan render raw HTML.
- API key server-side.
- Batasi payload dan output length.
- Sanitize external links.
- localStorage versioned dan tanpa data sensitif.
- Cegah prototype pollution/unsafe merge saat apply draft.
- Gunakan atomic immutable updates.
- Jangan log raw free text.
- Jangan mengubah Passport dari model output langsung.
- Apply hanya melalui typed action registry.
- Prompt injection dari content records diabaikan sebagai instruksi; record diperlakukan sebagai data.

---

## 32. Cultural, Travel, dan AI Integrity

- Tidak ada stempel karena save/chat.
- Tidak ada klaim kunjungan fisik.
- Tidak ada harga/jadwal real-time palsu.
- Tidak ada jaminan diet, alergen, aksesibilitas, keselamatan, atau visa.
- Etiquette tetap kontekstual, bersumber, dan tidak stereotip.
- RANI boleh mengatakan data tidak cukup.
- Draft yang mengurangi budget harus menjelaskan trade-off.
- Draft yang mengurangi transfer tidak boleh menyembunyikan perubahan cakupan.
- RANI tidak boleh memaksa cultural attraction sensitif sebagai itinerary item.
- Sumber resmi diprioritaskan untuk data dinamis.

---

## 33. Component Architecture

```
src/components/routes/route-save-rani/
├── RouteSaveRaniSection.tsx
├── RouteSaveRaniHeader.tsx
├── FinalRouteSnapshot.tsx
├── RouteSnapshotMetadata.tsx
├── PassportSaveLane.tsx
├── PassportSaveButton.tsx
├── PassportPlannedDisclosure.tsx
├── PassportSaveStatus.tsx
├── PassportRouteUpdateNotice.tsx
├── PassportRemoveDialog.tsx
├── RaniAdjustmentLane.tsx
├── RaniRouteContextRibbon.tsx
├── RaniQuickAdjustments.tsx
├── RaniAdjustmentComposer.tsx
├── RaniRouteResponse.tsx
├── RouteAdjustmentDraftPanel.tsx
├── RouteAdjustmentDiff.tsx
├── RouteAdjustmentValidation.tsx
├── RouteAdjustmentActions.tsx
├── RouteSaveRaniSkeleton.tsx
├── RouteSaveRaniErrorState.tsx
└── index.ts

src/lib/routes/save-rani/
├── buildRouteSaveSnapshot.ts
├── validateRouteSaveSnapshot.ts
├── upsertPassportSavedRoute.ts
├── removePassportSavedRoute.ts
├── deriveRouteSaveStatus.ts
├── buildRouteRaniContext.ts
├── classifyRouteAdjustmentIntent.ts
├── resolveRouteAdjustment.ts
├── composeLocalRouteDraft.ts
├── validateRouteAdjustmentDraft.ts
├── buildRouteAdjustmentDiff.ts
├── applyRouteAdjustmentAtomically.ts
├── routeAdjustmentVersionGuard.ts
├── routeRaniCircuitBreaker.ts
└── routeSaveRaniAnalytics.ts
```

Separation of concerns:

- Passport store memiliki persistence/status.
- Route store memiliki active route.
- RANI resolver hanya membuat draft.
- Validator menentukan apply eligibility.
- UI tidak menghitung domain rules.
- Analytics tidak menerima raw content.

---

## 34. Test Plan

### 34.1 Unit — Passport

- snapshot valid/invalid,
- idempotent upsert,
- same route/version → unchanged,
- version update,
- planned provinces merge,
- completed/started status preserved,
- remove route tidak menghapus completed stamp,
- corrupted storage partial recovery,
- hydration selector,
- cross-tab state derivation.

### 34.2 Unit — RANI

- intent classification ID/EN,
- quick prompt high confidence,
- ambiguous input clarification,
- canonical alternative resolution,
- no invented IDs,
- budget/pace/transfer guardrails,
- draft validation,
- stale base detection,
- diff generation,
- circuit breaker,
- local fallback.

### 34.3 Component

- hidden tanpa route,
- hydration shell stabil,
- Save disabled saat invalid,
- saving/saved/error states,
- success disclosure planned terbaca,
- quick prompts keyboard accessible,
- input validation,
- draft diff before/after,
- apply disabled untuk invalid draft,
- reject mempertahankan route,
- mobile confirmation accessible.

### 34.4 Integration/E2E

1. Generate route → save → refresh → saved.
2. Save dua kali → satu entry.
3. Existing completed province tetap completed.
4. Update route version → review → update.
5. Storage blocked → honest failure.
6. RANI reduce transfers → valid diff → apply.
7. Invalid draft → route lama tetap.
8. Route berubah saat draft terbuka → stale draft tidak dapat apply.
9. Apply + update Passport → active/saved versions sinkron.
10. API timeout → local fallback.
11. Offline preset → save + adjust berjalan.
12. ID/EN switch → save/draft state tetap.
13. Browser Back dari Passport → section restored.
14. Checklist completion tidak memberi stamp.
15. Analytics tidak memuat raw prompt.

### 34.5 Device QA

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
- Offline.
- Private/storage-restricted mode.
- Multi-tab sync.

---

## 35. Demo Path

### 35.1 Main Demo

```
Buka /routes
→ generate 5 Hari Budaya & Kuliner Jawa
→ review itinerary, map, dan readiness dossier
→ scroll ke Save to Passport + Ask RANI
→ jelaskan route snapshot dan status planned
→ klik Simpan ke Nusa Passport
→ success persisten muncul
→ buka Passport dan tunjukkan route/province sebagai planned
→ kembali ke Section 8
→ klik Kurangi Perpindahan bersama RANI
→ RANI menampilkan draft dan diff
→ terapkan draft valid
→ perbarui route tersimpan
```

### 35.2 Failure Demo

```
Nonaktifkan API/network
→ preset route tetap tampil
→ Save lokal tetap berhasil
→ RANI memakai panduan lokal NUSANTARAYA
→ pilih Buat Ritme Lebih Santai
→ draft canonical + diff muncul
→ apply berhasil
```

### 35.3 Integrity Demo

```
Simpan route
→ province status planned
→ checklist selesai
→ tidak ada stamp otomatis
→ selesaikan quiz/misi valid di fitur lain
→ baru Passport completion/stamp berubah
```

---

## 36. Implementation Phases

### Fase A — Audit dan Contract

- [ ]  Audit active route/result/itinerary/map/readiness stores.
- [ ]  Audit Passport store, storage key, schema, migration, dan triggers.
- [ ]  Audit route `/passport` dan return-context behavior.
- [ ]  Audit RANI engine, intents, presets, action registry, dan API adapter.
- [ ]  Audit duplicate Save/RANI CTAs di Section 4–7.
- [ ]  Kunci Section 8 anchor dan ownership.
- [ ]  Kunci route save snapshot dan adjustment contracts.

### Fase B — Passport Reliability

- [ ]  Implement snapshot validator.
- [ ]  Implement idempotent route upsert.
- [ ]  Merge planned province entries.
- [ ]  Preserve higher statuses.
- [ ]  Atomic persistence.
- [ ]  Hydration/cross-tab/recovery.
- [ ]  Update/remove policy.
- [ ]  Save status selectors.

### Fase C — Static UI

- [ ]  Header dan route snapshot.
- [ ]  Passport save lane.
- [ ]  Planned disclosure.
- [ ]  Saved/error/update states.
- [ ]  RANI context lane.
- [ ]  Quick adjustments.
- [ ]  Final handoff.

### Fase D — Local RANI Engine

- [ ]  Context builder.
- [ ]  Intent patterns ID/EN.
- [ ]  Alternative registry.
- [ ]  Local response templates.
- [ ]  Draft composer.
- [ ]  Validation pipeline.
- [ ]  Diff builder.
- [ ]  Clarification flow.

### Fase E — Apply dan Version Safety

- [ ]  Base version guard.
- [ ]  Atomic active route replacement.
- [ ]  Rebuild itinerary/map/readiness.
- [ ]  Apply-only flow.
- [ ]  Apply + Passport update flow.
- [ ]  Reject/undo behavior.
- [ ]  Stale draft recovery.

### Fase F — Hybrid Enhancement

- [ ]  Optional API adapter.
- [ ]  Timeout/abort/retry.
- [ ]  Circuit breaker.
- [ ]  Grounded context constraints.
- [ ]  Output validation.
- [ ]  Local fallback.

### Fase G — Integration

- [ ]  Section 4–7 shortcuts.
- [ ]  Passport full page.
- [ ]  RANI full page.
- [ ]  Planner edit flow.
- [ ]  Related Journeys / Final CTA.
- [ ]  URL/history/restore.
- [ ]  ID/EN dan modes.
- [ ]  Analytics.

### Fase H — Polish dan QA

- [ ]  Responsive.
- [ ]  Accessibility.
- [ ]  Reduced motion/forced colors.
- [ ]  Performance.
- [ ]  Security/privacy.
- [ ]  Cultural/AI integrity review.
- [ ]  Unit/component/E2E tests.
- [ ]  Production build.
- [ ]  Main/failure/integrity demo rehearsal.

---

## 37. Estimasi Pengerjaan

| Tahap | Estimasi |
| --- | --- |
| Audit stores, routes, dan contracts | 2–4 jam |
| Passport snapshot + idempotent persistence | 3–6 jam |
| Static responsive section UI | 3–5 jam |
| RANI context + quick prompts lokal | 3–6 jam |
| Draft resolver + validator + diff | 5–8 jam |
| Atomic apply + version guard | 3–6 jam |
| Hybrid API + circuit breaker | 3–6 jam |
| Passport/RANI/Planner integration | 3–5 jam |
| A11y, i18n, analytics, security | 3–5 jam |
| Tests, build, dan polish | 4–7 jam |

**MVP kuat:** 16–24 jam jika Passport store dan route adjustment rules tersedia.  

**Versi demo premium:** 24–36 jam dengan local RANI, diff, persistence, dan offline fallback.  

**Premium hybrid terintegrasi:** 32–58 jam tergantung kesiapan RANI API, route alternatives, migration, dan atomic downstream rebuild.

---

## 38. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Save dianggap stamp | gamifikasi tidak kredibel | planned disclosure + separate completion rules |
| Duplicate saved route | Passport kacau | idempotent upsert |
| Completed turun menjadi planned | progress hilang | status priority invariant |
| Success ditampilkan sebelum write | false confirmation | persist verification |
| Hydration flicker | state membingungkan | stable shell + hydrated selector |
| Storage diblokir | route hilang | honest error + session fallback |
| RANI mengarang perubahan | route tidak aman | canonical resolver + validator |
| Draft langsung diterapkan | user kehilangan kontrol | diff + explicit apply |
| Base route berubah | stale apply | version guard |
| Partial downstream update | mixed versions | atomic replacement |
| API gagal saat demo | flow terputus | local-first + circuit breaker |
| Prompt terlalu bebas | scope/halusinasi | intent allowlist + clarification |
| Raw prompt di analytics | privacy risk | metadata only |
| Mobile terlalu panjang | drop-off | Save first + progressive RANI |
| Dua CTA bersaing | decision paralysis | Save primary, RANI secondary |
| Passport penuh diduplikasi | scope membesar | snapshot + handoff only |

---

## 39. Acceptance Criteria

### 39.1 Functional

- [ ]  Section menjadi Section 8 `/routes`.
- [ ]  Anchor `#route-save-rani` tersedia.
- [ ]  Hidden/teaser tanpa active route.
- [ ]  Snapshot memakai IDs/versions yang sama dengan Section 4–7.
- [ ]  Save eksplisit dan idempotent.
- [ ]  Saved route berstatus planned.
- [ ]  Province entries menjadi planned tanpa menurunkan higher state.
- [ ]  Save success persisten setelah refresh.
- [ ]  Storage failure tidak menampilkan success.
- [ ]  Version update memiliki review flow.
- [ ]  RANI menerima structured context.
- [ ]  Local quick adjustments bekerja tanpa API.
- [ ]  Draft memiliki diff dan validation.
- [ ]  Invalid/stale draft tidak dapat diterapkan.
- [ ]  Apply atomik dan mempertahankan route lama sampai valid.
- [ ]  Apply + update Passport menyinkronkan version.

### 39.2 Visual

- [ ]  Terasa sebagai satu final decision hub.
- [ ]  Save lebih dominan daripada RANI idle state.
- [ ]  Passport tidak menyerupai dokumen resmi.
- [ ]  Planned tidak divisualkan sebagai completion reward.
- [ ]  RANI terasa kontekstual, bukan chat generik.
- [ ]  Diff mudah dipahami.
- [ ]  Heritage Futuristic Light konsisten.

### 39.3 Responsive

- [ ]  Desktop split Passport/RANI.
- [ ]  Tablet vertical lanes.
- [ ]  Mobile Save tampil lebih dahulu.
- [ ]  Tidak ada overflow pada route title, prompts, atau diff.
- [ ]  Keyboard mobile tidak menutup composer/action.
- [ ]  Touch target ≥44px.
- [ ]  Safe area/bottom nav aman.

### 39.4 Accessibility

- [ ]  Heading/landmark semantics benar.
- [ ]  Save busy/success/error diumumkan.
- [ ]  Planned meaning dibaca eksplisit.
- [ ]  Prompts dan composer keyboard-friendly.
- [ ]  Diff before/after memiliki label tekstual.
- [ ]  Apply disabled state memiliki alasan.
- [ ]  Focus management proporsional.
- [ ]  WCAG AA, zoom 200%, forced colors, reduced motion.

### 39.5 Integrity dan Reliability

- [ ]  Tidak ada stamp karena save/chat/checklist.
- [ ]  Tidak ada invented entity/fact.
- [ ]  Tidak ada apply tanpa validation/confirmation.
- [ ]  Passport higher statuses aman.
- [ ]  API failure pulih lokal.
- [ ]  Analytics tidak menyimpan raw prompt.
- [ ]  localStorage versioned.
- [ ]  Race condition dicegah.
- [ ]  Out-of-scope dijawab jujur.

### 39.6 Performance

- [ ]  Passport state derive cepat.
- [ ]  Local RANI responsif.
- [ ]  RANI heavy code lazy-loaded bila perlu.
- [ ]  Tidak ada CLS besar.
- [ ]  Assets teroptimasi.
- [ ]  Production build berhasil.

---

## 40. Definition of Done

Section dianggap selesai jika:

1. Active route valid selalu menghasilkan final save snapshot yang konsisten.
2. Pengguna dapat menyimpan route secara eksplisit sebagai planned.
3. Save idempotent dan persisten.
4. Province planned entries tidak mengubah started/completed.
5. Status save dapat dipahami dan diverifikasi.
6. Storage error, corrupted data, dan cross-tab memiliki recovery.
7. RANI membaca structured route context.
8. Quick adjustments local-first bekerja offline.
9. RANI tidak menciptakan entity/fakta baru.
10. Setiap draft memiliki reason, diff, limitation, dan validation status.
11. Invalid/stale draft tidak dapat diterapkan.
12. Apply mengganti result/itinerary/map/readiness secara atomik.
13. Apply + Passport update menyinkronkan version tanpa menghapus progress.
14. Save lane dan RANI lane tidak saling memicu diam-diam.
15. ID/EN serta traveler modes tidak merusak state.
16. Desktop, tablet, mobile, keyboard, screen reader, zoom, forced colors, dan reduced motion diuji.
17. Analytics, security, privacy, cultural integrity, dan AI safety telah diaudit.
18. Main demo, failure demo, dan integrity demo dapat diulang stabil.
19. Lint, typecheck, tests, dan production build lulus.
20. Handoff ke Passport, Planner, RANI penuh, Related Journeys, dan Final CTA tidak broken.

---

## 41. Rekomendasi Final

<aside>
🏆

Bangun Section 8 sebagai **Journey Commitment Hub**: satu snapshot yang jelas, Save to Passport yang eksplisit dan idempotent, planned-state yang jujur, serta RANI yang menyusun **draft tervalidasi**—bukan mengubah rute diam-diam. Nilai premium harus datang dari **kepercayaan, kontrol pengguna, konsistensi versi, diff yang mudah dipahami, dan fallback lokal**.

</aside>

### Urutan Implementasi Paling Aman

1. Audit Passport store, RANI engine, dan semua Save/RANI shortcut existing.
2. Kunci snapshot, saved-route, context, intent, draft, dan diff contracts.
3. Implement idempotent Passport upsert + planned province merge lebih dahulu.
4. Bangun UI snapshot dan Passport lane lengkap dengan hydration/error/update states.
5. Tambahkan RANI context ribbon dan quick prompts local-first.
6. Implement canonical alternative resolver, draft validator, dan diff.
7. Implement atomic apply + version guard.
8. Tambahkan apply + Passport update flow.
9. Integrasikan Passport full page, Planner, Section 4–7, Related Journeys, dan RANI penuh.
10. Tambahkan hybrid API hanya setelah local flow stabil.
11. Selesaikan accessibility, ID/EN, analytics, security, privacy, tests, dan demo rehearsal.

### Prinsip Terakhir

> **Rute yang baik tidak hanya perlu dapat disimpan; pengguna juga harus tahu apa yang tersimpan, apa yang belum selesai, apa yang diubah, dan mengapa mereka tetap memegang kendali atas setiap keputusan.**
>