npx create-next-app@latest nextjs-ecommerce
----------------------------------------------

√ TypeScript - Yes
√ ESLint
√ React Compiler - No 
√ Tailwind CSS - Yes
√ `src/` directory - No 
√ App Router - Yes
√ import alias (`@/*` by default) - Yes
√ import alias configured @/*
----------------------------------------------

Installing dependencies:
- next
- react
- react-dom

Installing devDependencies:
- @tailwindcss/postcss
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- tailwindcss
- typescript
------------------------------------------------

npm run dev
------------------------------------------------

app/
 ├─ layout.tsx        ← root layout (navbar, footer)
 ├─ page.tsx          ← Home (SSG)
 ├─ loading.tsx       ← global loader
 ├─ error.tsx         ← global error boundary
 ├─ not-found.tsx     ← 404 page
 ├─ products/
 │   ├─ page.tsx      ← Products list (ISR)
 │   └─ [id]/
 │       └─ page.tsx  ← Product detail (SSR/ISR)
 ├─ cart/
 │   └─ page.tsx      ← Cart (CSR)
 └─ api/
     └─ products/
         └─ route.ts  ← mock backend API
--------------------------------------------------------

