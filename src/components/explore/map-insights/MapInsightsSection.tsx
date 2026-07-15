"use client";

import React, { useEffect, useState } from "react";
import {
  MapInsightsContext,
  MapInsightViewModel,
  MapInsightStat,
  MapInsightAction,
} from "@/types/mapInsights";
import { resolveMapInsight } from "@/lib/map-insights/resolveMapInsight";

// --- Design Tokens & Styling ---
const insightTheme = {
  "--insight-paper": "#F7F0E3",
  "--insight-paper-light": "#FFFDF7",
  "--insight-ink": "#2B2520",
  "--insight-ink-soft": "#5E554C",
  "--insight-terracotta": "#C85C3F",
  "--insight-terracotta-dark": "#8F3F2C",
  "--insight-saffron": "#E3A72F",
  "--insight-moss": "#65734A",
  "--insight-olive-soft": "#A7A77A",
  "--insight-coral": "#E78261",
  "--insight-clay": "#D7B49E",
  "--insight-sand": "#E8DCC8",
  "--insight-border": "#D8CDBB",
  "--insight-white": "#FFFDF8",
} as React.CSSProperties;

// --- Sub-components ---

function EditorialOrientation({ locale }: { locale: "id" | "en" }) {
  const eyebrow = locale === "en" ? "Map Insights · Read Deeper" : "Map Insights · Baca Peta Lebih Dalam";
  const title = locale === "en" ? "What Can You Discover on This Map?" : "Apa yang Bisa Kamu Temukan dari Peta Ini?";
  const subtitle = locale === "en"
    ? "Read the scale of Nusantara, understand your active context, and decide which story you want to unlock next."
    : "Baca skala Nusantara, lihat konteks pilihanmu, lalu tentukan cerita mana yang ingin kamu buka berikutnya.";

  return (
    <div className="flex flex-col gap-3 animate-fade-in md:pr-10 max-w-[700px]">
      <div className="flex items-center gap-3">
        <span className="bg-[var(--insight-terracotta)] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-sm">
          04B
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--insight-terracotta)]">
          {eyebrow}
        </span>
      </div>
      <h2
        id="map-insights-heading"
        className="font-serif text-3xl md:text-5xl text-[var(--insight-ink)] leading-[1.12]"
      >
        {title}
      </h2>
      <p className="text-[15px] md:text-lg text-[var(--insight-ink-soft)] font-medium max-w-xl leading-relaxed mt-1">
        {subtitle}
      </p>
    </div>
  );
}

function ContextNote({ locale }: { locale: "id" | "en" }) {
  return (
    <div className="h-full flex flex-col justify-end md:items-end animate-fade-in mt-6 md:mt-0">
      <div className="relative border border-[var(--insight-border)] bg-[var(--insight-paper-light)] p-4 md:p-5 rounded-lg flex gap-4 items-center max-w-sm">
        {/* Small compass visual */}
        <div className="w-10 h-10 rounded-full border border-[var(--insight-border)] flex items-center justify-center shrink-0 bg-[var(--insight-paper)]">
          <div className="w-1 h-4 bg-[var(--insight-terracotta)] rotate-45 absolute" />
          <div className="w-1 h-4 bg-[var(--insight-olive-soft)] -rotate-45 absolute" />
        </div>
        <p className="text-xs md:text-sm text-[var(--insight-ink-soft)] leading-snug">
          {locale === "en"
            ? "Insights update dynamically based on your Nusa Map selections."
            : "Insight diperbarui mengikuti pilihan di Nusa Map."}
        </p>
      </div>
    </div>
  );
}

