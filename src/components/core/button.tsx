import type { ComponentProps } from "react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { classNames } from "@/utils/classNames";

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export function Button({
  children,
  asChild = false,
  varinat = "primary",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={classNames(buttonStyles({ varinat, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}

const buttonStyles = tv({
  base: [
    "inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-400/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-600 aria-invalid:ring-red-600/20 dark:focus-visible:border-zinc-500 dark:focus-visible:ring-zinc-500/50 dark:aria-invalid:border-red-700 dark:aria-invalid:ring-red-700/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    varinat: {
      primary:
        "bg-linear-to-b from-zinc-700 to-zinc-800 text-white text-shadow-xs hover:to-zinc-700 dark:from-zinc-600 dark:to-zinc-700 dark:inset-shadow-white/20 dark:hover:to-zinc-600",
      secondary:
        "bg-zinc-100 text-zinc-950 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:inset-shadow-white/15 dark:hover:bg-zinc-800/80",
      destructive:
        "bg-red-600 text-white hover:bg-red-600/90 focus-visible:ring-red-600/20 dark:bg-red-700 dark:hover:bg-red-700/90 dark:focus-visible:ring-red-700/40",
      outline:
        "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
      ghost:
        "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
      link: "text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50",
    },
  },
});
