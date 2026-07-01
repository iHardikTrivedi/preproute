export interface ApiValidationError {
  type: string;
  msg: string;
  path: string;
  location: string;
}

export interface ApiErrorResponse {
  status: string;
  message: string;
  errors?: ApiValidationError[];
}
