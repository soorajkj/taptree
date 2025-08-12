import React from "react";

export default function HandleSkeleton() {
  return (
    <button className="flex min-h-16 shrink-0 animate-pulse cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-neutral-800 bg-neutral-800/30 px-4 py-2">
      <div className="flex overflow-hidden">
        <span className="size-8 shrink-0 rounded-xl bg-neutral-800"></span>
      </div>
      <div className="flex flex-1 flex-col items-start gap-1 *:leading-none">
        <span className="h-4 w-16 rounded-md bg-neutral-800 text-white"></span>
        <p className="h-4 w-24 rounded-md bg-neutral-800 text-white"></p>
      </div>
    </button>
  );
}
