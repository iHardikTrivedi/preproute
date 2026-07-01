export const VALIDATION_MESSAGES = {
  REQUIRED_USER_ID: "User ID is required",
  REQUIRED_PASSWORD: "Password is required",

  USER_ID_MAX: (max: number) => `User ID must be less than ${max} characters`,
  PASSWORD_MIN: (min: number) => `Password must be at least ${min} characters`,
  PASSWORD_MAX: (max: number) => `Password must be less than ${max} characters`,
} as const;
