import React, { useRef, useEffect } from "react";
import { RaniConversationState, RaniAction, RaniResponse } from "@/types/rani";
import { RaniSourceReference } from "./RaniSourceReference";

type Props = {
  conversation: RaniConversationState;
  onAction: (action: RaniAction) => void;
};

export function RaniConversationJournal({ conversation, onAction }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      // Small delay to allow render before scrolling
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 50);
    }
  }, [conversation.messages, conversation.status]);

  // If no user messages (meaning we are only looking at the proactive recommendation or nothing), 
  // we don't need to show the journal. The proactive recommendation is handled separately.
  const hasConversation = conversation.messages.some(m => m.role === "user");
  
  if (!hasConversation && conversation.status !== "loading") {
    return null;
  }

  return (
    <div className="w-full mb-8">
      <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C85A3E] uppercase mb-4">
        Catatan Eksplorasi
      </h4>
      
      <div 
        ref={scrollRef}
        className="bg-[#FFFDFC] border border-[#DED3C3] p-6 lg:p-8 max-h-[600px] overflow-y-auto scrollbar-hide"
        aria-live="polite"
      >
        <div className="flex flex-col gap-8">
          {conversation.messages.map((msg, index) => {
            // We skip the very first system message if it's proactive (no preceding user message)
            // But since we only render this component if `hasConversation` is true, we render all.
            
            if (msg.role === "user") {
              return (
                <div key={msg.id} className="pb-6 border-b border-[#DED3C3] border-dashed">
                  <h5 className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase mb-2">Pertanyaanmu</h5>
                  <p className="font-serif text-xl text-[#292824] leading-relaxed">
                    “{msg.text}”
                  </p>
                </div>
              );
            }

            if (msg.role === "rani" && msg.response) {
              return (
                <div key={msg.id} className="pb-6">
                  <h5 className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase mb-3">Catatan RANI</h5>
                  
                  {msg.response.title && (
                    <h4 className="font-serif text-2xl text-[#292824] mb-4">{msg.response.title}</h4>
                  )}
                  
                  <div className="space-y-4 text-[15px] text-[#292824] leading-relaxed">
                    {msg.response.bodyBlocks.map((block, idx) => {
                      if (block.type === "paragraph") return <p key={idx}>{block.text}</p>;
                      if (block.type === "warning") {
                        return (
                          <div key={idx} className="bg-[#F4EBDD] border-l-2 border-[#C85A3E] pl-4 py-2 my-2 text-[14px] text-[#292824]">
                            {block.text}
                          </div>
                        );
                      }
                      if (block.type === "steps") {
                        return (
                          <ol key={idx} className="list-decimal pl-5 space-y-2 my-2">
                            {block.items.map((item, i) => <li key={i}>{item}</li>)}
                          </ol>
                        );
                      }
                      if (block.type === "bullets") {
                        return (
                          <ul key={idx} className="list-disc pl-5 space-y-2 my-2">
                            {block.items.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <RaniSourceReference sourceIds={msg.response.sourceIds} />

                  {msg.response.primaryAction && (
                    <div className="mt-6 pt-6 border-t border-[#DED3C3] border-dashed">
                       <h5 className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase mb-3">Langkah Berikutnya</h5>
                       <button
                          onClick={() => onAction(msg.response!.primaryAction!)}
                          className="inline-flex justify-center items-center px-6 py-3 bg-[#292824] text-white font-medium hover:bg-[#746F67] transition-colors"
                        >
                          {msg.response.primaryAction.label}
                        </button>
                    </div>
                  )}
                </div>
              );
            }
            
            return null;
          })}

          {conversation.status === "loading" && (
            <div className="pb-6">
              <h5 className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase mb-3">Catatan RANI</h5>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A3E] animate-pulse" />
                <span className="text-[14px] text-[#746F67] italic">RANI sedang menyusun panduan...</span>
              </div>
            </div>
          )}

          {conversation.status === "error" && (
            <div className="pb-6">
              <div className="bg-[#F4EBDD] border-l-2 border-[#C85A3E] pl-4 py-3 text-[14px] text-[#292824]">
                Terjadi kesalahan. Silakan coba lagi.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
