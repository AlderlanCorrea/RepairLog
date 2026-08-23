# RepairLog 📱

Interface web para registrar e acompanhar serviços de uma assistência técnica. O projeto apresenta uma página inicial com cadastro de atendimento, busca de serviços e cards de acompanhamento, usando uma identidade visual baseada em azul, azul-marinho, branco e preto.

## Status do projeto

O RepairLog está em fase de protótipo visual. A estrutura das telas e os componentes principais já estão montados, mas a aplicação ainda não possui backend, banco de dados ou regras JavaScript para salvar, pesquisar e atualizar serviços.

## Funcionalidades atuais

- Página inicial da assistência técnica.
- Campo de pesquisa de serviços com ícones e layout responsivo.
- Formulário de registro com nome, email, telefone, aparelho e descrição do problema.
- Limpeza dos campos do formulário pelo botão `Limpar`.
- Card visual de serviço com status, cliente, aparelho, descrição e data de atualização.
- Botões de ação preparados para futuras funções de atualização e detalhes.
- Rodapé com navegação, links legais e redes sociais.
- Layout adaptado para telas desktop e mobile.
- Fonte local `Bebas Neue` carregada a partir da pasta `fonts`.

## Tecnologias

- HTML5 semântico.
- CSS3 com variáveis de tema, Grid, Flexbox e media queries.
- JavaScript preparado em arquivo separado.
- SVG inline para ícones de interface.
- Fonte local Bebas Neue.

O projeto atualmente não utiliza React, TypeScript, Tailwind CSS, shadcn/ui ou dependências NPM. A implementação foi mantida em HTML, CSS e JavaScript para acompanhar a estrutura existente.

## Estrutura de pastas

```text
RepairLog/
├── index.html       # Página principal, busca, cadastro e serviço demonstrativo
├── dasboard.html    # Estrutura inicial da futura dashboard
├── css/
│   └── styles.css   # Identidade visual e responsividade
├── fonts/
│   ├── BebasNeue-Regular.otf
│   └── BebasNeue-Regular.ttf
├── img/
│   └── ...png       # Logo da aplicação
└── js/
    └── script.js    # Ponto de entrada para as interações JavaScript
```

> Observação: o nome atual do arquivo é `dasboard.html`. Quando a dashboard for implementada, vale considerar renomeá-lo para `dashboard.html` e atualizar os links correspondentes.

## Como executar

Como é um projeto estático, não é necessário instalar dependências.

1. Abra a pasta `RepairLog` no VS Code.
2. Abra o arquivo `index.html` no navegador.

Para uma experiência melhor durante o desenvolvimento, também é possível usar uma extensão de servidor local, como Live Server, e abrir o endereço fornecido pela extensão.

## Identidade visual

As principais cores estão definidas em `css/styles.css`:

| Variável | Uso | Valor |
| --- | --- | --- |
| `--primary-color` | Ações e destaques | `#008DFF` |
| `--secondary-color` | Textos e elementos escuros | `#102A43` |
| `--background-color` | Fundo geral | `#F0F4F8` |
| `--text-color` | Cor de texto auxiliar | `#333` |

Os cards e formulários usam branco como superfície, preto para títulos e elementos de maior contraste, e sombras suaves para separar os blocos do fundo.

## Acessibilidade e responsividade

- Campos possuem labels associados por `for` e `id`.
- Botões com ícones possuem `aria-label` quando não têm texto visível.
- Ícones decorativos usam `aria-hidden`.
- O formulário alterna de duas colunas para uma coluna em telas menores.
- O card de serviço e o campo de pesquisa ocupam larguras fluidas dentro de limites definidos.
- Estados de foco visível foram adicionados aos principais controles.

## Próximos passos

- Implementar o cadastro de serviços em `js/script.js`.
- Persistir os registros com `localStorage` ou uma API.
- Fazer a busca filtrar os cards pelo serviço, cliente ou aparelho.
- Conectar os botões de atualização e detalhes aos registros reais.
- Substituir o serviço demonstrativo por uma lista gerada dinamicamente.
- Construir a dashboard em `dasboard.html`.
- Adicionar validações e mensagens de sucesso ou erro no formulário.
- Corrigir o nome `dasboard.html` para `dashboard.html` quando a página for ativada.

## Licença

Este projeto ainda não possui uma licença definida.