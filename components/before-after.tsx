"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(56);

  return (
    <div className="group relative min-h-[430px] overflow-hidden rounded-lg border border-white/15 bg-ink shadow-card md:min-h-[620px]">
      <Image
        src="/assets/chantier-transformation.jpg"
        alt="Chantier intérieur avant peinture avec protection et préparation"
        fill
        sizes="(max-width: 768px) 100vw, 1180px"
        className="object-cover opacity-80 saturate-[0.75]"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <Image
          src="/assets/realisation-salon.jpg"
          alt="Salon rénové après peinture avec finition propre"
          fill
          sizes="(max-width: 768px) 100vw, 1180px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-ink/15" />
      <div className="absolute left-5 top-5 rounded-lg bg-ink/80 px-3 py-2 text-sm font-black text-cream">Avant</div>
      <div className="absolute right-5 top-5 rounded-lg bg-cream px-3 py-2 text-sm font-black text-ink">Après</div>
      <div className="absolute bottom-6 left-6 right-6 z-10 rounded-lg border border-white/15 bg-ink/70 p-4 text-white backdrop-blur">
        <div className="flex items-center justify-between gap-4 text-sm font-black uppercase tracking-[0.18em] text-gold">
          <span>Transformation chantier</span>
          <span>{position}%</span>
        </div>
        <input
          className="mt-4 h-3 w-full cursor-ew-resize accent-gold"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Comparer le chantier avant et après"
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <div
        className="absolute bottom-0 top-0 w-[2px] bg-cream shadow-[0_0_30px_rgb(248_242_219_/_.75)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-sm font-black text-ink shadow-glow">
          ↔
        </span>
      </div>
    </div>
  );
}
