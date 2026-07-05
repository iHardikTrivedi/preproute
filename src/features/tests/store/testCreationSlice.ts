import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Subject, SubTopic, Test, Topic } from "../types/tests.types";

export interface TestCreationState {
  // Dropdown data
  subjects: Subject[];
  topics: Topic[];
  subTopics: SubTopic[];

  // Selected values
  selectedSubjectId: string;
  selectedTopicIds: string[];
  selectedSubTopicIds: string[];

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
  isLoadingTopics: boolean;
  isLoadingSubTopics: boolean;
  isCreating: boolean;
  error: string | null;

  // Dropdown states
  shouldOpenSubTopicsDropdown: boolean;

  // Created test
  createdTest: Test | null;

  // Edit mode
  editingTestId: string | null;
}

const initialState: TestCreationState = {
  subjects: [],
  topics: [],
  subTopics: [],
  selectedSubjectId: "",
  selectedTopicIds: [],
  selectedSubTopicIds: [],
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
  isLoadingTopics: false,
  isLoadingSubTopics: false,
  isCreating: false,
  error: null,
  createdTest: null,
  shouldOpenSubTopicsDropdown: false,
  editingTestId: null,
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
      state.selectedTopicIds = [];
      state.selectedSubTopicIds = [];
      state.topics = [];
      state.subTopics = [];
    },

    // Topic actions
    setTopics(state, action: PayloadAction<Topic[]>) {
      state.topics = action.payload;
    },

    setSelectedTopicIds(state, action: PayloadAction<string[]>) {
      state.selectedTopicIds = action.payload;
      state.selectedSubTopicIds = [];
      state.subTopics = [];
    },

    // Sub-topic actions
    setSubTopics(state, action: PayloadAction<SubTopic[]>) {
      state.subTopics = action.payload;
    },

    setSelectedSubTopicIds(state, action: PayloadAction<string[]>) {
      state.selectedSubTopicIds = action.payload;
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

    setLoadingTopics(state, action: PayloadAction<boolean>) {
      state.isLoadingTopics = action.payload;
    },

    setLoadingSubTopics(state, action: PayloadAction<boolean>) {
      state.isLoadingSubTopics = action.payload;
    },

    setShouldOpenSubTopicsDropdown(state, action: PayloadAction<boolean>) {
      state.shouldOpenSubTopicsDropdown = action.payload;
    },

    setCreating(state, action: PayloadAction<boolean>) {
      state.isCreating = action.payload;
    },

    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
      state.isLoadingTopics = false;
      state.isLoadingSubTopics = false;
      state.isCreating = false;
    },

    // Created test
    setCreatedTest(state, action: PayloadAction<Test>) {
      state.createdTest = action.payload;
      state.isCreating = false;
      state.error = null;
    },

    // Set editing test ID
    setEditingTestId(state, action: PayloadAction<string | null>) {
      state.editingTestId = action.payload;
    },

    // Load test data for editing
    loadTestForEdit(state, action: PayloadAction<{
      id: string;
      name: string;
      type: string;
      subject: string;
      topics: string[];
      subTopics: string[];
      difficulty: string;
      totalTime: string;
      totalQuestions: string;
      totalMarks: string;
      correctMarks: string;
      wrongMarks: string;
      unattemptMarks: string;
    }>) {
      const test = action.payload;
      state.editingTestId = test.id;
      state.name = test.name;
      state.type = test.type;
      state.selectedSubjectId = test.subject;
      state.selectedTopicIds = test.topics;
      state.selectedSubTopicIds = test.subTopics;
      state.difficulty = test.difficulty;
      state.totalTime = test.totalTime;
      state.totalQuestions = test.totalQuestions;
      state.totalMarks = test.totalMarks;
      state.correctMarks = test.correctMarks;
      state.wrongMarks = test.wrongMarks;
      state.unattemptMarks = test.unattemptMarks;
    },

    // Reset form fields but keep dropdown data
    resetFormFields(state) {
      state.selectedSubjectId = "";
      state.selectedTopicIds = [];
      state.selectedSubTopicIds = [];
      state.name = "";
      state.type = "chapterwise";
      state.difficulty = "easy";
      state.totalTime = "";
      state.totalQuestions = "";
      state.totalMarks = "";
      state.correctMarks = "5";
      state.wrongMarks = "-1";
      state.unattemptMarks = "0";
      state.createdTest = null;
      state.error = null;
    },

    // Full reset including dropdown data
    resetForm(state) {
      state.selectedSubjectId = "";
      state.selectedTopicIds = [];
      state.selectedSubTopicIds = [];
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
      state.editingTestId = null;
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
  setSelectedTopicIds,
  setSubTopics,
  setSelectedSubTopicIds,
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
  setLoadingTopics,
  setLoadingSubTopics,
  setShouldOpenSubTopicsDropdown,
  setCreating,
  setError,
  setCreatedTest,
  setEditingTestId,
  loadTestForEdit,
  resetForm,
  resetFormFields,
  clearTestCreation,
} = testCreationSlice.actions;

export default testCreationSlice.reducer;
