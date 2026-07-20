import re

with open("src/components/routes/route-save-rani/RouteSaveRaniSection.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "onApplyDraft: (draft: RouteAdjustmentDraft) => void;",
    "onApplyDraft: (draft: RouteAdjustmentDraft) => void;\n  onUndoDraft?: () => void;\n  canUndo?: boolean;"
)

content = content.replace(
    "onApplyDraft,",
    "onApplyDraft,\n  onUndoDraft,\n  canUndo,"
)

replacement = """            <RaniAdjustmentLane 
              key={activeRouteKey ?? "idle"}
              result={result} 
              itinerary={itinerary} 
              values={values} 
              locale={locale} 
              onApplyDraft={onApplyDraft}
              onUndoDraft={onUndoDraft}
              canUndo={canUndo}
            />"""

content = re.sub(
    r"<RaniAdjustmentLane[\s\S]*?/>",
    replacement,
    content
)

with open("src/components/routes/route-save-rani/RouteSaveRaniSection.tsx", "w", encoding="utf-8") as f:
    f.write(content)

# Now update RaniAdjustmentLane.tsx
with open("src/components/routes/route-save-rani/RaniAdjustmentLane.tsx", "r", encoding="utf-8") as f:
    content2 = f.read()

content2 = content2.replace(
    "onApplyDraft: (draft: RouteAdjustmentDraft) => void;",
    "onApplyDraft: (draft: RouteAdjustmentDraft) => void;\n  onUndoDraft?: () => void;\n  canUndo?: boolean;"
)
content2 = content2.replace(
    "export function RaniAdjustmentLane({ result, itinerary, values, locale, onApplyDraft }: RaniAdjustmentLaneProps) {",
    "export function RaniAdjustmentLane({ result, itinerary, values, locale, onApplyDraft, onUndoDraft, canUndo }: RaniAdjustmentLaneProps) {"
)

replacement2 = """      {!activeDraft && (
        <div className="flex flex-wrap gap-2 relative z-10 mt-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt.intent}
              onClick={() => handlePromptClick(prompt.intent)}
              disabled={isResolving}
              className="px-4 py-2 bg-white border border-[#E8E0CE] text-[#2C3E50] text-sm font-medium rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {prompt.label}
              <ArrowRightCircle className="w-4 h-4 opacity-70" />
            </button>
          ))}
          {canUndo && onUndoDraft && (
            <button
              onClick={onUndoDraft}
              disabled={isResolving}
              className="px-4 py-2 bg-white border border-[#E8E0CE] text-red-600 text-sm font-medium rounded-full hover:border-red-500 hover:text-red-500 transition-colors disabled:opacity-50 flex items-center gap-2 ml-auto"
            >
              Undo
            </button>
          )}
        </div>
      )}"""

content2 = re.sub(
    r"\{\!activeDraft && \([\s\S]*?\}\)",
    replacement2,
    content2,
    count=1
)

with open("src/components/routes/route-save-rani/RaniAdjustmentLane.tsx", "w", encoding="utf-8") as f:
    f.write(content2)

