export type TestApiType = "chapterwise" | "subjectwise";
export type TestApiDifficulty = "easy" | "medium" | "hard";
export type TestApiStatus = "draft" | "live" | "unpublished";

export interface DashboardApiResponse {
  success: boolean;
  message: string;
  data: TestApiItem[];
}

export interface TestApiItem {
  id: string;

  name: string;
  type: TestApiType;

  subject: string;

  topics: string[];
  sub_topics: string[];

  questions: string[];

  correct_marks: number;
  wrong_marks: number;
  unattempt_marks: number;

  difficulty: TestApiDifficulty;

  total_marks: number;
  total_time: number;
  total_questions: number;

  slot: string | null;

  hidden_from_moderator: boolean | null;

  created_by: number;
  created_at: string;

  updated_by: number | null;
  updated_at: string | null;

  paragraph_question: string | null;

  status: TestApiStatus | null;

  scheduled_date: string | null;
  expiry_date: string | null;
}
