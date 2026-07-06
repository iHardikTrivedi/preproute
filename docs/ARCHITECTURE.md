# 🏛 ARCHITECTURE.md

# Preproute Test Management System

## Architecture Overview

This document explains the overall architecture, design decisions, project structure, data flow, authentication flow, API layer, state management, and scalability considerations used in the **Preproute Test Management System**.

The project is designed using modern React development practices with a strong emphasis on:

- Scalability
- Maintainability
- Reusability
- Separation of Concerns
- Type Safety
- Performance
- Clean Architecture

---

# Table of Contents

1. Architecture Principles
2. Technology Stack
3. High-Level Architecture
4. Folder Structure
5. Feature-Based Architecture
6. Routing Architecture
7. Authentication Flow
8. State Management
9. API Layer
10. Component Architecture
11. Form Architecture
12. Data Flow
13. Error Handling
14. Performance Optimization
15. Security
16. Scalability
17. Future Improvements

---

# 1. Architecture Principles

## Separation of Concerns

Each feature is responsible only for its own functionality.

```
Authentication

↓

Login Page

↓

useLogin Hook

↓

AuthApi

↓

Axios
```

---

## Reusability

Reusable UI Components:

- Button
- Input
- Select / MultiSelect
- Loader
- Dialog
- Table
- Empty State
- Breadcrumbs
- Search Field
- Number Field
- Radio Group
- Password Field

Business logic is extracted into custom hooks.

---

## Type Safety

The project uses TypeScript Strict Mode. No usage of `any`.

Interfaces and Types are defined inside `features/*/types` and `src/types/`.

---

## Single Responsibility Principle

Each module performs one responsibility only.

```
LoginForm

↓

Collect User Input

-------------------------

useLogin()

↓

Call Login API

-------------------------

AuthApi

↓

HTTP Request
```

---

# 2. Technology Stack

| Layer | Technology |
|-------|-------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| UI | Material UI |
| Forms | React Hook Form |
| Validation | Zod |
| Global State | Redux Toolkit |
| HTTP | Axios |
| Notifications | Notistack |
| Date Handling | Day.js |
| Icons | MUI Icons |

---

# 3. High-Level Architecture

```
                    Browser

                       │

                       ▼

              React Application

                       │

     ┌─────────────────┴─────────────────┐

     ▼                                   ▼

React Router                       Material UI

     │

     ▼

Feature Modules

     │

┌────┴────────────┐

▼                 ▼

Redux        Redux Toolkit

          (createAsyncThunk)

                  │

                  ▼

             API Services

                  │

                  ▼

                Axios

                  │

                  ▼

      Backend REST API Server
```

---

# 4. Folder Structure

```
src/

├── api/
│   ├── axios.ts          # Axios instance
│   ├── endpoints.ts      # API endpoint constants
│   ├── interceptors.ts   # Auth & error interceptors
│   ├── logger.ts         # Dev logging
│   └── types.ts          # Shared API types

├── app/
│   ├── providers/         # AuthProvider, ReduxProvider, ThemeProvider
│   ├── router/           # AppRouter, ProtectedRoute, routes
│   └── store/            # Redux store, rootReducer, selectors

├── components/
│   ├── common/            # AppBreadcrumbs, AppButton, AppLogo, AppSearchField, etc.
│   ├── feedback/         # Loader
│   └── form/             # AppTextFieldSimple, AppSelectField, AppMultiSelectField,
│                         # AppNumberField, AppRadioGroup, AppPasswordField, etc.

├── config/
│   ├── env.ts            # Environment variable access
│   ├── queryKeys.ts      # Query key constants
│   └── messages.ts       # UI messages

├── features/
│   ├── auth/
│   │   ├── api/          # AuthApi
│   │   ├── hooks/        # useAuth, useLogin
│   │   ├── pages/        # LoginPage
│   │   ├── store/        # authSlice
│   │   ├── types/        # auth.types
│   │   └── schemas/      # login.schema
│   │
│   ├── dashboard/
│   │   ├── api/          # DashboardApi
│   │   ├── components/    # TestTable, TestTableHead, TestTableRow, etc.
│   │   ├── hooks/         # useDashboard, useGetTests
│   │   ├── mappers/      # dashboard.mapper
│   │   ├── pages/         # DashboardPage
│   │   ├── store/         # dashboardSlice
│   │   └── types/         # dashboard.types, dashboard-api.types
│   │
│   ├── tests/
│   │   ├── api/          # TestsApi, SubjectsApi, TopicsApi, SubTopicsApi
│   │   ├── components/    # TestTabs, TestStatusChip, TestActions
│   │   ├── hooks/         # useTestCreation, useCreateTest, useSubjects, useTopics
│   │   ├── pages/         # CreateTestPage
│   │   ├── store/         # testCreationSlice, selectors
│   │   ├── types/         # tests.types
│   │   └── constants.ts   # DIFFICULTY_OPTIONS
│   │
│   └── questions/
│       └── pages/         # QuestionsPage

├── hooks/
│   ├── redux.ts           # useAppDispatch, useAppSelector
│   ├── useNotification.ts # notistack wrapper
│   ├── useDebounce.ts
│   └── useDisclosure.ts

├── layouts/
│   ├── AuthLayout
│   └── DashboardLayout

├── theme/
│   ├── theme.ts          # MUI theme
│   ├── colors.ts
│   ├── typography.ts
│   ├── palette.ts
│   ├── shadows.ts
│   └── spacing.ts

├── types/
│   ├── api.ts            # ApiResponse, ApiError, Pagination
│   ├── auth.ts
│   └── common.ts

├── utils/
│   ├── apiError.ts       # API error helper
│   └── storageService.ts # localStorage wrapper

└── main.tsx
```

