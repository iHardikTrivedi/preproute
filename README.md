# 📝 Preproute Test Management System

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/Material_UI-MUI-007FFF?logo=mui" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux" />
  <img src="https://img.shields.io/badge/TanStack_Query-v5-FF4154" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990" />
  <img src="https://img.shields.io/badge/Zod-Type_Safe-3068B7" />
  <img src="https://img.shields.io/badge/Axios-5A29E4" />
  <img src="https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?logo=eslint" />
  <img src="https://img.shields.io/badge/Prettier-Formatted-F7B93E?logo=prettier" />
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen" />
  <img src="https://img.shields.io/badge/Status-Completed-success" />
</p>

<p align="center">

**A production-ready Test Management System built with React + TypeScript + Vite**

Developed as part of the **Preproute Frontend Developer Technical Assignment** following enterprise-grade architecture and modern frontend development best practices.

</p>

---

# 🚀 Live Demo

> https://preproute-ten.vercel.app/

---

# 💻 GitHub Repository

> https://github.com/HardikTrivedi/preproute

---

# 📖 Overview

The **Preproute Test Management System** is a modern web application that enables administrators to create, manage, preview, and publish MCQ-based tests through an intuitive and responsive interface.

The project was developed using **React**, **TypeScript**, and **Vite** while following scalable architecture, reusable components, and clean coding principles commonly used in enterprise frontend applications.

---

# 🎯 Assignment Objective

The assignment required building a complete **Test Management Application** with the following workflow:

```text
Login

↓

Dashboard

↓

Create / Edit Test

↓

Add Questions

↓

Preview Test

↓

Publish Test
```

The implementation focuses on:

- JWT Authentication
- CRUD Operations
- REST API Integration
- Form Validation
- Responsive UI
- Code Quality
- Type Safety
- Scalable Architecture

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Protected Routes
- Session Persistence
- Automatic Logout
- Axios Authorization Interceptor

---

## 📊 Dashboard

- View All Tests
- Create New Test
- Edit Test
- Delete Test
- Search Tests
- Responsive Table Layout

---

## 📝 Test Management

- Create Test
- Update Test
- Save as Draft
- Publish Test
- Subject Selection
- Topic Selection
- Sub-topic Selection
- Difficulty Selection
- Marking Scheme
- Total Marks
- Total Time

---

## ❓ Question Management

- Bulk Question Creation
- Multiple Choice Questions
- Four Options
- Correct Answer Selection
- Explanation
- Difficulty
- Topic Mapping
- Media URL Support
- Edit Questions
- Delete Questions

---

## 👀 Preview

- Preview Test
- Review Questions
- Edit Before Publishing
- Publish Test

---

## 💎 User Experience

- Responsive Design
- Material UI Components
- Form Validation
- Toast Notifications
- Loading States
- Empty States
- Error Handling
- Confirmation Dialogs

---

# 🛠 Technology Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend Framework |
| TypeScript | Static Type Checking |
| Vite | Build Tool |
| React Router DOM | Routing |
| Material UI | UI Components |

---

## State Management

| Technology | Purpose |
|------------|----------|
| Redux Toolkit | Global Client State |
| TanStack Query | Server State Management |

---

## Forms & Validation

| Technology | Purpose |
|------------|----------|
| React Hook Form | Form State Management |
| Zod | Schema Validation |

---

## API & Utilities

| Technology | Purpose |
|------------|----------|
| Axios | HTTP Client |
| Day.js | Date Formatting |
| Sonner | Toast Notifications |

---

## Code Quality

| Technology | Purpose |
|------------|----------|
| ESLint | Code Quality |
| Prettier | Code Formatting |

---

# ⭐ Why This Project?

This project demonstrates more than just CRUD functionality.

It showcases:

- Enterprise-grade React Architecture
- Feature-Based Folder Structure
- Clean API Layer
- Reusable Components
- TypeScript Best Practices
- Modern State Management
- Responsive Design
- Scalable Codebase
- Production-Ready Documentation

The goal was to build an application that reflects real-world frontend engineering practices rather than only fulfilling functional requirements.

