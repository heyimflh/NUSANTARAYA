import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — NUSANTARAYA Design System
 * Varian: gold (primary CTA), outline, ghost, merah, biru
 * Semua responsif & menggunakan design tokens.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-250",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        gold: [
          "bg-gold text-white",
          "hover:bg-gold-dark hover:shadow-gold",
          "active:scale-[0.98]",
        ].join(" "),
        outline: [
          "border-2 border-gold text-gold bg-transparent",
          "hover:bg-gold hover:text-white",
          "active:scale-[0.98]",
        ].join(" "),
        ghost: [
          "text-text-primary bg-transparent",
          "hover:bg-surface hover:text-gold",
        ].join(" "),
        merah: [
          "bg-merah text-white",
          "hover:bg-merah/90 hover:shadow-md",
          "active:scale-[0.98]",
        ].join(" "),
        biru: [
          "bg-biru text-white",
          "hover:bg-biru/90 hover:shadow-md",
          "active:scale-[0.98]",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-lg",
        md: "h-10 px-5 text-sm rounded-xl",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-2xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
