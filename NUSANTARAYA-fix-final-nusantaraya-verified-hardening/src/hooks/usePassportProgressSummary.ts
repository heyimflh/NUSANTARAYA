import { useMemo } from "react";
import { usePassport } from "@/context/app-context";
import { provinceMapData } from "@/data/provinces/provinces";
import { flagshipProvinces } from "@/data/provinces/flagshipProvinces";
import { RegionId } from "@/types/region";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { regions } from "@/data/regions/regions";
import { PassportAchievement } from "@/lib/types";

export type ExplorerLevel = "Penjelajah Baru" | "Petualang Nusantara" | "Pengembara Sejati" | "Penjaga Warisan" | "Pahlawan Nusantara";

export type PassportNextReason =
  | "CONTINUE_STARTED_PROVINCE"
  | "CONTINUE_PLANNED_JOURNEY"
  | "COMPLETES_REGION_BADGE"
  | "MATCHES_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_REGION"
  | "NEW_FOR_PASSPORT"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "EDITORIAL_STARTER";

export type PassportNextMilestone = {
  provinceId: string;
  regionId: RegionId;
  reason: PassportNextReason;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
};

export type PassportProgressSummary = {
  planned: string[];
  started: string[];
  completed: string[];
  plannedCount: number;
  startedCount: number;
  completedCount: number;
  totalProvinceCount: 38;
  nationalPercent: number;
  currentLevel: ExplorerLevel;
  nextLevel: ExplorerLevel | null;
  stampsToNextLevel: number;
  nextMilestone: PassportNextMilestone | null;
  latestAchievement: PassportAchievement | null;
};

const EXPLORER_LEVELS = [
  { id: "new-explorer", label: "Penjelajah Baru", min: 0, max: 5 },
  { id: "nusantara-adventurer", label: "Petualang Nusantara", min: 6, max: 15 },
  { id: "true-wanderer", label: "Pengembara Sejati", min: 16, max: 25 },
  { id: "heritage-guardian", label: "Penjaga Warisan", min: 26, max: 35 },
  { id: "nusantara-hero", label: "Pahlawan Nusantara", min: 36, max: 38 },
] as const;

