export function reportAppError(error: Error, context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    // In development, log the error clearly
    console.error("[AppError]", error, context);
  } else {
    // In production, this would be an adapter for Sentry, Datadog, etc.
    // Example: Sentry.captureException(error, { extra: context });
  }
}
