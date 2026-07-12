import React from 'react';

export const SignatureChips = ({ signatures }: { signatures: string[] }) => {
  if (!signatures || signatures.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-nusaNavy/40">
        Yang Paling Dikenal
      </h3>
      <div className="flex flex-wrap gap-2">
        {signatures.map((sig, i) => (
          <span 
            key={i} 
            className="px-3 h-[32px] flex items-center bg-[#F8F4EA] border border-nusaGold/20 rounded-full text-[12px] font-semibold text-nusaNavy shadow-sm hover:-translate-y-0.5 transition-transform cursor-default"
          >
            {sig}
          </span>
        ))}
      </div>
    </div>
  );
};