---

# 📂 Project Structure

The project follows a **Feature-Based Architecture**, where each business feature is isolated into its own module. This improves maintainability, scalability, and code organization.

```text
src
│
├── api
├── app
├── assets
├── components
├── constants
├── features
│   ├── auth
│   ├── dashboard
│   ├── tests
│   ├── questions
│   └── preview
├── hooks
├── layouts
├── routes
├── styles
├── theme
├── types
├── utils
├── App.tsx
└── main.tsx
```

For a complete breakdown of the folder structure and architecture, refer to **[ARCHITECTURE.md](./ARCHITECTURE.md)**.

---

# 📚 Project Documentation

Comprehensive documentation is available in the following files.

| 📄 Document | 📖 Description |
|-------------|----------------|
| 📖 **[README.md](./README.md)** | Project overview, setup instructions, features, and usage |
| 🏛️ **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Application architecture, folder structure, routing, state management, and design patterns |
| 🏗️ **[SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md)** | High-level system design, application flow, component interaction, security, and scalability |
| 🌐 **[API.md](./API.md)** | API endpoints, request/response examples, authentication, Axios configuration, and React Query integration |
| 🤝 **[CONTRIBUTING.md](./CONTRIBUTING.md)** | Development workflow, coding standards, Git workflow, naming conventions, and contribution guide |
| 📘 **[DECISIONS.md](./DECISIONS.md)** | Architectural decisions, technology choices, trade-offs, and design rationale |
| 🌱 **[ENV.md](./ENV.md)** | Environment configuration, deployment variables, and security recommendations |

---

# 📖 Documentation Overview

```text
README.md
│
├── ARCHITECTURE.md
│     ├── Project Structure
│     ├── Folder Organization
│     ├── Authentication
│     ├── Routing
│     ├── State Management
│     └── API Layer
│
├── SYSTEM_DESIGN.md
│     ├── High-Level Design
│     ├── Component Architecture
│     ├── Data Flow
│     ├── Performance
│     └── Scalability
│
├── API.md
│     ├── Authentication APIs
│     ├── Subject APIs
│     ├── Test APIs
│     ├── Question APIs
│     ├── Axios
│     └── React Query
│
├── CONTRIBUTING.md
│     ├── Setup
│     ├── Git Workflow
│     ├── Coding Standards
│     ├── Naming Conventions
│     └── Best Practices
│
├── DECISIONS.md
│     ├── Technology Selection
│     ├── Trade-offs
│     ├── Architecture Decisions
│     └── Design Principles
│
└── ENV.md
      ├── Environment Variables
      ├── Deployment
      ├── Security
      └── Configuration
```

---

# 🏗️ Architecture Overview

The application follows a layered architecture that separates presentation, business logic, API communication, and state management.

```text
Browser

↓

React Application

↓

React Router

↓

Feature Modules

↓

Custom Hooks

↓

React Query / Redux Toolkit

↓

API Services

↓

Axios

↓

REST Backend
```

For detailed architecture diagrams and explanations, see **[ARCHITECTURE.md](./ARCHITECTURE.md)** and **[SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md)**.

---

# 🔄 Application Flow

The application follows a simple and intuitive workflow.

```text
Login

↓

Dashboard

↓

Create Test

↓

Add Questions

↓

Preview Test

↓

Publish Test

↓

Dashboard
```

---

# 🔐 Authentication

Authentication is based on JWT tokens.

Flow:

```text
Login

↓

JWT Token

↓

Local Storage

↓

Axios Interceptor

↓

Protected Routes
```

A complete authentication flow diagram is available in **[SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md)**.

---

# 🌐 API Integration

The frontend communicates with the backend through REST APIs.

**Base URL**

```text
https://admin-moderator-backend-staging.up.railway.app/api
```

The API layer uses:

- Axios
- Request Interceptors
- Response Interceptors
- TanStack Query
- Centralized Error Handling

See **[API.md](./API.md)** for the complete API reference.

---

# 📦 State Management

The project separates client state and server state.

### Redux Toolkit

