export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },

  DASHBOARD: "/dashboard",

  QUESTIONS: "/questions",

  TESTS: "/tests",

  PREVIEW: "/preview",
} as const;
