import type { TestDifficulty, TestType } from "./types/tests.types";

export const TEST_TAB_OPTIONS: { label: string; value: TestType }[] = [
  { label: "Chapterwise", value: "chapterwise" },
  { label: "PYQ", value: "pyq" },
  { label: "Mock Test", value: "mock_test" },
];

export const DIFFICULTY_OPTIONS: { label: string; value: TestDifficulty }[] = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Difficult", value: "hard" },
];

export const TEST_CREATION_TEXT = {
  TITLE: "Create Test",
  BREADCRUMB_DASHBOARD: "Dashboard",
  BREADCRUMB_CREATE_TEST: "Create Test",
  MARKING_SCHEME: "Marking Scheme:",
} as const;
