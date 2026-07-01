export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isRequired = (value: string) => value.trim().length > 0;
export const isStrongPassword = (password: string) => password.length >= 8;
