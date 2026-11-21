"use client";

// 2027 product tile: white card, globe artwork, title, one-line description
// (hidden on phone). Lifts 2px on hover. Every tile is a trigger for the
// EXISTING quote pop-up (or, for BOP, a same-tab link to the AMS application).

import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  /** 3D globe in /public/2027/globes (preferred) */
  globe?: string;
  /** Fallback line icon in /public/2027/icons/navy (BOP, E&O — DECISIONS D) */
  icon?: string;
  onClick?: () => void;
  /** Render as a link instead of a button */
  href?: string;
}

export default function ProductCard({ title, description, globe, icon, onClick, href }: ProductCardProps) {
  const body = (
    <>
      <span aria-hidden className="a27-tile__art">
        {globe ? (
          <Image src={`/2027/globes/${globe}.png`} alt="" width={150} height={150} sizes="(max-width: 767px) 112px, 150px" />
        ) : (
          <span className="a27-tile__iconwrap">
            <img src={`/2027/icons/navy/${icon}.svg`} alt="" width={56} height={56} />
          </span>
        )}
      </span>
      <span className="a27-tile__title">{title}</span>
      <span className="a27-tile__desc">{description}</span>
    </>
  );
  return href ? (
    <a href={href} className="a27-tile">{body}</a>
  ) : (
    <button type="button" className="a27-tile" onClick={onClick}>{body}</button>
  );
}
