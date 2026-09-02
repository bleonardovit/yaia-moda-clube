import { createFileRoute, Link } from "@tanstack/react-router";
import { PartyPopper, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const WHATSAPP_URL = "https://chat.whatsapp.com/BRgPnepVUuaHpKZ4YxlbT4?s=cl&p=a&mlu=4";

export const Route = createFileRoute("/sucesso")({
  head: () => ({
    meta: [
      { title: "Bem-vinda ao Clube Yaia Moda!" },
      {
        name: "description",
        content:
          "Sua assinatura está quase concluída. Entre no Grupo VIP do WhatsApp e receba os catálogos a preço de custo.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Bem-vinda ao Clube Yaia Moda!" },
      {
        property: "og:description",
        content: "Último passo: entre no Grupo VIP do WhatsApp para receber os catálogos a preço de custo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SucessoPage,
});

function SucessoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-lg text-center">
          <Reveal>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-rosegold-deep">
              <PartyPopper className="h-9 w-9" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Bem-vinda ao Clube{" "}
              <em className="text-gradient-rosegold not-italic">Yaia Moda!</em> 🎉
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sua assinatura está quase concluída. O último passo é entrar no nosso{" "}
              <strong className="text-foreground">Grupo VIP Exclusivo do WhatsApp</strong>, onde os
              catálogos a preço de custo são liberados.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe mt-10 w-full bg-whatsapp px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.72_0.19_150/0.5)] sm:w-auto sm:text-lg"
            >
              <MessageCircle className="h-5 w-5" /> Entrar no Grupo VIP
            </a>
          </Reveal>
          <Reveal delay={480}>
            <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-rosegold-deep" />
              Os looks a preço de fábrica esperam por você lá dentro
            </p>
            <Link
              to="/"
              className="mt-6 inline-block text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Voltar para a página inicial
            </Link>
          </Reveal>
        </div>
      </main>
      <footer className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          Yaia Moda © 2024 - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
