/**
 * NUSANTARAYA — Centralized Error & Logging Monitor
 *
 * All application-level errors, warnings, and debug logs should
 * go through these functions. In production, they can be wired
 * to Sentry, Datadog, or any monitoring provider.
 *
 * Usage:
 *   import { reportAppError, reportAppWarning, logDebug } from "@/lib/errorMonitor";
 *   reportAppError(new Error("something failed"), { component: "MapPreviewCard" });
 *   reportAppWarning("Unresolved action", { action: "foo" });
 */

/**
 * Report an application error.
 * Development: logs to console.error.
 * Production: adapter point for Sentry, Datadog, etc.
 */
export function reportAppError(error: Error, context?: Record<string, unknown>): void {
  if (process.env.NODE_ENV === "development") {
     
    console.error("[AppError]", error, context);
  } else {
    // Production adapter — wire to Sentry.captureException, etc.
    // Example: Sentry.captureException(error, { extra: context });
  }
}

/**
 * Report a non-critical warning.
 * Development: logs to console.warn.
 * Production: adapter point for monitoring provider.
 */
export function reportAppWarning(message: string, context?: Record<string, unknown>): void {
  if (process.env.NODE_ENV === "development") {
     
    console.warn("[AppWarning]", message, context);
  } else {
    // Production adapter — wire to monitoring provider if needed.
  }
}

/**
 * Dev-only debug logging. Complete no-op in production.
 */
export function logDebug(message: string, ...args: unknown[]): void {
  if (process.env.NODE_ENV === "development") {
     
    console.debug("[Debug]", message, ...args);
  }
}
