export type BackgroundVariant = "primary" | "explore";

export function getBackgroundVariant(pathname: string): BackgroundVariant {
  if (pathname === "/") return "primary";
  if (pathname === "/explore") return "explore";
  if (pathname === "/routes") return "primary";
  
  if (pathname.startsWith("/archive")) return "explore";
  if (pathname.startsWith("/rasa")) return "explore";
  
  if (pathname.startsWith("/passport")) return "primary";
  if (pathname.startsWith("/provinsi")) return "primary";
  
  // Default fallback
  return "primary";
}

export const BACKGROUND_ASSETS: Record<BackgroundVariant, { desktop: string; mobile: string }> = {
  primary: {
    desktop: "/assets/background-primary.webp",
    mobile: "/assets/background-primary-mobile.webp"
  },
  explore: {
    desktop: "/assets/background/background-explore-dekstop.webp", // Note: dekstop is intentional based on project file names
    mobile: "/assets/background/background-explore-mobile.webp"
  }
};
