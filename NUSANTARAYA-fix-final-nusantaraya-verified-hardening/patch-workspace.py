import re

with open("src/hooks/useActiveRouteWorkspace.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "recommendation: RouteRecommendation | null,",
    "recommendation: RouteRecommendation | null,\n  activeItinerary: import(\"@/lib/routes/itinerary/routeItinerarySchema\").RouteItinerary | null,"
)
content = content.replace(
    "() => resolveActiveRouteWorkspace(recommendation, values, passport, source, locale),",
    "() => resolveActiveRouteWorkspace(recommendation, activeItinerary, values, passport, source, locale),"
)
content = content.replace(
    "recommendation,",
    "recommendation,\n      activeItinerary,"
)

with open("src/hooks/useActiveRouteWorkspace.ts", "w", encoding="utf-8") as f:
    f.write(content)

with open("src/lib/routes/workspace/resolveActiveRouteWorkspace.ts", "r", encoding="utf-8") as f:
    content2 = f.read()

content2 = content2.replace(
    "recommendation: RouteRecommendation | null,",
    "recommendation: RouteRecommendation | null,\n  activeItinerary: import(\"@/lib/routes/itinerary/routeItinerarySchema\").RouteItinerary | null,"
)
content2 = content2.replace(
    "const itineraryRes = resolveRouteItinerary(recommendation);",
    "const itineraryRes = activeItinerary ? { status: \"ready\" as const, itinerary: activeItinerary } : resolveRouteItinerary(recommendation);"
)

with open("src/lib/routes/workspace/resolveActiveRouteWorkspace.ts", "w", encoding="utf-8") as f:
    f.write(content2)

