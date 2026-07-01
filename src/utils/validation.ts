import { PASSWORD, USERID } from "@/config/constants";

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isRequired = (value: string) => value.trim().length > 0;
export const isStrongPassword = (password: string) =>
  password.length >= PASSWORD.MIN_LENGTH && password.length <= PASSWORD.MAX_LENGTH;
export const isUserIDValid = (userId: string) => userId.length <= USERID.MAX_LENGTH;
