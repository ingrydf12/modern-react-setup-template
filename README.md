# Modern React Setup Template

Esse template disponibiliza um setup mínimo para utilização do Vite + React + Typescript support, com algumas regras baseadas no ESlint e SWC. Em adição, outras tecnologias são adicionadas aqui como suporte, preferências e melhorias em comparação ao tradicional setup disponibilizado em templates Vite. Elas são:

<img src="https://img.shields.io/badge/tanstack%20router-db2a4d.svg?style=for-the-badge&logo=tanstack&logoColor=white" />
<img src="https://img.shields.io/badge/shadcn-db2a4d.svg?style=for-the-badge&logo=shadcnui&logoColor=white" />
<img src="https://img.shields.io/badge/tailwindcss-db2a4d.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/redux-db2a4d.svg?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/vitest-db2a4d.svg?style=for-the-badge&logo=vitest&logoColor=white" />

<br />

**Plugins adicionais oficiais disponíveis:**

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## About Mock Service Worker

MSW models its interception API after server-side routing and handles requests and responses according to the Fetch API specification, using the same classes you would use normally in JavaScript:

```javascript
http.get("https://api.example.com/user", async ({ request }) => {
  const payload = await request.json();
  return HttpResponse.json({ id: 1, name: "John" });
});
```

When working with MSW, you will be writing request handlers to intercept and respond to requests. It’s important to approach those handlers from the server’s perspective since, effectively, you are describing how the server should behave in a particular scenario.

## Tests with Vitest + Playwright

Best pratice:
- React Components
- E2E by Playwright, Integration and Unit Test with Vitest.

