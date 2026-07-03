export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },

  DASHBOARD: {
    TESTS: "/tests",
  },

  QUESTIONS: "/questions",

  PREVIEW: "/preview",
} as const;
