import { useCallback, useState } from "react";

import DashboardApi from "../api/dashboard.api";

export const useGetTests = () => {
  const [isPending, setIsPending] = useState(false);

  const getTests = useCallback(async () => {
    setIsPending(true);

    try {
      return await DashboardApi.getTests();
    } finally {
      setIsPending(false);
    }
  }, []);

  return {
    getTests,
    isPending,
  };
};
