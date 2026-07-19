import { APP_ROUTES } from "../src/lib/routes";

console.log("Starting Passport Navigation Test...");
if (APP_ROUTES.passportSection === "/explore#passport-progress") {
  console.log("? Passport Navigation is valid");
} else {
  console.log("? Passport Navigation is invalid");
  process.exit(1);
}
console.log("Passport Navigation Test Complete. PASS");

