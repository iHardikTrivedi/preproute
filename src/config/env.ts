export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "PrepRoute",

  APP_ENV: import.meta.env.VITE_APP_ENV || "development",

  API_URL: import.meta.env.VITE_API_URL || "/api",

  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
} as const;