function CartographicTrail({
  stats,
  activeNodeId,
  onNodeHover,
  onNodeClick,
  locale
}: {
  stats: MapInsightStat[];
  activeNodeId: string | null;
  onNodeHover: (id: string | null) => void;
  onNodeClick: (action?: MapInsightAction) => void;
  locale: "id" | "en";
}) {
  const isEn = locale === "en";

  // Override descriptions as requested
  const overrideDescriptions: Record<string, string> = {
    "regions": isEn ? "Seven distinct regions to read the character of Nusantara." : "Tujuh kawasan besar untuk membaca karakter Nusantara.",
    "pillars": isEn ? "Seven perspectives to read the culture and life of Nusantara." : "Tujuh sudut pandang untuk membaca budaya dan kehidupan Nusantara."
  };

  return (
    <div className="relative w-full py-12 md:py-16 flex flex-col md:grid md:grid-cols-2 xl:grid-cols-12 gap-6 md:gap-8 xl:gap-x-8 xl:gap-y-16">
      {/* Route line desktop - only visible on md+ */}
      <svg
        className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1000 200"
        aria-hidden="true"
      >
        <path
          d="M 125 50 Q 375 150 625 50 T 875 150"
          fill="none"
          stroke="var(--insight-border)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="opacity-60"
        />
      </svg>
      
      {/* Route line mobile/tablet */}
      <div className="xl:hidden absolute left-8 top-12 bottom-12 w-px border-l-2 border-dashed border-[var(--insight-border)] z-0" aria-hidden="true" />

      {stats.map((stat, i) => {
        const isHovered = activeNodeId === stat.id;
        const desc = overrideDescriptions[stat.id] || stat.description;
        
        // Grid placement for XL (Staggered Layout)
        let xlPlacementClass = "";
        if (i === 0) xlPlacementClass = "xl:col-span-3 xl:col-start-1 xl:row-start-1";
        if (i === 1) xlPlacementClass = "xl:col-span-3 xl:col-start-4 xl:row-start-2";
        if (i === 2) xlPlacementClass = "xl:col-span-3 xl:col-start-7 xl:row-start-1";
        if (i === 3) xlPlacementClass = "xl:col-span-3 xl:col-start-10 xl:row-start-2";

        return (
          <div
            key={stat.id}
            className={`
              relative z-10 flex items-start gap-4 md:block w-full
              group transition-transform duration-300
              ${xlPlacementClass}
            `}
            onMouseEnter={() => onNodeHover(stat.id)}
            onMouseLeave={() => onNodeHover(null)}
            onFocus={() => onNodeHover(stat.id)}
            onBlur={() => onNodeHover(null)}
          >
            {stat.action ? (
              <button
                onClick={() => onNodeClick(stat?.action)}
                className="text-left w-full outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--insight-saffron)] rounded-2xl block"
                aria-label={`${stat.value} ${stat.label}. ${desc}`}
              >
                <NodeContent stat={{...stat, description: desc}} isHovered={isHovered} index={i} />
              </button>
            ) : (
              <div
                className="text-left w-full outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--insight-saffron)] rounded-2xl block"
                tabIndex={0}
                aria-label={`${stat.value} ${stat.label}. ${desc}`}
              >
                <NodeContent stat={{...stat, description: desc}} isHovered={isHovered} index={i} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function NodeContent({ stat, isHovered, index }: { stat: MapInsightStat; isHovered: boolean; index: number }) {
  return (
    <div className="flex md:flex-col gap-4 md:gap-3 w-full">
      {/* Node Marker */}
      <div className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[var(--insight-paper-light)] border-2 border-[var(--insight-border)] rounded-full z-10 transition-colors duration-300 group-hover:border-[var(--insight-saffron)] group-hover:bg-[var(--insight-white)] shadow-sm">
        <span className="font-serif text-xl md:text-2xl font-bold text-[var(--insight-ink)] group-hover:text-[var(--insight-terracotta)] transition-colors">
          0{index + 1}
        </span>
        {isHovered && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--insight-saffron)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--insight-terracotta)]"></span>
          </span>
        )}
      </div>

      <div className="flex flex-col bg-[var(--insight-white)]/90 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-[var(--insight-border)] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[var(--insight-saffron)] flex-1 min-w-0 break-words">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-serif text-3xl md:text-4xl text-[var(--insight-ink)] font-bold shrink-0">
            {stat.value}
          </span>
          <span className="text-[13px] md:text-sm font-semibold tracking-wide text-[var(--insight-terracotta-dark)] truncate">
            {stat.label}
          </span>
        </div>
        <p className="text-[13px] md:text-[14px] text-[var(--insight-ink-soft)] leading-[1.45]">
          {stat.description}
        </p>
      </div>
    </div>
  );
}

function LiveContext({ viewModel, isEn }: { viewModel: MapInsightViewModel; isEn: boolean }) {
  const isDefault = viewModel.tone === "default" && viewModel.liveValue === 38;
  const isError = viewModel.tone === "empty";

  let statusColor = "bg-[var(--insight-moss)] text-white";
  if (isError) statusColor = "bg-[var(--insight-terracotta)] text-white";
  else if (viewModel.tone === "layer") statusColor = "bg-[var(--insight-saffron)] text-[var(--insight-ink)]";
  else if (viewModel.tone === "province") statusColor = "bg-[var(--insight-coral)] text-white";

  let supportingText = isEn ? "All provinces are available in Explore Mode." : "Semua provinsi tersedia dalam Mode Explore.";
  if (viewModel.tone === "layer") {
    supportingText = isEn 
      ? `${viewModel.liveValue} of 38 provinces match the active layer.` 
      : `${viewModel.liveValue} dari 38 provinsi cocok dengan layer aktif.`;
  } else if (viewModel.insightId === "search-active") {
    supportingText = isEn
      ? `${viewModel.liveValue} of 38 provinces match your search.`
      : `${viewModel.liveValue} dari 38 provinsi cocok dengan pencarianmu.`;
  } else if (viewModel.insightId === "flagship-only") {
    supportingText = isEn
      ? `Eight flagship provinces are currently highlighted.`
      : `Delapan provinsi flagship sedang ditonjolkan.`;
  }

  return (
    <div className="bg-[var(--insight-white)] rounded-[24px] p-6 md:p-8 lg:p-10 border border-[var(--insight-border)] shadow-sm h-full flex flex-col justify-center relative overflow-hidden min-h-[300px]">
      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, var(--insight-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--insight-ink) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--insight-ink-soft)] mb-6 block">
          {isEn ? "Your Map Right Now" : "Peta Kamu Sekarang"}
        </span>

        <div className="flex flex-col gap-2 mb-6" aria-live="polite">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-5xl md:text-6xl font-bold text-[var(--insight-ink)] leading-none">
              {viewModel.liveValue}
            </span>
            <span className="text-[15px] md:text-lg font-bold text-[var(--insight-ink-soft)]">
              {isEn ? "active results" : "hasil aktif"}
            </span>
          </div>
          <p className="text-[14px] md:text-[15px] font-medium text-[var(--insight-ink-soft)] max-w-sm leading-relaxed mt-2">
            {supportingText}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--insight-border)] items-center">
          <span className={`text-[12px] font-bold px-3 py-1.5 rounded-full ${statusColor}`}>
            {viewModel.contextLabel}
          </span>
          <span className="text-[12px] font-semibold text-[var(--insight-ink-soft)] px-2">
            {isEn ? "38 total in Nusa Map" : "38 total di Nusa Map"}
          </span>
        </div>
      </div>
    </div>
  );
}

