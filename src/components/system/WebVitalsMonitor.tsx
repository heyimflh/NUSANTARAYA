"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitalsMonitor() {
  useReportWebVitals(() => {
    if (process.env.NODE_ENV === "development") {
      // console.log(metric);
    }
  });

  return null;
}
