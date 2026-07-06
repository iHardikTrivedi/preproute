# 🤝 CONTRIBUTING.md

# Contributing Guide

Welcome to the **Preproute Test Management System** project.

This document describes the development workflow, coding standards, project structure, Git conventions, and best practices followed throughout the project.

---

# Table of Contents

1. Project Setup
2. Folder Structure
3. Development Workflow
4. Coding Standards
5. Naming Conventions
6. Git Workflow
7. Branch Naming
8. Commit Convention
9. Component Guidelines
10. API Guidelines
11. State Management
12. Styling Guidelines
13. TypeScript Guidelines
14. Form Guidelines
15. Performance Guidelines
16. Pull Request Checklist
17. Future Contributors

---

# 1. Project Setup

## Clone Repository

```bash
git clone https://github.com/HardikTrivedi/preproute.git
```

Navigate to project:

```bash
cd preproute
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Create production build:

```bash
npm run build
```

---

# 2. Environment Variables

Copy the example file:

```bash
cp .env.example .env
```

Update `VITE_API_URL` with your backend URL.

---

# 3. Folder Structure

```
src/

├── api/               # Axios instance, interceptors, endpoints, types
├── app/
│   ├── providers/     # AuthProvider, ReduxProvider, ThemeProvider
│   ├── router/       # AppRouter, ProtectedRoute, routes constants
│   └── store/         # Redux store, rootReducer, selectors
├── components/
│   ├── common/        # AppBreadcrumbs, AppButton, AppLogo, AppSearchField,
│   │                 # AppNoResultFound, PageLoader, etc.
│   ├── feedback/      # Loader
│   └── form/         # AppTextFieldSimple, AppSelectField, AppMultiSelectField,
│                     # AppNumberField, AppRadioGroup, AppPasswordField
├── config/           # env.ts, queryKeys.ts, messages.ts
├── features/
│   ├── auth/
│   │   ├── api/      # auth.api.ts
│   │   ├── hooks/    # useAuth.ts, useLogin.ts
│   │   ├── pages/    # LoginPage.tsx
│   │   ├── store/    # authSlice.ts + selectors
│   │   ├── types/    # auth.types.ts
│   │   └── schemas/  # login.schema.ts
│   ├── dashboard/
│   │   ├── api/     # dashboard.api.ts + mappers
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── store/
│   │   └── types/
│   ├── tests/
│   │   ├── api/     # tests.api.ts, subjects.api.ts, topics.api.ts, subtopics.api.ts
│   │   ├── components/
│   │   ├── hooks/   # useTestCreation.ts, useCreateTest.ts, useSubjects.ts, useTopics.ts
│   │   ├── pages/    # CreateTestPage.tsx
│   │   ├── store/    # testCreationSlice.ts + selectors
│   │   ├── types/
│   │   └── constants.ts
│   └── questions/
│       └── pages/    # QuestionsPage.tsx
├── hooks/            # useAppDispatch, useAppSelector, useNotification,
│                    # useDebounce, useDisclosure
├── layouts/          # AuthLayout, DashboardLayout
├── theme/           # theme.ts, colors.ts, typography.ts, palette.ts
├── types/           # api.ts, auth.ts, common.ts
└── utils/           # apiError.ts, storageService.ts
```

Each folder has a dedicated responsibility.

---

# 4. Development Workflow

```
Feature Request

↓

Create Branch

↓

Implement Feature

↓

Lint (npm run lint)

↓

Build (npm run build)

↓

Commit

↓

Push

↓

Pull Request
```

Before every commit:

```bash
npm run lint
```

Ensure `npm run build` passes before pushing.

---

# 5. Coding Standards

The project follows these principles:

- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Separation of Concerns
- Feature-Based Architecture
- Reusable Components
- Strong Type Safety (no `any`)

---

# 6. Formatting

Use ESLint and Prettier.

```bash
npm run lint
```

---

# 7. Naming Conventions

## Components

PascalCase:

```
LoginPage

DashboardPage

TestTable

TestStatusChip
```

## Hooks

camelCase with `use` prefix:

```
useLogin()

useDashboard()

useTestCreation()

useSubjects()
```

## Types / Interfaces

PascalCase:

```
User

Test

LoginRequest

ApiResponse
```

Suffix with `Type` for type aliases:

```
UserType

QuestionType
```

## Files

```
login.api.ts

tests.api.ts

axios.ts

authSlice.ts

useTests.ts

dashboard.mapper.ts
```

---

# 8. Git Workflow

Main Branch:

```
main
```

Feature Branch:

```
feature/login

