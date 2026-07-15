import { PassportData } from "../src/lib/types";

// A mock version of computeLevel from app-context.tsx
function computeLevel(stampCount: number): string {
  if (stampCount >= 36) return "Pahlawan Nusantara";
  if (stampCount >= 26) return "Penjaga Warisan";
  if (stampCount >= 16) return "Pengembara Sejati";
  if (stampCount >= 6) return "Petualang Nusantara";
  return "Penjelajah Baru";
}

// A mock version of the passport updater to verify logic
class PassportStore {
  public data: PassportData = {
    version: 2,
    userId: "local",
    stamps: [],
    startedProvinces: [],
    plannedProvinces: [],
    badges: [],
    achievements: [],
    xp: 0,
    level: "Penjelajah Baru",
    completedQuizzes: [],
    savedRoutes: [],
  };

  completeProvince(provinceId: string) {
    if (this.data.stamps.includes(provinceId)) return;
    
    const stamps = [...this.data.stamps, provinceId];
    this.data = {
      ...this.data,
      stamps,
      startedProvinces: this.data.startedProvinces?.filter(id => id !== provinceId) || [],
      plannedProvinces: this.data.plannedProvinces?.filter(id => id !== provinceId) || [],
      xp: this.data.xp + 10,
      level: computeLevel(stamps.length)
    };
  }

  startProvince(provinceId: string) {
    if (this.data.stamps.includes(provinceId)) return;
    if (this.data.startedProvinces?.includes(provinceId)) return;

    const startedProvinces = [...(this.data.startedProvinces || []), provinceId];
    this.data = {
      ...this.data,
      startedProvinces,
      plannedProvinces: this.data.plannedProvinces?.filter(id => id !== provinceId) || []
    };
  }

  planProvince(provinceId: string) {
    if (this.data.stamps.includes(provinceId)) return;
    if (this.data.startedProvinces?.includes(provinceId)) return;
    if (this.data.plannedProvinces?.includes(provinceId)) return;

    this.data = {
      ...this.data,
      plannedProvinces: [...(this.data.plannedProvinces || []), provinceId]
    };
  }
}

function runTests() {
  const store = new PassportStore();
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

  console.log("Running Passport Logic Tests...");
  
  // Test 1: Plan a province
  store.planProvince("bali");
  assert(store.data.plannedProvinces?.includes("bali") === true, "bali should be planned");
  assert(store.data.startedProvinces?.includes("bali") === false, "bali should not be started");
  assert(store.data.stamps.includes("bali") === false, "bali should not be completed");

  // Test 2: Start a province (should move from planned to started)
  store.startProvince("bali");
  assert(store.data.plannedProvinces?.includes("bali") === false, "bali should be removed from planned");
  assert(store.data.startedProvinces?.includes("bali") === true, "bali should be in started");
  
  // Test 3: Complete a province (should move from started to stamps and add XP)
  const previousXp = store.data.xp;
  store.completeProvince("bali");
  assert(store.data.startedProvinces?.includes("bali") === false, "bali should be removed from started");
  assert(store.data.stamps.includes("bali") === true, "bali should be in stamps");
  assert(store.data.xp === previousXp + 10, "XP should increase by 10");

  // Test 4: Idempotency (completing again should do nothing)
  store.completeProvince("bali");
  assert(store.data.xp === previousXp + 10, "XP should not increase on duplicate completion");

  // Test 5: Can't plan or start an already completed province
  store.planProvince("bali");
  assert(store.data.plannedProvinces?.includes("bali") === false, "Should not be able to plan a completed province");
  store.startProvince("bali");
  assert(store.data.startedProvinces?.includes("bali") === false, "Should not be able to start a completed province");

  console.log(`\nTests finished: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

runTests();
