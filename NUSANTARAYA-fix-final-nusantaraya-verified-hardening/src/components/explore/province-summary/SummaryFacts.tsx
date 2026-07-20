import React from 'react';
import { SummaryFact } from '@/types/province';

export const SummaryFacts = ({ facts, isFlagship }: { facts: SummaryFact[], isFlagship: boolean }) => {
  if (!facts || facts.length === 0) return null;
  
  // Ambil 3 fakta pertama
  const displayFacts = [...facts].slice(0, 3);
  
  // Tambahkan fakta ke-4 (Status Atlas)
  displayFacts.push({
    label: 'Status Atlas',
    value: isFlagship ? 'Terkurasi (Unggulan)' : 'Standar'
  });

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-2 pb-2">
      {displayFacts.map((fact, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-nusaNavy/40">
            {fact.label}
          </span>
          <span className="text-[13px] font-semibold text-nusaNavy">
            {fact.value}
          </span>
        </div>
      ))}
    </div>
  );
};
