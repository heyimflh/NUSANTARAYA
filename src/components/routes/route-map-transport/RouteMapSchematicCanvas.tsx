"use client";

/**
 * NUSANTARAYA — Route Map Schematic Canvas
 * Section 6: Route Map + Transport Summary
 *
 * Renders an SVG schematic route diagram:
 * - Numbered stop nodes (circles with order numbers)
 * - Connecting lines between stops (schematic, NOT geographic)
 * - Active state highlight for selected stop/segment/day
 * - Accessible: aria-hidden with text equivalent in AccessibleRouteList
 *
 * IMPORTANT:
 * - This is a schematic diagram, NOT a geographic map.
 * - Lines do NOT represent actual travel routes or roads.
 * - No scale, cardinal direction, or distance claims.
 * - Disclosure is shown by parent component (RouteMapDisclosure).
 */

import React, { useId } from "react";
import { motion } from "framer-motion";
import type { RouteMapStop, RouteMapSegment, RouteTransportOption } from "@/types/route-map";
import { getSchematicPosition } from "@/lib/routes/map/resolveRouteMap";

interface RouteMapSchematicCanvasProps {
  stops: RouteMapStop[];
  segments: RouteMapSegment[];
  transportOptions: RouteTransportOption[];
  activeStopId: string | null;
  activeDayNumber: number | null;
  activeSegmentIds: string[];
  onStopSelect: (stopId: string) => void;
  onSegmentSelect: (segmentId: string) => void;
  locale?: "id" | "en";
}

// Region colors for stop node backgrounds
const STOP_REGION_COLORS: Record<string, string> = {
  "34": "#2B4C8C", // DIY Yogyakarta — Jawa
  "33": "#2B4C8C", // Jawa Tengah
  "32": "#2B4C8C", // Jawa Barat
  "31": "#2B4C8C", // DKI Jakarta
  "35": "#2B4C8C", // Jawa Timur
  "51": "#6B3FA0", // Bali
};

function getStopColor(provinceId: string): string {
  return STOP_REGION_COLORS[provinceId] ?? "#0D1B2A";
}

