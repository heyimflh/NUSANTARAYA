import re

with open("src/lib/routes/readiness/checklistPersistence.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "export function getChecklistStorageKey(routeId: string): string {",
    "export function getChecklistStorageKey(routeId: string, routeVersion: string, itineraryVersion: string): string {"
)
content = content.replace(
    "return `${CHECKLIST_STORAGE_KEY_PREFIX}${routeId}`;",
    "return `${CHECKLIST_STORAGE_KEY_PREFIX}${routeId}_${routeVersion}_${itineraryVersion}`;"
)

content = content.replace(
    "export function saveChecklistProgress(progress: RouteChecklistProgress): void {",
    "export function saveChecklistProgress(progress: RouteChecklistProgress, itineraryVersion: string): void {"
)
content = content.replace(
    "const key = getChecklistStorageKey(progress.routeId);",
    "const key = getChecklistStorageKey(progress.routeId, progress.routeVersion, itineraryVersion);"
)

content = content.replace(
    "export function loadChecklistProgress(routeId: string): RouteChecklistProgress | null {",
    "export function loadChecklistProgress(routeId: string, routeVersion: string, itineraryVersion: string): RouteChecklistProgress | null {"
)
content = content.replace(
    "const key = getChecklistStorageKey(routeId);",
    "const key = getChecklistStorageKey(routeId, routeVersion, itineraryVersion);"
)

content = content.replace(
    "export function clearChecklistProgress(routeId: string): void {",
    "export function clearChecklistProgress(routeId: string, routeVersion: string, itineraryVersion: string): void {"
)
content = content.replace(
    "const key = getChecklistStorageKey(routeId);",
    "const key = getChecklistStorageKey(routeId, routeVersion, itineraryVersion);"
)

with open("src/lib/routes/readiness/checklistPersistence.ts", "w", encoding="utf-8") as f:
    f.write(content)

with open("src/components/routes/route-readiness/ChecklistModule.tsx", "r", encoding="utf-8") as f:
    content2 = f.read()

content2 = content2.replace(
    "const saved = loadChecklistProgress(template.routeId);",
    "const saved = loadChecklistProgress(template.routeId, template.routeVersion, template.itineraryVersion);"
)

content2 = content2.replace(
    "updatedAt: new Date().toISOString(),\n      });",
    "updatedAt: new Date().toISOString(),\n      }, template.itineraryVersion);"
)

content2 = content2.replace(
    "clearChecklistProgress(template.routeId);",
    "clearChecklistProgress(template.routeId, template.routeVersion, template.itineraryVersion);"
)

with open("src/components/routes/route-readiness/ChecklistModule.tsx", "w", encoding="utf-8") as f:
    f.write(content2)

