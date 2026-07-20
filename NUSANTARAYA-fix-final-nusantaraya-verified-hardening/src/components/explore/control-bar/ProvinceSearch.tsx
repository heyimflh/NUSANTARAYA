"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Search, X } from "lucide-react";
import { SearchResultDropdown } from "./SearchResultDropdown";
import { searchProvinces, RankedSearchResult } from "@/lib/provinceMatch";
import { provinceMapData } from "@/data/provinces/provinces";
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
  const inputRef = useRef<HTMLInputElement>(null);

  // Canonical search logic
  const results: RankedSearchResult[] = isOpen && searchQuery.trim()
    ? searchProvinces(provinceMapData, searchQuery)
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key !== "Escape" && e.key !== "Enter") {
      setIsOpen(true);
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (isOpen && selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].province.id);
        } else if (isOpen && results.length > 0 && searchQuery.trim() !== "") {
          // If none selected but pressed enter, select the first one
          handleSelect(results[0].province.id);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (id: string) => {
    onProvinceSelect(id);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  return (
    <div 
      className="relative w-full" 
      ref={containerRef}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls="province-search-dropdown"
    >
      <label htmlFor="province-search" className="sr-only">
        Cari provinsi, budaya, kuliner, atau destinasi
      </label>
      <div
        className={cn(
          "relative flex items-center h-[52px] md:h-[60px] px-4 md:px-6 bg-[#FFFDF8] backdrop-blur-md rounded-full border transition-all duration-200 w-full group",
          isOpen
            ? "border-[#C9A84C] shadow-[0_4px_24px_rgba(201,168,76,0.15)] ring-1 ring-[#C9A84C]/50"
            : "border-[#E8E0CE] shadow-sm hover:border-[#C9A84C]/60 hover:shadow-md focus-within:border-[#C9A84C] focus-within:ring-2 focus-within:ring-[#C9A84C]/30 focus-within:shadow-[0_4px_20px_rgba(201,168,76,0.1)]"
        )}
      >
        <Search className={cn(
          "w-5 h-5 transition-colors duration-200 shrink-0",
          isOpen || searchQuery ? "text-[#C9A84C]" : "text-[#0D1B2A]/40 group-hover:text-[#C9A84C]/80"
        )} />
        <input
          ref={inputRef}
          id="province-search"
          type="text"
          role="searchbox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${results[selectedIndex]?.province.id}` : undefined}
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Cari provinsi, budaya, kuliner..."
          className="flex-1 w-full min-w-0 px-3 text-[#0D1B2A] placeholder:text-[#0D1B2A]/40 bg-transparent text-[15px] md:text-base font-medium !outline-none !border-none !ring-0 !shadow-none focus:!outline-none focus:!border-none focus:!ring-0 focus:!shadow-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              onSearchChange("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="p-1.5 text-nusaNavy/40 hover:text-nusaNavy/80 hover:bg-nusaNavy/5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nusaGold"
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
