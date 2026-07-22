import { AboutPersonaId } from '@/types/about';

export type PersonaData = {
  id: AboutPersonaId;
  name: string;
  description: string;
  expectedValue: string;
};

export const aboutPersonas: PersonaData[] = [
  {
    id: 'explorer',
    name: 'Explorer Umum',
    description: 'Ingin menjelajahi keindahan Indonesia tanpa rute terikat.',
    expectedValue: 'Temukan hidden gems, jelajahi peta interaktif, dan simpan inspirasi perjalanan.'
  },
  {
    id: 'tourist',
    name: 'Turis',
    description: 'Mencari rute praktis, etika lokal, dan rekomendasi destinasi.',
    expectedValue: 'Dapatkan rencana perjalanan (itinerary) siap pakai, panduan budaya, dan rute efisien.'
  },
  {
    id: 'student',
    name: 'Pelajar / Mahasiswa',
    description: 'Mencari referensi budaya, sejarah, dan aksara lokal.',
    expectedValue: 'Akses arsip komprehensif, pelajari sejarah Jalur Rempah, dan pahami narasi lisan.'
  },
  {
    id: 'educator-researcher',
    name: 'Pendidik / Peneliti',
    description: 'Membutuhkan data tervalidasi, sumber yang jelas, dan konteks mendalam.',
    expectedValue: 'Telusuri metodologi kami, periksa sumber data, dan temukan koneksi antardaerah.'
  },
  {
    id: 'culture-enthusiast',
    name: 'Pecinta Kuliner',
    description: 'Terinspirasi oleh cita rasa lokal dan bumbu Nusantara.',
    expectedValue: 'Jelajahi peta kuliner, temukan resep otentik, dan susun tasting trail Anda sendiri.'
  },
  {
    id: 'future-explorer',
    name: 'Future Explorer',
    description: 'Tertarik pada inovasi masa depan dan desa digital.',
    expectedValue: 'Lihat bagaimana tradisi beradaptasi dengan teknologi dan ekonomi kreatif.'
  }
];
