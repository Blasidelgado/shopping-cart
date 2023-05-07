# template-ui-vite-react

Template for building Web Apps using React + Vite.

# Features

- React
- Vite
- Tailwind
- Eslint
- Prettier
- Husky
- lint-staged
- editorconfig
- Vitest
- React Testing Library
- Cypress

# Setup

> ⚠️ We recommend using [Visual Studio Code](https://code.visualstudio.com/) as well as the extensions for [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for development.

> ⚠️ We recommend using Node version 16.x. Check [nvm](https://github.com/nvm-sh/nvm).

1. `npm ci` to install dependencies.
2. Copy contents of `.env.dist` into a `.env` file and populate it.

# How to run

```
npm run build # Create a production build
npm run start:prod # Run app in production
npm run start:dev # Run app in development

```

# Testing

```
npm run test # Run unit tests once
npm run test:watch # Run unit tests and keep watching for changes
npm run test:ui # Run UI tests in headless mode
npm run test:ui:dev # Run UI in browser mode
```

# Useful commands

```
npm run lint # Run linter
npm run format # Run formatter
```

# Issues

Files that are not tested are displayed in the final cypress report as having "empty" coverage. They should display 0% coverage.

- https://github.com/cypress-io/code-coverage/issues/539
- https://github.com/cypress-io/code-coverage/issues/552

# References

- [React docs](https://react.dev/learn)
- [Vite docs](https://vitejs.dev/guide/)
- [Vite + Tailwind setup](https://tailwindcss.com/docs/guides/vite)
- [eslint + prettier + editorconfig setup](https://dev.to/npranto/how-i-setup-eslint-prettier-and-editorconfig-for-static-sites-33ep)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Vitest test framework](https://vitest.dev/)
- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro/)
- [React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library/)
- [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress)
- [Vite + React + Cypress + coverage](https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc)
- [@cypress/code-coverage](https://github.com/cypress-io/code-coverage)
- [nyc](https://github.com/istanbuljs/nyc)
