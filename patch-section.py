import re

with open("src/components/routes/route-result/RouteRecommendationResultSection.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "result: RouteRecommendation | null;",
    "result: RouteRecommendation | null;\n    activeItinerary?: import(\"@/lib/routes/itinerary/routeItinerarySchema\").RouteItinerary | null;"
)

content = content.replace(
    "onReset: () => void;",
    "onReset: () => void;\n    onApplyDraft?: (draft: import(\"@/lib/routes/save-rani/types\").RouteAdjustmentDraft) => void;\n    onUndoDraft?: () => void;\n    canUndo?: boolean;"
)

content = content.replace(
    "export function RouteRecommendationResultSection({",
    "export function RouteRecommendationResultSection({\n  activeItinerary = null,\n  onApplyDraft,\n  onUndoDraft,\n  canUndo = false,"
)

content = content.replace(
    "status === \"success\" || status === \"fallback\" ? result : null,",
    "status === \"success\" || status === \"fallback\" ? result : null,\n      activeItinerary,"
)

# Update the RouteSaveRaniSection props
replacement_rani = """          <RouteSaveRaniSection
            result={workspace.recommendation}
            itinerary={workspace.itinerary}
            values={values}
            savedRouteSnapshot={workspace.saveSnapshot}
            canSavePassport={workspace.canSavePassport}
            canUseRani={workspace.canUseRani}
            activeRouteKey={workspace.activeRouteKey}
            onApplyDraft={onApplyDraft || (() => {})}
            onUndoDraft={onUndoDraft}
            canUndo={canUndo}
          />"""

content = re.sub(
    r"<RouteSaveRaniSection[\s\S]*?/>",
    replacement_rani,
    content
)

with open("src/components/routes/route-result/RouteRecommendationResultSection.tsx", "w", encoding="utf-8") as f:
    f.write(content)

