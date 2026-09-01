# RepairLog

Sistema web para gestão de serviços de assistência técnica.

## Sobre

O RepairLog permite registrar clientes, acompanhar ordens de serviço e visualizar indicadores operacionais em uma dashboard.

## Funcionalidades

- cadastro de serviços
- listagem de clientes e aparelhos
- acompanhamento de status
- busca por serviço
- dashboard com visão geral operacional
- API REST para persistência e consulta de dados

## Tecnologias

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MySQL

## Estrutura

```text
RepairLog/
├── index.html
├── dasboard.html
├── css/
├── js/
├── backend/
├── package.json
└── README.md
```

## Como executar

```bash
npm install
node backend/server.js
```

Depois, abra o arquivo `index.html` no navegador.

## API

- `GET /` → status da API
- `GET /usuarios` → lista registros
- `POST /usuarios` → cadastra novo serviço/cliente

## Status

Projeto em desenvolvimento, com interface funcional e base de backend pronta para evoluir.

## Licença

Não definida ainda.