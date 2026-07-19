import re

with open("src/lib/routes/readiness/resolveRouteEtiquette.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "export function resolveRouteEtiquette(result: RouteRecommendation): RouteEtiquetteItem[] {",
    "import { RouteItinerary } from \"@/lib/routes/itinerary/routeItinerarySchema\";\n\nexport function resolveRouteEtiquette(result: RouteRecommendation, itinerary: RouteItinerary | null): RouteEtiquetteItem[] {"
)

content = content.replace(
    "result.provinceIds",
    "(itinerary ? Array.from(new Set(itinerary.days.flatMap(d => d.provinceIds))) : result.provinceIds)"
)

content = content.replace("confidence: \"verified\",", "confidence: \"editorial\",")

with open("src/lib/routes/readiness/resolveRouteEtiquette.ts", "w", encoding="utf-8") as f:
    f.write(content)

