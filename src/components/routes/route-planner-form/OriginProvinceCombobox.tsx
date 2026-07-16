"use client";

/**
 * OriginProvinceCombobox — Searchable combobox for 38 provinces.
 * Optional field with clear button. Uses ARIA combobox pattern.
 * Value is null for "Fleksibel".
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { provinceMapData } from "@/data/provinces/provinces";
import { Search, X, MapPin, ChevronDown } from "lucide-react";

interface OriginProvinceComboboxProps {
  value: string | null;
  onChange: (provinceId: string | null) => void;
  disabled?: boolean;
  error?: string;
}

export function OriginProvinceCombobox({
  value,
  onChange,
  disabled = false,
  error,
}: OriginProvinceComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort provinces alphabetically by name
  const allProvinces = provinceMapData
    .map((p) => ({ id: p.id, name: p.name }))
    .sort((a, b) => a.name.localeCompare(b.name, "id"));

  // Filter by search query
  const filteredProvinces = searchQuery.trim()
    ? allProvinces.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProvinces;

  // Get selected province label
  const selectedLabel = value
    ? allProvinces.find((p) => p.id === value)?.name ?? value
    : "";

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(true);
          return;
        }
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredProvinces.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex === -1) {
            // Select "Fleksibel"
            onChange(null);
            setIsOpen(false);
            setSearchQuery("");
          } else if (filteredProvinces[highlightedIndex]) {
            onChange(filteredProvinces[highlightedIndex].id);
            setIsOpen(false);
            setSearchQuery("");
          }
          break;
        case "Escape":
          setIsOpen(false);
          setSearchQuery("");
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, filteredProvinces, highlightedIndex, onChange]
  );

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const items = listRef.current.querySelectorAll("[role='option']");
      items[highlightedIndex + 1]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const errorId = error ? "origin-error" : undefined;

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Dari provinsi mana perjalanan dimulai?
      </legend>
      <p className="font-inter text-[13px] text-[#9DAEC2] mb-3">
        Opsional. Kosongkan jika kamu masih fleksibel.
      </p>

      <div ref={containerRef} className="relative">
        {/* Input */}
        <div
          className={[
            "relative flex items-center border-2 rounded-2xl overflow-hidden transition-colors",
            isOpen
              ? "border-[#C9A84C] ring-2 ring-[#C9A84C]/20"
              : error
              ? "border-[#8B2020]"
              : "border-[#E8E0CE] hover:border-[#C9A84C]/40",
            "bg-white",
          ].join(" ")}
        >
          <Search
            className="w-4 h-4 text-[#9DAEC2] ml-4 shrink-0"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="origin-listbox"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-label="Cari provinsi keberangkatan"
            aria-describedby={errorId}
            value={isOpen ? searchQuery : selectedLabel}
            placeholder="Cari provinsi keberangkatan…"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setHighlightedIndex(-1);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => {
              setIsOpen(true);
              setSearchQuery("");
              setHighlightedIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            className="flex-1 py-3.5 px-3 font-inter text-[14px] text-[#0D1B2A] placeholder:text-[#9DAEC2] bg-transparent outline-none"
            disabled={disabled}
          />
          {value && (
            <button
              type="button"
              onClick={() => {
                onChange(null);
                setSearchQuery("");
                inputRef.current?.focus();
              }}
              className="p-2 mr-1 hover:bg-[#F8F4EA] rounded-lg transition-colors"
              aria-label="Hapus provinsi keberangkatan"
            >
              <X className="w-4 h-4 text-[#9DAEC2]" />
            </button>
          )}
          <ChevronDown
            className={[
              "w-4 h-4 text-[#9DAEC2] mr-3 shrink-0 transition-transform",
              isOpen ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden="true"
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <ul
            ref={listRef}
            id="origin-listbox"
            role="listbox"
            aria-label="Pilih provinsi"
            className="absolute z-50 mt-2 w-full max-h-[280px] overflow-y-auto rounded-2xl border border-[#E8E0CE] bg-white shadow-lg"
          >
            {/* Fleksibel option */}
            <li
              role="option"
              aria-selected={value === null}
              className={[
                "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
                highlightedIndex === -1
                  ? "bg-[#C9A84C]/[0.06]"
                  : "hover:bg-[#FFFDF8]",
                value === null ? "font-medium" : "",
              ].join(" ")}
              onClick={() => {
                onChange(null);
                setIsOpen(false);
                setSearchQuery("");
              }}
              onMouseEnter={() => setHighlightedIndex(-1)}
            >
              <MapPin className="w-4 h-4 text-[#9DAEC2]" aria-hidden="true" />
              <span className="font-inter text-[14px] text-[#5C6470] italic">
                Belum menentukan / fleksibel
              </span>
            </li>

            {/* Province list */}
            {filteredProvinces.length > 0 ? (
              filteredProvinces.map((province, idx) => {
                const isHighlighted = idx === highlightedIndex;
                const isSelectedItem = value === province.id;
                return (
                  <li
                    key={province.id}
                    role="option"
                    aria-selected={isSelectedItem}
                    className={[
                      "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
                      isHighlighted ? "bg-[#C9A84C]/[0.06]" : "hover:bg-[#FFFDF8]",
                      isSelectedItem ? "font-medium text-[#C9A84C]" : "text-[#0D1B2A]",
                    ].join(" ")}
                    onClick={() => {
                      onChange(province.id);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                  >
                    <MapPin
                      className={[
                        "w-4 h-4 shrink-0",
                        isSelectedItem ? "text-[#C9A84C]" : "text-[#9DAEC2]",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-[14px]">{province.name}</span>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-6 text-center font-inter text-[14px] text-[#9DAEC2]">
                Tidak ditemukan provinsi yang cocok.
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p id="origin-error" className="font-inter text-[13px] text-[#8B2020] mt-1" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
