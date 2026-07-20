import React from "react";
import { ItineraryDay } from "@/lib/routes/itinerary/routeItinerarySchema";
import { clsx } from "clsx";

interface ItineraryOverviewRailProps {
  days: ItineraryDay[];
  activeDay: number;
  onDayClick: (dayNumber: number) => void;
}

export function ItineraryOverviewRail({ days, activeDay, onDayClick }: ItineraryOverviewRailProps) {
  return (
    <div className="flex flex-col gap-2 relative mt-2 -mx-4 px-4 lg:mx-0 lg:px-0">
      {/* Decorative vertical line */}
      <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E8E0CE] via-[#E8E0CE] to-transparent aria-hidden='true' z-0 hidden lg:block" />

      <ol className="relative z-10 flex lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 snap-x hide-scrollbar">
        {days.map((day) => {
          const isActive = day.dayNumber === activeDay;
          return (
            <li key={day.id} className="snap-start min-w-[240px] sm:min-w-[280px] lg:min-w-0 shrink-0">
              <button
                onClick={() => onDayClick(day.dayNumber)}
                className={clsx(
                  "w-full flex items-start gap-5 p-5 rounded-2xl text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]",
                  isActive
                    ? "bg-[#FFFDF8] border border-[#C9A84C] shadow-[0_8px_24px_rgba(201,168,76,0.12)] -translate-y-0.5 lg:-translate-y-0 lg:translate-x-1"
                    : "bg-transparent border border-transparent hover:bg-[#F8F4EA] hover:border-[#E8E0CE]"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                <div
                  className={clsx(
                    "flex flex-col items-center justify-center min-w-[48px] h-[52px] rounded-xl transition-colors duration-300",
                    isActive ? "bg-[#C9A84C] text-white shadow-sm" : "bg-[#F8F4EA] text-[#5C6470]"
                  )}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-80 mb-0.5">Hari</span>
                  <span className="font-playfair font-bold text-[20px] leading-none">{day.dayNumber}</span>
                </div>
                <div className="flex flex-col gap-1.5 overflow-hidden pt-1">
                  <span className={clsx(
                    "font-bold text-[16px] truncate transition-colors duration-300",
                    isActive ? "text-[#0D1B2A]" : "text-[#4A5568]"
                  )}>
                    {day.theme}
                  </span>
                  <span className="text-[13px] font-medium tracking-wide text-[#C9A84C] uppercase truncate">
                    {day.cityOrCluster}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
