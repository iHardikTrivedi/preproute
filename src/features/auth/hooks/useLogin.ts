import { useCallback, useState } from "react";

import AuthApi from "../api/auth.api";
import type { LoginRequest } from "../types/auth.types";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);

  const login = useCallback(async (payload: LoginRequest) => {
    setIsPending(true);

    try {
      return await AuthApi.login(payload);
    } finally {
      setIsPending(false);
    }
  }, []);

  return {
    login,
    isPending,
  };
};
