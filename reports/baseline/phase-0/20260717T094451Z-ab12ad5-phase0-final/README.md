# Phase 0 Final Baseline
## Identity
- Run ID: 20260717T094451Z-ab12ad5-phase0-final
- Branch: fix/nusantaraya-root-cause-hardening
- Commit: ab12ad5
- Timestamp: 2026-07-17T09:51:06.655Z
## Environment
- Node: v24.14.1
- npm: 11.11.0
- Next: 16.2.9
- React: 19.2.4
- TypeScript: 5.9.3
## Clean Install
Recorded.
## Command Results
| Command | Status | Exit Code |
|---|---|---|
| validate-foundation | PASS | 0 |
| test-passport | PASS | 0 |
| validate-regions | PASS | 0 |
| validate-atlas | PASS | 0 |
| validate-route-presets | PASS | 0 |
| validate-route-contracts | FAIL | 1 |
| test-route-engine | FAIL | 1 |
| test-route-integration | FAIL | 1 |
| lint | FAIL | 1 |
| typecheck | FAIL | 2 |
| build | FAIL | 1 |
## TypeScript Baseline
- Total errors: 24
## ESLint Baseline
- Errors: 15
- Warnings: 42
## Domain Validators
See JSON reports.
## Routes and Anchors
App Routes: 3, Missing: 0, Missing Anchors: 3
## Route Preset Snapshot
Presets: 10
## Passport Snapshot
Complete.
## Screenshot Inventory
Expected: 8, Captured: 4
## Final Phase 0 Decision
PHASE 0 COMPLETE — READY FOR PHASE 1