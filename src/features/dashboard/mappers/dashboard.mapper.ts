import type { DashboardApiResponse, TestApiItem } from "../types/dashboard-api.types";

import type { DashboardResponse, TestItem, TestStatus } from "../types/dashboard.types";

const mapTest = (test: TestApiItem): TestItem => ({
  id: test.id,

  name: test.name,
  type: test.type,

  subject: test.subject,

  topics: test.topics,
  subTopics: test.sub_topics,

  questions: test.questions,

  correctMarks: test.correct_marks,
  wrongMarks: test.wrong_marks,
  unattemptMarks: test.unattempt_marks,

  difficulty: test.difficulty,

  totalMarks: test.total_marks,
  totalTime: test.total_time,
  totalQuestions: test.total_questions,

  slot: test.slot,

  hiddenFromModerator: test.hidden_from_moderator,

  createdBy: test.created_by,
  createdAt: test.created_at,

  updatedBy: test.updated_by,
  updatedAt: test.updated_at,

  paragraphQuestion: test.paragraph_question,

  status: mapStatus(test.status),

  scheduledDate: test.scheduled_date,
  expiryDate: test.expiry_date,
});

export const mapDashboardResponse = (response: DashboardApiResponse): DashboardResponse => ({
  success: response.success,
  message: response.message,
  data: response.data.map(mapTest),
});

const mapStatus = (status: TestApiItem["status"] | null): TestStatus => {
  switch (status) {
    case "draft":
    case "live":
    case "unpublished":
      return status;

    default:
      return "draft";
  }
};