export function usePassportProgressSummary(
  highlightedRegionId: RegionId | null = null,
  selectedProvinceId: string | null = null
): PassportProgressSummary {
  const { passport } = usePassport();

  return useMemo(() => {
    // 1. Normalize Disjoint Sets
    const completedIds = new Set(passport.stamps);
    const startedIds = new Set(
      (passport.startedProvinces || []).filter((id) => !completedIds.has(id))
    );
    const plannedIds = new Set(
      (passport.plannedProvinces || []).filter(
        (id) => !completedIds.has(id) && !startedIds.has(id)
      )
    );

    const completedCount = completedIds.size;
    const startedCount = startedIds.size;
    const plannedCount = plannedIds.size;
    const totalProvinceCount = 38;
    const nationalPercent = Math.min(100, Math.round((completedCount / totalProvinceCount) * 100));

    // 2. Compute Levels
    let currentLevel: ExplorerLevel = "Penjelajah Baru";
    let nextLevel: ExplorerLevel | null = null;
    let stampsToNextLevel = 0;

    for (let i = 0; i < EXPLORER_LEVELS.length; i++) {
      const lvl = EXPLORER_LEVELS[i];
      if (completedCount >= lvl.min && completedCount <= lvl.max) {
        currentLevel = lvl.label as ExplorerLevel;
        if (i < EXPLORER_LEVELS.length - 1) {
          nextLevel = EXPLORER_LEVELS[i + 1].label as ExplorerLevel;
          stampsToNextLevel = EXPLORER_LEVELS[i + 1].min - completedCount;
        }
        break;
      }
    }

    // 3. Latest Achievement
    let latestAchievement: PassportAchievement | null = null;
    if (passport.achievements && passport.achievements.length > 0) {
      // Sort by unlockedAt descending
      const sorted = [...passport.achievements].sort((a, b) => new Date(b.unlockedAt).getTime() - new Date(a.unlockedAt).getTime());
      latestAchievement = sorted[0];
    }

    // 4. Determine Next Milestone deterministically
    let nextMilestone: PassportNextMilestone | null = null;

    const createMilestone = (
      provinceId: string,
      reason: PassportNextReason,
      title: string,
      description: string,
      ctaLabel: string
    ): PassportNextMilestone => {
      const prov = provinceMapData.find((p) => p.id === provinceId);
      const regionId = prov ? (prov.region.toLowerCase().replace(/ /g, "-").replace("bali-dan-nusa-tenggara", "bali-nusa-tenggara") as RegionId) : "jawa";
      return {
        provinceId,
        regionId,
        reason,
        title,
        description,
        ctaLabel,
      };
    };

    // 1. Started province yang belum completed
    if (startedIds.size > 0) {
      const targetId = Array.from(startedIds)[startedIds.size - 1]; // Use last started
      const prov = provinceMapData.find(p => p.id === targetId);
      if (prov) {
        nextMilestone = createMilestone(
          targetId,
          "CONTINUE_STARTED_PROVINCE",
          prov.name,
          "Lanjutkan karena provinsi ini sudah kamu mulai.",
          "Selesaikan Eksplorasi"
        );
      }
    }

    // 2. Planned province (fallback to last planned)
    if (!nextMilestone && plannedIds.size > 0) {
      const targetId = Array.from(plannedIds)[plannedIds.size - 1];
      const prov = provinceMapData.find(p => p.id === targetId);
      if (prov) {
        nextMilestone = createMilestone(
          targetId,
          "CONTINUE_PLANNED_JOURNEY",
          prov.name,
          "Provinsi ini ada dalam rencana perjalananmu.",
          "Lanjutkan Rencana"
        );
      }
    }

    // 3. Completes Region Badge
    if (!nextMilestone) {
      for (const region of regions) {
        let incompleteCount = 0;
        let lastIncompleteId = "";
        
        for (const provId of region.provinceIds) {
          if (!completedIds.has(provId)) {
            incompleteCount++;
            lastIncompleteId = provId;
          }
        }
        
        if (incompleteCount === 1) {
          const prov = provinceMapData.find(p => p.id === lastIncompleteId);
          if (prov) {
            nextMilestone = createMilestone(
              lastIncompleteId,
              "COMPLETES_REGION_BADGE",
              prov.name,
              `Selesaikan satu provinsi lagi untuk melengkapi wilayah ${region.label}.`,
              "Lengkapi Wilayah Ini"
            );
            break;
          }
        }
      }
    }

    // 4. Selected province
    if (!nextMilestone && selectedProvinceId && !completedIds.has(selectedProvinceId)) {
      const prov = provinceMapData.find(p => p.id === selectedProvinceId);
      if (prov) {
        nextMilestone = createMilestone(
          selectedProvinceId,
          "MATCHES_SELECTED_PROVINCE",
          prov.name,
          "Tambahkan provinsi pilihanmu ini ke Passport-mu.",
          "Mulai Eksplorasi"
        );
      }
    }

    // 4. Matches Active Region
    if (!nextMilestone && highlightedRegionId) {
      const region = getRegionById(highlightedRegionId);
      if (region) {
        const incompleteInRegion = region.provinceIds.find((id) => !completedIds.has(id));
        if (incompleteInRegion) {
          const prov = provinceMapData.find(p => p.id === incompleteInRegion);
          if (prov) {
            nextMilestone = createMilestone(
              incompleteInRegion,
              "MATCHES_ACTIVE_REGION",
              prov.name,
              "Pilihan ini sesuai wilayah yang sedang aktif.",
              "Lengkapi Wilayah"
            );
          }
        }
      }
    }

    // 5. Flagship content depth
    if (!nextMilestone) {
      const incompleteFlagship = flagshipProvinces.find(
        (fp) => !completedIds.has(fp.provinceId)
      );
      if (incompleteFlagship) {
        nextMilestone = createMilestone(
          incompleteFlagship.provinceId,
          "FLAGSHIP_CONTENT_DEPTH",
          incompleteFlagship.name,
          "Mulai dari provinsi unggulan dengan data lengkap.",
          "Mulai dari Provinsi"
        );
      }
    }

    // 6. Editorial fallback
    if (!nextMilestone && completedCount < totalProvinceCount) {
      const fallbackProv = provinceMapData.find(p => !completedIds.has(p.id));
      if (fallbackProv) {
        nextMilestone = createMilestone(
          fallbackProv.id,
          "EDITORIAL_STARTER",
          fallbackProv.name,
          "Satu langkah lagi untuk menjelajahi Nusantara.",
          "Lanjutkan Jelajah"
        );
      }
    }

    return {
      planned: Array.from(plannedIds),
      started: Array.from(startedIds),
      completed: Array.from(completedIds),
      plannedCount,
      startedCount,
      completedCount,
      totalProvinceCount,
      nationalPercent,
      currentLevel,
      nextLevel,
      stampsToNextLevel,
      nextMilestone,
      latestAchievement,
    };
  }, [
    passport.stamps,
    passport.startedProvinces,
    passport.plannedProvinces,
    passport.achievements,
    highlightedRegionId,
    selectedProvinceId,
  ]);
}
