import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelStyle> {}

export function Label(props: LabelProps) {
  const { className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={classNames(labelStyle({ className }))}
      {...rest}
    />
  );
}

const labelStyle = tv({
  base: ["text-sm font-medium select-none dark:text-neutral-300"],
});
