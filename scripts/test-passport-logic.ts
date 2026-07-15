import { 
  DEFAULT_PASSPORT,
  normalizePassportData,
  planProvinceTransition,
  startProvinceTransition,
  completeProvinceTransition,
  completeQuizTransition,
  completeChapterTransition,
  saveRouteTransition,
  resetPassportTransition,
  computeLevel
} from "../src/lib/passport/transitions";
import { PassportData } from "../src/lib/types";

function runTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, message: string) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      failed++;
    }
  }

  console.log("Running Comprehensive Passport Logic Tests...");
  let passport = DEFAULT_PASSPORT;

  // 1. Initial State & Normalization
  passport = normalizePassportData({});
  assert(passport.version === 3, "Version is 3");
  assert(passport.level === "Penjelajah Baru", "Initial level is Penjelajah Baru");
  assert(passport.xp === 0, "Initial XP is 0");

  // 2. Legacy Migration
  const legacyPassport = normalizePassportData({
    stamps: ["13", "34", "invalid-slug", ""], // Sumatera Barat, DI Yogyakarta, invalid
    startedProvinces: ["51", "123"],
    plannedProvinces: ["53", "not-a-province"],
    completedQuizzes: ["13", "unknown"],
    savedRoutes: ["route-1", "", "  "],
    xp: -10
  });
  assert(legacyPassport.stamps.includes("sumatera-barat"), "Migrated 13 to sumatera-barat");
  assert(!legacyPassport.stamps.includes("invalid-slug"), "Invalid stamp removed");
  assert(legacyPassport.startedProvinces?.includes("bali") === true, "Migrated 51 to bali");
  assert(legacyPassport.startedProvinces?.includes("123") === false, "Numeric runtime ID removed from started");
  assert(legacyPassport.plannedProvinces?.includes("nusa-tenggara-timur") === true, "Migrated 53 to nusa-tenggara-timur");
  assert(legacyPassport.plannedProvinces?.includes("not-a-province") === false, "Unknown ID removed from planned");
  assert(legacyPassport.completedQuizzes.includes("sumatera-barat"), "Valid quiz kept");
  assert(!legacyPassport.completedQuizzes.includes("unknown"), "Unknown quiz removed");
  assert(legacyPassport.savedRoutes.includes("route-1"), "Valid route kept");
  assert(legacyPassport.savedRoutes.length === 1, "Empty/whitespace routes removed");
  assert(legacyPassport.xp === 0, "Negative XP becomes 0");

  // NaN XP test
  const nanXpPassport = normalizePassportData({ xp: NaN } as unknown as Partial<PassportData>);
  assert(nanXpPassport.xp === 0, "NaN XP becomes 0");

  // 3. Disjoint Sets Normalization
  const messyPassport = normalizePassportData({
    stamps: ["bali", "jawa-timur"],
    startedProvinces: ["bali", "jawa-barat"],
    plannedProvinces: ["jawa-timur", "jawa-barat", "banten"]
  });
  assert(!messyPassport.startedProvinces?.includes("bali"), "Completed bali removed from started");
  assert(!messyPassport.plannedProvinces?.includes("jawa-timur"), "Completed jawa-timur removed from planned");
  assert(!messyPassport.plannedProvinces?.includes("jawa-barat"), "Started jawa-barat removed from planned");

  // 4. Invalid IDs in transitions
  const p1 = planProvinceTransition(passport, "invalid-slug");
  assert(p1 === passport, "Unknown planned ID rejected");
  const p2 = startProvinceTransition(passport, " 123 ");
  assert(p2 === passport, "Numeric ID runtime rejected in start");
  const p3 = completeProvinceTransition(passport, "    ");
  assert(p3 === passport, "Whitespace ID rejected in complete");
  const p4 = completeQuizTransition(passport, "not-a-province");
  assert(p4 === passport, "Unknown quiz ID rejected");

  // 5. Chapter edge cases
  const c1 = completeChapterTransition(passport, "not-a-province", "budaya");
  assert(c1 === passport, "Unknown chapter province rejected");
  const c2 = completeChapterTransition(passport, "bali", "");
  assert(c2 === passport, "Empty chapter rejected");
  const c3 = completeChapterTransition(passport, "bali", "   ");
  assert(c3 === passport, "Whitespace chapter rejected");

  const pChapter = completeChapterTransition(passport, "bali", "budaya");
  assert(pChapter.completedChapters?.["bali"]?.includes("budaya") === true, "Valid chapter accepted");
  const pChapterDup = completeChapterTransition(pChapter, "bali", "budaya");
  assert(pChapterDup === pChapter, "Duplicate chapter rejected (returns same ref)");

  // 6. Chapter migration
  const chapMig = normalizePassportData({
    completedChapters: {
      "51": ["budaya", "", "  "],
      "bali": ["sejarah"],
      "unknown": ["test"],
      "34": ["ringkasan"]
    }
  });
  assert(chapMig.completedChapters?.["bali"]?.length === 2, "Canonical and numeric keys merged");
  assert(chapMig.completedChapters?.["bali"]?.includes("budaya") === true, "Numeric key chapter kept");
  assert(chapMig.completedChapters?.["bali"]?.includes("sejarah") === true, "Canonical key chapter kept");
  assert(chapMig.completedChapters?.["bali"]?.includes("") === false, "Empty chapter removed during migration");
  assert(chapMig.completedChapters?.["unknown"] === undefined, "Unknown completedChapters key removed");
  assert(chapMig.completedChapters?.["di-yogyakarta"]?.includes("ringkasan") === true, "Numeric chapter province key migrated");

  // 7. Route edge cases
  const r1 = saveRouteTransition(passport, "");
  assert(r1 === passport, "Empty route ID rejected");
  const r2 = saveRouteTransition(passport, "   ");
  assert(r2 === passport, "Whitespace route ID rejected");
  
  let pRoute = saveRouteTransition(passport, "route-1", ["bali", "jawa-timur", "bali", "invalid", "123"]);
  assert(pRoute.savedRoutes.includes("route-1"), "Route saved");
  assert(pRoute.plannedProvinces?.filter(p => p === "bali").length === 1, "Duplicate stops removed");
  assert(pRoute.plannedProvinces?.includes("invalid") === false, "Invalid stops do not enter planned");
  assert(pRoute.plannedProvinces?.includes("123") === false, "Numeric stops do not enter planned");
  
  const xpBeforeRouteSync = pRoute.xp;
  pRoute = saveRouteTransition(pRoute, "route-1", ["bali", "banten"]);
  assert(pRoute.xp === xpBeforeRouteSync, "Route existing gives no XP");
  assert(pRoute.plannedProvinces?.includes("banten") === true, "Route existing syncs a new valid stop");

  // 8. Normal Flow
  passport = planProvinceTransition(passport, "bali");
  assert(passport.plannedProvinces?.includes("bali") === true, "bali is planned");
  passport = startProvinceTransition(passport, "bali");
  assert(passport.startedProvinces?.includes("bali") === true, "bali is started");
  assert(passport.plannedProvinces?.includes("bali") === false, "bali removed from planned");
  passport = completeProvinceTransition(passport, "bali");
  assert(passport.stamps.includes("bali") === true, "bali is completed");
  assert(passport.startedProvinces?.includes("bali") === false, "bali removed from started");
  assert(passport.xp === 10, "XP increased by 10");

  passport = completeQuizTransition(passport, "jawa-tengah");
  assert(passport.completedQuizzes.includes("jawa-tengah"), "Quiz recorded");
  assert(passport.stamps.includes("jawa-tengah"), "Province completed via quiz");
  assert(passport.xp === 40, "XP increased by 30 (20 quiz + 10 province)");
  const xpBeforeDuplicateQuiz = passport.xp;
  passport = completeQuizTransition(passport, "jawa-tengah");
  assert(passport.xp === xpBeforeDuplicateQuiz, "No duplicate XP for same quiz");

  // 9. Compute Level
  assert(computeLevel(0) === "Penjelajah Baru", "Level 0");
  assert(computeLevel(5) === "Penjelajah Baru", "Level 5");
  assert(computeLevel(6) === "Petualang Nusantara", "Level 6");
  assert(computeLevel(15) === "Petualang Nusantara", "Level 15");
  assert(computeLevel(16) === "Pengembara Sejati", "Level 16");
  assert(computeLevel(25) === "Pengembara Sejati", "Level 25");
  assert(computeLevel(26) === "Penjaga Warisan", "Level 26");
  assert(computeLevel(35) === "Penjaga Warisan", "Level 35");
  assert(computeLevel(36) === "Pahlawan Nusantara", "Level 36");
  assert(computeLevel(100) === "Pahlawan Nusantara", "Level 100");

  // 10. Reset Passport
  const pReset = resetPassportTransition();
  assert(pReset.stamps.length === 0, "Stamps reset");
  assert(pReset.xp === 0, "XP reset");
  assert(pReset.level === "Penjelajah Baru", "Level reset");
  assert(pReset.savedRoutes.length === 0, "Routes reset");
  assert(pReset.plannedProvinces?.length === 0, "Planned reset");
  assert(pReset.startedProvinces?.length === 0, "Started reset");
  assert(pReset.completedQuizzes.length === 0, "Quizzes reset");
  assert(Object.keys(pReset.completedChapters || {}).length === 0, "Chapters reset");

  console.log(`\nTests finished: ${passed} passed, ${failed} failed. Total assertions: ${passed + failed}`);
  if (failed > 0) process.exit(1);
}

runTests();
