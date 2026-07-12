import React from "react";
import type { ContentStatus } from "@/types/atlas";

type AtlasStatusBadgeProps = {
  lastReviewedAt: string;
  contentStatus: ContentStatus;
  referenceCount: number;
};

const STATUS_LABELS: Record<ContentStatus, string> = {
  draft: "Draf",
  reviewed: "Ditinjau",
  verified: "Terverifikasi",
};

const STATUS_COLORS: Record<ContentStatus, string> = {
  draft: "bg-nusaNavy/10 text-nusaNavy/60",
  reviewed: "bg-nusaGold/10 text-nusaGold",
  verified: "bg-[#2D5A27]/10 text-[#2D5A27]",
};

export const AtlasStatusBadge = ({ lastReviewedAt, contentStatus, referenceCount }: AtlasStatusBadgeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs">
      <span className="flex items-center gap-1.5 text-nusaNavy/50">
        <span className="font-medium">Terakhir ditinjau:</span>
        <span className="font-semibold text-nusaNavy/70">{lastReviewedAt}</span>
      </span>
      <span className="text-nusaNavy/20">·</span>
      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${STATUS_COLORS[contentStatus]}`}>
        {STATUS_LABELS[contentStatus]}
      </span>
      <span className="text-nusaNavy/20">·</span>
      <span className="text-nusaNavy/50">
        <span className="font-semibold text-nusaGold">{referenceCount}</span> referensi
      </span>
    </div>
  );
};