function EditorialInsightStage({ viewModel, isEn }: { viewModel: MapInsightViewModel; isEn: boolean }) {
  // Overriding standard insights with more descriptive editorial headlines
  let headline = "";
  let body = "";
  let reason = "";

  if (viewModel.tone === "default") {
    headline = isEn ? "Start from the deepest stories" : "Mulai dari delapan cerita terdalam";
    body = isEn 
      ? "Eight flagship provinces feature the most comprehensive Atlas materials and serve as an ideal starting point to understand NUSANTARAYA."
      : "Delapan provinsi flagship memiliki materi Atlas paling lengkap dan menjadi titik awal yang jelas untuk memahami pengalaman NUSANTARAYA.";
    reason = isEn ? "Recommended because no filters are applied." : "Direkomendasikan karena belum ada filter khusus yang dipilih.";
  } else if (viewModel.tone === "layer") {
    headline = isEn ? "Thematic exploration" : "Eksplorasi Tematik";
    body = viewModel.insightText;
    reason = isEn ? "Generated based on your active layer." : "Muncul karena layer sedang aktif.";
  } else if (viewModel.tone === "province") {
    headline = isEn ? "Province selected" : "Provinsi terpilih";
    body = viewModel.insightText;
    reason = isEn ? "Context for your selected province." : "Konteks khusus untuk provinsi pilihanmu.";
  } else if (viewModel.tone === "empty") {
    headline = isEn ? "No results found" : "Hasil tidak ditemukan";
    body = viewModel.insightText;
    reason = isEn ? "No matching data found." : "Kombinasi filter tidak ditemukan.";
  } else {
    headline = isEn ? "Exploration Context" : "Konteks Eksplorasi";
    body = viewModel.insightText;
    reason = isEn ? "Current context." : "Konteks saat ini.";
  }

  return (
    <div className="bg-[var(--insight-paper-light)] rounded-[24px] p-6 md:p-8 lg:p-10 border border-[var(--insight-border)] shadow-sm h-full flex flex-col justify-between min-h-[300px]">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-6 rounded border border-[var(--insight-border)] bg-[var(--insight-paper)] flex items-center justify-center">
            <span className="text-[10px] font-bold text-[var(--insight-terracotta)]">i</span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--insight-terracotta)]">
            {isEn ? "Field Notes" : "Catatan dari Peta"}
          </span>
        </div>

        <h3 className="font-serif text-2xl md:text-[32px] text-[var(--insight-ink)] font-bold mb-4 leading-snug max-w-lg">
          {headline}
        </h3>
        <p className="text-[15px] md:text-[16px] text-[var(--insight-ink-soft)] font-medium leading-[1.6] mb-8 max-w-xl">
          {body}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-auto self-start">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--insight-terracotta)] opacity-70" />
        <span className="text-[13px] text-[var(--insight-ink-soft)] italic font-medium">
          {reason}
        </span>
      </div>
    </div>
  );
}

