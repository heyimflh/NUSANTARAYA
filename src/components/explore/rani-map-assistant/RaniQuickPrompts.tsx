import { RaniPrompt } from "@/types/rani";
import { MessageSquare } from "lucide-react";

type Props = {
  prompts: RaniPrompt[];
  onSelect: (query: string) => void;
  disabled?: boolean;
};

export function RaniQuickPrompts({ prompts, onSelect, disabled }: Props) {
  if (!prompts.length) return null;

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
      {prompts.map((prompt) => (
        <button
          key={prompt.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(prompt.label)}
          className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#F2F6FF] border border-[#E8E0CE] hover:border-[#2D6BE4] rounded-full text-sm text-[#0D1B2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MessageSquare className="w-4 h-4 text-[#C9A84C]" />
          <span>{prompt.label}</span>
        </button>
      ))}
    </div>
  );
}
