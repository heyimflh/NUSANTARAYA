/**
 * Determines the preferred scroll behavior based on user's system preferences.
 * Returns 'auto' (instant) if prefers-reduced-motion is true, otherwise 'smooth'.
 */
export function getPreferredScrollBehavior(): ScrollBehavior {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return "auto";
  }
  return "smooth";
}

/**
 * Safely scrolls an element into view, respecting reduced motion preferences.
 */
export function scrollElementIntoView(
  el: HTMLElement | Element,
  options: ScrollIntoViewOptions = {}
) {
  const behavior = getPreferredScrollBehavior();
  el.scrollIntoView({
    ...options,
    behavior,
  });
}
