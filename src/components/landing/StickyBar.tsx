"use client";

// Phone-only sticky action bar: the page's quote button (its own label, or the
// short "Get a quote" when the label is longer than 22 characters) + a round
// WhatsApp button. Replaces the floating WhatsApp button on inner pages.

import QuoteButton from "./QuoteButton";
import { whatsappHref, type QuoteTarget } from "@/components/home/catalog";

interface StickyBarProps {
  target: QuoteTarget;
  label: string;
  shortLabel: string;
  waMessage: string;
  waLabel: string;
  groupLabel: string;
}

export default function StickyBar({ target, label, shortLabel, waMessage, waLabel, groupLabel }: StickyBarProps) {
  return (
    <>
      <div className="lp-bar-space" aria-hidden />
      <div className="lp-bar a27-chrome" role="group" aria-label={groupLabel}>
        <QuoteButton target={target} className="lp-btn lp-bar__quote">{label.length > 22 ? shortLabel : label}</QuoteButton>
        <a href={whatsappHref(waMessage)} target="_blank" rel="noopener noreferrer" aria-label={waLabel} className="lp-bar__wa">
          <img src="/2027/icons/deep/whatsapp.svg" alt="" width={22} height={22} />
        </a>
      </div>
    </>
  );
}
