import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NusaRasa | The Edible Archipelago",
  description: "Jelajahi hidangan, rempah, bahan, dan cerita dari berbagai wilayah—lalu ubah rasa ingin tahumu menjadi perjalanan.",
};

export default function RasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="rasa-layout-root min-h-screen bg-[var(--rasa-canvas)] text-[var(--rasa-ink)] font-sans antialiased selection:bg-[var(--rasa-saffron)] selection:text-[var(--rasa-ink)]"
      style={{
        // Local semantic tokens (No Navy!)
        "--rasa-canvas": "rgba(246, 235, 221, 0.9)", // 90% opacity for Explore background visibility
        "--rasa-paper": "#FFF9F0",
        "--rasa-paper-deep": "#E8D7BF",
        "--rasa-ink": "#2A1E17",
        "--rasa-cacao": "#3B2921",
        "--rasa-muted": "#78685C",
        "--rasa-line": "#D2BFA8",
        "--rasa-chili": "#A83E2E",
        "--rasa-terracotta": "#C26345",
        "--rasa-saffron": "#D2A12D",
        "--rasa-tamarind": "#8A5A32",
        "--rasa-leaf": "#667455",
        "--rasa-pandan": "#47735F",
        "--rasa-coconut": "#F4E7CF",
        "--rasa-plum": "#7A5666",
        "--rasa-sea": "#3F756E", // Not navy, it's a warm sea green/teal
        "--rasa-success": "#557059",
        "--rasa-error": "#973B30",
      } as React.CSSProperties}
    >
      {/* We can place the shared navbar here or assume it's part of the global layout. 
          Assuming global layout has the Navbar, but we might need to enforce color overrides 
          if the global navbar relies on CSS variables we just redefined, or we just let it be. 
          The PRD says: "Jika design system global NUSANTARAYA memakai navy, halaman NusaRasa 
          wajib memakai local semantic tokens sendiri tanpa merusak halaman lain." 
          So setting style on this wrapper is correct. */}
      {children}
    </div>
  );
}
