import { AboutJourney } from '@/types/about';

export const aboutJourneys: AboutJourney[] = [
  {
    id: 'journey-explorer',
    personaIds: ['explorer'],
    mode: 'explore',
    stepFeatureIds: ['nusa-map', 'province-atlas', 'archive', 'routes'],
    primaryAction: {
      label: 'Mulai Jelajah',
      route: '/explore?source=about'
    },
    fallbackAction: {
      label: 'Buka Peta',
      route: '/explore'
    }
  },
  {
    id: 'journey-tourist',
    personaIds: ['tourist'],
    mode: 'tourist',
    stepFeatureIds: ['routes', 'province-atlas', 'nusa-rasa', 'passport'],
    primaryAction: {
      label: 'Susun Itinerary',
      route: '/routes?mode=tourist&source=about'
    },
    fallbackAction: {
      label: 'Ke Halaman Rute',
      route: '/routes'
    }
  },
  {
    id: 'journey-student',
    personaIds: ['student', 'educator-researcher'],
    mode: 'learn',
    stepFeatureIds: ['archive', 'aksara', 'province-atlas', 'future'],
    primaryAction: {
      label: 'Buka Arsip Budaya',
      route: '/archive?mode=learn&source=about'
    },
    fallbackAction: {
      label: 'Buka Arsip',
      route: '/archive'
    }
  },
  {
    id: 'journey-foodie',
    personaIds: ['culture-enthusiast'],
    mode: 'explore',
    stepFeatureIds: ['nusa-rasa', 'jalur-rempah', 'province-atlas', 'routes'],
    primaryAction: {
      label: 'Mulai Kuliner',
      route: '/rasa?source=about'
    },
    fallbackAction: {
      label: 'Buka Nusa Rasa',
      route: '/rasa'
    }
  },
  {
    id: 'journey-future',
    personaIds: ['future-explorer'],
    mode: 'explore',
    stepFeatureIds: ['future', 'nusa-map', 'passport'],
    primaryAction: {
      label: 'Lihat Masa Depan',
      route: '/future?source=about'
    },
    fallbackAction: {
      label: 'Buka Future',
      route: '/future'
    }
  }
];

export const demoStoryboardSteps = [
  {
    id: 'step-1',
    title: 'Membuka Nusa Map',
    learn: 'Melihat sebaran budaya di seluruh kepulauan.',
    do: 'Memilih provinsi di peta.',
    next: 'Province Atlas',
    featureId: 'nusa-map',
    image: '/assets/features/nusa-map-preview-v2.webp'
  },
  {
    id: 'step-2',
    title: 'Memahami Identitas Lokal',
    learn: 'Membaca sejarah, budaya, dan data provinsi.',
    do: 'Menjelajahi ragam informasi.',
    next: 'Archive / NusaRasa',
    featureId: 'province-atlas',
    image: '/assets/explore/journeys/journey-budaya.webp'
  },
  {
    id: 'step-3',
    title: 'Menelusuri Arsip & Rasa',
    learn: 'Menyelami cerita di balik warisan dan kuliner.',
    do: 'Menyimpan lokasi menarik.',
    next: 'Nusa Route',
    featureId: 'archive',
    image: '/assets/features/archive-preview-v2.webp'
  },
  {
    id: 'step-4',
    title: 'Menyusun Perjalanan',
    learn: 'Mengubah inspirasi menjadi rencana nyata.',
    do: 'Mengatur rute dan jadwal.',
    next: 'Nusa Passport',
    featureId: 'routes',
    image: '/assets/features/route-planner-preview-v2.webp'
  }
];