feature/dashboard

feature/create-test

feature/questions
```

Bug Fix:

```
fix/dashboard-table

fix/test-creation-flow
```

---

# 9. Commit Convention

Follow Conventional Commits:

```
feat: add login page

feat: implement dashboard tests list

feat: add test creation flow

fix: handle 401 unauthorized redirect

refactor: simplify API service

style: update responsive layout

docs: update API documentation

chore: update dependencies
```

---

# 10. Component Guidelines

Each component should have a single responsibility.

Preferred structure:

```
Props

↓

Hooks

↓

Business Logic

↓

JSX

↓

Export
```

Example reusable components:

```
AppButton

AppTextFieldSimple

AppSelectField

AppMultiSelectField

AppNumberField

AppRadioGroup

AppBreadcrumbs

AppSearchField

EmptyState

PageLoader

TestStatusChip

TestActions
```

---

# 11. API Guidelines

Never call Axios directly from a page or component.

Correct Flow:

```
Component

↓

Feature Hook (calls createAsyncThunk)

↓

API Service (Axios call)

↓

Axios

↓

Backend
```

Example:

```
CreateTestPage

↓

useTestCreation().handleCreateTest()

↓

thunkCreateTest (createAsyncThunk)

↓

TestsApi.create()

↓

axios.post("/tests")
```

---

# 12. State Management — Redux Toolkit

## Feature Slices

Each feature has its own slice (`features/*/store/*.slice.ts`) and selectors.

## createAsyncThunk Pattern

All API calls use `createAsyncThunk`:

```ts
// 1. Define thunk in features/*/hooks/use*.ts
export const thunkFetchSubjects = createAsyncThunk<
  Subject[],
  void,
  { rejectValue: string }
>("testCreation/fetchSubjects", async (_, { rejectWithValue }) => {
  try {
    const response = await SubjectsApi.getAll();
    return response.data ?? [];
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// 2. Handle in slice extraReducers
extraReducers: (builder) => {
  builder
    .addCase(thunkFetchSubjects.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(thunkFetchSubjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subjects = action.payload ?? [];
    })
    .addCase(thunkFetchSubjects.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Failed to fetch subjects";
    });
};
```

## Redux is used for ALL async data

Do **not** use a separate caching library. Redux Toolkit state is the single source of truth for API data.

---

# 13. TypeScript Guidelines

Strict mode is enabled.

Avoid `any`. Use explicit types:

```ts
// Bad
const handleChange = (event: any) => { ... };

// Good
const handleChange = (event: SelectChangeEvent<string[]>) => { ... };
```

Define interfaces for all props and API responses.

---

# 14. Form Guidelines

All forms use:

- React Hook Form
- Zod Resolver

Validation is schema-based. Do not manually validate inside components.

---

# 15. Styling Guidelines

Use Material UI components with the centralized theme.

Centralize:

- Colors → `src/theme/colors.ts`
- Typography → `src/theme/typography.ts`
- Spacing → `src/theme/spacing.ts`

Avoid inline styles and hardcoded magic numbers.

---

# 16. Error Handling

Use centralized Axios interceptors (`src/api/interceptors.ts`).

Handle:

- Network Error
- Unauthorized (401 → auto logout)
- Timeout
- Validation Errors
- Internal Server Error

Display meaningful toast messages via Notistack.

---

# 17. Performance Guidelines

- Lazy-loaded routes
- Feature-based architecture
- Code splitting via Vite
- Memoize only when necessary (`React.memo`, `useMemo`, `useCallback`)
- Debounced search inputs
- Efficient Redux selectors (selectors are cheap — no need to memoize)

---

# 18. Security Guidelines

- Never commit `.env`
- Never hardcode secrets
- Use HTTPS endpoints
- Validate all form inputs
- Handle unauthorized requests via Axios interceptor

---

# 19. Pull Request Checklist

Before submitting:

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] Loading states implemented
- [ ] Empty/error states handled
- [ ] No unused imports
- [ ] Documentation updated (if new API/feature added)

---

# 20. Future Contributors

When adding new features:

- Follow the existing folder structure under `features/`
- Keep features isolated
- Create reusable components in `components/` where appropriate
- Add TypeScript types for all new data models
- Reuse the centralized Axios instance
- Use Redux Toolkit `createAsyncThunk` for API calls
- Update documentation when introducing new APIs or modules

---

# Project Philosophy

- Clean Architecture
- Feature Isolation
- Type Safety
- Scalability
- Maintainability
- Performance
- Developer Experience
