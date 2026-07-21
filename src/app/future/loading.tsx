export default function FutureLoading() {
  return (
    <div className="w-full min-h-screen pt-24 pb-32 flex flex-col items-center justify-center future-page-context">
      <div className="animate-pulse flex flex-col items-center gap-6 max-w-xl text-center">
        <div className="h-4 w-32 bg-[#E6DDC9] rounded-full" />
        <div className="h-12 w-full bg-[#E6DDC9] rounded-xl" />
        <div className="h-4 w-4/5 bg-[#F3EFE4] rounded-full" />
        <div className="h-4 w-2/3 bg-[#F3EFE4] rounded-full" />
      </div>
    </div>
  );
}
