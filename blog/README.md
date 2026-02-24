# Blog Content Guide

Os artigos do blog devem ser armazenados em:

- `/blog/<ano>/<slug>.md`

Exemplo:

- `/blog/2026/arquitetura-limpa-no-node.md`

## Frontmatter obrigatório

```yaml
---
title: "Título do artigo"
description: "Resumo curto para listagem e SEO"
date: "2026-02-23"
---
```

## Frontmatter opcional

```yaml
tags:
  - backend
  - arquitetura
cover: "/blog/capas/arquitetura-limpa.jpg"
draft: false
updatedAt: "2026-02-24"
```

## Regras

- O nome da pasta (`<ano>`) deve ter 4 dígitos e bater com o ano do campo `date`
- `date` e `updatedAt` devem estar no formato `YYYY-MM-DD`
- O `slug` é derivado do nome do arquivo (sem `.md`)
- `draft: true` remove o artigo de listagens/sitemap em produção

## Normalização de markdown (GitBook -> padrão)

- Converta embeds do GitBook (`{% embed ... %}`) para links markdown comuns
- Converta blocos HTML (`<figure>`, `<pre>`, etc.) para markdown padrão quando possível
- Evite sintaxe específica de GitBook; o renderer suporta markdown padrão + GFM

## Imagens

- Preferir imagens em `/public/blog/...`
- Referenciar no markdown com caminhos absolutos do site, por exemplo:
  - `![Descrição](/blog/imagens/minha-imagem.png)`

## Checklist antes de publicar

- `npm run build`
- Verificar `/blog`
- Verificar `/blog/<ano>/<slug>`
- Confirmar título, descrição e data
