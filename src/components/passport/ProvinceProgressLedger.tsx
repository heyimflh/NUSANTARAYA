"use client";

import { PassportProvinceView } from "@/lib/passport/buildProvinceLedger";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LedgerProps = {
  provinces: {
    planned: PassportProvinceView[];
    started: PassportProvinceView[];
    completed: PassportProvinceView[];
  };
};

export const ProvinceProgressLedger = ({ provinces }: LedgerProps) => {
  const [activeTab, setActiveTab] = useState<"planned" | "started" | "completed">("completed");

  const LedgerColumn = ({ 
    title, 
    items, 
    icon: Icon,
    emptyText,
    isDesktop
  }: { 
    title: string; 
    items: PassportProvinceView[]; 
    icon: React.ElementType;
    emptyText: string;
    isDesktop?: boolean;
  }) => (
    <div className={cn("flex-col gap-4", isDesktop ? "flex" : "flex")}>
      {isDesktop && (
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCCDB8]">
          <div className="w-8 h-8 rounded-full bg-[#E5D7C3] flex items-center justify-center text-[#7A302B]">
            <Icon size={16} />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#2B211B]">{title}</h3>
          <span className="ml-auto text-xs font-mono font-bold text-[#786B60] bg-[#FFFCF6] px-2 py-1 rounded border border-[#DCCDB8]">
            {items.length}
          </span>
        </div>
      )}

      {items.length === 0 ? (
        <div className="flex-1 border-2 border-dashed border-[#DCCDB8] rounded-xl flex items-center justify-center p-8 text-center text-sm text-[#786B60] italic min-h-[150px]">
          {emptyText}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((prov) => (
            <div key={prov.id} className="bg-[#FFFCF6] border border-[#DCCDB8] rounded-lg p-4 flex items-center justify-between group hover:border-[#A77B32] transition-colors">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#786B60] mb-1">{prov.region}</p>
                <h4 className="font-bold text-[#2B211B] text-sm md:text-base">{prov.name}</h4>
              </div>
              <Link 
                href={prov.atlasUrl}
                className="w-8 h-8 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#2B211B] group-hover:bg-[#C9973A] group-hover:text-white transition-colors"
                aria-label={`Buka Atlas ${prov.name}`}
              >
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Tiga Tahap dalam Satu Perjalanan</h2>
        <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
      </div>
      <p className="text-[#786B60] text-sm mb-10 -mt-4">
        Rencana belum menjadi stempel. Stempel menandai eksplorasi yang benar-benar selesai.
      </p>

      {/* Desktop View (3 Columns) */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        <LedgerColumn 
          title="I. Dirancang" 
          items={provinces.planned} 
          icon={MapPin} 
          emptyText="Belum ada provinsi dalam rencana perjalanan." 
          isDesktop 
        />
        <LedgerColumn 
          title="II. Ditelusuri" 
          items={provinces.started} 
          icon={Compass} 
          emptyText="Belum ada Atlas yang sedang kamu lanjutkan." 
          isDesktop 
        />
        <LedgerColumn 
          title="III. Dicap" 
          items={provinces.completed} 
          icon={CheckCircle2} 
          emptyText="Stempel pertama masih menunggu." 
          isDesktop 
        />
      </div>

      {/* Mobile & Tablet View (Tabs) */}
      <div className="block lg:hidden">
        <div className="flex bg-[#E5D7C3] p-1 rounded-xl mb-6 overflow-x-auto hide-scrollbar">
          {(["planned", "started", "completed"] as const).map((tab) => {
            const count = provinces[tab].length;
            const labels = {
              planned: "I. Dirancang",
              started: "II. Ditelusuri",
              completed: "III. Dicap"
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-bold tracking-widest uppercase whitespace-nowrap transition-colors flex items-center justify-center gap-2",
                  activeTab === tab 
                    ? "bg-[#FFFCF6] text-[#2B211B] shadow-sm" 
                    : "text-[#786B60] hover:bg-[#DCCDB8]/50"
                )}
              >
                {labels[tab]}
                <span className={cn(
                  "px-1.5 py-0.5 rounded text-[10px]",
                  activeTab === tab ? "bg-[#E5D7C3] text-[#7A302B]" : "bg-[#DCCDB8] text-[#3A281F]"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div>
          {activeTab === "planned" && (
            <LedgerColumn title="I. Dirancang" items={provinces.planned} icon={MapPin} emptyText="Belum ada provinsi dalam rencana perjalanan." />
          )}
          {activeTab === "started" && (
            <LedgerColumn title="II. Ditelusuri" items={provinces.started} icon={Compass} emptyText="Belum ada Atlas yang sedang kamu lanjutkan." />
          )}
          {activeTab === "completed" && (
            <LedgerColumn title="III. Dicap" items={provinces.completed} icon={CheckCircle2} emptyText="Stempel pertama masih menunggu." />
          )}
        </div>
      </div>
    </section>
  );
};
