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
- `utils:` A library that provides a set of utility functions and hooks that can be used by both the market-web and market-mobile apps. These folders includes functions such as formatting currency, manipulate data, managing state, etc.

## Tech Stack:

- [NX Monorepo](https://nx.dev/)
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

## Requirements

- Node.js v16
- NPM

## Getting Started

- Clone the repo `https://github.com/lintangdigdoyo/crypto-market.git`
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
- `npm run storybook:web` — Launch storybook
- `npm run storybook:web:build` — Build storybook

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
- `npm run format` — format the repo using prettier

### App preview

- `Web app:` https://crypto-market-five-alpha.vercel.app
- `Mobile app:` https://expo.dev/@lintangdigdoyo/market-mobile — preview the app using Expo Go app

## CI/CD with Github Action and Vercel

By using Github Action, every time a pull request is created, it will test and lint the pull request to ensure that the commit passes the test and lint check before being merged. Additionally, a deploy preview is provided by Vercel on every commit, enabling a preview of the application before merging it to the main branch. When the pull request is merged into the main branch, the web application is automatically deployed to production.

## Why I chose a monorepo instead of a single repository for a single app?

The reason I chose to use a monorepo for this project because it allows us to easily share functionality between mobile and web apps. Since both apps are essentially the same project and rely on the same API, it avoids duplicating code which leads to a faster development process and also keeps both apps in sync with each other.

## Tools, framework, and libraries decisions

- **NX Monorepo:**

  NX is a powerful toolkit for building and managing monorepo project. The reason use NX because it provides a number of _benefits_ such as:

  - **Code sharing between apps:** We can easily share code like functions and components between projects, so it can reduce duplication and gives a consistency in the codebase.
  - **Caching build and test processes:** NX uses caching to optimize build and test times, making it faster and more efficient.
  - **Easy to use:** NX provides tools for managing monorepo, such as code generation, plugins and dependency management.

  While NX provides a number of benefits, but there is still _tradeoff_ to consider:

  - **Dependencies management:** it can be difficult to manage dependencies across multiple projects than in a traditional single-project setup. We should be careful and mindful of versioning and dependency conflicts to ensure that all projects remain compatible.

- **Next:**

  The Next.js framework is used to build this web app because of these _benefits_:

  - **Server-side rendering:** Next provides built-in support for server-side rendering, which can improve performance and SEO for the app.
  - **SSR combined with React Query:** By combining server-side rendering with React Query, we can prefetch the data on the server and then store the data in the client cache, which will reduces the need for additional requests by the client. This approach results in a fast user experience, particularly on the initial load, since the client receive HTML file with loaded data and does not have to make additional requests for the same data again.

  _tradeoff_ to consider:

  - **Hydration related issue:** managing state and data fetching can require additional planning, as the pre-rendered React tree (SSR/SSG) and the React tree rendered during the first hydration process in the browser may sometimes become out of sync.

- **Expo**

  Expo is a set of tools and services for building and deploying React Native applications. This project uses Expo because it provides these _benefits_:

  - **Quick and easy setup:** With Expo we can set up and begin building a new React Native app with just a few commands.
  - **Easy to deploy:** Expo offers an easy deployment process, makes it easy to deploy the app to the App Store and Google Play.

  _Tradeoff_ to consider:

  - **Have limited support to the native module:** Expo has a limited set of native modules available.

- **Axios**

  Axios is a popular library for making HTTP requests, this project uses axios because of these _benefits_:

  - **Support for multiple environments:** Axios can be used in a variety of environments, including browser, Node.js, and React Native mobile application.
  - **Easy to use:** Simple and intuitive, makes it easy to send HTTP requests and handle responses.

  But there is still some potential _Tradeoff_ to consider:

  - **Additional external library:** We need to install it as an additional dependency in the project.

- **React Query:**

  React Query is a server-state library, responsible for managing asynchronous operations between server and client. In this project React Query is used for both web and mobile apps because of these _benefits_ over other state management libraries:

  - **Caching:** React Query automatically caches API responses, reducing the need for unnecessary network requests and improving performance.
  - **Handle server state with ease:** we can fetch, store, and manage the data/state with ease.
  - **Server-side rendering support:** React Query provides built-in support for server-side rendering, making it easier to use it with SSR applications.

  But there is still potential _tradeoff_ to consider when using React Query:

  - **Not a replacement of client state management:** React Query is not a replacement for local/client state management. Although React Query is useful for managing data fetching and caching, it may not be sufficient for managing all aspects of client-side state. In some cases, it may be necessary to combine React Query with other state management to ensure proper handling of client-side state.

## Future improvements

- **Only deploy affected app**\
  Currently, every time we push a commit the deployment process is triggered, even if there are no code changes in the app being deployed. This can result in unnecessary deployments. To address this, we can configure the monorepo to only deploy the affected app when there are changes detected. This approach can significantly reduce the amount of deployment.

- **Make the components globaly available**\
  To ensure consistency across different projects within the monorepo, it's better to make the commonly used and reusable components as library. By doing this, these components can be easily reused in future projects within this repository, avoiding the need to recreate them from scratch.

- **Storybook for the mobile app**\
  Currently, this project only provides Storybook for the web app. However, it will better to provide Storybook to the mobile app. Having Storybook available for both web and mobile apps can also ensure component consistency and give access to preview the component.
