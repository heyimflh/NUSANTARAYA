import type { RouteChecklistProgress } from "./routeReadinessSchema";

const CHECKLIST_STORAGE_KEY_PREFIX = "nusantaraya.routeReadiness.checklist.";

export function getChecklistStorageKey(routeId: string, routeVersion: string, itineraryVersion: string): string {
  return `${CHECKLIST_STORAGE_KEY_PREFIX}${routeId}_${routeVersion}_${itineraryVersion}`;
}

export function saveChecklistProgress(progress: RouteChecklistProgress, itineraryVersion: string): void {
  if (typeof window === "undefined") return;
  
  try {
    const key = getChecklistStorageKey(progress.routeId, progress.routeVersion, itineraryVersion);
    window.localStorage.setItem(key, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save checklist progress to localStorage", error);
  }
}

export function loadChecklistProgress(routeId: string, routeVersion: string, itineraryVersion: string): RouteChecklistProgress | null {
  if (typeof window === "undefined") return null;

  try {
    const key = getChecklistStorageKey(routeId, routeVersion, itineraryVersion);
    const data = window.localStorage.getItem(key);
    if (!data) return null;

    const parsed = JSON.parse(data) as RouteChecklistProgress;
    
    // Basic validation
    if (!parsed || !parsed.routeId || !Array.isArray(parsed.completedItemIds)) {
      return null;
    }
    
    return parsed;
  } catch (error) {
    console.error("Failed to parse checklist progress from localStorage", error);
    return null;
  }
}

export function clearChecklistProgress(routeId: string, routeVersion: string, itineraryVersion: string): void {
  if (typeof window === "undefined") return;

  try {
    const key = getChecklistStorageKey(routeId, routeVersion, itineraryVersion);
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to clear checklist progress from localStorage", error);
  }
}

export function migrateChecklistProgress(
  oldProgress: RouteChecklistProgress | null,
  newTemplateVersion: string,
  newRouteVersion: string,
  newTemplateItemIds: string[]
): RouteChecklistProgress | null {
  if (!oldProgress) return null;

  // Filter out any items that no longer exist in the new template
  const validCompletedIds = oldProgress.completedItemIds.filter((id) =>
    newTemplateItemIds.includes(id)
  );

  return {
    ...oldProgress,
    templateVersion: newTemplateVersion,
    routeVersion: newRouteVersion,
    completedItemIds: validCompletedIds,
    updatedAt: new Date().toISOString(),
  };
}
