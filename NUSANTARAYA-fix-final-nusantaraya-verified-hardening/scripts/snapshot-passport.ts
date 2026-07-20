import * as fs from "fs";
import { DEFAULT_PASSPORT } from "../src/lib/passport/transitions";

function snapshotPassport() {
  if (!DEFAULT_PASSPORT) {
    console.error("Failed to load DEFAULT_PASSPORT.");
    process.exit(1);
  }

  const snapshot = {
    schemaVersion: "0.1.0",
    storageKeys: {
      passport: "nusantaraya_passport"
    },
    defaultPassport: DEFAULT_PASSPORT,
    supportedTransitions: [
      "unlockProvince",
      "completeRoute",
      "updateExperience"
    ],
    migrationRules: [],
    badgeDefinitions: [],
    levelDefinitions: [],
    savedRouteConstraints: { maxSavedRoutes: 20 },
    sourceFiles: ["src/lib/passport/transitions.ts"],
    passportTestAssertions: null
  };

  const jsonStr = JSON.stringify(snapshot, null, 2);
  fs.writeFileSync("passport.snapshot.json", jsonStr);
  fs.writeFileSync("passport.snapshot.md", "# Passport Snapshot\n" + jsonStr);
}

snapshotPassport();
