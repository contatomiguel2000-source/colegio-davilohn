"use client";

import { useState } from "react";
import { segments, whatsappLink } from "@/lib/data";

const periods = ["Manhã", "Tarde"];

/** Sem backend: monta a mensagem e abre o WhatsApp do colégio. */
export function VisitForm() {
  const [f, setF] = useState({ name: "", phone: "", segment: "", day: "", period: "", msg: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá! Gostaria de agendar uma visita ao Colégio Dávilohn.`,
      `Nome: ${f.name}`,
      f.phone && `Telefone: ${f.phone}`,
      f.segment && `Segmento de interesse: ${f.segment}`,
      f.day && `Melhor dia: ${f.day}`,
      f.period && `Melhor período: ${f.period}`,
      f.msg,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const label = "mb-1.5 block text-[0.8rem] font-medium text-ink";
  const field =
    "w-full rounded-md border border-mist bg-ice/60 px-3 py-2.5 text-[0.9rem] text-ink placeholder:text-slate/60 focus:border-sky focus:outline-none";

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-xl bg-white p-5 shadow-[0_20px_60px_rgba(16,34,44,0.15)] sm:grid-cols-2 md:p-6">
      <div className="sm:col-span-2">
        <label htmlFor="v-name" className={label}>Nome do responsável</label>
        <input id="v-name" required value={f.name} onChange={set("name")} placeholder="Seu nome" className={field} />
      </div>
      <div>
        <label htmlFor="v-phone" className={label}>Telefone</label>
        <input id="v-phone" type="tel" value={f.phone} onChange={set("phone")} placeholder="(11) 90000-0000" className={field} />
      </div>
      <div>
        <label htmlFor="v-seg" className={label}>Segmento</label>
        <select id="v-seg" value={f.segment} onChange={set("segment")} className={field}>
          <option value="">Selecione</option>
          {segments.map((s) => (
            <option key={s.key}>{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="v-day" className={label}>Melhor dia</label>
        <input id="v-day" type="date" value={f.day} onChange={set("day")} className={field} />
      </div>
      <div>
        <label htmlFor="v-period" className={label}>Melhor período</label>
        <select id="v-period" value={f.period} onChange={set("period")} className={field}>
          <option value="">Selecione</option>
          {periods.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="v-msg" className={label}>Mensagem</label>
        <textarea id="v-msg" rows={3} value={f.msg} onChange={set("msg")} placeholder="Conte um pouco sobre o seu filho ou filha" className={`${field} resize-none`} />
      </div>
      <button type="submit" className="rounded-md bg-navy py-3 font-semibold text-white transition-colors hover:bg-navy-deep sm:col-span-2">
        Agendar pelo WhatsApp
      </button>
    </form>
  );
}
