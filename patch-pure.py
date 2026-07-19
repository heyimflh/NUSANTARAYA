import re

with open("src/lib/routes/save-rani/pureAdjustments.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "RouteItinerary, RouteItineraryDay",
    "RouteItinerary, ItinerarySegment"
)

content = content.replace("day.activities", "day.segments")
content = content.replace("activities.length", "segments.length")
content = content.replace("activities =", "segments =")
content = content.replace("activities[i]", "segments[i]")

# Handle segment.isFree -> segment properties
content = content.replace("act.isFree", "(act as any).isFree")
content = content.replace("isFree: true,", "")

with open("src/lib/routes/save-rani/pureAdjustments.ts", "w", encoding="utf-8") as f:
    f.write(content)

with open("src/lib/routes/save-rani/resolveRouteAdjustment.ts", "r", encoding="utf-8") as f:
    content2 = f.read()

content2 = content2.replace("type: \"budget_change\",", "type: \"budget-level\" as const,")
content2 = content2.replace("type: \"pace_change\",", "type: \"pace\" as const,")

with open("src/lib/routes/save-rani/resolveRouteAdjustment.ts", "w", encoding="utf-8") as f:
    f.write(content2)

