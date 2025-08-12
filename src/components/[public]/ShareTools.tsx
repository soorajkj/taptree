import React from "react";
import { Icon } from "@/components/core/icon";

export default function ShareTools() {
  return (
    <div className="flex items-center gap-2">
      <button className="flex size-10 items-center justify-center rounded-lg bg-neutral-50 px-2 py-2 text-neutral-950">
        <Icon icon="Share2" className="size-5" />
      </button>
      <button className="flex w-full flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-50 px-4 py-2 text-neutral-950">
        <Icon icon="Framer" className="size-5" />
        sarahgreen.com
        <Icon icon="Copy" className="size-5" />
      </button>
      <button className="flex size-10 items-center justify-center rounded-lg bg-neutral-50 px-2 py-2 text-neutral-950">
        <Icon icon="QrCode" className="size-5" />
      </button>
    </div>
  );
}