function ActionDock({
  viewModel,
  isEn,
  onActionClick,
}: {
  viewModel: MapInsightViewModel;
  isEn: boolean;
  onActionClick: (action: MapInsightAction) => void;
}) {
  return (
    <div className="mt-8 md:mt-12 bg-[var(--insight-sand)] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-[var(--insight-border)]">
      <div className="flex flex-col gap-2">
        <span className="text-[var(--insight-ink)] font-serif text-2xl md:text-3xl font-bold">
          {isEn ? "Where to next?" : "Mau mulai dari mana?"}
        </span>
        <span className="text-[var(--insight-ink-soft)] text-sm md:text-[15px] font-medium">
          {isEn ? "Select your next exploration path." : "Pilih jalur eksplorasi berikutnya."}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
        <button
          onClick={() => onActionClick(viewModel.primaryAction)}
          className="w-full sm:w-auto px-8 py-3.5 bg-[var(--insight-terracotta)] hover:bg-[var(--insight-terracotta-dark)] text-white rounded-xl text-sm font-bold tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--insight-saffron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--insight-sand)] shadow-sm"
        >
          {viewModel.primaryAction.label}
        </button>
        {viewModel.secondaryAction && (
          <button
            onClick={() => onActionClick(viewModel.secondaryAction!)}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-[var(--insight-border)] hover:border-[var(--insight-ink-soft)] text-[var(--insight-ink)] rounded-xl text-sm font-bold tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--insight-saffron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--insight-sand)]"
          >
            {viewModel.secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
}

export type MapInsightsSectionProps = {
  context: MapInsightsContext;
  onResetMap: () => void;
  onOpenProvinceSummary: (provinceId: string) => void;
  onOpenProvinceAtlas: (provinceId: string) => void;
  className?: string;
};

export function MapInsightsSection({
  context,
  onResetMap,
  onOpenProvinceSummary,
  onOpenProvinceAtlas,
  className = "",
}: MapInsightsSectionProps) {
  const [viewModel, setViewModel] = useState<MapInsightViewModel | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    let ctxToResolve = context;
    if (hoveredNode) {
      if (hoveredNode === "provinces") {
        ctxToResolve = { ...context, activeLayer: "all", searchQuery: "", selectedProvinceId: null, showFlagshipOnly: false };
      } else if (hoveredNode === "regions") {
        ctxToResolve = { ...context, activeLayer: "all" }; 
      } else if (hoveredNode === "flagships") {
        ctxToResolve = { ...context, showFlagshipOnly: true, selectedProvinceId: null };
      }
    }
    
    const vm = resolveMapInsight(ctxToResolve);
    setViewModel(vm);
  }, [context, hoveredNode]);

  if (!viewModel) {
    return (
      <section className="w-full py-16 md:py-24 bg-[rgba(247,240,227,0.52)] min-h-[400px] flex items-center justify-center" style={insightTheme}>
        <div className="text-[#5E554C] animate-pulse font-medium">Membaca konteks peta…</div>
      </section>
    );
  }

  const handleActionClick = (action?: MapInsightAction) => {
    if (!action) return;
    if (action.type === "scroll" && action.target.startsWith("#")) {
      const el = document.querySelector(action.target);
      if (el) {
        // Adjust for typical sticky navbar height
        const offset = 88;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (action.id === "action-reset-filter") {
      onResetMap();
    } else if (action.id === "action-open-summary" && context.selectedProvinceId) {
      onOpenProvinceSummary(context.selectedProvinceId);
    } else if (action.id === "action-open-atlas" && context.selectedProvinceId) {
      onOpenProvinceAtlas(context.selectedProvinceId);
    }
  };

  const isEn = context.locale === "en";

  return (
    <section
      id="map-insights"
      aria-labelledby="map-insights-heading"
      className={`w-full py-16 md:py-24 bg-[rgba(247,240,227,0.52)] border-y border-[var(--insight-border)] overflow-hidden scroll-mt-24 ${className}`}
      style={insightTheme}
    >
      <div className="nusa-container flex flex-col">
        
        {/* ROW 1: Orientation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-12">
          <EditorialOrientation locale={context.locale} />
          <ContextNote locale={context.locale} />
        </div>

        {/* ROW 2: Cartographic Trail */}
        <CartographicTrail
          stats={viewModel.canonicalStats}
          activeNodeId={hoveredNode}
          onNodeHover={setHoveredNode}
          onNodeClick={handleActionClick}
          locale={context.locale}
        />

        {/* ROW 3: Context & Editorial */}
        {/* Only staggered on >=1280 (xl). For <1280, fallback to stack or generic grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-12 md:mt-16 items-stretch">
          <div className="lg:col-span-5 transition-opacity duration-300">
            <LiveContext viewModel={viewModel} isEn={isEn} />
          </div>
          <div className="lg:col-span-7 transition-opacity duration-300">
            <EditorialInsightStage viewModel={viewModel} isEn={isEn} />
          </div>
        </div>

        {/* ROW 4: Action Dock */}
        <ActionDock viewModel={viewModel} isEn={isEn} onActionClick={handleActionClick} />

        {/* ROW 5: Data Source Note */}
        <div className="mt-8 md:mt-10 text-center lg:text-right">
          <span className="text-[12px] text-[var(--insight-ink-soft)] font-medium">
            {isEn
              ? "Coverage based on the local NUSANTARAYA dataset."
              : "Cakupan berasal dari dataset lokal NUSANTARAYA."}
          </span>
        </div>

      </div>
    </section>
  );
}
