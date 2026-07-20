import { Sparkles } from "lucide-react";

export default function HeroRaniButton() {
  return (
    <button
      className="absolute bottom-24 md:bottom-8 right-6 z-50 flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/40 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-black/60 shadow-[0_0_24px_rgba(201,168,76,0.35)] animate-[pulse_3s_ease-in-out_infinite]"
      aria-label="Tanya RANI"
    >
      <span>Tanya RANI</span>
      <Sparkles size={16} className="text-amber-400" />
    </button>
  );
}
