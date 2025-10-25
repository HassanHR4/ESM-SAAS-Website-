"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// 🎨 Variants for AccordionTrigger
const accordionTriggerVariants = cva(
  "group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-semibold transition-colors duration-200", 
  {
    variants: {
      variant: {
        default:
          "bg-sky-100 text-sky-900 hover:bg-sky-200 data-[state=open]:bg-sky-200 data-[state=open]:text-sky-950",
        solid:
          "bg-sky-500 text-white hover:bg-sky-600 data-[state=open]:bg-sky-600",
        danger:
          "bg-red-500 text-white hover:bg-red-600 data-[state=open]:bg-red-600",
        success:
          "bg-green-500 text-white hover:bg-green-600 data-[state=open]:bg-green-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export const AccordionTrigger = React.forwardRef(
  ({ className, children, variant, ...props }, ref) => (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm text-gray-700 px-4 py-3 " +
          "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
