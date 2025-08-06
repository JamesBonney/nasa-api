# NASA API POC

1. [Setup](#setup)
    * [Github](#github)
2. [Technical Requirements](#technical-requirements)
    * [React with Vite](#react-with-vite)
    * [Typescript](#typescript)
    * [Material UI](#material-ui)
    * [React Query](#react-query)


## Setup

### Github
Clone/checkout this repo, install dependencies, then start the dev server with the following:
```
> git clone git@github.com:JamesBonney/nasa-api.git
> cd nasa-api
> npm install
> npm start
```

## Technical Requirements

### React with Vite
React with Vite as the build tool
```
> npm create vite@latest nasa-api -- --template react-ts
```

### Typescript
Typescript (included in Vite template setup)

### Material UI
Material UI for the component library
```
> npm install @mui/material @emotion/react @emotion/styled
> npm install @fontsource/roboto
> npm install @mui/icons-material
```

### React Query
TanStack’s React Query for API calls and management
```
> npm install @tanstack/react-query
> npm install -D @tanstack/eslint-plugin-query
```


Selected NASA APIs
Mars Rover Photos
NASA Image and Video Library


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
