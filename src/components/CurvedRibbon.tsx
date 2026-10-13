/** Faixa de texto curva que desliza (como no layout de referência). No celular vira uma faixa reta. */
export function CurvedRibbon({
  items,
  id,
  flip = false,
  className = "",
}: {
  items: string[];
  id: string;
  flip?: boolean;
  className?: string;
}) {
  const line = Array.from({ length: 6 }, () => items.join("  ·  ")).join("  ·  ");
  const d = flip ? "M-100,40 C400,170 1000,-60 1540,90" : "M-100,120 C400,-20 1000,190 1540,30";
  return (
    <div className={`pointer-events-none relative w-full overflow-hidden ${className}`} aria-hidden>
      {/* celular: faixa reta */}
      <div className={`my-6 bg-white py-3 md:hidden ${flip ? "rotate-2" : "-rotate-2"}`}>
        <div className="marquee gap-6 whitespace-nowrap text-[1rem] font-medium text-navy">
          <span>{line}</span>
          <span>{line}</span>
        </div>
      </div>
      {/* computador: faixa curva, sem distorcer o texto */}
      <svg viewBox="0 0 1440 150" className="hidden aspect-[1440/150] w-full md:block">
        <path id={id} d={d} fill="none" stroke="white" strokeWidth="58" strokeLinecap="round" />
        <text className="fill-navy text-[24px] font-medium" dy="8">
          <textPath href={`#${id}`} startOffset="0%">
            {line}
            <animate attributeName="startOffset" from="0%" to="-100%" dur="60s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
    </div>
  );
}
