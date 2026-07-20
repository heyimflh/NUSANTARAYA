export const ROUTE_SECTION_IDS = {
  planner: "route-atelier",
  presets: "preset-routes",
  result: "route-recommendation-result",
  itinerary: "day-by-day-itinerary",
  map: "route-map-transport-summary",
  readiness: "route-readiness",
  saveRani: "route-save-rani-section",
} as const;

export type RouteSectionKey = keyof typeof ROUTE_SECTION_IDS;
export type RouteSectionId = (typeof ROUTE_SECTION_IDS)[RouteSectionKey];

export function getRouteSectionHref(key: RouteSectionKey): `#${RouteSectionId}` {
  return `#${ROUTE_SECTION_IDS[key]}`;
}
