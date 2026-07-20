export function sanitizeRouteReturnTo(value: unknown): string {
  if (typeof value !== "string") return "/routes";
  
  try {
    // Basic validation against open redirects and external urls
    if (value.startsWith("//") || value.startsWith("http://") || value.startsWith("https://")) {
      return "/routes";
    }
    
    if (!value.startsWith("/routes")) {
      return "/routes";
    }
    
    return value;
  } catch (e) {
    return "/routes";
  }
}

interface AtlasHrefParams {
  provinceId: string;
  routeId: string;
  day: number;
  returnTo: string;
}

export function buildProvinceAtlasHref({ provinceId, routeId, day, returnTo }: AtlasHrefParams): string {
  const searchParams = new URLSearchParams();
  searchParams.set("from", "route");
  searchParams.set("routeId", routeId);
  searchParams.set("day", day.toString());
  
  const sanitizedReturnTo = sanitizeRouteReturnTo(returnTo);
  searchParams.set("returnTo", sanitizedReturnTo);
  
  return `/provinsi/${encodeURIComponent(provinceId)}?${searchParams.toString()}`;
}

