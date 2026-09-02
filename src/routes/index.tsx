import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Sparkles, Tag, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import produto1 from "@/assets/produto-1.jpg";
import produto2 from "@/assets/produto-2.jpg";
import produto3 from "@/assets/produto-3.jpg";
import produto4 from "@/assets/produto-4.jpg";

const CHECKOUT_URL = "https://invoice.infinitepay.io/plans/yaia_moda/JE1AU8URMU";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube Yaia Moda — Peças exclusivas a preço de custo" },
      {
        name: "description",
        content:
          "Entre para o Clube Yaia Moda por R$ 19,00/mês e compre todas as peças pelo valor de fábrica. Exclusividade e recompensa para clientes VIP.",
      },
      { property: "og:title", content: "Clube Yaia Moda — Peças exclusivas a preço de custo" },
      {
        property: "og:description",
        content:
          "Assine por R$ 19,00/mês e tenha acesso a todo o catálogo Yaia Moda pelo valor de fábrica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const steps = [
  {
    icon: Crown,
    title: "Assine o clube",
    text: "Por menos de R$ 0,65 ao dia você garante seu lugar no grupo mais exclusivo da Yaia Moda.",
  },
  {
    icon: Sparkles,
    title: "Receba o acesso",
    text: "Liberamos o nosso catálogo completo de custo, atualizado com as novidades da estação.",
  },
  {
    icon: Tag,
    title: "Compre pagando menos",
    text: "Looks incríveis pelo valor de fábrica. A economia de uma peça já paga meses de assinatura.",
  },
];

const products = [
  { img: produto1, name: "Vestido Slip Cetim", normal: "R$ 189,90", clube: "R$ 72,00" },
  { img: produto2, name: "Blazer Alfaiataria Nude", normal: "R$ 259,90", clube: "R$ 98,00" },
  { img: produto3, name: "Saia Midi Linho", normal: "R$ 159,90", clube: "R$ 65,00" },
  { img: produto4, name: "Camisa Seda Preta", normal: "R$ 199,90", clube: "R$ 79,00" },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-xl font-semibold tracking-wide">
            Yaia <span className="text-rosegold-deep italic">Moda</span>
          </span>
          <a
            href="#assinar"
            className="btn-luxe bg-primary px-5 py-2.5 text-xs text-primary-foreground shadow-lg sm:text-sm"
          >
            Entrar para o Clube
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-2 md:pb-24 md:pt-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-rosegold/40 bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-rosegold-deep">
                <Crown className="h-3.5 w-3.5" /> Clube VIP de fidelidade
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
                O que já era exclusivo,{" "}
                <em className="text-gradient-rosegold not-italic">agora tem preço de custo.</em>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Entre para o Clube Yaia Moda. Pague apenas{" "}
                <strong className="text-foreground">R$ 19,00 por mês</strong> e tenha acesso a
                todas as nossas peças pelo valor de fábrica.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#assinar"
                  className="btn-luxe bg-primary px-8 py-4 text-sm text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.18_0.01_50/0.5)] sm:text-base"
                >
                  Quero Entrar para o Clube <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-xs text-muted-foreground">
                  Cancele quando quiser · Sem fidelidade
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_oklch(0.4_0.05_50/0.45)] md:max-w-none">
              <img
                src={heroImg}
                alt="Mulher elegante em look nude da Yaia Moda em boutique sofisticada"
                className="h-full w-full object-cover"
                width={1200}
                height={1400}
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-foreground/10 ring-inset" />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl md:left-auto md:-right-4 md:translate-x-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Assinatura
              </p>
              <p className="font-display text-2xl font-semibold">
                R$ 19<span className="text-sm text-muted-foreground">,00/mês</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-y border-border/70 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-rosegold-deep">
              Simples assim
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              Como funciona o Clube
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 140}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_oklch(0.5_0.06_40/0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-rosegold-deep transition-transform duration-500 group-hover:scale-110">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
                    PASSO {i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vitrine */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-rosegold-deep">
              Vitrine de vantagens
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              A diferença no preço, <em className="text-gradient-rosegold not-italic">na hora</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground sm:text-base">
              Uma amostra do que as membros do Clube pagam nas peças mais desejadas da loja.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 110}>
                <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_oklch(0.5_0.06_40/0.35)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase backdrop-blur">
                      Exclusivo Clube
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-base font-semibold sm:text-lg">{p.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground line-through sm:text-sm">
                      Preço normal: {p.normal}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-rosegold-deep sm:text-base">
                      Clube Yaia: {p.clube}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final / assinatura */}
      <section id="assinar" className="scroll-mt-24 bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Pronta para renovar o guarda-roupa pagando o preço justo?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mx-auto mt-10 max-w-md rounded-[2rem] bg-card p-8 text-card-foreground shadow-2xl sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-rosegold-deep uppercase">
                <Crown className="h-3.5 w-3.5" /> Clube Yaia Moda
              </span>
              <p className="mt-6 font-display text-6xl font-semibold">
                R$ 19<span className="text-2xl text-muted-foreground">,00</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">por mês · menos de R$ 0,65 ao dia</p>
              <ul className="mx-auto mt-6 max-w-xs space-y-2.5 text-left text-sm text-muted-foreground">
                {[
                  "Catálogo completo a preço de fábrica",
                  "Acesso antecipado às novidades",
                  "Grupo VIP exclusivo no WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-rosegold-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe mt-8 w-full bg-rosegold-deep px-8 py-4 text-sm text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.52_0.09_30/0.55)] sm:text-base"
              >
                Assinar Agora e Aproveitar
              </a>
              <p className="mt-4 text-[11px] text-muted-foreground">
                Pagamento seguro via InfinitePay · Cancele quando quiser
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <span className="font-display text-lg font-semibold">
            Yaia <span className="text-rosegold-deep italic">Moda</span>
          </span>
          <p className="text-xs text-muted-foreground">
            Yaia Moda © 2024 - Todos os direitos reservados
          </p>
          <Link to="/sucesso" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
            Já assinei · Acessar página de boas-vindas
          </Link>
        </div>
      </footer>
    </div>
  );
}
