export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },

  DASHBOARD: {
    TESTS: "/tests",
  },

  SUBJECTS: "/subjects",

  TOPICS: {
    BY_SUBJECT: (subjectId: string) => `/topics/subject/${subjectId}`,
    MULTI_TOPICS: "/sub-topics/multi-topics",
  },

  SUB_TOPICS: {
    BY_TOPIC: (topicId: string) => `/sub-topics/topic/${topicId}`,
  },

  QUESTIONS: {
    BULK: "/questions/bulk",
    FETCH_BULK: "/questions/fetchBulk",
  },

  TESTS: {
    BASE: "/tests",
    BY_ID: (id: string) => `/tests/${id}`,
  },

  PREVIEW: "/preview",
} as const;
