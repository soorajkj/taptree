import React from "react";
import { Icon } from "../core/icon";

export default function OtherLinks() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex min-h-16 items-center gap-4 rounded-lg bg-neutral-800/30 px-4 py-2"
        >
          <div className="flex size-10 items-center justify-center">
            <Icon icon="Link2" className="size-4" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 leading-none">
            <p className="font-light text-white">Follow on</p>
          </div>
          <div className="flex size-10 items-center justify-center">
            <Icon icon="ChevronDown" className="size-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
