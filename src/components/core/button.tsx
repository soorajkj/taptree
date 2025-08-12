import { classNames } from "@/utils/classNames";
import type { ComponentProps } from "react";
import React from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={classNames(buttonStyles({ className }))} {...props}>
      {children}
    </button>
  );
}

const buttonStyles = tv({
  base: [
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-white px-4 py-2 text-neutral-950 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
});
