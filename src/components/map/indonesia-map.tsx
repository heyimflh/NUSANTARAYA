"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { KODE_TO_ID, getRegionFromKode, getRegionFill } from "@/lib/map-utils";

/**
 * IndonesiaMap — Peta SVG Interaktif 38 Provinsi
 *
 * Menggunakan aset indonesia-fill.svg yang sudah ada (dihasilkan generate-svg.js).
 * Setiap path provinsi punya data-prov (KODE_PROV) dan data-name.
 * Hover: highlight fill warna wilayah + tooltip.
 * Klik: navigasi ke /provinsi/[id].
 */

interface ProvinceTooltip {
  name: string;
  kode: string;
  x: number;
  y: number;
}

export function IndonesiaMap() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [tooltip, setTooltip] = useState<ProvinceTooltip | null>(null);
  const [hoveredKode, setHoveredKode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load SVG content
  useEffect(() => {
    fetch("/assets/map/indonesia-fill.svg")
      .then((res) => res.text())
      .then((text) => {
        setSvgContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load map SVG:", err);
        setLoading(false);
      });
  }, []);

  // Handle province hover
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as SVGElement;
    const path = target.closest("[data-prov]") as SVGElement | null;

    if (path) {
      const kode = path.getAttribute("data-prov") || "";
      const name = path.getAttribute("data-name") || "";
      const rect = containerRef.current?.getBoundingClientRect();

      if (rect) {
        setTooltip({
          name,
          kode,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
      setHoveredKode(kode);
    } else {
      setTooltip(null);
      setHoveredKode(null);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
    setHoveredKode(null);
  }, []);

  // Handle province click → navigate to /provinsi/[id]
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as SVGElement;
    const path = target.closest("[data-prov]") as SVGElement | null;

    if (path) {
      const kode = path.getAttribute("data-prov") || "";
      const id = KODE_TO_ID[kode];
      if (id) {
        router.push(`/provinsi/${id}`);
      }
    }
  }, [router]);

  // Inject interactive styles into SVG paths after render
  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("[data-prov]");

    paths.forEach((path) => {
      const kode = path.getAttribute("data-prov") || "";
      const region = getRegionFromKode(kode);
      const regionColor = getRegionFill(region);

      // Base styles
      path.style.cursor = "pointer";
      path.style.transition = "all 0.2s ease";
      path.style.fill = "transparent";
      path.style.stroke = "rgba(201, 168, 76, 0.15)";
      path.style.strokeWidth = "0.8";

      // Hover handlers via data attribute
      path.setAttribute("data-region-color", regionColor);
    });
  }, [svgContent]);

  // Apply hover styles dynamically
  useEffect(() => {
    if (!containerRef.current) return;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("[data-prov]");

    paths.forEach((path) => {
      const kode = path.getAttribute("data-prov") || "";
      const regionColor = path.getAttribute("data-region-color") || "#C9A84C";

      if (kode === hoveredKode) {
        path.style.fill = regionColor;
        path.style.fillOpacity = "0.35";
        path.style.stroke = regionColor;
        path.style.strokeWidth = "1.5";
        path.style.filter = `drop-shadow(0 0 8px ${regionColor}50)`;
      } else {
        path.style.fill = "transparent";
        path.style.fillOpacity = "1";
        path.style.stroke = "rgba(201, 168, 76, 0.15)";
        path.style.strokeWidth = "0.8";
        path.style.filter = "none";
      }
    });
  }, [hoveredKode]);

  if (loading) {
    return (
      <div className="nusa-container py-12 flex items-center justify-center min-h-[50vh]">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto" />
          <p className="text-text-secondary text-sm">Memuat Peta Indonesia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div
        ref={containerRef}
        className={cn(
          "nusa-container relative",
          "overflow-hidden",
          "[&_svg]:w-full [&_svg]:h-auto [&_svg]:max-h-[70vh]",
          "[&_svg]:mx-auto",
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />

      {/* Tooltip */}
      {tooltip && (
        <div
          className={cn(
            "absolute z-30 pointer-events-none",
            "bg-surface/95 backdrop-blur-md",
            "border border-border-light rounded-xl",
            "shadow-lg px-4 py-2.5",
            "transition-opacity duration-100",
            "animate-fade-in",
          )}
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 8,
            transform: "translateY(-100%)",
          }}
        >
          <p className="font-heading font-semibold text-sm text-text-primary">
            {tooltip.name}
          </p>
          <p className="text-xs text-gold mt-0.5">
            Klik untuk menjelajahi →
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="nusa-container mt-4 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted">
          {[
            { label: "Sumatera", color: "#B85C38" },
            { label: "Jawa", color: "#2B4C8C" },
            { label: "Kalimantan", color: "#1A5C3A" },
            { label: "Sulawesi", color: "#D4691E" },
            { label: "Bali & Nusa Tenggara", color: "#6B3FA0" },
            { label: "Maluku", color: "#1B7A7A" },
            { label: "Papua", color: "#1A4A7A" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