---

# 5. Feature-Based Architecture

Each feature groups all related files — API, hooks, components, pages, store, and types — in one directory.

```
features/

    auth/
        api/          # AuthApi singleton
        hooks/        # useAuth, useLogin
        pages/        # LoginPage
        store/        # authSlice.ts + selectors
        types/        # auth.types.ts
        schemas/      # login.schema.ts

    dashboard/
        api/          # DashboardApi
        components/   # TestTable, TestTableRow, TestStatusChip, etc.
        hooks/        # useDashboard, useGetTests
        mappers/     # dashboard.mapper
        pages/        # DashboardPage
        store/        # dashboardSlice + selectors
        types/        # dashboard.types, dashboard-api.types

    tests/
        api/          # TestsApi, SubjectsApi, TopicsApi, SubTopicsApi
        components/   # TestTabs, TestStatusChip, TestActions
        hooks/        # useTestCreation, useCreateTest, useSubjects, useTopics
        pages/        # CreateTestPage
        store/       # testCreationSlice + selectors
        types/       # tests.types
        constants.ts  # DIFFICULTY_OPTIONS

    questions/
        pages/        # QuestionsPage
```

**Advantages:**

- Better scalability
- Easier maintenance
- Independent modules
- Reduced coupling

---

# 6. Routing Architecture

```
/

↓

Login

↓

Protected Route

↓

Dashboard

↓

Create Test / Edit Test

↓

Questions (after test creation)

↓

Dashboard (after save/cancel)
```

Routes:

```
/

/dashboard

/tests/new

/tests/:id/edit

/tests/:id/questions
```

Protected routes verify JWT authentication before rendering.

---

# 7. Authentication Flow

```
User Login

↓

POST /auth/login

↓

JWT Token

↓

Store Token (localStorage)

↓

Redux Store

↓

Axios Request Interceptor

↓

Protected APIs
```

If `401 Unauthorized`:

```
Remove Token (localStorage)

↓

Clear Redux Auth State

↓

Navigate to /login
```

---

# 8. State Management

## Redux Toolkit

Redux Toolkit handles **all** async data via `createAsyncThunk`:

```
API Service

↓

createAsyncThunk (in feature hooks)

↓

extraReducers (pending / fulfilled / rejected)

↓

Redux State
```

**Stores:**

- `authSlice` — token, user, loading/error
- `dashboardSlice` — tests list, loading/error
- `testCreationSlice` — form fields, dropdown data (subjects/topics/subtopics), loading states, edit mode

## Why Redux Toolkit for API Data?

All API calls use Redux Toolkit's `createAsyncThunk` pattern:

- Async thunks defined in feature hooks
- Slice `extraReducers` handle pending/fulfilled/rejected lifecycle
- No separate caching library needed — Redux state IS the cache
- Loading, error, and data states all co-located per feature

---

# 9. API Layer

The API layer isolates HTTP requests from UI.

