import re

with open("src/hooks/useActiveRouteWorkspace.ts", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("activeItinerary, activeItinerary", "activeItinerary")
with open("src/hooks/useActiveRouteWorkspace.ts", "w", encoding="utf-8") as f:
    f.write(content)

with open("src/lib/routes/save-rani/resolveRouteAdjustment.ts", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("\"rani-adjustment-engine\"", "\"local-rules\"")
content = content.replace("type: \"budget\" as const,", "type: \"budget_change\",")
content = content.replace("type: \"pace\" as const,", "type: \"pace_change\",")
with open("src/lib/routes/save-rani/resolveRouteAdjustment.ts", "w", encoding="utf-8") as f:
    f.write(content)

