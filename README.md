# Next.js Boilerplate

🚀 Boilerplate and Starter for Next.js, Muiv5, Storybook, i18n and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library.

## Getting Started

Install dependencies with yarn if you have just cloned the repo

```bash
yarn
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/data](http://localhost:3000/api/data). This endpoint can be edited in `src/pages/api/data.ts`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook on local

Install dependencies with yarn if you have just cloned the repo

```bash
yarn
```

First, run the storybook server:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the storybook.

## Link Storybook to Chromatic

- [Automate Chromatic with GitHub Actions](https://www.chromatic.com/docs/github-actions) - Automate the deployment of your storybook

## Production build


Install dependencies with yarn if you have just cloned the repo

```bash
yarn
```

First, build the app:

```bash
yarn build
```

Then start the app:

First, build the app:

```bash
yarn start
```

## Mui Theme file and company

The `src/components` directory contains the theme file and some components. You can import each components in your modules or pages with  `import {<component-name>} from "@components/<component-name>"`

## Testing

Just run:

```bash
yarn test
```


## Learn More

To learn more about Next.js, Mui, React Query, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MuiV5 Documentation](https://mui.com/material-ui/getting-started/overview/) - Material UI is a library of React UI components that implements Google's Material Design.
- [Tanstack Query Documentation](https://tanstack.com/query/v4) - Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte
- [next-i18next Documentation](https://github.com/i18next/next-i18next) - The easiest way to translate your Next.js apps.
- [Storybook Documentation](https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/) - Storybook is a frontend workshop for building UI components and pages in isolation.

