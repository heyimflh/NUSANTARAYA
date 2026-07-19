import { scrollElementIntoView } from "@/lib/utils/scroll";
import { ROUTE_SECTION_IDS, RouteSectionKey } from "./routeSections";

export function getRouteScrollBehavior(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? "auto" : "smooth";
}

export function navigateToRouteSection(key: RouteSectionKey): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  const sectionId = ROUTE_SECTION_IDS[key];
  const target = document.getElementById(sectionId);

  if (!target) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: getRouteScrollBehavior(prefersReducedMotion),
    block: "start",
  });

  const heading = target.querySelector<HTMLElement>("[data-route-section-heading]");
  if (heading) {
    heading.focus({ preventScroll: true });
  } else {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }

  return true;
}

