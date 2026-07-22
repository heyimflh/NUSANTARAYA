'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutFeatureNodes } from '@/data/about/featureNodes';
import Link from 'next/link';

export function EcosystemAtlas() {
  const [activeNodeId, setActiveNodeId] = useState<string>('nusa-map');
  
  const activeNode = aboutFeatureNodes.find(n => n.id === activeNodeId) || aboutFeatureNodes[0];

  // Group nodes by general intent for the foldout UI
  const groupedNodes = {
    Understand: aboutFeatureNodes.filter(n => ['nusa-map', 'province-atlas', 'archive', 'aksara'].includes(n.id)),
    Experience: aboutFeatureNodes.filter(n => ['nusa-rasa', 'jalur-rempah'].includes(n.id)),
    Journey: aboutFeatureNodes.filter(n => ['routes', 'passport', 'rani'].includes(n.id)),
    Future: aboutFeatureNodes.filter(n => ['future'].includes(n.id))
  };

  return (
    <section id="ecosystem-atlas" className="relative py-24 md:py-32 bg-about-paper-deep/30">
      <div className="nusa-container">
        
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-about-ink mb-4">The Ecosystem Atlas</h2>
          <p className="text-about-charcoal text-lg">
            Satu ekosistem yang dirancang agar setiap informasi dapat saling bertukar konteks. Temukan bagaimana tiap pintu saling terhubung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-about-paper rounded-2xl shadow-sm border border-about-line p-6 md:p-10">
          
          {/* Domain Groups & Nodes Graph (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Object.entries(groupedNodes).map(([domain, nodes]) => (
                <div key={domain} className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-about-terracotta/70 font-semibold border-b border-about-line/50 pb-2">
                    {domain}
                  </h3>
                  <ul className="space-y-3">
                    {nodes.map(node => (
                      <li key={node.id}>
                        <button
                          onClick={() => setActiveNodeId(node.id)}
                          aria-pressed={activeNodeId === node.id}
                          className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-about-saffron ${
                            activeNodeId === node.id 
                              ? 'bg-about-canvas shadow-sm border border-about-saffron-soft text-about-ink'
                              : 'hover:bg-about-canvas border border-transparent text-about-charcoal'
                          }`}
                        >
                          <span className="font-medium">{node.localeContent.id.title}</span>
                          {node.status !== 'available' && (
                            <span className="text-[10px] uppercase tracking-wider bg-about-paper-deep px-2 py-0.5 rounded text-about-muted">
                              {node.status}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel: What moves between pages (5 columns) */}
          <div className="lg:col-span-5">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeNodeId}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
                 className="h-full bg-about-canvas rounded-xl p-6 md:p-8 border border-about-line flex flex-col"
               >
                 <div className="mb-6">
                   <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-serif text-about-ink">{activeNode.localeContent.id.title}</h3>
                      {activeNode.status !== 'available' && (
                        <span className="text-xs bg-about-warning/10 text-about-warning px-2 py-1 rounded font-medium">
                          {activeNode.status}
                        </span>
                      )}
                   </div>
                   <p className="text-about-charcoal text-sm font-medium">{activeNode.localeContent.id.summary}</p>
                 </div>
                 
                 <p className="text-about-muted text-sm italic mb-8 border-l-2 border-about-saffron pl-4 py-1">
                   "{activeNode.localeContent.id.promise}"
                 </p>

                 <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-about-muted mb-3 font-semibold">Berbagi Konteks Dengan:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeNode.connectedFeatureIds.map(connId => {
                          const connectedNode = aboutFeatureNodes.find(n => n.id === connId);
                          if (!connectedNode) return null;
                          return (
                            <button 
                              key={connId}
                              onClick={() => setActiveNodeId(connId)}
                              className="px-3 py-1.5 text-xs bg-about-paper rounded border border-about-line/60 text-about-charcoal hover:border-about-terracotta hover:text-about-terracotta transition-colors"
                            >
                              {connectedNode.localeContent.id.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-about-line">
                    {activeNode.status === 'available' && activeNode.route ? (
                      <Link 
                        href={activeNode.route}
                        className="block w-full py-3 text-center bg-about-ink text-about-paper rounded font-medium hover:bg-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron focus:ring-offset-2 focus:ring-offset-about-canvas"
                      >
                        Buka {activeNode.localeContent.id.title}
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="block w-full py-3 text-center bg-about-paper-deep text-about-muted rounded font-medium cursor-not-allowed"
                      >
                        Fitur sedang dalam tahap {activeNode.status}
                      </button>
                    )}
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
