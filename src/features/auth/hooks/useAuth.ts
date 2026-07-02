import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import storageService from "@/utils/storageService";

import { ROUTES } from "@/app/router/routes";
import { selectAuth } from "@/app/store/auth.selectors";
import { clearAuth, setAuth } from "../store/authSlice";
import type { LoginResponse } from "../types/auth.types";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = useAppSelector(selectAuth);

  const login = useCallback(
    (response: LoginResponse) => {
      storageService.setToken(response.data.token);
      storageService.setUser(response.data.user);

      dispatch(
        setAuth({
          token: response.data.token,
          user: response.data.user,
        }),
      );

      navigate(ROUTES.DASHBOARD, {
        replace: true,
      });
    },
    [dispatch, navigate],
  );

  const logout = useCallback(() => {
    storageService.clear();

    dispatch(clearAuth());

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  }, [dispatch, navigate]);

  return {
    ...auth,
    login,
    logout,
  };
};
