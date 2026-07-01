import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import AuthApi from "../api/auth.api";
import type { ApiErrorResponse, LoginRequest, LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginRequest>({
    mutationFn: async (payload) => {
      const response = await AuthApi.login(payload);
      return response.data;
    },
  });
};
