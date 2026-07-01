# 📝 Preproute Test Management System

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/Material_UI-MUI-007FFF?logo=mui" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux" />
  <img src="https://img.shields.io/badge/TanStack_Query-v5-FF4154" />
  <img src="https://img.shields.io/badge/License-Assessment-blue" />
</p>

---

## 📖 Overview

**Preproute Test Management System** is a modern, production-ready web application developed as part of the **Preproute Frontend Developer Technical Assignment**.

The application enables administrators to create, manage, preview, and publish MCQ-based tests through a responsive and scalable interface while following modern React development practices.

The application is built using **React + TypeScript + Vite** with a feature-based architecture, reusable components, centralized API management, and enterprise-grade coding standards.

---

# 🚀 Live Demo

**Application**

https://your-vercel-url.vercel.app

---

# 🎥 Walkthrough Video

https://your-video-url.com

---

# 💻 GitHub Repository

https://github.com/HardikTrivedi/preproute

---

# 📋 Assignment Overview

This application was developed for the **Preproute Frontend Developer Evaluation Round**.

The assignment evaluates:

- Authentication
- CRUD Operations
- REST API Integration
- Form Validation
- Responsive UI
- Code Quality
- Project Structure
- TypeScript Usage
- Best Practices

---

# ✨ Features

## Authentication

- JWT Authentication
- Protected Routes
- Session Persistence
- Automatic Logout
- Axios Authorization Interceptor

---

## Dashboard

- Display all Tests
- Create New Test
- Edit Test
- Delete Test
- Search Tests
- Responsive Table

---

## Test Management

- Create Test
- Update Test
- Save as Draft
- Publish Test
- Subject Selection
- Topic Selection
- Sub Topic Selection
- Difficulty Selection
- Marking Scheme

---

## Question Management

- Bulk Question Creation
- MCQ Options
- Correct Answer Selection
- Edit Question
- Delete Question
- Question Explanation
- Difficulty
- Media URL Support

---

## Preview

- Complete Test Preview
- Review Questions
- Edit before Publishing
- Publish Test

---

## User Experience

- Loading Indicators
- Error Handling
- Empty States
- Responsive Layout
- Toast Notifications
- Form Validation

---

# 🛠 Tech Stack

| Category | Technology |
|------------|----------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router DOM |
| UI | Material UI (MUI) |
| Forms | React Hook Form |
| Validation | Zod |
| Global State | Redux Toolkit |
| Server State | TanStack Query |
| API | Axios |
| Notifications | Sonner |
| Date Library | Day.js |
| Linting | ESLint |
| Formatting | Prettier |

---

# 📂 Project Structure

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
│
├── layouts
│
├── routes
│
├── styles
│
├── theme
│
├── types
│
├── utils
│
├── App.tsx
│
└── main.tsx
```

---

# 🏛 System Architecture

```text
                     User

                       │

                       ▼

               React Application

                       │

     ┌─────────────────┴─────────────────┐

     ▼                                   ▼

React Router                        Material UI

     │

     ▼

Feature Modules

     │

┌────┴──────────┐

▼               ▼

Redux      TanStack Query

│               │

▼               ▼

Authentication  API Layer

        │

        ▼

Axios Client

        │

        ▼

Backend REST APIs
```

---

# 📄 Application Flow

```text
Login

↓

Dashboard

↓

Create Test

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

JWT Token

↓

Local Storage

↓

Axios Interceptor

↓

Protected Routes

↓

Dashboard
```

---

# 🌐 API Base URL

```
https://admin-moderator-backend-staging.up.railway.app/api
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /auth/login |

---

## Subjects

| Method | Endpoint |
|---------|----------|
| GET | /subjects |

---

## Topics

| Method | Endpoint |
|---------|----------|
| GET | /topics/subject/:subjectId |

---

## Sub Topics

| Method | Endpoint |
|---------|----------|
| GET | /sub-topics/topic/:topicId |
| POST | /sub-topics/multi-topics |

---

## Tests

| Method | Endpoint |
|---------|----------|
| GET | /tests |
| GET | /tests/:id |
| POST | /tests |
| PUT | /tests/:id |

