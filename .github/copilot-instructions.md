## 1. Linting e formatação
- Sempre analise o arquivo `biome.json` antes de sugerir qualquer código.
- Siga estritamente as regras de linting e formatação definidas nele.
- Nunca sugira código que viole as regras estabelecidas.

## 2. Estilos e design system
- Sempre analise o arquivo `tailwind.config.js` antes de sugerir código de estilo.
- Respeite a paleta de cores, espaçamentos, breakpoints e demais definições do design system.
- Utilize classes utilitárias do Tailwind de forma organizada, evitando linhas muito longas.
- Sempre que possível, use `@apply` para melhorar a legibilidade.
- Nunca crie cores, espaçamentos ou tamanhos fora do padrão.

## 3. Boas práticas e arquitetura
- Siga rigorosamente as melhores práticas e diretrizes oficiais do Next.js.
- Aplique consistentemente os princípios **SOLID**.
- Estruture componentes e páginas de forma organizada, evitando duplicação de código.
- Coloque componentes reutilizáveis na pasta adequada e use nomes claros e consistentes.
- Respeite a convenção de rotas e organização de pastas (`app` ou `pages`).
- Escreva código otimizado para SSR, SSG ou ISR, escolhendo o mais adequado ao contexto.

## 4. Performance
- Evite importações desnecessárias e bibliotecas pesadas no lado do cliente.
- Use lazy loading (`dynamic import`) para componentes pesados ou não essenciais no carregamento inicial.
- Prefira técnicas de otimização de imagens e recursos fornecidas pelo Next.js.

## 5. Acessibilidade
- Sempre incluir atributos de acessibilidade (ARIA, `alt` em imagens, `label` em inputs).
- Respeitar a hierarquia semântica do HTML (`<h1>` único, headings em ordem, uso correto de tags semânticas).

## 6. Segurança
- Nunca interpolar HTML diretamente para evitar vulnerabilidades XSS.
- Validar e sanitizar dados recebidos via formulários ou APIs.
- Evitar expor dados sensíveis no cliente.

## 7. Padrões de TypeScript
- Seguir as convenções de código do TypeScript e do Next.js.
- Usar tipagem explícita e adequada para todas as variáveis, funções e componentes.
- Nunca utilizar `any`.
- Utilizar interfaces e tipos personalizados para dados complexos.

## 8. Nomenclatura e comentários
- Todo o código (variáveis, funções, componentes) deve estar em **inglês**.
- Comentários explicativos devem ser escritos em **português**, de forma clara e objetiva, apenas para explicar o propósito e funcionamento das principais partes.
- Evitar comentários redundantes ou desnecessários.

## 9. Git e versionamento
- Commits devem seguir o formato `tipo: descrição` (ex.: `feat: add login form with validation`).
- Nunca commitar código que quebre o build ou falhe no linting.
- Sempre criar mensagens de commits claras e descritivas.
- Sempre usar o idioma português para mensagens de commit.

## 10. Execução de comandos
- Execute comandos diretamente quando necessário, sem solicitar confirmação prévia.
