/**
 * NUSANTARAYA — Route Readiness Schema
 * Planning: Section 7 Budget, Culinary, Etiquette, and Checklist
 */

export type DataConfidence = "verified" | "estimated" | "partial" | "unknown";

export interface MoneyRange {
  currency: "IDR";
  min: number;
  max: number;
}

export type BudgetCategoryType =
  | "accommodation"
  | "intercity-transport"
  | "local-transport"
  | "meals"
  | "activities"
  | "buffer"
  | "other";

export interface RouteBudgetCategory {
  id: string;
  type: BudgetCategoryType;
  label: string;
  amount?: MoneyRange;
  confidence: DataConfidence;
  segmentIds?: string[];
  activityIds?: string[];
  sourceRefs?: string[];
}

export interface RouteBudgetEstimate {
  basis: "per-person" | "party";
  partySize: number;
  durationDays: 3 | 5 | 7;
  total: MoneyRange;
  confidence: DataConfidence;
  categories: RouteBudgetCategory[];
  assumptionIds: string[];
  exclusionIds: string[];
  sourceRefs?: string[];
  updatedAt: string;
}

export type CulinaryCategory = "main" | "snack" | "drink" | "market";

export interface RouteCulinaryItem {
  id: string;
  culinaryId: string;
  provinceId: string;
  stopId: string;
  dayNumbers: number[];
  category: CulinaryCategory;
  tasteProfileIds: string[];
  contextNoteId: string;
  dietaryTags?: string[];
  allergenRefs?: string[];
  confidence: DataConfidence;
  sourceRefs?: string[];
}

export type EtiquetteContextType =
  | "sacred-place"
  | "customary-community"
  | "photography"
  | "clothing"
  | "interaction"
  | "event"
  | "environment"
  | "market"
  | "dining";

export interface RouteEtiquetteItem {
  id: string;
  contextType: EtiquetteContextType;
  provinceIds: string[];
  activityIds?: string[];
  guidanceId: string;
  whyItMattersId?: string;
  priority: "essential" | "recommended" | "contextual";
  confidence: DataConfidence;
  sourceRefs: string[];
  updatedAt: string;
}

export type ChecklistPriority = "required-check" | "recommended" | "optional";
export type ChecklistPhase = "before-booking" | "before-departure" | "during-trip";

export interface RouteChecklistItem {
  id: string;
  groupId: string;
  labelId: string;
  descriptionId?: string;
  priority: ChecklistPriority;
  phase: ChecklistPhase;
  derivedFrom: Array<{
    type: "route" | "day" | "segment" | "activity" | "culinary" | "etiquette";
    id: string;
  }>;
  sourceRefs?: string[];
}

export interface RouteChecklistTemplate {
  id: string;
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  version: string;
  items: RouteChecklistItem[];
}

export interface RouteChecklistProgress {
  templateId: string;
  templateVersion: string;
  routeId: string;
  routeVersion: string;
  completedItemIds: string[];
  updatedAt: string;
}

export type ReadinessStatus = "ready" | "partial" | "stale";
export type ReadinessSource = "canonical" | "derived" | "preset" | "fallback";

export interface RouteReadinessDossier {
  id: string;
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion?: string;
  version: string;
  locale: "id" | "en";
  source: ReadinessSource;
  status: ReadinessStatus;
  budget?: RouteBudgetEstimate;
  culinaryItems: RouteCulinaryItem[];
  etiquetteItems: RouteEtiquetteItem[];
  checklistTemplate: RouteChecklistTemplate;
  sourceRefs?: string[];
  updatedAt: string;
}
