import { scrollElementIntoView } from "@/lib/utils/scroll";
import { RaniAction } from "@/types/rani";
import { reportAppWarning } from "@/lib/errorMonitor";

type ActionResolverParams = {
  action: RaniAction;
  onExploreMapRegion?: (regionId: string) => void;
  onOpenSummary?: (provinceId: string) => void;
  onOpenAtlas?: (provinceId: string) => void;
  router?: { push: (url: string) => void };
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
        onExploreMapRegion(action.payload.regionId as string);
      }
      break;
    case "OPEN_PROVINCE_SUMMARY":
      if (action.payload?.provinceId && onOpenSummary) {
        onOpenSummary(action.payload.provinceId as string);
      }
      break;
    case "OPEN_PROVINCE_ATLAS":
      if (action.payload?.provinceId && onOpenAtlas) {
        onOpenAtlas(action.payload.provinceId as string);
      }
      break;
    case "OPEN_ROUTE_PLANNER":
      // Route planner is not yet available, fallback gracefully
      break;
    case "OPEN_ARCHIVE":
      // Archive is not yet available, fallback gracefully
      break;
    case "OPEN_NUSARASA":
      // NusaRasa is not yet available, fallback gracefully
      break;
    case "OPEN_PASSPORT":
      if (router) {
        router.push("/explore#passport-progress");
      } else {
        const pSection = document.getElementById("passport-progress-heading");
        if (pSection) {
          scrollElementIntoView(pSection, { });
        }
      }
      break;
    default:
      reportAppWarning("Unresolved RANI action", { action: action.type, source: "resolveRaniActions" });
  }
}

