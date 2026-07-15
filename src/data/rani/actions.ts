import { RaniActionTargetType } from "@/types/rani";

export type ActionRegistryEntry = {
  id: string;
  type: RaniActionTargetType;
  label: string;
  analyticsSource: string;
  fallbackAction?: RaniActionTargetType;
  availability: "available" | "unavailable" | "coming-soon";
};

// Centralized registry for actions to prevent linking to broken routes
export const actionRegistry: Record<RaniActionTargetType, ActionRegistryEntry> = {
  APPLY_MAP_CONTEXT: {
    id: "act-apply-map",
    type: "APPLY_MAP_CONTEXT",
    label: "Lihat di Peta",
    analyticsSource: "rani_map_applied",
    availability: "available",
  },
  OPEN_PROVINCE_SUMMARY: {
    id: "act-open-summary",
    type: "OPEN_PROVINCE_SUMMARY",
    label: "Buka Ringkasan Provinsi",
    analyticsSource: "rani_summary_opened",
    fallbackAction: "APPLY_MAP_CONTEXT",
    availability: "available",
  },
  OPEN_PROVINCE_ATLAS: {
    id: "act-open-atlas",
    type: "OPEN_PROVINCE_ATLAS",
    label: "Buka Atlas Provinsi",
    analyticsSource: "rani_atlas_opened",
    fallbackAction: "OPEN_PROVINCE_SUMMARY",
    availability: "available", // Atlas pages exist at /provinsi/[id]
  },
  OPEN_ROUTE_PLANNER: {
    id: "act-route-planner",
    type: "OPEN_ROUTE_PLANNER",
    label: "Rencanakan Rute",
    analyticsSource: "rani_route_draft_opened",
    fallbackAction: "APPLY_MAP_CONTEXT",
    availability: "unavailable", // Assuming currently out of scope/broken based on PRD
  },
  OPEN_ARCHIVE: {
    id: "act-archive",
    type: "OPEN_ARCHIVE",
    label: "Buka Archive Budaya",
    analyticsSource: "rani_archive_opened",
    fallbackAction: "APPLY_MAP_CONTEXT",
    availability: "unavailable", 
  },
  OPEN_NUSARASA: {
    id: "act-nusarasa",
    type: "OPEN_NUSARASA",
    label: "Buka NusaRasa",
    analyticsSource: "rani_nusarasa_opened",
    fallbackAction: "APPLY_MAP_CONTEXT",
    availability: "unavailable",
  },
  OPEN_PASSPORT: {
    id: "act-passport",
    type: "OPEN_PASSPORT",
    label: "Buka Nusa Passport",
    analyticsSource: "rani_passport_opened",
    fallbackAction: "SCROLL_SECTION",
    availability: "unavailable", 
  },
  OPEN_RANI_FULL: {
    id: "act-rani-full",
    type: "OPEN_RANI_FULL",
    label: "Lanjutkan di RANI Lengkap",
    analyticsSource: "rani_full_opened",
    fallbackAction: "APPLY_MAP_CONTEXT",
    availability: "unavailable",
  },
  SCROLL_SECTION: {
    id: "act-scroll-section",
    type: "SCROLL_SECTION",
    label: "Gulir ke Bagian",
    analyticsSource: "rani_section_scrolled",
    availability: "available",
  },
  COPY_TERM: {
    id: "act-copy-term",
    type: "COPY_TERM",
    label: "Salin Istilah",
    analyticsSource: "rani_term_copied",
    availability: "available",
  }
};

/**
 * Validates if an action is available to be rendered to the user.
 * If not, it recursively checks for a valid fallback.
 */
export function getAvailableAction(targetType: RaniActionTargetType): ActionRegistryEntry | null {
  const entry = actionRegistry[targetType];
  if (!entry) return null;
  
  if (entry.availability === "available") {
    return entry;
  }
  
  if (entry.fallbackAction) {
    return getAvailableAction(entry.fallbackAction);
  }
  
  return null;
}
