"use client";

/**
 * NUSANTARAYA — Route Map Skeleton
 * Section 6: Route Map + Transport Summary
 *
 * Loading skeleton that maintains layout stability while map model is being resolved.
 * Keeps aspect ratio and structure to prevent CLS.
 */

import React from "react";

export function RouteMapSkeleton() {
  return (
    <div
      className="w-full rounded-[32px] bg-[#FFFDF8] border border-[#E8E0CE] overflow-hidden"
      aria-label="Memuat peta rute…"
      role="status"
      aria-live="polite"
    >
      <div className="p-6 md:p-10 lg:p-12">
        {/* Header skeleton */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="h-4 w-28 rounded-full bg-[#E8E0CE] animate-pulse" />
          <div className="h-8 w-2/3 rounded-xl bg-[#E8E0CE] animate-pulse" />
          <div className="h-5 w-full max-w-xl rounded-lg bg-[#F0E9D8] animate-pulse" />
          <div className="h-4 w-96 rounded-full bg-[#F0E9D8] animate-pulse mt-1" />
        </div>

        {/* Workspace skeleton */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Map canvas skeleton */}
          <div className="flex-1 min-h-0">
            <div
              className="w-full rounded-3xl bg-[#F4EFE6] border border-[#E8E0CE] animate-pulse"
              style={{ aspectRatio: "16/7" }}
            >
              {/* Schematic placeholder nodes */}
              <div className="w-full h-full flex items-center justify-around px-8 py-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#D9CDBC] animate-pulse" />
                    <div className="h-3 w-16 rounded-full bg-[#D9CDBC] animate-pulse" />
                    <div className="h-2.5 w-12 rounded-full bg-[#E8E0CE] animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Accessible route list skeleton */}
            <div className="mt-4 flex flex-col gap-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-14 rounded-2xl bg-[#F4EFE6] border border-[#E8E0CE] animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Summary panel skeleton */}
          <div className="lg:w-[360px] xl:w-[400px] flex-shrink-0">
            <div className="flex flex-col gap-4">
              <div className="h-4 w-36 rounded-full bg-[#E8E0CE] animate-pulse" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-24 rounded-2xl bg-[#F4EFE6] border border-[#E8E0CE] animate-pulse"
                  />
                ))}
              </div>
              <div className="h-16 rounded-2xl bg-[#F4EFE6] animate-pulse" />
              <div className="h-4 w-36 rounded-full bg-[#E8E0CE] animate-pulse mt-2" />
              <div className="h-24 rounded-2xl bg-[#F4EFE6] border border-[#E8E0CE] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="px-6 md:px-10 lg:px-12 pb-6 text-[13px] text-[#8A94A6] font-medium">
        Menyiapkan peta rute dan ringkasan perpindahan…
      </div>
    </div>
  );
}
