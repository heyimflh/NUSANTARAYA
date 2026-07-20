$content = Get-Content src/components/routes/route-planner-form/RouteAtelier.tsx -Raw
$content = $content -replace 'const \[hydrated, setHydrated\] = useState\(false\);', "const [hydrated, setHydrated] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState<string | null>(null);"

$replacement = "      const draft = loadDraft();
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
      }"

$content = $content -replace '      if \(hasUrlParams\) \{\r?\n\s*const merged = sanitizeFormValues\(\{ \.\.\.DEFAULT_FORM_VALUES, \.\.\.urlValues \}\);\r?\n\s*setValues\(merged\);\r?\n\s*trackRoutePlannerEvent\("route_planner_prefilled", \{\r?\n\s*source,\r?\n\s*journeyId,\r?\n\s*\.\.\.buildAnalyticsPayload\(merged\),\r?\n\s*\}\);\r?\n\s*if \(merged.destinationRegionId && merged.interests.length > 0\) \{\r?\n\s*setActiveStep\(3\);\r?\n\s*\}\r?\n\s*\} else \{\r?\n\s*const draft = loadDraft\(\);\r?\n\s*if \(draft\) setValues\(draft\);\r?\n\s*\}', $replacement

$uiUpdate = "          {prefillMessage && (
            <div className=\"mb-6 p-4 rounded-xl bg-[var(--planner-saffron)]/10 border border-[var(--planner-saffron)]/30 text-[var(--planner-primary)] font-medium text-sm flex items-center gap-3 animate-in fade-in\">
              <Info className=\"w-5 h-5 shrink-0\" />
              <span>{prefillMessage}</span>
            </div>
          )}
          <PlannerIntroSection />"

$content = $content -replace '<PlannerIntroSection />', $uiUpdate

Set-Content src/components/routes/route-planner-form/RouteAtelier.tsx -Value $content
