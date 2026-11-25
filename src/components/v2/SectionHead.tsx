// Left-aligned section heading with the 96×6 arc under it (content pages, site-v2 README 4.3).
// The FAQ heading uses align="center".

interface SectionHeadProps {
  id?: string;
  title: string;
  /** Optional one-line note under the arc */
  note?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHead({ id, title, note, align = "left", className = "" }: SectionHeadProps) {
  return (
    <div className={`lp-head${align === "center" ? " lp-head--center" : ""}${note ? " lp-head--note" : ""} ${className}`.trim()}>
      <h2 id={id} className="a27-h2">{title}</h2>
      <span aria-hidden className="a27-arc lp-head__arc" />
      {note && <p className="lp-note">{note}</p>}
    </div>
  );
}
