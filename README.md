# 📝 Preproute Test Management System

A production-ready **Test Management Application** built with **React, TypeScript, and Vite** as part of the **Preproute Frontend Developer Technical Assignment**.

The application enables administrators to create, manage, preview, and publish MCQ-based tests through a clean, responsive interface integrated with REST APIs.

---

# 🚀 Live Demo

🔗 https://your-vercel-url.vercel.app

> *(Update after deployment)*

---

# 📂 GitHub Repository

🔗 [https://github.com/HardikTrivedi/preproute-test-management](https://github.com/iHardikTrivedi/preproute)

---

# 🎥 Walkthrough Video

🔗 https://your-video-link.com

> *(Update after recording the walkthrough)*

---

# 📋 Assignment Overview

This project was developed as part of the **Preproute Frontend Developer Evaluation Round**.

The assignment focuses on:

- Authentication
- CRUD Operations
- REST API Integration
- Responsive UI
- Clean Code Architecture
- TypeScript Best Practices
- Production-ready React Development

---

# ✨ Features

## Authentication

- JWT Login
- Protected Routes
- Persistent Session
- Automatic Logout on Unauthorized Response

## Dashboard

- Display All Tests
- View Test Details
- Edit Test
- Delete Test
- Create New Test

## Test Management

- Create Test
- Update Test
- Save as Draft
- Publish Test

## Question Management

- Add Multiple MCQ Questions
- Edit Questions
- Delete Questions
- Bulk Question Creation

## Preview

- Complete Test Preview
- Question Review
- Publish Test

## User Experience

- Responsive Design
- Form Validation
- Loading Indicators
- Empty States
- Error Handling
- Success Notifications

---

# 🛠 Tech Stack

| Category | Technology |
|------------|----------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| UI Library | Material UI (MUI) |
| Routing | React Router DOM |
| Global State | Redux Toolkit |
| Server State | TanStack Query |
| API Client | Axios |
| Forms | React Hook Form |
| Validation | Zod |
| Notifications | Sonner |
| Date Handling | Day.js |
| Code Quality | ESLint + Prettier |

---

# 📁 Folder Structure

```text
src
│
├── api
│   ├── axios.ts
│   ├── endpoints.ts
│   └── interceptors.ts
│
├── app
│   ├── providers
│   ├── router
│   └── store
│
├── assets
│
├── components
│   ├── common
│   ├── dialogs
│   ├── forms
│   ├── layout
│   ├── loaders
│   ├── table
│   └── ui
│
├── constants
│
├── features
│   ├── auth
│   ├── dashboard
│   ├── tests
│   ├── questions
│   └── preview
│
├── hooks
├── layouts
├── routes
├── styles
├── theme
├── types
├── utils
│
├── App.tsx
└── main.tsx
```

---

# 📄 Application Flow

```text
Login

↓

Dashboard

↓

Create / Edit Test

↓

Add Questions

↓

Preview

↓

Publish

↓

Dashboard
```

---

# 🔐 Authentication Flow

```text
Login

↓

POST /auth/login

↓

Receive JWT Token

↓

Store Token

↓

Axios Interceptor

↓

Protected APIs

↓

Dashboard
```

---

# 🌐 Backend API

Base URL

```
https://admin-moderator-backend-staging.up.railway.app/api
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|----------|-----------|
| POST | /auth/login |

---

## Subjects

| Method | Endpoint |
|----------|------------|
| GET | /subjects |

---

## Topics

| Method | Endpoint |
|----------|------------|
| GET | /topics/subject/:subjectId |

---

## Sub Topics

| Method | Endpoint |
|----------|------------|
| GET | /sub-topics/topic/:topicId |
| POST | /sub-topics/multi-topics |

---

## Tests

| Method | Endpoint |
|----------|------------|
| GET | /tests |
| GET | /tests/:id |
| POST | /tests |
| PUT | /tests/:id |

---

## Questions

| Method | Endpoint |
|----------|------------|
| POST | /questions/bulk |
| POST | /questions/fetchBulk |

---

# 🏗 Architecture

The project follows a **Feature-Based Modular Architecture** with clear separation of concerns.

```text
Pages

↓

Components

↓

Custom Hooks

↓

React Query

↓

API Services

↓

Axios

↓

Backend APIs
```

Benefits:

- Modular
- Scalable
- Maintainable
- Reusable
- Testable

---

# 📦 State Management

## Redux Toolkit

Used for:

- Authentication
- Logged-in User
- Access Token
- Global UI State

---

## TanStack Query

Used for:

- Fetching Data
- API Caching
- CRUD Operations
- Background Refetching
- Cache Invalidation

---

# 📝 Form Handling

Every form is implemented using:

- React Hook Form
- Zod Validation
- Reusable Form Components
- Type-safe Validation
- Error Messages
- Loading State

---

# 🎨 Reusable Components

- AppLayout
- ProtectedRoute
- PageHeader
- PrimaryButton
- SecondaryButton
- InputField
- SelectField
- MultiSelect
- DataTable
- Loader
- EmptyState
- ConfirmDialog
- StatusChip

---

# ⚙ Environment Variables

Create a `.env` file.

```env
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

# 🚀 Installation

Clone Repository

```bash
git clone [https://github.com/HardikTrivedi/preproute-test-management.git](https://github.com/iHardikTrivedi/preproute.git)
```

Navigate

```bash
cd preproute
```

Install Packages

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

---

# 📦 Production Build

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Start Development Server |
| npm run build | Production Build |
| npm run preview | Preview Production Build |
| npm run lint | Run ESLint |

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🔒 Best Practices Implemented

- Feature-Based Folder Structure
- TypeScript Strict Mode
- Reusable Components
- React Hooks
- Axios Interceptors
- React Query
- Redux Toolkit
- React Hook Form
- Zod Validation
- Responsive Design
- API Layer Separation
- Environment Variables
- ESLint
- Prettier
- Clean Code Principles

---

# 💡 Technical Decisions

## Why React + TypeScript?

Provides strong typing, improved maintainability, better IDE support, and reduces runtime errors.

---

## Why Vite?

- Extremely fast development server
- Optimized production builds
- Excellent TypeScript support

---

## Why Redux Toolkit?

Used only for global application state such as authentication and user session management to keep client state predictable and maintainable.

---

## Why TanStack Query?

Chosen for server-state management because it offers:

- Automatic caching
- Background refetching
- Query invalidation
- Simplified API state handling

---

## Why Axios?

- Centralized API configuration
- Request/Response interceptors
- Cleaner error handling
- Authorization header management

---

## Why React Hook Form?

Provides high-performance forms with minimal re-renders and seamless integration with validation libraries.

---

## Why Zod?

Type-safe schema validation with excellent TypeScript integration and cleaner validation logic.

---

## Why Material UI?

Material UI offers accessible, responsive, and production-ready components while enabling consistent UI development.

---

# 🚀 Future Improvements

- Unit Testing with Vitest
- React Testing Library
- End-to-End Testing with Playwright
- Dark Mode
- Internationalization (i18n)
- Pagination
- Advanced Search & Filters
- Drag & Drop Question Ordering
- Rich Text Editor for Questions
- Image Upload Support

---

# 📸 Screenshots

> Add screenshots after implementation.

- Login
- Dashboard
- Create Test
- Add Questions
- Preview & Publish

---

# 🙏 Acknowledgements

Special thanks to the **Preproute Team** for providing this technical assignment and evaluation opportunity.

This project was developed following modern React development best practices and enterprise-grade architecture principles.

---

# 👨‍💻 Author

**Hardik Trivedi**

Senior Mobile & Frontend Engineer

- LinkedIn: https://www.linkedin.com/in/ihardiktrivedi/
- Portfolio: https://ihardiktrivedi.com
- GitHub: https://github.com/HardikTrivedi

---

# 📄 License

This project was created exclusively for the **Preproute Frontend Developer Technical Assessment** and is intended solely for evaluation purposes.
