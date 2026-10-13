"use client";

import Image from "next/image";
import { useState } from "react";
import { segments } from "@/lib/data";
import { asset } from "@/lib/base-path";
import { IconClock } from "./Icons";

const icons: Record<string, React.ReactNode> = {
  infantil: <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-7 18c0-4 3-7 7-7s7 3 7 7" />,
  fund1: <path d="M4 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4zm16 0h-4a3 3 0 0 0-3 3" />,
  fund2: <path d="M12 3 2 8l10 5 10-5-10-5zm-6 7.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />,
  medio: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />,
};

export function Segments() {
  const [active, setActive] = useState(0);
  const s = segments[active];

  return (
    <div className="grid gap-4 rounded-xl bg-white p-3 shadow-[0_20px_60px_rgba(16,34,44,0.12)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-4">
      <div className="p-2 md:p-3">
        <p className="mb-4 text-[1.05rem] font-semibold text-ink">Nossos segmentos</p>
        <div role="tablist" aria-label="Segmentos" className="flex flex-col gap-1.5">
          {segments.map((seg, i) => {
            const on = i === active;
            return (
              <button
                key={seg.key}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors ${on ? "bg-mist" : "hover:bg-ice"}`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${on ? "bg-navy text-white" : "bg-ice text-navy"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
                    {icons[seg.key]}
                  </svg>
                </span>
                <span>
                  <span className="block font-medium text-ink">{seg.title}</span>
                  <span className="block text-[0.8rem] text-slate">{seg.short}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-6 rounded-lg bg-ice p-4" role="tabpanel">
          <p className="text-[0.95rem] leading-relaxed text-slate">{s.text}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {s.schedule.map((h) => (
              <li key={h.label} className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[0.8rem] text-navy">
                <IconClock className="h-3.5 w-3.5" />
                <span className="font-semibold">{h.label}</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative min-h-[22rem] overflow-hidden rounded-lg bg-navy">
        {segments.map((seg, i) => (
          <Image
            key={seg.key}
            src={asset(seg.image)}
            alt={seg.title}
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-navy-deep/85 to-transparent p-6 pb-16">
          <p className="text-[0.8rem] font-medium uppercase tracking-wide text-sun">{s.ages}</p>
          <p className="mt-1 text-[1.6rem] font-semibold leading-tight tracking-[-0.03em] text-white">{s.quote}</p>
        </div>
      </div>
    </div>
  );
}
