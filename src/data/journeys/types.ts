import { ExploreLayerId, ExploreModeId } from "../exploreControls";


export type JourneyMode = ExploreModeId;
export type JourneyLayer = ExploreLayerId | "mixed";

export type JourneyStop = {
  id: string;
  provinceId?: string;
  contentId?: string;
  label: string;
  shortReason: string;
  sequence: number;
  href: string;
  asset?: string;
  coordinates?: [number, number];
  chapterType?: "province" | "story" | "archive" | "food" | "future";
};

export type JourneyAction = {
  type: "map" | "atlas" | "route-planner" | "passport" | "rani" | "learn";
  label: string;
  href?: string;
};

export type JourneyReasonCode =
  | "MATCHES_ACTIVE_LAYER"
  | "STARTS_FROM_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_MODE"
  | "NEW_FOR_PASSPORT"
  | "COMPLETES_REGION_BADGE"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "REGIONAL_CONTINUITY"
  | "THEMATIC_CONTINUITY"
  | "SOURCE_COMPLETENESS"
  | "POPULAR_STARTER";

export type RecommendedJourney = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  promise: string;
  modes: JourneyMode[];
  primaryLayer: JourneyLayer;
  secondaryLayers?: JourneyLayer[];
  kind: "digital-trail" | "travel-itinerary" | "learning-path";
  stopIds: string[];
  stops: JourneyStop[];
  durationLabel?: string;
  durationDays?: number[];
  intensity?: "ringan" | "seimbang" | "mendalam";
  signals: [string, string, string];
  coverAsset: string;
  routeOverlay?: string;
  accentColor: string;
  primaryAction: JourneyAction;
  secondaryActions: JourneyAction[];
  reasonCodes: JourneyReasonCode[];
  requiredDataIds: string[];
  travelValidated?: boolean;
  sourceIds?: string[];
  isDemoPreset?: boolean;
};

export type RecommendationConfidence = "strong" | "moderate" | "fallback";

export type JourneyRecommendationContext = {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  passportProvinceIds: string[]; // completed
  startedProvinceIds: string[];
  plannedProvinceIds: string[];
  savedRouteIds: string[];
  viewedJourneyIds: string[];
  locale: "id" | "en";
};

export type JourneyRecommendationResult = {
  primary: RecommendedJourney;
  alternatives: RecommendedJourney[];
  confidence: RecommendationConfidence;
  reasons: JourneyReasonCode[];
  generatedBy: "local-rules" | "rani-enhanced" | "fallback";
};
