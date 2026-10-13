"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4">
      <div className="mx-auto flex max-w-[44rem] items-center justify-between gap-4 rounded-lg bg-white/95 py-2 pl-3 pr-2 shadow-[0_6px_24px_rgba(16,34,44,0.08)] backdrop-blur">
        <a href="#inicio" aria-label={school.name} className="shrink-0">
          <Image src={asset("/img/logo.png")} alt={school.name} width={451} height={138} priority className="h-9 w-auto" />
        </a>
        <nav className="hidden md:block" aria-label="Menu principal">
          <ul className="flex items-center gap-5 text-[0.85rem] font-medium text-navy">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-sky">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#visita"
          className="hidden rounded-md bg-navy px-4 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-navy-deep md:block"
        >
          Agende uma visita
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative h-10 w-10 rounded-md bg-mist md:hidden"
        >
          <span className={`absolute left-3 right-3 h-[2px] bg-navy transition-transform ${open ? "top-1/2 rotate-45" : "top-[calc(50%-4px)]"}`} />
          <span className={`absolute left-3 right-3 h-[2px] bg-navy transition-transform ${open ? "top-1/2 -rotate-45" : "top-[calc(50%+3px)]"}`} />
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-[44rem] rounded-lg bg-white p-3 shadow-lg md:hidden" aria-label="Menu principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 font-medium text-navy hover:bg-mist">
              {n.label}
            </a>
          ))}
          <a href="#visita" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-navy px-3 py-3 text-center font-semibold text-white">
            Agende uma visita
          </a>
        </nav>
      )}
    </header>
  );
}
