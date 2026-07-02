export const ROUTES = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  CREATE_TEST: "/tests/create",
  TEST_TRACKING: "/tests/tracking",
  QUESTIONS: "/tests/:testId/questions",
  PREVIEW: "/tests/:testId/preview",
  NOT_FOUND: "*",
} as const;
