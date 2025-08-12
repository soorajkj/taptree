import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textAreaStyle> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={classNames(textAreaStyle({ className }))}
      {...props}
    />
  );
}

const textAreaStyle = tv({
  base: [
    "min-h-28 w-full resize-none rounded-md border border-neutral-900 px-3 py-2 text-white outline-none placeholder:text-neutral-600 read-only:cursor-not-allowed",
  ],
});
