<div align="center">

# Documentação do MarkFlow Lite

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

Documentação do Editor de Markdown Online Frontend Puro

[中文](../README.md) | [English](../en/README.md) | [Español](../es/README.md) | [日本語](../ja/README.md) | [Deutsch](../de/README.md)

</div>

## Introdução

MarkFlow Lite é um editor de Markdown online de frontend puro que não requer servidor e está pronto para usar imediatamente. Ele suporta edição em tempo real, visualização dupla, salvamento local e compartilhamento de conteúdo.

## Principais Características

- ✍️ **Edição em Tempo Real** - Suporta sintaxe padrão de Markdown (incluindo tabelas, blocos de código, listas, etc.) com experiência de edição WYSIWYG
- 👁️ **Visualização em Tempo Real** - Veja enquanto escreve, suporta renderização de fórmulas matemáticas e fluxogramas, visualização sincronizada em tempo real
- 💾 **Armazenamento Local** - Salva automaticamente rascunhos no armazenamento local do navegador, sem preocupação com perda de dados
- 📄 **Exportação de Arquivos** - Suporta exportação para formatos PDF, HTML, Markdown e outros, facilitando o compartilhamento e arquivamento
- 📂 **Gerenciamento de Arquivos** - Suporta criação de novos documentos, abertura de arquivos Markdown locais e integração com armazenamento na nuvem
- 🔗 **Compartilhamento de Conteúdo** - Gera links únicos, o conteúdo pode ser compartilhado via parâmetros de URL, tornando a colaboração mais conveniente
- 🎨 **Troca de Tema** - Fornece temas claros/escuros, adaptados a diferentes ambientes de leitura, proteção ocular
- ⌨️ **Operações de Atalho** - Suporta atalhos comuns (negrito, itálico, inserção de títulos, etc.), melhorando a eficiência de edição
- 📱 **Design Responsivo** - Suporta acesso por desktop, tablet e celular, edite documentos a qualquer hora e lugar

## Início Rápido

### Uso Online

Visite [MarkFlow Lite](https://editor.currso.com) diretamente para começar a usá-lo.

### Desenvolvimento Local

```bash
# Clone o projeto
git clone https://github.com/blankzsh/markflow-lite.git

# Entre no diretório do projeto
cd markflow-lite

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Stack Tecnológico

- **Framework de Desenvolvimento**: React + TypeScript + Vite
- **Parseamento de Markdown**: markdown-it
- **Destaque de Código**: Highlight.js
- **Design de Estilos**: Tailwind CSS + @tailwindcss/typography
- **Fórmulas Matemáticas**: MathJax (via markdown-it-mathjax3)
- **Suporte a Fluxogramas**: Mermaid
- **Ferramenta de Build**: Vite
- **Plataforma de Deploy**: GitHub Pages / Vercel / Netlify

## Estrutura da Documentação

```
docs/
├── .vitepress/          # Configuração do VitePress
├── guide/               # Guia do usuário
├── features/            # Introdução às funcionalidades
├── en/                  # Documentação em inglês
├── es/                  # Documentação em espanhol
├── pt/                  # Documentação em português
├── ja/                  # Documentação em japonês
├── de/                  # Documentação em alemão
├── public/              # Recursos estáticos
└── index.md             # Página inicial
```

## Contribuições

Contribuições de qualquer tipo são bem-vindas! Se você tem alguma das seguintes ideias, sinta-se à vontade para participar:

- 🐛 Reportar bugs
- 💡 Sugerir novas funcionalidades
- 📝 Melhorar a documentação
- 🎨 Otimizar o design UI/UX
- 🔧 Corrigir problemas de código

Por favor, consulte nossas [Diretrizes de Contribuição](../CONTRIBUTING.md) para mais informações.

## Entre em Contato

Se você encontrar problemas, tiver sugestões de funcionalidades ou quiser fornecer feedback ao usar o aplicativo, entre em contato conosco através de:

- **Feedback por Email**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [Enviar Problemas ou Sugestões](https://github.com/blankzsh/markflow-lite/issues)
- **Repositório do Projeto**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

Valorizamos o feedback de cada usuário, e suas sugestões nos ajudarão a melhorar continuamente o MarkFlow Lite!

## Licença

Este projeto está licenciado sob a Licença [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE).