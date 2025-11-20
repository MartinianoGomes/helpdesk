
# Helpdesk — Frontend

Projeto frontend do módulo "helpdesk" — aplicativo de exemplo em React + Vite + TypeScript. Fornece telas básicas de login e registro e serve como base para um painel simples de atendimento.

**Status:** Em desenvolvimento

**Tecnologias:** React, TypeScript, Vite, TailwindCSS (dependências presentes), ESLint

**Requisitos:**
- Node.js 18+ (recomendado)
- npm ou pnpm

## Como rodar (desenvolvimento)

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite iniciará um servidor local (por padrão `http://localhost:5173`).

## Scripts úteis

- `npm run dev` — inicia o modo desenvolvimento (Vite).
- `npm run build` — compila a aplicação para produção (`tsc -b && vite build`).
- `npm run preview` — serve a versão de produção gerada.
- `npm run lint` — executa o ESLint no projeto.

## Estrutura do projeto (resumo)

- `index.html` — entrada HTML do Vite.
- `src/main.tsx` — bootstrap da aplicação.
- `src/App.tsx` — componente principal.
- `src/Login.tsx` e `src/Register.tsx` — telas de autenticação.
- `src/assets/` — imagens/recursos estáticos.
- `vite.config.ts` — configuração do Vite.
- `tsconfig.json` — configuração TypeScript.

## Dependências principais (conforme `package.json`)

- `react`, `react-dom`
- `react-hook-form` — formulários reativos.
- `react-router` — roteamento.
- `tailwindcss`, `postcss`, `autoprefixer` — (configurar se desejar usar)

## Notas de desenvolvimento

- O projeto já inclui dependências relacionadas ao Tailwind; se for usar Tailwind ative e configure os arquivos `tailwind.config.*` e `postcss.config.*` conforme necessário.
- Se quiser adicionar env vars para API, crie um arquivo `.env` ou `.env.local` e use a convenção `VITE_` para variáveis expostas ao cliente.

## Contribuição

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue descrevendo a proposta antes de implementar.

## Licença

Nenhuma licença foi adicionada a este repositório. Se desejar publicar sob uma licença, adicione um arquivo `LICENSE` apropriado.

---
Arquivo gerado automaticamente pelo assistente. Para ajustes, edite `helpdesk/README.md`.

