# Instalação

O MarkFlow Lite foi projetado para funcionar completamente no navegador, sem necessidade de instalação. No entanto, aqui estão as diferentes maneiras de acessar e usar a aplicação.

## 🌐 Uso no Navegador (Recomendado)

### Acesso Direto
1. Visite a aplicação web no seu navegador
2. Comece a escrever imediatamente!
3. Sem downloads, sem configuração

### Navegadores Compatíveis
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📱 Instalação como PWA

O MarkFlow Lite funciona como uma Progressive Web App (PWA), permitindo instalá-lo como uma aplicação nativa.

### No Chrome/Edge
1. Visite a aplicação web
2. Procure o ícone "Instalar" na barra de endereços
3. Clique em "Instalar"
4. A aplicação aparecerá na sua área de trabalho

### No Firefox
1. Visite a aplicação web
2. Clique no menu (três linhas)
3. Selecione "Instalar esta aplicação"

### No Safari (iOS)
1. Visite a aplicação web
2. Toque no botão de compartilhar
3. Selecione "Adicionar à tela inicial"

## 💻 Instalação Local (Desenvolvimento)

Se você quiser executar o MarkFlow Lite localmente ou contribuir para o desenvolvimento:

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos
```bash
# Clonar o repositório
git clone https://github.com/usuario/markflow-lite.git
cd markflow-lite

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## 🔧 Configuração Inicial

### Preferências do Editor
1. **Tema**: Claro/Escuro/Automático
2. **Fonte**: Tamanho e família da fonte
3. **Divisão de tela**: Horizontal/Vertical
4. **Salvamento automático**: Intervalo e configuração

### Configuração de Visualização
1. **Estilo do Markdown**: Selecione seu estilo preferido
2. **Matemática**: Habilitar/desabilitar KaTeX
3. **Diagramas**: Configurar Mermaid
4. **Destaque de código**: Selecionar tema

## 📁 Gerenciamento de Arquivos

### Armazenamento Local
- Os arquivos são salvos automaticamente no navegador
- Usa IndexedDB para armazenamento persistente
- Capacidade praticamente ilimitada

### Armazenamento na Nuvem
O MarkFlow Lite suporta vários serviços de armazenamento:

#### WebDAV
- Compatível com Nextcloud, ownCloud
- Configuração simples com URL, usuário e senha

#### Amazon S3
- Acesso direto a buckets S3
- Configurar com chaves de acesso AWS

#### Dropbox (Em breve)
#### Google Drive (Em breve)

## 🔒 Segurança e Privacidade

- **Sem rastreamento**: Não coletamos dados pessoais
- **Criptografia local**: Os arquivos são criptografados localmente
- **Sem servidor**: Todo o processamento ocorre no seu navegador
- **Código aberto**: Código transparente e auditável

## 🚨 Solução de Problemas

### Problemas Comuns

#### A aplicação não carrega
1. Verifique sua conexão com a internet
2. Limpe o cache do navegador
3. Tente no modo incógnito

#### Os arquivos não são salvos
1. Verifique o espaço de armazenamento do navegador
2. Permita armazenamento persistente nas configurações
3. Verifique as permissões da aplicação

#### Desempenho lento
1. Feche outras abas do navegador
2. Reduza o tamanho dos documentos
3. Desative extensões desnecessárias

### Log de Depuração
Para obter ajuda com problemas:
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá para a aba "Console"
3. Reproduza o problema
4. Envie as mensagens de erro para o suporte

## 🆕 Atualizações

O MarkFlow Lite se atualiza automaticamente:
- **Atualizações automáticas**: Novas versões são carregadas automaticamente
- **Sem interrupções**: As atualizações não afetam seu trabalho
- **Notificações**: Você é notificado sobre novas funcionalidades

Pronto para começar? Continue com o [Guia de Uso Básico](./basic-usage).
