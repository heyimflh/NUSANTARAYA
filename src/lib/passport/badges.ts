import { PassportData, BadgeDefinition, BadgeWilayah } from "@/lib/types";
import { provinceMapData } from "@/data/provinces/provinces";

export const BADGE_REGISTRY: BadgeDefinition[] = [
  {
    id: "Sumatra Seeker",
    label: "Sumatra Seeker",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di pulau Sumatera.",
    requirementText: "Selesaikan 10 provinsi di Sumatera",
    asset: "/assets/passport/badges/regions/sumatra-seeker.png"
  },
  {
    id: "Java Heritage Keeper",
    label: "Java Heritage Keeper",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di pulau Jawa.",
    requirementText: "Selesaikan 6 provinsi di Jawa",
    asset: "/assets/passport/badges/regions/java-heritage-keeper.png"
  },
  {
    id: "Borneo Nature Guardian",
    label: "Borneo Nature Guardian",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di pulau Kalimantan.",
    requirementText: "Selesaikan 5 provinsi di Kalimantan",
    asset: "/assets/passport/badges/regions/borneo-nature-guardian.png"
  },
  {
    id: "Celebes Voyager",
    label: "Celebes Voyager",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di pulau Sulawesi.",
    requirementText: "Selesaikan 6 provinsi di Sulawesi",
    asset: "/assets/passport/badges/regions/celebes-voyager.png"
  },
  {
    id: "Bali-Nusa Wanderer",
    label: "Bali-Nusa Wanderer",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di Bali dan Kepulauan Nusa Tenggara.",
    requirementText: "Selesaikan 3 provinsi di Bali & Nusa Tenggara",
    asset: "/assets/passport/badges/regions/bali-nusa-wanderer.png"
  },
  {
    id: "Maluku Spice Explorer",
    label: "Maluku Spice Explorer",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di kepulauan Maluku.",
    requirementText: "Selesaikan 2 provinsi di Maluku",
    asset: "/assets/passport/badges/regions/maluku-spice-explorer.png"
  },
  {
    id: "Papua Wonder Seeker",
    label: "Papua Wonder Seeker",
    category: "region",
    description: "Telah menjelajahi seluruh provinsi di pulau Papua.",
    requirementText: "Selesaikan 6 provinsi di Papua",
    asset: "/assets/passport/badges/regions/papua-wonder-seeker.png"
  },
  {
    id: "Indonesia Complete Explorer",
    label: "Indonesia Complete Explorer",
    category: "special",
    description: "Penjelajah sejati! Telah menyelesaikan seluruh 38 provinsi di Indonesia.",
    requirementText: "Selesaikan seluruh 38 provinsi",
    asset: "/assets/passport/badges/regions/indonesia-complete-explorer.png"
  }
];

export function evaluateBadges(passport: PassportData): PassportData {
  const p = { ...passport };
  const newBadges = [...p.badges];
  const newAchievements = [...(p.achievements || [])];
  
  const completedSet = new Set(p.stamps);
  let updated = false;

  // Evaluate Regional Badges
  const regions: { name: string; badgeId: BadgeWilayah }[] = [
    { name: "Sumatera", badgeId: "Sumatra Seeker" },
    { name: "Jawa", badgeId: "Java Heritage Keeper" },
    { name: "Kalimantan", badgeId: "Borneo Nature Guardian" },
    { name: "Sulawesi", badgeId: "Celebes Voyager" },
    { name: "Bali dan Nusa Tenggara", badgeId: "Bali-Nusa Wanderer" },
    { name: "Maluku", badgeId: "Maluku Spice Explorer" },
    { name: "Papua", badgeId: "Papua Wonder Seeker" }
  ];

  for (const region of regions) {
    if (newBadges.includes(region.badgeId)) continue;
    
    const provsInRegion = provinceMapData.filter(prov => prov.region === region.name);
    const allCompleted = provsInRegion.length > 0 && provsInRegion.every(prov => completedSet.has(prov.id));
    
    if (allCompleted) {
      newBadges.push(region.badgeId);
      newAchievements.push({
        id: `badge-${region.badgeId}-${Date.now()}`,
        type: "badge",
        referenceId: region.badgeId,
        unlockedAt: new Date().toISOString(),
        source: "Badge Evaluator"
      });
      p.xp += 50; // Extra XP for region badge
      updated = true;
    }
  }

  // Evaluate Indonesia Complete Explorer
  if (!newBadges.includes("Indonesia Complete Explorer")) {
    if (completedSet.size === 38) {
      newBadges.push("Indonesia Complete Explorer");
      newAchievements.push({
        id: `badge-complete-${Date.now()}`,
        type: "badge",
        referenceId: "Indonesia Complete Explorer",
        unlockedAt: new Date().toISOString(),
        source: "Badge Evaluator"
      });
      p.xp += 200;
      updated = true;
    }
  }

  if (updated) {
    p.badges = newBadges;
    p.achievements = newAchievements;
  }

  return p;
}

export function getBadgeAsset(badgeId: string): string | undefined {
  const badge = BADGE_REGISTRY.find(b => b.id === badgeId);
  return badge?.asset;
}
