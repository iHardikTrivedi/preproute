export interface SelectOption {
  label: string;
  value: string | number;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Status = "ACTIVE" | "INACTIVE";
export type LoadingState = "idle" | "loading" | "success" | "error";
