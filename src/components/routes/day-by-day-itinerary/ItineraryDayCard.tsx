import { navigateToRouteSection } from "@/lib/routes/navigateToRouteSection";
import { buildProvinceAtlasHref } from "@/lib/routes/buildProvinceAtlasHref";
import { useRouter } from "next/navigation";
import { usePassport } from "@/context/app-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Map, Settings2, Clock, Utensils, Navigation, BookOpen } from "lucide-react";
import { ItineraryDay } from "@/lib/routes/itinerary/routeItinerarySchema";

interface ItineraryDayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onToggle: () => void;  /** Called when user clicks "Lihat Rute di Peta" */
  onViewInMap?: () => void;
  routeId: string;
}

export function ItineraryDayCard({ day, isExpanded, onToggle, onViewInMap, routeId }: ItineraryDayCardProps) {
  const router = useRouter();
  const { planProvince } = usePassport();

  const handleOpenAtlas = async (provinceId: string) => {
    planProvince(provinceId);
    const href = buildProvinceAtlasHref({
      provinceId,
      routeId,
      day: day.dayNumber,
      returnTo: window.location.pathname + window.location.search
    });
    router.push(href);
  };

  return (
    <article
      id={`itinerary-day-${day.dayNumber}`}
      className={clsx(
        "flex flex-col rounded-[28px] transition-all duration-500 overflow-hidden relative",
        isExpanded 
          ? "bg-[#FFFDF8] shadow-[0_12px_40px_rgba(201,168,76,0.08)] border border-[#E8E0CE]" 
          : "bg-white border border-[#E8E0CE] hover:shadow-[0_8px_24px_rgba(13,27,42,0.04)] hover:border-[#D9CDBC]"
      )}
    >
      {/* Accent Ribbon when expanded */}
      <div 
        className={clsx(
          "absolute top-0 left-0 right-0 h-1 transition-colors duration-500",
          isExpanded ? "bg-[#C9A84C]" : "bg-transparent"
        )} 
      />

      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`day-content-${day.id}`}
        className="flex items-center justify-between p-6 md:px-10 md:py-8 w-full text-left group outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-inset"
      >
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center justify-center min-w-[64px] h-[72px] rounded-2xl bg-[#F8F4EA] text-[#C9A84C] border border-[#E8E0CE]/50 group-hover:bg-[#F4EFE6] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#C9A84C]/5 rounded-bl-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-0.5">Hari</span>
            <span className="text-[32px] font-playfair font-bold leading-none">{day.dayNumber}</span>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <h4 className="font-playfair text-[24px] md:text-[28px] font-bold text-[#0D1B2A] leading-tight group-hover:text-[#C9A84C] transition-colors">
              {day.title}
            </h4>
            <div className="flex items-center gap-3 text-[14px] text-[#5C6470] font-medium tracking-wide">
              <span className="text-[#C9A84C]">{day.cityOrCluster}</span>
              <span className="w-1 h-1 rounded-full bg-[#E8E0CE]" />
              <span>{day.theme}</span>
            </div>
          </div>
        </div>
        <div 
          className={clsx(
            "flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500",
            isExpanded 
              ? "bg-[#C9A84C] border-[#C9A84C] text-white rotate-180" 
              : "bg-transparent border-[#E8E0CE] text-[#C9A84C] group-hover:bg-[#F8F4EA]"
          )}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`day-content-${day.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} // smooth ease-out
          >
            <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 flex flex-col">
              
              {/* Day Summary */}
              <p className="text-[16px] md:text-[18px] text-[#4A5568] leading-relaxed max-w-3xl font-inter mb-10">
                {day.summary}
              </p>

              {/* Timeline Container */}
              <div className="flex flex-col relative pl-4 md:pl-8">
                {/* Main vertical connector line */}
                <div className="absolute left-[27px] md:left-[43px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E8E0CE] via-[#E8E0CE] to-transparent rounded-full" />

                {day.segments.map((segment, idx) => (
                  <div key={segment.id} className="flex gap-6 md:gap-10 relative mb-8 last:mb-0 group/segment">
                    
                    {/* Time / DayPart indicator */}
                    <div className="w-16 shrink-0 flex flex-col items-end pt-1 relative z-10">
                      <div className="text-[12px] font-bold text-[#8A94A6] uppercase tracking-widest bg-[#FFFDF8] py-1 pl-2">
                        {segment.dayPart === "morning" ? "Pagi" : segment.dayPart === "midday" ? "Siang" : segment.dayPart === "afternoon" ? "Sore" : "Malam"}
                      </div>
                      {/* Node circle */}
                      <div className={clsx(
                        "absolute -right-[7px] md:-right-[23px] top-[10px] w-4 h-4 rounded-full border-[3px] border-[#FFFDF8] shadow-sm transition-colors duration-300",
                        segment.type === "activity" ? "bg-[#C9A84C]" : segment.type === "transfer" ? "bg-[#E29578]" : "bg-[#A3B1C6]"
                      )} />
                    </div>

                    {/* Segment Content */}
                    <div className={clsx(
                      "flex-1 rounded-2xl p-6 transition-colors duration-300",
                      segment.type === "activity" 
                        ? "bg-white hover:bg-[#F8F4EA]/50 border border-[#E8E0CE]/60" 
                        : segment.type === "transfer"
                        ? "bg-[#FFF9F0] border border-[#F2D7B6]"
                        : "bg-[#F4F7F9] border border-[#DCE4EC]"
                    )}>
                      {segment.type === "activity" && (
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <h5 className="font-playfair font-bold text-[20px] text-[#0D1B2A] leading-tight group-hover/segment:text-[#C9A84C] transition-colors">
                              {segment.title}
                            </h5>
                            {segment.timeLabel && (
                              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F8F4EA] text-[#C9A84C] text-[12px] font-bold rounded-full whitespace-nowrap shrink-0">
                                <Clock className="w-3.5 h-3.5" />
                                {segment.timeLabel}
                              </span>
                            )}
                          </div>
                          <p className="text-[15px] text-[#5C6470] leading-relaxed">{segment.summary}</p>
                        </div>
                      )}
                      
                      {segment.type === "transfer" && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2.5 text-[#E29578] font-bold text-[14px] uppercase tracking-wider">
                            <Navigation className="w-4 h-4" />
                            <span>Perpindahan · {segment.modeLabel || "Perjalanan"}</span>
                          </div>
                          <p className="text-[15px] text-[#5C6470] leading-relaxed">{segment.note}</p>
                        </div>
                      )}
                      
                      {(segment.type === "rest" || segment.type === "flex") && (
                        <div className="flex flex-col gap-1.5">
                          <div className="font-bold text-[14px] text-[#6B7280] uppercase tracking-wider">{segment.label}</div>
                          {segment.note && <p className="text-[15px] text-[#5C6470] leading-relaxed">{segment.note}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Editorial Callout: Culinary / Etiquette */}
              {day.culinaryMoments && day.culinaryMoments.length > 0 && (
                <div className="mt-12 ml-4 md:ml-[116px] relative overflow-hidden rounded-2xl bg-[#F8F4EA] border border-[#E8E0CE] p-6 md:p-8">
                  {/* Decorative background mark */}
                  <div className="absolute -right-4 -top-8 text-[#C9A84C]/5">
                    <Utensils className="w-48 h-48" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-[14px] text-[#C9A84C] uppercase tracking-[0.15em]">
                        Wajib Dicoba
                      </h5>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {day.culinaryMoments.map((culinary, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <h6 className="font-playfair font-bold text-[20px] text-[#0D1B2A]">
                            {culinary.label}
                          </h6>
                          <p className="text-[15px] text-[#5C6470] leading-relaxed">
                            {culinary.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-12 ml-4 md:ml-[116px] pt-8 border-t border-[#E8E0CE]/50">
                <button
                  onClick={() => {
                    if (onViewInMap) {
                      onViewInMap();
                    } else {
                      // Fallback: scroll to map section if callback not provided
                      navigateToRouteSection("map");
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1B2A] text-white font-bold text-[14px] hover:bg-[#1a304d] hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2"
                  aria-label={`Lihat Hari ${day.dayNumber} di peta rute`}
                >
                  <Map className="w-4 h-4" aria-hidden="true" />
                  Lihat Rute di Peta
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E8E0CE] text-[#5C6470] font-bold text-[14px] hover:bg-[#F8F4EA] hover:border-[#D9CDBC] hover:text-[#0D1B2A] transition-all focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2">
                  <Settings2 className="w-4 h-4" aria-hidden="true" />
                  Sesuaikan dengan RANI
                </button>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}




