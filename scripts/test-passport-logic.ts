import assert from 'assert';
import { PassportData } from '../src/lib/types/index';

// We extract the pure state transitions from app-context.tsx to test them isolated
const computeLevel = (stampCount: number): string => {
  if (stampCount >= 36) return "Pahlawan Nusantara";
  if (stampCount >= 26) return "Penjaga Warisan";
  if (stampCount >= 16) return "Pengembara Sejati";
  if (stampCount >= 6) return "Petualang Nusantara";
  return "Penjelajah Baru";
};

const planProvince = (p: PassportData, provinceId: string): PassportData => {
  if (p.stamps.includes(provinceId)) return p;
  if ((p.startedProvinces || []).includes(provinceId)) return p;
  const planned = p.plannedProvinces || [];
  if (planned.includes(provinceId)) return p;
  
  return {
    ...p,
    plannedProvinces: [...planned, provinceId],
  };
};

const startProvince = (p: PassportData, provinceId: string): PassportData => {
  if (p.stamps.includes(provinceId)) return p;
  const started = p.startedProvinces || [];
  if (started.includes(provinceId)) return p;
  
  return {
    ...p,
    startedProvinces: [...started, provinceId],
    plannedProvinces: (p.plannedProvinces || []).filter(id => id !== provinceId),
  };
};

const addStamp = (p: PassportData, provinceId: string): PassportData => {
  if (p.stamps.includes(provinceId)) return p;
  const stamps = [...p.stamps, provinceId];
  return {
    ...p,
    stamps,
    startedProvinces: (p.startedProvinces || []).filter(id => id !== provinceId),
    plannedProvinces: (p.plannedProvinces || []).filter(id => id !== provinceId),
    xp: p.xp + 10,
    level: computeLevel(stamps.length),
  };
};

// INITIAL STATE
let state: PassportData = {
  version: 1,
  userId: "test",
  stamps: [],
  startedProvinces: [],
  plannedProvinces: [],
  badges: [],
  xp: 0,
  level: "Penjelajah Baru",
  completedQuizzes: [],
  savedRoutes: [],
};

function runTests() {
  console.log("Running isolated tests for Passport Logic...");

  // 1. Idempotency `planProvince`
  state = planProvince(state, "aceh");
  assert.deepEqual(state.plannedProvinces, ["aceh"]);
  state = planProvince(state, "aceh"); // Duplicate
  assert.deepEqual(state.plannedProvinces, ["aceh"]); // Should remain same

  // 2. Planned -> Started
  state = startProvince(state, "aceh");
  assert.deepEqual(state.plannedProvinces, []);
  assert.deepEqual(state.startedProvinces, ["aceh"]);

  // 3. Idempotency `startProvince`
  state = startProvince(state, "aceh");
  assert.deepEqual(state.startedProvinces, ["aceh"]); // No duplicates

  // 4. `planProvince` ignores if already started
  state = planProvince(state, "aceh");
  assert.deepEqual(state.plannedProvinces, []);

  // 5. Started -> Completed (addStamp)
  state = addStamp(state, "aceh");
  assert.deepEqual(state.startedProvinces, []);
  assert.deepEqual(state.stamps, ["aceh"]);
  assert.equal(state.xp, 10);
  assert.equal(state.level, "Penjelajah Baru");

  // 6. Idempotency legacy `addStamp`
  state = addStamp(state, "aceh");
  assert.deepEqual(state.stamps, ["aceh"]);
  assert.equal(state.xp, 10); // Shouldn't add XP again

  // 7. `planProvince` and `startProvince` ignores if already completed
  state = planProvince(state, "aceh");
  state = startProvince(state, "aceh");
  assert.deepEqual(state.plannedProvinces, []);
  assert.deepEqual(state.startedProvinces, []);

  // 8. Level boundaries testing
  assert.equal(computeLevel(0), "Penjelajah Baru");
  assert.equal(computeLevel(5), "Penjelajah Baru");
  assert.equal(computeLevel(6), "Petualang Nusantara");
  assert.equal(computeLevel(15), "Petualang Nusantara");
  assert.equal(computeLevel(16), "Pengembara Sejati");
  assert.equal(computeLevel(25), "Pengembara Sejati");
  assert.equal(computeLevel(26), "Penjaga Warisan");
  assert.equal(computeLevel(35), "Penjaga Warisan");
  assert.equal(computeLevel(36), "Pahlawan Nusantara");
  assert.equal(computeLevel(38), "Pahlawan Nusantara");

  console.log("All unit tests passed!");
}

runTests();