export function RouteMapSchematicCanvas({
  stops,
  segments,
  transportOptions,
  activeStopId,
  activeDayNumber,
  activeSegmentIds,
  onStopSelect,
  onSegmentSelect,
  locale = "id",
}: RouteMapSchematicCanvasProps) {
  const titleId = useId();
  const descId = useId();

  if (stops.length === 0) return null;

  // SVG viewBox dimensions
  const VW = 800;
  const VH = 300;
  const PAD = 60;

  // Compute schematic positions for each stop (normalized to SVG coords)
  const positions: Array<{ stop: RouteMapStop; x: number; y: number }> = stops.map(
    (stop, idx) => {
      const [nx, ny] = getSchematicPosition(stop, idx, stops.length);
      return {
        stop,
        x: PAD + (nx / 100) * (VW - PAD * 2),
        y: PAD + (ny / 100) * (VH - PAD * 2),
      };
    }
  );

  const posMap = new Map(positions.map((p) => [p.stop.id, p]));

  return (
    <div
      className="relative w-full"
      role="img"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* Hidden accessible title/description */}
      <span id={titleId} className="sr-only">
        {locale === "en" ? "Schematic route diagram" : "Diagram rute skematik"}
      </span>
      <span id={descId} className="sr-only">
        {locale === "en"
          ? "A schematic diagram showing stop order and connections. Not a geographic map."
          : "Diagram skematik urutan stop dan koneksi. Bukan peta geografis."}
      </span>

      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        aria-hidden="true"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Decorative background grid and gradients */}
        <defs>
          <pattern
            id="schematic-grid-premium"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="#C9A84C" opacity="0.15" />
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E0CE" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <linearGradient id="bg-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F8F4EA" stopOpacity="0.1" />
          </linearGradient>
          <filter id="stop-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={VW} height={VH} fill="url(#schematic-grid-premium)" rx="24" />
        <rect width={VW} height={VH} fill="url(#bg-glow)" rx="24" />

        {/* Render segment connectors (behind nodes) */}
        {segments.map((seg) => {
          const from = posMap.get(seg.fromStopId);
          const to = posMap.get(seg.toStopId);
          if (!from || !to) return null;

          const isActive = activeSegmentIds.includes(seg.id);
          const isActiveDaySegment = activeDayNumber === seg.dayNumber;
          const highlight = isActive || isActiveDaySegment;

          const transport = transportOptions.find((t) => t.segmentId === seg.id);
          const isVerified = transport?.confidence === "verified";

          // Midpoint control for curved connector
          const mx = (from.x + to.x) / 2;
          const my = Math.min(from.y, to.y) - 30;

          return (
            <g key={seg.id}>
              {/* Glow effect for active */}
              {highlight && (
                <path
                  d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="10"
                  strokeOpacity="0.15"
                  strokeLinecap="round"
                  filter="url(#line-glow)"
                />
              )}
              {/* Main connector line */}
              <motion.path
                d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                fill="none"
                stroke={highlight ? "#C9A84C" : isVerified ? "#0D1B2A" : "#8A94A6"}
                strokeWidth={highlight ? 3 : 2}
                strokeDasharray={isVerified ? undefined : "6 6"}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: seg.isRequired ? 0.2 : 0.4, ease: "easeOut" }}
                style={{ cursor: "pointer" }}
                onClick={() => onSegmentSelect(seg.id)}
                role="button"
                tabIndex={0}
                aria-label={
                  locale === "en"
                    ? `Transfer on Day ${seg.dayNumber}`
                    : `Perpindahan Hari ${seg.dayNumber}`
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSegmentSelect(seg.id);
                  }
                }}
              />

              {/* Transfer mode label on connector */}
              {transport && transport.confidence !== "unavailable" && (
                <text
                  x={mx}
                  y={my - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fill={highlight ? "#C9A84C" : "#8A94A6"}
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  letterSpacing="0.05em"
                >
                  {transport.label.length > 20 ? transport.label.slice(0, 18) + "…" : transport.label}
                </text>
              )}

              {/* Day label bubble */}
              <g>
                <rect
                  x={mx - 24}
                  y={my - 34}
                  width={48}
                  height={20}
                  rx="10"
                  fill={highlight ? "#C9A84C" : "#FFFFFF"}
                  stroke={highlight ? "#C9A84C" : "#E8E0CE"}
                  strokeWidth="1.5"
                  filter={highlight ? "url(#line-glow)" : undefined}
                />
                <text
                  x={mx}
                  y={my - 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill={highlight ? "#FFFFFF" : "#5C6470"}
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.05em"
                >
                  {locale === "en" ? `Day ${seg.dayNumber}` : `Hari ${seg.dayNumber}`}
                </text>
              </g>
            </g>
          );
        })}

        {/* Render stop nodes (on top of connectors) */}
        {positions.map(({ stop, x, y }, idx) => {
          const isActive = stop.id === activeStopId;
          const isActiveDay =
            activeDayNumber !== null &&
            stop.dayStart <= activeDayNumber &&
            stop.dayEnd >= activeDayNumber;
          const highlight = isActive || isActiveDay;
          const stopColor = getStopColor(stop.provinceId);

          return (
            <motion.g
              key={stop.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.12, ease: "backOut" }}
              style={{ cursor: "pointer" }}
              onClick={() => onStopSelect(stop.id)}
              role="button"
              tabIndex={0}
              aria-label={
                locale === "en"
                  ? `Stop ${stop.order} of ${stops.length}: ${stop.cityOrCluster}, Day ${stop.dayStart} to Day ${stop.dayEnd}`
                  : `Stop ${stop.order} dari ${stops.length}: ${stop.cityOrCluster}, Hari ${stop.dayStart} sampai Hari ${stop.dayEnd}`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onStopSelect(stop.id);
                }
              }}
            >
              {/* Outer ring (active/hover) */}
              {highlight && (
                <circle
                  cx={x}
                  cy={y}
                  r={32}
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.6"
                  className="animate-[spin_10s_linear_infinite]"
                  style={{ transformOrigin: `${x}px ${y}px` }}
                />
              )}

              {/* Drop shadow */}
              <circle
                cx={x}
                cy={y + 4}
                r={20}
                fill="rgba(13,27,42,0.08)"
                filter="url(#stop-glow)"
              />

              {/* White backing ring for contrast */}
              <circle
                cx={x}
                cy={y}
                r={highlight ? 24 : 22}
                fill="#FFFFFF"
                style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
              />

              {/* Stop circle */}
              <circle
                cx={x}
                cy={y}
                r={highlight ? 20 : 18}
                fill={highlight ? "#C9A84C" : stopColor}
                style={{
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />

              {/* Stop number */}
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={highlight ? "14" : "13"}
                fill="#FFFFFF"
                fontFamily="Playfair Display, Georgia, serif"
                fontWeight="700"
              >
                {stop.order}
              </text>

              {/* City label */}
              <text
                x={x}
                y={y + 34}
                textAnchor="middle"
                fontSize="12"
                fill={highlight ? "#C9A84C" : "#0D1B2A"}
                fontFamily="Inter, sans-serif"
                fontWeight={highlight ? "700" : "600"}
                style={{ transition: "all 0.2s ease" }}
              >
                {stop.shortLabel}
              </text>

              {/* Day range badge */}
              <text
                x={x}
                y={y + 48}
                textAnchor="middle"
                fontSize="10"
                fill="#8A94A6"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                {stop.dayStart === stop.dayEnd
                  ? (locale === "en" ? `Day ${stop.dayStart}` : `Hari ${stop.dayStart}`)
                  : (locale === "en"
                    ? `Day ${stop.dayStart}–${stop.dayEnd}`
                    : `Hari ${stop.dayStart}–${stop.dayEnd}`)
                }
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Schematic disclosure badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E0CE] shadow-sm text-[10px] text-[#5C6470] font-inter font-medium tracking-wide pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="6" cy="6" r="5" fill="none" stroke="#8A94A6" strokeWidth="1.2" />
          <path d="M6 3.5V6.5L8 8" fill="none" stroke="#8A94A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {locale === "en" ? "Schematic · Not to scale" : "Skematik · Bukan skala geografis"}
      </div>
    </div>
  );
}

