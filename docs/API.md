# 🌐 API.md

# Preproute Test Management System

## API Documentation

This document describes the API integration used in the **Preproute Test Management System**.

The application communicates with the backend through a centralized Axios client with JWT authentication and follows a service-based architecture for maintainability and scalability.

---

# Table of Contents

1. Base URL
2. Authentication
3. API Architecture
4. Request Flow
5. Response Structure
6. Error Handling
7. Authentication APIs
8. Subject APIs
9. Topic APIs
10. Test APIs
11. Question APIs
12. Axios Configuration
13. React Query Integration
14. HTTP Status Codes
15. Best Practices

---

# Base URL

```
https://admin-moderator-backend-staging.up.railway.app/api
```

Environment Variable

```env
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

# Authentication

All APIs except Login require a JWT token.

Example

```http
Authorization: Bearer <JWT_TOKEN>
```

The Authorization header is automatically added using an Axios Request Interceptor.

---

# API Architecture

```
React Component

↓

Custom Hook

↓

React Query

↓

API Service

↓

Axios Instance

↓

Backend API
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

↓

Backend
```

---

# Standard API Response

## Success Response

```json
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# Authentication APIs

## Login

### Endpoint

```
POST /auth/login
```

### Request

```json
{
  "userId": "vedant-admin",
  "password": "vedant123"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "token": "JWT_TOKEN",
    "user": {}
  }
}
```

### React Query

```ts
useMutation()
```

---

# Subjects API

## Get All Subjects

### Endpoint

```
GET /subjects
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Mathematics"
    }
  ]
}
```

### React Query

```ts
useQuery()
```

---

# Topics API

## Get Topics by Subject

### Endpoint

```
GET /topics/subject/:subjectId
```

### Example

```
GET /topics/subject/123
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Algebra"
    }
  ]
}
```

---

# Sub Topics API

## Get Sub Topics

### Endpoint

```
GET /sub-topics/topic/:topicId
```

---

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Linear Equations"
    }
  ]
}
```

---

## Get Sub Topics for Multiple Topics

### Endpoint

```
POST /sub-topics/multi-topics
```

### Request

```json
{
  "topicIds": [
    "uuid-1",
    "uuid-2"
  ]
}
```

---

# Tests API

## Get All Tests

### Endpoint

```
GET /tests
```

### React Query

```ts
useQuery()
```

---

## Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Mathematics Test",
      "subject": "Mathematics",
      "status": "draft"
    }
  ]
}
```

---

## Get Test By Id

### Endpoint

```
GET /tests/:id
```

### Example

```
GET /tests/123
```

---

## Create Test

### Endpoint

```
POST /tests
```

### Request

```json
{
  "name": "Sample Test",
  "type": "chapterwise",
  "subject": "subject-id",
  "topics": [
    "topic-1",
    "topic-2"
  ],
  "sub_topics": [
    "sub-topic-1"
  ],
  "correct_marks": 4,
  "wrong_marks": -1,
  "unattempt_marks": 0,
  "difficulty": "medium",
  "total_time": 60,
  "total_marks": 100,
  "total_questions": 25,
  "status": null
}
```

### React Query

```ts
useMutation()
```

---

## Update Test

### Endpoint

```
PUT /tests/:id
```

### Request

```json
{
  "name": "Updated Test",
  "questions": [
    "question-id-1",
    "question-id-2"
  ],
  "total_questions": 20,
  "total_marks": 80
}
```

---

## Publish Test

### Endpoint

```
PUT /tests/:id
```

### Request

```json
{
  "status": "live"
}
```

---

# Questions API

## Bulk Create Questions

### Endpoint

```
POST /questions/bulk
```

### Request

```json
{
  "questions": [
    {
      "type": "mcq",
      "question": "What is React?",
      "option1": "Library",
      "option2": "Framework",
      "option3": "Language",
      "option4": "Database",
      "correct_option": "option1",
      "difficulty": "easy",
      "test_id": "uuid"
    }
  ]
}
```

### Response

```json
{
  "success": true,
  "message": "Successfully created questions"
}
```

---

## Fetch Questions

### Endpoint

```
POST /questions/fetchBulk
```

### Request

```json
{
  "question_ids": [
    "uuid-1",
    "uuid-2"
  ]
}
```

---

# Axios Configuration

```
src/api/axios.ts
```

Responsibilities

- Base URL
- JSON Headers
- Timeout
- Authorization Header
- Request Interceptor
- Response Interceptor

---

# Request Interceptor

Automatically adds

```http
Authorization: Bearer JWT_TOKEN
```

---

# Response Interceptor

Handles

```
401 Unauthorized

↓

Clear Local Storage

↓

Logout User

↓

Navigate Login
```

---

# React Query Strategy

## Queries

| Resource | Hook |
|------------|----------------|
| Subjects | useSubjects |
| Topics | useTopics |
| Sub Topics | useSubTopics |
| Tests | useTests |
| Test Details | useTest |

---

## Mutations

| Resource | Hook |
|------------|----------------|
| Login | useLogin |
| Create Test | useCreateTest |
| Update Test | useUpdateTest |
| Publish Test | usePublishTest |
| Create Questions | useCreateQuestions |

---

# Query Keys

```
subjects

topics

subTopics

tests

test

questions
```

Example

```ts
queryKey: ["tests"]
```

---

# Cache Invalidation

After successful mutations

```
Create Test

↓

Invalidate

↓

tests
```

Example

```ts
queryClient.invalidateQueries({
    queryKey: ["tests"]
});
```

---

# Error Handling

Centralized through Axios.

Handled Errors

- Network Error
- Validation Error
- Unauthorized
- Server Error
- Timeout

Toast messages are displayed for user-friendly feedback.

---

# HTTP Status Codes

| Status | Meaning |
|---------|----------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# Best Practices

The API layer follows the following guidelines:

- Centralized Axios instance
- No direct Axios calls inside components
- React Query for server state
- Strong TypeScript models
- Reusable API service functions
- Automatic authentication headers
- Centralized error handling
- Query invalidation after mutations
- Environment-based API URLs
- Separation of API logic from UI components

---

# API Folder Structure

```
src/

api/

    axios.ts

    endpoints.ts

    interceptors.ts

features/

    auth/

        api/

            auth.api.ts

    tests/

        api/

            tests.api.ts

            subjects.api.ts

            topics.api.ts

    questions/

        api/

            questions.api.ts
```

---

# Summary

The API layer is designed to be:

- Modular
- Reusable
- Type-safe
- Scalable
- Maintainable
- Easy to test
- Production-ready

By separating API communication from UI components and leveraging Axios with TanStack Query, the application remains clean, predictable, and easy to extend as new backend features are introduced.
