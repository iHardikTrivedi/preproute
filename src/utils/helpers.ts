export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const isEmpty = (value: unknown) => {
  if (value === null || value === undefined) return true;

  if (typeof value === "string") return value.trim() === "";

  if (Array.isArray(value)) return value.length === 0;

  return false;
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
  }).format(date);
