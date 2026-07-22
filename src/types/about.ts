export type AboutPillarId =
  | 'sejarah'
  | 'aksara'
  | 'narasi'
  | 'tradisi'
  | 'alam'
  | 'rasa'
  | 'yatra';

export type AboutPersonaId =
  | 'explorer'
  | 'tourist'
  | 'student'
  | 'educator-researcher'
  | 'culture-enthusiast'
  | 'future-explorer';

export type FeatureStatus = 'available' | 'in-progress' | 'planned' | 'exploring';

export type AboutFeatureNode = {
  id: string;
  route?: string;
  status: FeatureStatus;
  pillarIds: AboutPillarId[];
  localeContent: {
    id: { title: string; summary: string; promise: string };
    en?: { title: string; summary: string; promise: string };
  };
  inputContextKeys: string[];
  outputContextKeys: string[];
  connectedFeatureIds: string[];
  assetRef?: string;
  fallbackType: 'image' | 'map' | 'typographic';
};

export type AboutAction = {
  label: string;
  route: string;
};

export type AboutJourneyStep = {
  featureId: string;
  title: string;
  description: string;
};

export type AboutJourney = {
  id: string;
  personaIds: AboutPersonaId[];
  mode: 'explore' | 'tourist' | 'learn';
  stepFeatureIds: string[];
  primaryAction: AboutAction;
  fallbackAction: AboutAction;
};
