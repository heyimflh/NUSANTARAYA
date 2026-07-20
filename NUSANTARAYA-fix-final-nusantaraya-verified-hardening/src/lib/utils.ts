import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility: merge Tailwind classes safely (handles conflicts).
 * Usage: cn("px-4 py-2", conditional && "bg-gold", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
