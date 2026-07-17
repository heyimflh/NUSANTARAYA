"use client";

import { useCallback } from "react";
import { Wallet, Utensils, BookOpen, ListTodo } from "lucide-react";

const NAV_ITEMS = [
  { id: "readiness-budget", label: "Anggaran", icon: Wallet },
  { id: "readiness-culinary", label: "Rasa", icon: Utensils },
  { id: "readiness-etiquette", label: "Etika", icon: BookOpen },
  { id: "readiness-checklist", label: "Checklist", icon: ListTodo },
];

export function RouteReadinessNavigation() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="flex flex-wrap items-center gap-2 mb-8 py-4 border-y border-[#E8E0CE]">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E0CE] text-[#5C6470] hover:border-[#C9A84C] hover:text-[#0D1B2A] transition-colors"
        >
          <item.icon className="w-4 h-4" />
          <span className="text-sm font-semibold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
