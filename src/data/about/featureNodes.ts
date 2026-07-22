import { AboutFeatureNode } from '@/types/about';

export const aboutFeatureNodes: AboutFeatureNode[] = [
  {
    id: 'nusa-map',
    route: '/explore',
    status: 'available',
    pillarIds: ['alam', 'tradisi', 'sejarah'],
    localeContent: {
      id: {
        title: 'Nusa Map',
        summary: 'Pusat eksplorasi spasial interaktif.',
        promise: 'Lihat Indonesia dalam satu hamparan kanvas.',
      },
    },
    inputContextKeys: ['regionId', 'pillarId', 'mode'],
    outputContextKeys: ['provinceId', 'featureId'],
    connectedFeatureIds: ['province-atlas', 'archive', 'routes'],
    fallbackType: 'map'
  },
  {
    id: 'province-atlas',
    route: '/provinsi/jakarta', // Example route
    status: 'available',
    pillarIds: ['sejarah', 'tradisi', 'alam', 'rasa'],
    localeContent: {
      id: {
        title: 'Province Atlas',
        summary: 'Identitas dan detail mendalam setiap provinsi.',
        promise: 'Pahami konteks lokal suatu wilayah secara menyeluruh.',
      },
    },
    inputContextKeys: ['provinceId'],
    outputContextKeys: ['archiveId', 'dishId'],
    connectedFeatureIds: ['nusa-map', 'archive', 'nusa-rasa', 'routes'],
    fallbackType: 'image'
  },
  {
    id: 'archive',
    route: '/archive',
    status: 'available',
    pillarIds: ['sejarah', 'aksara', 'narasi', 'tradisi'],
    localeContent: {
      id: {
        title: 'Nusa Archive',
        summary: 'Koleksi artefak, manuskrip, dan cerita budaya.',
        promise: 'Telusuri jejak sejarah dan kebudayaan otentik.',
      },
    },
    inputContextKeys: ['pillarId', 'keyword', 'provinceId'],
    outputContextKeys: ['archiveId'],
    connectedFeatureIds: ['province-atlas', 'aksara', 'jalur-rempah'],
    fallbackType: 'image'
  },
  {
    id: 'nusa-rasa',
    route: '/rasa',
    status: 'available',
    pillarIds: ['rasa', 'tradisi', 'sejarah'],
    localeContent: {
      id: {
        title: 'Nusa Rasa',
        summary: 'Eksplorasi kuliner dan gastronomi Nusantara.',
        promise: 'Cicipi kekayaan rempah dan hidangan lintas daerah.',
      },
    },
    inputContextKeys: ['regionId', 'ingredient'],
    outputContextKeys: ['dishId', 'routeId'],
    connectedFeatureIds: ['province-atlas', 'routes'],
    fallbackType: 'image'
  },
  {
    id: 'routes',
    route: '/routes',
    status: 'available',
    pillarIds: ['yatra', 'alam', 'rasa'],
    localeContent: {
      id: {
        title: 'Nusa Route',
        summary: 'Perencanaan perjalanan berbasis konteks.',
        promise: 'Susun rute perjalanan yang sarat makna dan budaya.',
      },
    },
    inputContextKeys: ['provinceId', 'dishId', 'personaId'],
    outputContextKeys: ['routeId'],
    connectedFeatureIds: ['passport', 'rani', 'nusa-map'],
    fallbackType: 'typographic'
  },
  {
    id: 'passport',
    route: '/passport',
    status: 'available',
    pillarIds: ['yatra'],
    localeContent: {
      id: {
        title: 'Nusa Passport',
        summary: 'Jejak eksplorasi dan pencapaian Anda.',
        promise: 'Kumpulkan prangko digital dari setiap langkah penjelajahan.',
      },
    },
    inputContextKeys: ['routeId', 'userId'],
    outputContextKeys: ['achievementId'],
    connectedFeatureIds: ['routes', 'future'],
    fallbackType: 'image'
  },
  {
    id: 'rani',
    route: '/rani',
    status: 'in-progress',
    pillarIds: ['yatra', 'narasi'],
    localeContent: {
      id: {
        title: 'RANI',
        summary: 'Asisten naratif cerdas untuk panduan lokal.',
        promise: 'Tanyakan apa saja tentang konteks budaya dan perjalanan.',
      },
    },
    inputContextKeys: ['intent', 'locale', 'mode'],
    outputContextKeys: ['promptId'],
    connectedFeatureIds: ['routes', 'archive'],
    fallbackType: 'typographic'
  },
  {
    id: 'future',
    route: '/future',
    status: 'available',
    pillarIds: ['yatra', 'alam'],
    localeContent: {
      id: {
        title: 'Nusa Future',
        summary: 'Observatorium masa depan digital dan ekonomi kreatif.',
        promise: 'Lihat bagaimana warisan bersiap menghadapi masa depan.',
      },
    },
    inputContextKeys: ['theme', 'provinceId'],
    outputContextKeys: ['signalId'],
    connectedFeatureIds: ['passport', 'province-atlas'],
    fallbackType: 'image'
  },
  {
    id: 'aksara',
    route: '/archive?category=aksara',
    status: 'available',
    pillarIds: ['aksara', 'sejarah'],
    localeContent: {
      id: {
        title: 'Aksara & Bahasa',
        summary: 'Ensiklopedia sistem penulisan dan bahasa daerah.',
        promise: 'Belajar dan translasikan aksara leluhur.',
      },
    },
    inputContextKeys: ['languageId'],
    outputContextKeys: ['archiveId'],
    connectedFeatureIds: ['archive'],
    fallbackType: 'typographic'
  },
  {
    id: 'jalur-rempah',
    route: '/archive?category=history',
    status: 'planned',
    pillarIds: ['sejarah', 'rasa'],
    localeContent: {
      id: {
        title: 'Jalur Rempah',
        summary: 'Pemetaan sejarah perdagangan rempah Nusantara.',
        promise: 'Telusuri rute maritim yang mengubah sejarah dunia.',
      },
    },
    inputContextKeys: ['era', 'regionId'],
    outputContextKeys: ['archiveId', 'dishId'],
    connectedFeatureIds: ['archive', 'nusa-rasa'],
    fallbackType: 'map'
  }
];
