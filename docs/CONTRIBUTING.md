# 🤝 CONTRIBUTING.md

# Contributing Guide

Welcome to the **Preproute Test Management System** project.

This document describes the development workflow, coding standards, project structure, Git conventions, and best practices followed throughout the project.

Although this project was developed as part of the **Preproute Frontend Developer Technical Assessment**, the project structure follows enterprise-level development standards to ensure maintainability and scalability.

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

# Project Setup

## Clone Repository

```bash
git clone https://github.com/HardikTrivedi/preproute-test-management.git
```

Navigate to project

```bash
cd preproute-test-management
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

---

# Environment Variables

Create

```
.env
```

Example

```env
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

# Folder Structure

```
src/

api/

app/

assets/

components/

constants/

features/

hooks/

layouts/

routes/

store/

styles/

theme/

types/

utils/
```

Each folder has a dedicated responsibility.

---

# Development Workflow

```
Feature Request

↓

Create Branch

↓

Implement Feature

↓

Test

↓

Lint

↓

Build

↓

Commit

↓

Push

↓

Pull Request
```

---

# Coding Standards

The project follows the following coding principles:

- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Separation of Concerns
- Feature-Based Architecture
- Reusable Components
- Strong Type Safety

---

# Formatting

Use

- ESLint
- Prettier

Before every commit

Run

```bash
npm run lint
```

Ensure

```bash
npm run build
```

passes successfully.

---

# Naming Conventions

## Components

Use

```
PascalCase
```

Example

```
LoginPage

DashboardPage

QuestionCard
```

---

## Hooks

Use

```
camelCase

with use prefix
```

Example

```
useLogin()

useTests()

useQuestions()
```

---

## Interfaces

Use

```
PascalCase
```

Example

```
User

Test

Question
```

---

## Types

Suffix

```
Type
```

Example

```
UserType

QuestionType
```

---

## Enums

Suffix

```
Enum
```

Example

```
DifficultyEnum

StatusEnum
```

---

## Files

Examples

```
login.api.ts

tests.api.ts

axios.ts

authSlice.ts

useTests.ts
```

---

# Git Workflow

Main Branch

```
main
```

Feature Branch

```
feature/login

feature/dashboard

feature/create-test

feature/questions

feature/publish-test
```

Bug Fix

```
fix/login-error

fix/dashboard-table
```

Documentation

```
docs/readme

docs/api
```

---

# Commit Convention

Follow Conventional Commits.

Examples

```
feat: add login page

feat: implement dashboard

feat: integrate tests API

feat: create question module

feat: publish test workflow

fix: handle unauthorized response

fix: improve form validation

refactor: simplify API service

style: update responsive layout

docs: update README

chore: update dependencies
```

---

# Component Guidelines

Each component should have a single responsibility.

Preferred structure

```
Component

↓

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

Example

```
PrimaryButton

InputField

Loader

PageHeader

ConfirmDialog

SearchBar

StatusChip
```

Avoid creating components with excessive responsibilities.

---

# Custom Hooks

Business logic should live inside hooks.

Example

```
useLogin()

↓

Login API

↓

Mutation

↓

Navigate
```

Benefits

- Reusability
- Cleaner Components
- Easier Testing

---

# API Guidelines

Never call Axios directly from a page or component.

Correct Flow

```
Component

↓

Hook

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

axios.get()
```

---

# React Query Guidelines

Queries

```
Subjects

Topics

Tests

Questions
```

Mutations

```
Create Test

Update Test

Publish Test

Bulk Questions
```

Always invalidate affected queries after successful mutations.

---

# Redux Guidelines

Redux Toolkit should only store

```
Authentication

Logged User

Access Token

Global UI
```

Do **not** store API data inside Redux.

Use React Query for server state.

---

# TypeScript Guidelines

Strict mode is enabled.

Avoid

```ts
any
```

Prefer

```ts
interface

type

enum
```

Use explicit return types where appropriate.

Example

```ts
const getTests = async (): Promise<Test[]> => {
  // implementation
};
```

---

# Form Guidelines

All forms use

- React Hook Form
- Zod

Validation should be schema-based.

Do not manually validate forms inside components.

---

# Styling Guidelines

Use Material UI components wherever possible.

Avoid

- Inline styles
- Magic numbers
- Hardcoded colors

Centralize

- Colors
- Typography
- Spacing
- Breakpoints

inside the theme.

---

# Error Handling

Use centralized Axios interceptors.

Handle

- Network Error
- Unauthorized
- Timeout
- Validation Errors
- Internal Server Error

Display meaningful toast messages to users.

---

# Performance Guidelines

Follow these optimizations:

- Lazy-loaded routes
- Feature-based architecture
- Code splitting
- React Query caching
- Memoize only when necessary
- Reusable components
- Debounced search
- Efficient rendering

---

# Security Guidelines

- Never commit `.env`
- Never hardcode secrets
- Use HTTPS endpoints
- Validate all form inputs
- Handle unauthorized requests
- Store only the JWT token required for authentication

---

# Pull Request Checklist

Before submitting changes, verify:

- Code builds successfully (`npm run build`)
- ESLint passes (`npm run lint`)
- No TypeScript errors
- UI matches the design
- Responsive layout verified
- API integration tested
- Error handling implemented
- Loading states implemented
- Empty states implemented
- No unused imports or variables
- Documentation updated (if required)

---

# Future Contributors

When adding new features:

- Follow the existing folder structure.
- Keep features isolated within the `features/` directory.
- Create reusable components where possible.
- Add TypeScript types for all new data models.
- Reuse the centralized Axios instance.
- Use React Query for server state.
- Update documentation when introducing new modules or APIs.

---

# Code Review Checklist

Reviewers should verify:

- Readability
- Maintainability
- Naming consistency
- Type safety
- Performance
- Accessibility
- Responsive behavior
- API abstraction
- Error handling
- Reusability

---

# Project Philosophy

The project is designed around the following engineering principles:

- Clean Architecture
- Modular Design
- Feature Isolation
- Reusability
- Maintainability
- Scalability
- Type Safety
- Performance
- Developer Experience

The goal is to keep the codebase easy to understand, easy to extend, and production-ready while following modern React and TypeScript best practices.
