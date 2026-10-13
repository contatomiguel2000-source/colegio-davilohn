import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { CurvedRibbon } from "@/components/CurvedRibbon";
import { Segments } from "@/components/Segments";
import { VisitForm } from "@/components/VisitForm";
import { IconArrow, IconCheck, IconFacebook, IconInstagram, IconPhone, IconPin, IconStar, IconWhatsapp } from "@/components/Icons";
import { documents, experiences, faqs, hashtags, moments, nav, partners, pillars, school, testimonials, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

const noteColors = ["bg-[#fde7ef]", "bg-peach", "bg-butter", "bg-[#ece6fb]", "bg-mist", "bg-[#e5f6e9]"];
const noteTilt = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];
const toneBg: Record<string, string> = { cream: "bg-butter", sky: "bg-mist", sun: "bg-peach" };

function SectionHead({ tag, title, text, center = false }: { tag: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-[40rem] text-center" : "max-w-[36rem]"}>
      <span className="pill-tag">{tag}</span>
      <h2 className="t-h2 mt-4 text-ink">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-slate">{text}</p>}
    </Reveal>
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex text-[#f5b301]">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={className} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#bfe4f6] via-mist to-cream pb-10 pt-32 md:pt-36">
          <div className={`${wrap} relative text-center`}>
            <Reveal>
              <p className="text-[0.9rem] font-medium text-navy">Educação Infantil ao Ensino Médio · Guarulhos</p>
              <h1 className="t-display mx-auto mt-4 max-w-[16ch] text-navy-deep">
                Mais que uma escola,{" "}
                <span className="mt-2 inline-block -rotate-1 rounded-full bg-white px-5 py-1 text-sky shadow-[0_8px_24px_rgba(0,152,218,0.18)]">
                  uma família
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-slate">
                Desde {school.founded}, formando alunos para o mercado de trabalho e para a vida, com o olhar acolhedor e respeitoso que é a marca do Dávilohn.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#visita" className="rounded-md bg-navy px-7 py-3.5 font-semibold text-white transition-colors hover:bg-navy-deep">
                Agende uma visita
              </a>
              <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.9rem] text-navy">
                <Stars className="h-4 w-4" />
                <span>
                  <strong>{school.rating}</strong> no Google · {school.reviewCount} avaliações
                </span>
              </a>
            </Reveal>

            <Reveal delay={200} className="relative mx-auto mt-12 max-w-[1160px]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(19,60,83,0.25)]">
                <Image src={asset("/img/turma-medio.webp")} alt="Turma do Ensino Médio do Colégio Dávilohn em sala de aula" fill priority sizes="(min-width: 1200px) 1160px, 100vw" className="object-cover" />
              </div>
              <div className="absolute -left-2 -top-6 hidden w-40 -rotate-6 rounded-lg bg-white p-2 shadow-xl sm:block md:left-3 md:w-48">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image src={asset("/img/infantil-leitura.webp")} alt="Roda de leitura na Educação Infantil" fill sizes="12rem" className="object-cover" />
                </div>
                <p className="note-tag mt-2 text-left">Roda de leitura no Infantil</p>
              </div>
              <div className="absolute -bottom-6 -right-2 hidden w-40 rotate-6 rounded-lg bg-white p-2 shadow-xl sm:block md:right-3 md:w-48">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image src={asset("/img/fundamental-jogos.webp")} alt="Alunos do Fundamental com jogos de tabuleiro" fill sizes="12rem" className="object-cover" />
                </div>
                <p className="note-tag mt-2 text-left">Jogos e raciocínio</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Parceiros */}
        <section className="py-12">
          <div className={`${wrap} text-center`}>
            <p className="text-[0.9rem] text-slate">Ensino de excelência com parceiros como:</p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[1.1rem] font-semibold tracking-[-0.02em] text-navy/55">
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* O Colégio */}
        <section id="colegio" className="pb-8 pt-12">
          <div className={wrap}>
            <SectionHead
              center
              tag="Nossa história"
              title="Educação que acolhe e prepara para a vida"
              text="O Colégio Dávilohn foi fundado em 2001 por dois sócios idealistas e inovadores, que buscavam um diferencial na proposta pedagógica: preparar o aluno não só para o mercado de trabalho, mas também para a vida. Hoje acompanhamos os alunos da Educação Infantil ao Ensino Médio, com nossos maiores parceiros: as famílias."
            />
          </div>
        </section>

        {/* Segmentos */}
        <section id="segmentos" className="relative bg-gradient-to-b from-cream via-[#cfe9f6] to-cream pb-6">
          <CurvedRibbon id="ribbon-top" items={hashtags} />
          <div className={`${wrap} relative -mt-4`}>
            <Reveal>
              <Segments />
            </Reveal>
          </div>
          <CurvedRibbon id="ribbon-bottom" items={["Educação Infantil", "Ensino Fundamental", "Ensino Médio", "Mais que uma escola, uma família"]} flip />
        </section>

        {/* Vivências */}
        <section id="vivencias" className="py-20">
          <div className={wrap}>
            <SectionHead
              tag="No dia a dia"
              title="Vivências que viram aprendizado"
              text="Projetos, aulas práticas e momentos de convivência que fazem parte da rotina do colégio."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {experiences.map((e, i) => (
                <Reveal key={e.title} delay={i * 100} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image src={asset(e.image)} alt={e.title} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.75rem] font-medium text-navy">{e.place}</span>
                  <div className="absolute inset-x-3 bottom-3 rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-ink">{e.title}</h3>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-slate">{e.text}</p>
                    <a
                      href={school.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block rounded-md bg-navy py-2.5 text-center text-[0.85rem] font-semibold text-white transition-colors hover:bg-navy-deep"
                    >
                      Ver no Instagram
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares (bento) */}
        <section className="pb-20">
          <div className={wrap}>
            <SectionHead center tag="O que nos move" title="Do primeiro dia de escola à universidade" text="Um caminho completo, com cuidado em cada etapa." />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {pillars.map((p, i) => {
                const photoFirst = i % 2 === 1;
                return (
                  <div key={p.title} className="contents">
                    <Reveal className="relative min-h-[18rem] overflow-hidden rounded-xl" style={{ order: i * 2 + (photoFirst ? 2 : 1) }}>
                      <Image src={asset(p.image)} alt="" fill sizes="(min-width: 768px) 580px, 100vw" className="object-cover" />
                    </Reveal>
                    <Reveal delay={100} className={`flex flex-col justify-end rounded-xl p-6 md:p-8 ${toneBg[p.tone]}`} style={{ order: i * 2 + (photoFirst ? 1 : 2) }}>
                      <span className="note-tag w-fit -rotate-2">{p.tag}</span>
                      <h3 className="t-h3 mt-6 text-navy-deep">{p.title}</h3>
                      <p className="mt-3 max-w-[30rem] text-[0.95rem] leading-relaxed text-slate">{p.text}</p>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Momentos (faixa de fotos) */}
        <section className="pb-20">
          <div className={wrap}>
            <SectionHead tag="Momentos" title="Histórias que a gente guarda" text="Festival literário, feira cultural, música, esporte e muita amizade." />
          </div>
          <div className="mt-10 overflow-hidden">
            <div className="marquee gap-4 pl-4">
              {[...moments, ...moments].map((m, i) => (
                <figure key={i} className="relative h-64 w-72 shrink-0 overflow-hidden rounded-xl md:h-72 md:w-80" aria-hidden={i >= moments.length}>
                  <Image src={asset(m.src)} alt={i < moments.length ? m.caption : ""} fill sizes="20rem" className="object-cover" />
                  <figcaption className="note-tag absolute bottom-3 left-3">{m.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Famílias (depoimentos) */}
        <section id="familias" className="bg-mist py-20">
          <div className={wrap}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHead tag="Depoimentos" title="O que dizem as famílias e ex-alunos" />
              <Reveal>
                <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-3 rounded-lg bg-white px-4 py-3">
                  <span className="text-2xl font-semibold text-navy">{school.rating}</span>
                  <span>
                    <Stars />
                    <span className="text-[0.8rem] text-slate">{school.reviewCount} avaliações no Google</span>
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 90}>
                  <figure className={`flex h-full flex-col rounded-lg p-6 shadow-[0_10px_30px_rgba(16,34,44,0.08)] transition-transform hover:rotate-0 ${noteColors[i]} ${noteTilt[i]}`}>
                    <Stars />
                    <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink">&ldquo;{t.text}&rdquo;</blockquote>
                    <figcaption className="mt-5">
                      <span className="block font-semibold text-navy">{t.name}</span>
                      <span className="text-[0.8rem] text-slate">{t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="py-20">
          <div className={wrap}>
            <SectionHead center tag="Dúvidas" title="Perguntas frequentes" text="Respondemos as perguntas mais comuns das famílias." />
            <div className="mx-auto mt-10 max-w-[44rem] space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-lg bg-ice px-5 py-4 open:bg-mist">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                    {f.q}
                    <span className="text-xl text-navy transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Agende uma visita */}
        <section id="visita" className="relative overflow-hidden bg-gradient-to-br from-sky via-[#3aa5d8] to-navy py-20">
          <div className={`${wrap} grid items-start gap-10 md:grid-cols-2`}>
            <Reveal className="text-white">
              <span className="pill-tag">Matrículas</span>
              <h2 className="t-h2 mt-4">Venha conhecer o Dávilohn</h2>
              <p className="mt-4 max-w-[30rem] leading-relaxed text-white/85">
                Agende uma visita, conheça a estrutura e converse com a nossa equipe. Para a matrícula, separe estes documentos:
              </p>
              <ul className="mt-6 grid max-w-[30rem] gap-2 rounded-xl bg-white/15 p-5 backdrop-blur sm:grid-cols-2">
                {documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-[0.9rem]">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <VisitForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-mist pt-16 pb-8">
        <div className={wrap}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
            <div>
              <p className="text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.05em] text-navy">dávilohn</p>
              <p className="mt-3 text-slate">{school.slogan}.</p>
              <div className="mt-5 flex gap-3 text-navy">
                <a href={school.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-sky">
                  <IconInstagram />
                </a>
                <a href={school.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-sky">
                  <IconFacebook />
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-sky">
                  <IconWhatsapp />
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-navy">Páginas</p>
              <ul className="mt-3 space-y-2 text-[0.9rem] text-slate">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-navy">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-navy">Horários</p>
              <ul className="mt-3 space-y-2 text-[0.9rem] text-slate">
                <li>Infantil: 7h30 · 13h30</li>
                <li>Fund. I: 7h30 · 13h30</li>
                <li>Fund. II: 7h · 13h</li>
                <li>Médio: 7h às 13h10</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-navy">Contato</p>
              <ul className="mt-3 space-y-3 text-[0.9rem] text-slate">
                <li>
                  <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-navy">
                    <IconPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {school.address}
                      <br />
                      {school.city}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={school.phoneHref} className="flex items-center gap-2 hover:text-navy">
                    <IconPhone className="h-4 w-4" /> {school.phone}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy">
                    <IconWhatsapp className="h-4 w-4" /> {school.whatsappLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-navy/10 pt-6 text-[0.8rem] text-slate md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Colégio Dávilohn. Todos os direitos reservados.</p>
            <a href="#inicio" className="inline-flex items-center gap-1 hover:text-navy">
              Voltar ao topo <IconArrow className="h-3.5 w-3.5 -rotate-45" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