Used for:

- Authentication
- User Information
- JWT Token
- Global UI State

### TanStack Query

Used for:

- Subjects
- Topics
- Tests
- Questions
- API Caching
- Automatic Refetching

Complete implementation details are available in **[ARCHITECTURE.md](./ARCHITECTURE.md)**.

---

# 🧩 Design Principles

The project follows modern frontend engineering principles.

- Separation of Concerns
- Feature-Based Architecture
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Reusable Components
- Type Safety
- Clean API Layer
- Scalable Folder Structure
- Maintainable Code

Detailed design decisions and trade-offs are documented in **[DECISIONS.md](./DECISIONS.md)**.

---

# 🚀 Getting Started

Follow the steps below to run the project locally.

## Prerequisites

Ensure you have the following installed:

| Software | Version |
|----------|---------|
| Node.js | >= 20.x |
| npm | >= 10.x |
| Git | Latest |

Verify your installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation

### Clone the Repository

```bash
git clone https://github.com/HardikTrivedi/preproute.git
```

### Navigate to Project

```bash
cd preproute
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Copy the example environment file.

```bash
cp .env.example .env
```

Update the values inside `.env` as required.

For complete environment configuration, refer to:

➡️ **[ENV.md](./ENV.md)**

---

# ▶️ Running the Application

Start the development server.

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# 📦 Production Build

Create a production build.

```bash
npm run build
```

Preview the production build locally.

```bash
npm run preview
```

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

# 🌍 Deployment

The application is deployment-ready and can be hosted on platforms such as:

- ▲ Vercel (Recommended)
- Netlify
- GitHub Pages
- Firebase Hosting

For Vercel:

**Build Command**

```bash
npm run build
```

**Output Directory**

```
dist
```

For deployment configuration and environment setup, see:

➡️ **[ENV.md](./ENV.md)**

---

# 📱 Browser Support

The application is tested on modern browsers.

- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari

---

# 📊 Project Status

| Module | Status |
|----------|--------|
| Authentication | ✅ Complete |
| Dashboard | ✅ Complete |
| Test Management | ✅ Complete |
| Question Management | ✅ Complete |
| Preview & Publish | ✅ Complete |
| API Integration | ✅ Complete |
| Responsive Design | ✅ Complete |
| Documentation | ✅ Complete |

---

# 📸 Screenshots

The following screenshots will be added after deployment.

- 🔐 Login
- 📊 Dashboard
- 📝 Create Test
- ❓ Add Questions
- 👀 Preview Test
- 🚀 Publish Test

---

# 🚀 Future Enhancements

The architecture is designed to support future improvements, including:

- Role-Based Access Control (RBAC)
- Dark Mode
- Internationalization (i18n)
- Rich Text Editor
- Question Bank
- Bulk Import / Export
- Analytics Dashboard
- Pagination & Advanced Filters
- Unit Testing (Vitest)
- React Testing Library
- Playwright E2E Tests
- Progressive Web App (PWA)

---

# 👨‍💻 Author

## Hardik Trivedi

**Senior Mobile & Frontend Engineer**

- 🌐 Portfolio: https://ihardiktrivedi.com
- 💼 LinkedIn: https://www.linkedin.com/in/ihardiktrivedi/
- 🐙 GitHub: https://github.com/HardikTrivedi

---

# 🙏 Acknowledgements

Special thanks to the **Preproute Team** for providing this technical assignment and the opportunity to demonstrate modern frontend engineering practices.

This project was built using:

- React
- TypeScript
- Vite
- Material UI
- Redux Toolkit
- TanStack Query
- React Hook Form
- Zod
- Axios

---

# 📄 License

This project was developed exclusively for the **Preproute Frontend Developer Technical Assignment**.

It is intended for technical evaluation purposes only and demonstrates modern React development practices, scalable architecture, clean code principles, and production-ready documentation.

---

<div align="center">

### ⭐ Thank you for reviewing this project!

If you found this project useful, consider giving it a ⭐ on GitHub.

Built with ❤️ using **React + TypeScript + Vite**

</div>
