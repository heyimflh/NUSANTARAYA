import React, { KeyboardEvent, useState } from "react";
import { Send } from "lucide-react";

type Props = {
  onSend: (query: string) => void;
  disabled?: boolean;
};

export function RaniComposer({ onSend, disabled }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C85A3E] uppercase mb-4">
        Atau tanyakan dengan caramu sendiri
      </h4>
      
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        className="relative bg-[#FFFDFC] border border-[#DED3C3] transition-all focus-within:border-[#C85A3E] focus-within:ring-1 focus-within:ring-[#C85A3E] group"
      >
        <label htmlFor="rani-composer" className="sr-only">Tanya RANI</label>
        <textarea 
          id="rani-composer"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Contoh: Provinsi mana yang melanjutkan Jalur Rempah?"
          disabled={disabled}
          maxLength={300}
          rows={2}
          className="w-full resize-none bg-transparent border-0 focus:ring-0 px-5 py-4 text-[15px] text-[#292824] placeholder:text-[#746F67]/60 disabled:opacity-50"
        />
        <div className="absolute right-3 bottom-3 flex items-center gap-4">
          <span className="text-[9px] text-[#746F67] font-medium tracking-[0.1em] uppercase hidden sm:block opacity-0 group-focus-within:opacity-100 transition-opacity">
            SHIFT + ENTER = NEWLINE
          </span>
          <button
            type="submit"
            disabled={disabled || !inputValue.trim()}
            className="h-10 px-6 bg-[#292824] flex items-center justify-center text-[#FBF7EF] text-[11px] font-bold tracking-[0.15em] uppercase disabled:bg-[#DED3C3] disabled:text-[#746F67] hover:bg-[#C85A3E] transition-colors"
            aria-label="Kirim Pertanyaan"
          >
            Tanya RANI
          </button>
        </div>
      </form>
    </div>
  );
}
