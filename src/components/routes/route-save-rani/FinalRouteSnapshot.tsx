import { RouteRecommendation } from "@/types/route-planner";

interface FinalRouteSnapshotProps {
  result: RouteRecommendation;
  locale: "id" | "en";
}

export function FinalRouteSnapshot({ result, locale }: FinalRouteSnapshotProps) {
  const title = result.title;
  
  return (
    <div className="bg-[#FAF8F5]/80 backdrop-blur-md border border-[#E8E0CE] rounded-2xl p-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-display font-medium text-[#2C3E50]">
          {title}
        </h3>
        <p className="text-sm text-[#5C6D7E]">
          {result.durationDays} {locale === "en" ? "Days" : "Hari"} • {result.stops.length} {locale === "en" ? "Destinations" : "Destinasi"}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {result.stops.slice(0, 3).map((stop, idx) => (
          <span key={idx} className="text-xs bg-[#E8E0CE] text-[#2C3E50] px-2 py-1 rounded-md">
            {stop.provinceId.replace(/-/g, " ")}
          </span>
        ))}
        {result.stops.length > 3 && (
          <span className="text-xs bg-[#E8E0CE] text-[#2C3E50] px-2 py-1 rounded-md">
            +{result.stops.length - 3}
          </span>
        )}
      </div>
    </div>
  );
}
