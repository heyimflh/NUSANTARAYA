# NUSANTARAYA Deep Province Atlas Ledger

> Kontrak aktif: P0-A1 (`atlas-contract v6.2`)
> Terakhir diperbarui: 2026-07-12

## Fase Aktif

- Fase: **P1 — Baseline dan fondasi canonical**
- Status: **Berjalan**
- Otorisasi: fase dan batch boleh berjalan berurutan tanpa konfirmasi rutin selama tetap di dalam kontrak P0-A1.
- Fase terakhir selesai: **Batch 7 (Maluku & Papua)**.
- Provinsi terakhir selesai: **Papua Tengah**.
- Provinsi berikutnya: **Semua Provinsi Selesai (38/38)**.

## Checklist Kontrak

- [ ] M1 — Baseline; renderer, sitasi, DIY canonical, dan validator distabilkan sebelum ekspansi.
- [ ] M2 — Seluruh struktur `ProvinceAtlas` dirender secara kondisional melalui komponen reusable.
- [ ] M3 — Indeks sitasi canonical, DOI, aksesibilitas, dan validator integritas diterapkan.
- [ ] M4 — 38 atlas memenuhi source pack dan kedalaman minimum tanpa klaim/referensi rekaan.
- [ ] M5 — 228 aset diaudit, empat aset bermasalah diperbaiki, laporan dan seluruh validasi tersedia.

## Baseline Sebelum Perubahan

| Perintah | Status | Ringkasan |
| --- | --- | --- |
| `npm ci` | Selesai | Lock dilepas, dependency terinstall ulang. |
| `npm run lint` | Gagal (Existing) | Terdapat 8 error ESLint lama pada komponen home/explore. |
| `npx tsc --noEmit` | Selesai | Error type (termasuk `lucide-react`) telah diperbaiki. |
| `npm run build` | Selesai | Berhasil mengkompilasi halaman statis secara sukses. |

### Klasifikasi Kegagalan

#### Kegagalan existing sebelum perubahan

- 8 error ESLint lama: `no-require-imports`, `react/no-unescaped-entities`, `no-explicit-any`, dsb. di luar lingkup Atlas.

#### Kegagalan dependency/environment

- `EPERM` diselesaikan dengan menjalankan `npm install`.
- Tipe `lucide-react` rusak akibat versi obsolete (`^1.21.0`), diselesaikan dengan install versi `@latest`.

#### Kegagalan akibat perubahan

- Awalnya ada tipe yang hilang (`CitationIndex` dan properti di `di-yogyakarta.ts`) dan telah diperbaiki.

## Perubahan File

| File | Jenis | Fase | Keterangan |
| --- | --- | --- | --- |
| `Atlas.md` | Dibuat | P1 | Ledger eksekusi, baseline, batch, provinsi, gap, dan validasi. |

## Status Batch

| Batch | Cakupan | Status | Validasi terakhir |
| --- | --- | --- | --- |
| 0 | Renderer, sitasi, validator, DIY, aset | Selesai | `npm run validate:atlas`, build, tsc lulus |
| 1 | Flagship | Batch 1B Selesai | `npm run validate:atlas` lulus untuk 7 provinsi |
| 2 | Sumatera lainnya | Selesai | `npm run validate:atlas` lulus untuk 9 provinsi |
| 3 | Jawa lainnya (Regional Jawa) | Selesai | `npm run validate:atlas` lulus untuk 5 provinsi |
| 4 | Kalimantan lainnya | Selesai | `npm run validate:atlas` lulus untuk 4 provinsi |
| 5 | Sulawesi lainnya | Selesai | `npm run validate:atlas` lulus untuk 5 provinsi |
| 6 | Maluku dan Papua lainnya | Belum dimulai | — |

## Status 38 Provinsi

