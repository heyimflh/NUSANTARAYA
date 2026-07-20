"use client";

import { useState, useMemo, useSyncExternalStore } from "react";
import { ListTodo, Check, RotateCcw } from "lucide-react";
import type { RouteChecklistTemplate } from "@/lib/routes/readiness/routeReadinessSchema";
import {
  saveChecklistProgress,
  loadChecklistProgress,
  clearChecklistProgress,
} from "@/lib/routes/readiness/checklistPersistence";

interface ChecklistModuleProps {
  template: RouteChecklistTemplate;
}

export function ChecklistModule({ template }: ChecklistModuleProps) {
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
  if (!isClient) return <div className="py-8 h-[400px]">Memuat checklist...</div>;
  return <ChecklistModuleClient key={`${template.routeId}@${template.routeVersion}@${template.itineraryVersion}`} template={template} />;
}

function ChecklistModuleClient({ template }: ChecklistModuleProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    const saved = loadChecklistProgress(template.routeId, template.routeVersion, template.itineraryVersion);
    return saved?.templateVersion === template.version
      ? new Set(saved.completedItemIds)
      : new Set<string>();
  });

  const toggleItem = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      
      saveChecklistProgress({
        templateId: template.id,
        templateVersion: template.version,
        routeId: template.routeId,
        routeVersion: template.routeVersion,
        completedItemIds: Array.from(next),
        updatedAt: new Date().toISOString(),
      }, template.itineraryVersion);
      
      return next;
    });
  };

  const handleReset = () => {
    if (window.confirm("Apakah Anda yakin ingin mengatur ulang checklist?")) {
      setCompletedIds(new Set());
      clearChecklistProgress(template.routeId, template.routeVersion, template.itineraryVersion);
    }
  };

  const groups = useMemo(() => {
    const result: Record<string, typeof template.items> = {
      "before-booking": [],
      "before-departure": [],
      "transport": [],
      "activities": [],
    };
    
    template.items.forEach((item) => {
      if (result[item.groupId]) {
        result[item.groupId].push(item);
      } else {
        result[item.groupId] = [item];
      }
    });
    
    return result;
  }, [template.items]);

  const totalItems = template.items.length;
  const completedCount = completedIds.size;
  const isAllDone = totalItems > 0 && completedCount === totalItems;

  return (
    <div id="readiness-checklist" className="py-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-2 flex items-center gap-3">
            <ListTodo className="w-6 h-6 text-[#2D5A27]" />
            Checklist Perjalanan
          </h3>
          <p className="text-[#5C6470]">
            {isAllDone
              ? "Checklist dasar selesai. Tetap periksa informasi operasional terbaru sebelum berangkat."
              : `${completedCount} dari ${totalItems} selesai`}
          </p>
        </div>
        
        {completedCount > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E0CE] text-[#5C6470] hover:bg-[#F8F4EA] transition-colors text-sm font-semibold shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Checklist
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {Object.entries(groups).map(([groupId, items]) => {
          if (items.length === 0) return null;
          
          return (
            <div key={groupId} className="bg-white rounded-3xl border border-[#E8E0CE] overflow-hidden">
              <div className="bg-[#FFFDF8] px-6 py-4 border-b border-[#E8E0CE]">
                <h4 className="font-bold text-[#0D1B2A] capitalize">
                  {groupId.replace("-", " ")}
                </h4>
              </div>
              <div className="flex flex-col">
                {items.map((item) => {
                  const isChecked = completedIds.has(item.id);
                  return (
                    <label
                      key={item.id}
                      className="flex items-start gap-4 p-6 border-b border-[#E8E0CE]/50 last:border-0 hover:bg-[#F8F4EA] transition-colors cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center w-6 h-6 rounded-md border-2 border-[#D9CDBC] shrink-0 mt-0.5 group-hover:border-[#2D5A27] transition-colors">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                        />
                        {isChecked && (
                          <div className="absolute inset-0 bg-[#2D5A27] rounded-sm flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold transition-colors ${isChecked ? "text-[#5C6470] line-through" : "text-[#0D1B2A]"}`}>
                          {item.labelId}
                        </p>
                        {item.descriptionId && (
                          <p className="text-sm text-[#5C6470] mt-1">{item.descriptionId}</p>
                        )}
                      </div>
                      {item.priority === "required-check" && !isChecked && (
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#C75B3C] bg-[#F5E1D8] px-2 py-1 rounded">
                          Prioritas
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
