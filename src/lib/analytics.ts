/**
 * NUSANTARAYA — Central Analytics Abstraction
 *
 * Lightweight, zero-dependency analytics layer.
 * In development: logs to console.
 * In production: dispatches CustomEvents for external providers
 * (Vercel Analytics, Plausible, Google Analytics, etc.) to listen to.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("route_planner_started", { source: "form" });
 */

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | null | undefined | string[];
}

/**
 * Track a named analytics event with an optional payload.
 * - Development: logs to console for debugging.
 * - Production: dispatches a `nusantaraya:analytics` CustomEvent
 *   on `window` so any analytics provider can subscribe.
 */
export function trackEvent(name: string, payload?: AnalyticsPayload): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.debug(`[analytics] ${name}`, payload ?? "");
    return;
  }

  // Production: fire a custom event that any analytics provider can listen to.
  // Example listener: window.addEventListener("nusantaraya:analytics", (e) => { ... })
  try {
    window.dispatchEvent(
      new CustomEvent("nusantaraya:analytics", {
        detail: { name, payload, timestamp: Date.now() },
      })
    );
  } catch {
    // Silently ignore — analytics should never break the app.
  }
}
