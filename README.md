# Yaia VIP Club

Atue como um Web Designer e Desenvolvedor Frontend Sênior especialista em alta conversão.

Preciso que você crie uma Landing Page moderna, elegante e de alta conversão para o "Clube Yaia Moda". O público-alvo são clientes que já compram na loja e estão em um grupo VIP, então a comunicação deve ser de exclusividade e recompensa pela fidelidade.

1. Identidade Visual e Estilo (UI/UX):

Estilo: Moderno, minimalista, "chic" e sofisticado (estilo fashion/moda).

Paleta de Cores: Fundo principal em tons claros (Off-white ou creme suave) para destacar as fotos. Detalhes, botões e destaques em um tom elegante (como Rose Gold, Nude escuro ou Preto sólido).

Tipografia: Uma fonte Serif elegante para os títulos (como Playfair Display ou similar) e uma fonte Sans-serif limpa para os textos (como Inter ou Montserrat).

Animações (Framer Motion ou CSS): Efeitos suaves de "fade-in" e "slide-up" conforme o usuário rola a página. Botões devem ter um efeito de "hover" atraente, que passe a sensação de clique macio (scale sutil ou brilho).

2. Estrutura da Landing Page (Single Page Application com 2 rotas):

Seção 1: Hero (Primeira dobra)

Título grande e impactante: "O que já era exclusivo, agora tem preço de custo."

Subtítulo: "Entre para o Clube Yaia Moda. Pague apenas R$ 19,00 por mês e tenha acesso a todas as nossas peças pelo valor de fábrica."

Call to Action (Botão Principal): "Quero Entrar para o Clube" (Este botão deve levar para a Seção de Assinatura/Pagamento).

Seção 2: Como Funciona (Cards explicativos com ícones minimalistas)

Passo 1: Assine o clube por menos de R$ 0,65 ao dia.

Passo 2: Receba o acesso ao nosso catálogo de custo.

Passo 3: Compre looks incríveis pagando muito menos.

Seção 3: Vitrine de Vantagens (Onde a mágica acontece)

Crie um grid com 3 ou 4 "Cards de Produto" simulando roupas femininas estilosas (use imagens placeholder de moda feminina do Unsplash com boa estética).

Em cada card de produto, faça uma ancoragem visual de preço muito clara:

Texto riscado em cinza: Preço Normal: R$ 159,90

Texto destacado na cor principal: Preço Clube Yaia: R$ 65,00

Adicione uma tag visual no topo do card dizendo "Exclusivo Clube".

Seção 4: Call to Action Final e Pagamento

Título: "Pronta para renovar o guarda-roupa pagando o preço justo?"

Card central de assinatura com o valor de "R$ 19,00 / mês".

Botão de Pagamento com destaque máximo: "Assinar Agora e Aproveitar".

IMPORTANTE: O link de redirecionamento deste botão deve ser exatamente este: [https://invoice.infinitepay.io/plans/yaia_moda/JE1AU8URMU](https://invoice.infinitepay.io/plans/yaia_moda/JE1AU8URMU)

3. Rota de Sucesso (Página de Obrigado)

Crie uma segunda tela ou um Modal de "Obrigado" (simulando a tela para onde a pessoa iria após pagar, ou caso ela volte do gateway).

Título: "Bem-vinda ao Clube Yaia Moda! 🎉"

Texto: "Sua assinatura está quase concluída. O último passo é entrar no nosso Grupo VIP Exclusivo do WhatsApp, onde os catálogos a preço de custo são liberados."

Botão verde (estilo WhatsApp): "Entrar no Grupo VIP".

IMPORTANTE: O link deste botão deve ser: [https://chat.whatsapp.com/BRgPnepVUuaHpKZ4YxlbT4?s=cl&p=a&mlu=4](https://chat.whatsapp.com/BRgPnepVUuaHpKZ4YxlbT4?s=cl&p=a&mlu=4)

Comportamento Técnico:

A página deve ser 100% responsiva (Mobile First), pois 90% das clientes de moda acessam pelo celular.

Adicione um Footer simples com "Yaia Moda © 2024 - Todos os direitos reservados".

Gere o código limpo e crie um layout deslumbrante que faça a cliente sentir que R$ 19,00 é muito barato para o valor entregue.

💡 Uma dica técnica importante para a sua estratégia:

Como você está usando a InfinitePay para processar a assinatura, a cliente vai sair da sua Landing Page para colocar os dados do cartão no ambiente da InfinitePay.

Para garantir que ela vá para o WhatsApp automaticamente após pagar, você precisa configurar a URL de Retorno (Redirecionamento Pós-Pagamento) diretamente dentro da sua conta da InfinitePay, nas configurações desse plano de assinatura que você criou.

O que fazer:

Entre na InfinitePay.

Edite o plano de assinatura "Clube Yaia Moda".

Procure por "URL de Sucesso" ou "Página de Redirecionamento após o pagamento".

Cole o link do seu grupo do WhatsApp lá.

Caso a InfinitePay não permita redirecionar direto para o WhatsApp, você pode pedir ao Lovable para gerar essa página de sucesso (já incluí no prompt acima a instrução para ele criar a "Rota de Sucesso") e colocar o link dessa sua nova página na InfinitePay!

Dessa forma a jornada fica perfeita: Vê a página ➔ Clica em assinar ➔ Paga na InfinitePay ➔ Cai na página de sucesso ➔ Entra no WhatsApp.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://yaia-moda-clube.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7c394eff-e974-4834-8e9d-0851310374a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
