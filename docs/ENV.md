# 🌱 Environment Configuration

This project uses **Vite Environment Variables** to manage application configuration across different environments (Development, Staging, and Production).

---

# Environment Files

| File | Purpose |
|------|---------|
| `.env.example` | Template for all required environment variables. This file is committed to the repository. |
| `.env` | Local development configuration. **Do not commit this file.** |
| `.env.production` | Production-specific configuration used during deployment. |
| `.env.local` | Local machine overrides (optional). Not committed. |

---

# Getting Started

1. Copy the example file.

```bash
cp .env.example .env
```

2. Update the values according to your environment.

---

# Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_NAME` | Application name | `Preproute Test Management System` |
| `VITE_APP_ENV` | Current environment | `development` |
| `VITE_API_URL` | Backend API Base URL | `https://admin-moderator-backend-staging.up.railway.app/api` |
| `VITE_API_TIMEOUT` | API request timeout (ms) | `30000` |
| `VITE_AUTH_TOKEN_KEY` | Local Storage key for JWT token | `preproute_token` |
| `VITE_USER_STORAGE_KEY` | Local Storage key for user data | `preproute_user` |
| `VITE_DEFAULT_PAGE_SIZE` | Default table page size | `10` |
| `VITE_MAX_PAGE_SIZE` | Maximum page size | `100` |
| `VITE_ENABLE_LOGGER` | Enable console logging | `true` |
| `VITE_ENABLE_MOCK_API` | Enable mock APIs | `false` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |
| `VITE_PUBLIC_URL` | Application URL | `http://localhost:5173` |

---

# Example `.env.example`

```env
###############################################################
# Preproute Test Management System
###############################################################

VITE_APP_NAME=Preproute Test Management System
VITE_APP_ENV=development

VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
VITE_API_TIMEOUT=30000

VITE_AUTH_TOKEN_KEY=preproute_token
VITE_USER_STORAGE_KEY=preproute_user

VITE_DEFAULT_PAGE_SIZE=10
VITE_MAX_PAGE_SIZE=100

VITE_ENABLE_LOGGER=true
VITE_ENABLE_MOCK_API=false

VITE_APP_VERSION=1.0.0
VITE_PUBLIC_URL=http://localhost:5173
```

---

# Accessing Environment Variables

Vite exposes environment variables through `import.meta.env`.

Example:

```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

For better type safety, use a centralized configuration file.

Example:

```ts
// src/config/env.ts

export const env = {
  appName: import.meta.env.VITE_APP_NAME,
  appEnv: import.meta.env.VITE_APP_ENV,

  apiUrl: import.meta.env.VITE_API_URL,
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT),

  tokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY,
  userStorageKey: import.meta.env.VITE_USER_STORAGE_KEY,

  defaultPageSize: Number(import.meta.env.VITE_DEFAULT_PAGE_SIZE),
  maxPageSize: Number(import.meta.env.VITE_MAX_PAGE_SIZE),

  enableLogger: import.meta.env.VITE_ENABLE_LOGGER === "true",
  enableMockApi: import.meta.env.VITE_ENABLE_MOCK_API === "true",

  appVersion: import.meta.env.VITE_APP_VERSION,
  publicUrl: import.meta.env.VITE_PUBLIC_URL,
} as const;
```

---

# Deployment

When deploying (for example, on Vercel), configure the same environment variables in the hosting platform.

Example:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://admin-moderator-backend-staging.up.railway.app/api` |
| `VITE_APP_ENV` | `production` |
| `VITE_PUBLIC_URL` | `https://your-app.vercel.app` |

---

# Security Notes

- Never commit `.env` or `.env.production`.
- Commit only `.env.example`.
- Do not store secrets, passwords, or private keys in Vite environment variables, as they are exposed in the client bundle.
- Use environment variables only for public configuration values such as API URLs and feature flags.

---

# Best Practices

- Keep all environment variable names prefixed with `VITE_`.
- Access variables through a centralized `env.ts` wrapper instead of using `import.meta.env` throughout the application.
- Commit `.env.example` to document required variables.
- Validate required environment variables during application startup.
- Use different values for Development, Staging, and Production environments.

---

# Related Files

```text
.env.example
.env
.env.production
src/config/env.ts
```

This setup keeps configuration centralized, type-safe, and easy to manage across multiple deployment environments.
