"use client";

// Personal / Commercial line switch. Phone and tablet: two text tabs centred
// under the header row, the current one with a 6px midnight arc.
// (Desktop uses the header nav items, see Header.tsx.)

import { useLanguage } from "@/context/LanguageContext";
import type { Mode } from "@/types";

interface ToggleProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

export default function Toggle({ mode, onChange }: ToggleProps) {
  const { t } = useLanguage();
  const tabs: Array<{ id: Mode; label: string }> = [
    { id: "personal", label: t("nav.personal") },
    { id: "commercial", label: t("nav.commercial") },
  ];
  return (
    <div className="a27-linetabs" role="group" aria-label={`${t("nav.personal")} / ${t("nav.commercial")}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          aria-pressed={mode === tab.id}
          onClick={() => onChange(tab.id)}
          className="a27-linetab"
        >
          {tab.label}
          {mode === tab.id && <span aria-hidden className="a27-arc a27-linetab__arc" />}
        </button>
      ))}
    </div>
  );
}
