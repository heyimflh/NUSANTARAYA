"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Settings2, Activity, Hexagon } from "lucide-react";
import { FUTURE_SCENARIO_PRESETS } from "@/data/future/scenarios";
import { FutureScenario } from "@/types/future";
import { generateFutureScenario, ScenarioInput } from "@/lib/future/generateFutureScenario";

export function ScenarioStudio() {
  const [activeScenario, setActiveScenario] = useState<FutureScenario | null>(null);

  const handleGenerate = (scenarioId: string) => {
    const preset = FUTURE_SCENARIO_PRESETS.find(s => s.id === scenarioId);
    if (!preset) return;
    
    // Convert preset to deterministic generation
    const scenario = generateFutureScenario({
      perspective: preset.perspective as ScenarioInput["perspective"],
      horizon: preset.horizon as ScenarioInput["horizon"],
      provinceId: preset.provinceId,
      regionId: preset.regionId,
    });
    
    setActiveScenario(scenario);
  };

  return (
    <section id="scenario-studio" className="w-full py-24 md:py-32 bg-[var(--future-ink)] relative overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(var(--future-line) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Controls (5 cols) */}
          <div className="w-full lg:w-5/12">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-4 h-4 text-[var(--future-solar)]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[var(--future-solar)]">
                Interactive Scenario Engine
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-paper)] mb-6 leading-tight">
              Sintesis Masa Depan <span className="italic font-light text-[var(--future-line)]">Anda</span>
            </h2>
            <p className="text-lg text-[var(--future-line)] font-light leading-relaxed mb-10">
              Pilih parameter wilayah dan sudut pandang untuk melihat lintasan masa depan (2030-2045) berdasarkan sinyal lapangan yang telah dikumpulkan.
            </p>

            <div className="space-y-4">
              {FUTURE_SCENARIO_PRESETS.map((scenario) => {
                const isActive = activeScenario?.id === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => handleGenerate(scenario.id)}
                    className={`w-full text-left p-6 rounded-none border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${isActive ? 'bg-[var(--future-charcoal)] border-[var(--future-solar)] shadow-[0_0_20px_rgba(214,166,46,0.1)]' : 'bg-[var(--future-ink)] border-[var(--future-charcoal)] hover:border-[var(--future-line)] hover:bg-[var(--future-charcoal)]/50'}`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--future-solar)]" />
                    )}
                    <div>
                      <h4 className={`font-mono text-sm tracking-widest uppercase mb-1 ${isActive ? 'text-[var(--future-solar)] font-bold' : 'text-[var(--future-paper)]'}`}>
                        {scenario.perspective}
                      </h4>
                      <span className={`text-[10px] font-mono tracking-widest uppercase ${isActive ? 'text-[var(--future-paper)]' : 'text-[var(--future-muted)]'}`}>
                        LOC: {scenario.provinceId?.replace(/-/g, " ") || 'UMUM'} // H: {scenario.horizon}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-[var(--future-solar)] bg-[var(--future-solar)]/10 text-[var(--future-solar)]' : 'border-[var(--future-charcoal)] text-[var(--future-charcoal)] group-hover:text-[var(--future-line)] group-hover:border-[var(--future-line)]'}`}>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dossier (7 cols) */}
          <div className="w-full lg:w-7/12">
            <div className="w-full h-full min-h-[500px] bg-[var(--future-charcoal)]/80 backdrop-blur-md border border-[var(--future-line)]/20 p-8 md:p-12 relative flex flex-col future-frame-shadow">
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--future-solar)]/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--future-solar)]/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--future-solar)]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--future-solar)]/50" />

              {!activeScenario && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-40 p-6">
                  <Hexagon className="w-16 h-16 text-[var(--future-muted)] mb-6" />
                  <p className="text-[var(--future-line)] font-mono tracking-widest text-sm uppercase">Engine Standby</p>
                  <p className="text-xs text-[var(--future-muted)] mt-2">Pilih parameter untuk memuat matriks skenario.</p>
                </div>
              )}

              {activeScenario && (
                <div className="relative z-20 flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="flex items-end justify-between border-b border-[var(--future-line)]/20 pb-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2 h-2 bg-[var(--future-solar)] rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-[var(--future-solar)] uppercase tracking-widest block">
                          Skenario {activeScenario.horizon}
                        </span>
                      </div>
                      <h3 className="text-3xl font-playfair text-[var(--future-paper)] capitalize">
                        Perspektif {activeScenario.perspective}
                      </h3>
                      <p className="text-xs font-mono uppercase text-[var(--future-line)] tracking-widest mt-2">
                        Lokasi: {activeScenario.provinceId?.replace(/-/g, " ") || 'UMUM'}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-3 py-1.5 bg-[var(--future-ink)] text-[var(--future-solar)] font-mono text-[10px] font-bold tracking-widest uppercase border border-[var(--future-solar)]/30 shadow-[0_0_10px_rgba(214,166,46,0.1)]">
                        v{activeScenario.version}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--future-teal)] mb-4 border-b border-[var(--future-teal)]/20 pb-2">
                          <Settings2 className="w-3 h-3" /> Tema Prioritas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeScenario.priorityThemeIds.map(t => (
                            <span key={t} className="px-3 py-1.5 bg-[var(--future-ink)] border border-[var(--future-line)]/20 text-[var(--future-paper)] text-[10px] font-mono uppercase tracking-widest">
                              {t.replace(/-/g, " ")}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--future-muted)] mb-4 border-b border-[var(--future-line)]/20 pb-2">
                          <Activity className="w-3 h-3" /> Sinyal Dominan
                        </h4>
                        <ul className="space-y-3">
                          {activeScenario.signalIds.map(s => (
                            <li key={s} className="flex gap-3 text-sm text-[var(--future-paper)] font-light">
                              <span className="text-[var(--future-solar)] mt-1 opacity-50">▹</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="p-6 bg-[var(--future-ink)] border border-[var(--future-terracotta)]/30 h-full">
                        <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--future-terracotta)] mb-4 border-b border-[var(--future-terracotta)]/20 pb-2">
                          <Activity className="w-3 h-3" /> Risiko & Trade-off
                        </h4>
                        <ul className="space-y-4">
                          {activeScenario.tradeOffIds.map(t => (
                            <li key={t} className="flex gap-3 text-sm text-[var(--future-paper)] font-light leading-relaxed">
                              <span className="text-[var(--future-terracotta)] mt-1 opacity-50">!</span>
                              {t.replace(/-/g, " ")}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
