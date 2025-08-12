"use client";

import { type UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { type ComponentProps } from "react";

export default function Handle({
  id,
  ...props
}: ComponentProps<"button"> & { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
      className="flex min-h-16 w-full shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent bg-neutral-800/30 px-4 py-2"
    >
      <div className="flex overflow-hidden">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-sm text-white"></span>
      </div>
      <div className="flex flex-1 flex-col items-start gap-1 *:leading-none">
        {props.children}
      </div>
    </button>
  );
}
