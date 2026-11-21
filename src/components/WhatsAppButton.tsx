"use client";

// 2027 floating WhatsApp button: fixed bottom right, a 58px white round button
// holding a 44px green circle with the glyph. Hidden while a quote pop-up is
// open. On phones a small chat button sits above it and opens the Flow chat
// widget (same ativa:openChat event MobileFAB used); on tablet/desktop the
// ChatWidget shows its own chat button, lifted above this one in CSS.

import { useLanguage } from "@/context/LanguageContext";
import { whatsappHref } from "@/components/home/catalog";

export default function WhatsAppButton({ hidden = false }: { hidden?: boolean }) {
  const { t } = useLanguage();
  if (hidden) return null;
  return (
    <div className="a27-chrome a27-fabs">
      <button
        type="button"
        className="a27-fab-chat"
        aria-label={t("a27.chat")}
        onClick={() => window.dispatchEvent(new CustomEvent("ativa:openChat"))}
      >
        <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="2.4" />
        </svg>
      </button>
      <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" aria-label={t("a27.fab")} className="a27-fab">
        <span className="a27-fab__dot">
          <img src="/2027/icons/deep/whatsapp.svg" alt="" width={24} height={24} />
        </span>
      </a>
    </div>
  );
}
