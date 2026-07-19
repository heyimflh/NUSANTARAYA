import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat, Outfit, Philosopher } from "next/font/google";
import { AppProvider } from "@/context/app-context";
import { DocumentPreferenceSync } from "@/components/system/DocumentPreferenceSync";
import { WebVitalsMonitor } from "@/components/system/WebVitalsMonitor";
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
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
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
      className={`${playfair.variable} ${inter.variable} ${montserrat.variable} ${outfit.variable} ${philosopher.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <WebVitalsMonitor />
        <AppProvider>
          <DocumentPreferenceSync />
          {/* Global Fixed Background for seamless masking and mobile performance */}
          <div className="fixed inset-0 z-[-50] bg-[url('/assets/background-primary.png')] max-md:bg-[url('/assets/background-primary-mobile.png')] bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none w-full h-[100dvh]" />
          
          {/* Main Content */}
          <main className="flex-1 pb-safe max-md:pb-20">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
