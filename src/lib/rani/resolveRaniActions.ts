import { RaniAction } from "@/types/rani";

type ActionResolverParams = {
  action: RaniAction;
  onExploreMapRegion?: (regionId: string) => void;
  onOpenSummary?: (provinceId: string) => void;
  onOpenAtlas?: (provinceId: string) => void;
  router?: any; // Next router
};

export function resolveRaniAction({
  action,
  onExploreMapRegion,
  onOpenSummary,
  onOpenAtlas,
  router
}: ActionResolverParams) {
  switch (action.type) {
    case "APPLY_MAP_CONTEXT":
      if (action.payload?.regionId && onExploreMapRegion) {
        onExploreMapRegion(action.payload.regionId);
      }
      break;
    case "OPEN_PROVINCE_SUMMARY":
      if (action.payload?.provinceId && onOpenSummary) {
        onOpenSummary(action.payload.provinceId);
      }
      break;
    case "OPEN_PROVINCE_ATLAS":
      if (action.payload?.provinceId && onOpenAtlas) {
        onOpenAtlas(action.payload.provinceId);
      }
      break;
    case "OPEN_ROUTE_PLANNER":
      // Navigation to route planner with context
      if (router) {
        router.push("/route-planner");
      }
      break;
    case "OPEN_ARCHIVE":
      if (router) {
        router.push("/archive");
      }
      break;
    case "OPEN_NUSARASA":
      if (router) {
        router.push("/nusarasa");
      }
      break;
    case "OPEN_PASSPORT":
      if (router) {
        router.push("/passport");
      } else {
        const pSection = document.getElementById("passport-progress-heading");
        if (pSection) {
          pSection.scrollIntoView({ behavior: "smooth" });
        }
      }
      break;
    default:
      console.warn("Unresolved RANI action:", action);
  }
}
