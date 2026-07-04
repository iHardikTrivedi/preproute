import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { ApiResponse, SubTopic, Topic } from "../types/tests.types";

class TopicsApi {
  async getBySubject(subjectId: string): Promise<ApiResponse<Topic[]>> {
    const { data } = await api.get<ApiResponse<Topic[]>>(
      ENDPOINTS.TOPICS.BY_SUBJECT(subjectId)
    );
    return data;
  }

  async getMultiTopics(topicIds: string[]): Promise<ApiResponse<SubTopic[]>> {
    const { data } = await api.post<ApiResponse<SubTopic[]>>(
      ENDPOINTS.TOPICS.MULTI_TOPICS,
      { topicIds }
    );
    return data;
  }
}

export default new TopicsApi();
