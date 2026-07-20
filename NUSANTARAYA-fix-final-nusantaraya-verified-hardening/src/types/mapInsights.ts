export type MapInsightsContext = {
  locale: "id" | "en";
  activeMode: "explore" | "tourist" | "learn";
  activeLayer:
    | "all"
    | "budaya"
    | "kuliner"
    | "alam"
    | "sejarah"
    | "rempah"
    | "future";
  searchQuery: string;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  activeRegionId?: string | null;
};

export type MapInsightStatId =
  | "provinces"
  | "regions"
  | "flagships"
  | "pillars";

export type MapInsightActionType = "scroll" | "route" | "map-action";

export type MapInsightAction = {
  id: string;
  label: string;
  type: MapInsightActionType;
  target: string;
  analyticsSource: "map-insights";
};

export type MapInsightStat = {
  id: MapInsightStatId;
  value: number;
  label: string;
  description: string;
  sourceKey: string;
  action?: MapInsightAction;
};

export type EditorialInsight = {
  id: string;
  locale: "id" | "en";
  layerId?: string;
  modeId?: string;
  provinceId?: string;
  text: string;
  evidenceKeys: string[];
  primaryActionId: string;
};

export type MapInsightViewModelTone = "default" | "layer" | "province" | "empty";

export type MapInsightViewModel = {
  canonicalStats: MapInsightStat[];
  liveValue: number;
  liveLabel: string;
  contextLabel: string;
  insightId: string;
  insightText: string;
  primaryAction: MapInsightAction;
  secondaryAction?: MapInsightAction;
  tone: MapInsightViewModelTone;
};
