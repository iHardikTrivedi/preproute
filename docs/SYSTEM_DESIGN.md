# 🏗️ SYSTEM_DESIGN.md

# Preproute Test Management System

## System Design Document

---

# Table of Contents

1. Overview
2. System Goals
3. High-Level Architecture
4. Frontend Architecture
5. Backend Integration
6. Authentication Flow
7. Test Creation Flow
8. Component Design
9. State Management
10. API Layer
11. Data Flow
12. Error Handling
13. Security
14. Performance
15. Scalability
16. Deployment
17. Future Enhancements

---

# 1. Overview

The **Preproute Test Management System** is a single-page application (SPA) built using **React 19 + TypeScript + Vite**.

Administrators can create and manage MCQ-based tests through a secure, responsive interface. The application communicates with a REST backend via Axios, and all async data flows through **Redux Toolkit** `createAsyncThunk` actions.

---

# 2. System Goals

- Clean Architecture
- High Maintainability
- Reusable Components
- Type Safety
- Responsive UI
- Efficient API Management
- Scalable Feature Modules

---

# 3. High-Level Architecture

```text
                        User

                          │

                          ▼

                React SPA (Browser)

                          │

       ┌──────────────────┴──────────────────┐

       ▼                                     ▼

React Router                           Material UI

       │

       ▼

 Feature Modules

       │

┌──────┴─────────┐

▼                ▼

Redux       Redux Toolkit

         (createAsyncThunk)

                  │

                  ▼

             API Services

                  │

                  ▼

                Axios

                  │

                  ▼

      Preproute REST Backend
```

---

# 4. Frontend Architecture

```text
Pages

↓

Feature Components

↓

Reusable Components

↓

Hooks (with createAsyncThunk)

↓

API Services

↓

Axios
```

Each layer has a single responsibility.

---

# 5. Backend Integration

The frontend communicates exclusively through REST APIs.

```
React

↓

Axios

↓

REST API

↓

JSON Response
```

No business logic is implemented inside UI components.

---

# 6. Authentication Flow

```text
Login Page

↓

POST /auth/login

↓

JWT Token

↓

localStorage (token + user)

↓

Redux (authSlice)

↓

Axios Interceptor

↓

Protected Routes
```

401 responses trigger:

```text
Clear localStorage

↓

Dispatch clearAuth

↓

Navigate /login
```

---

# 7. Test Creation Flow

```text
Dashboard

↓

Navigate to Create Test

↓

Fill Form (subject, topics, subtopics, marks, difficulty)

↓

handleCreateTest() — thunkCreateTest

↓

API: POST /tests → receives test ID

↓

Navigate to Questions Page (testId in state)

↓

Add / Edit Questions

↓

Dashboard
```

---

# 8. Component Design

## Reusable Components

```
AppLayout / DashboardLayout

Sidebar

Header

AppButton

AppTextFieldSimple

AppSelectField

AppMultiSelectField

AppNumberField

AppRadioGroup

AppBreadcrumbs

AppSearchField

Loader / PageLoader

EmptyState

DataTable / TestTable

TestStatusChip

TestActions
```

## Business Components

```
LoginPage

DashboardPage

CreateTestPage

QuestionsPage
```

---

# 9. State Management

## Redux Toolkit

All async data is managed through Redux Toolkit `createAsyncThunk`:

```
API Service

↓

createAsyncThunk (feature hooks)

↓

extraReducers (pending / fulfilled / rejected)

↓

Redux State
```

**Stores:**

| Slice | Purpose |
|-------|---------|
| `authSlice` | JWT token, current user, auth loading/error |
| `dashboardSlice` | Test list, dashboard loading/error |
| `testCreationSlice` | Form fields, subjects/topics/subtopics, loading states, edit mode |

No separate caching library — Redux state is the single source of truth.

---

# 10. API Layer

```text
Component

↓

Feature Hook (calls thunk)

↓

API Service (class method)

↓

Axios

↓

Backend
```

Advantages:

- Testable
- Centralized
- Reusable
- Type-safe

---

# 11. Data Flow

```text
Backend

↓

Axios

↓

createAsyncThunk (in feature hook)

↓

extraReducers → Redux State

↓

useAppSelector (in component)

↓

UI
```

---

# 12. Error Handling

Errors are centralized through Axios interceptors.

Handled Scenarios:

- Unauthorized (401 → redirect)
- Network Failure
- Timeout
- Validation Error
- Internal Server Error

Feedback is provided using Notistack toast notifications.

---

# 13. Security

Implemented:

- JWT Authentication (token in localStorage, Bearer header via interceptor)
- Protected Routes
- Environment Variables (`.env` not committed)
- Authorization Header (auto-injected)
- Input Validation (React Hook Form + Zod)

---

# 14. Performance

Optimizations:

- Route Lazy Loading
- Feature-Based Modules
- Redux State (no duplicate fetching)
- Route Code Splitting via Vite
- Debounced Search
- Strict TypeScript

---

# 15. Scalability

The architecture supports:

- Multiple User Roles (future)
- Analytics (future)
- Pagination
- Advanced Filters
- Image Upload
- Question Bank
- Rich Text Editor
- Unit Testing
- E2E Testing

---

# 16. Deployment

Deployment Pipeline:

```text
Developer

↓

Git

↓

Vercel / Railway

↓

Production
```

Environment variables are configured on the hosting platform (Vercel).

---

# 17. Future Enhancements

- Role-Based Access Control
- Audit Logs
- Dark Mode
- Internationalization (i18n)
- Real-Time Notifications
- AI-Based Question Suggestions
- PWA Support

---

# Conclusion

The architecture follows modern frontend engineering principles with clear separation of concerns, scalable feature modules, reusable components, and centralized API management. Built with React 19, TypeScript, Redux Toolkit, and Material UI — designed to be maintainable, extensible, and production-ready.
