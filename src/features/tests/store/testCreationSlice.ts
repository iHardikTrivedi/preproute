import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Subject, SubTopic, Test, Topic } from "../types/tests.types";

export interface TestCreationState {
  // Dropdown data
  subjects: Subject[];
  topics: Topic[];
  subTopics: SubTopic[];

  // Selected values
  selectedSubjectId: string;
  selectedTopicId: string;
  selectedSubTopicId: string;

  // Form fields
  name: string;
  type: string;
  difficulty: string;
  totalTime: string;
  totalQuestions: string;
  totalMarks: string;
  correctMarks: string;
  wrongMarks: string;
  unattemptMarks: string;

  // Loading states
  isLoading: boolean;
  isCreating: boolean;
  error: string | null;

  // Created test
  createdTest: Test | null;
}

const initialState: TestCreationState = {
  subjects: [],
  topics: [],
  subTopics: [],
  selectedSubjectId: "",
  selectedTopicId: "",
  selectedSubTopicId: "",
  name: "",
  type: "chapterwise",
  difficulty: "easy",
  totalTime: "",
  totalQuestions: "",
  totalMarks: "",
  correctMarks: "5",
  wrongMarks: "-1",
  unattemptMarks: "0",
  isLoading: false,
  isCreating: false,
  error: null,
  createdTest: null,
};

const testCreationSlice = createSlice({
  name: "testCreation",
  initialState,
  reducers: {
    // Subject actions
    setSubjects(state, action: PayloadAction<Subject[]>) {
      state.subjects = action.payload;
    },

    setSelectedSubjectId(state, action: PayloadAction<string>) {
      state.selectedSubjectId = action.payload;
      // Clear dependent selections
      state.selectedTopicId = "";
      state.selectedSubTopicId = "";
      state.topics = [];
      state.subTopics = [];
    },

    // Topic actions
    setTopics(state, action: PayloadAction<Topic[]>) {
      state.topics = action.payload;
    },

    setSelectedTopicId(state, action: PayloadAction<string>) {
      state.selectedTopicId = action.payload;
      state.selectedSubTopicId = "";
      state.subTopics = [];
    },

    // Sub-topic actions
    setSubTopics(state, action: PayloadAction<SubTopic[]>) {
      state.subTopics = action.payload;
    },

    setSelectedSubTopicId(state, action: PayloadAction<string>) {
      state.selectedSubTopicId = action.payload;
    },

    // Form field actions
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },

    setDifficulty(state, action: PayloadAction<string>) {
      state.difficulty = action.payload;
    },

    setTotalTime(state, action: PayloadAction<string>) {
      state.totalTime = action.payload;
    },

    setTotalQuestions(state, action: PayloadAction<string>) {
      state.totalQuestions = action.payload;
    },

    setTotalMarks(state, action: PayloadAction<string>) {
      state.totalMarks = action.payload;
    },

    setCorrectMarks(state, action: PayloadAction<string>) {
      state.correctMarks = action.payload;
    },

    setWrongMarks(state, action: PayloadAction<string>) {
      state.wrongMarks = action.payload;
    },

    setUnattemptMarks(state, action: PayloadAction<string>) {
      state.unattemptMarks = action.payload;
    },

    // Loading states
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setCreating(state, action: PayloadAction<boolean>) {
      state.isCreating = action.payload;
    },

    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
      state.isCreating = false;
    },

    // Created test
    setCreatedTest(state, action: PayloadAction<Test>) {
      state.createdTest = action.payload;
      state.isCreating = false;
      state.error = null;
    },

    // Reset
    resetForm(state) {
      state.selectedSubjectId = "";
      state.selectedTopicId = "";
      state.selectedSubTopicId = "";
      state.name = "";
      state.type = "chapterwise";
      state.difficulty = "easy";
      state.totalTime = "";
      state.totalQuestions = "";
      state.totalMarks = "";
      state.correctMarks = "5";
      state.wrongMarks = "-1";
      state.unattemptMarks = "0";
      state.topics = [];
      state.subTopics = [];
      state.createdTest = null;
      state.error = null;
    },

    clearTestCreation(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setSubjects,
  setSelectedSubjectId,
  setTopics,
  setSelectedTopicId,
  setSubTopics,
  setSelectedSubTopicId,
  setName,
  setType,
  setDifficulty,
  setTotalTime,
  setTotalQuestions,
  setTotalMarks,
  setCorrectMarks,
  setWrongMarks,
  setUnattemptMarks,
  setLoading,
  setCreating,
  setError,
  setCreatedTest,
  resetForm,
  clearTestCreation,
} = testCreationSlice.actions;

export default testCreationSlice.reducer;
