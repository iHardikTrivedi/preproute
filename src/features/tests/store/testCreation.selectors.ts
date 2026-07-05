import type { RootState } from "@/app/store/rootReducer";

import type { TestCreationState } from "./testCreationSlice";

export const selectTestCreation = (state: RootState): TestCreationState => state.testCreation;

export const selectSubjects = (state: RootState) => selectTestCreation(state).subjects;
export const selectTopics = (state: RootState) => selectTestCreation(state).topics;
export const selectSubTopics = (state: RootState) => selectTestCreation(state).subTopics;

export const selectSelectedSubjectId = (state: RootState) => selectTestCreation(state).selectedSubjectId;
export const selectSelectedTopicIds = (state: RootState) => selectTestCreation(state).selectedTopicIds;
export const selectSelectedSubTopicIds = (state: RootState) => selectTestCreation(state).selectedSubTopicIds;

export const selectName = (state: RootState) => selectTestCreation(state).name;
export const selectType = (state: RootState) => selectTestCreation(state).type;
export const selectDifficulty = (state: RootState) => selectTestCreation(state).difficulty;
export const selectTotalTime = (state: RootState) => selectTestCreation(state).totalTime;
export const selectTotalQuestions = (state: RootState) => selectTestCreation(state).totalQuestions;
export const selectTotalMarks = (state: RootState) => selectTestCreation(state).totalMarks;
export const selectCorrectMarks = (state: RootState) => selectTestCreation(state).correctMarks;
export const selectWrongMarks = (state: RootState) => selectTestCreation(state).wrongMarks;
export const selectUnattemptMarks = (state: RootState) => selectTestCreation(state).unattemptMarks;

export const selectIsLoading = (state: RootState) => selectTestCreation(state).isLoading;
export const selectIsLoadingTopics = (state: RootState) => selectTestCreation(state).isLoadingTopics;
export const selectIsLoadingSubTopics = (state: RootState) => selectTestCreation(state).isLoadingSubTopics;
export const selectIsCreating = (state: RootState) => selectTestCreation(state).isCreating;
export const selectError = (state: RootState) => selectTestCreation(state).error;
export const selectCreatedTest = (state: RootState) => selectTestCreation(state).createdTest;
export const selectShouldOpenSubTopicsDropdown = (state: RootState) => selectTestCreation(state).shouldOpenSubTopicsDropdown;
export const selectEditingTestId = (state: RootState) => selectTestCreation(state).editingTestId;
