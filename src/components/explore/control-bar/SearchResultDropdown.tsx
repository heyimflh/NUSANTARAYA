import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RankedSearchResult } from "@/lib/provinceMatch";
import { memo } from "react";

type SearchResultDropdownProps = {
  isOpen: boolean;
  results: RankedSearchResult[];
  selectedIndex: number;
  onSelect: (id: string) => void;
};

export const SearchResultDropdown = memo(function SearchResultDropdown({
  isOpen,
  results,
  selectedIndex,
  onSelect,
}: SearchResultDropdownProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl border border-nusaBorder rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      id="province-search-dropdown"
      role="listbox"
    >
      {results.length > 0 ? (
        <ul className="max-h-[320px] overflow-y-auto hide-scrollbar py-2">
          {results.map((result, index) => {
            const { province, matchedField } = result;
            const isSelected = index === selectedIndex;
            
            return (
              <li
                key={province.id}
                id={`search-result-${province.id}`}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "px-4 py-3 cursor-pointer flex items-center justify-between group transition-colors",
                  isSelected ? "bg-nusaGold/10" : "hover:bg-nusaGold/5"
                )}
                onClick={() => onSelect(province.id)}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <MapPin className={cn(
                      "w-4 h-4 transition-colors",
                      isSelected ? "text-nusaGold" : "text-nusaNavy/40 group-hover:text-nusaGold"
                    )} />
                    <span className="font-semibold text-nusaNavy">
                      {province.name}
                    </span>
                    {province.isFlagship && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-nusaGold/20 text-nusaNavy rounded-full uppercase tracking-wider">
                        Unggulan
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-nusaNavy/60 pl-6">
                    <span>{province.capital}</span>
                    <span className="w-1 h-1 rounded-full bg-nusaBorder" />
                    <span>{province.region}</span>
                  </div>
                  
                  {matchedField !== "name" && matchedField !== "capital" && matchedField !== "region" && matchedField !== "officialName" && (
                    <div className="pl-6 pt-1">
                      <span className="inline-block px-2 py-0.5 bg-nusaNavy/5 text-nusaNavy/70 rounded-md text-[11px] font-medium border border-nusaNavy/10">
                        {matchedField}
                      </span>
                    </div>
                  )}
                </div>

                <ArrowRight className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isSelected 
                    ? "opacity-100 translate-x-0 text-nusaGold" 
                    : "opacity-0 -translate-x-2 text-nusaGold group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="p-8 text-center text-nusaNavy/50">
          <p className="text-sm">Provinsi atau lokasi tidak ditemukan.</p>
          <p className="text-xs mt-1">Coba kata kunci lain seperti "Bali" atau "Rendang"</p>
        </div>
      )}
    </div>
  );
});
