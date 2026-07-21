import { FutureSignal } from "@/types/future";

export function validateFutureSignal(signal: FutureSignal): string[] {
  const errors: string[] = [];
  if (!signal.id) errors.push("Missing id");
  if (!signal.slug) errors.push("Missing slug");
  if (!signal.themeIds || signal.themeIds.length === 0) errors.push(`[${signal.id}] Missing themeIds`);
  if (!signal.provinceIds || signal.provinceIds.length === 0) errors.push(`[${signal.id}] Missing provinceIds`);
  if (!signal.regionIds || signal.regionIds.length === 0) errors.push(`[${signal.id}] Missing regionIds`);
  if (!signal.localeContent?.id?.title) errors.push(`[${signal.id}] Missing ID title`);
  if (!signal.localeContent?.id?.summary) errors.push(`[${signal.id}] Missing ID summary`);
  if (signal.status === "published" && (!signal.sourceRefs || signal.sourceRefs.length === 0)) {
    errors.push(`[${signal.id}] Published signal must have sourceRefs`);
  }
  if (signal.signalStatus === "official-target" && (!signal.sourceRefs || signal.sourceRefs.length === 0)) {
    errors.push(`[${signal.id}] Official target must have sourceRefs`);
  }
  return errors;
}

export function validateAllFutureSignals(signals: FutureSignal[]): string[] {
  const allErrors: string[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const signal of signals) {
    if (ids.has(signal.id)) allErrors.push(`Duplicate ID: ${signal.id}`);
    ids.add(signal.id);

    if (slugs.has(signal.slug)) allErrors.push(`Duplicate slug: ${signal.slug}`);
    slugs.add(signal.slug);

    allErrors.push(...validateFutureSignal(signal));
  }

  return allErrors;
}
