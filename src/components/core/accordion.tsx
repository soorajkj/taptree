"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { classNames } from "@/utils/classNames";

function AccordionRoot({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={classNames(
        "border-b border-neutral-900 px-6 last:border-b-0 hover:bg-neutral-800/30 data-[state=open]:bg-neutral-800/30",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={classNames(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-6 text-left text-sm font-normal text-white transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden pb-6 text-sm"
      {...props}
    >
      <div className={classNames(className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

const Accordion = {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

export { Accordion };
