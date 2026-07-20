import React, { useState, useRef, useEffect } from "react";
import { provinceMapData } from "@/data/provinces/provinces";
import { X, ChevronDown } from "lucide-react";
import { announcer } from "./PlannerLiveRegion";
import type { ProvinceId } from "@/data/provinces/provinceIds";

interface OriginComboboxProps {
  value: ProvinceId | null;
  onChange: (val: ProvinceId | null) => void;
}

export function OriginCombobox({ value, onChange }: OriginComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const selectedProvince = value ? provinceMapData.find((p) => p.id === value) : null;
  const filtered = provinceMapData.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveIndex(-1);
      announcer.announce(`Menampilkan ${filtered.length} provinsi. Gunakan panah atas dan bawah untuk memilih.`);
    }
  }, [isOpen, search, filtered.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(prev => (prev < filtered.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filtered.length) {
          onChange(filtered[activeIndex].id as ProvinceId);
          setSearch("");
          setIsOpen(false);
          inputRef.current?.focus();
          announcer.announce(`Provinsi ${filtered[activeIndex].name} dipilih.`);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.focus();
        break;
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listboxRef.current) {
      const activeElement = listboxRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex]);

  const activeId = activeIndex >= 0 ? `origin-option-${activeIndex}` : undefined;

  return (
    <div className="flex flex-col gap-3" ref={containerRef}>
      <div className="flex flex-col gap-1">
        <label id="origin-label" className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
          Kamu berangkat dari mana?
        </label>
        <span id="origin-helper" className="font-inter text-[14px] text-[var(--planner-muted)]">
          Opsional. Ini membantu kami memilih titik masuk dan urutan destinasi yang lebih masuk akal.
        </span>
      </div>

      <div className="relative">
        <div 
          className={`flex items-center w-full min-h-[64px] px-5 bg-[var(--planner-paper)] border-2 transition-all duration-300 rounded-xl ${
            isOpen ? "border-[var(--planner-primary)] shadow-[0_4px_16px_rgba(199,91,60,0.08)]" : "border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/50"
          }`}
        >
          {/* Departure Marker */}
          <div className="relative shrink-0 w-4 h-4 flex items-center justify-center mr-4">
            <div className="absolute inset-0 bg-[var(--planner-canvas)] border-[2px] border-[var(--planner-ink)] z-10" />
            <div className="absolute top-1/2 left-4 w-4 h-[1px] bg-[var(--planner-ink)]" />
          </div>
          
          <div className="flex-1 flex items-center min-w-0 pl-2">
            {selectedProvince && !isOpen ? (
              <span className="font-inter text-[16px] text-[var(--planner-ink)] font-bold truncate">
                {selectedProvince.name}
              </span>
            ) : (
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="origin-listbox"
                aria-activedescendant={activeId}
                aria-labelledby="origin-label"
                aria-describedby="origin-helper"
                aria-autocomplete="list"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (!isOpen) setIsOpen(true);
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsOpen(true)}
                placeholder={selectedProvince ? selectedProvince.name : "Ketik atau pilih provinsi..."}
                className="w-full bg-transparent border-none outline-none font-inter text-[16px] text-[var(--planner-ink)] placeholder:text-[var(--planner-muted)]"
              />
            )}
          </div>

          <div className="flex items-center gap-1 ml-2">
            {selectedProvince && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(null);
                  setSearch("");
                  inputRef.current?.focus();
                  announcer.announce("Keberangkatan dibatalkan.");
                }}
                className="p-2 text-[var(--planner-muted)] hover:text-[var(--planner-primary)] hover:bg-[var(--planner-paper-raised)] transition-colors focus:outline-none"
                aria-label="Hapus provinsi asal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--planner-ink)]"
              aria-label="Buka daftar provinsi"
            >
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] shadow-lg rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <ul 
              id="origin-listbox" 
              ref={listboxRef}
              role="listbox" 
              className="max-h-[320px] overflow-y-auto overscroll-contain py-2"
            >
              {filtered.length === 0 ? (
                <li className="px-5 py-4 text-[14px] text-[var(--planner-muted)] font-inter italic text-center">
                  Provinsi tidak ditemukan
                </li>
              ) : (
                filtered.map((p, index) => {
                  const isActive = index === activeIndex;
                  const isSelected = value === p.id;
                  
                  return (
                    <li
                      key={p.id}
                      id={`origin-option-${index}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        onChange(p.id as ProvinceId);
                        setSearch("");
                        setIsOpen(false);
                        inputRef.current?.focus();
                        announcer.announce(`Provinsi ${p.name} dipilih.`);
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`px-5 py-3 cursor-pointer flex items-center justify-between transition-colors ${
                        isActive || isSelected ? "bg-[var(--planner-paper-raised)]" : "hover:bg-[var(--planner-canvas)]"
                      }`}
                    >
                      <span className={`font-inter text-[15px] ${isSelected ? "font-bold text-[var(--planner-primary)]" : "font-medium text-[var(--planner-ink)]"}`}>
                        {p.name}
                      </span>
                      {isSelected && <div className="w-2 h-2 bg-[var(--planner-primary)]" />}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
