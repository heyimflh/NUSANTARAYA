import re

with open("src/components/routes/route-planner-form/RouteAtelier.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "const [result, setResult] = useState<RouteRecommendation | null>(null);",
    "const [result, setResult] = useState<RouteRecommendation | null>(null);\n    const [activeItinerary, setActiveItinerary] = useState<import(\"@/lib/routes/itinerary/routeItinerarySchema\").RouteItinerary | null>(null);\n    const [previousState, setPreviousState] = useState<{ result: RouteRecommendation, itinerary: import(\"@/lib/routes/itinerary/routeItinerarySchema\").RouteItinerary | null } | null>(null);"
)

# Replace handleReset to clear activeItinerary and previousState
content = content.replace(
    "setResult(null);",
    "setResult(null);\n      setActiveItinerary(null);\n      setPreviousState(null);"
)

# The result comes from routeRecommendationResultSection, we need to pass activeItinerary and onApplyDraft, onUndoDraft
replacement_result = """          <RouteRecommendationResultSection
            result={result}
            activeItinerary={activeItinerary}
            status={status}
            adjustmentNote={adjustmentNote}
            values={values}
            resultSource={resultSource}
            onEdit={() => setActiveStep(1)}
            onReset={handleReset}
            focusOnReveal={focusOnReveal}
            onApplyDraft={(draft) => {
              setPreviousState({ result: result as RouteRecommendation, itinerary: activeItinerary });
              setResult(draft.proposedRoute);
              setActiveItinerary(draft.proposedItinerary);
              setStatus("success");
              setResultSource("preset"); // or form, this dictates if it uses preset logic, maybe keep it as is
              setAdjustmentNote(`Rute disesuaikan: ${draft.summary}`);
            }}
            onUndoDraft={() => {
              if (previousState) {
                setResult(previousState.result);
                setActiveItinerary(previousState.itinerary);
                setPreviousState(null);
                setAdjustmentNote("Perubahan rute dibatalkan.");
              }
            }}
            canUndo={!!previousState}
          />"""

content = re.sub(
    r"<RouteRecommendationResultSection[\s\S]*?/>",
    replacement_result,
    content
)

with open("src/components/routes/route-planner-form/RouteAtelier.tsx", "w", encoding="utf-8") as f:
    f.write(content)

