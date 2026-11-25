"use client";

// Phone-only sticky action bar: the page's quote button (its own label, or the
// short "Get a quote" when the label is longer than 22 characters) + a round
// WhatsApp button. Service pages (no quote target): "Call" + "WhatsApp", equal
// widths. Replaces the floating WhatsApp button on inner pages.

import QuoteButton from "./QuoteButton";
import { whatsappHref, type QuoteTarget } from "@/components/home/catalog";

interface StickyBarProps {
  /** Undefined on service pages */
  target?: QuoteTarget;
  label: string;
  shortLabel: string;
  waMessage: string;
  waLabel: string;
  callLabel: string;
  phoneHref: string;
  groupLabel: string;
}

export default function StickyBar({ target, label, shortLabel, waMessage, waLabel, callLabel, phoneHref, groupLabel }: StickyBarProps) {
  if (!target) {
    return (
      <>
        <div className="lp-bar a27-chrome" role="group" aria-label={groupLabel}>
          <a href={phoneHref} className="lp-bar__call">
            <img src="/2027/icons/navy/phone.svg" alt="" width={18} height={18} />
            {callLabel}
          </a>
          <a href={whatsappHref(waMessage)} target="_blank" rel="noopener noreferrer" className="lp-bar__wa2">
            <img src="/2027/icons/deep/whatsapp.svg" alt="" width={20} height={20} />
            WhatsApp
          </a>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="lp-bar a27-chrome" role="group" aria-label={groupLabel}>
        <QuoteButton target={target} className="lp-btn lp-bar__quote">{label.length > 22 ? shortLabel : label}</QuoteButton>
        <a href={whatsappHref(waMessage)} target="_blank" rel="noopener noreferrer" aria-label={waLabel} className="lp-bar__wa">
          <img src="/2027/icons/deep/whatsapp.svg" alt="" width={22} height={22} />
        </a>
      </div>
    </>
  );
}
