// Scalloped section edge (three arches), site-v2 README 4.2.
// Filled with the colour of the section it belongs to; sits on its top or bottom edge.

interface ScallopProps {
  /** "top": sits above the section (filled with the section colour). "bottom": white edge closing a midnight hero. */
  edge: "top" | "bottom";
  fill?: string;
}

export default function Scallop({ edge, fill = "#002941" }: ScallopProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={`a27-scallop a27-scallop--${edge}`}
    >
      <path fill={fill} d="M0 100Q110 20 245 48Q500-48 755 48Q890 20 1000 100Z" />
    </svg>
  );
}
