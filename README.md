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
- Para simular o back-end foi utilizado duas frentes:
  - O [json-server](https://www.npmjs.com/package/json-server), um servidor REST que permite a criação de APIs REST com base num arquivo JSON.
  - A propria API do Next.js, que permite a criação de rotas e endpoints de forma simples e rápida.

### Como rodar localmente
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