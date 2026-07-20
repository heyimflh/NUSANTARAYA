import re

with open("src/lib/routes/readiness/routeReadinessSchema.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "export type DataConfidence = \"verified\" | \"estimated\" | \"partial\" | \"unknown\";",
    "export type DataConfidence = \"verified\" | \"editorial\" | \"estimated\" | \"unavailable\";"
)

content = content.replace(
    "export interface MoneyRange {\n  currency: \"IDR\";\n  min: number;\n  max: number;\n}",
    "export interface MoneyRange {\n  currency: string | null;\n  min: number | null;\n  max: number | null;\n}"
)

# Also update RouteReadinessDossier version requirement
# "version readiness diturunkan secara deterministik" (we will just set it in resolveRouteReadiness)

with open("src/lib/routes/readiness/routeReadinessSchema.ts", "w", encoding="utf-8") as f:
    f.write(content)

