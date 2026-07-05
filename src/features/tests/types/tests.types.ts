export type TestType = "chapterwise" | "pyq" | "mock_test" | "subjectwise";
export type TestDifficulty = "easy" | "medium" | "hard";
export type TestStatus = "draft" | "live" | "unpublished";

export interface Subject {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
  subject_id: string;
}

export interface SubTopic {
  id: string;
  name: string;
  topic_id: string;
}

export interface CreateTestRequest {
  name: string;
  type: TestType;
  subject: string;
  topics: string[];
  sub_topics: string[];
  correct_marks: number;
  wrong_marks: number;
  unattempt_marks: number;
  difficulty: TestDifficulty;
  total_time: number;
  total_marks: number;
  total_questions: number;
  status: "draft" | "unpublished" | "live" | "scheduled" | "expired";
}

export interface UpdateTestRequest {
  name?: string;
  questions?: string[];
  total_questions?: number;
  total_marks?: number;
  status?: TestStatus;
}

export interface QuestionRequest {
  type: "mcq";
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: "option1" | "option2" | "option3" | "option4";
  explanation?: string;
  difficulty?: TestDifficulty;
  test_id: string;
}

export interface BulkQuestionsRequest {
  questions: QuestionRequest[];
}

export interface FetchBulkQuestionsRequest {
  question_ids: string[];
}

export interface Test {
  id: string;
  name: string;
  type: TestType;
  subject: string;
  topics: string[];
  sub_topics: string[];
  questions: string[];
  correct_marks: number;
  wrong_marks: number;
  unattempt_marks: number;
  difficulty: TestDifficulty;
  total_marks: number;
  total_time: number;
  total_questions: number;
  status: TestStatus | null;
  created_at: string;
  updated_at: string | null;
}

export interface ApiResponse<T> {
  success?: boolean;
  status?: string;
  data: T;
  message?: string;
  errors?: Array<{ type: string; msg: string; path: string; location: string }>;
}
