const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/FinalHandoff.tsx');

const content = `import React from "react";
import { useRouter } from "next/navigation";
import { MoveRight, Map } from "lucide-react";

interface FinalHandoffProps {
  t: (id: string, en: string) => string;
}

export function FinalHandoff({ t }: FinalHandoffProps) {
  const router = useRouter();

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[var(--archive-ink)] text-[var(--archive-canvas)]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, var(--archive-saffron) 0%, transparent 50%), radial-gradient(circle at 0% 0%, var(--archive-terracotta) 0%, transparent 50%)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl border-[1px] border-[var(--archive-line)]/20 rounded-full blur-[2px] opacity-20 pointer-events-none scale-150"></div>
      
      <div className="archive-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full border border-[var(--archive-line)]/30 flex items-center justify-center mb-8 bg-[var(--archive-canvas)]/5 backdrop-blur-sm">
            <Map className="w-8 h-8 text-[var(--archive-saffron)]" />
          </div>
          
          <h2 className="archive-display text-5xl md:text-7xl lg:text-8xl mb-8 font-bold leading-tight drop-shadow-2xl">
            {t("Mari Melanjutkan Perjalanan", "Let's Continue the Journey")}
          </h2>
          
          <p className="text-xl md:text-3xl text-[var(--archive-paper-deep)] mb-16 font-playfair italic font-light max-w-3xl leading-relaxed">
            {t("Setelah menjelajah masa lalu dan menggali makna terdalamnya, kini saatnya melihat bagaimana semua warisan ini berdetak dan hidup di ruang nyata.", "After exploring the past and unearthing its deepest meanings, it is time to see how this heritage beats and lives in the real world.")}
          </p>
          
          <button 
            onClick={() => router.push('/')}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[var(--archive-canvas)] text-[var(--archive-ink)] rounded-full font-bold tracking-widest uppercase transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(208,163,49,0.3)]"
          >
            <span className="relative z-10">{t("Kembali ke Beranda", "Return to Home")}</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--archive-ink)] flex items-center justify-center group-hover:bg-[var(--archive-terracotta)] transition-colors duration-500">
              <MoveRight className="w-5 h-5 text-[var(--archive-canvas)] group-hover:translate-x-1 transition-transform duration-500" />
            </div>
            {/* Inner Glow Hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--archive-saffron)] to-[var(--archive-terracotta)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
      
      {/* Decorative Line Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--archive-saffron)]/50 to-transparent"></div>
    </section>
  );
}
`;

fs.writeFileSync(targetPath, content);
console.log('FinalHandoff.tsx redesigned!');
