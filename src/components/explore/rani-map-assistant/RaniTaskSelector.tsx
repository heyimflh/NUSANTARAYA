import React from "react";
import { RaniPrompt } from "@/types/rani";
import { ArrowRight, BookOpen, Compass, Map, Trophy } from "lucide-react";

type Props = {
  prompts: RaniPrompt[];
  onSelect: (query: string) => void;
  disabled?: boolean;
};

export function RaniTaskSelector({ prompts, onSelect, disabled }: Props) {
  // We map the prompts to specific conceptual tasks as requested:
  // 01 Lanjutkan Progress, 02 Temukan Provinsi, 03 Pelajari Ceritanya, 04 Susun Perjalanan

  const tasks = [
    {
      id: "task-progress",
      title: "Lanjutkan Progress",
      description: "Temukan langkah terbaik dari Passport-mu.",
      icon: Trophy,
      query: "Apa milestone Passport saya berikutnya?"
    },
    {
      id: "task-provinsi",
      title: "Temukan Provinsi",
      description: "Cari provinsi sesuai wilayah atau minat aktif.",
      icon: Map,
      query: "Ke mana saya harus lanjut?"
    },
    {
      id: "task-budaya",
      title: "Pelajari Ceritanya",
      description: "Baca budaya, sejarah, istilah, dan sumber.",
      icon: BookOpen,
      query: "Jelaskan budaya wilayah ini"
    },
    {
      id: "task-journey",
      title: "Susun Perjalanan",
      description: "Ubah konteks pilihanmu menjadi journey ringkas.",
      icon: Compass,
      query: "Buat rencana perjalanan ringkas"
    }
  ];

  return (
    <div className="w-full mb-8">
      <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C85A3E] uppercase mb-4">
        Apa Yang Ingin RANI Bantu?
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tasks.map((task, idx) => {
          const Icon = task.icon;
          return (
            <button
              key={task.id}
              onClick={() => onSelect(task.query)}
              disabled={disabled}
              className="group text-left p-5 bg-[#FFFDFC] border border-[#DED3C3] hover:border-[#C85A3E] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex flex-col justify-between h-full min-h-[120px]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-[#746F67] text-sm group-hover:text-[#C85A3E] transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h5 className="font-medium text-[#292824] text-[15px] group-hover:text-[#C85A3E] transition-colors">
                    {task.title}
                  </h5>
                </div>
                <ArrowRight className="w-4 h-4 text-[#DED3C3] group-hover:text-[#C85A3E] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-[13px] text-[#746F67] leading-relaxed">
                {task.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
