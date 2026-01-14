# AAG - Associação Anti Giba (Next.js)

Esta é a versão Next.js da AAG, criada para comparação com a versão Laravel.

## 🚀 Como rodar

```bash
# Instalar dependências
bun install

# Rodar em desenvolvimento
bun dev

# Build para produção
bun build

# Rodar produção
bun start
```

## 📁 Estrutura

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── historia/
│   │   └── page.tsx      # Página História
│   ├── membros/
│   │   └── page.tsx      # Página Membros
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globais
├── components/
│   └── Header.tsx        # Header reutilizável
public/
└── aag.jpeg              # Foto do Giba
```

## 🎨 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Biome** - Linter e formatter

## ✨ Features

- ✅ 3 páginas (Home, História, Membros)
- ✅ Header responsivo com menu mobile
- ✅ Design mobile-first
- ✅ Logo ASCII em todas as telas
- ✅ Componentes reutilizáveis
- ✅ Navegação SPA (sem reload)
- ✅ Metadata SEO

## 🆚 Diferenças vs Laravel/Inertia

### Laravel/Inertia

- Backend PHP + Frontend Vue
- SSR via Inertia.js
- Rotas definidas no backend (`routes/web.php`)
- Componentes Vue (`.vue`)
- `<Link>` do Inertia para navegação

### Next.js

- Full-stack React/TypeScript
- SSR nativo do Next.js
- Rotas baseadas em arquivos (`app/`)
- Componentes React (`.tsx`)
- `<Link>` do Next.js para navegação
- Metadata por página com `export const metadata`

## 🎯 Principais diferenças técnicas

| Feature    | Laravel/Inertia    | Next.js            |
| ---------- | ------------------ | ------------------ |
| Linguagem  | PHP + Vue.js       | TypeScript + React |
| Roteamento | routes/web.php     | File-based (app/)  |
| Estado     | Vue ref()          | React useState()   |
| Navegação  | Inertia Link       | Next Link          |
| CSS        | Tailwind (classes) | Tailwind (classes) |
| Build      | Vite               | Turbopack          |

Acesse `http://localhost:3000` após rodar `bun dev`!
