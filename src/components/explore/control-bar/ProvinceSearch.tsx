"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { SearchResultDropdown } from "./SearchResultDropdown";
import { ProvinceSearchItem, provinceSearchData } from "@/data/provinceSearchData";
import { cn } from "@/lib/utils";

type ProvinceSearchProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onProvinceSelect: (provinceId: string) => void;
};

export function ProvinceSearch({
  searchQuery,
  onSearchChange,
  onProvinceSelect,
}: ProvinceSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter logic for dropdown
  const results: ProvinceSearchItem[] = searchQuery
    ? provinceSearchData
        .filter((province) => {
          const query = searchQuery.toLowerCase();
          const searchableText = [
            province.name,
            province.region,
            province.capital,
            ...province.categories,
            ...province.highlights,
            ...province.keywords,
          ]
            .join(" ")
            .toLowerCase();
          return searchableText.includes(query);
        })
        .slice(0, 6) // limit to 6
    : [];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleSelect(results[selectedIndex].id);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleSelect = (id: string) => {
    onProvinceSelect(id);
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label htmlFor="province-search" className="sr-only">
        Cari provinsi, budaya, kuliner, atau destinasi
      </label>
      <div
        className={cn(
          "relative flex items-center h-[52px] md:h-[64px] px-4 md:px-6 bg-white/90 backdrop-blur-md rounded-full border transition-all duration-300",
          isOpen
            ? "border-[#C9A84C] shadow-[0_8px_32px_rgba(201,168,76,0.15)] bg-white"
            : "border-[#E8E0CE] shadow-[0_4px_16px_rgba(13,27,42,0.03)] hover:border-[#C9A84C]/60 hover:shadow-[0_6px_20px_rgba(13,27,42,0.06)]"
        )}
      >
        <Search className="w-5 h-5 text-[#0D1B2A]/40" />
        <input
          id="province-search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Cari provinsi, budaya, kuliner, atau destinasi..."
          className="flex-1 px-3 text-[#0D1B2A] placeholder:text-[#0D1B2A]/40 bg-transparent text-base !outline-none !border-none !ring-0 !shadow-none focus:!outline-none focus:!border-none focus:!ring-0 focus:!shadow-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              onSearchChange("");
              setIsOpen(false);
            }}
            className="p-1.5 text-[#0D1B2A]/40 hover:text-[#0D1B2A]/70 hover:bg-[#0D1B2A]/5 rounded-full transition-colors"
            aria-label="Hapus pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <SearchResultDropdown
        isOpen={isOpen && searchQuery.length > 0}
        results={results}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />
    </div>
  );
}
