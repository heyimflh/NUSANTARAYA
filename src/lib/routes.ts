import { isValidProvinceId } from "@/data/provinces/provinceIds";

export const APP_ROUTES = {
  home: "/",
  explore: "/explore",
  passportSection: "/explore#passport-progress",
  routes: "/routes",
} as const;

export const ROUTE_AVAILABILITY = {
  "/": true,
  "/explore": true,
  "/routes": true,
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

export function getInternalPathname(href: string): string {
  try {
    if (href.startsWith("http://") || href.startsWith("https://")) {
      return "";
    }
    
    let path = href;
    
    // Explicitly allow specific hash routing to pass through
    if (path.startsWith("/explore#")) {
      return path;
    }
    
    const hashIndex = path.indexOf("#");
    if (hashIndex !== -1) {
      path = path.slice(0, hashIndex);
    }
    
    const queryIndex = path.indexOf("?");
    if (queryIndex !== -1) {
      path = path.slice(0, queryIndex);
    }
    
    return path;
  } catch {
    return "";
  }
}

export function isRouteAvailable(href: string): boolean {
  const pathname = getInternalPathname(href);
  if (!pathname) return false;

  if (pathname.startsWith("/provinsi/")) {
    const slug = pathname.slice("/provinsi/".length);
    return isValidProvinceId(slug);
  }
  
  if (pathname.startsWith("/explore#")) return true;
  
  return ROUTE_AVAILABILITY[pathname as keyof typeof ROUTE_AVAILABILITY] === true;
}
