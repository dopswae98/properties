# HARARE INSTITUTE OF PUBLIC HEALTH -PORTAL

### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/britelink/HIPH.git
```

### Install packages

```shell
pnpm i
```

### Setup .env file

```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
pnpm run dev
```

## Available Commands

Running commands with npm `pnpm run [command]`

| command       | description                                                                                             |
| :------------ | :------------------------------------------------------------------------------------------------------ |
| `dev`         | Starts a development instance of the app                                                                |
| `build`       | Builds the app for production                                                                           |
| `start`       | Starts the application in production mode                                                               |
| `lint`        | Runs the linter to check for code issues                                                                |
| `postinstall` | Generates Prisma client after installing dependencies                                                   |
| `push`        | Pushes the Prisma schema state to the database                                                          |
| `studio`      | Opens Prisma Studio, a GUI for the Prisma schema                                                        |
| `create`      | Initializes a new mdBook project for documentation and changes directory to `documentation`             |
| `docs`        | Serves the mdBook documentation locally                                                                 |
| `run-all`     | Runs multiple scripts for drug interactions, chemistry, dosages, food interactions, and classifications |

https://github.com/fdarian/prisma-generator-drizzle