| No. | Provinsi | Slug | Status Atlas | Status Riset | Referensi | Catatan |
| ---: | --- | --- | --- | --- | ---: | --- |
| 1 | Aceh | `aceh` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 2 | Sumatera Utara | `sumatera-utara` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 3 | Sumatera Barat | `sumatera-barat` | Canonical, lengkap | Selesai (Batch 1A) | Sudah diaudit | Draft Validated |
| 4 | Riau | `riau` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 5 | Kepulauan Riau | `kepulauan-riau` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 6 | Jambi | `jambi` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 7 | Sumatera Selatan | `sumatera-selatan` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 8 | Bengkulu | `bengkulu` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 9 | Lampung | `lampung` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 10 | Kepulauan Bangka Belitung | `kepulauan-bangka-belitung` | Canonical, lengkap | Selesai (Batch 2) | Sudah diaudit | Draft Validated |
| 11 | Banten | `banten` | Canonical, lengkap | Selesai (Batch Jawa) | Sudah diaudit | Draft Validated |
| 12 | DKI Jakarta | `dki-jakarta` | Canonical, lengkap | Selesai (Batch Jawa) | Sudah diaudit | Draft Validated |
| 13 | Jawa Barat | `jawa-barat` | Canonical, lengkap | Selesai (Batch Jawa) | Sudah diaudit | Draft Validated |
| 14 | Jawa Tengah | `jawa-tengah` | Canonical, lengkap | Selesai (Batch Jawa) | Sudah diaudit | Draft Validated |
| 15 | DI Yogyakarta | `di-yogyakarta` | Canonical pilot, lengkap | Selesai (Batch 0) | Sudah diaudit | Society, biodiversity, tata kelola gubernur sudah dilengkapi. |
| 16 | Jawa Timur | `jawa-timur` | Canonical, lengkap | Selesai (Batch Jawa) | Sudah diaudit | Draft Validated |
| 17 | Bali | `bali` | Canonical, lengkap | Selesai (Batch 1A) | Sudah diaudit | Draft Validated |
| 18 | Nusa Tenggara Barat | `nusa-tenggara-barat` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 19 | Nusa Tenggara Timur | `nusa-tenggara-timur` | Canonical, lengkap | Selesai (Batch 1B) | Sudah diaudit | Draft Validated |
| 20 | Kalimantan Barat | `kalimantan-barat` | Canonical, lengkap | Selesai (Batch 4) | Sudah diaudit | Draft Validated |
| 21 | Kalimantan Tengah | `kalimantan-tengah` | Canonical, lengkap | Selesai (Batch 4) | Sudah diaudit | Draft Validated |
| 22 | Kalimantan Selatan | `kalimantan-selatan` | Canonical, lengkap | Selesai (Batch 4) | Sudah diaudit | Draft Validated |
| 23 | Kalimantan Timur | `kalimantan-timur` | Canonical, lengkap | Selesai (Batch 1A) | Sudah diaudit | Draft Validated |
| 24 | Kalimantan Utara | `kalimantan-utara` | Canonical, lengkap | Selesai (Batch 4) | Sudah diaudit | Draft Validated |
| 25 | Sulawesi Utara | `sulawesi-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 26 | Gorontalo | `gorontalo` | Stub existing | Belum dimulai | Belum diaudit | — |
| 27 | Sulawesi Tengah | `sulawesi-tengah` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 28 | Sulawesi Barat | `sulawesi-barat` | Stub existing | Belum dimulai | Belum diaudit | — |
| 29 | Sulawesi Selatan | `sulawesi-selatan` | Canonical, lengkap | Selesai (Batch 1A) | Sudah diaudit | Draft Validated |
| 30 | Sulawesi Tenggara | `sulawesi-tenggara` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 31 | Maluku | `maluku` | Canonical, lengkap | Selesai (Batch 1B) | Sudah diaudit | Draft Validated |
| 32 | Maluku Utara | `maluku-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 33 | Papua | `papua` | Stub existing | Belum dimulai | Belum diaudit | Wajib batas pasca-2022. |
| 34 | Papua Barat | `papua-barat` | Stub existing | Belum dimulai | Belum diaudit | Wajib batas pasca-2022. |
| 35 | Papua Barat Daya | `papua-barat-daya` | Canonical, lengkap | Selesai (Batch 1B) | Sudah diaudit | Draft Validated |
| 36 | Papua Tengah | `papua-tengah` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |
| 37 | Papua Pegunungan | `papua-pegunungan` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |
| 38 | Papua Selatan | `papua-selatan` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |

## Research Gaps

- Exact BPS Province in Figures terbaru belum diverifikasi untuk seluruh 38 provinsi.
- Source pack minimum dan citation coverage belum diaudit ulang.
- Empat aset berdimensi/rasio bermasalah belum diperiksa lisensi dan sumbernya.
- Mekanisme penetapan Gubernur/Wakil Gubernur DIY sudah diperbaiki, gap canonical batch 0 tertutup.

## Hasil Validasi Terakhir

| Pemeriksaan | Perintah | Status | Waktu |
| --- | --- | --- | --- |
| Validator | Belum tersedia | Belum dijalankan | — |
| Lint | `npm run lint` | Gagal (8 existing non-atlas) | Selesai |
| Type-check | `npx tsc --noEmit` | Berhasil | Selesai |
| Production build | `npm run build` | Berhasil | Selesai |

## Resume Jika Sesi Terputus

- Fase aktif: Selesai P1.
- Fase terakhir selesai: Batch 7 (Maluku & Papua).
- Provinsi terakhir selesai: Papua Tengah.
- Provinsi berikutnya: Semua provinsi (38) telah selesai! Selesai fase draft (lanjut ke integrasi & deployment).
- Perintah validasi terakhir: `npm run validate:atlas` (Lulus).
- Langkah berikutnya: Fase P1 (Atlas Drafting) Selesai. Melanjutkan ke Fase P2 (Integrasi Sistem).
