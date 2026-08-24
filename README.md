# RepairLog 📱

Interface web para registrar e acompanhar serviços de uma assistência técnica. O projeto reúne uma página inicial com cadastro, busca de serviços e cards de acompanhamento, além de uma dashboard operativa com visão geral de estoque, fila de reparos e receitas.

## Status do projeto

O RepairLog está em evolução para um protótipo funcional com foco em dashboard e identidade visual consistente. A interface principal foi estruturada com sucesso e a dashboard foi implementada com navegação lateral, indicadores de atenção, fila de reparos, alertas de estoque e receita do período.

## Funcionalidades atuais

- Página inicial da assistência técnica.
- Campo de pesquisa de serviços com ícones e layout responsivo.
- Formulário de registro com nome, email, telefone, aparelho e descrição do problema.
- Limpeza dos campos do formulário pelo botão `Limpar`.
- Card visual de serviço com status, cliente, aparelho, descrição e data de atualização.
- Dashboard com sidebar, cartões de indicadores, fila de reparos e alertas de estoque.
- Painel de receita com totais por período e divisão entre reparos e vendas.
- Rodapé com navegação, links legais e redes sociais.
- Layout adaptado para telas desktop e mobile.
- Fonte local `Bebas Neue` carregada a partir da pasta `fonts`.
- Sistema de cores centralizado em variáveis CSS no `:root` para facilitar manutenção e consistência visual.

## Tecnologias

- HTML5 semântico.
- CSS3 com variáveis de tema, Grid, Flexbox e media queries.
- JavaScript preparado em arquivo separado.
- SVG inline para ícones de interface.
- Fonte local `Bebas Neue`.

O projeto atualmente não utiliza React, TypeScript, Tailwind CSS, shadcn/ui ou dependências NPM. A implementação foi mantida em HTML, CSS e JavaScript para acompanhar a estrutura existente.

## Estrutura de pastas

```text
RepairLog/
├── index.html       # Página principal: busca, cadastro e serviço demonstrativo
├── dasboard.html    # Dashboard visual com visão geral operacional
├── css/
│   └── styles.css   # Identidade visual, responsividade e variáveis de tema
├── fonts/
│   ├── BebasNeue-Regular.otf
│   └── BebasNeue-Regular.ttf
├── img/
│   └── ...png       # Logo da aplicação
└── js/
    └── script.js    # Ponto de entrada para as interações JavaScript
```

## Como executar

Como é um projeto estático, não é necessário instalar dependências.

1. Abra a pasta `RepairLog` no VS Code.
2. Abra o arquivo `index.html` no navegador.
3. Para visualizar a dashboard, abra `dasboard.html`.

Para uma experiência melhor durante o desenvolvimento, também é possível usar uma extensão de servidor local, como Live Server, e abrir o endereço fornecido pela extensão.

## Identidade visual

As principais cores estão definidas em `css/styles.css` e centralizadas em variáveis do `:root`:

| Variável | Uso | Valor |
| --- | --- | --- |
| `--primary-color` | Ações e destaques | `#008DFF` |
| `--secondary-color` | Textos e elementos escuros | `#102A43` |
| `--background-color` | Fundo geral | `#F0F4F8` |
| `--text-color` | Cor de texto auxiliar | `#333` |
| `--surface-color` | Superfícies claras | `white` |
| `--border-color` | Bordas visuais | `#D7E0E8` |
| `--danger-color` | Alertas críticos | `#D64545` |

Os cards, formulários e dashboard usam branco como superfície, marinho para superfícies escuras e títulos, além de sombras suaves para separar os blocos do fundo.

## Acessibilidade e responsividade

- Campos possuem labels associados por `for` e `id`.
- Botões com ícones possuem `aria-label` quando não têm texto visível.
- Ícones decorativos usam `aria-hidden`.
- O formulário alterna de duas colunas para uma coluna em telas menores.
- O card de serviço, o campo de pesquisa e os blocos da dashboard ocupam larguras fluidas dentro de limites definidos.
- Estados de foco visível foram adicionados aos principais controles.
- A navegação da dashboard foi pensada para manter legibilidade e organização em telas menores.

## Próximos passos

- Implementar o cadastro de serviços em `js/script.js`.
- Persistir os registros com `localStorage` ou uma API.
- Fazer a busca filtrar os cards pelo serviço, cliente ou aparelho.
- Conectar os botões de atualização e detalhes aos registros reais.
- Substituir o serviço demonstrativo por uma lista gerada dinamicamente.
- Melhorar a dashboard com filtros, gráficos e ações interativas.
- Adicionar validações e mensagens de sucesso ou erro no formulário.
- Revisar naming e organização dos arquivos para manter a estrutura do projeto consistente.

## Licença

Este projeto ainda não possui uma licença definida.