import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — NUSANTARAYA Design System
 * Warna per wilayah + varian tematik. Bentuk medalion pill.
 */
const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "font-medium text-xs tracking-wide",
    "rounded-full px-3 py-1",
    "transition-colors duration-150",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        gold: "bg-gold/10 text-gold-dark border border-gold/20",
        merah: "bg-merah/10 text-merah border border-merah/20",
        biru: "bg-biru/10 text-biru border border-biru/20",
        hijau: "bg-hijau/10 text-hijau border border-hijau/20",
        outline: "border border-border text-text-secondary bg-transparent",
        // Wilayah badges
        sumatera: "bg-sumatera/10 text-sumatera border border-sumatera/20",
        jawa: "bg-jawa/10 text-jawa border border-jawa/20",
        kalimantan: "bg-kalimantan/10 text-kalimantan border border-kalimantan/20",
        sulawesi: "bg-sulawesi/10 text-sulawesi border border-sulawesi/20",
        baliNusa: "bg-bali-nusa/10 text-bali-nusa border border-bali-nusa/20",
        maluku: "bg-maluku/10 text-maluku border border-maluku/20",
        papua: "bg-papua/10 text-papua border border-papua/20",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
