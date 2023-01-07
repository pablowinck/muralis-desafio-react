# Etapa Técnica - Muralis

### URL da aplicação
- [Front-end](https://muralis-desafio-react.vercel.app/)
- [Back-end mock](https://muralis-desafio-react-server.vercel.app/)

### Problema

1. Criar um cadastro de ingressantes
   1. Campos: Nome, Curso, Estado, Cidades
   2. Cidades devem ser carregadas conforme o estado selecionado
2. Criar um dashboard para visualização dos dados
   1. Gráfico de pizza com a porcentagem de ingressantes por curso
   2. Gráfico de barras com a quantidade de ingressantes por curso e data
   3. Gráfico de multiaxis com a quantidade de ingressantes por curso e data

### Funcionamento

- Ao clicar em ingressantes a tela de cadastro de ingressantes deverá aparecer e o menu lateral deverá ficar marcar a tela que está ativa.
- Os dados dos gráficos devem ser **"mockados"**, simulando a estrutura de dados que será recebida do back-end.

---

### Solução proposta

- Para o front-end foi utilizado o framework [Next.js](https://nextjs.org/), um framework React que permite a criação de aplicações SSR (Server Side Rendering).
- O CSS foi escrito utilizando o framework [Tailwind CSS](https://tailwindcss.com/), um framework CSS que permite a criação de componentes reutilizáveis e com uma sintaxe simples.
- Para os gráficos foi utilizado a biblioteca [React-Chartjs-2](https://react-chartjs-2.js.org/), uma biblioteca que permite a criação de gráficos utilizando a biblioteca [Chart.js](https://www.chartjs.org/).
- Para simular o back-end foi utilizado duas frentes:
  - O [json-server](https://www.npmjs.com/package/json-server), um servidor REST que permite a criação de APIs REST com base num arquivo JSON.
  - A propria API do Next.js, que permite a criação de rotas e endpoints de forma simples e rápida.

## Como rodar

### Localmente
Para rodar localmente se faz necessario 2 terminais, um para o json-server, e outro para o Next.js.

yarn:
  1.  ```bash
      yarn global add json-server
      yarn dev-mock
  
  2.  ```bash
      yarn install
      yarn dev
npm:
  1.  ```bash
      npm i -g json-server
      npm run dev-mock
  2.  ```bash
      npm i
      npm run dev
      
### Producao
Basta acessar os links do início do README.md, no entanto como os dados estão no filesystem do servidor, após um tempo de inatividade os dados podem ser perdidos. Além de ter divergência entre réplicas da aplicação.

### Estrutura de pastas

- **Domain-Driven Design**: A estrutura de pastas foi baseada no conceito de DDD, onde cada pasta representa um domínio da aplicação. [Ler mais](https://css-tricks.com/domain-driven-design-with-react/)
- **Atomic Design**: A estrutura de pastas foi baseada no Atomic Design, uma metodologia de design de componentes que permite a criação de componentes reutilizáveis e escaláveis. [Ler mais](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c)

```bash
├── public # Arquivos estáticos
└── src
    ├── concepts
    │   ├── home
    │   │   ├── components
    │   │   │   ├── organisms
    │   │   │   └── templates
    │   │   └── hooks
    │   ├── ingressantes
    │   │   ├── components
    │   │   │   ├── molecules
    │   │   │   ├── organisms
    │   │   │   └── templates
    │   │   └── hooks
    │   └── layout
    │       ├── components
    │       │   ├── molecules
    │       │   ├── organisms
    │       │   └── templates
    │       └── hooks
    │
    ├── ui # Componentes reutilizáveis
    │   ├── atoms
    │   └── molecules
    │
    ├── pages # Rotas da aplicação
    │   ├── api # Endpoints da aplicação
    │   │   ├── inscritos-por-data.tsx
    │   │   ├── porcentagem-curso.tsx
    │   │   └── total-curso.tsx
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── index.tsx
    │   └── ingressantes.tsx
    │
    ├── mock # Arquivos de mock
    │
    ├── styles # Arquivos de estilo
    │
    ├── services
    │   └── api.ts
    │
    └── utils
        └─── colors.ts