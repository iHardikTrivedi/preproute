import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import type { ApiErrorResponse } from "@/api/types";

import AuthApi from "../api/auth.api";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginRequest>({
    mutationFn: AuthApi.login,
  });
};
