import { ProvinceSearchItem } from "@/data/provinceSearchData";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchResultDropdownProps = {
  isOpen: boolean;
  results: ProvinceSearchItem[];
  selectedIndex: number;
  onSelect: (id: string) => void;
};

export function SearchResultDropdown({
  isOpen,
  results,
  selectedIndex,
  onSelect,
}: SearchResultDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-[#E8E0CE] rounded-3xl shadow-xl overflow-hidden z-50">
      <div className="px-4 py-3 text-xs font-semibold tracking-wider text-[#0D1B2A]/50 uppercase border-b border-[#E8E0CE]/50">
        Hasil Pencarian
      </div>
      
      {results.length === 0 ? (
        <div className="p-6 text-sm text-center text-[#0D1B2A]/60">
          Belum ditemukan. Coba kata kunci lain seperti &quot;Bali&quot;, &quot;Rendang&quot;, atau &quot;IKN&quot;.
        </div>
      ) : (
        <ul className="max-h-[300px] overflow-y-auto py-2">
          {results.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn(
                    "w-full text-left px-5 py-3 transition-colors flex items-start gap-4 hover:bg-[#F8F4EA]",
                    isSelected && "bg-[#F8F4EA]"
                  )}
                  onClick={() => onSelect(item.id)}
                  onMouseEnter={() => {}} // Could be used to set hover index if desired
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#0D1B2A]/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0D1B2A]">{item.name}</span>
                      {item.tier === "deep" && (
                        <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 rounded-full uppercase">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#0D1B2A]/60 mt-1">
                      {item.region} &middot; {item.highlights.join(" · ")}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
