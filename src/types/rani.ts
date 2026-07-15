import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { RegionId } from "@/types/region";
import { PassportNextMilestone } from "@/hooks/usePassportProgressSummary";

export type RaniEntrySource =
  | "section-scroll"
  | "map"
  | "province-summary"
  | "province-atlas"
  | "recommended-journey"
  | "regional-explorer"
  | "passport-progress"
  | "route-planner"
  | "direct";

export type RaniMapContext = {
  locale: "id" | "en";
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  activeRegionId: RegionId | null;
  highlightedRegionId: RegionId | null;
  compareRegionId: string | null;
  activeJourneyId: string | null;
  journeyProvinceIds: string[];
  plannedProvinceIds: string[];
  startedProvinceIds: string[];
  completedProvinceIds: string[];
  latestAchievementId: string | null;
  nextMilestone: PassportNextMilestone | null;
  entrySource: RaniEntrySource;
};

export type RaniIntent =
  | "NEXT_STEP"
  | "RECOMMEND_PROVINCE"
  | "EXPLAIN_PROVINCE"
  | "EXPLAIN_CULTURE"
  | "RECOMMEND_CULINARY"
  | "CREATE_JOURNEY"
  | "ADJUST_JOURNEY"
  | "CREATE_ITINERARY"
  | "CULTURAL_ETIQUETTE"
  | "TRAVEL_TIPS"
  | "TRANSLATE_TERM"
  | "PASSPORT_PROGRESS"
  | "COMPARE_REGIONS"
  | "FIND_SOURCE"
  | "OPEN_FEATURE"
  | "OUT_OF_SCOPE"
  | "UNKNOWN";

export type RaniReasonCode =
  | "MATCHES_EXPLICIT_QUERY"
  | "MATCHES_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_LAYER"
  | "MATCHES_ACTIVE_MODE"
  | "MATCHES_ACTIVE_REGION"
  | "CONTINUES_ACTIVE_JOURNEY"
  | "CONTINUES_STARTED_PROVINCE"
  | "CONTINUE_STARTED_PROVINCE"
  | "CONTINUE_PLANNED_JOURNEY"
  | "COMPLETES_REGION_BADGE"
  | "ADVANCES_NEXT_LEVEL"
  | "NEW_FOR_PASSPORT"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "SOURCE_COMPLETE"
  | "EDITORIAL_FALLBACK"
  | "EDITORIAL_STARTER";

export type RaniActionTargetType =
  | "APPLY_MAP_CONTEXT"
  | "OPEN_PROVINCE_SUMMARY"
  | "OPEN_PROVINCE_ATLAS"
  | "OPEN_ROUTE_PLANNER"
  | "OPEN_ARCHIVE"
  | "OPEN_NUSARASA"
  | "OPEN_PASSPORT"
  | "OPEN_RANI_FULL"
  | "SCROLL_SECTION"
  | "COPY_TERM";

export type RaniAction = {
  id: string;
  type: RaniActionTargetType;
  label: string;
  payload?: any;
};

export type RaniPrompt = {
  id: string;
  label: string;
  icon?: string;
};

export type RaniSourceType =
  | "government"
  | "academic"
  | "museum"
  | "official-tourism"
  | "editorial";

export type RaniSource = {
  id: string;
  label: string;
  publisher: string;
  url?: string;
  sourceType: RaniSourceType;
  accessedAt?: string;
  relatedRecordIds: string[];
};

export type RaniActionTarget = {
  type: RaniActionTargetType;
  payload?: any;
};

export type RaniKnowledgeRecord = {
  id: string;
  type:
    | "province"
    | "culture"
    | "culinary"
    | "route"
    | "etiquette"
    | "language"
    | "future"
    | "event";
  title: string;
  summary: string;
  locale: "id" | "en";
  provinceIds: string[];
  regionIds: string[];
  layerIds: string[];
  modeTags: Array<ExploreModeId>;
  keywords: string[];
  sourceIds: string[];
  actionTargets: RaniActionTarget[];
  updatedAt?: string;
  isDemoPreset?: boolean;
};

export type RaniResponseBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "highlight"; label: string; value: string }
  | { type: "warning"; text: string }
  | { type: "glossary"; term: string; definition: string };

export type RaniResponse = {
  id: string;
  intent: RaniIntent;
  title?: string;
  summary: string;
  bodyBlocks: RaniResponseBlock[];
  reasonCodes: RaniReasonCode[];
  sourceIds: string[];
  primaryAction: RaniAction | null;
  secondaryActions: RaniAction[];
  followUpPrompts: RaniPrompt[];
  generatedBy:
    | "local-template"
    | "local-recommendation"
    | "hybrid-ai"
    | "editorial-preset";
  confidence: "high" | "medium" | "low";
  limitations?: string[];
};

export type RaniMessage = {
  id: string;
  role: "user" | "rani";
  text?: string;
  response?: RaniResponse;
  timestamp: string;
};

export type RaniConversationState = {
  messages: RaniMessage[];
  status: "idle" | "loading" | "error" | "offline";
  lastQuery: string | null;
  lastIntent: RaniIntent | null;
  exchangeCount: number;
  generatedBy: "local" | "hybrid" | null;
  error: string | null;
};
