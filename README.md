# React + TypeScript + Vite

## Run with Docker

Build the production frontend image:

```sh
docker build -t portfolio-frontend:latest .
```

Run it on port 8080:

```sh
docker run --rm -p 8080:80 portfolio-frontend:latest
```

The container serves the built frontend through Nginx, supports client-side route
fallback, and proxies `/api/*` requests to
`https://portfolio-backend-gray-tau.vercel.app` by default. To use a different
backend, set `API_UPSTREAM` to its origin when starting the container:

```sh
docker run --rm -p 8080:80 \
  -e API_UPSTREAM=https://your-backend.example.com \
  portfolio-frontend:latest
```

The image is for the frontend only; it does not contain or run the backend.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
