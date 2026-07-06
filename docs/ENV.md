# 🌱 Environment Configuration

This project uses **Vite Environment Variables** to manage application configuration across different environments (Development, Staging, and Production).

---

# Environment Files

| File | Purpose |
|------|---------|
| `.env.example` | Template with only required variables. Committed to repository. |
| `.env` | Local development configuration. **Not committed.** |
| `.env.production` | Production-specific configuration. Set on hosting platform (e.g., Vercel). |

---

# Getting Started

1. Copy the example file:

```bash
cp .env.example .env
```

2. Update the values according to your environment.

---

# Environment Variables

Only these variables are actually used in the codebase (`src/config/env.ts`):

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_NAME` | Application name | `PrepRoute` |
| `VITE_APP_ENV` | Current environment | `development` |
| `VITE_API_URL` | Backend API Base URL | `https://admin-moderator-backend-staging.up.railway.app/api` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

---

# Example `.env.example`

```env
VITE_APP_NAME=PrepRoute
VITE_APP_ENV=development
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
VITE_APP_VERSION=1.0.0
```

---

# Accessing Environment Variables

Vite exposes environment variables through `import.meta.env`.

The application uses a centralized access point:

```ts
// src/config/env.ts
import { ENV } from "@/config/env";

const apiUrl = ENV.API_URL;
```

Never use `import.meta.env` directly in component or service files — always go through `ENV`.

---

# Deployment

When deploying on Vercel, configure the same variables in the Vercel dashboard:

| Variable | Development | Production |
|---------|-------------|------------|
| `VITE_APP_ENV` | `development` | `production` |
| `VITE_API_URL` | staging URL | production URL |
| `VITE_APP_NAME` | `PrepRoute` | `PrepRoute` |

---

# Security Notes

- Never commit `.env` (it contains secrets)
- Commit only `.env.example` with safe defaults
- Do not store secrets or private keys in Vite environment variables — they are exposed in the client bundle
- Use environment variables only for public configuration (API URLs, feature flags, app metadata)

---

# Best Practices

- Keep all environment variable names prefixed with `VITE_`
- Access variables through `src/config/env.ts` (typed wrapper) instead of `import.meta.env` directly
- Commit `.env.example` to document required variables
- Use different values for Development, Staging, and Production environments

---

# Related Files

```text
.env.example      — Variable template (committed)
.env             — Local overrides (not committed)
src/config/env.ts — Type-safe environment access
```
