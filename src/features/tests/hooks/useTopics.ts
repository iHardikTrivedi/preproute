import { useCallback, useState } from "react";

import TopicsApi from "../api/topics.api";
import SubTopicsApi from "../api/subtopics.api";
import type { SubTopic, Topic } from "../types/tests.types";

export const useTopics = () => {
  const [isPending, setIsPending] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTopicsBySubject = useCallback(async (subjectId: string) => {
    setIsPending(true);
    setError(null);

    try {
      const response = await TopicsApi.getBySubject(subjectId);
      setTopics(response.data);
      return response.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch topics";
      setError(message);
      throw err;
    } finally {
      setIsPending(false);
    }
  }, []);

  const fetchSubTopicsByTopic = useCallback(async (topicId: string) => {
    setIsPending(true);
    setError(null);

    try {
      const response = await SubTopicsApi.getByTopic(topicId);
      setSubTopics(response.data);
      return response.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch sub-topics";
      setError(message);
      throw err;
    } finally {
      setIsPending(false);
    }
  }, []);

  const fetchSubTopicsByTopics = useCallback(async (topicIds: string[]) => {
    setIsPending(true);
    setError(null);

    try {
      const response = await TopicsApi.getMultiTopics(topicIds);
      setSubTopics(response.data);
      return response.data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch sub-topics";
      setError(message);
      throw err;
    } finally {
      setIsPending(false);
    }
  }, []);

  const clearTopics = useCallback(() => {
    setTopics([]);
    setSubTopics([]);
  }, []);

  const clearSubTopics = useCallback(() => {
    setSubTopics([]);
  }, []);

  return {
    topics,
    subTopics,
    fetchTopicsBySubject,
    fetchSubTopicsByTopic,
    fetchSubTopicsByTopics,
    clearTopics,
    clearSubTopics,
    isPending,
    error,
  };
};
