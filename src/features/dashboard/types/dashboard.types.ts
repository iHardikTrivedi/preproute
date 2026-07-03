export type TestType = "chapterwise" | "subjectwise";
export type TestDifficulty = "easy" | "medium" | "hard";
export type TestStatus = "draft" | "live" | "unpublished";

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: TestItem[];
}

export interface TestItem {
  id: string;

  name: string;
  type: TestType;

  subject: string;

  topics: string[];
  subTopics: string[];

  questions: string[];

  correctMarks: number;
  wrongMarks: number;
  unattemptMarks: number;

  difficulty: TestDifficulty;

  totalMarks: number;
  totalTime: number;
  totalQuestions: number;

  slot: string | null;

  hiddenFromModerator: boolean | null;

  createdBy: number;
  createdAt: string;

  updatedBy: number | null;
  updatedAt: string | null;

  paragraphQuestion: string | null;

  status: TestStatus | null;

  scheduledDate: string | null;
  expiryDate: string | null;
}

export interface DashboardState {
  isLoading: boolean;
  tests: TestItem[];
  error: string | null;
}
