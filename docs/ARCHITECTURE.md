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
10. React Query Strategy
11. Component Architecture
12. Form Architecture
13. Data Flow
14. Error Handling
15. Performance Optimization
16. Security
17. Scalability
18. Future Improvements

---

# 1. Architecture Principles

The application follows the following principles.

## Separation of Concerns

Each feature is responsible only for its own functionality.

Example

```
Authentication

↓

Login Page

↓

Login Hook

↓

Auth API

↓

Axios
```

---

## Reusability

Reusable UI Components

- Button
- Input
- Select
- Loader
- Dialog
- Table
- Empty State

Business logic is extracted into custom hooks.

---

## Type Safety

The project uses TypeScript Strict Mode.

No usage of

```
any
```

Interfaces and Types are defined inside

```
features/*/types
```

---

## Single Responsibility Principle

Each module performs one responsibility only.

Example

```
LoginForm

↓

Collect User Input

-------------------------

useLogin()

↓

Call Login API

-------------------------

Auth API

↓

HTTP Request
```

---

# 2. Technology Stack

| Layer | Technology |
|---------|-------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| UI | Material UI |
| Forms | React Hook Form |
| Validation | Zod |
| Global State | Redux Toolkit |
| Server State | TanStack Query |
| HTTP | Axios |
| Notifications | Sonner |

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

Redux       React Query

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
│
├── app/
│
├── assets/
│
├── components/
│
├── constants/
│
├── features/
│
│   ├── auth/
│   │
│   ├── dashboard/
│   │
│   ├── tests/
│   │
│   ├── questions/
│   │
│   └── preview/
│
├── hooks/
│
├── layouts/
│
├── routes/
│
├── store/
│
├── styles/
│
├── theme/
│
├── types/
│
└── utils/
```

---

# 5. Feature-Based Architecture

Instead of grouping files by type, the project groups them by business feature.

```
features/

    auth/

        api/

        hooks/

        pages/

        schema/

        types/

    tests/

        api/

        hooks/

        pages/

        components/

        schema/

        types/

    questions/

    preview/
```

Advantages

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

Create Test

↓

Questions

↓

Preview
```

Routes

```
/

/dashboard

/tests/new

/tests/:id/edit

/tests/:id/questions

/tests/:id/preview
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

Store Token

↓

Redux Store

↓

Local Storage

↓

Axios Request Interceptor

↓

Protected APIs
```

If

```
401 Unauthorized
```

↓

```
Remove Token

↓

Logout User

↓

Navigate Login
```

---

# 8. State Management

## Redux Toolkit

Stores

```
Authentication

User

Token

Application UI
```

Redux is intentionally **not** used for API data.

---

## React Query

Responsible for

```
Subjects

Topics

Tests

Questions

Sub Topics
```

Benefits

- Automatic Caching
- Refetching
- Cache Invalidation
- Loading State
- Error State

---

# 9. API Layer

The API layer isolates HTTP requests from UI.

```
Page

↓

Custom Hook

↓

API Service

↓

Axios

↓

Backend
```

Example

```
Dashboard

↓

useTests()

↓

tests.api.ts

↓

axios.get("/tests")
```

Benefits

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

JWT Token

↓

Request Interceptor

↓

Backend

↓

Response Interceptor

↓

Handle Errors
```

Responsibilities

- Base URL
- Authorization Header
- Timeout
- Response Errors
- Logout on 401

---

# 11. React Query Architecture

```
Component

↓

useQuery

↓

API Service

↓

Axios

↓

Backend

↓

Cache

↓

Component Update
```

Mutations

```
Create

↓

Invalidate Query

↓

Automatic Refresh
```

---

# 12. Form Architecture

All forms follow

```
Form Component

↓

React Hook Form

↓

Zod Resolver

↓

Validation

↓

Mutation

↓

API
```

Benefits

- Less Re-rendering
- Better Performance
- Strong Validation
- Cleaner Code

---

# 13. Component Architecture

```
Page

↓

Feature Components

↓

Shared Components

↓

Material UI
```

Reusable Components

```
Button

Input

Select

Loader

Dialog

Chip

Search

Table

Card
```

---

# 14. Data Flow

```
Backend

↓

Axios

↓

API Layer

↓

React Query

↓

Feature Hook

↓

Component

↓

UI
```

Example

```
Dashboard

↓

useTests()

↓

tests.api.ts

↓

GET /tests

↓

React Query Cache

↓

Dashboard Table
```

---

# 15. Error Handling

Centralized strategy.

```
Axios

↓

Response Error

↓

Interceptor

↓

Toast

↓

User Friendly Message
```

Handled Errors

- Network Failure
- Unauthorized
- Validation Errors
- Server Errors
- Timeout

---

# 16. Performance Optimization

Implemented

- Lazy Loaded Routes
- Route Code Splitting
- React Query Cache
- Query Invalidation
- Optimized Bundle with Vite
- Strict TypeScript
- Reusable Components
- Memoization where beneficial
- Debounced Search
- Centralized API Layer

---

# 17. Security

Implemented

## Authentication

JWT Authentication

---

## Authorization

Protected Routes

---

## Environment Variables

Sensitive values stored in

```
.env
```

---

## Request Interceptor

Automatically attaches

```
Authorization: Bearer <token>
```

---

## Response Interceptor

Automatically logs out user on

```
401 Unauthorized
```

---

# 18. Scalability

The architecture supports future features.

Possible enhancements

```
Admin Roles

Student Roles

Teacher Roles

Question Categories

Media Upload

Analytics Dashboard

Pagination

Search Filters

Dark Theme

Internationalization

Unit Testing

E2E Testing

Offline Support

PWA

Micro Frontend Migration
```

---

# Design Decisions

## Why Feature-Based Architecture?

Compared with grouping by file type, feature-based architecture keeps all files related to a business domain together, making the application easier to scale and maintain.

---

## Why React Query Instead of Redux for API Data?

Server state changes frequently and benefits from caching, automatic refetching, and query invalidation. React Query provides these capabilities out of the box, reducing boilerplate and improving performance.

---

## Why Redux Toolkit?

Redux Toolkit is reserved for global client-side state such as authentication and UI preferences, keeping responsibilities clearly separated from server state.

---

## Why Axios?

Axios provides centralized configuration, interceptors, automatic authorization header injection, and consistent error handling across all API requests.

---

## Why React Hook Form + Zod?

This combination provides high-performance forms with minimal re-renders and type-safe validation that integrates naturally with TypeScript.

---

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