```
Page

↓

Feature Hook (calls thunk)

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

axios.post("/tests", payload)
```

Benefits:

- Easier testing
- Centralized error handling
- Reusable services

---

# 10. Axios Architecture

```
Axios Instance

↓

Base URL

↓

Headers

↓

JWT Token (Request Interceptor)

↓

Backend

↓

Response Interceptor (401 → logout)
```

Responsibilities:

- Base URL from environment
- Authorization Header (Bearer token)
- Timeout (30s)
- 401 auto-logout

---

# 11. Form Architecture

All forms follow:

```
Form Component (JSX)

↓

React Hook Form

↓

Zod Resolver

↓

Validation

↓

createAsyncThunk Mutation

↓

API
```

Benefits:

- Less Re-rendering
- Better Performance
- Strong Validation
- Cleaner Code

---

# 12. Component Architecture

```
Page

↓

Feature Components

↓

Shared Components (AppButton, AppTextFieldSimple, etc.)

↓

Material UI
```

Reusable Components:

```
AppButton

AppTextFieldSimple

AppSelectField

AppMultiSelectField

AppNumberField

AppRadioGroup

AppPasswordField

AppBreadcrumbs

AppSearchField

AppLogo

AppNoResultFound

PageLoader

EmptyState

TestStatusChip

TestActions
```

---

# 13. Data Flow

```
Backend

↓

Axios

↓

API Service

↓

createAsyncThunk

↓

extraReducers (Redux)

↓

Feature Hook (useTestCreation, etc.)

↓

Component

↓

UI
```

Example — Dashboard loads tests:

```
DashboardPage

↓

useDashboard().updateTests()

↓

thunkFetchTests (createAsyncThunk)

↓

DashboardApi.getTests()

↓

GET /tests

↓

Redux: dashboardSlice (pending → fulfilled)

↓

useAppSelector(selectDashboard)

↓

TestTable renders
```

---

# 14. Error Handling

Centralized strategy:

```
Axios Response Error

↓

Interceptor

↓

Toast (notistack)

↓

User Friendly Message
```

Handled Errors:

- Network Failure
- Unauthorized (401 → redirect)
- Validation Errors
- Server Errors
- Timeout

---

# 15. Performance Optimization

Implemented:

- Route Code Splitting (lazy loaded pages)
- React.memo for expensive components
- useMemo / useCallback where necessary
- Debounced Search
- Centralized API Layer
- Optimized Bundle with Vite
- Strict TypeScript

---

# 16. Security

## JWT Authentication

Token stored in localStorage, attached to every request via Axios interceptor.

## Protected Routes

`ProtectedRoute` checks for valid token before rendering.

## Environment Variables

Sensitive values stored in `.env` (not committed).

## Request Interceptor

Automatically attaches:

```
Authorization: Bearer <token>
```

## Response Interceptor

Automatically logs out user on `401 Unauthorized`.

---

# 17. Scalability

The architecture supports future features.

Possible enhancements:

```
Admin Roles

Student Roles

Teacher Roles

Question Bank

Media Upload

Analytics Dashboard

Dark Theme

Internationalization

Unit Testing

E2E Testing

Offline Support

PWA
```

---

# Design Decisions

## Why Feature-Based Architecture?

Compared with grouping by file type, feature-based architecture keeps all files related to a business domain together, making the application easier to scale and maintain.

## Why Redux Toolkit for API Data?

Redux Toolkit with `createAsyncThunk` provides a unified pattern for all async operations. Loading states, error states, and data are all managed in one place per feature, with no additional caching library required.

## Why Axios?

Axios provides centralized configuration, interceptors, automatic authorization header injection, and consistent error handling across all API requests.

## Why React Hook Form + Zod?

This combination provides high-performance forms with minimal re-renders and type-safe validation that integrates naturally with TypeScript.

## Why Notistack?

Notistack is used for toast notifications. It allows displaying stacked snackbars without requiring imperative API calls — driven by Redux or component state.

## Summary

The project architecture emphasizes:

- Modular Design
- Clean Separation of Concerns
- Type Safety
- Feature Isolation
- Maintainability
- Performance
- Scalability
- Reusability
- Enterprise-grade React Development

The overall goal is to produce a codebase that is easy to understand, extend, test, and maintain while following modern frontend engineering best practices.
