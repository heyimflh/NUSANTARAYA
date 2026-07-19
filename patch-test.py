import re

with open("scripts/test-route-integration.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "const workspace = resolveActiveRouteWorkspace(result, values, mockPassport, \"route-result\", \"id\");",
    "const workspace = resolveActiveRouteWorkspace(result, null, values, mockPassport, \"route-result\", \"id\");"
)

with open("scripts/test-route-integration.ts", "w", encoding="utf-8") as f:
    f.write(content)

