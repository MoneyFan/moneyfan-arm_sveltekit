# MoneyFan | ARM

[github.com/MoneyFan/moneyfan-arm_sveltekit](https://github.com/MoneyFan/moneyfan-arm_sveltekit)

Создан с помощью [`create-svelte version 6.0.8`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

```bash
# created by
npm create svelte@latest moneyfan-arm_sveltekit

create-svelte version 6.0.8

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting, Add Playwright for browser testing, Add Vitest for unit testing
│
└  Your project is ready!
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

## SQLite WASM install

Обновление официальной библиотеки `sqlite-wasm`

```bash
$curl -LS https://sqlite.org/2024/sqlite-wasm-3450100.zip -o ./build/sqlite-wasm.zip
$unzip  ./build/sqlite-wasm.zip 'sqlite-wasm-3450100/jswasm/*' -d ./build
$rm -r src/packages/sqlite-wasm/jswasm
$mkdir -p src/packages/sqlite-wasm/jswasm
$cp -r ./build/sqlite-wasm-3450100/jswasm/ ./src/packages/sqlite-wasm/jswasm
$npx prettier --write ./src/packages/sqlite-wasm/jswasm
```

## Источник

- [WebAssembly & JavaScript - sqlite.org/2024/sqlite-src-3450100.zip](https://sqlite.org/2024/sqlite-src-3450100.zip)
- [Cross-origin isolation (COOP and COEP) through a service worker for situations in which you can't control the headers (e.g. GH pages)](https://github.com/gzuidhof/coi-serviceworker)
