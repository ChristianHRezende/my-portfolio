# Portfolium Project

Welcome to the Portfolium project, a minimal setup for React working with Vite, a modern frontend build tool, and TypeScript. This project aims to provide a foundation for showcasing your professional projects and skills.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Internationalization (i18n)](#internationalization-i18n)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

## Getting Started

1. Install Node.js and npm (or Yarn)
2. Clone the repository or download the project files
3. Run `npm install` or `yarn install` to install dependencies
4. Run `npm run dev` or `yarn dev` to start the development server

## Project Structure

The project's overall structure is organized into several directories and files. Here's a brief overview:

```
portfolium/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── App.styles.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── layers/
│   ├── theme/
│   ├── translation/
│   ├── types/
│   └── utils/
├── .env
├── .eslintrc.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

## Key Features

- React with TypeScript
- Vite for blazing-fast development
- Styled-components for CSS-in-JS
- Antd for UI components
- i18next for internationalization

## Internationalization (i18n)

The project supports internationalization using the i18next library. The translations are stored in JSON files within the `src/translation` directory. To add a new language, simply create a new JSON file with the appropriate translations and update the `src/i18n.ts` file to include the new language.

## Expanding the ESLint Configuration

The project comes with a basic ESLint configuration, but you can expand it to fit your needs. To enable type-aware lint rules and integrate the eslint-plugin-react, follow these steps:

1. Install the required dependencies:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Update your `.eslintrc.json` file:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-jsx-a11y/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

## Available Scripts

- `dev`: Runs the development server using Vite.
- `build`: Compiles TypeScript and then builds the project using Vite.
- `lint`: Runs ESLint to check the codebase for potential issues.
- `preview`: Runs the Vite preview server, which allows you to preview the project in the browser.

## Learn More

To learn more about Vite, React, TypeScript, Styled-components, Antd, and i18next, check out the following resources:

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Styled-components Documentation](https://styled-components.com/docs)
- [Antd Documentation](https://ant.design/docs/react/introduce)
- [i18next Documentation](https://www.i18next.com/overview/getting-started)

This is just a starting point for your Portfolium project. You can customize and expand it to fit your needs. Happy coding!
