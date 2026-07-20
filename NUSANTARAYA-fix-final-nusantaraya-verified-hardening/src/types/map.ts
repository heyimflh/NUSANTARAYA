export type InteractiveMapLocalState = {
  mapScale: number;
  mapOffset: { x: number; y: number };
  isLegendOpen: boolean;
  showLabels: boolean;
  tooltipProvinceId: string | null;
  isPanelOpen: boolean;
  interactionSource: "map" | "search" | "keyboard" | "card" | null;
};
