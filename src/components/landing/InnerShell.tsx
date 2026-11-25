"use client";

// Client shell for inner pages (landing, service, industry, about, hub):
// LanguageProvider (for the existing pop-ups), the URL page language, the quote
// host, header, footer and the floating WhatsApp button (desktop/tablet; the
// phone sticky bar replaces it). Server-rendered page sections go in children.

import { LanguageProvider } from "@/context/LanguageContext";
import { PageLangProvider } from "@/i18n/PageLang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteHost, { useQuote } from "./QuoteHost";
import type { Language, Mode } from "@/types";
import type { PageLine } from "@/content/pages/registry";

interface InnerShellProps {
  lang: Language;
  alternates: Partial<Record<Language, string>>;
  line: PageLine;
  children: React.ReactNode;
}

function Frame({ line, children }: { line: PageLine; children: React.ReactNode }) {
  const { openLine, isOpen } = useQuote();
  const mode: Mode = line === "business" ? "commercial" : "personal";
  const current: Mode | null = line === "business" ? "commercial" : line === "personal" ? "personal" : null;
  return (
    <div className="a27 a27-page" data-page="inner" data-line={line === "business" ? "business" : "personal"}>
      <Header mode={mode} current={current} onGetQuote={() => openLine(mode)} onOpenProduct={openLine} />
      <main id="main" className="a27-main">{children}</main>
      <Footer mode={mode} onGetQuote={() => openLine(mode)} onOpenProduct={openLine} />
      <WhatsAppButton hidden={isOpen} />
    </div>
  );
}

export default function InnerShell({ lang, alternates, line, children }: InnerShellProps) {
  return (
    <LanguageProvider>
      <PageLangProvider value={{ lang, alternates }}>
        <QuoteHost>
          <Frame line={line}>{children}</Frame>
        </QuoteHost>
      </PageLangProvider>
    </LanguageProvider>
  );
}
