import { RegionId } from "./region";

export type FutureThemeId =
  | "civic-life"
  | "connected-mobility"
  | "regenerative-environment"
  | "creative-economy"
  | "digital-villages"
  | "food-ocean-resilience"
  | "living-heritage";

export type FutureSignalStatus =
  | "current"
  | "in-progress"
  | "official-target"
  | "prototype"
  | "editorial-scenario";

export type FutureSignalLocale = {
  title: string;
  summary: string;
  challenge: string;
  response: string;
};

export type FutureMedia = {
  src: string;
  width: number;
  height: number;
  altId: string;
  altEn?: string;
  credit?: string;
};

export type FutureFeatureRef = {
  featureId: string;
  type: "archive" | "rasa" | "atlas" | "route";
};

export type FutureSignal = {
  id: string;
  slug: string;
  status: "draft" | "review" | "published" | "archived";
  signalStatus: FutureSignalStatus;
  themeIds: FutureThemeId[];
  provinceIds: string[];
  regionIds: RegionId[];
  scale: "community" | "village" | "city" | "regional" | "national";
  localeContent: {
    id: FutureSignalLocale;
    en?: FutureSignalLocale;
  };
  aliases: string[];
  challengeIds: string[];
  responseIds: string[];
  beneficiaryIds?: string[];
  tradeOffIds: string[];
  media: FutureMedia[];
  sourceRefs: string[];
  relatedSignalIds: string[];
  relatedFeatureRefs: FutureFeatureRef[];
  evidenceDate?: string;
  updatedAt: string;
  reviewedAt?: string;
};

export type FutureScenario = {
  id: string;
  version: string;
  provinceId?: string;
  regionId?: RegionId;
  priorityThemeIds: FutureThemeId[];
  perspective: "citizen" | "traveler" | "learner" | "maker";
  horizon: "2030" | "2045" | "next-decade";
  constraintIds: string[];
  signalIds: string[];
  tradeOffIds: string[];
  generatedBy: "local-rule-engine";
  createdAt: string;
};
