"use client";

// A quote trigger on an inner page: opens the EXISTING pop-up for the page's
// product (or the BOP application link) through QuoteHost.

import { useQuote } from "./QuoteHost";
import type { QuoteTarget } from "@/components/home/catalog";

interface QuoteButtonProps {
  target: QuoteTarget;
  className: string;
  children: React.ReactNode;
}

export default function QuoteButton({ target, className, children }: QuoteButtonProps) {
  const { open } = useQuote();
  return (
    <button type="button" data-arc="" className={className} onClick={() => open(target)}>
      <span data-glint="" aria-hidden />
      <span>{children}</span>
    </button>
  );
}
