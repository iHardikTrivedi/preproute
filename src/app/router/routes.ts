export const ROUTES = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  CREATE_TEST: "/tests/create",
  QUESTIONS: "/tests/:testId/questions",
  PREVIEW: "/tests/:testId/preview",
  NOT_FOUND: "*",
} as const;
