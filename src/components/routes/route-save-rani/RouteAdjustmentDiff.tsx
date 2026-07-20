import { RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface RouteAdjustmentDiffProps {
  draft: RouteAdjustmentDraft;
  locale: "id" | "en";
  onApply: () => void;
  onCancel: () => void;
}

export function RouteAdjustmentDiff({ draft, locale, onApply, onCancel }: RouteAdjustmentDiffProps) {
  const canApply = draft.status === "valid" && draft.validationErrors.length === 0;

  return (
    <div className="bg-white border border-[#D4AF37]/40 rounded-2xl p-5 md:p-6 shadow-sm mt-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-display font-medium text-lg text-[#2C3E50]">
            {locale === "en" ? "Proposed Adjustment" : "Draf Penyesuaian Rute"}
          </h4>
          <p className="text-sm text-[#5C6D7E] mt-1">
            {draft.summary}
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {draft.changes.length > 0 && (
          <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E8E0CE]">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#5C6D7E] mb-3">
              {locale === "en" ? "Changes" : "Perubahan Utama"}
            </h5>
            <div className="flex flex-col gap-3">
              {draft.changes.map((change, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="flex-1 bg-white border border-[#E8E0CE] rounded-lg p-2 text-center text-[#5C6D7E] line-through">
                    {change.before}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div className="flex-1 bg-[#2C3E50] text-white border border-[#2C3E50] rounded-lg p-2 text-center font-medium shadow-sm">
                    {change.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {draft.unchangedGuarantees.length > 0 && (
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100/50">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              {locale === "en" ? "Kept Guarantees" : "Tetap Dipertahankan"}
            </h5>
            <ul className="flex flex-col gap-1.5">
              {draft.unchangedGuarantees.map((guarantee, idx) => (
                <li key={idx} className="text-sm text-emerald-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{guarantee}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {draft.limitations.length > 0 && (
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              {locale === "en" ? "Please Verify" : "Perlu Diverifikasi"}
            </h5>
            <ul className="flex flex-col gap-1.5">
              {draft.limitations.map((limit, idx) => (
                <li key={idx} className="text-sm text-amber-700 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-4 rounded-xl font-medium text-[#5C6D7E] bg-[#FAF8F5] border border-[#E8E0CE] hover:bg-[#F0EBE1] transition-colors"
        >
          {locale === "en" ? "Keep Original" : "Pertahankan Rute"}
        </button>
        <button
          type="button"
          onClick={onApply}
          disabled={!canApply}
          aria-disabled={!canApply}
          className={cn(
            "flex-1 py-3 px-4 rounded-xl font-medium transition-colors",
            canApply
              ? "bg-[#D4AF37] text-white hover:bg-[#B3932F] shadow-sm"
              : "cursor-not-allowed bg-slate-200 text-slate-500"
          )}
        >
          {locale === "en" ? "Apply Draft" : "Terapkan Draft Ini"}
        </button>
      </div>
    </div>
  );
}
