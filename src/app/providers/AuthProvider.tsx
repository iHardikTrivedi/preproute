import { useEffect, type PropsWithChildren } from "react";

import { useAppDispatch } from "@/hooks/redux";
import storageService from "@/utils/storageService";

import { finishInitialization, setAuth } from "@/features/auth/store/authSlice";

import type { User } from "@/features/auth/types/auth.types";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = storageService.getToken();
    const user = storageService.getUser<User>();

    if (token && user) {
      dispatch(
        setAuth({
          token,
          user,
        }),
      );
    }

    dispatch(finishInitialization());
  }, [dispatch]);

  return children;
};

export default AuthProvider;
