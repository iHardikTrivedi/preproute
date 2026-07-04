import { useCallback, useState } from "react";

import SubjectsApi from "../api/subjects.api";
import type { Subject } from "../types/tests.types";

export const useSubjects = () => {
  const [isPending, setIsPending] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSubjects = useCallback(async () => {
    setIsPending(true);
    setError(null);

    try {
      const response = await SubjectsApi.getAll();
      setSubjects(response.data);
      return response.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch subjects";
      setError(message);
      throw err;
    } finally {
      setIsPending(false);
    }
  }, []);

  return {
    subjects,
    fetchSubjects,
    isPending,
    error,
  };
};
