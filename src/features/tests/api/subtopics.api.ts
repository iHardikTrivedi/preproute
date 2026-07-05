import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { ApiResponse, SubTopic } from "../types/tests.types";

class SubTopicsApi {
  async getByTopic(topicId: string): Promise<ApiResponse<SubTopic[]>> {
    const { data } = await api.get<ApiResponse<SubTopic[]>>(
      ENDPOINTS.SUB_TOPICS.BY_TOPIC(topicId)
    );
    return data;
  }

  async getByTopics(topicIds: string[]): Promise<ApiResponse<SubTopic[]>> {
    // Fetch subtopics for multiple topics and combine
    const responses = await Promise.all(
      topicIds.map((id) => api.get<ApiResponse<SubTopic[]>>(ENDPOINTS.SUB_TOPICS.BY_TOPIC(id)))
    );
    // Combine all subtopics and remove duplicates by id
    const allSubTopics = responses.flatMap((r) => r.data.data || []);
    const uniqueSubTopics = allSubTopics.filter(
      (subTopic, index, self) => index === self.findIndex((s) => s.id === subTopic.id)
    );
    return { success: true, data: uniqueSubTopics };
  }
}

export default new SubTopicsApi();
