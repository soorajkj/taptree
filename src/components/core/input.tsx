import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputStyle> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={classNames(inputStyle({ className }))}
      {...props}
    />
  );
}

const inputStyle = tv({
  base: [
    "h-10 w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2 text-base transition duration-200 ease-out outline-none read-only:cursor-not-allowed hover:bg-neutral-800/30 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-500",
  ],
});
