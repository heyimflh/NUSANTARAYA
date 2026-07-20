import React from "react";

interface FinalHandoffProps {
  t: (id: string, en: string) => string;
}

export function FinalHandoff({ t }: FinalHandoffProps) {
  return (
    <section className="archive-surface-ink py-20 text-center">
      <div className="archive-container">
        <h2 className="archive-display text-white mb-6">
          {t("Mari Melanjutkan Perjalanan", "Let's Continue the Journey")}
        </h2>
        <p className="archive-body text-white/80 max-w-2xl mx-auto mb-10">
          {t("Setelah menjelajah masa lalu dan makna, saatnya melihat bagaimana semua ini hidup di ruang nyata.", "After exploring the past and meanings, it is time to see how this all lives in real spaces.")}
        </p>
        <button className="bg-[var(--archive-saffron)] text-[var(--archive-ink)] px-8 py-4 rounded-full font-medium hover:bg-white transition-colors">
          {t("Kembali ke Beranda", "Back to Home")}
        </button>
      </div>
    </section>
  );
}
