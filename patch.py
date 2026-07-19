import re

with open("src/components/routes/route-planner-form/RouteAtelier.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "const [hydrated, setHydrated] = useState(false);",
    "const [hydrated, setHydrated] = useState(false);\n    const [prefillMessage, setPrefillMessage] = useState<string | null>(null);"
)

replacement = """      const draft = loadDraft();
      const baseValues = draft || DEFAULT_FORM_VALUES;
      if (hasUrlParams) {
        const merged = sanitizeFormValues({ ...baseValues, ...urlValues });
        setValues(merged);
        trackRoutePlannerEvent("route_planner_prefilled", {
          source,
          journeyId,
          ...buildAnalyticsPayload(merged),
        });
        if (merged.destinationRegionId && merged.interests.length > 0) {
          setActiveStep(3);
        }
        if (source === "recommended-journey") {
          const filledFields = Object.keys(urlValues).length;
          if (filledFields >= 4) {
            setPrefillMessage("Form diisi dari Recommended Journey.");
          } else if (filledFields > 0) {
            setPrefillMessage("Sebagian form diisi dari Recommended Journey. Periksa kembali pilihanmu.");
          } else {
            setPrefillMessage("Journey digunakan sebagai konteks. Lengkapi preferensimu untuk mendapatkan rekomendasi.");
          }
        }
      } else {
        setValues(baseValues);
      }"""

pattern = r"      if \(hasUrlParams\) \{[\s\S]*?\} else \{\s*const draft = loadDraft\(\);\s*if \(draft\) setValues\(draft\);\s*\}"
content = re.sub(pattern, replacement, content)

ui_update = """          {prefillMessage && (
            <div className="mb-6 p-4 rounded-xl bg-[var(--planner-saffron)]/10 border border-[var(--planner-saffron)]/30 text-[var(--planner-primary)] font-medium text-sm flex items-center gap-3 animate-in fade-in">
              <Info className="w-5 h-5 shrink-0" />
              <span>{prefillMessage}</span>
            </div>
          )}
          <PlannerIntroSection />"""

content = content.replace("<PlannerIntroSection />", ui_update)

with open("src/components/routes/route-planner-form/RouteAtelier.tsx", "w", encoding="utf-8") as f:
    f.write(content)

