import { RaniResponse, RaniAction } from "@/types/rani";
import { BookOpen, ExternalLink, ArrowRight, Loader2, RotateCcw } from "lucide-react";

type Props = {
  response: RaniResponse | null;
  isLoading: boolean;
  isOffline: boolean;
  onAction: (action: RaniAction) => void;
  onClear: () => void;
};

export function RaniConversationStage({ response, isLoading, isOffline, onAction, onClear }: Props) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-[#E8E0CE] min-h-[300px]">
        <Loader2 className="w-8 h-8 text-[#2D6BE4] animate-spin mb-4" />
        <p className="text-[#5E6570] text-sm animate-pulse">RANI sedang menyiapkan panduan...</p>
      </div>
    );
  }

  if (!response) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E0CE] overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Offline Banner */}
      {isOffline && (
        <div className="bg-[#B7791F]/10 border-b border-[#B7791F]/20 px-4 py-2 text-xs text-[#B7791F] flex items-center justify-center">
          RANI sedang menggunakan panduan lokal (Offline Mode).
        </div>
      )}

      <div className="p-6 md:p-8 space-y-6 relative" aria-live="polite">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl text-[#0D1B2A] mb-2">{response.title || "Rekomendasi RANI"}</h3>
            {response.summary && (
              <p className="text-[#10233A] font-medium opacity-80">{response.summary}</p>
            )}
          </div>
          <button 
            onClick={onClear}
            className="p-2 text-[#5E6570] hover:text-[#0D1B2A] bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
            title="Muat Ulang Panduan"
            aria-label="Muat Ulang Panduan"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Answer Blocks */}
        <div className="space-y-4 text-[15px] md:text-[16px] text-[#5E6570] leading-relaxed">
          {response.bodyBlocks.map((block, idx) => {
            if (block.type === "paragraph") {
              return <p key={idx}>{block.text}</p>;
            }
            if (block.type === "warning") {
              return (
                <div key={idx} className="bg-[#B7791F]/5 border-l-2 border-[#B7791F] pl-4 py-2 my-4 text-sm text-[#B7791F]">
                  {block.text}
                </div>
              );
            }
            if (block.type === "steps" || block.type === "bullets") {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 my-4">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Source Chips */}
        {response.sourceIds && response.sourceIds.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 mt-4">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Sumber:</span>
            {response.sourceIds.map((srcId) => (
              <div key={srcId} className="flex items-center gap-1.5 px-2.5 py-1 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded text-xs font-medium border border-[#2D6A4F]/20">
                <BookOpen className="w-3 h-3" />
                <span>{srcId.replace('src-', '').replace('-', ' ').toUpperCase()}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center gap-3">
          {response.primaryAction && (
            <button
              onClick={() => onAction(response.primaryAction!)}
              className="w-full md:w-auto flex-1 flex justify-center items-center gap-2 px-6 py-3.5 bg-[#0D1B2A] text-white font-medium rounded-full hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all group"
            >
              {response.primaryAction.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
          
          {response.secondaryActions && response.secondaryActions.length > 0 && (
            <button
              onClick={() => onAction(response.secondaryActions[0])}
              className="w-full md:w-auto flex justify-center items-center gap-2 px-6 py-3.5 bg-white border border-[#E8E0CE] text-[#0D1B2A] font-medium rounded-full hover:bg-gray-50 transition-all"
            >
              {response.secondaryActions[0].label}
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
