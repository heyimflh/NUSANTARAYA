export const APP_ROUTES = {
  home: "/",
  explore: "/explore",
  passportSection: "/explore#passport-progress",
  routes: "/routes",
} as const;

export const ROUTE_AVAILABILITY = {
  "/": true,
  "/explore": true,
  "/routes": false,
  "/archive": false,
  "/rasa": false,
  "/nusarasa": false,
  "/rani": false,
  "/future": false,
  "/passport": false,
  "/aksara": false,
  "/jalur-rempah": false,
  "/events": false,
  "/tourist": false,
  "/demo": false,
  "/provinsi": false,
  "/about": false,
  "/sources": false,
  "/roadmap": false,
  "/credits": false,
  "/contact": false,
  "/privacy": false,
  "/terms": false,
  "/cerita": false,
} as const;

export function getProvinceAtlasRoute(slug: string) {
  return `/provinsi/${slug}`;
}

export function isRouteAvailable(route: string): boolean {
  if (route.startsWith("/provinsi/") && route !== "/provinsi") return true;
  if (route.startsWith("/explore#")) return true;
  return ROUTE_AVAILABILITY[route as keyof typeof ROUTE_AVAILABILITY] === true;
}
