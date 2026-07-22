import { AboutPillarId } from '@/types/about';

export type PillarData = {
  id: AboutPillarId;
  name: string;
  description: string;
  examples: string[];
  ctaText: string;
  ctaRoute: string;
};

export const aboutPillars: PillarData[] = [
  {
    id: 'sejarah',
    name: 'Sejarah',
    description: 'Menelusuri jejak waktu, timeline peradaban, Jalur Rempah, tokoh-tokoh penting, dan situs warisan yang membentuk identitas kita hari ini.',
    examples: ['Jalur Rempah', 'Tokoh Nasional', 'Situs Warisan'],
    ctaText: 'Jelajahi Sejarah di Archive',
    ctaRoute: '/archive?category=history'
  },
  {
    id: 'aksara',
    name: 'Aksara',
    description: 'Mengenal bahasa daerah, sistem tulisan tradisional, transliterasi kuno, dan arsip audio lisan yang menyimpan kebijaksanaan lokal.',
    examples: ['Bahasa Lontara', 'Aksara Jawa', 'Cerita Lisan'],
    ctaText: 'Pelajari Aksara',
    ctaRoute: '/archive?category=aksara'
  },
  {
    id: 'narasi',
    name: 'Narasi',
    description: 'Kumpulan cerita rakyat, legenda, micro-story, dan pengalaman hidup dari berbagai sudut daerah yang terus dihidupkan.',
    examples: ['Cerita Rakyat', 'Micro Story', 'Legenda Lokal'],
    ctaText: 'Baca Cerita',
    ctaRoute: '/archive?category=stories'
  },
  {
    id: 'tradisi',
    name: 'Tradisi',
    description: 'Praktik budaya yang hidup: arsitektur rumah adat, seni rupa, ritual kepercayaan, kerajinan, hingga soundscape alat musik tradisional.',
    examples: ['Rumah Adat', 'Kain Tenun', 'Ritual Tahunan'],
    ctaText: 'Lihat Tradisi',
    ctaRoute: '/explore?focus=tradition'
  },
  {
    id: 'alam',
    name: 'Alam',
    description: 'Keajaiban lanskap Nusantara, destinasi wisata ikonik, hidden gems, dan pariwisata berkelanjutan yang menjaga harmoni alam.',
    examples: ['Taman Nasional', 'Geopark', 'Green Tourism'],
    ctaText: 'Jelajahi Alam',
    ctaRoute: '/explore?focus=nature'
  },
  {
    id: 'rasa',
    name: 'Rasa',
    description: 'Kekayaan rempah Nusantara, kisah di balik makanan lokal, hingga jejak kuliner yang memetakan sejarah persilangan budaya.',
    examples: ['Rempah-rempah', 'Makanan Khas', 'Tasting Trail'],
    ctaText: 'Temukan Rasa',
    ctaRoute: '/rasa'
  },
  {
    id: 'yatra',
    name: 'Yatra',
    description: 'Lebih dari sekadar wisata. Menyusun perjalanan bermakna dengan Route, mencatat jejak di Passport, dan panduan cerdas dari RANI.',
    examples: ['Route Planner', 'Nusa Passport', 'RANI'],
    ctaText: 'Susun Perjalanan',
    ctaRoute: '/routes'
  }
];
