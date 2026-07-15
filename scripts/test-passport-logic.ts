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

  // 1. Initial State & Normalization (5 assertions)
  passport = normalizePassportData({});
  assert(passport.version === 3, "Version is 3");
  assert(passport.level === "Penjelajah Baru", "Initial level is Penjelajah Baru");
  assert(passport.xp === 0, "Initial XP is 0");
  assert(Array.isArray(passport.stamps), "stamps is array");
  assert(typeof passport.completedChapters === "object", "completedChapters is object");

  // 2. Legacy Migration (3 assertions)
  const legacyPassport = normalizePassportData({
    stamps: ["13", "34"], // Sumatera Barat, DI Yogyakarta
    startedProvinces: ["51"], // Bali
    plannedProvinces: ["53"] // NTT
  });
  assert(legacyPassport.stamps.includes("sumatera-barat"), "Migrated 13 to sumatera-barat");
  assert(legacyPassport.startedProvinces?.includes("bali") === true, "Migrated 51 to bali");
  assert(legacyPassport.plannedProvinces?.includes("nusa-tenggara-timur") === true, "Migrated 53 to nusa-tenggara-timur");

  // 3. Disjoint Sets Normalization (3 assertions)
  const messyPassport = normalizePassportData({
    stamps: ["bali", "jawa-timur"],
    startedProvinces: ["bali", "jawa-barat"],
    plannedProvinces: ["jawa-timur", "jawa-barat", "banten"]
  });
  assert(!messyPassport.startedProvinces?.includes("bali"), "Completed bali removed from started");
  assert(!messyPassport.plannedProvinces?.includes("jawa-timur"), "Completed jawa-timur removed from planned");
  assert(!messyPassport.plannedProvinces?.includes("jawa-barat"), "Started jawa-barat removed from planned");

  // 4. Plan Province (3 assertions)
  passport = planProvinceTransition(passport, "bali");
  assert(passport.plannedProvinces?.includes("bali") === true, "bali is planned");
  assert(passport.startedProvinces?.includes("bali") === false, "bali not started");
  assert(passport.stamps.includes("bali") === false, "bali not completed");

  // 5. Start Province (3 assertions)
  passport = startProvinceTransition(passport, "bali");
  assert(passport.plannedProvinces?.includes("bali") === false, "bali removed from planned");
  assert(passport.startedProvinces?.includes("bali") === true, "bali is started");
  assert(passport.stamps.includes("bali") === false, "bali not completed");

  // 6. Complete Province (5 assertions)
  const previousXp = passport.xp;
  passport = completeProvinceTransition(passport, "bali");
  assert(passport.startedProvinces?.includes("bali") === false, "bali removed from started");
  assert(passport.plannedProvinces?.includes("bali") === false, "bali removed from planned");
  assert(passport.stamps.includes("bali") === true, "bali is in stamps");
  assert(passport.xp === previousXp + 10, "XP increased by 10");
  assert(passport.badges.length >= 0, "Badges array exists"); // Badge logic might give "Langkah Pertama"

  // 7. Idempotency of Completion (2 assertions)
  const xpAfterComplete = passport.xp;
  passport = completeProvinceTransition(passport, "bali");
  assert(passport.xp === xpAfterComplete, "XP not increased on duplicate complete");
  assert(passport.stamps.filter(s => s === "bali").length === 1, "No duplicate stamps");

  // 8. Completed province cannot be planned or started (2 assertions)
  passport = planProvinceTransition(passport, "bali");
  assert(passport.plannedProvinces?.includes("bali") === false, "Completed cannot be planned");
  passport = startProvinceTransition(passport, "bali");
  assert(passport.startedProvinces?.includes("bali") === false, "Completed cannot be started");

  // 9. Quizzes (3 assertions)
  const xpBeforeQuiz = passport.xp;
  passport = completeQuizTransition(passport, "jawa-tengah");
  assert(passport.completedQuizzes.includes("jawa-tengah"), "Quiz recorded");
  assert(passport.stamps.includes("jawa-tengah"), "Province completed via quiz");
  assert(passport.xp === xpBeforeQuiz + 30, "XP increased by 30 (20 quiz + 10 province)");

  // 10. Duplicate Quizzes (1 assertion)
  passport = completeQuizTransition(passport, "jawa-tengah");
  assert(passport.xp === xpBeforeQuiz + 30, "No duplicate XP for same quiz");

  // 11. Chapters (3 assertions)
  passport = completeChapterTransition(passport, "bali", "budaya");
  assert(passport.completedChapters?.["bali"]?.includes("budaya") === true, "Chapter recorded");
  passport = completeChapterTransition(passport, "bali", "budaya");
  assert(passport.completedChapters?.["bali"]?.length === 1, "No duplicate chapters");
  passport = completeChapterTransition(passport, "bali", "sejarah");
  assert(passport.completedChapters?.["bali"]?.length === 2, "Second chapter recorded");

  // 12. Save Route (5 assertions)
  const xpBeforeRoute = passport.xp;
  passport = saveRouteTransition(passport, "route-1", ["bali", "jawa-timur", "nusa-tenggara-barat"]);
  assert(passport.savedRoutes.includes("route-1"), "Route saved");
  assert(passport.xp === xpBeforeRoute + 15, "XP increased by 15 for new route");
  assert(!passport.plannedProvinces?.includes("bali"), "Completed bali not added to planned");
  assert(passport.plannedProvinces?.includes("jawa-timur") === true, "New stop jawa-timur added to planned");
  assert(passport.plannedProvinces?.includes("nusa-tenggara-barat") === true, "New stop ntb added to planned");

  // 13. Save Existing Route (2 assertions)
  passport = saveRouteTransition(passport, "route-1", ["bali", "jawa-timur", "nusa-tenggara-barat"]);
  assert(passport.xp === xpBeforeRoute + 15, "No XP for duplicate route save");
  assert(passport.savedRoutes.filter(r => r === "route-1").length === 1, "No duplicate routes");

  // 14. Compute Level (4 assertions)
  assert(computeLevel(0) === "Penjelajah Baru", "Level 0");
  assert(computeLevel(6) === "Petualang Nusantara", "Level 6");
  assert(computeLevel(16) === "Pengembara Sejati", "Level 16");
  assert(computeLevel(36) === "Pahlawan Nusantara", "Level 36");

  // 15. Reset Passport (4 assertions)
  passport = resetPassportTransition();
  assert(passport.stamps.length === 0, "Stamps reset");
  assert(passport.xp === 0, "XP reset");
  assert(passport.level === "Penjelajah Baru", "Level reset");
  assert(passport.savedRoutes.length === 0, "Routes reset");

  console.log(`\nTests finished: ${passed} passed, ${failed} failed. Total assertions: ${passed + failed}`);
  if (failed > 0) process.exit(1);
}

runTests();
