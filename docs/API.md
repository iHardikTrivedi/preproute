# 🌐 API.md

# Preproute Test Management System

## API Documentation

This document describes the API integration used in the **Preproute Test Management System**.

The application communicates with the backend through a centralized Axios client with JWT authentication and follows a service-based architecture using Redux Toolkit `createAsyncThunk` for all async operations.

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
10. SubTopic APIs
11. Test APIs
12. Question APIs
13. Axios Configuration
14. HTTP Status Codes
15. Best Practices

---

# 1. Base URL

```
https://admin-moderator-backend-staging.up.railway.app/api
```

Environment Variable:

```env
VITE_API_URL=https://admin-moderator-backend-staging.up.railway.app/api
```

---

# 2. Authentication

All APIs except Login require a JWT token.

Example:

```http
Authorization: Bearer <JWT_TOKEN>
```

The Authorization header is automatically added using an Axios Request Interceptor defined in `src/api/interceptors.ts`.

---

# 3. API Architecture

```
Component

↓

Feature Hook (calls createAsyncThunk)

↓

API Service (Axios call)

↓

Axios Instance

↓

Backend API
```

Example:

```
DashboardPage

↓

useDashboard().fetchTests()

↓

thunkFetchTests (createAsyncThunk)

↓

DashboardApi.getTests()

↓

axios.get("/tests")

↓

Backend
```

---

# 4. Standard API Response

## Success Response

```json
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

## Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# 5. Authentication APIs

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
  "status": "success",
  "message": "Login successful",
  "data": {
    "token": "JWT_TOKEN",
    "user": {
      "id": "uuid",
      "userId": "vedant-admin",
      "name": "Admin",
      "role": "admin"
    }
  }
}
```

### Redux Thunk

```ts
thunkCreateTest // via useAuth().login()
```

---

# 6. Subjects API

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

### Redux Thunk

```ts
thunkFetchSubjects
```

---

# 7. Topics API

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
      "name": "Algebra",
      "subject_id": "uuid"
    }
  ]
}
```

### Redux Thunk

```ts
thunkFetchTopicsBySubject
```

---

# 8. Sub Topics API

## Get Sub Topics by Topic

### Endpoint

```
GET /sub-topics/topic/:topicId
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Linear Equations",
      "topic_id": "uuid"
    }
  ]
}
```

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

### Redux Thunk

```ts
thunkFetchSubTopicsByTopic
```

---

# 9. Tests API

## Get All Tests

### Endpoint

```
GET /tests
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Mathematics Test",
      "type": "chapterwise",
      "subject": "Mathematics",
      "topics": ["uuid-1"],
      "sub_topics": ["uuid-2"],
      "questions": [],
      "correct_marks": 5,
      "wrong_marks": -1,
      "unattempt_marks": 0,
      "difficulty": "easy",
      "total_marks": 100,
      "total_time": 60,
      "total_questions": 20,
      "status": "draft",
      "created_by": 1,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### Redux Thunk

```ts
thunkFetchTests // via dashboardSlice
```

---

## Get Test By Id

### Endpoint

```
GET /tests/:id
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
  "subject": "subject-uuid",
  "topics": ["topic-uuid"],
  "sub_topics": ["sub-topic-uuid"],
  "correct_marks": 5,
  "wrong_marks": -1,
  "unattempt_marks": 0,
  "difficulty": "medium",
  "total_time": 60,
  "total_marks": 100,
  "total_questions": 25,
  "status": "draft"
}
```

### Redux Thunk

```ts
thunkCreateTest
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
  "questions": ["question-id-1"],
  "total_questions": 20,
  "total_marks": 80,
  "status": "unpublished"
}
```

---

# 10. Questions API

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

# 11. Axios Configuration

```
src/api/axios.ts
```

Responsibilities:

- Base URL from `VITE_API_URL`
- JSON Headers
- Timeout (30s)
- Request Interceptor (adds Bearer token)
- Response Interceptor (handles 401 → logout)

```ts
// src/api/axios.ts
const api = axios.create({
  baseURL: ENV.API_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});
```

---

# 12. Request Interceptor

Defined in `src/api/interceptors.ts`. Automatically adds:

```http
Authorization: Bearer JWT_TOKEN
```

Also logs requests in development mode.

---

# 13. Response Interceptor

Handles `401 Unauthorized`:

```
401 Response

↓

Clear Token (localStorage)

↓

Dispatch clearAuth (Redux)

↓

Navigate /login
```

---

# 14. State Management Pattern

All API calls follow the Redux Toolkit `createAsyncThunk` pattern:

```
Feature Hook (thunk definition)

↓

createAsyncThunk (async thunk)

↓

API Service (Axios call)

↓

extraReducers (pending / fulfilled / rejected)

↓

Redux State
```

Example — fetching subjects:

```ts
// features/tests/hooks/useCreateTest.ts
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

// features/tests/store/testCreationSlice.ts
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

---

# 15. HTTP Status Codes

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# 16. Error Handling

Centralized through Axios interceptors.

Handled Errors:

- Network Error
- Validation Error
- Unauthorized (401 → auto logout)
- Server Error
- Timeout

Toast messages are displayed via Notistack.

---

# 17. Best Practices

The API layer follows these guidelines:

- Centralized Axios instance
- No direct Axios calls inside components
- Redux Toolkit `createAsyncThunk` for all async operations
- Strong TypeScript models
- Reusable API service functions
- Automatic authentication headers
- Centralized error handling via interceptors
- Environment-based API URLs
- Separation of API logic from UI components

---

# 18. API Folder Structure

```
src/
api/
    axios.ts           # Axios instance
    endpoints.ts      # ENDPOINTS constants
    interceptors.ts    # Auth & error interceptors
    logger.ts         # Dev logging
    types.ts          # ApiResponse, ApiError

features/
    auth/
        api/
            auth.api.ts
    dashboard/
        api/
            dashboard.api.ts
    tests/
        api/
            tests.api.ts
            subjects.api.ts
            topics.api.ts
            subtopics.api.ts
    questions/
        (no API files yet)
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

All API communication flows through Axios interceptors with automatic JWT handling, and async operations use Redux Toolkit's `createAsyncThunk` pattern for consistent loading and error state management across the application.
