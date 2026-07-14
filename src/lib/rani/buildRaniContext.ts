import { RaniMapContext, RaniEntrySource } from "@/types/rani";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { RegionId } from "@/types/region";
import { PassportNextMilestone } from "@/hooks/usePassportProgressSummary";

type BuildContextParams = {
  locale: "id" | "en";
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  activeRegionId: RegionId | null;
  highlightedRegionId: RegionId | null;
  activeJourneyId: string | null;
  journeyProvinceIds: string[];
  plannedProvinceIds: string[];
  startedProvinceIds: string[];
  completedProvinceIds: string[];
  latestAchievementId: string | null;
  nextMilestone: PassportNextMilestone | null;
  entrySource: RaniEntrySource;
};

export function buildRaniContext(params: BuildContextParams): RaniMapContext {
  // In a more complex app, we might do normalization here.
  // For now, we simply map it to the expected context shape.
  return {
    locale: params.locale,
    activeMode: params.activeMode,
    activeLayer: params.activeLayer,
    selectedProvinceId: params.selectedProvinceId,
    searchQuery: params.searchQuery,
    showFlagshipOnly: params.showFlagshipOnly,
    activeRegionId: params.activeRegionId,
    highlightedRegionId: params.highlightedRegionId,
    compareRegionId: null, // derived later if needed
    activeJourneyId: params.activeJourneyId,
    journeyProvinceIds: params.journeyProvinceIds || [],
    plannedProvinceIds: params.plannedProvinceIds || [],
    startedProvinceIds: params.startedProvinceIds || [],
    completedProvinceIds: params.completedProvinceIds || [],
    latestAchievementId: params.latestAchievementId,
    nextMilestone: params.nextMilestone,
    entrySource: params.entrySource,
  };
}
