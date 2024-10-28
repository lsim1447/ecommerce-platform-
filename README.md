# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `dashboard`: a [Next.js](https://nextjs.org/) app
- `store`: another [Next.js](https://nextjs.org/) app
- `@repo/inventory-service`: a stub microservice to communicate with postgres DB shared by both `store` and `dashboard` applications
- `@repo/ui`: a stub React component library shared by both `store` and `dashboard` applications
- `@repo/types`: a types shared by both `store` and `dashboard` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd ecommerce-platform
pnpm install
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd ecommerce-platform
pnpm dev
```

This will run two application on two different ports.

- http://localhost:3000/
- http://localhost:3001/

# Monorepo Project

This monorepo contains multiple services and libraries to support an e-commerce platform. Each service is isolated but shares common configurations, dependencies, and resources where applicable.

## Project Structure

```plaintext
.
├── apps
│   ├── dashboard
│   │   ├── app/
│   │   ├── package.json
│   │   └── ...
│   ├── store
│   │   ├── app/
│   │   ├── package.json
│   │   └── ...
├── packages
│   ├── inventory-service
│   │   ├── src/
│   │   ├── drizzle/
│   │   ├── README.md
│   │   ├── package.json
│   │   └── ...
│   ├── other-service/
│   └── ui/
├── package.json
├── README.md
└── ...

```

### Services

inventory-service: Manages product inventories, including adding, updating, and querying product stock.
other-service: Placeholder for additional services or microservices.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/dashboard/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/dashboard/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/dashboard/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/dashboard/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/dashboard/reference/configuration)
- [CLI Usage](https://turbo.build/repo/dashboard/reference/command-line-reference)

```

```