---

## Questions

| Method | Endpoint |
|---------|----------|
| POST | /questions/bulk |
| POST | /questions/fetchBulk |

---

# 📦 State Management

## Redux Toolkit

Used for

- Authentication
- Logged In User
- JWT Token
- Global UI State

---

## TanStack Query

Used for

- API Calls
- Data Fetching
- CRUD Operations
- Caching
- Background Refetching
- Query Invalidation

---

# 📝 Form Validation

All forms use

- React Hook Form
- Zod
- Type-safe Validation
- Reusable Form Components
- Error Messages
- Loading State

---

# 🎨 Reusable Components

- Primary Button
- Secondary Button
- Input Field
- Select Field
- Multi Select
- Data Table
- Search Bar
- Loader
- Empty State
- Confirmation Dialog
- Status Chip
- Page Header

---

# ⚡ Performance Optimizations

- Feature Based Architecture
- Route Lazy Loading
- Code Splitting
- React Query Caching
- Query Invalidation
- Centralized API Layer
- Reusable Components
- Strict TypeScript
- Optimized Production Build
- Memoization where required

---

# ♿ Accessibility

The application follows accessibility best practices.

- Semantic HTML
- Proper Labels
- Keyboard Navigation
- Accessible Dialogs
- Responsive Typography
- Focus Management
- Color Contrast

---

# 🛡 Error Handling

The application includes centralized error handling.

- Axios Response Interceptors
- Unauthorized Handling
- Network Errors
- Validation Errors
- Toast Notifications
- Graceful Fallback UI

---

# ⚙ Environment Variables

Create a `.env` file.

```env
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/HardikTrivedi/preproute.git
```

---

## Navigate

```bash
cd preproute
```

---

## Install Packages

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Development Server |
| npm run build | Production Build |
| npm run preview | Preview Production Build |
| npm run lint | ESLint |

---

# 📱 Responsive Support

The application is optimized for

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🏗 Design Decisions

### Why React?

- Component Driven Development
- Large Ecosystem
- Excellent Performance

### Why TypeScript?

- Type Safety
- Better Maintainability
- Better IntelliSense

### Why Vite?

- Lightning Fast Development
- Optimized Build
- Excellent DX

### Why Redux Toolkit?

Used only for Authentication and Global UI.

### Why TanStack Query?

Chosen for

- Server State
- Caching
- Automatic Refetching
- Mutation Handling

### Why Axios?

- Interceptors
- Centralized Configuration
- Better Error Handling

### Why React Hook Form?

- High Performance
- Less Re-rendering
- Easy Validation

### Why Zod?

- Type-safe Validation
- Excellent TypeScript Integration

### Why Material UI?

- Accessible Components
- Responsive Design
- Production Ready

---

# 🚀 Future Improvements

- Unit Testing (Vitest)
- React Testing Library
- Playwright
- Dark Theme
- Internationalization (i18n)
- Pagination
- Drag & Drop Questions
- Rich Text Editor
- Image Upload
- Analytics Dashboard

---

# 📸 Screenshots

> Add screenshots after completing the application.

- Login
- Dashboard
- Create Test
- Add Questions
- Preview
- Publish

---

# 📄 Documentation

The repository also includes:

- ✅ README.md
- ✅ ARCHITECTURE.md
- ✅ API.md
- ✅ CONTRIBUTING.md
- ✅ CHANGELOG.md
- ✅ .env.example

---

# 👨‍💻 Author

## Hardik Trivedi

**Senior Mobile & Frontend Engineer**

Portfolio

https://ihardiktrivedi.com

LinkedIn

https://www.linkedin.com/in/ihardiktrivedi/

GitHub

https://github.com/HardikTrivedi

---

# 🙏 Acknowledgements

Special thanks to the **Preproute Team** for providing this technical assignment.

This project follows enterprise-grade React development practices with a focus on scalability, maintainability, performance, and clean architecture.

---

# 📄 License

This repository was created solely for the **Preproute Frontend Developer Technical Assessment** and is intended for evaluation purposes only.
