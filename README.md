# NASA API POC

1. [Setup](#setup)
    * [Github](#github)
    * [Environmental Variables](#environmental-variables)
2. [Technical Requirements](#technical-requirements)
    * [React with Vite](#react-with-vite)
    * [Typescript](#typescript)
    * [Material UI](#material-ui)
    * [React Query](#react-query)
3. [Other Requirements](#other-requirements)
    * [React Router](#react-router)
4. [Feature Requirements](#feature-requirements)
5. [Development Notes](#development-notes)
    * [Approach and design decisions](#approach-and-design-decisions)
    * [Technology Overview](#technology-overview)
    * [Assumptions](#assumptions)
    * [Next Steps](#next-steps)

## Setup

### Github
Clone/checkout this repo, install dependencies, then start the dev server with the following:
```
> git clone git@github.com:JamesBonney/nasa-api.git
> cd nasa-api
> npm install
> npm start
```

### Environmental Variables
You may create an `.env` file in the root on the project to use your own NASA API key, otherwise the `DEMO_KEY` will be used, which is severely rate limited. The `.env` file should contain (replace `DEMO_KEY` with your API key)
```
VITE_NASA_API_KEY=DEMO_KEY
VITE_NASA_API_URL=https://api.nasa.gov
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

## Other Requirements
### React Router
```
> npm install react-router
```

## Feature Requirements
✅ At least one table of data with pagination and filtering 
- Display API data in a paginated format, in a table
- Include at least one filter and/or search feature

✅ At least one form with field validation
- Create a form with multiple input fields, with appropriate validation
- Note that the form doesn’t need to submit (or you could post to localStorage, or something else; whatever you’d prefer. We’re most interested in your ability to handle state and validation in the form itself)

✅ At least one modal component
- E.g., for detail views, confirmations, or whatever additional functionality you’d like

✅ Loading and error states
- Implement appropriate loading indicators during API calls
- Handle and display API errors gracefully
- Show appropriate empty states when no data is available

✅ Material UI components where reasonable, including some level of customization
- Create a custom theme with your own color palette, customize the components individually, both, or something else entirely
- Customize at least one MUI component’s styling or behavior from the default
- Note that this requirement is fairly vague because the goal is mostly to demonstrate your understanding of MUI

## Development Notes

### Approach and design decisions
- To get up and running quickly, I started with one of vite's template configurations for React and Typescript.
- I then added in the base configuration and general scaffolding from one of Material UI's publically available templates.
- Since the project was to show several different features, I added React Router and setup a general use layout to hold the feature views.
- I chose the Mars Rover Photos API since it seemed to meet all of the requirements for the project (pageable, filterable, and had good associated imagery)

### Technology Overview
- *Familiar*: I have had prior experience with `React`, `Typescript`, `Material UI`, `React Query`, and `React Router`.
- *New*: `vite` was completely new to me with this project, but I found it very straightforward and was able to get up and running very quickly.

### Assumptions
- To get up and running quickly, I started with one of vite's template configurations for React and Typescript.
- I then added in the base configuration and general scaffolding from one of Material UI's publically available templates.
- Since the project was to show several different features, I added React Router and setup a general use layout to hold the feature views.

### Next Steps
What you would add/remove/change with more time
- *Add*: testing (Jest w/React Testing Library, Playright), Internationalization
- *Remove*: TBD
- *Change*: The environmental variables file is a local configuration and may be fine for a POC, but the values should really be moved to the build process so that they do not need to be maintained by each dev





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
