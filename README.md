# Site Interativo: Minha História com o TDAH e Nós

Este é um site interativo criado com React que apresenta uma história carinhosa sobre TDAH e vida conjugal. O site foi desenvolvido com base na apresentação original e inclui navegação interativa entre slides.

## Características do Site

- **Design Responsivo**: Funciona bem em desktop e mobile
- **Estilo Notion**: Visual clean e minimalista inspirado no Notion
- **Navegação Interativa**: Botões de navegação e indicadores de progresso
- **Imagens Personalizadas**: Ilustrações no estilo hand-drawn baseadas nas fotos fornecidas
- **Conteúdo Carinhoso**: Linguagem acolhedora e informativa sobre TDAH

## Estrutura do Projeto

```
tdah-site/
├── src/
│   ├── assets/          # Imagens da apresentação
│   ├── components/      # Componentes UI (shadcn/ui)
│   ├── App.jsx          # Componente principal com todos os slides
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Ponto de entrada
├── dist/                # Versão compilada para produção
├── package.json         # Dependências do projeto
└── README.md           # Este arquivo
```

## Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação
1. Extraia o arquivo ZIP
2. Navegue até a pasta do projeto:
   ```bash
   cd tdah-site
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

### Executar em Desenvolvimento
```bash
npm run dev
# ou
pnpm run dev
```

O site estará disponível em `http://localhost:5173`

### Compilar para Produção
```bash
npm run build
# ou
pnpm run build
```

Os arquivos compilados estarão na pasta `dist/`

## Tecnologias Utilizadas

- **React**: Framework principal
- **Vite**: Bundler e servidor de desenvolvimento
- **Tailwind CSS**: Framework de CSS
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes UI
- **Fonte Caveat**: Fonte manuscrita do Google Fonts

## Slides Incluídos

1. **Introdução**: Apresentação carinhosa do tema
2. **O que é TDAH?**: Explicação sobre o transtorno
3. **Desafios**: Principais dificuldades na vida conjugal
4. **Aspectos Positivos**: Características positivas do TDAH
5. **Soluções**: Estratégias práticas para o casal
6. **Conclusão**: Mensagem de união e amor

## Personalização

Para personalizar o conteúdo:
1. Edite o arquivo `src/App.jsx`
2. Modifique o array `slides` com seu conteúdo
3. Substitua as imagens na pasta `src/assets/`
4. Ajuste os estilos em `src/App.css`

## Implantação

O projeto pode ser implantado em qualquer serviço de hospedagem estática como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Basta fazer upload da pasta `dist/` após executar `npm run build`.

---

Criado com ❤️ para compartilhar conhecimento sobre TDAH e fortalecer relacionamentos.

