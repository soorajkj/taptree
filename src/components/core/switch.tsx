"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { classNames } from "@/utils/classNames";

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={classNames(
        "peer inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-neutral-800",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={classNames(
          "pointer-events-none block size-4 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}
