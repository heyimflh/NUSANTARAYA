import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import { AppProvider } from "@/context/app-context";
import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { FloatingRANI } from "@/components/layout/floating-rani";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

/**
 * NUSANTARAYA — Root Layout
 * Fonts: Playfair Display (heading) + Inter (body)
 * Providers: AppProvider (language, mode, passport, audio)
 * Navigation: Navbar (desktop/tablet) + BottomNav (mobile) + FloatingRANI
 */

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "NUSANTARAYA — Satu Peta, Ribuan Cerita",
    template: "%s | NUSANTARAYA",
  },
  description:
    "Platform eksplorasi digital Indonesia. Jelajahi 38 provinsi melalui peta interaktif, arsip budaya, atlas kuliner, route planner, dan digital passport.",
  keywords: [
    "NUSANTARAYA",
    "Indonesia",
    "peta interaktif",
    "budaya Indonesia",
    "kuliner Nusantara",
    "wisata Indonesia",
    "digital passport",
    "Nusantara Digital City",
  ],
  authors: [{ name: "Mufalah Code" }],
  openGraph: {
    title: "NUSANTARAYA — Satu Peta, Ribuan Cerita",
    description: "Platform eksplorasi digital Indonesia — 38 provinsi dalam satu pengalaman interaktif.",
    type: "website",
    locale: "id_ID",
    siteName: "NUSANTARAYA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <AppProvider>
          {/* Desktop/Tablet Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 pb-safe max-md:pb-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Bottom Navigation */}
          <BottomNav />

          {/* Floating RANI AI Guide */}
          <FloatingRANI />
        </AppProvider>
      </body>
    </html>
  );
}
