# 📘 DECISIONS.md

# Architectural Decisions Record (ADR)

This document explains the major technical decisions made during the development of the Preproute Test Management System.

---

# Decision 1 — React + TypeScript

Use React with TypeScript.

**Reason:**

- Strong typing
- Better IDE support
- Easier refactoring
- Fewer runtime errors

---

# Decision 2 — Vite

Use Vite as the build tool.

**Reason:**

- Extremely fast startup
- Instant HMR
- Optimized production builds
- Native TypeScript support

---

# Decision 3 — Feature-Based Architecture

Organize code by business feature instead of file type.

```
features/

  auth/

  dashboard/

  tests/

  questions/
```

**Reason:**

- Easier maintenance
- Better scalability
- Feature isolation
- Cleaner imports

---

# Decision 4 — Material UI

Use Material UI as the component library.

**Reason:**

- Accessible components
- Responsive design
- Faster development
- Consistent UI

---

# Decision 5 — Redux Toolkit for All State

Use Redux Toolkit for both client state and API data via `createAsyncThunk`.

**Stored in Redux:**

- `authSlice` — token, user, auth state
- `dashboardSlice` — test list, loading/error
- `testCreationSlice` — form fields, dropdown data (subjects/topics/subtopics), loading states, edit mode

**Reason:**

Redux Toolkit's `createAsyncThunk` provides a clean, unified pattern for all async operations. All loading, error, and data states live together per feature with no additional caching library needed.

---

# Decision 6 — Axios

Centralize API communication through a shared Axios instance.

**Reason:**

Supports interceptors, automatic authorization headers, timeouts, and global error handling via `src/api/interceptors.ts`.

---

# Decision 7 — React Hook Form + Zod

Use React Hook Form with Zod resolver for all form validation.

**Reason:**

- Minimal re-renders
- Excellent performance
- Type-safe validation schemas
- Natural TypeScript integration

---

# Decision 8 — Zod

Use Zod for schema-based validation.

**Reason:**

- Type-safe validation
- TypeScript integration
- Reusable schemas
- Automatic parsing and transformation

---

# Decision 9 — Protected Routes

Secure application routes via `ProtectedRoute` component.

```
Login → Token → ProtectedRoute → Dashboard
```

**Reason:**

Prevent unauthorized access to internal pages.

---

# Decision 10 — API Layer

Never call Axios inside components. All API calls follow:

```
Component → Feature Hook (thunk) → API Service → Axios → Backend
```

**Reason:**

- Reusability
- Easier testing
- Cleaner UI

---

# Decision 11 — Reusable Components

Centralized reusable UI components in `src/components/`:

```
common/   — AppButton, AppBreadcrumbs, AppSearchField, etc.

form/     — AppTextFieldSimple, AppSelectField, AppMultiSelectField, etc.

feedback/ — Loader
```

**Reason:**

Consistency and maintainability across the application.

---

# Decision 12 — Environment Variables

Store configuration in `.env` files.

**Reason:**

- Easy deployment
- No hardcoded URLs
- Environment-specific configuration

Access via `src/config/env.ts` for type-safe consumption.

---

# Decision 13 — Folder Structure

Use a feature-first structure under `src/features/`:

```
features/
  auth/
  dashboard/
  tests/
  questions/
```

Each feature contains its own `api/`, `hooks/`, `store/`, `types/`, `pages/`, `components/`.

**Reason:**

Better organization for medium and large applications; all related files are co-located.

---

# Decision 14 — Error Handling

Centralize errors using Axios interceptors (`src/api/interceptors.ts`).

**Reason:**

Avoid duplicated try/catch logic across components.

---

# Decision 15 — Loading States

Every async operation provides:

- Loading flags in Redux state (`isLoading`, `isLoadingTopics`, etc.)
- Skeleton loaders for tables
- Disabled buttons during mutations

**Reason:**

Improved user experience.

---

# Decision 16 — TypeScript Strict Mode

TypeScript strict mode is enabled.

**Reason:**

Catch type errors during development rather than runtime.

---

# Decision 17 — Notistack for Notifications

Use Notistack for toast notifications.

**Reason:**

Implements Material UI snackbar pattern with stacking support,不需要 imperative API calls, integrates naturally with Redux state.

---

# Decision 18 — Responsive Design

Use Material UI Grid and responsive breakpoints.

**Reason:**

Support for Desktop, Tablet, and Mobile layouts.

---

# Decision 19 — Vite for Build

Use Vite for development and production builds.

**Reason:**

- Native ESM dev server
- Fast HMR
- Optimized Rollup builds
- TypeScript support out of the box

---

# Decision 20 — Deployment

Deploy using Vercel.

**Reason:**

- Native Vite/React support
- Fast deployment
- Automatic HTTPS
- GitHub integration

---

# Trade-offs

| Decision | Trade-off |
|---------|-----------|
| Material UI | Larger bundle size, offset by faster development and accessibility |
| Redux Toolkit | Additional setup over useState, but clearer state management for complex features |
| Feature-Based Architecture | Slightly more folders initially, but scales much better |
| Zod | Learning curve, but highly valuable type safety |

---

# Guiding Principles

- Separation of Concerns
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Single Responsibility Principle
- Composition over Inheritance
- Reusability
- Scalability
- Maintainability
- Type Safety
- Performance First

---

# Summary

These architectural decisions ensure the application remains scalable, maintainable, and aligned with modern React and TypeScript best practices. The chosen stack — React 19, Vite, Redux Toolkit, Material UI, React Hook Form, Zod, and Axios — provides a solid, production-ready foundation.
