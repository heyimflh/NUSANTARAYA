import re

with open("src/lib/routes/readiness/resolveRouteReadiness.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "const etiquetteItems = resolveRouteEtiquette(result);",
    "const etiquetteItems = resolveRouteEtiquette(result, itinerary);"
)

content = content.replace(
    "version: \"1.0\",",
    "version: `${routeVersion}-${itineraryVersion}`,"
)

with open("src/lib/routes/readiness/resolveRouteReadiness.ts", "w", encoding="utf-8") as f:
    f.write(content)

