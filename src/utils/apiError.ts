import { AxiosError } from "axios";

import type { ApiErrorResponse } from "@/api/types";

export const getApiErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
  // Network error
  if (!error.response) {
    return "Unable to connect to the server. Please try again.";
  }

  const { data } = error.response;

  // Validation errors
  if (data.errors?.length) {
    return data.errors.map((error) => error.msg).join("\n");
  }

  // Backend message
  if (data.message) {
    return data.message;
  }

  // HTTP status fallback
  switch (error.response.status) {
    case 400:
      return "Bad request.";

    case 401:
      return "Unauthorized.";

    case 403:
      return "You don't have permission to perform this action.";

    case 404:
      return "Requested resource not found.";

    case 500:
      return "Internal server error.";

    default:
      return "Something went wrong.";
  }
};
