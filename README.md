# CryptoMarket

Crypto Market is a web and mobile application that provides cryptocurrency market data, allowing users to easily track the performance of various cryptocurrencies over time.

This project is built using `NX monorepo`, a tool for building and managing monorepo project. NX allows us to share code between different projects, and makes it easy to maintain consistency across multiple applications.

## Apps

This repository contains two apps in the _/apss_ folder:

- `market-web:` A web application built using Next.js and TypeScript.
- `market-mobile:` A mobile application built using React Native and TypeScript.

## Internal Libraries

This repository also contains two libraries in the _/libs_ folder that can be shared between the apps:

- `services:` A library that provides a set of functions and hooks for handling API requests and responses. These functions and hooks can be used by both the market-web and market-mobile apps to communicate with external APIs and retrieve data.
- `utils:` A library that provides a set of utility functions and hooks that can be used by both the market-web and market-mobile apps. These functions can help with tasks such as formatting currency, manipulate data, managing state, etc.

## Tech Stack:

- [NX Monorepo]("https://nx.dev/")
- [React.js version 18](https://reactjs.org/)
- [React Native version 0.7](https://reactjs.org/)
- [Expo version 47](https://reactjs.org/)
- [Next.js version 12](https://nextjs.org/)
- [Typescript version 4](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest/docs/react/overview)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/)
- [Github Actions](https://github.com/features/actions)

## Requirements

- Node.js v16
- NPM

## Getting Started

- Clone the repo `git@github.com:lintangdigdoyo/crypto-market.git`
- Install project dependencies — `npm install`
- Launch the **web app** — `npm run dev:web`, it will become available at [http://localhost:4200](http://localhost:4200/)
- Launch the **mobile app** — `npm run dev:mobile`
- _(optional)_ Install [NX VSCode extension]("https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console"), it provides a graphical user interface for managing NX monorepo

### Web app scripts

- `npm run dev:web` — Launches the web app in development mode
- `npm run build:web` — Compiles and bundles the app
- `npm run start:web` — Start the production server
- `npm run test:web` — Run tests
- `npm run test:web-watch` — Run tests in watch mode
- `npm run lint:web` — Run lint in the web app
- `storybook:web` — Launch storybook
- `storybook:web:build` — Build storybook

### Mobile app scripts

- `npm run dev:mobile` — Launches the mobile app in development mode
- `npm run build:mobile` — Build the mobile app
- `npm run publish:mobile` — Publish the mobile app to Expo Application Services
- `npm run test:mobile` — Run tests
- `npm run test:mobile-watch` — Run tests in watch mode
- `npm run lint:mobile` — Run lint in the mobile app

### Other scripts

- `npm run test:utils` — Run utils lib tests
- `npm run test:utils-watch` — Run utils lib tests in watch mode
- `npm run lint:utils` — Run lint in the utils folder
- `npm run lint:services` — Run lint in the services folder
- `format` — format the repo using prettier

### App preview

- `Web app:` https://crypto-market-five-alpha.vercel.app
- `Mobile app:` https://expo.dev/@lintangdigdoyo/market-mobile — preview the app using Expo Go app

### Why I chose a monorepo instead of a single repository app?

The reason I chose to use a monorepo for this project because it allows us to easily share functionality between mobile and web apps. Since both apps are essentially the same project and rely on the same API, it avoids duplicating code which leads to a faster development process and also keeps both apps in sync with each other.

## Tools, framework, and libraries decisions

- **NX Monorepo:**

  NX is a powerful toolkit for building and managing monorepo project. The reason use NX because it provides a number of _benefits_ such as:

  - **Caching build and test processes:** NX uses caching to optimize build and test times, making it faster and more efficient.
  - **Code sharing between apps:** We can easily share code like functions and components between projects, so it can reduce duplication and gives a consistency in the codebase.
  - **Ease of management:** NX provides set of tools for managing monorepo, such as code generation and dependency management.

  While NX provides a number of benefits, there are also some _tradeoffs_:

  - **Dependency management:** it can be difficult to manage dependencies across multiple projects than in a traditional single-project setup. Be careful and mindful of versioning and dependency conflicts to ensure that all projects remain compatible.
  - **Configuration complexity:** Even though NX provides a set of tools for managing and generating projects and dependencies, it still can also lead to additional configuration complexity. Sometimes it may need to spend more time configuring and customizing the setup in order to get the most out of it.

- **Next:**

  The Next.js framework is used to build this web app because of these _benefits_:

  - **Server-side rendering:** Next provides built-in support for server-side rendering, which can improve performance and SEO for the app.
  - **SSR combined with React Query:** By combining server-side rendering with React Query, we can prefetch the data on the server and then store the data in the client cache, which will reduces the need for additional requests by the client. This approach results in a fast user experience, particularly on the initial load, since the client receive HTML file with loaded data and does not have to make additional requests for the same data again.

  There are also potential _tradeoffs_ to consider:

  - **Hydration related issue:** managing state and data fetching can require additional planning, as the pre-rendered React tree (SSR/SSG) and the React tree rendered during the first hydration process in the browser may sometimes become out of sync.

- **React Query:**

  React Query is a server-state library, responsible for managing asynchronous operations between server and client. In this project React Query is used for both web and mobile apps because of these _benefits_ over other state management libraries:

  - **Caching:** React Query automatically caches API responses, reducing the need for unnecessary network requests and improving performance.
  - **Flexible query management:** we can fetch, store, and manage the data/state with ease.
  - **Server-side rendering support:** React Query provides built-in support for server-side rendering, making it easier to use it with SSR applications.

  But there are still some potential _tradeoffs_ to consider when using React Query:

  - **Not a replacement of client state management:** React Query is not a replacement for local/client state management. Although React Query is useful for managing data fetching and caching, it may not be sufficient for managing all aspects of client-side state. In some cases, it may be necessary to combine React Query with other state management to ensure proper handling of client-side state.

- **Axios**

  Axios is a popular library for making HTTP requests,

- Expo
- Github Actions and Vercel

## Future improvements

- storybook
- only deploy affected app
- make the component globaly
